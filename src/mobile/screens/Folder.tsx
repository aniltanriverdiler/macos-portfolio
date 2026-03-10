import type { LocationChild } from "#types";
import type { FolderPayload } from "../navigation/types";
import useTranslation from "#hooks/useTranslation";
import { useMobileNavStore } from "../navigation/store";

type Props = { location: FolderPayload };

function getChildren(loc: FolderPayload): LocationChild[] {
  return loc.children ?? [];
}

function displayName(item: LocationChild | FolderPayload, lang: "en" | "tr") {
  return lang === "tr" && item.name_tr ? item.name_tr : item.name;
}

function fileIcon(file: LocationChild): string {
  if (file.fileType === "img" && (file.imageUrl ?? file.image)) {
    return file.imageUrl ?? file.image ?? file.icon;
  }
  return file.icon;
}

export default function Folder({ location }: Props) {
  const { lang } = useTranslation();
  const push = useMobileNavStore((s) => s.push);

  const children = getChildren(location);

  const handleFolderClick = (child: LocationChild) => {
    if (child.kind === "folder" && child.children) {
      push({
        name: "folder",
        location: child as LocationChild & {
          kind: "folder";
          children: LocationChild[];
        },
      });
    }
  };

  const handleFileClick = (file: LocationChild) => {
    if (file.kind !== "file") return;
    switch (file.fileType) {
      case "txt":
        push({ name: "file-text", file });
        break;
      case "img":
        push({ name: "file-image", file });
        break;
      case "url":
      case "fig":
        if (file.href) window.open(file.href, "_blank");
        break;
      case "pdf":
        if (file.href) window.open(file.href, "_blank");
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-full px-4 py-6 bg-white text-black overflow-y-auto">
      {/* Grid */}
      <div className="grid grid-cols-3 gap-6">
        {children.map((child) => (
          <button
            key={child.id}
            type="button"
            onClick={() =>
              child.kind === "folder"
                ? handleFolderClick(child)
                : handleFileClick(child)
            }
            className="flex flex-col items-center gap-2 active:scale-[0.98] transition-transform"
          >
            {child.kind === "folder" ? (
              <img
                src="/images/folder.png"
                alt=""
                className="w-14 h-14 object-contain"
              />
            ) : child.fileType === "img" && (child.imageUrl ?? child.image) ? (
              <div className="w-14 h-14 rounded overflow-hidden border border-gray-200 bg-gray-50">
                <img
                  src={child.imageUrl ?? child.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <img
                src={fileIcon(child)}
                alt=""
                className="w-14 h-14 object-contain"
              />
            )}
            <span className="text-sm font-medium text-center text-black break-words max-w-full">
              {displayName(child, lang)}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
