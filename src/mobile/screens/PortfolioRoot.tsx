import { locations } from "#constants/index";
import useTranslation from "#hooks/useTranslation";
import { useMobileNavStore } from "../navigation/store";
import type { FolderPayload } from "../navigation/types";

const ROOT_FOLDERS: FolderPayload[] = [
  locations.work,
  locations.about,
  locations.resume,
  locations.trash,
];

export default function PortfolioRoot() {
  const { lang } = useTranslation();
  const push = useMobileNavStore((s) => s.push);

  const displayName = (loc: FolderPayload) =>
    lang === "tr" && loc.name_tr ? loc.name_tr : loc.name;

  return (
    <div className="min-h-full px-4 py-6 bg-white text-black overflow-y-auto">
      <div className="grid grid-cols-3 gap-6">
        {ROOT_FOLDERS.map((loc) => (
          <button
            key={loc.id}
            type="button"
            onClick={() => push({ name: "folder", location: loc })}
            className="flex flex-col items-center gap-2 active:scale-[0.98] transition-transform"
          >
            <img
              src="/images/folder.png"
              alt=""
              className="w-14 h-14 object-contain"
            />
            <span className="text-sm font-medium text-center text-black">
              {displayName(loc)}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
