import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={false}
          themes={["light", "dark"]}
          storageKey="portofolio-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
