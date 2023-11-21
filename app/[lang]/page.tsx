import Hero from "@/components/Hero";
import HomeSponsors from "@/components/HomeSponsors";
import ProductList from "@/components/ProductList";
import { getDictionary } from "@/dictionaries";
import type { LanguageParams } from "@/types";
import type { Metadata } from "next";

interface HomeProps {
  params: LanguageParams;
}

export async function generateMetadata({
  params,
}: HomeProps): Promise<Metadata> {
  const t = await getDictionary(params.lang);

  return {
    title: t.home.metadata.title,
    description: t.home.metadata.description,
    alternates: {
      canonical: "/en",
      languages: { en: "/en", pt: "/pt" },
    },
    twitter: {
      title: t.home.metadata.twitter.title,
      description: t.home.metadata.twitter.description,
      creator: "@zoonkeducation",
    },
  };
}

export default async function Home({ params }: HomeProps) {
  return (
    <article>
      <Hero locale={params.lang} />
      <ProductList locale={params.lang} />
      <HomeSponsors locale={params.lang} />
    </article>
  );
}
