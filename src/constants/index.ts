import type {
  NavLink,
  NavIcon,
  DockApp,
  TechStackCategory,
  Social,
  PhotoLink,
  GalleryItem,
  SafariLink,
  Location,
  LocationChild,
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
    name: "Safari", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "app-store",
    name: "App Store",
    icon: "app-store.png",
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
    id: "github",
    name: "Github",
    icon: "github.png",
    canOpen: true,
    href: "https://github.com/aniltanriverdiler",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: "linkedin-2.png",
    canOpen: true,
    href: "https://www.linkedin.com/in/an%C4%B1l-tanr%C4%B1verdiler-31791a23a/",
  },
  {
    id: "spotify",
    name: "Spotify",
    icon: "spotify-light.png",
    canOpen: true,
  },
  {
    id: "settings",
    name: "Settings",
    icon: "settings.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const safariSocialsLinks: SafariLink[] = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/an%C4%B1l-tanr%C4%B1verdiler-31791a23a/",
    icon: "/images/linkedin.png",
  },
  {
    title: "GitHub",
    url: "https://github.com/aniltanriverdiler",
    icon: "/images/github.png",
  },
  {
    title: "YouTube",
    url: "https://www.youtube.com/",
    icon: "/images/youtube.png",
  },
  {
    title: "Email",
    url: "mailto:tanriverdileranil@gmail.com",
    icon: "/images/mail.png",
  },
];

