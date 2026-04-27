import { useState, useRef, useEffect, useMemo } from "react";
import {
  Inbox,
  Send,
  FileText,
  Trash2,
  Pencil,
  Search,
  ArrowLeft,
  X,
  ChevronRight,
} from "lucide-react";
import WindowsWrapper from "#hoc/WindowsWrapper";
import WindowControls from "#components/WindowControls";
import useMailStore from "#store/mail";
import type { MailFolder, MailMessage } from "#store/mail";
import useTranslation from "#hooks/useTranslation";

/* ───────── helpers ───────── */

function formatDate(iso: string): string {
  const d = new Date(iso);
  const now = new Date();
  const isToday = d.toDateString() === now.toDateString();
  if (isToday) {
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }
  return d.toLocaleDateString([], { month: "short", day: "numeric" });
}

function preview(body: string, max = 60): string {
  const flat = body.replace(/\n/g, " ").trim();
  return flat.length > max ? flat.slice(0, max) + "…" : flat;
}

function senderInitial(name: string): string {
  return name.charAt(0).toUpperCase();
}

const FOLDER_META: Record<MailFolder, { icon: typeof Inbox; labelEn: string; labelTr: string }> = {
  inbox: { icon: Inbox, labelEn: "Inbox", labelTr: "Gelen Kutusu" },
  sent: { icon: Send, labelEn: "Sent", labelTr: "Gönderilenler" },
  drafts: { icon: FileText, labelEn: "Drafts", labelTr: "Taslaklar" },
  trash: { icon: Trash2, labelEn: "Trash", labelTr: "Çöp" },
};

const FOLDER_COLORS: Record<MailFolder, string> = {
  inbox: "text-blue-500",
  sent: "text-green-500",
  drafts: "text-amber-500",
  trash: "text-red-400",
};

const AVATAR_COLORS = [
  "bg-blue-500",
  "bg-violet-500",
  "bg-emerald-500",
  "bg-rose-500",
  "bg-amber-500",
  "bg-cyan-500",
  "bg-indigo-500",
];

function avatarColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

/* ───────── MailSidebar ───────── */

interface SidebarProps {
  activeFolder: MailFolder;
  onSelectFolder: (f: MailFolder) => void;
  folderCounts: Record<MailFolder, number>;
  unreadCounts: Record<MailFolder, number>;
  onCompose: () => void;
  lang: string;
}

