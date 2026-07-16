"use client";

import EntityList from "@/src/components/layout/entity_list/EntityList";
import Badge from "@/src/components/ui/Badge";
import Modal from "@/src/components/ui/Modal";
import FormPassageiro from "./_components/formPassageiro";
import usePassageiros from "./usePassageiros";
import randomColors from "@/src/utils/randomColors";
import FormModal from "@/src/components/layout/modais/FormModal";

export default function PassageirosPage() {
  const {
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
  } = usePassageiros();

  return (
    <>
      <EntityList
        title="Passageiros Cadastrados"
        entities={passengers}
        onAdd={handleOpenAdd}
        onEdit={handleOpenEdit}
        onDelete={handleDelete}
        renderName={(item) => item.name}
        onView={(p) => alert(`Detalhes de ${p.name}\n${p.sub}`)}
        renderAvatar={(item) => (
          <div
            className={`w-10 h-10 rounded-full ${randomColors(item.name)} text-white flex items-center justify-center font-bold text-xs`}
          >
            {item.name.substring(0, 2).toUpperCase()}
          </div>
        )}
        renderSubtext={(item) => item.sub}
        renderStatus={(item) => <Badge variant={item.status === "Ativo" ? "success" : "warning"}>{item.status}</Badge>}
      />

      <FormModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onSubmit={handleSubmit}
        title={editingPassenger ? "Editar Passageiro" : "Novo Passageiro"}
      >
        <FormPassageiro
          formData={formData}
          editingPassenger={editingPassenger !== null}
          handleChangeFormData={(data) => setFormData(data)}
          handleOpenModal={(b) => setIsModalOpen(b)}
          handleSubmit={handleSubmit}
        />
      </FormModal>
    </>
  );
}
