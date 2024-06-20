import { Locale, Product } from "@/types";
import { getDictionary } from "@/dictionaries";
import Card from "./Card";
import { IconBrain, IconNotebook, TablerIconsProps } from "@tabler/icons-react";

const products: Array<{
  key: Product;
  icon: (props: TablerIconsProps) => JSX.Element;
}> = [
  { key: "zoonk", icon: IconBrain },
  { key: "learn", icon: IconNotebook },
];

interface ProductListProps {
  locale: Locale;
}

export default async function ProductList({ locale }: ProductListProps) {
  const t = await getDictionary(locale);

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 py-6 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 sm:py-10 lg:grid-cols-4 xl:grid-cols-5 lg:gap-4 xl:gap-8">
      {products.map((item) => (
        <Card
          key={item.key}
          title={t.products[item.key].name}
          description={t.products[item.key].short_description}
          icon={<item.icon size={24} />}
          action={{
            href: `/${locale}/products/${item.key}`,
            label: t.products.learn_more,
          }}
        />
      ))}
    </div>
  );
}
