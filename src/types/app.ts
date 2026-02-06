// Navigation and Application Types
export interface NavLink {
  id: number;
  name: string;
  type: string;
}

export interface NavIcon {
  id: number;
  img: string;
}

export interface DockApp {
  id: string;
  name: string;
  icon: string;
  canOpen: boolean;
}
