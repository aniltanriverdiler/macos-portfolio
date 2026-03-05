import WindowControls from "#components/WindowControls";
import { frequentlyVisited, safariSocialsLinks } from "#constants/index";
import WindowsWrapper from "#hoc/WindowsWrapper";
import useTranslation from "#hooks/useTranslation";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  Home,
  PanelLeft,
  Plus,
  RefreshCcw,
  Search,
  Share,
  ShieldHalf,
} from "lucide-react";

const Safari = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Window Header */}
      <div id="window-header">
        <WindowControls target="safari" />

        {/* Menu Button */}
        <PanelLeft className="ml-10 icon" />

        {/* Navigation Buttons */}
        <div className="flex items-center gap-1.5 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
          <RefreshCcw className="icon" />
          <Home className="icon" />
        </div>

        {/* Search Bar */}
        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />

          <div className="search">
            <Search className="icon" />

            <input
              type="text"
              placeholder={t("safari.searchPlaceholder")}
              className="flex-1"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>

      {/* SNS Links Section */}
      <div className="blog">
        <h2>{t("safari.snsLinks")}</h2>

        <div className="grid grid-cols-5 sm:grid-cols-7 gap-6">
          {safariSocialsLinks.map(({ title, url, icon }) => (
            <div
              key={title}
              className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
              onClick={() => window.open(url, "_blank")}
            >
              <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center mb-2 overflow-hidden">
                <img
                  src={icon}
                  alt={title}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-sm text-center dark:text-gray-200">{title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Frequently Visited Section */}
      <div className="blog">
        <h2>{t("safari.frequentlyVisited")}</h2>

        <div className="grid grid-cols-5 sm:grid-cols-7 gap-6 mb-2">
          {frequentlyVisited.map(({ title, url, icon }) => (
            <div
              key={title}
              className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
              onClick={() => window.open(url, "_blank")}
            >
              <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center mb-2 overflow-hidden">
                <img
                  src={icon}
                  alt={title}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-sm text-center dark:text-gray-200">{title}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// Wrap the Safari component in the WindowsWrapper HOC
const SafariWindow = WindowsWrapper(Safari, "safari");

export default SafariWindow;
