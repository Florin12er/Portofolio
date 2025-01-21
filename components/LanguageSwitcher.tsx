"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const locales = [
  { value: "en", label: "English" },
  { value: "de", label: "Deutsch" },
  // Add more languages as needed
];

export default function LanguageSwitcher() {
  const t = useTranslations("LanguageSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    // Assuming your localized routes are in the format /{locale}/rest-of-path
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="transparent" className="w-full">
          {locales.find((l) => l.value === locale)?.label}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {locales.map((l) => (
          <DropdownMenuItem
            key={l.value}
            onClick={() => handleLocaleChange(l.value)}
          >
            {t("language", { language: l.label })}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
