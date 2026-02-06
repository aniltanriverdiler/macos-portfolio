// Store Types
import type { Location } from "./location";

export interface LocationStore {
  activeLocation: Location;
  setActiveLocation: (location: Location | null) => void;
  resetActiveLocation: () => void;
}
