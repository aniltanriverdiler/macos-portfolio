import { useState, useEffect } from "react";
import {
  Wifi,
  Bluetooth,
  Globe,
  Battery,
  Settings2,
  Accessibility,
  Sun,
  Monitor,
  Volume2,
  Image as ImageIcon,
  Bell,
  Search,
  ChevronLeft,
  ChevronRight,
  Maximize,
  Minimize,
  Languages,
} from "lucide-react";
import WindowsWrapper from "#hoc/WindowsWrapper";
import WindowControls from "#components/WindowControls";
import useTranslation from "#hooks/useTranslation";
import useThemeStore from "#store/theme";
import useWifiStore from "#store/wifi";
import useAudioStore from "#store/audio";
import type { TranslationKey } from "@/lib/i18n";

type SettingsPage =
  | "wifi"
  | "bluetooth"
  | "network"
  | "battery"
  | "general"
  | "accessibility"
  | "appearance"
  | "displays"
  | "sound"
  | "wallpaper"
  | "language"
  | "notifications";

interface SidebarItem {
  id: SettingsPage;
  icon: typeof Wifi;
  labelKey: TranslationKey;
  bg: string;
}

const SIDEBAR_ITEMS: SidebarItem[] = [
  { id: "wifi", icon: Wifi, labelKey: "settings.wifi", bg: "#3b82f6" },
  {
    id: "bluetooth",
    icon: Bluetooth,
    labelKey: "settings.bluetooth",
    bg: "#3b82f6",
  },
  { id: "network", icon: Globe, labelKey: "settings.network", bg: "#3b82f6" },
  { id: "battery", icon: Battery, labelKey: "settings.battery", bg: "#22c55e" },
  {
    id: "general",
    icon: Settings2,
    labelKey: "settings.general",
    bg: "#6b7280",
  },
  {
    id: "accessibility",
    icon: Accessibility,
    labelKey: "settings.accessibility",
    bg: "#2563eb",
  },
  {
    id: "appearance",
    icon: Sun,
    labelKey: "settings.appearance",
    bg: "#a855f7",
  },
  {
    id: "displays",
    icon: Monitor,
    labelKey: "settings.displays",
    bg: "#60a5fa",
  },
  { id: "sound", icon: Volume2, labelKey: "settings.sound", bg: "#ec4899" },
  {
    id: "wallpaper",
    icon: ImageIcon,
    labelKey: "settings.wallpaper",
    bg: "#14b8a6",
  },
  {
    id: "language",
    icon: Languages,
    labelKey: "settings.language",
    bg: "#ef4444",
  },
  {
    id: "notifications",
    icon: Bell,
    labelKey: "settings.notifications",
    bg: "#ef4444",
  },
];

