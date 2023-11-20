import Card from "@/components/Card";
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
    <main className="pt-8 space-y-8 mx-auto max-w-2xl lg:pt-24">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {t.contact.title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-x-6">
        <Card
          title={t.contact.questions.title}
          description={t.contact.questions.description}
          action={{
            href: "https://github.com/orgs/zoonk/discussions",
            label: t.contact.questions.action,
          }}
        />

        <Card
          title={t.contact.sales.title}
          description={t.contact.sales.description}
        />
      </div>
    </main>
  );
}
