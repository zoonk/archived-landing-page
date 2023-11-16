import educasso from "@/images/educasso.svg";
import wikaro from "@/images/wikaro.svg";
import wisek from "@/images/wisek.svg";
import uneebee from "@/images/uneebee.svg";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Locale } from "@/types";
import { getDictionary } from "@/dictionaries";

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
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-2 px-6 py-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0 sm:py-10 lg:grid-cols-4 lg:gap-4 lg:px-8 xl:gap-8">
      {products.map((item) => (
        <div
          key={item.key}
          className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50 flex-col sm:p-6"
        >
          <Image
            src={item.img}
            height={24}
            unoptimized
            alt={t.products[item.key].title}
          />

          <div className="flex h-full flex-col">
            <h3 className="font-semibold text-gray-900">
              {t.products[item.key].title}
            </h3>

            <p className="mt-1 flex-1 text-gray-600">
              {t.products[item.key].description}
            </p>

            <Button
              href={t.products[item.key].href}
              color="primary"
              className="mt-4 w-fit"
            >
              {t.products.view}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
