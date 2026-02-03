import { ui, defaultLang, type Lang, type TranslationKey } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const lang = url.pathname.split("/")[1];
  return lang === "en" ? "en" : defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return ui[lang][key];
  };
}
