import { useEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { WifiOff } from "lucide-react";

import { Navbar, Welcome, Dock, Home } from "#components";
import {
  Terminal,
  Safari,
  Resume,
  Finder,
  Text,
  Image,
  Contact,
  Photos,
  Profile,
  Spotify,
  AppStore,
  Settings,
} from "#windows";
import useWifiStore from "#store/wifi";
import useThemeStore from "#store/theme";
import useTranslation from "#hooks/useTranslation";
import { useMediaQuery } from "react-responsive";
import MobileShell from "./mobile/MobileShell";

gsap.registerPlugin(Draggable);

const WifiOverlay = () => {
  const { wifiEnabled, toggleWifi } = useWifiStore();
  const { t } = useTranslation();

  if (wifiEnabled) return null;

  return (
    <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center backdrop-blur-xl bg-black/60">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
          <WifiOff className="w-8 h-8 text-white/70" />
        </div>

        <h2 className="text-white text-2xl font-bold tracking-tight">
          {t("wifi.connectionLost")}
        </h2>

        <p className="text-white/60 text-sm text-center max-w-xs leading-relaxed">
          {t("wifi.enableMessage")}
        </p>

        <button
          onClick={toggleWifi}
          className="mt-2 px-8 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-full transition-colors cursor-pointer"
        >
          {t("wifi.quickConnect")}
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const { brightness } = useThemeStore();

  useEffect(() => {
    document.documentElement.style.filter = `brightness(${brightness / 100})`;
  }, [brightness]);

  return (
    <main>
      {isMobile ? (
        <MobileShell />
      ) : (
        <>
          <Navbar />
          <Welcome />
          <Dock />
  
          <Terminal />
          <Safari />
          <Resume />
          <Finder />
          <Text />
          <Image />
          <Contact />
          <Photos />
          <Profile />
          <Spotify />
          <AppStore />
          <Settings />
  
          <Home />
        </>
      )}
  
      <WifiOverlay />
    </main>
  );
};

export default App;
