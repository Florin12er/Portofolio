import { Input } from "@/components/ui/input";
import { FaSearch, FaTimes } from "react-icons/fa";

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  onClear: () => void;
}

export function SearchInput({
  value,
  onChange,
  placeholder,
  onClear,
}: SearchInputProps) {
  return (
    <div className="mb-8 relative max-w-md mx-auto">
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="pl-10 pr-12"
      />
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

      {value && (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        >
          <FaTimes />
        </button>
      )}
    </div>
  );
}