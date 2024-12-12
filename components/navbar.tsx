"use client";

import { FaGithub, FaUser } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { MobileNavbar } from "@/app/(personal)/_components/mobile-sidebar";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export const Navbar = () => {
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const locale = useLocale();

  const navItems = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/projects`, label: t("projects") },
    { href: `/${locale}/blogs`, label: t("blogs") },
    { href: `/${locale}/contact`, label: t("contact") },
    {
      href: "https://github.com/Florin12er/Portofolio",
      label: <FaGithub className="inline w-6 h-6" />,
    },
  ];

  return (
    <nav className="border-b sticky top-0 z-50 bg-white dark:bg-gray-900">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex items-center">
          <Link
            href={`/${locale}`}
            className="text-2xl font-bold flex gap-2 items-center"
          >
            <FaUser className="inline w-6 h-6" />
            {t("sebastianPortfolio")}
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              active={pathname === item.href}
            >
              {typeof item.label === "string" ? item.label : item.label}
            </NavLink>
          ))}
        </div>
        <div className="hidden md:flex items-center space-x-4 gap-2">
          <LanguageSwitcher />
          <ModeToggle />
        </div>
        <div className="md:hidden">
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active: boolean;
}) => (
  <Link href={href} passHref>
    <Button
      variant="ghost"
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        active ? "text-primary" : "text-muted-foreground",
      )}
    >
      {children}
    </Button>
  </Link>
);

export default Navbar;
