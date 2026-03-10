import StatusBar from "./components/StatusBar";
import Dock from "./components/Dock";
import { useMobileNavStore } from "./navigation/store";
import type { MobileScreen } from "./navigation/types";

import Home from "./screens/Home";
import PortfolioRoot from "./screens/PortfolioRoot";
import Folder from "./screens/Folder";
import FileText from "./screens/FileText";
import FileImage from "./screens/FileImage";
import Terminal from "./screens/Terminal";
import Safari from "./screens/Safari";
import Photos from "./screens/Photos";
import Resume from "./screens/Resume";
import Contact from "./screens/Contact";

function titleFor(screen: MobileScreen) {
  switch (screen.name) {
    case "home":
      return "";
    case "portfolio":
      return "Portfolio";
    case "folder":
      return screen.location.name;
    case "file-text":
      return screen.file?.name ?? "";
    case "file-image":
      return screen.file?.name ?? "";
    case "terminal":
      return "Terminal";
    case "safari":
      return "Safari";
    case "photos":
      return "All Photos";
    case "resume":
      return "Resume";
    case "contact":
      return "Contact";
  }
}

function ScreenRenderer({ screen }: { screen: MobileScreen }) {
  switch (screen.name) {
    case "home":
      return <Home />;
    case "portfolio":
      return <PortfolioRoot />;
    case "folder":
      return <Folder location={screen.location} />;
    case "file-text":
      return screen.file ? <FileText file={screen.file} /> : null;
    case "file-image":
      return screen.file ? <FileImage file={screen.file} /> : null;
    case "terminal":
      return <Terminal />;
    case "safari":
      return <Safari />;
    case "photos":
      return <Photos />;
    case "resume":
      return <Resume />;
    case "contact":
      return <Contact />;
  }
}

export default function MobileShell() {
  const screen = useMobileNavStore((s) => s.current());
  const canGoBack = useMobileNavStore((s) => s.canGoBack());
  const pop = useMobileNavStore((s) => s.pop);

  const isHome = screen.name === "home";
  const title = titleFor(screen);

  return (
    <div className="h-dvh w-dvw flex flex-col overflow-hidden">
      {/* Status bar */}
      <StatusBar />

      {/* Navigation Header Section */}
      {!isHome ? (
        <div className="mt-3 mb-2 flex items-center justify-between px-4 text-white">
          <button
            type="button"
            onClick={pop}
            disabled={!canGoBack}
            className="text-[14px] text-blue-200 hover:text-white disabled:opacity-50"
          >
            ← Go Back
          </button>
          <div className="text-[15px] font-semibold">{title}</div>
          <div className="w-[70px]" />
        </div>
      ) : (
        <div className="h-6" />
      )}

      {/* Main Content Section */}
      <div className="flex-1">
        <div className="h-full overflow-y-auto">
          <ScreenRenderer screen={screen} />
        </div>
      </div>

      {isHome ? <Dock /> : null}
    </div>
  );
}
