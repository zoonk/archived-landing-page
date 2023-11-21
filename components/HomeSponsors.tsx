import { Locale } from "@/types";
import { getDictionary } from "@/dictionaries";
import Image from "next/image";
import Link from "next/link";
import { SPONSORS } from "@/utils/sponsors";
import SponsorList from "./SponsorList";

interface HomeSponsorsProps {
  locale: Locale;
}

export default async function HomeSponsors({ locale }: HomeSponsorsProps) {
  const t = await getDictionary(locale);

  return (
    <div className="bg-slate-50 rounded-lg mx-auto max-w-7xl p-8">
      <h2 className="text-lg font-semibold leading-8 text-gray-900">
        {t.home.sponsors.title}
      </h2>

      <SponsorList
        sponsors={SPONSORS}
        placeholder={t.home.sponsors.placeholder}
      />

      <div className="mt-8 flex justify-center">
        <p className="relative rounded-full bg-gray-50 px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/5">
          <span className="hidden md:inline">{t.home.sponsors.more}</span>

          <Link
            href={`/${locale}/sponsors`}
            className="font-semibold text-indigo-600"
          >
            <span className="absolute inset-0" aria-hidden="true" />{" "}
            {t.home.sponsors.see_all} <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
