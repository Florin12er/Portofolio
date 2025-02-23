"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/modal";
import { ModalContent } from "./types";
import { Button } from "@/components/ui/button";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

interface NotificationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  content: ModalContent;
}

export default function NotificationModal({
  open,
  onOpenChange,
  content,
}: NotificationModalProps) {
  const { data: session } = useSession();
  const router = useRouter();

  const isLoggedIn = session?.user;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{content.title}</DialogTitle>
          <DialogDescription>{content.description}</DialogDescription>
        </DialogHeader>

        {!isLoggedIn && (
          <div className="mt-4">
            <Button onClick={() => router.push("/sign-in")}>Login</Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
