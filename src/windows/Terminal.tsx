import WindowControls from "#components/WindowControls";
import { techStack } from "#constants/index";
import WindowsWrapper from "#hoc/WindowsWrapper";
import { Check, Flag } from "lucide-react";

const Terminal = () => {
  return (
    <>
      {/* Window Header */}
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2>Tech Stack</h2>
      </div>

      {/* Tech Stack */}
      <div className="techstack">
        <p>
          <span className="font-bold">@adrian % </span>
          show tech stack
        </p>

        {/* Tech Stack Labels */}
        <div className="label">
          <p className="w-32">Category</p>
          <p>Technologies</p>
        </div>

        {/* Tech Stack Items */}
        <ul className="content">
          {techStack.map(({ category, items }) => (
            <li key={category} className="flex items-center">
              <Check className="check" size={20} />
              <h3>{category}</h3>
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
            <Check size={20} /> 5 of 5 stacks loaded successfully (100%)
          </p>

          <p className="text-black">
            <Flag size={15} fill="black" />
            Render time 6ms
          </p>
        </div>
      </div>
    </>
  );
};

// Wrap the Terminal component in the WindowsWrapper HOC
const TerminalWindow = WindowsWrapper(Terminal, "terminal");

export default TerminalWindow;
