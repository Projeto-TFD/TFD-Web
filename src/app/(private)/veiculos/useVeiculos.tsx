"use client";

import { useState } from "react";
import { CreateVeiculoType, EditVeiculoType, VeiculoIdType, VeiculoType } from "@/src/types/veiculos.types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { VeiculoRequests } from "@/src/services/api/veiculo/veiculoRequests";
import { TipoVeiculo } from "@/src/types/veiculos.types";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

export const veiculoSchema = z.object({
  nome: z.string().min(3, "Informe o nome do veículo"),

  placa: z.string().min(7, "Placa inválida").max(8, "Placa inválida"),

  ano: z
    .number()
    .int("O ano deve ser inteiro")
    .min(1900)
    .max(new Date().getFullYear() + 1, "Ano inválido"),

  renavam: z.string().length(11, "Renavam deve possuir 11 dígitos"),

  tipo: z.enum(TipoVeiculo),
});

export type VeiculoFormData = z.infer<typeof veiculoSchema>;

export default function useVeiculos() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingVeiculo, setEditingVeiculo] = useState<null | VeiculoType>(null);
  const queryClient = useQueryClient();

  const form = useForm<VeiculoFormData>({
    resolver: zodResolver(veiculoSchema),

    defaultValues: {
      nome: "",
      placa: "",
      ano: new Date().getFullYear(),
      renavam: "",
    },
  });

  const { isLoading, data, isError } = useQuery({
    queryKey: ["veiculos"],
    queryFn: async () => {
      return await VeiculoRequests.getAll();
    },
  });

  const createVeiculoMutation = useMutation({
    mutationFn: async (data: CreateVeiculoType) => {
      return await VeiculoRequests.create(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["veiculos"] });

      toast.success("Veiculo adicionado com sucesso!");
    },
    onError: () => {
      toast.error("Ocorreu um erro na criação do veiculo, tente novamente!");
    },
  });

  const editVeiculoMutation = useMutation({
    mutationFn: async (data: { id: VeiculoIdType; dataEdit: EditVeiculoType }) => {
      return await VeiculoRequests.edit(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["veiculos"] });

      setIsModalOpen(false);
      toast.success("Veiculo atualizado com sucesso!");
    },
    onError: () => {
      toast.error("Ocorreu um erro ao atualizar o veiculo, tente novamente!");
    },
  });

  const handleOpenAdd = () => {
    form.reset({
      nome: "",
      placa: "",
      ano: new Date().getFullYear(),
      renavam: "",
      tipo: undefined,
    });

    setEditingVeiculo(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (veiculo: VeiculoType) => {
    form.reset({ ...veiculo });

    setEditingVeiculo(veiculo);
    setIsModalOpen(true);
  };

  const handleDelete = (veiculo: VeiculoType) => {
    if (window.confirm(`Tem certeza que deseja excluir o veículo ${veiculo.nome}?`)) {
      return;
    }
  };

  const onSubmit = async (data: VeiculoFormData) => {
    if (editingVeiculo) {
      await editVeiculoMutation.mutateAsync({ id: editingVeiculo.id, dataEdit: data });

      return;
    }

    await createVeiculoMutation.mutateAsync(data);
  };

  return {
    onSubmit,
    handleDelete,
    isModalOpen,
    setIsModalOpen,
    handleOpenEdit,
    handleOpenAdd,
    editingVeiculo,
    isLoading,
    isError,
    data,
    form,
    createVeiculoMutation,
  };
}
