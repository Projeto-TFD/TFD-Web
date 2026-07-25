"use client";

import useMotoristas from "./hooks/useMotoristas";
import FormModal from "@/src/components/layout/modais/FormModal";
import { Button } from "@/components/ui/button";
import { Clock4, Plus } from "lucide-react";
import MotoristaFields from "./_components/motoristaFields";
import EmptyCustom from "@/src/components/ui/Empty";
import DataTable from "@/src/components/layout/data-table/DataTable";
import { useMemo } from "react";
import getMotoristaColumns from "./_components/motoristaColumns";
import { TipoVinculoMotorista } from "@/src/types/motorista.types";
import { FormProvider } from "react-hook-form";
import ConfirmModal from "@/src/components/layout/modais/ConfirmModal";
import InfoModal from "@/src/components/layout/modais/InfoModal";
import HabilitacoesVencendoView from "./_components/habilitacoesVencendoView";

export default function MotoristasPage() {
  const {
    handleDelete,
    handleOpenAdd,
    onSubmit,
    handleOpenEdit,
    isModalOpen,
    setIsModalOpen,
    isEditing,
    isLoading,
    data,
    isError,
    createMotoristaMutation,
    editMotoristaMutation,
    deleteMotoristaMutation,
    onSubmitDelete,
    form,
    isConfirmModalOpen,
    setIsConfirmModalOpen,
    motoristaSelecionado,
    isInfoModalOpen,
    setIsInfoModalOpen,
  } = useMotoristas();

  const columns = useMemo(
    () =>
      getMotoristaColumns({
        onEdit: handleOpenEdit,
        onDelete: handleDelete,
      }),
    [handleOpenEdit, handleDelete],
  );

  return (
    <FormProvider {...form}>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold text-slate-800">Motoristas Cadastrados</h1>

          <div className="flex gap-2 items-center">
            <Button
              variant={"destructive"}
              className="border border-red-300 cursor-pointer p-3"
              title="Habilitações prestes a vencer"
              size={"lg"}
              onClick={() => setIsInfoModalOpen(true)}
            >
              Habilitações vencendo <Clock4 size={18} />
            </Button>

            <Button
              className="bg-blue-700 hover:bg-blue-600 cursor-pointer p-3"
              title="Adicionar novo motorista"
              size={"lg"}
              onClick={handleOpenAdd}
            >
              <Plus size={18} /> Novo Motorista
            </Button>
          </div>
        </div>

        {isError ? (
          <div className="my-10">
            <EmptyCustom isError />
          </div>
        ) : (
          <DataTable
            columns={columns}
            data={data || []}
            searchColumn="nome"
            isLoading={isLoading}
            searchPlaceholder="Pesquisar motoristas..."
            statusFilter={{
              column: "tipoVinculo",
              options: [
                { label: "Efetivos", value: TipoVinculoMotorista.Efetivo },
                { label: "Contratados", value: TipoVinculoMotorista.Contratado },
                { label: "Comissionados", value: TipoVinculoMotorista.Comissionado },
              ],
            }}
          />
        )}
      </div>

      <FormModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        title={isEditing ? "Editar Motorista" : "Novo Motorista"}
        onSubmit={form.handleSubmit(onSubmit)}
        size="xl"
        className="sm:max-w-1/2"
        disabled={isEditing ? !form.formState.isDirty : false}
        loading={isEditing ? editMotoristaMutation.isPending : createMotoristaMutation.isPending}
      >
        <MotoristaFields />
      </FormModal>

      <ConfirmModal
        title="Confirmação de exclusão"
        description={
          <>
            deseja realmente excluir o motorista{" "}
            <strong className="text-destructive">{motoristaSelecionado?.nome}</strong>
          </>
        }
        open={isConfirmModalOpen}
        onOpenChange={setIsConfirmModalOpen}
        onClick={onSubmitDelete}
        loading={deleteMotoristaMutation.isPending}
      />

      <InfoModal
        title="Habilitações prestes a vencer"
        description="Motoristas que estão com habilitação perto do vencimento no período selecionado"
        open={isInfoModalOpen}
        onOpenChange={setIsInfoModalOpen}
        size="xl"
      >
        <HabilitacoesVencendoView />
      </InfoModal>
    </FormProvider>
  );
}
