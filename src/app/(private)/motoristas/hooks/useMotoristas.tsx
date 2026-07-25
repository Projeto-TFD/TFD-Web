"use client";

import { useState } from "react";
import { MotoristaType, MotoristasType } from "@/src/types/motorista.types";
import { useMotoristasQuery } from "./useMotoristasQuery";
import { useCreateMotorista } from "./useCreateMotorista";
import { useEditMotorista } from "./useEditMotorista";
import { useDeleteMotorista } from "./useDeleteMotorista";
import { useForm } from "react-hook-form";
import { MotoristaFormData, motoristaSchema } from "../_schemas/motoristaSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

export default function useMotoristas() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<Omit<MotoristasType, "id">>({ name: "", sub: "", status: "Ativo" });
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [motoristaSelecionado, setMotoristaSelecionado] = useState<null | MotoristaType>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const form = useForm<MotoristaFormData>({
    resolver: zodResolver(motoristaSchema),

    defaultValues: {
      nome: "",
      cpf: "",
      endereco: "",
      renach: "",
      validadeHabilitacao: "",
    },
  });

  const { isLoading, data, isError } = useMotoristasQuery();

  const createMotoristaMutation = useCreateMotorista();

  const editMotoristaMutation = useEditMotorista();

  const deleteMotoristaMutation = useDeleteMotorista();

  const handleOpenAdd = () => {
    form.reset({
      nome: "",
      cpf: "",
      endereco: "",
      renach: "",
      validadeHabilitacao: "",
    });

    setIsEditing(false);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (motorista: MotoristaType) => {
    form.reset({ ...motorista, validadeHabilitacao: motorista.validadeHabilitacao?.slice(0, 10) });

    setIsEditing(true);
    setMotoristaSelecionado(motorista);
    setIsModalOpen(true);
  };

  const handleDelete = (passageiro: MotoristaType) => {
    setIsEditing(false);
    setMotoristaSelecionado(passageiro);
    setIsConfirmModalOpen(true);
  };

  const onSubmit = async (data: MotoristaFormData) => {
    if (isEditing && motoristaSelecionado) {
      await editMotoristaMutation.mutateAsync({ id: motoristaSelecionado.id, data });
      setIsModalOpen(false);

      return;
    }

    await createMotoristaMutation.mutateAsync(data);
    setIsModalOpen(false);
  };

  const onSubmitDelete = async () => {
    if (!motoristaSelecionado) {
      setIsConfirmModalOpen(false);
      toast.error("Nenhum motorista selecionado");

      return;
    }

    await deleteMotoristaMutation.mutateAsync(motoristaSelecionado.id);
    setIsConfirmModalOpen(false);
  };

  return {
    handleDelete,
    handleOpenAdd,
    onSubmit,
    handleOpenEdit,
    isModalOpen,
    formData,
    setFormData,
    setIsModalOpen,
    isEditing,
    isLoading,
    data,
    isError,
    createMotoristaMutation,
    editMotoristaMutation,
    deleteMotoristaMutation,
    onSubmitDelete,
    form,
    isConfirmModalOpen,
    setIsConfirmModalOpen,
    motoristaSelecionado,
  };
}
