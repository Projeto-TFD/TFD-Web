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
import { ReactNode } from "react";

interface ConfirmModalProps {
  title?: string;
  description?: string | ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onClick: () => void;
  loading?: boolean;
}

export default function ConfirmModal({
  title = "Confirmação",
  description = "É necessário a confirmação para realizar essa ação",
  open,
  onOpenChange,
  onClick,
  loading = false,
}: ConfirmModalProps) {
  return (
    <ModalCustom open={open} onOpenChange={onOpenChange}>
      <DialogContent className="lg:max-w-lg">
        <DialogHeader className="flex flex-col gap-3">
          <DialogTitle className="text-lg">{title}</DialogTitle>
          <DialogDescription className="text-md">{description}</DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button className="cursor-pointer" title="Cancelar e sair" variant="outline">
              Cancelar
            </Button>
          </DialogClose>
          <Button
            className="cursor-pointer"
            title="Confirmação"
            type="submit"
            variant={"destructive"}
            disabled={loading}
            onClick={onClick}
          >
            {loading ? "Confirmando.." : "Confirmar"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </ModalCustom>
  );
}
