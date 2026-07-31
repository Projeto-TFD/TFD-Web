"use client";

import { queryKeys } from "@/src/constants/query-keys.constants";
import { ViagemRequests } from "@/src/services/api/viagem/viagemRequests";
import { useQuery } from "@tanstack/react-query";

export function useViagensQuery() {
  return useQuery({
    queryKey: queryKeys.VIAGENS,
    queryFn: async () => await ViagemRequests.getAll(),
  });
}
