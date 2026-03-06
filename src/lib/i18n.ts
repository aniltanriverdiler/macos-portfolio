export type Lang = "en" | "tr";

const translations = {
  // Navbar
  "nav.portfolio": { en: "Anil's Portfolio", tr: "Anıl Portfolyo" },
  "nav.projects": { en: "Projects", tr: "Projeler" },
  "nav.contact": { en: "Contact", tr: "İletişim" },
  "nav.resume": { en: "Resume", tr: "Özgeçmiş" },

  // Welcome
  "welcome.subtitle": { en: "Hey, I'm Anil! Welcome to my", tr: "Merhaba, ben Anıl! Hoş geldiniz," },
  "welcome.title": { en: "portfolio.", tr: "portfolyoma." },
  "welcome.smallScreen": {
    en: "This Portfolio is designed for desktop/tablet screens only.",
    tr: "Bu portfolyo yalnızca masaüstü/tablet ekranlar için tasarlanmıştır.",
  },

  // Dock
  "dock.portfolio": { en: "Portfolio", tr: "Portfolyo" },
  "dock.safari": { en: "Safari", tr: "Safari" },
  "dock.gallery": { en: "Gallery", tr: "Galeri" },
  "dock.contact": { en: "Contact", tr: "İletişim" },
  "dock.skills": { en: "Skills", tr: "Yetenekler" },
  "dock.resume": { en: "Resume", tr: "Özgeçmiş" },
  "dock.appStore": { en: "App Store", tr: "App Store" },
  "dock.spotify": { en: "Spotify", tr: "Spotify" },
  "dock.archive": { en: "Archive", tr: "Arşiv" },

  // App Store
  "appstore.title": { en: "App Store", tr: "App Store" },
  "appstore.discover": { en: "Discover", tr: "Keşfet" },
  "appstore.create": { en: "Create", tr: "Oluştur" },
  "appstore.work": { en: "Work", tr: "İş" },
  "appstore.play": { en: "Play", tr: "Oyun" },
  "appstore.develop": { en: "Develop", tr: "Geliştir" },
  "appstore.categories": { en: "Categories", tr: "Kategoriler" },
  "appstore.updates": { en: "Updates", tr: "Güncellemeler" },
  "appstore.getStarted": { en: "GET STARTED", tr: "BAŞLANGIÇ" },
  "appstore.heroTitle": { en: "Mobile Apps Coming Soon", tr: "Mobil Uygulamalar Çok Yakında" },
  "appstore.heroDesc": {
    en: "Building cross-platform mobile experiences with React Native & Expo.",
    tr: "React Native & Expo ile platformlar arası mobil deneyimler geliştiriyorum.",
  },
  "appstore.fromDev": { en: "FROM THE DEVELOPER", tr: "GELİŞTİRİCİDEN" },
  "appstore.mobilePortfolio": { en: "Mobile App Portfolio", tr: "Mobil Uygulama Portfolyosu" },
  "appstore.mobilePortfolioDesc": {
    en: "React Native projects will be showcased here.",
    tr: "React Native projeleri burada sergilenecek.",
  },
  "appstore.editorsChoice": { en: "EDITOR'S CHOICE", tr: "EDİTÖR SEÇİMİ" },
  "appstore.stayTuned": { en: "Stay Tuned", tr: "Takipte Kalın" },
  "appstore.stayTunedDesc": {
    en: "New mobile apps are on the way.",
    tr: "Yeni mobil uygulamalar yolda.",
  },
  "appstore.appsWeLove": { en: "Apps and Projects Coming Soon", tr: "Yakında Gelecek Uygulamalar ve Projeler" },

  // Spotify
  "spotify.title": { en: "Spotify", tr: "Spotify" },
  "spotify.playlist": { en: "Playlist", tr: "Çalma Listesi" },

  // Control Center
  "cc.wifi": { en: "Wi-Fi", tr: "Wi-Fi" },
  "cc.bluetooth": { en: "Bluetooth", tr: "Bluetooth" },
  "cc.airdrop": { en: "AirDrop", tr: "AirDrop" },
  "cc.on": { en: "On", tr: "Açık" },
  "cc.off": { en: "Off", tr: "Kapalı" },
  "cc.contactsOnly": { en: "Contacts Only", tr: "Yalnızca Kişiler" },
  "cc.notPlaying": { en: "Not Playing", tr: "Çalmıyor" },
  "cc.display": { en: "Display", tr: "Ekran" },
  "cc.sound": { en: "Sound", tr: "Ses" },
  "cc.timer": { en: "Timer", tr: "Zamanlayıcı" },
  "cc.stopwatch": { en: "Stopwatch", tr: "Kronometre" },

  // Wifi Overlay
  "wifi.connectionLost": { en: "Connection Lost", tr: "Bağlantı Kesildi" },
  "wifi.enableMessage": {
    en: "Please enable Wi-Fi in the control center to access system features.",
    tr: "Sistem özelliklerine erişmek için kontrol merkezinden Wi-Fi'yi etkinleştirin.",
  },
  "wifi.quickConnect": { en: "Quick Connect", tr: "Hızlı Bağlan" },

  // Terminal / Tech Stack
  "terminal.title": { en: "Tech Stack", tr: "Kullandığım Teknolojiler" },
  "terminal.showCommand": { en: "show tech stack", tr: "kullandığım teknolojileri göster" },
  "terminal.category": { en: "Category", tr: "Kategori" },
  "terminal.technologies": { en: "Technologies", tr: "Teknolojiler" },
  "terminal.loadSuccess": {
    en: "5 of 5 stacks loaded successfully (100%)",
    tr: "5/5 teknoloji başarıyla yüklendi (%100)",
  },
  "terminal.renderTime": { en: "Render time 6ms", tr: "Render süresi 6ms" },

  // Contact
  "contact.title": { en: "Contact Me", tr: "Bana Ulaşın" },
  "contact.getInTouch": { en: "Get in Touch", tr: "İletişime Geçelim" },
  "contact.description": {
    en: "Got a product to build? A bug to hunt? Or just talk code? I'm all in.",
    tr: "Geliştirilecek bir ürün mü var? Yakalanacak bir bug mu? Ya da sadece kod konuşmak mı? Ben hazırım.",
  },

  // Safari
  "safari.snsLinks": { en: "SNS Links", tr: "Sosyal Bağlantılar" },
  "safari.frequentlyVisited": { en: "Frequently Visited", tr: "Sık Ziyaret Edilenler" },
  "safari.searchPlaceholder": {
    en: "Search or enter website name",
    tr: "Arayın veya web sitesi adı girin",
  },

  // Profile
  "profile.title": { en: "About Me", tr: "Hakkımda" },
  "profile.subtitle": {
    en: "Frontend & Mobile Developer · React.js · Next.js · React Native · Expo",
    tr: "Frontend & Mobil Geliştirici · React.js · Next.js · React Native · Expo",
  },
  "profile.summary": { en: "SUMMARY", tr: "ÖZET" },
  "profile.summaryText": {
    en: "Architecture graduate turned frontend and mobile developer, focused on building responsive and performance-driven web and mobile applications using React.js, TypeScript, and the modern JavaScript ecosystem. With a design-oriented background, I enjoy crafting user-focused interfaces and translating complex ideas into clean, maintainable code. Currently focusing on React Native development and creating practical applications that deliver real user value.",
    tr: "Mimarlık mezunu, frontend ve mobil geliştirici olarak kariyer değişikliği yapmış, React.js, TypeScript ve modern JavaScript ekosistemi kullanarak duyarlı ve performans odaklı web ve mobil uygulamalar geliştirmeye odaklanan bir yazılımcıyım. Tasarım odaklı bir geçmişle, kullanıcı odaklı arayüzler oluşturmaktan ve karmaşık fikirleri temiz, sürdürülebilir koda dönüştürmekten keyif alıyorum. Şu anda React Native geliştirme ve gerçek kullanıcı değeri sunan pratik uygulamalar oluşturmaya odaklanıyorum.",
  },
  "profile.experience": { en: "EXPERIENCE", tr: "DENEYİM" },
  "profile.contactLabel": { en: "CONTACT", tr: "İLETİŞİM" },
  "profile.email": { en: "EMAIL", tr: "E-POSTA" },
  "profile.information": { en: "INFORMATION", tr: "BİLGİLER" },
  "profile.location": { en: "LOCATION", tr: "KONUM" },
  "profile.locationValue": { en: "Istanbul, Turkey", tr: "İstanbul, Türkiye" },
  "profile.education": { en: "EDUCATION", tr: "EĞİTİM" },
  "profile.educationValue": {
    en: "Istanbul Arel University · Architecture",
    tr: "İstanbul Arel Üniversitesi · Mimarlık",
  },

  // Profile Experiences
  "exp.frontendLead.title": { en: "Frontend Team Lead Intern", tr: "Frontend Takım Lideri Stajyer" },
  "exp.frontendLead.company": { en: "Yazilim.xyz & OnlyJS Academy", tr: "Yazilim.xyz & OnlyJS Academy" },
  "exp.frontendLead.period": { en: "Jul 2025 - Sep 2025", tr: "Tem 2025 - Eyl 2025" },
  "exp.frontendLead.description": {
    en: "Led the frontend team and contributed to project development during a 2-month internship. Built a hotel reservation system using Next.js 15, TypeScript, TailwindCSS, and Shadcn-UI. Managed state with Zustand, integrated real-time chat via Socket.IO, and implemented JWT-based authentication and CRUD operations.",
    tr: "2 aylık staj süresince frontend ekibini yönettim ve projenin geliştirilme sürecinde aktif rol aldım. Next.js 15, TypeScript, TailwindCSS ve Shadcn-UI kullanarak bir otel rezervasyon sistemi geliştirdim. Zustand ile state yönetimi, Socket.IO ile gerçek zamanlı sohbet entegrasyonu ve JWT tabanlı kimlik doğrulama ile CRUD işlemleri üzerinde çalıştım.",
  },
  "exp.architect1.title": { en: "Architect", tr: "Mimar" },
  "exp.architect1.company": { en: "Ors Architecture & Construction", tr: "Ors Mimarlık & İnşaat" },
  "exp.architect1.period": { en: "Feb 2024 - Jul 2024", tr: "Şub 2024 - Tem 2024" },
  "exp.architect1.description": {
    en: "Designed and executed interior architectural projects from concept to implementation, including technical drawings, custom furniture, and 3D visualizations. Coordinated site inspections and project management.",
    tr: "Konseptten uygulamaya kadar iç mimari projeler tasarladım ve yürüttüm. Teknik çizimler, özel mobilya tasarımı ve 3D görselleştirmeler hazırladım. Saha denetimleri ve proje yönetimini koordine ettim.",
  },
  "exp.freelance.title": { en: "Freelance Architect", tr: "Serbest Mimar" },
  "exp.freelance.company": { en: "Self-employed", tr: "Serbest çalışan" },
  "exp.freelance.period": { en: "Jan 2020 - Current", tr: "Oca 2020 - Devam ediyor" },
  "exp.freelance.description": {
    en: "Created realistic interior visualizations, bringing design concepts to life with high-quality renderings. Developed architectural concept, preliminary, and implementation projects.",
    tr: "Gerçekçi iç mekan görselleştirmeleri oluşturarak tasarım konseptlerini yüksek kaliteli renderlarla hayata geçirdim. Mimari konsept, ön proje ve uygulama projeleri geliştirdim.",
  },
  "exp.architect2.title": { en: "Architect", tr: "Mimar" },
  "exp.architect2.company": { en: "Yilmaz Group Construction", tr: "Yılmaz Grup İnşaat" },
  "exp.architect2.period": { en: "Jun 2019 - Dec 2019", tr: "Haz 2019 - Ara 2019" },
  "exp.architect2.description": {
    en: "Designed and executed interior architectural projects. Managed site inspections and project coordination to ensure quality construction and on-time delivery.",
    tr: "İç mimari projeler tasarladım ve yürüttüm. Kaliteli inşaat ve zamanında teslimatı sağlamak için saha denetimleri ve proje koordinasyonunu yönettim.",
  },

  // Finder
  "finder.favorites": { en: "Favorites", tr: "Sık Kullanılanlar" },
  "finder.myProjects": { en: "My Projects", tr: "Projelerim" },

  // Photos
  "photos.title": { en: "Photos", tr: "Fotoğraflar" },

  // Spotlight
  "spotlight.placeholder": { en: "Spotlight Search", tr: "Spotlight Araması" },
  "spotlight.allFiles": { en: "All Files", tr: "Tüm Dosyalar" },
  "spotlight.thisFolder": { en: "This Folder", tr: "Bu Klasör" },
  "spotlight.noResults": { en: "No results found", tr: "Sonuç bulunamadı" },
  "spotlight.tryDifferent": { en: "Try a different search term", tr: "Farklı bir arama terimi deneyin" },
  "spotlight.typeToSearch": {
    en: "Type to search files, folders, and projects",
    tr: "Dosya, klasör ve proje aramak için yazın",
  },
  "spotlight.toggleScope": { en: "Toggle scope", tr: "Kapsamı değiştir" },
  "spotlight.close": { en: "Close", tr: "Kapat" },
  "spotlight.open": { en: "Open", tr: "Aç" },
  "spotlight.folder": { en: "Folder", tr: "Klasör" },
  "spotlight.textDocument": { en: "Text Document", tr: "Metin Belgesi" },
  "spotlight.pdfDocument": { en: "PDF Document", tr: "PDF Belgesi" },
  "spotlight.image": { en: "Image", tr: "Görsel" },
  "spotlight.website": { en: "Website", tr: "Web Sitesi" },
  "spotlight.designFile": { en: "Design File", tr: "Tasarım Dosyası" },
  "spotlight.file": { en: "File", tr: "Dosya" },

  // Resume
  "resume.title": { en: "Resume.pdf", tr: "Özgeçmiş.pdf" },

  // Tech Stack Categories
  "techstack.frontend": { en: "Frontend", tr: "Frontend" },
  "techstack.mobile": { en: "Mobile", tr: "Mobil" },
  "techstack.styling": { en: "Styling", tr: "Stil" },
  "techstack.stateManagement": { en: "State Management", tr: "State Yönetimi" },
  "techstack.backend": { en: "Backend", tr: "Backend" },
  "techstack.database": { en: "Database", tr: "Veritabanı" },
  "techstack.devTools": { en: "Dev Tools", tr: "Geliştirici Araçları" },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, lang: Lang): string {
  return translations[key]?.[lang] ?? key;
}

export default translations;
