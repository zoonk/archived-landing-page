import { getDictionary } from "@/dictionaries";
import { LanguageParams, Product } from "@/types";
import { Metadata } from "next";
import { PRODUCT_LIST } from "@/utils/products";

const github: Record<Product, string | null> = {
  zoonk: "https://github.com/zoonk/zoonk",
  learn: null,
  school: null,
  devs: null,
  games: null,
};

interface ProductProps {
  params: LanguageParams & { name: Product };
}

export async function generateStaticParams() {
  return PRODUCT_LIST.map((product) => ({ name: product.key }));
}

export async function generateMetadata({
  params,
}: ProductProps): Promise<Metadata> {
  const t = await getDictionary(params.lang);
  const metadata = t.products[params.name].metadata;

  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: `/en/products/${params.name}`,
      languages: {
        en: `/en/products/${params.name}`,
        pt: `/en/products/${params.name}`,
      },
    },
  };
}

export default async function Page({ params }: ProductProps) {
  const t = await getDictionary(params.lang);
  const product = t.products[params.name];
  const githubLink = github[params.name];
  const ProductIcon = PRODUCT_LIST.find((item) => item.key === params.name)
    ?.icon;

  return (
    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
      <div className="mt-8 sm:mt-32 lg:mt-16">
        <span className="rounded-full bg-blue-600/10 flex w-max gap-x-2 items-center px-3 py-1 text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-600/10">
          {ProductIcon && <ProductIcon size={16} aria-hidden="true" />}
          {product.name}
        </span>
      </div>

      <h1 className="mt-6 sm:mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        {product.title}
      </h1>

      <p className="mt-6 text-lg leading-8 text-gray-600">{product.subtitle}</p>

      <div className="mt-10 flex items-center gap-x-6">
        <a
          href={product.cta.url}
          className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          {product.cta.label}
        </a>

        {githubLink && (
          <a
            href={githubLink}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            {t.products.github} <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
    </div>
  );
}
