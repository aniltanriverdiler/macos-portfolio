import { create } from "zustand";

export type MailFolder = "inbox" | "sent" | "drafts" | "trash";

export interface MailMessage {
  id: string;
  subject: string;
  body: string;
  sender: { name: string; email: string };
  receiver: { name: string; email: string };
  date: string;
  isRead: boolean;
  folder: MailFolder;
}

interface MailStore {
  mails: MailMessage[];
  activeFolder: MailFolder;
  selectedMailId: string | null;
  composing: boolean;
  setActiveFolder: (folder: MailFolder) => void;
  selectMail: (id: string) => void;
  markAsRead: (id: string) => void;
  deleteMail: (id: string) => void;
  sendMail: (mail: Omit<MailMessage, "id" | "isRead" | "folder" | "date">) => void;
  toggleCompose: () => void;
}

const ME = { name: "Anıl Tanrıverdiler", email: "anil@portfolio.dev" };

const INITIAL_MAILS: MailMessage[] = [
  {
    id: "m1",
    subject: "Frontend Developer Position – Interview Invitation",
    body: `Hi Anıl,\n\nWe were impressed by your portfolio and would love to schedule a technical interview.\n\nThe role involves building modern React applications with TypeScript and working closely with our design team.\n\nPlease let us know your availability for next week.\n\nBest regards,\nSarah Mitchell\nTalent Acquisition`,
    sender: { name: "Sarah Mitchell", email: "sarah@techcorp.io" },
    receiver: ME,
    date: "2026-04-27T09:15:00",
    isRead: false,
    folder: "inbox",
  },
  {
    id: "m2",
    subject: "Re: Project Collaboration – Open Source Dashboard",
    body: `Hey Anıl,\n\nThanks for your interest in contributing to the dashboard project! We'd love to have you on board.\n\nThe stack is React + Zustand + Tailwind — right up your alley. I'll add you to the repo tonight.\n\nCheers,\nMarcus`,
    sender: { name: "Marcus Chen", email: "marcus@devhub.org" },
    receiver: ME,
    date: "2026-04-26T18:42:00",
    isRead: false,
    folder: "inbox",
  },
  {
    id: "m3",
    subject: "Invoice #1042 – April Design System Work",
    body: `Hi Anıl,\n\nPlease find attached the invoice for the design system components delivered in April.\n\nTotal: $2,400\nDue: May 10, 2026\n\nThank you for the great work on the component library. The team loves it.\n\nRegards,\nEmma`,
    sender: { name: "Emma Rodriguez", email: "emma@designstudio.co" },
    receiver: ME,
    date: "2026-04-25T14:30:00",
    isRead: true,
    folder: "inbox",
  },
  {
    id: "m4",
    subject: "Weekly Standup Notes – Sprint 14",
    body: `Team,\n\nHere are the notes from today's standup:\n\n• Auth module: On track, shipping Wednesday\n• Dashboard widgets: Anıl finishing polish this week\n• API migration: 80% complete, needs QA\n\nAction items attached. See you tomorrow!\n\nBest,\nLiam`,
    sender: { name: "Liam Park", email: "liam@startupxyz.com" },
    receiver: ME,
    date: "2026-04-24T10:00:00",
    isRead: true,
    folder: "inbox",
  },
  {
    id: "m5",
    subject: "Your macOS Portfolio is amazing!",
    body: `Hi Anıl,\n\nI came across your macOS-style portfolio and had to reach out. The attention to detail is incredible — the window management, the dock animations, everything feels so polished.\n\nWould you be open to a quick chat? I'm building something similar and would love your advice.\n\nThanks!\nJulia`,
    sender: { name: "Julia Andersen", email: "julia.dev@gmail.com" },
    receiver: ME,
    date: "2026-04-23T21:15:00",
    isRead: true,
    folder: "inbox",
  },
  {
    id: "m6",
    subject: "Conference Talk Proposal Accepted!",
    body: `Dear Anıl,\n\nCongratulations! Your talk proposal "Building Desktop-Grade UIs with React" has been accepted for ReactConf 2026.\n\nYour session is scheduled for June 15 at 2:00 PM. We'll send speaker logistics details soon.\n\nLooking forward to your presentation!\n\nBest,\nConference Committee`,
    sender: { name: "ReactConf Team", email: "speakers@reactconf.dev" },
    receiver: ME,
    date: "2026-04-22T16:00:00",
    isRead: false,
    folder: "inbox",
  },
  {
    id: "m7",
    subject: "Re: Frontend Developer Position – Interview Invitation",
    body: `Hi Sarah,\n\nThank you for reaching out! I'd be happy to schedule an interview.\n\nI'm available Tuesday or Thursday afternoon next week. Let me know what works best.\n\nBest regards,\nAnıl`,
    sender: ME,
    receiver: { name: "Sarah Mitchell", email: "sarah@techcorp.io" },
    date: "2026-04-27T10:30:00",
    isRead: true,
    folder: "sent",
  },
  {
    id: "m8",
    subject: "Portfolio Update – New Activity Monitor Feature",
    body: `Hey Marcus,\n\nJust pushed the Activity Monitor feature to the portfolio. It shows real-time process data based on open windows.\n\nCheck it out and let me know what you think!\n\nCheers,\nAnıl`,
    sender: ME,
    receiver: { name: "Marcus Chen", email: "marcus@devhub.org" },
    date: "2026-04-26T20:00:00",
    isRead: true,
    folder: "sent",
  },
  {
    id: "m9",
    subject: "Draft: React Performance Tips Blog Post",
    body: `# React Performance Optimization Tips\n\n1. Use React.memo for expensive renders\n2. Implement virtualization for long lists\n3. Lazy load routes and heavy components\n4. Optimize re-renders with useMemo/useCallback\n\n[TODO: Add code examples and benchmarks]`,
    sender: ME,
    receiver: ME,
    date: "2026-04-25T22:00:00",
    isRead: true,
    folder: "drafts",
  },
  {
    id: "m10",
    subject: "Draft: Freelance Pricing Update",
    body: `Hi [Client],\n\nI wanted to discuss updating our project rates for Q3. Given the expanded scope of the design system work...\n\n[TODO: Finish pricing details]`,
    sender: ME,
    receiver: { name: "", email: "" },
    date: "2026-04-20T15:00:00",
    isRead: true,
    folder: "drafts",
  },
];

