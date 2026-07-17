"use client";

import usePassageiros from "./usePassageiros";
import FormModal from "@/src/components/layout/modais/FormModal";
import PassageiroFields from "./_components/passageiroFields";
import { useMemo } from "react";
import getPassageiroColumns from "./_components/passageiroColumns";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import DataTable from "@/src/components/layout/data-table/DataTable";
import PassageirosData from "@/src/data/passageirosNew.json";

export default function PassageirosPage() {
  const {
    handleSubmit,
    handleDelete,
    isModalOpen,
    setIsModalOpen,
    handleOpenEdit,
    handleOpenAdd,
    formData,
    setFormData,
    editingPassenger,
  } = usePassageiros();

  const columns = useMemo(
    () =>
      getPassageiroColumns({
        onEdit: handleOpenEdit,
        onDelete: handleDelete,
      }),
    [handleOpenEdit, handleDelete],
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Passageiros Cadastrados</h1>

        <Button
          className="bg-blue-700 hover:bg-blue-600 cursor-pointer p-3"
          title="Adicionar novo veiculo"
          size={"lg"}
          onClick={handleOpenAdd}
        >
          <Plus size={18} /> Novo Passageiro
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={PassageirosData}
        searchColumn="nome"
        isLoading={false}
        searchPlaceholder="Pesquisar passageiros..."
      />

      <FormModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onSubmit={handleSubmit}
        title={editingPassenger ? "Editar Passageiro" : "Novo Passageiro"}
        size="xl"
      >
        <PassageiroFields formData={formData} handleChangeFormData={(data) => setFormData(data)} />
      </FormModal>
    </div>
  );
}
