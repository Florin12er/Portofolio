// components/MobileNavbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Menu, X, Home, Briefcase, BookOpen, Mail } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Navigation");
  const locale = useLocale();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { href: `/${locale}`, label: t("home"), icon: Home },
    { href: `/${locale}/projects`, label: t("projects"), icon: Briefcase },
    { href: `/${locale}/blogs`, label: t("blogs"), icon: BookOpen },
    { href: `/${locale}/contact`, label: t("contact"), icon: Mail },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetDescription className="sr-only">
          {t("mobileNavDescription")}
        </SheetDescription>
        <nav className="flex flex-col space-y-4 mt-8">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              onClick={toggleMenu}
              icon={item.icon}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            href="https://github.com/Florin12er/Portofolio"
            onClick={toggleMenu}
            icon={FaGithub}
            external
          >
            GitHub
          </NavLink>
          <div className="pt-4 flex items-center space-x-4">
            <ModeToggle />
            <LanguageSwitcher />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

const NavLink = ({
  href,
  children,
  onClick,
  icon: Icon,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
  icon: React.ElementType;
  external?: boolean;
}) => {
  const LinkComponent = external ? "a" : Link;
  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <LinkComponent
      href={href}
      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-200"
      onClick={onClick}
      {...linkProps}
    >
      <Icon size={20} />
      <span>{children}</span>
    </LinkComponent>
  );
};
