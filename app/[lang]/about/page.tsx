import { getDictionary } from "@/dictionaries";
import { LanguageParams } from "@/types";
import {
  IconAward,
  IconCurrencyBitcoin,
  IconEye,
  IconHandStop,
  IconHeart,
  IconLayout2,
  IconShare,
  IconTrendingUp,
  IconUsers,
} from "@tabler/icons-react";
import type { Metadata } from "next";

interface ContactPageProps {
  params: LanguageParams;
}

const values = [
  { id: "transparency", icon: IconEye },
  { id: "ownership", icon: IconHandStop },
  { id: "empathy", icon: IconHeart },
  { id: "quality", icon: IconAward },
  { id: "simplicity", icon: IconLayout2 },
  { id: "growth", icon: IconTrendingUp },
  { id: "sharing", icon: IconShare },
  { id: "collaboration", icon: IconUsers },
  { id: "salary_equality", icon: IconCurrencyBitcoin },
];

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const t = await getDictionary(params.lang);

  return {
    title: t.about.metadata.title,
    description: t.about.metadata.description,
    alternates: {
      canonical: "/en/about",
      languages: { en: "/en/about", pt: "/pt/about" },
    },
  };
}

export default async function AboutPage({ params }: ContactPageProps) {
  const t = await getDictionary(params.lang);

  return (
    <article className="mx-auto grid grid-cols-1 gap-y-12 gap-x-4 md:grid-cols-2 max-w-7xl mt-10 lg:mx-0">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {t.about.why.title}
        </h2>

        <p className="text-xl mt-4 leading-8 text-gray-600">
          {t.about.why.subtitle}
        </p>

        <div className="mt-10 space-y-4 text-base leading-7 text-gray-700">
          <p>{t.about.why.content_1}</p>
          <p className="whitespace-pre">{t.about.why.content_2}</p>
          <p>{t.about.why.content_3}</p>
        </div>
      </div>

      <div className="space-y-10">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t.about.mission.title}
          </h2>

          <p className="text-xl mt-4 leading-8 text-gray-600">
            {t.about.mission.subtitle}
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t.about.vision.title}
          </h2>

          <p className="text-xl mt-4 leading-8 text-gray-600">
            {t.about.vision.subtitle}
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {t.about.values.title}
        </h2>

        <dl className="mt-8 grid grid-cols-1 gap-8 text-base leading-7 text-gray-700 sm:grid-cols-2 lg:mx-0 lg:gap-x-16">
          {values.map((value) => (
            <div key={value.id} className="relative pl-9">
              <dt className="inline font-semibold">
                <value.icon
                  size={20}
                  className="absolute left-1 top-1 text-indigo-500"
                  aria-hidden="true"
                />
                {t.about.values[value.id].title}.
              </dt>{" "}
              <dd className="inline">{t.about.values[value.id].description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
