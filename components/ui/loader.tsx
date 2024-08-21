// components/ui/loader.tsx
import { Loader2 } from "lucide-react";

export function Loader({ size = 24, className = "" }) {
  return <Loader2 size={size} className={`animate-spin ${className}`} />;
}