const useMailStore = create<MailStore>((set, get) => ({
  mails: INITIAL_MAILS,
  activeFolder: "inbox",
  selectedMailId: null,
  composing: false,

  setActiveFolder: (folder) =>
    set({ activeFolder: folder, selectedMailId: null }),

  selectMail: (id) => {
    set({ selectedMailId: id });
    const mail = get().mails.find((m) => m.id === id);
    if (mail && !mail.isRead) {
      set((state) => ({
        mails: state.mails.map((m) =>
          m.id === id ? { ...m, isRead: true } : m,
        ),
      }));
    }
  },

  markAsRead: (id) =>
    set((state) => ({
      mails: state.mails.map((m) =>
        m.id === id ? { ...m, isRead: true } : m,
      ),
    })),

  deleteMail: (id) =>
    set((state) => {
      const mail = state.mails.find((m) => m.id === id);
      if (!mail) return state;
      if (mail.folder === "trash") {
        return {
          mails: state.mails.filter((m) => m.id !== id),
          selectedMailId: state.selectedMailId === id ? null : state.selectedMailId,
        };
      }
      return {
        mails: state.mails.map((m) =>
          m.id === id ? { ...m, folder: "trash" as MailFolder } : m,
        ),
        selectedMailId: state.selectedMailId === id ? null : state.selectedMailId,
      };
    }),

  sendMail: (mail) =>
    set((state) => ({
      mails: [
        {
          ...mail,
          id: `m${Date.now()}`,
          isRead: true,
          folder: "sent" as MailFolder,
          date: new Date().toISOString(),
        },
        ...state.mails,
      ],
      composing: false,
    })),

  toggleCompose: () => set((state) => ({ composing: !state.composing })),
}));

export default useMailStore;
