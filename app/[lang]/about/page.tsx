import { getDictionary } from "@/dictionaries";
import { LanguageParams } from "@/types";
import type { Metadata } from "next";

interface ContactPageProps {
  params: LanguageParams;
}

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const t = await getDictionary(params.lang);

  return {
    title: t.about.metadata.title,
    description: t.about.metadata.description,
  };
}

export default async function AboutPage({ params }: ContactPageProps) {
  const t = await getDictionary(params.lang);

  return (
    <main className="mx-auto max-w-lg mt-10 lg:mx-0">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {t.about.title}
      </h2>

      <p className="text-xl mt-4 leading-8 text-gray-600">{t.about.subtitle}</p>

      <div className="mt-10 space-y-4 text-base leading-7 text-gray-700">
        <p>{t.about.content_1}</p>
        <p className="whitespace-pre">{t.about.content_2}</p>
        <p>{t.about.content_3}</p>
      </div>
    </main>
  );
}
