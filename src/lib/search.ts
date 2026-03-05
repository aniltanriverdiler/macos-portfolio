import { locations } from "#constants/index";
import type { Location, LocationChild, LocationType } from "#types";

// Defines the searchable item interface for the Spotlight feature
export interface SearchableItem {
  id: string;
  name: string;
  name_tr?: string;
  icon: string;
  kind: LocationChild["kind"];
  fileType?: LocationChild["fileType"];
  href?: string;
  imageUrl?: string;
  description?: string[];
  description_tr?: string[];
  subtitle?: string;
  subtitle_tr?: string;
  locationPath: string;
  locationType: LocationType;
  raw: LocationChild;
  parentFolder?: LocationChild;
}

// Flattens the children of a location into a list of searchable items
function flattenChildren(
  children: LocationChild[],
  locationType: LocationType,
  pathPrefix: string,
  parentFolder?: LocationChild,
): SearchableItem[] {
  const results: SearchableItem[] = [];

  for (const child of children) {
    const currentPath = `${pathPrefix}/${child.name}`;
    const uniqueId = `${locationType}-${currentPath}-${child.id}`;

    results.push({
      id: uniqueId,
      name: child.name,
      name_tr: child.name_tr,
      icon: child.icon,
      kind: child.kind,
      fileType: child.fileType,
      href: child.href,
      imageUrl: child.imageUrl,
      description: child.description,
      description_tr: child.description_tr,
      subtitle: child.subtitle,
      subtitle_tr: child.subtitle_tr,
      locationPath: currentPath,
      locationType,
      raw: child,
      parentFolder,
    });

    if (child.children?.length) {
      results.push(
        ...flattenChildren(child.children, locationType, currentPath, child),
      );
    }
  }

  return results;
}

// Caches the searchable items for the Spotlight feature
let _cachedAll: SearchableItem[] | null = null;

// Gets all searchable items for the Spotlight feature
export function getAllSearchableItems(): SearchableItem[] {
  if (_cachedAll) return _cachedAll;

  const allLocations = Object.values(locations) as Location[];
  const items: SearchableItem[] = [];

  for (const loc of allLocations) {
    items.push(...flattenChildren(loc.children, loc.type, loc.name));
  }

  _cachedAll = items;
  return items;
}

// Gets the searchable items for a given location for the Spotlight feature
export function getItemsForLocation(location: Location): SearchableItem[] {
  return flattenChildren(location.children, location.type, location.name);
}

// Calculates the score of a match between a query and an item for the Spotlight feature
function matchScore(query: string, item: SearchableItem): number {
  const q = query.toLowerCase();
  const name = item.name.toLowerCase();
  const nameTr = item.name_tr?.toLowerCase() ?? "";

  if (name === q || nameTr === q) return 100;
  if (name.startsWith(q) || nameTr.startsWith(q)) return 80;
  if (name.includes(q) || nameTr.includes(q)) return 60;

  if (item.fileType && item.fileType.toLowerCase().includes(q)) return 40;

  if (item.description) {
    const descText = item.description.join(" ").toLowerCase();
    if (descText.includes(q)) return 30;
  }
  if (item.description_tr) {
    const descTrText = item.description_tr.join(" ").toLowerCase();
    if (descTrText.includes(q)) return 30;
  }

  if (item.subtitle && item.subtitle.toLowerCase().includes(q)) return 30;
  if (item.subtitle_tr && item.subtitle_tr.toLowerCase().includes(q)) return 30;
  if (item.locationPath.toLowerCase().includes(q)) return 20;

  return 0;
}

// Searches for items in the Spotlight feature
export function search(
  query: string,
  items: SearchableItem[],
  limit = 20,
): SearchableItem[] {
  if (!query.trim()) return [];

  const scored = items
    .map((item) => ({ item, score: matchScore(query, item) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map(({ item }) => item);
}