const frequentlyVisited: SafariLink[] = [
  {
    title: "GitHub",
    url: "https://github.com",
    icon: "/images/github.png",
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com",
    icon: "/images/linkedin.png",
  },
  {
    title: "YouTube",
    url: "https://youtube.com",
    icon: "/images/youtube.png",
  },
  {
    title: "Reddit",
    url: "https://reddit.com",
    icon: "/images/reddit.png",
  },
  {
    title: "ChatGPT",
    url: "https://chatgpt.com",
    icon: "/images/chatgpt.png",
  },
  {
    title: "Gemini",
    url: "https://gemini.google.com/app?hl=tr",
    icon: "/images/gemini.webp",
  },
  {
    title: "Stack Overflow",
    url: "https://stackoverflow.com",
    icon: "/images/stackoverflow.png",
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
    img: "/images/gal-1.jpg",
  },
  {
    id: 2,
    img: "/images/gal-2.png",
  },
  {
    id: 3,
    img: "/images/gal-3.jpg",
  },
  {
    id: 4,
    img: "/images/gal-4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  safariSocialsLinks,
  frequentlyVisited,
  techStack,
  socials,
  photosLinks,
  gallery,
};

// ─── Web Projects ────────────────────────────────────────────────────────────
// Add new web projects as children of WEB_PROJECTS below.
const WEB_PROJECTS: LocationChild = {
  id: 20,
  name: "Web Projects",
  name_tr: "Web Projeleri",
  icon: "/images/folder.png",
  kind: "folder",
  position: "top-[10%] left-[10%]",
  children: [
    // ▶ Web Project 1
    {
      id: 5,
      name: "StayEase Hotel Management System",
      name_tr: "StayEase Otel Yönetim Sistemi",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[8%] left-[3%]",
      windowPosition: "top-[7vh] right-10",
      children: [
        {
          id: 1,
          name: "StayEase Project.txt",
          name_tr: "StayEase Projesi.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-7 left-10",
          description: [
            "StayEase is a full-stack hotel reservation and management platform built as a collaborative internship project.",
            "It lets guests search, filter, and book hotels while owners manage rooms, availability, and reservations from intuitive dashboards.",
            "Real-time chat, reviews, and role-based access control create a production-ready experience for customers, hotel owners, and support teams.",
            "Powered by Next.js, TailwindCSS, Shadcn-ui, Node.js, Prisma, and PostgreSQL, it delivers a modern UI with a secure, scalable backend.",
          ],
          description_tr: [
            "StayEase, ortak bir staj projesi olarak geliştirilen full-stack bir otel rezervasyon ve yönetim platformudur.",
            "Misafirlerin otel aramasına, filtrelemesine ve rezervasyon yapmasına olanak tanırken, otel sahipleri sezgisel panellerden odaları, müsaitliği ve rezervasyonları yönetebilir.",
            "Gerçek zamanlı sohbet, değerlendirmeler ve rol tabanlı erişim kontrolü; müşteriler, otel sahipleri ve destek ekipleri için üretime hazır bir deneyim sunar.",
            "Next.js, TailwindCSS, Shadcn-ui, Node.js, Prisma ve PostgreSQL ile güçlendirilmiş olup güvenli ve ölçeklenebilir bir backend ile modern bir arayüz sunar.",
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
          position: "top-52 right-90",
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
        {
          id: 6,
          name: "Source Code.git",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/aniltanriverdiler/hotel-management-system.git",
          position: "top-85 right-55",
        },
      ],
    },

    // ▶ Web Project 2
    {
      id: 6,
      name: "MacBook Landing Page",
      name_tr: "MacBook Tanıtım Sayfası",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[20%] left-[35%]",
      windowPosition: "top-[24vh] right-10",
      children: [
        {
          id: 1,
          name: "MacBook Landing Page Project.txt",
          name_tr: "MacBook Tanıtım Sayfası Projesi.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-15 right-10",
          description: [
            "MacBook Landing Page is a modern React + TypeScript product page inspired by Apple's official MacBook Pro experience.",
            "Instead of a static hero, it features an interactive 3D MacBook viewer with color and size controls, plus scroll-driven GSAP animations.",
            "Think of it like a mini Apple product site focused on showcasing design, performance highlights, and smooth storytelling as you scroll.",
            "It's built with Vite, Tailwind CSS, React Three Fiber, Three.js, GSAP, and Zustand to deliver a fast, responsive, and visually polished UI.",
          ],
          description_tr: [
            "MacBook Landing Page, Apple'ın resmi MacBook Pro deneyiminden ilham alan modern bir React + TypeScript ürün sayfasıdır.",
            "Statik bir hero yerine, renk ve boyut kontrolleri ile etkileşimli bir 3D MacBook görüntüleyici ve scroll ile tetiklenen GSAP animasyonları sunar.",
            "Tasarım, performans vurguları ve akıcı hikaye anlatımını sergilemeye odaklanan mini bir Apple ürün sitesi gibi düşünebilirsiniz.",
            "Vite, Tailwind CSS, React Three Fiber, Three.js, GSAP ve Zustand ile geliştirilmiş olup hızlı, duyarlı ve görsel açıdan cilalı bir arayüz sunar.",
          ],
        },
        {
          id: 2,
          name: "macbook-landing-page.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://macbook-landing-page-apple.vercel.app/",
          position: "top-30 left-20",
        },
        {
          id: 4,
          name: "macbook-landing-page.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-62 left-80",
          imageUrl: "/images/macbook-landing-page.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/",
          position: "top-75 left-5",
        },
        {
          id: 6,
          name: "Source Code.git",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/aniltanriverdiler/macbook-landing-page.git",
          position: "top-95 right-60",
        },
      ],
    },

    // ▶ Web Project 3
    {
      id: 7,
      name: "OJS Nutrition App",
      name_tr: "OJS Beslenme Uygulaması",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[62%] left-[2%]",
      windowPosition: "top-[41vh] right-10",
      children: [
        {
          id: 1,
          name: "OJS Nutrition App Project.txt",
          name_tr: "OJS Beslenme Uygulaması Projesi.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-8 left-16",
          description: [
            "OJS Nutrition is a modern e-commerce platform for premium supplements and nutrition products.",
            "Instead of a simple product grid, it offers rich catalog browsing with categories, filters, reviews, and detailed nutrition data for every item.",
            "Think of it as your personalized online supplement store where you can discover, compare, and manage everything from orders to addresses in one place.",
            "It's built with Next.js, TypeScript, TailwindCSS, and Shadcn/UI, delivering a fast, responsive shopping experience with a polished, modern interface.",
          ],
          description_tr: [
            "OJS Nutrition, premium takviyeler ve beslenme ürünleri için modern bir e-ticaret platformudur.",
            "Basit bir ürün ızgarası yerine, kategoriler, filtreler, değerlendirmeler ve her ürün için detaylı beslenme verileri ile zengin katalog taraması sunar.",
            "Siparişlerden adreslere kadar her şeyi tek bir yerde keşfedebileceğiniz, karşılaştırabileceğiniz ve yönetebileceğiniz kişiselleştirilmiş bir çevrimiçi takviye mağazası olarak düşünebilirsiniz.",
            "Next.js, TypeScript, TailwindCSS ve Shadcn/UI ile geliştirilmiş olup cilalı, modern bir arayüz ile hızlı ve duyarlı bir alışveriş deneyimi sunar.",
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
          position: "top-70 right-85",
          imageUrl: "/images/ojs-nutrition-website.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/",
          position: "top-46 right-25",
        },
        {
          id: 6,
          name: "Source Code.git",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/aniltanriverdiler/ojs-nutrition-app.git",
          position: "top-85 right-40",
        },
      ],
    },

    // ▶ Web Project 4
    {
      id: 8,
      name: "Lucid Motion",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[11%] left-[66%]",
      windowPosition: "top-[58vh] right-10",
      children: [
        {
          id: 1,
          name: "Lucid Motion Project.txt",
          name_tr: "Lucid Motion Projesi.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-15 left-15",
          description: [
            "Lucid Motion is a modern Next.js + TypeScript landing page inspired by Zentry, focused on cinematic animations and interactive video storytelling for gaming experiences.",
            "It showcases GSAP-powered scroll animations, parallax video transitions, and a bento-style layout that highlights metagame worlds, stories, and features.",
            "Sections like Hero, About, Features, Story, and Contact are built with reusable components, Tailwind CSS, and type-safe TypeScript for a polished, responsive UX.",
            "This is an unofficial, fan-made project created for educational purposes only all product names, logos, and branding belong to Zentry.",
          ],
          description_tr: [
            "Lucid Motion, Zentry'den ilham alan, sinematik animasyonlar ve oyun deneyimleri için etkileşimli video hikaye anlatımına odaklanan modern bir Next.js + TypeScript landing sayfasıdır.",
            "GSAP destekli scroll animasyonları, parallax video geçişleri ve metagame dünyalarını, hikayeleri ve özellikleri öne çıkaran bento tarzı bir düzen sergiler.",
            "Hero, Hakkında, Özellikler, Hikaye ve İletişim gibi bölümler; yeniden kullanılabilir bileşenler, Tailwind CSS ve tip güvenli TypeScript ile cilalı, duyarlı bir UX sunar.",
            "Bu, yalnızca eğitim amaçlı oluşturulmuş resmi olmayan, hayran yapımı bir projedir — tüm ürün adları, logolar ve markalar Zentry'ye aittir.",
          ],
        },
        {
          id: 2,
          name: "lucidmotion.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://lucid-motion.vercel.app/",
          position: "top-10 right-25",
        },
        {
          id: 4,
          name: "lucidmotion.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-60 right-85",
          imageUrl: "/images/zentry-hero.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/",
          position: "top-55 right-25",
        },
        {
          id: 6,
          name: "Source Code.git",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/aniltanriverdiler/lucid-motion.git",
          position: "top-85 right-50",
        },
      ],
    },

    // ▶ Web Project 5
    {
      id: 9,
      name: "QuickMind Quiz App",
      name_tr: "QuickMind Bilgi Yarışması",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[40%] left-[65%]",
      windowPosition: "top-[75vh] right-10",
      children: [
        {
          id: 1,
          name: "QuickMind Quiz App Project.txt",
          name_tr: "QuickMind Bilgi Yarışması Projesi.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-18 left-10",
          description: [
            "QuickMind Quiz App is a React + TypeScript quiz platform built to challenge your knowledge with interactive, timed questions across multiple categories and difficulty levels.",
            "Instead of a basic quiz flow, it provides real-time answer feedback, per-user result tracking with detailed breakdowns, and quiz history analytics with charts and export options.",
            "An achievements system (21+ badges with rarity and progress tracking) plus a global leaderboard adds long-term goals and friendly competition.",
            "Built with Vite, TailwindCSS, Shadcn/UI, React Router, Zustand, and Recharts, it delivers a fast, responsive glassmorphism UI with deep customization via themes and settings.",
          ],
          description_tr: [
            "QuickMind Quiz App, birden fazla kategori ve zorluk seviyesinde etkileşimli, süreli sorularla bilginizi test eden bir React + TypeScript quiz platformudur.",
            "Basit bir quiz akışı yerine, gerçek zamanlı cevap geri bildirimi, detaylı dökümlerle kullanıcı bazlı sonuç takibi ve grafikler ile dışa aktarma seçenekleri sunan quiz geçmişi analitiği sağlar.",
            "Bir başarı sistemi (nadirllik ve ilerleme takibi ile 21+ rozet) ve global sıralama tablosu, uzun vadeli hedefler ve dostça bir rekabet ortamı ekler.",
            "Vite, TailwindCSS, Shadcn/UI, React Router, Zustand ve Recharts ile geliştirilmiş olup tema ve ayarlar ile derin özelleştirme sunan hızlı, duyarlı bir glassmorphism arayüzü sunar.",
          ],
        },
        {
          id: 2,
          name: "quickmindquiz.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://quickmind-quiz-app.netlify.app/",
          position: "top-20 right-15",
        },
        {
          id: 4,
          name: "quickmind-quiz-app.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-66 right-85",
          imageUrl: "/images/quiz-website.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/",
          position: "top-60 right-12",
        },
        {
          id: 6,
          name: "Source Code.git",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/aniltanriverdiler/quickmind-quiz.git",
          position: "top-85 right-40",
        },
      ],
    },

    // ▶ Web Project 6
    {
      id: 10,
      name: "Velvet Elixir",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[45%] left-[25%]",
      windowPosition: "top-[75vh] right-10",
      children: [
        {
          id: 1,
          name: "Velvet Elixir Project.txt",
          name_tr: "Velvet Elixir Projesi.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-26 left-20",
          description: [
            "Designed as an immersive digital showcase, Velvet Elixir transforms a cocktail bar concept into a motion-first, scroll-driven web experience built with React 19 and TypeScript.",
            "Rather than relying on static sections, the site uses advanced GSAP animations including SplitText reveals, ScrollTrigger-driven transitions, parallax layers, and scroll-synced pinned video to create a fluid, immersive journey.",
            "The codebase is structured with strict TypeScript typing, centralized data models, and clearly separated components to ensure scalability, maintainability, and production-level reliability.",
            "Powered by Vite 7 and styled with Tailwind CSS 4, the project delivers fast builds, responsive layouts, and a polished UI optimized for both performance and visual impact.",
          ],
          description_tr: [
            "Sürükleyici bir dijital vitrin olarak tasarlanan Velvet Elixir, bir kokteyl bar konseptini React 19 ve TypeScript ile oluşturulmuş, hareket öncelikli, scroll ile tetiklenen bir web deneyimine dönüştürür.",
            "Statik bölümlere güvenmek yerine site; SplitText açılışları, ScrollTrigger ile tetiklenen geçişler, parallax katmanları ve scroll ile senkronize sabitlenmiş video dahil gelişmiş GSAP animasyonları kullanarak akıcı, sürükleyici bir yolculuk yaratır.",
            "Kod tabanı; ölçeklenebilirlik, sürdürülebilirlik ve üretim düzeyinde güvenilirlik sağlamak için katı TypeScript tipleri, merkezileştirilmiş veri modelleri ve net ayrılmış bileşenlerle yapılandırılmıştır.",
            "Vite 7 ile güçlendirilmiş ve Tailwind CSS 4 ile stillendirilmiş proje; hızlı derlemeler, duyarlı düzenler ve hem performans hem de görsel etki için optimize edilmiş cilalı bir arayüz sunar.",
          ],
        },
        {
          id: 2,
          name: "velvetelixir.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://velvet-elixir.vercel.app/",
          position: "top-30 right-15",
        },
        {
          id: 4,
          name: "velvet-elixir.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-80 right-85",
          imageUrl: "/images/velvet-elixir.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/",
          position: "top-70 right-37",
        },
        {
          id: 6,
          name: "Source Code.git",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/aniltanriverdiler/velvet-elixir.git",
          position: "top-5 right-50",
        },
      ],
    },
  ],
};

// ─── Mobile Projects ──────────────────────────────────────────────────────────
// Add new mobile projects as children of MOBILE_PROJECTS below.
const MOBILE_PROJECTS: LocationChild = {
  id: 21,
  name: "Mobile Projects",
  name_tr: "Mobil Projeler",
  icon: "/images/folder.png",
  kind: "folder",
  position: "top-[40%] left-[40%]",
  children: [
    // ▶ Mobile Project 1
    {
      id: 11,
      name: "CartHub",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[15%] left-[15%]",
      windowPosition: "top-[75vh] right-10",
      children: [
        {
          id: 1,
          name: "CartHub Project.txt",
          name_tr: "CartHub Projesi.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-40 left-20",
          description: [
            "CartHub — Plan smarter. Shop happier.Is a cross-platform grocery planning app built with Expo and React Native. Sign in with your preferred provider, manage your list, plan items, and see insights all in one place.",
            "Authentication uses Clerk with social sign-in (Google, GitHub, Apple) and an onboarding-style welcome screen. The grocery list browses and updates items synced via server API routes; the Planner adds and organizes items with categories and priorities; Insights surfaces summary views for stats, categories, and priorities, with optional feedback via Sentry.",
            "The data layer uses Neon Postgres with Drizzle ORM, plus a seed script for sample grocery data.",
            "The stack includes Expo ~55, React 19, Expo Router (file-based routing), NativeWind (Tailwind for React Native), Zustand for client-side grocery state, and typed routes ready for iOS, Android, and web.",
          ],
          description_tr: [
            "CartHub — Daha akıllı planla, daha mutlu alışveriş yap. — Expo ve React Native ile geliştirilmiş, platformlar arası bir market planlama uygulamasıdır. Tercih ettiğiniz platform ile giriş yapın, listenizi yönetin, ürünleri planlayın ve öngörüleri tek yerde görün.",
            "Kimlik doğrulama; Google, GitHub ve Apple ile sosyal giriş sunan Clerk ve onboarding tarzı bir karşılama ekranı kullanır. Market listesi sunucu API rotalarıyla senkronize güncellenir; Planlayıcı ürünleri kategori ve önceliklere göre ekler ve düzenler; Öngörüler istatistik, kategori ve öncelik özetleri sunar; isteğe bağlı Sentry geri bildirimi desteklenir.",
            "Veri katmanı Neon Postgres ve Drizzle ORM kullanır; örnek veri için seed betiği bulunur.",
            "Teknolojiler; Expo ~55, React 19, dosya tabanlı yönlendirme için Expo Router, React Native için Tailwind olan NativeWind, market verisi için istemci tarafında Zustand ve tip güvenli rotalar içerir — iOS, Android ve web için hazırdır.",
          ],
        },
        {
          id: 2,
          name: "carthub.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/aniltanriverdiler/cart-hub-expo",
          position: "top-65 right-25",
        },
        {
          id: 4,
          name: "carthub.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-105 right-85",
          imageUrl: "/images/carthub-login.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/",
          position: "top-110 right-25",
        },
        {
          id: 6,
          name: "Source Code.git",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/aniltanriverdiler/cart-hub-expo.git",
          position: "top-25 right-40",
        },
      ],
    },

    // ▶ Mobile Project 2
    {
      id: 12,
      name: "Movie Scope App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-[40%] left-[40%]",
      windowPosition: "top-[75vh] right-10",
      children: [
        {
          id: 1,
          name: "Movie Scope App Project.txt",
          name_tr: "Movie Scope App Projesi.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-32 right-25",
          description: [
            "Movie Scope is a small Expo + React Native app for finding films, keeping a personal library, and seeing how your taste adds up without jumping between a dozen apps.",
            "Home pulls trending rows (backed by Appwrite) and a grid of what’s new; search hits TMDB with a short debounce so results don’t flicker while you type. Open a title and you get the usual poster, overview, and scores, plus buttons to favorite it, queue it, or mark it watched.",
            "The Save tab splits into favorites, watchlist, and watched sortable lists, a few stats, and a horizontal strip of what you opened recently. Profile rounds it out with counts, a simple “progress” streak, preferences, and optional profile photo from the gallery.",
            "State lives in Redux Toolkit with AsyncStorage underneath a thin custom hydrate layer does the job without redux-persist. NativeWind v4 keeps the UI dark and quiet. Expo Router handles tabs and stack routes; detail screens live under movie/[id].",
          ],
          description_tr: [
            "Movie Scope, film bulmak, kendi listeni tutmak ve izlediklerini tek yerde görmek için yazılmış küçük bir Expo + React Native uygulaması; sürekli başka uygulamalara zıplamadan işi toparlamak için.",
            "Ana ekranda Appwrite ile trend satırları ve yeniler ızgarası var; arama TMDB’ye gider, kısa bir debounce ile yazarken sonuçlar titremesin. Filme girince özet, puanlar ve favori / izleme listesi / izlendi aksiyonları çıkıyor.",
            "Kaydet sekmesinde favoriler, izleme listesi ve izlenenler ayrılıyor; sıralama, birkaç istatistik ve son baktığın filmler için yatay akış var. Profilde sayılar, basit bir ilerleme hissi, tercihler ve galeriden opsiyonel foto.",
            "Durum Redux Toolkit’te; AsyncStorage ile kalıcı, redux-persist yerine küçük bir hydrate katmanı var. Arayüz NativeWind v4 ile koyu ve sade. Expo Router sekmeler ve stack; detaylar movie/[id] altında.",
          ],
        },
        {
          id: 2,
          name: "movie-scope-app.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/aniltanriverdiler/movie-scope-app.git",
          position: "top-30 right-85",
        },
        {
          id: 4,
          name: "movie-app.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-80 right-15",
          imageUrl: "/images/movie-app-2.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://www.figma.com/",
          position: "top-70 right-75",
        },
        {
          id: 6,
          name: "Source Code.git",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/aniltanriverdiler/movie-scope-app.git",
          position: "top-120 right-50",
        },
      ],
    },
  ],
};

// ─── Work Location (Projects root) ───────────────────────────────────────────
// Desktop shows a single "Projects" folder. Inside: Web Projects + Mobile Projects.
const WORK_LOCATION: Location = {
  id: 1,
  type: "work",
  name: "Work",
  name_tr: "Projeler",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [WEB_PROJECTS, MOBILE_PROJECTS],
};

const ABOUT_LOCATION: Location = {
  id: 2,
  type: "about",
  name: "About me",
  name_tr: "Hakkımda",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      name_tr: "ben.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/anil-4.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      name_tr: "günlük-ben.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-62",
      imageUrl: "/images/anil-2.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      name_tr: "konferans-ben.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/anil-3.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      name_tr: "hakkımda.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-65 left-5",
      subtitle: "Meet the Developer Behind the Code",
      subtitle_tr: "Kodun Arkasındaki Geliştiriciyle Tanışın",
      image: "/images/anil-6.jpg",
      description: [
        "Hi, I’m Anıl 👋. I’m a frontend developer who enjoys building modern, interactive, and detail-driven web experiences.",
        "I work mainly with JavaScript, React, and Next.js, focusing on interfaces that feel smooth, fast, and intentional.",
        "I care about performance, clean architecture, and scalable code. I don’t write code that scares me three weeks later 😄.",
        "In the future, I aim to grow across web, mobile, and backend development to build more complete and well-rounded systems.",
        "When I’m not coding, you’ll probably find me lost in design refinements at midnight, sipping freshly ground coffee, planning my next setup upgrade, or listening to metal while mapping out future projects ☕🎧",
      ],
      description_tr: [
        "Merhaba, ben Anıl 👋. Modern, etkileşimli ve detay odaklı web deneyimleri oluşturmaktan keyif alan bir frontend geliştiriciyim.",
        "Ağırlıklı olarak JavaScript, React ve Next.js ile çalışıyorum; akıcı, hızlı ve bilinçli hissettiren arayüzlere odaklanıyorum.",
        "Performans, temiz mimari ve ölçeklenebilir kod benim için önemli. Üç hafta sonra beni korkutacak kod yazmıyorum 😄.",
        "Gelecekte web, mobil ve backend geliştirme alanlarında büyüyerek daha eksiksiz ve çok yönlü sistemler kurmayı hedefliyorum.",
        "Kod yazmadığım zamanlarda muhtemelen beni gece yarısı tasarım iyileştirmelerine dalmış, taze çekilmiş kahve yudumlarken, bir sonraki setup yükseltmemi planlarken ya da gelecek projelerimi haritalandırırken metal dinlerken bulursunuz ☕🎧",
      ],
    },
  ],
};

const RESUME_LOCATION: Location = {
  id: 3,
  type: "resume",
  name: "Resume",
  name_tr: "Özgeçmiş",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      name_tr: "Özgeçmiş.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      href: "/files/anil-resume.pdf",
    },
  ],
};

const TRASH_LOCATION: Location = {
  id: 4,
  type: "trash",
  name: "Trash",
  name_tr: "Çöp Kutusu",
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
  profile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  spotify: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  "app-store": { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  settings: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
