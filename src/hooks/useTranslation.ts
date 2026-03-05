import useLanguageStore from "#store/language";
import { t, type TranslationKey } from "@/lib/i18n";
import { useCallback } from "react";

export default function useTranslation() {
  const { lang, toggleLang } = useLanguageStore();

  const translate = useCallback(
    (key: TranslationKey) => t(key, lang),
    [lang],
  );

  return { t: translate, lang, toggleLang };
}
