"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { TipoVeiculo, VeiculoType } from "@/src/types/veiculos.types";
import Badge from "@/src/components/ui/Badge";

interface VehicleColumnsProps {
  onEdit: (vehicle: VeiculoType) => void;
  onDelete: (vehicle: VeiculoType) => void;
}

export default function getVehicleColumns({ onEdit, onDelete }: VehicleColumnsProps): ColumnDef<VeiculoType>[] {
  return [
    {
      accessorKey: "nome",
      header: "Nome",
    },

    {
      accessorKey: "placa",
      header: "Placa",
    },

    {
      accessorKey: "ano",
      header: "Ano",
    },

    {
      accessorKey: "renavam",
      header: "Renavam",
    },

    {
      accessorKey: "tipo",
      header: "Tipo",
      cell: ({ row }) => (
        <Badge variant={row.original.tipo === TipoVeiculo.Proprio ? "success" : "warning"}>{row.original.tipo}</Badge>
      ),
    },

    {
      id: "actions",
      header: "Ações",
      cell: ({ row }) => {
        return (
          <div className="flex gap-2">
            <Button
              title="Editar item"
              className="cursor-pointer"
              size="icon"
              variant="ghost"
              onClick={() => onEdit(row.original)}
            >
              <Pencil className="size-4 text-slate-600" />
            </Button>

            <Button
              title="Excluir item"
              className="cursor-pointer"
              size="icon"
              variant="ghost"
              onClick={() => onDelete(row.original)}
            >
              <Trash2 className="size-4 text-destructive/70" />
            </Button>
          </div>
        );
      },
    },
  ];
}
