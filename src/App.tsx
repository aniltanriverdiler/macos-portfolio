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
} from "#windows";
import useWifiStore from "#store/wifi";

gsap.registerPlugin(Draggable);

const WifiOverlay = () => {
  const { wifiEnabled, toggleWifi } = useWifiStore();

  if (wifiEnabled) return null;

  return (
    <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center backdrop-blur-xl bg-black/60">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
          <WifiOff className="w-8 h-8 text-white/70" />
        </div>

        <h2 className="text-white text-2xl font-bold tracking-tight">
          Connection Lost
        </h2>

        <p className="text-white/60 text-sm text-center max-w-xs leading-relaxed">
          Please enable Wi-Fi in the control center to access system features.
        </p>

        <button
          onClick={toggleWifi}
          className="mt-2 px-8 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-full transition-colors cursor-pointer"
        >
          Quick Connect
        </button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <main>
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

      <Home />

      <WifiOverlay />
    </main>
  );
};

export default App;
