"use client";

import useViagens from "./hooks/useViagens";
import EmptyCustom from "@/src/components/ui/Empty";
import DataTable from "@/src/components/layout/data-table/DataTable";
import { useMemo } from "react";
import getViagemColumns from "./_components/viagemColumns";
import InfoModal from "@/src/components/layout/modais/InfoModal";
import VeiculoInfoView from "./_components/veiculoInfoView";
import PassageirosInfoView from "./_components/passageirosInfoView";

export default function ViagensPage() {
  const {
    isLoading,
    data,
    isError,
    isVeiculoModalOpen,
    setIsVeiculoModalOpen,
    isPassageirosModalOpen,
    setIsPassageirosModalOpen,
    viagemSelecionada,
    handleViewVeiculo,
    handleViewPassageiros,
  } = useViagens();

  const columns = useMemo(
    () =>
      getViagemColumns({
        onViewVeiculo: handleViewVeiculo,
        onViewPassageiros: handleViewPassageiros,
      }),
    [handleViewVeiculo, handleViewPassageiros],
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Viagens Cadastradas</h1>
      </div>

      {isError ? (
        <div className="my-10">
          <EmptyCustom isError />
        </div>
      ) : (
        <DataTable
          columns={columns}
          data={data || []}
          searchColumn="motorista"
          isLoading={isLoading}
          searchPlaceholder="Pesquisar por motorista..."
        />
      )}

      <InfoModal
        title="Dados do Veículo"
        description="Informações do veículo utilizado nessa viagem"
        open={isVeiculoModalOpen}
        onOpenChange={setIsVeiculoModalOpen}
        size="lg"
      >
        {viagemSelecionada && <VeiculoInfoView veiculo={viagemSelecionada.veiculo} />}
      </InfoModal>

      <InfoModal
        title="Passageiros da Viagem"
        description="Pessoas vinculadas a essa viagem"
        open={isPassageirosModalOpen}
        onOpenChange={setIsPassageirosModalOpen}
        size="xl"
      >
        {viagemSelecionada && <PassageirosInfoView pessoas={viagemSelecionada.pessoas} />}
      </InfoModal>
    </div>
  );
}
