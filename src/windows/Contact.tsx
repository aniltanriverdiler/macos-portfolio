import { useState } from "react";
import { socials } from "#constants/index";
import WindowsWrapper from "#hoc/WindowsWrapper";
import WindowControls from "#components/WindowControls";
import useTranslation from "#hooks/useTranslation";
import { Mail, ArrowUpRight, MapPin, Clock, Copy, Check } from "lucide-react";

const Contact = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    await navigator.clipboard.writeText("tanriverdileranil@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>{t("contact.title")}</h2>
      </div>

      <div className="contact-body">
        {/* Hero */}
        <div className="contact-hero">
          <div className="relative shrink-0">
            <img src="/images/anil.jpg" alt="Anil" className="contact-avatar" />
            <div className="contact-avatar-dot" />
          </div>
          <div className="contact-hero-text">
            <div className="contact-status-badge">
              <span className="contact-status-dot" />
              {t("contact.available")}
            </div>
            <h3>{t("contact.getInTouch")}</h3>
            <p>{t("contact.description")}</p>
          </div>
        </div>

        {/* Info row: location + response time */}
        <div className="contact-info-row">
          <div className="contact-info-chip">
            <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            <span>{t("contact.location")}</span>
          </div>
          <div className="contact-info-chip">
            <Clock className="w-3.5 h-3.5 text-green-500 shrink-0" />
            <span>{t("contact.responseTime")}</span>
          </div>
        </div>

        {/* Email */}
        <div className="contact-section-label">{t("contact.emailLabel")}</div>
        <div className="contact-email-row">
          <div className="contact-email-icon">
            <Mail className="w-4 h-4 text-blue-500" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="contact-email-value">tanriverdileranil@gmail.com</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="contact-copy-btn"
              title={t("contact.copyEmail")}
            >
              {copied
                ? <Check className="w-3.5 h-3.5 text-green-500" />
                : <Copy className="w-3.5 h-3.5" />
              }
            </button>
            <a
              href="mailto:tanriverdileranil@gmail.com"
              className="contact-mail-btn"
              title="Open mail client"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Socials */}
        <div className="contact-section-label">{t("contact.followLabel")}</div>
        <div className="contact-socials">
          {socials.map(({ id, bg, link, icon, text }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-card"
              style={{ "--social-bg": bg } as React.CSSProperties}
            >
              <div className="contact-social-icon-wrap">
                <img src={icon} alt={text} className="size-5 brightness-0 invert" />
              </div>
              <span className="contact-social-label">{text}</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70 ml-auto shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

const ContactWindow = WindowsWrapper(Contact, "contact");

export default ContactWindow;
