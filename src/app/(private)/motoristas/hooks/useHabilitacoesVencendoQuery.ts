"use client";

import { queryKeys } from "@/src/constants/query-keys.constants";
import {
  MotoristaRequests,
  ParametrosHabilitacoesVencendoRequest,
} from "@/src/services/api/motorista/motoristaRequests";
import { useQuery } from "@tanstack/react-query";

export function useHabilitacoesVencendoQuery({
  key,
  params,
}: {
  key: string;
  params: ParametrosHabilitacoesVencendoRequest;
}) {
  return useQuery({
    queryKey: [...queryKeys.HABILITACOES_VENCENDO, key],
    queryFn: async () => await MotoristaRequests.getHabilitacoesVencendo(params),
  });
}
