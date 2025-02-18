interface TagProps {
  tag: string;
  selectedTag: string | null;
  onClick: (tag: string) => void;
}

export function Tag({ tag, selectedTag, onClick }: TagProps) {
  return (
    <span
      className={`text-xs font-medium px-2.5 py-0.5 rounded cursor-pointer transition-colors duration-200 ${
        tag === selectedTag
          ? "bg-blue-500 text-white dark:bg-blue-400 dark:text-white hover:bg-blue-600 dark:hover:bg-blue-500"
          : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
      }`}
      onClick={() => onClick(tag)}
    >
      {tag}
    </span>
  );
}