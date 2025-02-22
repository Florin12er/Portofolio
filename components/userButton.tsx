import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { signOut, useSession } from "@/lib/auth-client";
import { useTranslations } from "next-intl";

export const UserButton = () => {
  const { data: session, isPending } = useSession();
  const t = useTranslations("Navigation");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image
          src={session?.user?.image || "/images/avatar.png"}
          alt="Profile picture"
          width={40}
          height={40}
          className="rounded-full cursor-pointer hover:ring-2 hover:ring-primary transition-all duration-300 ease-in-out"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => signOut()}>
          {t("signOut")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
