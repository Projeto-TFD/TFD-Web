"use client";

import { queryKeys } from "@/src/constants/query-keys.constants";
import { MotoristaRequests } from "@/src/services/api/motorista/motoristaRequests";
import { MotoristaIdType } from "@/src/types/motorista.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useDeleteMotorista() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: MotoristaIdType) => MotoristaRequests.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.MOTORISTAS });

      toast.success("Motorista removido com sucesso!");
    },
    onError: () => {
      toast.error("Ocorreu um erro ao remover o motorista, tente novamente!");
    },
  });
}
