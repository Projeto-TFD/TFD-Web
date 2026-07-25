"use client";

import { queryKeys } from "@/src/constants/query-keys.constants";
import { MotoristaRequests } from "@/src/services/api/motorista/motoristaRequests";
import { EditMotoristaType, MotoristaIdType } from "@/src/types/motorista.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useEditMotorista() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }: { id: MotoristaIdType; data: EditMotoristaType }) =>
      MotoristaRequests.edit({ id, dataEdit: data }),

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: queryKeys.MOTORISTAS,
      });

      toast.success("Motorista atualizado com sucesso!");
    },

    onError() {
      toast.error("Erro ao atualizar motorista.");
    },
  });
}
