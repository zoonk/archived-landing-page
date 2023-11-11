import "server-only";

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  pt: () => import("./pt.json").then((module) => module.default),
};

export const getDictionary = async (locale) => dictionaries[locale]();
