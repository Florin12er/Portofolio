"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Menu, Home, Briefcase, BookOpen, Mail, LogIn } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import { useTranslations } from "next-intl";
import { HiUserAdd } from "react-icons/hi";
import { useLocale } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { signOut, useSession } from "@/lib/auth-client";
import { MdLogout } from "react-icons/md";

export const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const { data: session } = useSession();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { href: `/${locale}`, label: t("home"), icon: Home },
    { href: `/${locale}/projects`, label: t("projects"), icon: Briefcase },
    { href: `/${locale}/blogs`, label: t("blogs"), icon: BookOpen },
    { href: `/${locale}/contact`, label: t("contact"), icon: Mail },
    { href: `/${locale}/sign-in`, label: t("signIn"), icon: LogIn },
    { href: `/${locale}/sign-up`, label: t("signUp"), icon: HiUserAdd },
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
        <nav className="flex flex-col space-y-6 mt-8">
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
          {session && (
            <NavLink onClick={signOut} icon={MdLogout} external href="">
              {t("signOut")}
            </NavLink>
          )}
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
