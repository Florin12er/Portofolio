// components/Footer.tsx
import Link from "next/link";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export const Footer = () => {
  const t = useTranslations("Footer");
  const locale = useLocale();

  return (
    <footer className="bg-white dark:bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col space-y-2 mb-4 md:mb-0">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              {t("quickLinks")}
            </h2>
            <div className="flex flex-col space-y-1">
              <NavLink href={`/${locale}`}>{t("home")}</NavLink>
              <NavLink href={`/${locale}/projects`}>{t("projects")}</NavLink>
              <NavLink href={`/${locale}/blogs`}>{t("blogs")}</NavLink>
              <NavLink href={`/${locale}/contact`}>{t("contact")}</NavLink>
            </div>
          </div>
          <div className="flex space-x-6">
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
          </div>
        </div>
        <div className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-6 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {t("copyright", { year: new Date().getFullYear() })}
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
  ariaLabel,
}: {
  href: string;
  icon: React.ReactNode;
  ariaLabel: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
    aria-label={ariaLabel}
  >
    {icon}
  </a>
);
