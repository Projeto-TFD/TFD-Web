"use client";

import { SubmitEvent, useState } from "react";
import MotoristasData from "@/src/data/motoristas.json";
import { MotoristaType } from "@/src/types/motorista.types";

export default function useMotoristas() {
  const [drivers, setDrivers] = useState(MotoristasData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDriver, setEditingDriver] = useState<MotoristaType | null>(null);
  const [formData, setFormData] = useState<Omit<MotoristaType, "id">>({ name: "", sub: "", status: "Ativo" });

  const handleOpenAdd = () => {
    setEditingDriver(null);
    setFormData({ name: "", sub: "", status: "Ativo" });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (driver: MotoristaType) => {
    setEditingDriver(driver);
    setFormData({ name: driver.name, sub: driver.sub, status: driver.status });
    setIsModalOpen(true);
  };

  const handleDelete = (driver: MotoristaType) => {
    if (window.confirm(`Tem certeza que deseja excluir ${driver.name}?`)) {
      setDrivers(drivers.filter((d) => d.id !== driver.id));
    }
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editingDriver) {
      setDrivers(drivers.map((d) => (d.id === editingDriver.id ? { ...d, ...formData } : d)));
    } else {
      const newDriver = {
        ...formData,
        id: Date.now(),
        color: "bg-blue-600",
      };
      setDrivers([...drivers, newDriver]);
    }
    setIsModalOpen(false);
  };

  return {
    handleDelete,
    handleOpenAdd,
    handleSubmit,
    handleOpenEdit,
    isModalOpen,
    formData,
    editingDriver,
    setFormData,
    setIsModalOpen,
    setDrivers,
    setEditingDriver,
    drivers,
  };
}
