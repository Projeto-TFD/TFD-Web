"use client";

import { queryKeys } from "@/src/constants/query-keys.constants";
import { PassageiroRequests } from "@/src/services/api/passageiro/passageiroRequests";
import { EditPassageiroType, PassageiroIdType } from "@/src/types/passageiros.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useEditPassageiro() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }: { id: PassageiroIdType; data: EditPassageiroType }) =>
      PassageiroRequests.edit({ id, dataEdit: data }),

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: queryKeys.PASSAGEIROS,
      });

      toast.success("Passageiro atualizado com sucesso!");
    },

    onError() {
      toast.error("Erro ao atualizar passageiro.");
    },
  });
}
