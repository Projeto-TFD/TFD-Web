"use client";

import { queryKeys } from "@/src/constants/query-keys.constants";
import { ParametrosViagensRequest, ViagemRequests } from "@/src/services/api/viagem/viagemRequests";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export function useViagensQuery(params: ParametrosViagensRequest) {
  return useQuery({
    queryKey: [...queryKeys.VIAGENS, params],
    queryFn: async () => await ViagemRequests.getAll(params),
    placeholderData: keepPreviousData,
  });
}
