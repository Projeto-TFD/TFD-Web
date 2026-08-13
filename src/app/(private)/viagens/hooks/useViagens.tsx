"use client";

import { useMemo, useState } from "react";
import { ViagemType } from "@/src/types/viagem.types";
import { useViagensQuery } from "./useViagensQuery";
import { ParametrosViagensRequest } from "@/src/services/api/viagem/viagemRequests";

const PAGE_SIZE = 10;

export type ViagensFiltrosState = Omit<ParametrosViagensRequest, "page" | "limit">;

export default function useViagens() {
  const [isVeiculoModalOpen, setIsVeiculoModalOpen] = useState(false);
  const [isPassageirosModalOpen, setIsPassageirosModalOpen] = useState(false);
  const [viagemSelecionada, setViagemSelecionada] = useState<null | ViagemType>(null);

  const [filtros, setFiltros] = useState<ViagensFiltrosState>({});
  const [pageIndex, setPageIndex] = useState(0);

  const params = useMemo<ParametrosViagensRequest>(
    () => ({ ...filtros, page: pageIndex + 1, limit: PAGE_SIZE }),
    [filtros, pageIndex],
  );

  const { isLoading, isFetching, data, isError } = useViagensQuery(params);

  const hasNextPage = (data?.length ?? 0) === PAGE_SIZE;

  const handleFiltroChange = (campo: keyof ViagensFiltrosState, valor: number | string | undefined) => {
    setFiltros((prev) => ({ ...prev, [campo]: valor }));
    setPageIndex(0);
  };

  const handleLimparFiltros = () => {
    setFiltros({});
    setPageIndex(0);
  };

  const handleViewVeiculo = (viagem: ViagemType) => {
    setViagemSelecionada(viagem);
    setIsVeiculoModalOpen(true);
  };

  const handleViewPassageiros = (viagem: ViagemType) => {
    setViagemSelecionada(viagem);
    setIsPassageirosModalOpen(true);
  };

  return {
    isLoading,
    isFetching,
    data,
    isError,
    isVeiculoModalOpen,
    setIsVeiculoModalOpen,
    isPassageirosModalOpen,
    setIsPassageirosModalOpen,
    viagemSelecionada,
    handleViewVeiculo,
    handleViewPassageiros,
    filtros,
    handleFiltroChange,
    handleLimparFiltros,
    pageIndex,
    setPageIndex,
    hasNextPage,
    pageSize: PAGE_SIZE,
  };
}
