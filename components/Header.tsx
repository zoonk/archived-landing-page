import Image from "next/image";
import Link from "next/link";
import logo from "@/images/logo.svg";
import icon from "@/images/icon.svg";
import { Button } from "./Button";
import type { Locale } from "@/types";
import { getDictionary } from "@/dictionaries";

interface HeaderProps {
  locale: Locale;
}

export default async function Header({ locale }: HeaderProps) {
  const t = await getDictionary(locale);

  return (
    <header className="flex justify-between gap-4">
      <Link href={`/${locale}`} aria-label="Home">
        <Image
          src={logo}
          alt="Logo"
          priority
          height={40}
          unoptimized
          className="hidden sm:block"
        />

        <Image
          src={icon}
          height={40}
          alt="Logo"
          priority
          unoptimized
          className="sm:hidden"
        />
      </Link>

      <nav className="hidden gap-x-2">
        <Button
          href="https://github.com/zoonk/.github/blob/main/profile/about.md"
          variant="outline"
        >
          {t.header.about}
        </Button>

        <Button href={`/${locale}/contact`} color="primary">
          {t.header.contact}
        </Button>
      </nav>
    </header>
  );
}
