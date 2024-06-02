import { langMap } from "./tokens";

export function t(key: string, lang: string) {
  return langMap[lang]?.[key] || key;
}

export function createTranslate(lang: string) {
  return (key: string) => t(key, lang);
}
