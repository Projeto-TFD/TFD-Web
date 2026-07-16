import { Dialog } from "@/components/ui/dialog";
import { ReactNode } from "react";

interface ModalCustomProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
}

export default function ModalCustom({ open, onOpenChange, children }: ModalCustomProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog>
  );
}
