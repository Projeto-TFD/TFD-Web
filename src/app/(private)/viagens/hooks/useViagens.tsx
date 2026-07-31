"use client";

import { useState } from "react";
import { ViagemType } from "@/src/types/viagem.types";
import { useViagensQuery } from "./useViagensQuery";

export default function useViagens() {
  const [isVeiculoModalOpen, setIsVeiculoModalOpen] = useState(false);
  const [isPassageirosModalOpen, setIsPassageirosModalOpen] = useState(false);
  const [viagemSelecionada, setViagemSelecionada] = useState<null | ViagemType>(null);

  const { isLoading, data, isError } = useViagensQuery();

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
    data,
    isError,
    isVeiculoModalOpen,
    setIsVeiculoModalOpen,
    isPassageirosModalOpen,
    setIsPassageirosModalOpen,
    viagemSelecionada,
    handleViewVeiculo,
    handleViewPassageiros,
  };
}
