import type { Sponsor } from "@/types";

export const SPONSORS_DEFAULT = "https://github.com/sponsors/wceolin";

export const PLATINUM_SPONSORS: Sponsor[] = [
  {
    key: "sponsor0",
    href: SPONSORS_DEFAULT,
    img: null,
  },
];

export const GOLD_SPONSORS: Sponsor[] = [
  {
    key: "sponsor1",
    href: SPONSORS_DEFAULT,
    img: null,
  },
  {
    key: "sponsor2",
    href: SPONSORS_DEFAULT,
    img: null,
  },
  {
    key: "sponsor3",
    href: SPONSORS_DEFAULT,
    img: null,
  },
  {
    key: "sponsor4",
    href: SPONSORS_DEFAULT,
    img: null,
  },
  {
    key: "sponsor5",
    href: SPONSORS_DEFAULT,
    img: null,
  },
];

export const SILVER_SPONSORS: Sponsor[] = [
  {
    key: "sponsor6",
    href: SPONSORS_DEFAULT,
    img: null,
  },
  {
    key: "sponsor7",
    href: SPONSORS_DEFAULT,
    img: null,
  },
  {
    key: "sponsor8",
    href: SPONSORS_DEFAULT,
    img: null,
  },
  {
    key: "sponsor9",
    href: SPONSORS_DEFAULT,
    img: null,
  },
  {
    key: "sponsor10",
    href: SPONSORS_DEFAULT,
    img: null,
  },
];

export const SPONSORS = [...PLATINUM_SPONSORS, ...GOLD_SPONSORS];
