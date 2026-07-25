"use client";

import { queryKeys } from "@/src/constants/query-keys.constants";
import { MotoristaRequests } from "@/src/services/api/motorista/motoristaRequests";
import { useQuery } from "@tanstack/react-query";

export function useMotoristasQuery() {
  return useQuery({
    queryKey: queryKeys.MOTORISTAS,
    queryFn: async () => await MotoristaRequests.getAll(),
  });
}
