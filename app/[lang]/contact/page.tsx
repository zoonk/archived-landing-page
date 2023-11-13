import CallEmbed from "@/components/CalEmbed";
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
    title: t.contact.metadata.title,
    description: t.contact.metadata.description,
    alternates: {
      canonical: "/en/contact",
      languages: { en: "/en/contact", pt: "/pt/contact" },
    },
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const t = await getDictionary(params.lang);

  return (
    <main className="pt-8 space-y-8">
      <div className="mx-auto max-w-2xl sm:text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {t.contact.title}
        </h2>

        <p className="mt-2 text-lg leading-8 text-gray-600">
          {t.contact.subtitle}
        </p>
      </div>

      <CallEmbed />
    </main>
  );
}
