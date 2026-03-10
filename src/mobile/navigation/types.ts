import type { Location, LocationChild } from "#types";

export type MobileScreen =
  | { name: "home" }
  | { name: "portfolio" }
  | { name: "folder"; location: Location }
  | { name: "file-text"; file: LocationChild }
  | { name: "file-image"; file: LocationChild }
  | { name: "terminal" }
  | { name: "safari" }
  | { name: "photos" }
  | { name: "resume" }
  | { name: "contact" };

export type MobileScreenName = MobileScreen["name"];
