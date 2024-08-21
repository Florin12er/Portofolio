"use client";

import { FaGithub, FaUser } from "react-icons/fa"; // Import GitHub icon
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { MobileNavbar } from "@/app/(personal)/_components/mobile-sidebar";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
  {
    href: "https://github.com/Florin12er/Portofolio",
    label: <FaGithub className="inline w-6 h-6" />,
  }, // Add GitHub link
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="border-b">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold flex gap-2 items-center">
            <FaUser className="inline w-6 h-6" />
            Sebastian Portfolio
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              active={pathname === item.href}
            >
              {item.label}
            </NavLink>
          ))}
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
