import { useRef } from "react";
import { Tooltip } from "react-tooltip";

import { dockApps } from "#constants/index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useWindowStore from "#store/window";
import useTranslation from "#hooks/useTranslation";
import type { TranslationKey } from "@/lib/i18n";

const DOCK_LABEL_KEYS: Record<string, TranslationKey> = {
  finder: "dock.portfolio",
  safari: "dock.safari",
  "app-store": "dock.appStore",
  photos: "dock.gallery",
  contact: "dock.contact",
  terminal: "dock.skills",
  spotify: "dock.spotify",
  settings: "dock.settings",
  snake: "dock.snake",
  "activity-monitor": "dock.activityMonitor",
  mail: "dock.mail",
  trash: "dock.archive",
};

const Dock = () => {
  const { openWindow, closeWindow, windows } = useWindowStore();
  const { t } = useTranslation();
  const dockRef = useRef<HTMLDivElement>(null);

  // Animate the icons when the mouse moves over the dock
  useGSAP(
    () => {
      const dock = dockRef.current;
      if (!dock) return;

      const icons = dock.querySelectorAll(".dock-icon");

      const animateIcons = (mouseX: number) => {
        const { left } = dock.getBoundingClientRect();

        icons.forEach((icon: Element) => {
          const { left: iconLeft, width } = icon.getBoundingClientRect();
          const center = iconLeft - left + width / 2;
          const distance = Math.abs(mouseX - center);

          const intensity = Math.exp(-(distance ** 2.5) / 20000);

          gsap.to(icon, {
            scale: 1 + 0.25 * intensity,
            y: -15 * intensity,
            duration: 0.2,
            ease: "power1.out",
          });
        });
      };

      const handleMouseMove = (e: MouseEvent) => {
        const { left } = dock.getBoundingClientRect();

        animateIcons(e.clientX - left);
      };

      // Reset the icons when the mouse leaves the dock
      const resetIcons = () => {
        icons.forEach((icon: Element) => {
          gsap.to(icon, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power1.out",
          });
        });
      };

      dock.addEventListener("mousemove", handleMouseMove);
      dock.addEventListener("mouseleave", resetIcons);

      return () => {
        dock.removeEventListener("mousemove", handleMouseMove);
        dock.removeEventListener("mouseleave", resetIcons);
      };
    },
    { scope: dockRef },
  );

  const toggleApp = (
    app: Pick<(typeof dockApps)[number], "id" | "canOpen" | "href">,
  ) => {
    if (!app.canOpen) return;

    if (app.href) {
      window.open(app.href, "_blank");
      return;
    }

    const win = windows[app.id];

    if (!win) {
      console.error(`Window not found for app: ${app.id}`);
      return;
    }

    if (win.isOpen) {
      closeWindow(app.id);
    } else {
      openWindow(app.id);
    }
  };

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map(({ id, name, icon, canOpen, href }) => {
          const label = DOCK_LABEL_KEYS[id] ? t(DOCK_LABEL_KEYS[id]) : name;
          return (
            <div key={id} className="relative flex justify-center">
              <button
                type="button"
                className="dock-icon"
                aria-label={label}
                data-tooltip-id="dock-tooltip"
                data-tooltip-content={label}
                data-tooltip-delay-show={150}
                disabled={!canOpen}
                onClick={() => toggleApp({ id, canOpen, href })}
              >
                <img
                  src={`/images/${icon}`}
                  alt={label}
                  loading="lazy"
                  className={canOpen ? "" : "opacity-60"}
                />
              </button>
            </div>
          );
        })}

        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
};

export default Dock;
