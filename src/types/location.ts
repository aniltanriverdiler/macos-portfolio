// Location and File System Types
export type FileType = "txt" | "url" | "img" | "pdf" | "fig";
export type ItemKind = "file" | "folder";
export type LocationType = "work" | "about" | "resume" | "trash";

export interface LocationChild {
  id: number;
  name: string;
  name_tr?: string;
  icon: string;
  kind: ItemKind;
  fileType?: FileType;
  position?: string;
  windowPosition?: string;
  href?: string;
  imageUrl?: string;
  description?: string[];
  description_tr?: string[];
  subtitle?: string;
  subtitle_tr?: string;
  image?: string;
  children?: LocationChild[];
}

export interface Location {
  id: number;
  type: LocationType;
  name: string;
  name_tr?: string;
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
