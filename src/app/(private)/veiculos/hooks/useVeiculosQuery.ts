"use client";

import { queryKeys } from "@/src/constants/query-keys.constants";
import { VeiculoRequests } from "@/src/services/api/veiculo/veiculoRequests";
import { useQuery } from "@tanstack/react-query";

export function useVeiculosQuery() {
  return useQuery({
    queryKey: queryKeys.VEICULOS,
    queryFn: async () => await VeiculoRequests.getAll(),
  });
}
