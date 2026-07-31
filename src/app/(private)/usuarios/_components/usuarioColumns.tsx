"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { UsuarioType } from "@/src/types/usuario.types";
import { BadgeVariant } from "@/src/components/ui/Badge";
import Badge from "@/src/components/ui/Badge";

interface UsuarioColumnsProps {
  onEdit: (usuario: UsuarioType) => void;
}

export default function getUsuarioColumns({ onEdit }: UsuarioColumnsProps): ColumnDef<UsuarioType>[] {
  return [
    {
      accessorKey: "nome",
      header: "Nome",
    },

    {
      accessorKey: "email",
      header: "Email",
    },

    {
      accessorKey: "role",
      header: "Cargo",
      cell: ({ row }) => {
        const variantMap: Record<UsuarioType["role"], BadgeVariant> = {
          ADMIN: "info",
          OPERADOR: "default",
        };

        const labelMap: Record<UsuarioType["role"], string> = {
          ADMIN: "Administrador",
          OPERADOR: "Operador",
        };

        return <Badge variant={variantMap[row.original.role]}>{labelMap[row.original.role]}</Badge>;
      },
    },

    {
      accessorKey: "ativo",
      header: "Ativo",
      cell: ({ row }) => (
        <Badge variant={row.original.ativo ? "success" : "danger"}>{row.original.ativo ? "Ativo" : "Inativo"}</Badge>
      ),
    },

    {
      accessorKey: "createdAt",
      header: "Data de Criação",
      cell: ({ row }) => new Date(row.original.createdAt).toLocaleDateString("pt-BR"),
    },

    {
      id: "actions",
      header: "Ações",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <Button
            title="Editar usuário"
            className="cursor-pointer"
            size="icon"
            variant="ghost"
            onClick={() => onEdit(row.original)}
          >
            <Pencil className="size-4 text-slate-600" />
          </Button>
        </div>
      ),
    },
  ];
}
