import { frequentlyVisited, safariSocialsLinks } from "#constants/index";
import useTranslation from "#hooks/useTranslation";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  RefreshCcw,
  Search,
} from "lucide-react";

export default function Safari() {
  const { t } = useTranslation();

  return (
    <div className="min-h-full bg-white text-black">
      {/* Toolbar */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-200">
        <div className="flex items-center gap-1">
          <button type="button" className="p-1.5 rounded hover:bg-gray-100">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button type="button" className="p-1.5 rounded hover:bg-gray-100">
            <ChevronRight className="w-4 h-4" />
          </button>
          <button type="button" className="p-1.5 rounded hover:bg-gray-100">
            <RefreshCcw className="w-4 h-4" />
          </button>
          <button type="button" className="p-1.5 rounded hover:bg-gray-100">
            <Home className="w-4 h-4" />
          </button>
        </div>
        <div className="flex-1 flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
          <Search className="w-4 h-4 text-gray-500 shrink-0" />
          <input
            type="text"
            placeholder={t("safari.searchPlaceholder")}
            className="flex-1 bg-transparent text-sm outline-none min-w-0"
          />
        </div>
      </div>

      {/* SNS Links */}
      <div className="px-4 py-4">
        <h2 className="text-sm font-semibold text-gray-700 mb-3">
          {t("safari.snsLinks")}
        </h2>
        <div className="grid grid-cols-4 gap-4">
          {safariSocialsLinks.map(({ title, url, icon }) => (
            <button
              key={title}
              type="button"
              onClick={() => window.open(url, "_blank")}
              className="flex flex-col items-center p-3 rounded-xl bg-gray-50 hover:bg-gray-100 active:scale-95 transition-all"
            >
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-2 overflow-hidden shadow-sm">
                <img
                  src={icon}
                  alt={title}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="text-xs text-center text-gray-700 truncate w-full">
                {title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Frequently Visited */}
      <div className="px-4 pb-6">
        <h2 className="text-sm font-semibold text-gray-700 mb-3">
          {t("safari.frequentlyVisited")}
        </h2>
        <div className="grid grid-cols-4 gap-4">
          {frequentlyVisited.map(({ title, url, icon }) => (
            <button
              key={title}
              type="button"
              onClick={() => window.open(url, "_blank")}
              className="flex flex-col items-center p-3 rounded-xl bg-gray-50 hover:bg-gray-100 active:scale-95 transition-all"
            >
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-2 overflow-hidden shadow-sm">
                <img
                  src={icon}
                  alt={title}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="text-xs text-center text-gray-700 truncate w-full">
                {title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
