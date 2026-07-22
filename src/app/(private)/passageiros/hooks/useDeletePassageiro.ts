"use client";

import { queryKeys } from "@/src/constants/query-keys.constants";
import { PassageiroRequests } from "@/src/services/api/passageiro/passageiroRequests";
import { PassageiroIdType } from "@/src/types/passageiros.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useDeletePassageiro() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: PassageiroIdType) => PassageiroRequests.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.PASSAGEIROS });

      toast.success("Passageiro removido com sucesso!");
    },
    onError: () => {
      toast.error("Ocorreu um erro ao remover o passageiro, tente novamente!");
    },
  });
}
