import type { Location, LocationChild } from "#types";

/** Top-level Location or nested folder (LocationChild with kind="folder") */
export type FolderPayload =
  | Location
  | (LocationChild & { kind: "folder"; children: LocationChild[] });

export type MobileScreen =
  | { name: "home" }
  | { name: "portfolio" }
  | { name: "folder"; location: FolderPayload }
  | { name: "file-text"; file: LocationChild }
  | { name: "file-image"; file: LocationChild }
  | { name: "terminal" }
  | { name: "safari" }
  | { name: "photos" }
  | { name: "resume" }
  | { name: "contact" };

export type MobileScreenName = MobileScreen["name"];
