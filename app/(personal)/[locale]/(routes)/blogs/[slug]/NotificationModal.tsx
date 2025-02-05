"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/modal";

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
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{content.title}</DialogTitle>
          <DialogDescription>{content.description}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
