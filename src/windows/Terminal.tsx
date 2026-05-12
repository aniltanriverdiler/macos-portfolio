import WindowControls from "#components/WindowControls";
import { techStack } from "#constants/index";
import WindowsWrapper from "#hoc/WindowsWrapper";
import useTranslation from "#hooks/useTranslation";
import { Check, Flag } from "lucide-react";
import type { TranslationKey } from "@/lib/i18n";

const CATEGORY_KEYS: Record<string, TranslationKey> = {
  "Programming Languages": "techstack.programmingLanguages",
  Frontend: "techstack.frontend",
  Backend: "techstack.backend",
  "Databases & ORM": "techstack.databasesOrm",
  "Tools & Platforms": "techstack.toolsPlatforms",
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
        <div className="prompt-block">
          <p className="terminal-path">
            <span>~/portfolio</span>
            <span className="terminal-branch">main</span>
          </p>
          <p className="prompt-line">
            <span className="prompt-symbol">❯</span>
            <span>{t("terminal.showCommand")}</span>
          </p>
        </div>

        {/* Tech Stack Items */}
        <ul className="content">
          {techStack.map(({ category, items }) => (
            <li key={category} className="techstack-row">
              <div className="techstack-heading">
                <Check className="check" size={18} />
                <h3>{CATEGORY_KEYS[category] ? t(CATEGORY_KEYS[category]) : category}</h3>
              </div>
              <p>{items.join(", ")}</p>
            </li>
          ))}
        </ul>

        {/* Footnote */}
        <div className="footnote">
          <p>
            <Check size={20} /> {t("terminal.loadSuccess")}
          </p>

          <p className="render-time">
            <Flag size={15} fill="currentColor" />
            {t("terminal.renderTime")}
          </p>
          <p className="prompt-line prompt-return">
            <span className="prompt-symbol">❯</span>
            <span className="terminal-cursor" aria-hidden="true" />
          </p>
        </div>
      </div>
    </>
  );
};

// Wrap the Terminal component in the WindowsWrapper HOC
const TerminalWindow = WindowsWrapper(Terminal, "terminal");

export default TerminalWindow;
