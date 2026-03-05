import { create } from "zustand";
import type { Lang } from "@/lib/i18n";

interface LanguageStore {
  lang: Lang;
  toggleLang: () => void;
}

const useLanguageStore = create<LanguageStore>((set) => ({
  lang: (localStorage.getItem("lang") as Lang) || "en",

  toggleLang: () =>
    set((state) => {
      const next: Lang = state.lang === "en" ? "tr" : "en";
      localStorage.setItem("lang", next);
      return { lang: next };
    }),
}));

export default useLanguageStore;
