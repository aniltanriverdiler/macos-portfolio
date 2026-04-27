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
  "dock.settings": { en: "Settings", tr: "Ayarlar" },
  "dock.snake": { en: "Snake", tr: "Yılan" },
  "dock.activityMonitor": { en: "Activity Monitor", tr: "Etkinlik Monitörü" },
  "dock.mail": { en: "Mail", tr: "Mail" },
  "dock.archive": { en: "Archive", tr: "Arşiv" },

  // Settings
  "settings.title": { en: "Settings", tr: "Ayarlar" },
  "settings.search": { en: "Search", tr: "Ara" },
  "settings.wifi": { en: "Wi-Fi", tr: "Wi-Fi" },
  "settings.wifiConnected": { en: "Connected", tr: "Bağlı" },
  "settings.wifiOff": { en: "Off", tr: "Kapalı" },
  "settings.wifiNetwork": { en: "Network", tr: "Ağ" },
  "settings.bluetooth": { en: "Bluetooth", tr: "Bluetooth" },
  "settings.network": { en: "Network", tr: "Ağ" },
  "settings.battery": { en: "Battery", tr: "Pil" },
  "settings.general": { en: "General", tr: "Genel" },
  "settings.accessibility": { en: "Accessibility", tr: "Erişilebilirlik" },
  "settings.appearance": { en: "Appearance", tr: "Görünüm" },
  "settings.displays": { en: "Displays", tr: "Ekranlar" },
  "settings.sound": { en: "Sound", tr: "Ses" },
  "settings.wallpaper": { en: "Wallpaper", tr: "Duvar Kağıdı" },
  "settings.language": { en: "Language & Region", tr: "Dil ve Bölge" },
  "settings.notifications": { en: "Notifications", tr: "Bildirimler" },
  "settings.appearanceMode": { en: "Appearance", tr: "Görünüm" },
  "settings.light": { en: "Light", tr: "Açık" },
  "settings.dark": { en: "Dark", tr: "Koyu" },
  "settings.brightness": { en: "Brightness", tr: "Parlaklık" },
  "settings.volume": { en: "Output Volume", tr: "Çıkış Sesi" },
  "settings.wifiToggle": { en: "Wi-Fi", tr: "Wi-Fi" },
  "settings.wifiDesc": { en: "Turn Wi-Fi on or off", tr: "Wi-Fi'yi aç veya kapat" },
  "settings.langCurrent": { en: "English", tr: "Türkçe" },
  "settings.langSwitch": { en: "Switch to Turkish", tr: "İngilizceye Geç" },
  "settings.fullscreen": { en: "Fullscreen", tr: "Tam Ekran" },
  "settings.fullscreenDesc": { en: "Enter or exit fullscreen mode", tr: "Tam ekran moduna gir veya çık" },
  "settings.profileName": { en: "Anil Tanriverdiler", tr: "Anıl Tanrıverdiler" },
  "settings.profileAccount": { en: "Developer Account", tr: "Geliştirici Hesabı" },

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
  "contact.available": { en: "Open to opportunities", tr: "Fırsatlara açığım" },
  "contact.responseTime": { en: "Usually responds within 24h", tr: "Genellikle 24 saat içinde yanıt verir" },
  "contact.location": { en: "Istanbul, Turkey", tr: "İstanbul, Türkiye" },
  "contact.locationLabel": { en: "LOCATION", tr: "KONUM" },
  "contact.emailLabel": { en: "EMAIL", tr: "E-POSTA" },
  "contact.followLabel": { en: "SOCIALS", tr: "SOSYAL MEDYA" },
  "contact.copyEmail": { en: "Copy email", tr: "E-postayı kopyala" },
  "contact.copied": { en: "Copied!", tr: "Kopyalandı!" },

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
    en: "Served as Frontend Team Lead during a 2-month internship; coordinated the team and managed frontend development. Built a hotel reservation system with Next.js 15, TypeScript, TailwindCSS and Shadcn-UI. Managed state with Zustand, integrated real-time chat via Socket.IO, and gained practical experience in JWT security and CRUD operations.",
    tr: "Yazılım.xyz & OnlyJS Academy bünyesinde gerçekleştirilen 2 aylık staj süresince Frontend Team Lead olarak görev alındı; ekibin koordinasyonu ve frontend geliştirme süreçleri yönetildi. Next.js 15, TypeScript, TailwindCSS ve Shadcn-UI kullanılarak bir otel rezervasyon sistemi geliştirildi. Zustand ile state yönetimi yapıldı, Socket.IO aracılığıyla gerçek zamanlı sohbet entegre edildi; JWT güvenliği ve CRUD operasyonları konusunda pratik deneyim kazanıldı.",
  },
  "exp.architect1.title": { en: "Architect", tr: "Mimar" },
  "exp.architect1.company": { en: "Ors Architecture & Construction", tr: "Ors Mimarlık & İnşaat" },
  "exp.architect1.period": { en: "Feb 2024 - Jul 2024", tr: "Şub 2024 - Tem 2024" },
  "exp.architect1.description": {
    en: "Designed and executed interior architectural projects from concept to implementation, including technical drawings, custom furniture designs, and 3D visualizations. Coordinated site inspections and project management to ensure quality construction and on-time delivery.",
    tr: "Konsept aşamasından uygulama aşamasına kadar; teknik çizimler, özel mobilya tasarımları ve 3D görselleştirmeler dahil olmak üzere iç mimari projeler tasarlandı ve yürütüldü. Kaliteli inşaat ve zamanında teslimatı sağlamak amacıyla saha denetimleri ve proje yönetimi koordine edildi.",
  },
  "exp.freelance.title": { en: "Freelance Architect", tr: "Serbest Mimar" },
  "exp.freelance.company": { en: "Self-employed", tr: "Serbest çalışan" },
  "exp.freelance.period": { en: "Jan 2020 - Current", tr: "Oca 2020 - Devam ediyor" },
  "exp.freelance.description": {
    en: "Created realistic interior visualizations, bringing design concepts to life with high-quality renderings. Developed architectural concept, preliminary, and implementation projects in a seamless flow from initial design to final execution.",
    tr: "Tasarım konseptlerini yüksek kaliteli renderlar ile hayata geçirerek gerçekçi iç mekan görselleştirmeleri oluşturuldu. İlk tasarımdan son uygulamaya kadar kesintisiz bir akış sağlayarak mimari konsept, ön proje ve uygulama projeleri geliştirildi.",
  },
  "exp.architect2.title": { en: "Architect", tr: "Mimar" },
  "exp.architect2.company": { en: "Yilmaz Group Construction", tr: "Yılmaz Grup İnşaat" },
  "exp.architect2.period": { en: "Jun 2019 - Dec 2019", tr: "Haz 2019 - Ara 2019" },
  "exp.architect2.description": {
    en: "Designed and executed interior architectural projects from concept to implementation, including technical drawings, custom furniture designs, and 3D visualizations. Managed site inspections and project coordination to ensure quality construction and on-time delivery.",
    tr: "Konseptten uygulamaya kadar; teknik çizimler, özel mobilya tasarımları ve 3D görselleştirmeler dahil olmak üzere iç mimari projeler tasarlandı ve yürütüldü. Kaliteli inşaat ve zamanında teslimatı sağlamak amacıyla saha denetimleri ve proje koordinasyonu yönetildi.",
  },

  // Finder
  "finder.favorites": { en: "Favorites", tr: "Sık Kullanılanlar" },
  "finder.myProjects": { en: "My Projects", tr: "Projelerim" },
  "finder.webProjects": { en: "Web Projects", tr: "Web Projeleri" },
  "finder.mobileProjects": { en: "Mobile Projects", tr: "Mobil Projeler" },
  "finder.skills": { en: "Skills", tr: "Yetenekler" },

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
  "resume.summaryShort": {
    en: "Frontend & mobile developer. React.js, TypeScript, React Native. Building modern apps.",
    tr: "Frontend ve mobil geliştirici. React.js, TypeScript, React Native. Duyarlı uygulamalar.",
  },
  "resume.workExperience": { en: "Work Experience", tr: "İş Deneyimi" },
  "resume.educationCertifications": { en: "Education and Certifications", tr: "Eğitim ve Sertifikalar" },
  "resume.technologiesLanguages": { en: "Technologies and Languages", tr: "Teknolojiler ve Diller" },
  "resume.download": { en: "Download PDF", tr: "PDF İndir" },

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
