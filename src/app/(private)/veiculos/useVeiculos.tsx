"use client";

import { SubmitEvent, useState } from "react";
import { VeiculoType } from "@/src/types/veiculos.types";
import VeiculosData from "@/src/data/veiculos.json";

export default function useVeiculos() {
  const [vehicles, setVehicles] = useState<VeiculoType[]>(VeiculosData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState<null | VeiculoType>(null);
  const [formData, setFormData] = useState<Omit<VeiculoType, "id">>({ name: "", sub: "", status: "Ativo" });

  const handleOpenAdd = () => {
    setEditingVehicle(null);
    setFormData({ name: "", sub: "", status: "Ativo" });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (vehicle: VeiculoType) => {
    setEditingVehicle(vehicle);
    setFormData({ name: vehicle.name, sub: vehicle.sub, status: vehicle.status });
    setIsModalOpen(true);
  };

  const handleDelete = (vehicle: VeiculoType) => {
    if (window.confirm(`Tem certeza que deseja excluir o veículo ${vehicle.name}?`)) {
      setVehicles(vehicles.filter((v) => v.id !== vehicle.id));
    }
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editingVehicle) {
      setVehicles(vehicles.map((v) => (v.id === editingVehicle.id ? { ...v, ...formData } : v)));
    } else {
      const newVehicle = {
        ...formData,
        id: Date.now(),
        icon: "🚌",
        color: "bg-teal-600",
      };
      setVehicles([...vehicles, newVehicle]);
    }
    setIsModalOpen(false);
  };

  return {
    handleSubmit,
    handleDelete,
    isModalOpen,
    setIsModalOpen,
    vehicles,
    handleOpenEdit,
    handleOpenAdd,
    formData,
    setFormData,
    editingVehicle,
  };
}
