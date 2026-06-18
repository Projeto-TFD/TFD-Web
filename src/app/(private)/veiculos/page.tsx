"use client";

import { SubmitEvent, useState } from "react";
import Modal from "@/src/components/ui/Modal";
import Badge from "@/src/components/ui/Badge";
import { VeiculoType } from "@/src/types/veiculos.types";
import VeiculosData from "@/src/data/veiculos.json";
import EntityList from "@/src/components/layout/entity_list/EntityList";
import FormVeiculo from "./_components/formVeiculo";

export default function VeiculosPage() {
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

  return (
    <>
      <EntityList
        title="Veículos Cadastrados"
        entities={vehicles}
        onAdd={handleOpenAdd}
        onEdit={handleOpenEdit}
        onDelete={handleDelete}
        onView={(v: VeiculoType) => alert(`Detalhes do Veículo:\n${v.name}\n${v.sub}`)}
        renderAvatar={() => (
          <div
            className={`w-10 h-10 rounded-lg bg-accent text-white flex items-center justify-center font-bold text-lg`}
          >
            🚌
          </div>
        )}
        renderName={(item) => item.name}
        renderSubtext={(item) => item.sub}
        renderStatus={(item) => (
          <Badge variant={item.status === "Ativo" ? "success" : item.status === "Manutenção" ? "warning" : "default"}>
            {item.status}
          </Badge>
        )}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingVehicle ? "Editar Veículo" : "Novo Veículo"}
      >
        <FormVeiculo
          formData={formData}
          editingVehicle={editingVehicle !== null}
          handleChangeFormData={(data) => setFormData(data)}
          handleOpenModal={(b) => setIsModalOpen(b)}
          handleSubmit={handleSubmit}
        />
      </Modal>
    </>
  );
}
