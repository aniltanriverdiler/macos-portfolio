import WindowControls from "#components/WindowControls";
import { locations } from "#constants/index";
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

  const openItem = (item: LocationChild) => {
    if (item.fileType === "pdf") return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item as Location);
    if (["fig", "url"].includes(item.fileType ?? "") && item.href)
      return window.open(item.href, "_blank");

    openWindow(`${item.fileType}${item.kind}`, item);
  };

  const renderList = (name: string, items: LocationChild[] | Location[]) => (
    <div>
      <h3>{name}</h3>

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

      <div className="bg-white dark:bg-gray-900 flex h-full">
        <div className="sidebar">
          {renderList(t("finder.favorites"), Object.values(locations))}
          {renderList(t("finder.myProjects"), locations.work.children)}
        </div>

        <ul className="content">
          {activeLocation?.children.map((item) => (
            <li
              key={item.id}
              className={item.position}
              onClick={() => openItem(item)}
            >
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
