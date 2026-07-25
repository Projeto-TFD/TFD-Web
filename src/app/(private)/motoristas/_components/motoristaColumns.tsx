"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { MotoristaType } from "@/src/types/motorista.types";
import { BadgeVariant } from "@/src/components/ui/Badge";
import Badge from "@/src/components/ui/Badge";

interface MotoristaColumnsProps {
  onEdit: (motorista: MotoristaType) => void;
  onDelete: (motorista: MotoristaType) => void;
}

export default function getMotoristaColumns({ onEdit, onDelete }: MotoristaColumnsProps): ColumnDef<MotoristaType>[] {
  return [
    {
      accessorKey: "nome",
      header: "Nome",
    },

    {
      accessorKey: "cpf",
      header: "CPF",
    },

    {
      accessorKey: "renach",
      header: "RENACH",
    },

    {
      accessorKey: "validadeHabilitacao",
      header: "Validade da Habilitação",
      cell: ({ row }) => {
        const validade = new Date(row.original.validadeHabilitacao);
        const vencida = validade < new Date();

        return (
          <span className="flex gap-1">
            <span className={vencida ? "line-through" : ""}>{validade.toLocaleDateString("pt-BR")}</span>
            {vencida && <Badge variant="danger">Vencida</Badge>}
          </span>
        );
      },
    },

    {
      accessorKey: "tipoHabilitacao",
      header: "Categoria",
      cell: ({ row }) => {
        const variantMap: Record<MotoristaType["tipoHabilitacao"], BadgeVariant> = {
          A: "default",
          B: "info",
          C: "warning",
          D: "success",
          E: "danger",
        };

        return (
          <Badge variant={variantMap[row.original.tipoHabilitacao]}>Categoria {row.original.tipoHabilitacao}</Badge>
        );
      },
    },

    {
      accessorKey: "tipoVinculo",
      header: "Vínculo",
      cell: ({ row }) => {
        const variantMap: Record<MotoristaType["tipoVinculo"], BadgeVariant> = {
          EFETIVO: "success",
          CONTRATADO: "warning",
          COMISSIONADO: "info",
        };

        const labelMap: Record<MotoristaType["tipoVinculo"], string> = {
          EFETIVO: "Efetivo",
          CONTRATADO: "Contratado",
          COMISSIONADO: "Comissionado",
        };

        return <Badge variant={variantMap[row.original.tipoVinculo]}>{labelMap[row.original.tipoVinculo]}</Badge>;
      },
    },

    {
      accessorKey: "endereco",
      header: "Endereço",
      cell: ({ row }) => row.original.endereco || "-",
    },

    {
      id: "actions",
      header: "Ações",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <Button
            title="Editar motorista"
            className="cursor-pointer"
            size="icon"
            variant="ghost"
            onClick={() => onEdit(row.original)}
          >
            <Pencil className="size-4 text-slate-600" />
          </Button>

          <Button
            title="Excluir motorista"
            className="cursor-pointer"
            size="icon"
            variant="ghost"
            onClick={() => onDelete(row.original)}
          >
            <Trash2 className="size-4 text-destructive/70" />
          </Button>
        </div>
      ),
    },
  ];
}
