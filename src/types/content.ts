// Content Types for Blog, Gallery, Tech Stack, etc.
export interface BlogPost {
  id: number;
  date: string;
  title: string;
  image: string;
  link: string;
}

export interface TechStackCategory {
  category: string;
  items: string[];
}

export interface Social {
  id: number;
  text: string;
  icon: string;
  bg: string;
  link: string;
}

export interface PhotoLink {
  id: number;
  icon: string;
  title: string;
}

export interface GalleryItem {
  id: number;
  img: string;
}
