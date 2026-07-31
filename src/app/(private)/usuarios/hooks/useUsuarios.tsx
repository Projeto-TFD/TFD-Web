"use client";

import { useState } from "react";
import { RoleUsuario, UsuarioType } from "@/src/types/usuario.types";
import { useUsuariosQuery } from "./useUsuariosQuery";
import { useCreateAdmin } from "./useCreateAdmin";
import { useEditUsuario } from "./useEditUsuario";
import { useForm } from "react-hook-form";
import {
  CreateAdminFormData,
  EditUsuarioFormData,
  createAdminSchema,
  editUsuarioSchema,
} from "../_schemas/usuarioSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

export default function useUsuarios() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [usuarioSelecionado, setUsuarioSelecionado] = useState<null | UsuarioType>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const createForm = useForm<CreateAdminFormData>({
    resolver: zodResolver(createAdminSchema),

    defaultValues: {
      nome: "",
      email: "",
      password: "",
    },
  });

  const editForm = useForm<EditUsuarioFormData>({
    resolver: zodResolver(editUsuarioSchema),

    defaultValues: {
      nome: "",
      email: "",
      ativo: "true",
    },
  });

  const { isLoading, data, isError } = useUsuariosQuery();

  const createAdminMutation = useCreateAdmin();

  const editUsuarioMutation = useEditUsuario();

  const handleOpenAdd = () => {
    createForm.reset({
      nome: "",
      email: "",
      password: "",
    });

    setIsEditing(false);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (usuario: UsuarioType) => {
    editForm.reset({
      nome: usuario.nome,
      email: usuario.email,
      ativo: usuario.ativo ? "true" : "false",
    });

    setIsEditing(true);
    setUsuarioSelecionado(usuario);
    setIsModalOpen(true);
  };

  const onCreateSubmit = async (data: CreateAdminFormData) => {
    await createAdminMutation.mutateAsync({
      nome: data.nome,
      email: data.email,
      password: data.password,
      role: RoleUsuario.Admin,
      motorista: null,
    });

    setIsModalOpen(false);
  };

  const onEditSubmit = async (data: EditUsuarioFormData) => {
    if (!usuarioSelecionado) {
      toast.error("Nenhum usuário selecionado");

      return;
    }

    await editUsuarioMutation.mutateAsync({
      id: usuarioSelecionado.id,
      data: {
        nome: data.nome,
        email: data.email,
        ativo: data.ativo === "true",
      },
    });

    setIsModalOpen(false);
  };

  return {
    handleOpenAdd,
    handleOpenEdit,
    isModalOpen,
    setIsModalOpen,
    isEditing,
    isLoading,
    data,
    isError,
    createForm,
    editForm,
    onCreateSubmit,
    onEditSubmit,
    createAdminMutation,
    editUsuarioMutation,
    usuarioSelecionado,
  };
}
