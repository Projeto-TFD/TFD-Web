"use client";

import { queryKeys } from "@/src/constants/query-keys.constants";
import { PassageiroRequests } from "@/src/services/api/passageiro/passageiroRequests";
import { useQuery } from "@tanstack/react-query";

export function usePassageirosQuery() {
  return useQuery({
    queryKey: queryKeys.PASSAGEIROS,
    queryFn: async () => await PassageiroRequests.getAll(),
  });
}
