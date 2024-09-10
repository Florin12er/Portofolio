// app/layout.tsx
import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientThemeProvider from "@/components/ClientThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portofolio",
  description: "This is my portofolio site",
  icons: {
    icon: "images/portofolio.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientThemeProvider>{children}</ClientThemeProvider>
      </body>
    </html>
  );
}
