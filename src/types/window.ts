// Window Management Types
import type { LocationChild } from "./location";

export type WindowKey =
  | "finder"
  | "contact"
  | "resume"
  | "safari"
  | "photos"
  | "terminal"
  | "txtfile"
  | "imgfile";

export interface WindowState {
  isOpen: boolean;
  zIndex: number;
  data: LocationChild | null;
}

export interface WindowConfig {
  [key: string]: WindowState;
}

export interface WindowStore {
  windows: WindowConfig;
  nextZIndex: number;
  openWindow: (windowKey: string, data?: LocationChild | null) => void;
  closeWindow: (windowKey: string) => void;
  focusWindow: (windowKey: string) => void;
}
