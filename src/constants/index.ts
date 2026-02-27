import type {
  NavLink,
  NavIcon,
  DockApp,
  BlogPost,
  TechStackCategory,
  Social,
  PhotoLink,
  GalleryItem,
  Location,
  WindowConfig,
} from "#types";

const navLinks: NavLink[] = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons: NavIcon[] = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps: DockApp[] = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts: BlogPost[] = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack: TechStackCategory[] = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS", "Nativewind"],
  },
  {
    category: "State Management",
    items: ["Zustand", "Redux", "Redux Toolkit"],
  },
  {
    category: "Backend",
    items: ["Express"],
  },
  {
    category: "Database",
    items: ["MongoDB", "Supabase"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub"],
  },
];

const socials: Social[] = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/aniltanriverdiler",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://www.linkedin.com/in/an%C4%B1l-tanr%C4%B1verdiler-31791a23a/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/?lang=tr",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/an%C4%B1l-tanr%C4%B1verdiler-31791a23a/",
  },
];

const photosLinks: PhotoLink[] = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery: GalleryItem[] = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION: Location = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "StayEase Hotel Management System",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-5 left-5",
      windowPosition: "top-[7vh] right-10",
      children: [
        {
          id: 1,
          name: "StayEase Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "StayEase is a full-stack hotel reservation and management platform built as a collaborative internship project.",
            "It lets guests search, filter, and book hotels while owners manage rooms, availability, and reservations from intuitive dashboards.",
            "Real-time chat, reviews, and role-based access control create a production-ready experience for customers, hotel owners, and support teams.",
            "Powered by Next.js, TailwindCSS, Shadcn-ui, Node.js, Prisma, and PostgreSQL, it delivers a modern UI with a secure, scalable backend.",
          ],
        },
        {
          id: 2,
          name: "stayease.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://stayease-hotel-management-system.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "stayease.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/hotel-website.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "MacBook Landing Page",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-28 left-5",
      windowPosition: "top-[24vh] right-10",
      children: [
        {
          id: 1,
          name: "MacBook Landing Page Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "MacBook Landing Page is a modern React + TypeScript product page inspired by Apple's official MacBook Pro experience.",
            "Instead of a static hero, it features an interactive 3D MacBook viewer with color and size controls, plus scroll-driven GSAP animations.",
            "Think of it like a mini Apple product site focused on showcasing design, performance highlights, and smooth storytelling as you scroll.",
            "It's built with Vite, Tailwind CSS, React Three Fiber, Three.js, GSAP, and Zustand to deliver a fast, responsive, and visually polished UI.",
          ],
        },
        {
          id: 2,
          name: "macbook-landing-page.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://macbook-landing-page-apple.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "macbook-landing-page.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/macbook-landing-page.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "OJS Nutrition App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 left-5",
      windowPosition: "top-[41vh] right-10",
      children: [
        {
          id: 1,
          name: "OJS Nutrition App Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "OJS Nutrition is a modern e-commerce platform for premium supplements and nutrition products.",
            "Instead of a simple product grid, it offers rich catalog browsing with categories, filters, reviews, and detailed nutrition data for every item.",
            "Think of it as your personalized online supplement store where you can discover, compare, and manage everything from orders to addresses in one place.",
            "It's built with Next.js, TypeScript, TailwindCSS, and Shadcn/UI, delivering a fast, responsive shopping experience with a polished, modern interface.",
          ],
        },
        {
          id: 2,
          name: "ojs-nutrition-app.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://ojs-nutrition-app.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "ojs-nutrition-app.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/ojs-nutrition-website.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 4
    {
      id: 8,
      name: "Lucid Motion",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-5 left-52",
      windowPosition: "top-[58vh] right-10",
      children: [
        {
          id: 1,
          name: "Lucid Motion Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Lucid Motion is a modern Next.js + TypeScript landing page inspired by Zentry, focused on cinematic animations and interactive video storytelling for gaming experiences.",
            "It showcases GSAP-powered scroll animations, parallax video transitions, and a bento-style layout that highlights metagame worlds, stories, and features.",
            "Sections like Hero, About, Features, Story, and Contact are built with reusable components, Tailwind CSS, and type-safe TypeScript for a polished, responsive UX.",
            "This is an unofficial, fan-made project created for educational purposes only all product names, logos, and branding belong to Zentry.",
          ],
        },
        {
          id: 2,
          name: "lucidmotion.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://lucid-motion.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "lucidmotion.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/zentry-hero.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 5
    {
      id: 9,
      name: "QuickMind Quiz App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-28 left-52",
      windowPosition: "top-[75vh] right-10",
      children: [
        {
          id: 1,
          name: "QuickMind Quiz App Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "QuickMind Quiz App is a React + TypeScript quiz platform built to challenge your knowledge with interactive, timed questions across multiple categories and difficulty levels.",
            "Instead of a basic quiz flow, it provides real-time answer feedback, per-user result tracking with detailed breakdowns, and quiz history analytics with charts and export options.",
            "An achievements system (21+ badges with rarity and progress tracking) plus a global leaderboard adds long-term goals and friendly competition.",
            "Built with Vite, TailwindCSS, Shadcn/UI, React Router, Zustand, and Recharts, it delivers a fast, responsive glassmorphism UI with deep customization via themes and settings.",
          ],
        },
        {
          id: 2,
          name: "quickmindquiz.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://quickmind-quiz-app.netlify.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "quickmind-quiz-app.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/quiz-website.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION: Location = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/adrian.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/adrian-2.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/adrian-3.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/adrian.jpg",
      description: [
        "Hey! I'm Adrian \u{1F44B}, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, React, and Next.js\u2014and I love making things feel smooth, fast, and just a little bit delightful.",
        "I'm big on clean UI, good UX, and writing code that doesn't need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed \u{1F605}",
      ],
    },
  ],
};

const RESUME_LOCATION: Location = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION: Location = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG: WindowConfig = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
