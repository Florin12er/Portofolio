"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-800 shadow-md">
          <nav className="flex flex-col p-4 space-y-2">
            <NavLink href="/" onClick={toggleMenu}>
              Home
            </NavLink>
            <NavLink href="/projects" onClick={toggleMenu}>
              Projects
            </NavLink>
            <NavLink href="/blogs" onClick={toggleMenu}>
              Blogs
            </NavLink>
            <NavLink href="/contact" onClick={toggleMenu}>
              Contact
            </NavLink>
            <a
              href="https://github.com/Florin12er/Portofolio" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              onClick={toggleMenu}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5.884 18.653c-.3-.2-.558-.455-.86-.816a51 51 0 0 1-.466-.579c-.463-.575-.755-.841-1.056-.95a1 1 0 1 1 .675-1.882c.752.27 1.261.735 1.947 1.588c-.094-.117.34.427.433.539c.19.227.33.365.44.438c.204.137.588.196 1.15.14c.024-.382.094-.753.202-1.095c-2.968-.726-4.648-2.64-4.648-6.396c0-1.24.37-2.356 1.058-3.292c-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047c.803-.124 1.937.17 3.415 1.096a11.7 11.7 0 0 1 2.687-.308c.912 0 1.819.104 2.684.308c1.477-.933 2.614-1.227 3.422-1.096q.128.02.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.296.302 3.19c.691.936 1.058 2.045 1.058 3.293c0 3.757-1.674 5.665-4.642 6.392c.125.415.19.878.19 1.38c0 .665-.002 1.299-.007 2.01c0 .19-.002.394-.005.706a1 1 0 0 1-.018 1.958c-1.14.227-1.984-.532-1.984-1.525l.002-.447l.005-.705c.005-.707.008-1.337.008-1.997c0-.697-.184-1.152-.426-1.361c-.661-.57-.326-1.654.541-1.751c2.966-.333 4.336-1.482 4.336-4.66c0-.955-.312-1.744-.913-2.404A1 1 0 0 1 17.2 6.19c.166-.414.236-.957.095-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135a9.6 9.6 0 0 0-2.592-.349c-.89 0-1.772.118-2.592.35a1 1 0 0 1-.829-.134c-.753-.507-1.374-.807-1.87-.947c-.143.653-.072 1.194.093 1.607a1 1 0 0 1-.189 1.045c-.597.655-.913 1.458-.913 2.404c0 3.172 1.371 4.328 4.322 4.66c.865.097 1.202 1.177.545 1.748c-.193.168-.43.732-.43 1.364v3.15c0 .985-.834 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.661-.088-2.254-.485"
                  ></path>
                </svg>
              </div>
              GitHub
            </a>
            <div className="pt-2">
              <ModeToggle />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

const NavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <Link
    href={href}
    className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
    onClick={onClick}
  >
    {children}
  </Link>
);
