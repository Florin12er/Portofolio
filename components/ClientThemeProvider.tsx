// components/ClientThemeProvider.tsx
"use client";

import { ThemeProvider } from "@/components/theme-provider";

export default function ClientThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={false}
      themes={["light", "dark"]}
      storageKey="portofolio-theme"
    >
      {children}
    </ThemeProvider>
  );
}
