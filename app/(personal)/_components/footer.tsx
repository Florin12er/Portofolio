import Link from "next/link";
import { FaGithub, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col space-y-2 mb-4 md:mb-0">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              Quick Links
            </h2>
            <div className="flex flex-col space-y-1">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/blogs">Blogs</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
          </div>
          <div className="flex space-x-6">
            <SocialLink
              href="https://github.com/Florin12er"
              icon={<FaGithub size={24} />}
            />
            <SocialLink
              href="https://twitter.com/florin12er"
              icon={<FaTwitter size={24} />}
            />
          </div>
        </div>
        <div className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-6 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Sebastian Portfolio. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-200 p-1"
  >
    {children}
  </Link>
);

const SocialLink = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
  >
    {icon}
  </a>
);