const Settings = () => {
  const { t, lang, toggleLang } = useTranslation();
  const { isDarkMode, toggleDarkMode, brightness, setBrightness } =
    useThemeStore();
  const { wifiEnabled, toggleWifi } = useWifiStore();
  const { volume, setVolume } = useAudioStore();
  const [activePage, setActivePage] = useState<SettingsPage>("appearance");
  const [history, setHistory] = useState<SettingsPage[]>(["appearance"]);
  const [historyIdx, setHistoryIdx] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(
    () => !!document.fullscreenElement,
  );

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  const navigateTo = (page: SettingsPage) => {
    const newHistory = [...history.slice(0, historyIdx + 1), page];
    setHistory(newHistory);
    setHistoryIdx(newHistory.length - 1);
    setActivePage(page);
  };

  const goBack = () => {
    if (historyIdx > 0) {
      setHistoryIdx(historyIdx - 1);
      setActivePage(history[historyIdx - 1]);
    }
  };

  const goForward = () => {
    if (historyIdx < history.length - 1) {
      setHistoryIdx(historyIdx + 1);
      setActivePage(history[historyIdx + 1]);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen();
    }
  };

  const pageTitle = SIDEBAR_ITEMS.find((i) => i.id === activePage);

  const renderContent = () => {
    switch (activePage) {
      case "appearance":
        return (
          <div className="p-6 space-y-4">
            <h4 className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
              {t("settings.appearanceMode")}
            </h4>
            <div className="flex gap-5">
              <button
                type="button"
                onClick={() => { if (isDarkMode) toggleDarkMode(); }}
                className="flex flex-col items-center gap-2.5 cursor-pointer group"
              >
                <div
                  className={`w-32 h-[76px] rounded-xl overflow-hidden border-2 transition-colors ${
                    !isDarkMode
                      ? "border-blue-500 shadow-sm shadow-blue-500/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                  }`}
                >
                  <div className="h-3 bg-[#e5e7eb]" />
                  <div className="flex h-[calc(100%-12px)]">
                    <div className="w-8 bg-[#f3f4f6]" />
                    <div className="flex-1 bg-white" />
                  </div>
                </div>
                <span className={`text-xs font-medium ${!isDarkMode ? "text-blue-500" : "text-gray-500 dark:text-gray-400"}`}>
                  {t("settings.light")}
                </span>
              </button>
              <button
                type="button"
                onClick={() => { if (!isDarkMode) toggleDarkMode(); }}
                className="flex flex-col items-center gap-2.5 cursor-pointer group"
              >
                <div
                  className={`w-32 h-[76px] rounded-xl overflow-hidden border-2 transition-colors ${
                    isDarkMode
                      ? "border-blue-500 shadow-sm shadow-blue-500/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                  }`}
                >
                  <div className="h-3 bg-[#1f2937]" />
                  <div className="flex h-[calc(100%-12px)]">
                    <div className="w-8 bg-[#1a2332]" />
                    <div className="flex-1 bg-[#111827]" />
                  </div>
                </div>
                <span className={`text-xs font-medium ${isDarkMode ? "text-blue-500" : "text-gray-500 dark:text-gray-400"}`}>
                  {t("settings.dark")}
                </span>
              </button>
            </div>
          </div>
        );

      case "displays":
        return (
          <div className="p-6 space-y-6">
            <div>
              <h4 className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
                {t("settings.brightness")}
              </h4>
              <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-3 border border-gray-100 dark:border-gray-700">
                <Sun className="w-4 h-4 text-gray-400 shrink-0" />
                <input
                  type="range"
                  min={10}
                  max={100}
                  value={brightness}
                  onChange={(e) => setBrightness(Number(e.target.value))}
                  className="flex-1 accent-blue-500 cursor-pointer"
                />
                <Sun className="w-5 h-5 text-gray-400 shrink-0" />
              </div>
            </div>
            <div>
              <h4 className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
                {t("settings.fullscreen")}
              </h4>
              <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-3.5 border border-gray-100 dark:border-gray-700">
                <div>
                  <p className="text-[13px] font-medium text-gray-800 dark:text-gray-200">
                    {t("settings.fullscreen")}
                  </p>
                  <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">
                    {t("settings.fullscreenDesc")}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={toggleFullscreen}
                  className="w-8 h-8 rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                >
                  {isFullscreen ? (
                    <Minimize className="w-3.5 h-3.5" />
                  ) : (
                    <Maximize className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        );

      case "sound":
        return (
          <div className="p-6 space-y-4">
            <h4 className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
              {t("settings.volume")}
            </h4>
            <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-3 border border-gray-100 dark:border-gray-700">
              <Volume2 className="w-4 h-4 text-gray-400 shrink-0" />
              <input
                type="range"
                min={0}
                max={100}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="flex-1 accent-blue-500 cursor-pointer"
              />
              <span className="text-[11px] font-medium text-gray-400 w-8 text-right shrink-0 tabular-nums">
                {volume}%
              </span>
            </div>
          </div>
        );

      case "wifi":
        return (
          <div className="p-6 space-y-4">
            <h4 className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
              {t("settings.wifiToggle")}
            </h4>
            <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-3.5 border border-gray-100 dark:border-gray-700">
              <div>
                <p className="text-[13px] font-medium text-gray-800 dark:text-gray-200">
                  {t("settings.wifiToggle")}
                </p>
                <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">
                  {t("settings.wifiDesc")}
                </p>
              </div>
              <button
                type="button"
                onClick={toggleWifi}
                className={`relative w-11 h-[26px] rounded-full transition-colors cursor-pointer shrink-0 ml-4 ${
                  wifiEnabled ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-[3px] w-5 h-5 rounded-full bg-white shadow-sm transition-all ${
                    wifiEnabled ? "left-[22px]" : "left-[3px]"
                  }`}
                />
              </button>
            </div>
            {wifiEnabled && (
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-3.5 border border-gray-100 dark:border-gray-700 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-500/10">
                    <Wifi className="w-4 h-4 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-gray-800 dark:text-gray-200">
                      TP-Link
                    </p>
                    <p className="text-[11px] text-green-500 mt-0.5 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                      {t("settings.wifiConnected")}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300 dark:text-gray-600" />
              </div>
            )}
          </div>
        );

      case "language":
        return (
          <div className="p-6 space-y-4">
            <h4 className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
              {t("settings.language")}
            </h4>
            <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-3.5 border border-gray-100 dark:border-gray-700">
              <div>
                <p className="text-[13px] font-medium text-gray-800 dark:text-gray-200">
                  {t("settings.langCurrent")}
                </p>
                <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">
                  {lang === "en" ? "English (US)" : "Türkçe (TR)"}
                </p>
              </div>
              <button
                type="button"
                onClick={toggleLang}
                className="px-3.5 py-1.5 text-[11px] font-semibold rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors cursor-pointer"
              >
                {t("settings.langSwitch")}
              </button>
            </div>
          </div>
        );

      default: {
        const item = SIDEBAR_ITEMS.find((i) => i.id === activePage);
        return (
          <div className="flex flex-col items-center justify-center py-24 select-none">
            {item && (
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm"
                style={{ background: item.bg }}
              >
                <item.icon className="w-7 h-7 text-white" />
              </div>
            )}
            <p className="text-[13px] text-gray-400 dark:text-gray-500 mt-3 font-medium">
              {pageTitle ? t(pageTitle.labelKey) : ""}
            </p>
          </div>
        );
      }
    }
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="settings" />
        <h2 className="font-bold text-sm text-center flex-1 dark:text-gray-300">
          {t("settings.title")}
        </h2>
      </div>

      <div className="flex h-[540px]">
        {/* Sidebar */}
        <div
          className="w-[220px] min-w-[220px] max-w-[220px] flex flex-col p-3 gap-1.5 overflow-y-auto border-r border-gray-200 dark:border-gray-700"
          style={{ background: "var(--settings-sidebar-bg, rgba(249,250,251,0.8))" }}
        >
          {/* Search */}
          <div className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs text-gray-400 dark:text-gray-500 bg-gray-200/50 dark:bg-gray-700/40">
            <Search className="w-3.5 h-3.5 shrink-0" />
            <span>{t("settings.search")}</span>
          </div>

          {/* Profile */}
          <div className="flex items-center gap-3 px-2 py-3">
            <img
              src="/images/anil.jpg"
              alt="Profile"
              className="w-10 h-10 min-w-10 rounded-full object-cover"
            />
            <div className="overflow-hidden">
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 truncate">
                {t("settings.profileName")}
              </p>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 truncate">
                {t("settings.profileAccount")}
              </p>
            </div>
          </div>

          <div className="h-px bg-gray-200 dark:bg-gray-700 mx-1" />

          {/* Nav */}
          <ul className="flex flex-col gap-0.5">
            {SIDEBAR_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = item.id === activePage;
              return (
                <li
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`flex items-center gap-2.5 rounded-lg cursor-pointer transition-colors px-2 py-[7px] text-[13px] font-medium ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-200/60 dark:hover:bg-gray-700/40"
                  }`}
                >
                  <div
                    className="w-6 h-6 min-w-6 flex items-center justify-center rounded-md"
                    style={{ background: isActive ? "rgba(255,255,255,0.2)" : item.bg }}
                  >
                    <Icon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="truncate">{t(item.labelKey)}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          <div className="flex items-center gap-3 px-5 py-2.5 border-b border-gray-100 dark:border-gray-700/80">
            <div className="flex items-center gap-0.5">
              <button
                type="button"
                onClick={goBack}
                disabled={historyIdx <= 0}
                className="w-7 h-7 rounded-md flex items-center justify-center text-gray-400 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-default"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={goForward}
                disabled={historyIdx >= history.length - 1}
                className="w-7 h-7 rounded-md flex items-center justify-center text-gray-400 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-default"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <h3 className="text-[13px] font-bold text-gray-800 dark:text-gray-200">
              {pageTitle ? t(pageTitle.labelKey) : ""}
            </h3>
          </div>

          {renderContent()}
        </div>
      </div>
    </>
  );
};

const SettingsWindow = WindowsWrapper(Settings, "settings");

export default SettingsWindow;
