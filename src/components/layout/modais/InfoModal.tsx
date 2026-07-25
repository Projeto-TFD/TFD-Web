import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ModalCustom from "../../ui/ModalCustom";
import { ReactNode } from "react";

interface InfoModalProps {
  title?: string;
  description?: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function InfoModal({
  title = "Visualização",
  description = "",
  open,
  onOpenChange,
  children,
  size = "md",
  className,
}: InfoModalProps) {
  const dialogSize = {
    sm: "sm:max-w-sm",
    md: "sm:max-w-md",
    lg: "sm:max-w-lg",
    xl: "sm:max-w-xl",
  };

  return (
    <ModalCustom open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`${dialogSize[size]} ${className}`}>
        <DialogHeader className="mb-2">
          <DialogTitle className={`text-${size} font-heading`}>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        {children}
      </DialogContent>
    </ModalCustom>
  );
}
