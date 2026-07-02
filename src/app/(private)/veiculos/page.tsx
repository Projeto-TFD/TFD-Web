"use client";

import Badge from "@/src/components/ui/Badge";
import { VeiculosType as VeiculoType } from "@/src/types/veiculos.types";
import EntityList from "@/src/components/layout/entity_list/EntityList";
import { Bus } from "lucide-react";
import useVeiculos from "./useVeiculos";
import FormModal from "@/src/components/layout/modais/FormModal";
import VeiculoFields from "./_components/veiculoFields";

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

      <FormModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onSubmit={handleSubmit}
        title={editingVehicle ? "Editar Veículo" : "Novo Veículo"}
        size="lg"
      >
        <VeiculoFields
          formData={formData}
          editingVehicle={editingVehicle !== null}
          handleChangeFormData={(data) => setFormData(data)}
        />
      </FormModal>
    </>
  );
}
