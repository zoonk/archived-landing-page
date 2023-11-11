import Hero from "@/components/Hero";
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
    twitter: {
      title: t.home.metadata.twitter.title,
      description: t.home.metadata.twitter.description,
      creator: "@zoonkeducation",
    },
  };
}

export default async function Home({ params }: HomeProps) {
  return (
    <main>
      <Hero locale={params.lang} />
    </main>
  );
}
