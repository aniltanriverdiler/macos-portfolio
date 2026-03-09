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
          <div className="p-6 space-y-5">
            <h4 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
              {t("settings.appearanceMode")}
            </h4>
            <div className="flex gap-6">
              <button
                type="button"
                onClick={() => {
                  if (isDarkMode) toggleDarkMode();
                }}
                className="flex flex-col items-center gap-2 cursor-pointer"
              >
                <div
                  className={`w-28 h-20 rounded-xl overflow-hidden relative border-2 ${
                    !isDarkMode
                      ? "border-blue-500"
                      : "border-gray-200 dark:border-gray-700"
                  }`}
                  style={{ background: "#f9fafb" }}
                >
                  <div style={{ height: 12, background: "#e5e7eb" }} />
                  <div className="flex" style={{ height: "calc(100% - 12px)" }}>
                    <div style={{ width: 32, background: "#f3f4f6" }} />
                    <div style={{ flex: 1, background: "#fff" }} />
                  </div>
                </div>
                <span
                  className={`text-xs font-medium ${!isDarkMode ? "text-blue-500" : "text-gray-500 dark:text-gray-400"}`}
                >
                  {t("settings.light")}
                </span>
              </button>
              <button
                type="button"
                onClick={() => {
                  if (!isDarkMode) toggleDarkMode();
                }}
                className="flex flex-col items-center gap-2 cursor-pointer"
              >
                <div
                  className={`w-28 h-20 rounded-xl overflow-hidden relative border-2 ${
                    isDarkMode
                      ? "border-blue-500"
                      : "border-gray-200 dark:border-gray-700"
                  }`}
                  style={{ background: "#111827" }}
                >
                  <div style={{ height: 12, background: "#1f2937" }} />
                  <div className="flex" style={{ height: "calc(100% - 12px)" }}>
                    <div style={{ width: 32, background: "#1a2332" }} />
                    <div style={{ flex: 1, background: "#111827" }} />
                  </div>
                </div>
                <span
                  className={`text-xs font-medium ${isDarkMode ? "text-blue-500" : "text-gray-500 dark:text-gray-400"}`}
                >
                  {t("settings.dark")}
                </span>
              </button>
            </div>
          </div>
        );

      case "displays":
        return (
          <div className="p-6 space-y-5">
            <div>
              <h4 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">
                {t("settings.brightness")}
              </h4>
              <div className="flex items-center gap-3">
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
              <h4 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">
                {t("settings.fullscreen")}
              </h4>
              <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    {t("settings.fullscreen")}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                    {t("settings.fullscreenDesc")}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={toggleFullscreen}
                  className="w-9 h-9 rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                >
                  {isFullscreen ? (
                    <Minimize className="w-4 h-4" />
                  ) : (
                    <Maximize className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        );

      case "sound":
        return (
          <div className="p-6 space-y-5">
            <h4 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">
              {t("settings.volume")}
            </h4>
            <div className="flex items-center gap-3">
              <Volume2 className="w-4 h-4 text-gray-400 shrink-0" />
              <input
                type="range"
                min={0}
                max={100}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="flex-1 accent-blue-500 cursor-pointer"
              />
              <span className="text-xs text-gray-400 w-8 text-right shrink-0">
                {volume}%
              </span>
            </div>
          </div>
        );

      case "wifi":
        return (
          <div className="p-6 space-y-5">
            <h4 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">
              {t("settings.wifiToggle")}
            </h4>
            <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {t("settings.wifiToggle")}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                  {t("settings.wifiDesc")}
                </p>
              </div>
              <button
                type="button"
                onClick={toggleWifi}
                className={`relative w-11 h-[26px] rounded-full transition-colors cursor-pointer shrink-0 ${
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
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(59,130,246,0.1)" }}
                  >
                    <Wifi className="w-4 h-4 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      TP-Link
                    </p>
                    <p className="text-xs text-green-500 mt-0.5 flex items-center gap-1">
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
          <div className="p-6 space-y-5">
            <h4 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">
              {t("settings.language")}
            </h4>
            <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {t("settings.langCurrent")}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                  {lang === "en" ? "English (US)" : "Türkçe (TR)"}
                </p>
              </div>
              <button
                type="button"
                onClick={toggleLang}
                className="px-4 py-1.5 text-xs font-semibold rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors cursor-pointer"
              >
                {t("settings.langSwitch")}
              </button>
            </div>
          </div>
        );

      default: {
        const item = SIDEBAR_ITEMS.find((i) => i.id === activePage);
        return (
          <div className="flex flex-col items-center justify-center py-24">
            {item && (
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: item.bg }}
              >
                <item.icon className="w-6 h-6 text-white" />
              </div>
            )}
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-3">
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

      <div style={{ display: "flex", height: 540 }}>
        {/* Sidebar */}
        <div
          className="border-r border-gray-200 dark:border-gray-700"
          style={{
            width: 220,
            minWidth: 220,
            maxWidth: 220,
            background: "var(--settings-sidebar-bg, rgba(249,250,251,0.8))",
            display: "flex",
            flexDirection: "column",
            padding: 12,
            gap: 6,
            overflowY: "auto",
          }}
        >
          {/* Search */}
          <div className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs text-gray-400 dark:text-gray-500 bg-gray-200/50 dark:bg-gray-700/40">
            <Search style={{ width: 14, height: 14, flexShrink: 0 }} />
            <span>{t("settings.search")}</span>
          </div>

          {/* Profile */}
          <div className="flex items-center gap-3 px-2 py-3">
            <img
              src="/images/anil.jpg"
              alt="Profile"
              style={{
                width: 40,
                height: 40,
                minWidth: 40,
                minHeight: 40,
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <div style={{ overflow: "hidden" }}>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 truncate">
                {t("settings.profileName")}
              </p>
              <p
                className="text-gray-400 dark:text-gray-500 truncate"
                style={{ fontSize: 11 }}
              >
                {t("settings.profileAccount")}
              </p>
            </div>
          </div>

          <div
            className="bg-gray-200 dark:bg-gray-700 mx-1"
            style={{ height: 1 }}
          />

          {/* Nav */}
          <ul style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {SIDEBAR_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = item.id === activePage;
              return (
                <li
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`flex items-center gap-2.5 rounded-lg cursor-pointer transition-colors ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-200/60 dark:hover:bg-gray-700/40"
                  }`}
                  style={{ padding: "7px 8px", fontSize: 13, fontWeight: 500 }}
                >
                  <div
                    className="flex items-center justify-center rounded-md"
                    style={{
                      width: 24,
                      height: 24,
                      minWidth: 24,
                      background: isActive ? "rgba(255,255,255,0.2)" : item.bg,
                    }}
                  >
                    <Icon style={{ width: 14, height: 14, color: "#fff" }} />
                  </div>
                  <span className="truncate">{t(item.labelKey)}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
          }}
        >
          <div className="flex items-center gap-3 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={goBack}
                disabled={historyIdx <= 0}
                className="w-7 h-7 rounded-md flex items-center justify-center text-gray-400 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-default"
              >
                <ChevronLeft style={{ width: 16, height: 16 }} />
              </button>
              <button
                type="button"
                onClick={goForward}
                disabled={historyIdx >= history.length - 1}
                className="w-7 h-7 rounded-md flex items-center justify-center text-gray-400 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-default"
              >
                <ChevronRight style={{ width: 16, height: 16 }} />
              </button>
            </div>
            <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200">
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
