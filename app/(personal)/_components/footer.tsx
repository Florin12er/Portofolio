"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export const Footer = () => {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white dark:bg-gray-800 py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col space-y-2 mb-4 md:mb-0"
          >
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              {t("quickLinks")}
            </h2>
            <div className="flex flex-col space-y-1">
              <NavLink href={`/${locale}`} active={pathname === `/${locale}`}>
                {t("home")}
              </NavLink>
              <NavLink
                href={`/${locale}/projects`}
                active={pathname.startsWith(`/${locale}/projects`)}
              >
                {t("projects")}
              </NavLink>
              <NavLink
                href={`/${locale}/blogs`}
                active={pathname.startsWith(`/${locale}/blogs`)}
              >
                {t("blogs")}
              </NavLink>
              <NavLink
                href={`/${locale}/contact`}
                active={pathname.startsWith(`/${locale}/contact`)}
              >
                {t("contact")}
              </NavLink>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex space-x-6"
          >
            <SocialLink
              href="https://github.com/Florin12er"
              icon={<FaGithub size={24} />}
              ariaLabel={t("githubAriaLabel")}
            />
            <SocialLink
              href="https://twitter.com/florin12er"
              icon={<FaTwitter size={24} />}
              ariaLabel={t("twitterAriaLabel")}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-6 text-center"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

const NavLink = ({
  href,
  active,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 200 }}
  >
    <Link
      href={href}
      className={`relative text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-200 p-1 font-medium ${
        active ? "text-blue-600 dark:text-blue-400 font-bold" : ""
      }`}
    >
      {children}
      {active && (
        <motion.div
          layoutId="underline"
          className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600 dark:bg-blue-400"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      )}
    </Link>
  </motion.div>
);

const SocialLink = ({
  href,
  icon,
  ariaLabel,
}: {
  href: string;
  icon: React.ReactNode;
  ariaLabel: string;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, rotate: 5 }}
    transition={{ type: "spring", stiffness: 200 }}
    className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
    aria-label={ariaLabel}
  >
    {icon}
  </motion.a>
);

export default Footer;
