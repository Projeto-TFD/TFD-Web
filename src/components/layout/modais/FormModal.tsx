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
import { ReactNode, SubmitEventHandler } from "react";

interface FormModalProps {
  title?: string;
  description?: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
  onSubmit: SubmitEventHandler<HTMLFormElement>;
  loading?: boolean;
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
}: FormModalProps) {
  const dialogSize = {
    sm: "sm:max-w-sm",
    md: "sm:max-w-md",
    lg: "sm:max-w-lg",
    xl: "sm:max-w-xl",
  };

  return (
    <ModalCustom open={open} onOpenChange={onOpenChange}>
      <form onSubmit={onSubmit}>
        <DialogContent className={dialogSize[size]}>
          <DialogHeader>
            <DialogTitle className={`text-${size}`}>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>

          {children}

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className="cursor-pointer">
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit" className="bg-green-500 hover:bg-green-400 cursor-pointer" disabled={loading}>
              {loading ? "Salvando.." : "Salvar"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </ModalCustom>
  );
}
