import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ModalCustom from "../../ui/ModalCustom";
import { BaseSyntheticEvent, ReactNode } from "react";

interface FormModalProps {
  title?: string;
  description?: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
  onSubmit: (event?: BaseSyntheticEvent) => void | Promise<void>;
  loading?: boolean;
  disabled?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function FormModal({
  title = "Formulário",
  description = "",
  open,
  onOpenChange,
  children,
  onSubmit,
  loading = false,
  size = "md",
  disabled = false,
}: FormModalProps) {
  const dialogSize = {
    sm: "sm:max-w-sm",
    md: "sm:max-w-md",
    lg: "sm:max-w-lg",
    xl: "sm:max-w-xl",
  };

  return (
    <ModalCustom open={open} onOpenChange={onOpenChange}>
      <DialogContent className={dialogSize[size]}>
        <form onSubmit={onSubmit}>
          <DialogHeader className="mb-3">
            <DialogTitle className={`text-${size}`}>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>

          {children}

          <DialogFooter className="mt-6">
            <DialogClose asChild>
              <Button variant="outline" className="cursor-pointer" title="Cancelar e sair">
                Cancelar
              </Button>
            </DialogClose>
            <Button
              title="Salvar dados"
              type="submit"
              className="bg-green-500 hover:bg-green-400 cursor-pointer"
              disabled={loading || disabled}
            >
              {loading ? "Salvando.." : "Salvar"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </ModalCustom>
  );
}
