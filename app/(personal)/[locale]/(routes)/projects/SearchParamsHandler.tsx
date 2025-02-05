import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

interface SearchParamsHandlerProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export function SearchParamsHandler({
  setSearchTerm,
}: SearchParamsHandlerProps) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const search = searchParams.get("search");
    if (search) {
      setSearchTerm(search);
    }
  }, [searchParams, setSearchTerm]);

  return null;
}
