import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { createPortal } from "react-dom";
import { Search, Folder, FileText, Globe, Image, File } from "lucide-react";
import {
  search,
  getAllSearchableItems,
  getItemsForLocation,
  type SearchableItem,
} from "@/lib/search";
import useWindowStore from "#store/window";
import useLocationStore from "#store/location";
import type { Location } from "#types";

// Defines the search scope for Spotlight: all items or only those in the current folder
type Scope = "all" | "folder";

// Mapping of file types to icon components for the Spotlight feature
const FILE_TYPE_ICONS: Record<string, typeof FileText> = {
  txt: FileText,
  pdf: File,
  img: Image,
  url: Globe,
  fig: Globe,
};

// Gets the icon for a given item in the Spotlight feature
function getItemIcon(item: SearchableItem) {
  if (item.kind === "folder") return Folder;
  return FILE_TYPE_ICONS[item.fileType ?? ""] ?? File;
}

// Returns a subtitle label describing the type of item in Spotlight
function getItemSubtitle(item: SearchableItem): string {
  if (item.kind === "folder") return "Folder";
  if (item.fileType === "txt") return "Text Document";
  if (item.fileType === "pdf") return "PDF Document";
  if (item.fileType === "img") return "Image";
  if (item.fileType === "url") return "Website";
  if (item.fileType === "fig") return "Design File";
  return "File";
}

// Defines the props for the Spotlight component
interface SpotlightProps {
  onClose: () => void;
}

export default function Spotlight({ onClose }: SpotlightProps) {
  // State management for the Spotlight feature
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scope, setScope] = useState<Scope>("all");
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();

  // Memoized items for the Spotlight feature
  const items = useMemo(() => {
    if (scope === "folder") return getItemsForLocation(activeLocation);
    return getAllSearchableItems();
  }, [scope, activeLocation]);

  const results = useMemo(() => search(query, items), [query, items]);

  // Handles the change of the query in the Spotlight feature
  const handleQueryChange = (value: string) => {
    setQuery(value);
    setSelectedIndex(0);
  };

  // Focuses the input field in the Spotlight feature
  useEffect(() => {
    requestAnimationFrame(() => inputRef.current?.focus());
  }, []);

  // Scrolls to the selected item in the Spotlight feature
  const scrollToSelected = useCallback((index: number) => {
    const list = listRef.current;
    if (!list) return;
    const item = list.children[index] as HTMLElement | undefined;
    item?.scrollIntoView({ block: "nearest" });
  }, []);

  // Opens an item in the Spotlight feature
  const openItem = useCallback(
    (item: SearchableItem) => {
      onClose();

      if (item.raw.fileType === "pdf") {
        openWindow("resume");
        return;
      }

      if (item.kind === "folder") {
        setActiveLocation(item.raw as unknown as Location);
        openWindow("finder");
        return;
      }

      if (["fig", "url"].includes(item.raw.fileType ?? "") && item.raw.href) {
        window.open(item.raw.href, "_blank");
        return;
      }

      openWindow(`${item.raw.fileType}${item.raw.kind}`, item.raw);
    },
    [onClose, openWindow, setActiveLocation],
  );

  // Manages keyboard navigation and shortcuts within Spotlight
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => {
          const next = Math.min(prev + 1, results.length - 1);
          scrollToSelected(next);
          return next;
        });
        return;
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => {
          const next = Math.max(prev - 1, 0);
          scrollToSelected(next);
          return next;
        });
        return;
      }

      if (e.key === "Enter" && results[selectedIndex]) {
        e.preventDefault();
        openItem(results[selectedIndex]);
        return;
      }

      if (e.key === "Tab") {
        e.preventDefault();
        setScope((s) => (s === "all" ? "folder" : "all"));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [results, selectedIndex, onClose, openItem, scrollToSelected]);

  return createPortal(
    <div
      className="fixed inset-0 z-9999 flex items-start justify-center pt-[18vh]"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Spotlight Panel */}
      <div
        className="relative w-[680px] max-w-[90vw] bg-white/10 dark:bg-gray-900/40 backdrop-blur-2xl rounded-[20px] shadow-2xl border border-white/20 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center gap-4 px-5 py-4">
          <Search className="w-6 h-6 text-white/50 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            placeholder="Spotlight Search"
            className="flex-1 bg-transparent text-white text-xl font-light placeholder:text-white/30 outline-none"
            autoComplete="off"
            spellCheck={false}
          />

          {/* Scope Toggle */}
          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={() => setScope("all")}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                scope === "all"
                  ? "bg-blue-500/80 text-white"
                  : "bg-white/10 text-white/40 hover:bg-white/20 hover:text-white/60"
              }`}
            >
              All Files
            </button>
            <button
              onClick={() => setScope("folder")}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                scope === "folder"
                  ? "bg-blue-500/80 text-white"
                  : "bg-white/10 text-white/40 hover:bg-white/20 hover:text-white/60"
              }`}
            >
              This Folder
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-4 h-px bg-white/10" />

        {/* Results */}
        {query.trim() && (
          <div
            ref={listRef}
            className="max-h-[400px] overflow-y-auto py-2 px-2"
          >
            {results.length === 0 ? (
              <div className="px-4 py-8 text-center">
                <p className="text-white/50 text-sm font-medium">
                  No results found
                </p>
                <p className="text-white/25 text-xs mt-1">
                  Try a different search term
                </p>
              </div>
            ) : (
              results.map((item, index) => {
                const IconComponent = getItemIcon(item);
                const isSelected = index === selectedIndex;

                return (
                  <div
                    key={item.id}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl cursor-pointer transition-all ${
                      isSelected
                        ? "bg-blue-500/80 shadow-lg shadow-blue-500/20"
                        : "hover:bg-white/10"
                    }`}
                    onClick={() => openItem(item)}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                      <IconComponent className="w-4.5 h-4.5 text-white/80" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium truncate">
                        {item.name}
                      </p>
                      <p className="text-white/40 text-[11px] truncate">
                        {getItemSubtitle(item)} — {item.locationPath}
                      </p>
                    </div>

                    {isSelected && (
                      <span className="text-white/50 text-xs shrink-0">
                        ↵ Open
                      </span>
                    )}
                  </div>
                );
              })
            )}
          </div>
        )}

        {/* Footer Hints */}
        {!query.trim() && (
          <div className="px-5 py-4 flex items-center justify-between text-white/25 text-xs">
            <span>Type to search files, folders, and projects</span>
            <div className="flex items-center gap-3">
              <span>
                <kbd className="px-1.5 py-0.5 rounded-md bg-white/10 text-white/50 text-[10px] font-medium">
                  Tab
                </kbd>{" "}
                Toggle scope
              </span>
              <span>
                <kbd className="px-1.5 py-0.5 rounded-md bg-white/10 text-white/50 text-[10px] font-medium">
                  Esc
                </kbd>{" "}
                Close
              </span>
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}
