import { techStack } from "#constants/index";
import useTranslation from "#hooks/useTranslation";
import type { TranslationKey } from "@/lib/i18n";

const CATEGORY_KEYS: Record<string, TranslationKey> = {
  Frontend: "techstack.frontend",
  Mobile: "techstack.mobile",
  Styling: "techstack.styling",
  "State Management": "techstack.stateManagement",
  Backend: "techstack.backend",
  Database: "techstack.database",
  "Dev Tools": "techstack.devTools",
};

export default function Terminal() {
  const { t } = useTranslation();

  return (
    <div className="min-h-full px-4 py-4 bg-white text-black font-mono text-sm">
      {/* Command prompt */}
      <p className="text-black mb-4">
        <span className="font-bold">@anil % </span>
        {t("terminal.showCommand")}
      </p>

      {/* Tech stack categories */}
      <div className="space-y-4">
        {techStack.map(({ category, items }) => (
          <div key={category}>
            <h3 className="font-bold text-[#00A154] mb-2">
              &gt;{" "}
              {CATEGORY_KEYS[category] ? t(CATEGORY_KEYS[category]) : category}
            </h3>
            <ul className="space-y-1 ml-2">
              {items.map((item) => (
                <li key={item} className="text-black">
                  - {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footnote */}
      <div className="mt-6 pt-4 border-t border-dashed border-gray-200 text-[#00A154] text-xs space-y-1">
        <p>✓ {t("terminal.loadSuccess")}</p>
        <p className="text-black">{t("terminal.renderTime")}</p>
      </div>
    </div>
  );
}
