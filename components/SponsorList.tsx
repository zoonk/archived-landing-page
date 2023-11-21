import type { Sponsor } from "@/types";
import Image from "next/image";

interface SponsorList {
  sponsors: Sponsor[];
  placeholder?: string;
}

export default async function SponsorList({
  sponsors,
  placeholder,
}: SponsorList) {
  return (
    <div className="grid grid-cols-4 w-full items-center mx-auto mt-4 gap-x-8 gap-y-12 sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0">
      {sponsors.map((sponsor) => (
        <a
          key={sponsor.key}
          href={sponsor.href}
          className="col-span-2 w-full lg:col-span-1"
        >
          {sponsor.img && (
            <Image
              src={sponsor.img}
              alt={sponsor.key}
              unoptimized
              width={158}
              height={48}
              className="max-h-12 object-contain"
            />
          )}

          {!sponsor.img && (
            <div className="h-12 w-full text-center flex rounded-lg flex-col items-center justify-center leading-8 text-gray-700 bg-slate-200">
              {placeholder}
            </div>
          )}
        </a>
      ))}
    </div>
  );
}
