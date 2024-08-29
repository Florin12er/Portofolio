// app/(personal)/[lang]/layout.tsx
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/app/(personal)/_components/footer";
interface Props {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function HomeLayout({
  params: { locale },
  children,
}: Props) {
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  unstable_setRequestLocale(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
