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

interface ConfirmModalProps {
  title?: string;
  description?: string;
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
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <Button type="submit" variant={"destructive"} disabled={loading} onClick={onClick}>
            {loading ? "Confirmando.." : "Confirmar"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </ModalCustom>
  );
}
