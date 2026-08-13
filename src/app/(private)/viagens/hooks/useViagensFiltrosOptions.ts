"use client";

import { queryKeys } from "@/src/constants/query-keys.constants";
import { MotoristaRequests } from "@/src/services/api/motorista/motoristaRequests";
import { VeiculoRequests } from "@/src/services/api/veiculo/veiculoRequests";
import { PassageiroRequests } from "@/src/services/api/passageiro/passageiroRequests";
import { CidadeRequests } from "@/src/services/api/cidade/cidadeRequests";
import { useQuery } from "@tanstack/react-query";

export function useViagensFiltrosOptions() {
  const motoristasQuery = useQuery({
    queryKey: queryKeys.MOTORISTAS,
    queryFn: async () => await MotoristaRequests.getAll(),
  });

  const veiculosQuery = useQuery({
    queryKey: queryKeys.VEICULOS,
    queryFn: async () => await VeiculoRequests.getAll(),
  });

  const passageirosQuery = useQuery({
    queryKey: queryKeys.PASSAGEIROS,
    queryFn: async () => await PassageiroRequests.getAll(),
  });

  const cidadesQuery = useQuery({
    queryKey: queryKeys.CIDADES,
    queryFn: async () => await CidadeRequests.getAll(),
  });

  return {
    motoristas: motoristasQuery.data ?? [],
    veiculos: veiculosQuery.data ?? [],
    passageiros: passageirosQuery.data ?? [],
    cidades: cidadesQuery.data ?? [],
  };
}
