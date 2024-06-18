import { getDictionary } from "@/dictionaries";
import { LanguageParams } from "@/types";
import { Metadata } from "next";
import { IconBrain } from "@tabler/icons-react";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
    icon: null,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: null,
  },
  {
    name: "Simple queues.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.",
    icon: null,
  },
  {
    name: "Advanced security.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
    icon: null,
  },
  {
    name: "Powerful API.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: null,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ",
    icon: null,
  },
];

interface ProductProps {
  params: LanguageParams;
}

export async function generateMetadata({
  params,
}: ProductProps): Promise<Metadata> {
  const t = await getDictionary(params.lang);

  return {
    title: t.products.zoonk.metadata.title,
    description: t.products.zoonk.metadata.description,
    alternates: {
      canonical: "/en/products/zoonk",
      languages: { en: "/en/products/zoonk", pt: "/pt/products/zoonk" },
    },
  };
}

export default async function Page({ params }: ProductProps) {
  const t = await getDictionary(params.lang);

  return (
    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
      <div className="mt-8 sm:mt-32 lg:mt-16">
        <span className="rounded-full bg-blue-600/10 flex w-max gap-x-2 items-center px-3 py-1 text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-600/10">
          <IconBrain size={16} aria-hidden="true" />
          {t.products.zoonk.name}
        </span>
      </div>

      <h1 className="mt-6 sm:mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        {t.products.zoonk.title}
      </h1>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        {t.products.zoonk.subtitle}
      </p>

      <div className="mt-10 flex items-center gap-x-6">
        <a
          href={t.products.zoonk.cta.url}
          className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          {t.products.zoonk.cta.label}
        </a>

        <a
          href="https://github.com/zoonk/zoonk"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          {t.products.github} <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
