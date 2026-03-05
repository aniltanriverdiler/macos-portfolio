import { create } from "zustand";

interface ThemeStore {
  isDarkMode: boolean;
  brightness: number;
  toggleDarkMode: () => void;
  setBrightness: (value: number) => void;
}

const useThemeStore = create<ThemeStore>((set) => ({
  isDarkMode:
    localStorage.getItem("darkMode") === "true",

  brightness: Number(localStorage.getItem("brightness") ?? 100),

  toggleDarkMode: () =>
    set((state) => {
      const next = !state.isDarkMode;
      localStorage.setItem("darkMode", next.toString());

      if (next) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      return { isDarkMode: next };
    }),

  setBrightness: (value: number) => {
    localStorage.setItem("brightness", value.toString());
    set({ brightness: value });
  },
}));

// Initialize dark class on load
if (localStorage.getItem("darkMode") === "true") {
  document.documentElement.classList.add("dark");
}

export default useThemeStore;
