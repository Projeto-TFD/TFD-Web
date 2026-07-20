"use client";

import { queryKeys } from "@/src/constants/query-keys.constants";
import { PassageiroRequests } from "@/src/services/api/passageiro/passageiroRequests";
import { CreatePassageiroType } from "@/src/types/passageiros.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useCreatePassageiro() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreatePassageiroType) => PassageiroRequests.create(data),

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: queryKeys.PASSAGEIROS,
      });

      toast.success("Passageiro registrado com sucesso!");
    },

    onError() {
      toast.error("Erro ao registrar o passageiro.");
    },
  });
}
