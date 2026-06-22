"use client";

import EntityList from "@/src/components/layout/entity_list/EntityList";
import Badge from "@/src/components/ui/Badge";
import Modal from "@/src/components/ui/Modal";
import useMotoristas from "./useMotoristas";
import randomColors from "@/src/utils/randomColors";
import FormMotorista from "./_components/formMotorista";

export default function MotoristasPage() {
  const {
    handleDelete,
    handleOpenAdd,
    handleSubmit,
    handleOpenEdit,
    isModalOpen,
    formData,
    editingDriver,
    setFormData,
    setIsModalOpen,
    drivers,
  } = useMotoristas();

  return (
    <>
      <EntityList
        title="Motoristas Cadastrados"
        entities={drivers}
        onAdd={handleOpenAdd}
        onEdit={handleOpenEdit}
        onDelete={handleDelete}
        onView={(d) => alert(`Detalhes do Motorista:\n${d.name}\n${d.sub}`)}
        renderAvatar={(item) => (
          <div
            className={`w-10 h-10 rounded-full ${randomColors(item.name)} text-white flex items-center justify-center font-bold text-xs`}
          >
            {item.name.substring(0, 2).toUpperCase()}
          </div>
        )}
        renderName={(d) => d.name}
        renderSubtext={(item) => item.sub}
        renderStatus={(item) => (
          <Badge variant={item.status === "Ativo" ? "success" : item.status === "Vencida" ? "warning" : "default"}>
            {item.status}
          </Badge>
        )}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingDriver ? "Editar Passageiro" : "Novo Passageiro"}
      >
        <FormMotorista
          formData={formData}
          editingItem={editingDriver !== null}
          handleChangeFormData={(data) => setFormData(data)}
          handleOpenModal={(b) => setIsModalOpen(b)}
          handleSubmit={handleSubmit}
        />
      </Modal>
    </>
  );
}
