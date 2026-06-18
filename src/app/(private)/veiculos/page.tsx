"use client";

import { SubmitEvent, useState } from "react";
import Modal from "@/src/components/ui/Modal";
import Badge from "@/src/components/ui/Badge";
import { VeiculoType } from "@/src/types/veiculos.types";
import VeiculosData from "@/src/data/veiculos.json";
import EntityList from "@/src/components/layout/entity_list/EntityList";
import FormVeiculo from "./_components/formVeiculo";
import { Bus } from "lucide-react";
import useVeiculos from "./useVeiculos";

export default function VeiculosPage() {
  const {
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
  } = useVeiculos();

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
            <Bus className="text-slate-600" />
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
