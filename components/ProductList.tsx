import educasso from "@/images/educasso.svg";
import wikaro from "@/images/wikaro.svg";
import wisek from "@/images/wisek.svg";
import uneebee from "@/images/uneebee.svg";
import { Locale } from "@/types";
import { getDictionary } from "@/dictionaries";
import Card from "./Card";

const products = [
  { key: "wikaro", img: wikaro },
  { key: "educasso", img: educasso },
  { key: "wisek", img: wisek },
  { key: "uneebee", img: uneebee },
];

interface ProductListProps {
  locale: Locale;
}

export default async function ProductList({ locale }: ProductListProps) {
  const t = await getDictionary(locale);

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-2 py-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0 sm:py-10 lg:grid-cols-4 lg:gap-4 xl:gap-8">
      {products.map((item) => (
        <Card
          key={item.key}
          title={t.products[item.key].title}
          description={t.products[item.key].description}
          image={{ src: item.img, alt: t.products[item.key].title }}
          action={{ href: t.products[item.key].href, label: t.products.view }}
        />
      ))}
    </div>
  );
}
