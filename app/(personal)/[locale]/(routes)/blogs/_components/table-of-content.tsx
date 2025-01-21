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
    <nav className="toc sticky top-24 max-h-[calc(150vh-6rem)] overflow-auto custom-scrollbar dark:bg-gray-900 dark:shadow-md rounded-lg p-4">
      <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2">
        {t("tableOfContents")}
      </h2>
      <ul className="space-y-2">
        {toc.map((item) => (
          <li
            key={item.id}
            className={`ml-${(item.level - 1) * 4}`}
            style={{
              paddingLeft: `${item.level * 8}px`,
            }}
          >
            <a
              href={`#${item.id}`}
              className={`block text-sm transition-colors duration-200 ${
                activeId === item.id ? "font-semibold" : "hover:underline"
              }`}
              style={{
                color:
                  item.level === 1
                    ? "#0ea5e9"
                    : item.level === 2
                      ? "#8b5cf6"
                      : item.level === 3
                        ? "#10b981"
                        : "#6b7280",
              }}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
