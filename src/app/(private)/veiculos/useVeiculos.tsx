"use client";

import { SubmitEvent, useState } from "react";
import { VeiculosType, VeiculoType } from "@/src/types/veiculos.types";
import { useQuery } from "@tanstack/react-query";
import { VeiculoRequests } from "@/src/services/api/veiculo/veiculoRequests";

export default function useVeiculos() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState<null | VeiculoType>(null);
  const [formData, setFormData] = useState<Omit<VeiculosType, "id">>({ name: "", sub: "", status: "Ativo" });

  const { isLoading, data, isError } = useQuery({
    queryKey: ["veiculos"],
    queryFn: async () => {
      return await VeiculoRequests.getAll();
    },
  });

  const handleOpenAdd = () => {
    setEditingVehicle(null);
    setFormData({ name: "", sub: "", status: "Ativo" });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (vehicle: VeiculoType) => {
    setEditingVehicle(vehicle);
    setFormData({ name: vehicle.nome, sub: vehicle.placa, status: "Ativo" });
    setIsModalOpen(true);
  };

  const handleDelete = (vehicle: VeiculoType) => {
    if (window.confirm(`Tem certeza que deseja excluir o veículo ${vehicle.nome}?`)) {
      return;
    }
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsModalOpen(false);
  };

  return {
    handleSubmit,
    handleDelete,
    isModalOpen,
    setIsModalOpen,
    handleOpenEdit,
    handleOpenAdd,
    formData,
    setFormData,
    editingVehicle,
    isLoading,
    isError,
    data,
  };
}