const MailSidebar = ({
  activeFolder,
  onSelectFolder,
  folderCounts,
  unreadCounts,
  onCompose,
  lang,
}: SidebarProps) => {
  const tr = (en: string, trText: string) => (lang === "tr" ? trText : en);

  return (
    <div className="mail-sidebar">
      <button className="mail-compose-btn" onClick={onCompose}>
        <Pencil className="w-3.5 h-3.5" />
        <span>{tr("New Message", "Yeni Mesaj")}</span>
      </button>

      <span className="mail-sidebar-label">
        {tr("Mailboxes", "Posta Kutuları")}
      </span>

      <div className="mail-sidebar-nav">
        {(Object.keys(FOLDER_META) as MailFolder[]).map((key) => {
          const meta = FOLDER_META[key];
          const Icon = meta.icon;
          const active = activeFolder === key;
          const count = key === "inbox" ? unreadCounts[key] : folderCounts[key];

          return (
            <button
              key={key}
              className={`mail-folder-btn ${active ? "mail-folder-active" : ""}`}
              onClick={() => onSelectFolder(key)}
            >
              <Icon className={`w-4 h-4 ${active ? FOLDER_COLORS[key] : ""}`} />
              <span className="flex-1 text-left">
                {lang === "tr" ? meta.labelTr : meta.labelEn}
              </span>
              {count > 0 && (
                <span className={`mail-folder-badge ${key === "inbox" && unreadCounts.inbox > 0 ? "mail-badge-blue" : ""}`}>
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

/* ───────── MailItem ───────── */

interface MailItemProps {
  mail: MailMessage;
  isActive: boolean;
  onClick: () => void;
  showSender: boolean;
}

const MailItem = ({ mail, isActive, onClick, showSender }: MailItemProps) => {
  const displayName = showSender ? mail.sender.name : mail.receiver.name;

  return (
    <button
      className={`mail-item ${isActive ? "mail-item-active" : ""} ${!mail.isRead ? "mail-item-unread" : ""}`}
      onClick={onClick}
    >
      <div className={`mail-avatar ${avatarColor(displayName)}`}>
        {senderInitial(displayName)}
      </div>
      <div className="mail-item-content">
        <div className="mail-item-top">
          <span className="mail-item-sender">{displayName}</span>
          <span className="mail-item-date">{formatDate(mail.date)}</span>
        </div>
        <span className="mail-item-subject">{mail.subject}</span>
        <span className="mail-item-preview">{preview(mail.body)}</span>
      </div>
      {!mail.isRead && <div className="mail-unread-dot" />}
    </button>
  );
};

/* ───────── MailList ───────── */

interface MailListProps {
  mails: MailMessage[];
  selectedMailId: string | null;
  onSelect: (id: string) => void;
  activeFolder: MailFolder;
  lang: string;
}

const MailList = ({ mails, selectedMailId, onSelect, activeFolder, lang }: MailListProps) => {
  const [search, setSearch] = useState("");
  const tr = (en: string, trText: string) => (lang === "tr" ? trText : en);
  const showSender = activeFolder !== "sent";

  const filtered = useMemo(() => {
    if (!search.trim()) return mails;
    const q = search.toLowerCase();
    return mails.filter(
      (m) =>
        m.subject.toLowerCase().includes(q) ||
        m.sender.name.toLowerCase().includes(q) ||
        m.body.toLowerCase().includes(q),
    );
  }, [mails, search]);

  return (
    <div className="mail-list">
      <div className="mail-list-header">
        <div className="mail-search">
          <Search className="w-3.5 h-3.5 text-gray-400" />
          <input
            type="text"
            placeholder={tr("Search mail…", "Mail ara…")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="mail-list-scroll">
        {filtered.length === 0 ? (
          <div className="mail-empty">
            <span>{tr("No messages", "Mesaj yok")}</span>
          </div>
        ) : (
          filtered.map((mail) => (
            <MailItem
              key={mail.id}
              mail={mail}
              isActive={selectedMailId === mail.id}
              onClick={() => onSelect(mail.id)}
              showSender={showSender}
            />
          ))
        )}
      </div>
    </div>
  );
};

/* ───────── MailDetail ───────── */

interface MailDetailProps {
  mail: MailMessage | null;
  onDelete: (id: string) => void;
  onBack: () => void;
  lang: string;
}

const MailDetail = ({ mail, onDelete, onBack, lang }: MailDetailProps) => {
  const tr = (en: string, trText: string) => (lang === "tr" ? trText : en);

  if (!mail) {
    return (
      <div className="mail-detail mail-detail-empty">
        <div className="mail-empty-state">
          <Inbox className="w-10 h-10 text-gray-300 dark:text-gray-600" />
          <span>{tr("No message selected", "Mesaj seçilmedi")}</span>
        </div>
      </div>
    );
  }

  const d = new Date(mail.date);
  const fullDate = d.toLocaleDateString([], {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="mail-detail">
      <div className="mail-detail-header">
        <button className="mail-back-btn" onClick={onBack}>
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div className="flex-1" />
        <button
          className="mail-delete-btn"
          onClick={() => onDelete(mail.id)}
          title={tr("Delete", "Sil")}
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      <div className="mail-detail-scroll">
        <p className="mail-detail-subject">{mail.subject}</p>

        <div className="mail-detail-meta">
          <div className={`mail-avatar-lg ${avatarColor(mail.sender.name)}`}>
            {senderInitial(mail.sender.name)}
          </div>
          <div className="mail-detail-meta-text">
            <div className="mail-detail-sender-row">
              <span className="mail-detail-sender-name">{mail.sender.name}</span>
              <span className="mail-detail-date">{fullDate}</span>
            </div>
            <span className="mail-detail-email">
              {tr("To", "Kime")}: {mail.receiver.name || mail.receiver.email}
            </span>
          </div>
        </div>

        <div className="mail-detail-body">
          {mail.body.split("\n").map((line, i) => (
            <p key={i}>{line || "\u00A0"}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ───────── ComposeMail ───────── */

interface ComposeProps {
  onSend: (mail: Omit<MailMessage, "id" | "isRead" | "folder" | "date">) => void;
  onClose: () => void;
  lang: string;
}

const ComposeMail = ({ onSend, onClose, lang }: ComposeProps) => {
  const tr = (en: string, trText: string) => (lang === "tr" ? trText : en);
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const toRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    toRef.current?.focus();
  }, []);

  const handleSend = () => {
    if (!to.trim() || !subject.trim()) return;
    onSend({
      subject,
      body,
      sender: { name: "Anıl Tanrıverdiler", email: "anil@portfolio.dev" },
      receiver: { name: to, email: to },
    });
  };

  return (
    <div className="mail-compose-overlay">
      <div className="mail-compose">
        <div className="mail-compose-header">
          <span className="mail-compose-title">{tr("New Message", "Yeni Mesaj")}</span>
          <button className="mail-compose-close" onClick={onClose}>
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="mail-compose-fields">
          <div className="mail-compose-row">
            <label>{tr("To", "Kime")}:</label>
            <input ref={toRef} value={to} onChange={(e) => setTo(e.target.value)} />
          </div>
          <div className="mail-compose-row">
            <label>{tr("Subject", "Konu")}:</label>
            <input value={subject} onChange={(e) => setSubject(e.target.value)} />
          </div>
        </div>

        <textarea
          className="mail-compose-body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder={tr("Write your message…", "Mesajınızı yazın…")}
        />

        <div className="mail-compose-footer">
          <button className="mail-send-btn" onClick={handleSend}>
            <Send className="w-3.5 h-3.5" />
            <span>{tr("Send", "Gönder")}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

/* ───────── Main Mail Component ───────── */

const Mail = () => {
  const {
    mails,
    activeFolder,
    selectedMailId,
    composing,
    setActiveFolder,
    selectMail,
    deleteMail,
    sendMail,
    toggleCompose,
  } = useMailStore();
  const { lang } = useTranslation();

  const folderMails = useMemo(
    () =>
      mails
        .filter((m) => m.folder === activeFolder)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [mails, activeFolder],
  );

  const selectedMail = useMemo(
    () => mails.find((m) => m.id === selectedMailId) ?? null,
    [mails, selectedMailId],
  );

  const folderCounts = useMemo(() => {
    const counts: Record<MailFolder, number> = { inbox: 0, sent: 0, drafts: 0, trash: 0 };
    mails.forEach((m) => counts[m.folder]++);
    return counts;
  }, [mails]);

  const unreadCounts = useMemo(() => {
    const counts: Record<MailFolder, number> = { inbox: 0, sent: 0, drafts: 0, trash: 0 };
    mails.forEach((m) => { if (!m.isRead) counts[m.folder]++; });
    return counts;
  }, [mails]);

  const handleBack = () => {
    if (selectedMailId) {
      useMailStore.setState({ selectedMailId: null });
    }
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="mail" />
        <h2>
          Mail
          {activeFolder !== "inbox" && (
            <>
              <ChevronRight className="inline w-3 h-3 mx-1 opacity-40" />
              <span className="opacity-60">
                {lang === "tr" ? FOLDER_META[activeFolder].labelTr : FOLDER_META[activeFolder].labelEn}
              </span>
            </>
          )}
        </h2>
      </div>

      <div className="mail-body">
        <MailSidebar
          activeFolder={activeFolder}
          onSelectFolder={setActiveFolder}
          folderCounts={folderCounts}
          unreadCounts={unreadCounts}
          onCompose={toggleCompose}
          lang={lang}
        />

        <MailList
          mails={folderMails}
          selectedMailId={selectedMailId}
          onSelect={selectMail}
          activeFolder={activeFolder}
          lang={lang}
        />

        <MailDetail
          mail={selectedMail}
          onDelete={deleteMail}
          onBack={handleBack}
          lang={lang}
        />

        {composing && (
          <ComposeMail onSend={sendMail} onClose={toggleCompose} lang={lang} />
        )}
      </div>
    </>
  );
};

const MailWindow = WindowsWrapper(Mail, "mail");

export default MailWindow;
