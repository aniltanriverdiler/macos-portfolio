import WindowControls from "#components/WindowControls";
import { techStack } from "#constants/index";
import WindowsWrapper from "#hoc/WindowsWrapper";
import useTranslation from "#hooks/useTranslation";
import { Check, Flag } from "lucide-react";
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

const Terminal = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Window Header */}
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2>{t("terminal.title")}</h2>
      </div>

      {/* Tech Stack */}
      <div className="techstack">
        <p>
          <span className="font-bold">@anil % </span>
          {t("terminal.showCommand")}
        </p>

        {/* Tech Stack Labels */}
        <div className="label">
          <p className="w-32">{t("terminal.category")}</p>
          <p>{t("terminal.technologies")}</p>
        </div>

        {/* Tech Stack Items */}
        <ul className="content">
          {techStack.map(({ category, items }) => (
            <li key={category} className="flex items-center">
              <Check className="check" size={20} />
              <h3>{CATEGORY_KEYS[category] ? t(CATEGORY_KEYS[category]) : category}</h3>
              <ul>
                {items.map((item, i) => (
                  <li key={i}>
                    {item} {i < items.length - 1 ? "," : ""}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* Footnote */}
        <div className="footnote">
          <p>
            <Check size={20} /> {t("terminal.loadSuccess")}
          </p>

          <p className="text-black dark:text-white">
            <Flag size={15} fill="currentColor" />
            {t("terminal.renderTime")}
          </p>
        </div>
      </div>
    </>
  );
};

// Wrap the Terminal component in the WindowsWrapper HOC
const TerminalWindow = WindowsWrapper(Terminal, "terminal");

export default TerminalWindow;
