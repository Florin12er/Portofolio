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
import { useSession } from "@/lib/auth-client";
import { Loader } from "./ui/loader";
import { UserButton } from "./userButton";

export const Navbar = () => {
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const locale = useLocale();
  const { data: session, isPending } = useSession();

  const navItems = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/projects`, label: t("projects") },
    { href: `/${locale}/blogs`, label: t("blogs") },
    { href: `/${locale}/contact`, label: t("contact") },
    {
      href: "https://github.com/Florin12er/Portofolio",
      label: <FaGithub className="w-5 h-5" />,
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href={`/${locale}`}
              className="flex items-center space-x-2 text-xl font-bold text-gray-900 dark:text-white"
            >
              <FaUser className="w-6 h-6" />
              <span>{t("sebastianPortfolio")}</span>
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
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <LanguageSwitcher />
              <ModeToggle />
            </div>
            {isPending ? (
              <Loader className="w-8 h-8" />
            ) : session ? (
              <UserButton />
            ) : (
              <div className="hidden md:flex items-center space-x-2">
                <Button variant="outline" asChild>
                  <Link href={`/${locale}/sign-in`} aria-label={t("signIn")}>
                    {t("signIn")}
                  </Link>
                </Button>
                <Button asChild>
                  <Link href={`/${locale}/sign-up`} aria-label={t("signUp")}>
                    {t("signUp")}
                  </Link>
                </Button>
              </div>
            )}
            <div className="md:hidden">
              <MobileNavbar />
            </div>
          </div>
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
        active
          ? "text-primary bg-primary/10"
          : "text-gray-600 dark:text-gray-300"
      )}
    >
      {children}
    </Button>
  </Link>
);

export default Navbar;
