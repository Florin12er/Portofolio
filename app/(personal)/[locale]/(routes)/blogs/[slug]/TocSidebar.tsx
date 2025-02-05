import { TableOfContents, TocItem } from "../_components/table-of-content";

interface Props {
  toc: TocItem[];
}

export default function TocSidebar({ toc }: Props) {
  return (
    <aside className="hidden lg:block lg:w-1/4">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <TableOfContents toc={toc} />
      </div>
    </aside>
  );
}
