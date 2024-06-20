import { PRODUCT_LIST } from "@/utils/products";

export type Locale = "en" | "pt";
export interface LanguageParams {
  lang: Locale;
}

export type Product = (typeof PRODUCT_LIST)[number]["key"];
