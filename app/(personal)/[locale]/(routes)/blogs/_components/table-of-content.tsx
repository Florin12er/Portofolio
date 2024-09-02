import { useTranslations } from "next-intl";
import { useActiveId } from "@/components/useActiveId";

export interface TocItem {
  id: string;
  title: string;
  level: number;
}

export function extractToc(content: string): TocItem[] {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const toc: TocItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    toc.push({
      id: match[2].toLowerCase().replace(/[^\w]+/g, "-"),
      title: match[2],
      level: match[1].length,
    });
  }

  return toc;
}

export const TableOfContents = ({ toc }: { toc: TocItem[] }) => {
  const t = useTranslations("Blog");
  const activeId = useActiveId(toc.map((item) => item.id));

  return (
    <nav className="toc sticky top-24 max-h-[calc(100vh-6rem)] overflow-auto">
      <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">
        {t("tableOfContents")}
      </h2>
      <ul className="space-y-2">
        {toc.map((item: TocItem) => (
          <li key={item.id} className={`pl-${(item.level - 1) * 4}`}>
            <a
              href={`#${item.id}`}
              className={`block py-1 text-sm transition-colors duration-200 ${
                activeId === item.id
                  ? "text-blue-600 dark:text-blue-400 font-semibold"
                  : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
