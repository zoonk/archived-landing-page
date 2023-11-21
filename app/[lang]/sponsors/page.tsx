import { Button } from "@/components/Button";
import SponsorList from "@/components/SponsorList";
import { getDictionary } from "@/dictionaries";
import { LanguageParams } from "@/types";
import {
  GOLD_SPONSORS,
  PLATINUM_SPONSORS,
  SILVER_SPONSORS,
  SPONSORS_DEFAULT,
} from "@/utils/sponsors";
import type { Metadata } from "next";

interface SponsorsPageProps {
  params: LanguageParams;
}

export async function generateMetadata({
  params,
}: SponsorsPageProps): Promise<Metadata> {
  const t = await getDictionary(params.lang);

  return {
    title: t.sponsors.metadata.title,
    description: t.sponsors.metadata.description,
    alternates: {
      canonical: "/en/sponsors",
      languages: { en: "/en/sponsors", pt: "/pt/sponsors" },
    },
  };
}

export default async function SponsorsPage({ params }: SponsorsPageProps) {
  const t = await getDictionary(params.lang);

  return (
    <article className="mx-auto max-w-7xl mt-10 lg:mx-0">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {t.sponsors.title}
      </h2>

      <p className="text-xl flex items-center gap-x-4 mt-4 leading-8 text-gray-600">
        {t.sponsors.subtitle}{" "}
        <Button href={SPONSORS_DEFAULT}>{t.sponsors.now}</Button>
      </p>

      <div className="mt-10">
        <h2 className="font-semibold tracking-tight text-gray-700">
          {t.sponsors.platinum}
        </h2>

        <SponsorList
          sponsors={PLATINUM_SPONSORS}
          placeholder={t.home.sponsors.placeholder}
        />
      </div>

      <div className="mt-10">
        <h2 className="font-semibold tracking-tight text-gray-700">
          {t.sponsors.gold}
        </h2>

        <SponsorList
          sponsors={GOLD_SPONSORS}
          placeholder={t.home.sponsors.placeholder}
        />
      </div>

      <div className="mt-10">
        <h2 className="font-semibold tracking-tight text-gray-700">
          {t.sponsors.silver}
        </h2>

        <SponsorList
          sponsors={SILVER_SPONSORS}
          placeholder={t.home.sponsors.placeholder}
        />
      </div>

      <div className="mt-10">
        <h2 className="font-semibold tracking-tight text-gray-700">
          {t.sponsors.supporters}
        </h2>

        <p className="text-sm leading-6">{t.sponsors.no_supporters}</p>
      </div>
    </article>
  );
}
