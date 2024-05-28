import Hero from "@/components/Hero";
import { getDictionary } from "@/dictionaries";
import type { LanguageParams } from "@/types";
import type { Metadata } from "next";

const WAILIST_FORM_URL = {
  en: "https://docs.google.com/forms/d/e/1FAIpQLSe7ScgpDQMapGPoW97Wn0SnxClORESnN4umcjhipRwNdSBvww/viewform?embedded=true",
  pt: "https://docs.google.com/forms/d/e/1FAIpQLScvl38CfvgMD59OO2rd6LezhEqmuvHQdsqLbqSDXyBh9BMNxg/viewform?embedded=true",
};

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

      <div className="waitlist h-[1850px] md:h-[1644px]">
        <iframe src={WAILIST_FORM_URL[params.lang]} width="640" height="1644">
          Loading…
        </iframe>
      </div>
    </article>
  );
}
