"use client";

import { TipoVeiculo } from "@/src/types/veiculos.types";
import useVeiculos from "./useVeiculos";
import FormModal from "@/src/components/layout/modais/FormModal";
import VeiculoFields from "./_components/veiculoFields";
import DataTable from "@/src/components/layout/data-table/DataTable";
import getVehicleColumns from "./_components/veiculoColumns";
import { Button } from "@/components/ui/button";
import { useMemo } from "react";
import { Plus } from "lucide-react";
import EmptyCustom from "@/src/components/ui/Empty";
import { FormProvider } from "react-hook-form";

export default function VeiculosPage() {
  const {
    onSubmit,
    handleDelete,
    isModalOpen,
    setIsModalOpen,
    handleOpenEdit,
    handleOpenAdd,
    form,
    isLoading,
    isError,
    data,
    createVeiculoMutation,
    editingVeiculo,
  } = useVeiculos();

  const columns = useMemo(
    () =>
      getVehicleColumns({
        onEdit: handleOpenEdit,
        onDelete: handleDelete,
      }),
    [handleOpenEdit, handleDelete],
  );

  return (
    <FormProvider {...form}>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold text-slate-800">Veículos Cadastrados</h1>

          <Button
            className="bg-blue-700 hover:bg-blue-600 cursor-pointer p-3"
            title="Adicionar novo veiculo"
            size={"lg"}
            onClick={handleOpenAdd}
          >
            <Plus size={18} /> Novo Veiculo
          </Button>
        </div>

        {isError ? (
          <div className="my-10">
            <EmptyCustom isError />
          </div>
        ) : (
          <DataTable
            columns={columns}
            data={data || []}
            isLoading={isLoading}
            searchPlaceholder="Pesquisar veiculos..."
            statusFilter={{
              column: "tipo",
              options: [
                { label: "Proprio", value: TipoVeiculo.Proprio },
                { label: "Locado", value: TipoVeiculo.Locado },
              ],
            }}
          />
        )}

        <FormModal
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          onSubmit={form.handleSubmit(onSubmit)}
          title={editingVeiculo ? "Editar Veículo" : "Novo Veículo"}
          size="xl"
          loading={createVeiculoMutation.isPending}
          disabled={editingVeiculo ? !form.formState.isDirty : false}
        >
          <VeiculoFields />
        </FormModal>
      </div>
    </FormProvider>
  );
}
