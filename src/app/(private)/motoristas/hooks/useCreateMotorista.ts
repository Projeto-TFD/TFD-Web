"use client";

import { queryKeys } from "@/src/constants/query-keys.constants";
import { MotoristaRequests } from "@/src/services/api/motorista/motoristaRequests";
import { CreateMotoristaType } from "@/src/types/motorista.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useCreateMotorista() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateMotoristaType) => MotoristaRequests.create(data),

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: queryKeys.MOTORISTAS,
      });

      toast.success("Motorista registrado com sucesso!");
    },

    onError() {
      toast.error("Erro ao registrar o motorista.");
    },
  });
}
