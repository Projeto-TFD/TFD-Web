"use client";

import { PassageiroType } from "@/src/types/passageiros.types";
import { SubmitEvent, useState } from "react";
import PassageirosData from "@/src/data/passageiros.json";

export default function usePassageiros() {
  const [passengers, setPassengers] = useState<PassageiroType[]>(PassageirosData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPassenger, setEditingPassenger] = useState<PassageiroType | null>(null);
  const [formData, setFormData] = useState({ name: "", sub: "", status: "Ativo" });

  const handleOpenAdd = () => {
    setEditingPassenger(null);
    setFormData({ name: "", sub: "", status: "Ativo" });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (passenger: PassageiroType) => {
    setEditingPassenger(passenger);
    setFormData({ name: passenger.name, sub: passenger.sub, status: passenger.status });
    setIsModalOpen(true);
  };

  const handleDelete = (passenger: PassageiroType) => {
    if (window.confirm(`Tem certeza que deseja excluir ${passenger.name}?`)) {
      setPassengers(passengers.filter((p) => p.id !== passenger.id));
    }
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editingPassenger) {
      setPassengers(passengers.map((p) => (p.id === editingPassenger.id ? { ...p, ...formData } : p)));
    } else {
      const newPassenger = {
        ...formData,
        id: Date.now(),
        color: "bg-blue-500",
      };
      setPassengers([...passengers, newPassenger]);
    }
    setIsModalOpen(false);
  };

  return {
    handleSubmit,
    handleDelete,
    isModalOpen,
    setIsModalOpen,
    passengers,
    handleOpenEdit,
    handleOpenAdd,
    formData,
    setFormData,
    editingPassenger,
  };
}
