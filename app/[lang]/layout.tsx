import { LanguageParams } from "@/types";
import type { Metadata, Viewport } from "next";
import colors from "tailwindcss/colors";

import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlausibleProvider from "next-plausible";

type RootLayoutProps = {
  children: React.ReactNode;
  params: LanguageParams;
};

export const viewport: Viewport = {
  themeColor: colors.blue[600],
  colorScheme: "light",
};

export const metadata: Metadata = {
  manifest: "/site.webmanifest",
  category: "education",
  metadataBase: new URL("https://zoonk.org"),
};

export async function generateStaticParams(): Promise<LanguageParams[]> {
  return [{ lang: "en" }, { lang: "pt" }];
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html
      lang={params.lang}
      className="h-full scroll-smooth bg-white antialiased"
    >
      <head>
        <PlausibleProvider domain="zoonk.org" />
      </head>

      <body className="mx-auto flex flex-col gap-y-4 max-w-7xl min-h-dvh p-4 sm:p-6 lg:p-8">
        <Header locale={params.lang} />
        <main className="flex-1">{children}</main>
        <Footer locale={params.lang} />
      </body>
    </html>
  );
}
