// Location and File System Types
export type FileType = "txt" | "url" | "img" | "pdf" | "fig";
export type ItemKind = "file" | "folder";
export type LocationType = "work" | "about" | "resume" | "trash";

export interface LocationChild {
  id: number;
  name: string;
  icon: string;
  kind: ItemKind;
  fileType?: FileType;
  position?: string;
  windowPosition?: string;
  href?: string;
  imageUrl?: string;
  description?: string[];
  subtitle?: string;
  image?: string;
  children?: LocationChild[];
}

export interface Location {
  id: number;
  type: LocationType;
  name: string;
  icon: string;
  kind: ItemKind;
  children: LocationChild[];
}

export interface Locations {
  work: Location;
  about: Location;
  resume: Location;
  trash: Location;
}
