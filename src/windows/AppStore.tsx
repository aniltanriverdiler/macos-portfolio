import {
  Star,
  Compass,
  Paintbrush,
  Briefcase,
  Gamepad2,
  Code,
  LayoutGrid,
  RefreshCw,
  Search,
  Rocket,
  Smartphone,
} from "lucide-react";
import WindowsWrapper from "#hoc/WindowsWrapper";
import WindowControls from "#components/WindowControls";
import useTranslation from "#hooks/useTranslation";
import type { TranslationKey } from "@/lib/i18n";

interface SidebarItem {
  icon: typeof Star;
  labelKey: TranslationKey;
}

const SIDEBAR_ITEMS: SidebarItem[] = [
  { icon: Compass, labelKey: "appstore.discover" },
  { icon: Paintbrush, labelKey: "appstore.create" },
  { icon: Briefcase, labelKey: "appstore.work" },
  { icon: Gamepad2, labelKey: "appstore.play" },
  { icon: Code, labelKey: "appstore.develop" },
  { icon: LayoutGrid, labelKey: "appstore.categories" },
  { icon: RefreshCw, labelKey: "appstore.updates" },
];

const AppStore = () => {
  const { t } = useTranslation();

  return (
    <>
      <div id="window-header">
        <WindowControls target="app-store" />
        <h2>{t("appstore.title")}</h2>
      </div>

      <div className="appstore-layout">
        {/* Sidebar */}
        <div className="appstore-sidebar">
          <div className="appstore-search">
            <Search className="w-3.5 h-3.5 text-gray-400" />
            <span>Search</span>
          </div>

          <ul>
            {SIDEBAR_ITEMS.map((item, i) => {
              const Icon = item.icon;
              return (
                <li key={item.labelKey} className={i === 0 ? "active" : ""}>
                  <Icon className="w-4 h-4" />
                  <span>{t(item.labelKey)}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Main Content */}
        <div className="appstore-content">
          {/* Hero Banner */}
          <div className="appstore-hero">
            <div className="appstore-hero-overlay">
              <span className="appstore-hero-tag">
                {t("appstore.getStarted")}
              </span>
              <h3 className="appstore-hero-title">{t("appstore.heroTitle")}</h3>
              <p className="appstore-hero-desc">{t("appstore.heroDesc")}</p>
            </div>
            <div className="appstore-hero-visual">
              <div className="appstore-hero-icon-group">
                <Rocket className="w-10 h-10 text-white/80" />
                <Smartphone className="w-8 h-8 text-white/60" />
              </div>
            </div>
          </div>

          {/* Feature Cards Row */}
          <div className="appstore-feature-row">
            <div className="appstore-feature-card">
              <span className="appstore-feature-label">
                {t("appstore.fromDev")}
              </span>
              <h4>{t("appstore.mobilePortfolio")}</h4>
              <p>{t("appstore.mobilePortfolioDesc")}</p>
            </div>
            <div className="appstore-feature-card">
              <span className="appstore-feature-label">
                {t("appstore.editorsChoice")}
              </span>
              <h4>{t("appstore.stayTuned")}</h4>
              <p>{t("appstore.stayTunedDesc")}</p>
            </div>
          </div>

          {/* Apps Section */}
          <div className="appstore-apps-section">
            <h3>{t("appstore.appsWeLove")}</h3>
            <div className="appstore-apps-grid">
              {[1, 2, 3].map((i) => (
                <div key={i} className="appstore-app-placeholder">
                  <div className="appstore-app-icon-ph" />
                  <div className="appstore-app-meta-ph">
                    <div className="appstore-app-line w-24" />
                    <div className="appstore-app-line w-16" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const AppStoreWindow = WindowsWrapper(AppStore, "app-store");

export default AppStoreWindow;
