import WindowControls from "#components/WindowControls";
import { featuredSkills, locations } from "#constants/index";
import useWindowStore from "#store/window";
import WindowsWrapper from "#hoc/WindowsWrapper";
import useLocationStore from "#store/location";
import useTranslation from "#hooks/useTranslation";
import type { LocationChild, Location } from "#types";
import clsx from "clsx";
import { Search } from "lucide-react";

const Finder = () => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();
  const { t, lang } = useTranslation();

  const localName = (item: { name: string; name_tr?: string }) =>
    lang === "tr" && item.name_tr ? item.name_tr : item.name;

  const itemKey = (item: LocationChild) =>
    [
      activeLocation.id,
      activeLocation.name,
      item.kind,
      item.fileType ?? "folder",
      item.id,
      item.name,
    ].join(":");

  const openItem = (item: LocationChild) => {
    if (item.fileType === "pdf") return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item as Location);
    if (["fig", "url"].includes(item.fileType ?? "") && item.href)
      return window.open(item.href, "_blank");
    openWindow(`${item.fileType}${item.kind}`, item);
  };

  // Generic sidebar section: header + clickable rows
  const renderSection = (
    heading: string,
    items: Array<{ id: number; name: string; name_tr?: string; icon: string; kind: string }>
  ) => (
    <div>
      <h3>{heading}</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveLocation(item as Location)}
            className={clsx(
              item.id === activeLocation.id ? "active" : "not-active"
            )}
          >
            <img src={item.icon} alt={localName(item)} className="w-4" />
            <p className="text-sm font-medium truncate">{localName(item)}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="bg-white dark:bg-gray-900 flex h-full overflow-hidden">
        {/* ── Sidebar ─────────────────────────────────────────────────── */}
        <div className="sidebar overflow-y-auto flex flex-col">
          {/* Favorites: Work / About me / Resume / Trash */}
          {renderSection(t("finder.favorites"), Object.values(locations))}

          {/* My Projects: Web Projects + Mobile Projects only */}
          {renderSection(t("finder.myProjects"), locations.work.children)}

          {/* Skills - compact featured chips */}
          <div className="mt-1">
            <h3 className="text-xs font-medium text-gray-400 mb-2 px-1 tracking-wide">
              {t("finder.skills")}
            </h3>
            <div className="skill-chip-list px-1 pb-1">
              {featuredSkills.map((skill) => (
                <span key={skill} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Content area ────────────────────────────────────────────── */}
        <ul className="content" key={`${activeLocation.id}:${activeLocation.name}`}>
          {activeLocation?.children.map((item) => (
            <li key={itemKey(item)} onClick={() => openItem(item)}>
              <img src={item.icon} alt={localName(item)} />
              <p>{localName(item)}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowsWrapper(Finder, "finder");

export default FinderWindow;
