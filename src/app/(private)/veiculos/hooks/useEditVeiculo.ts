"use client";

import { queryKeys } from "@/src/constants/query-keys.constants";
import { VeiculoRequests } from "@/src/services/api/veiculo/veiculoRequests";
import { EditVeiculoType, VeiculoIdType } from "@/src/types/veiculos.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useEditVeiculo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }: { id: VeiculoIdType; data: EditVeiculoType }) =>
      VeiculoRequests.edit({ id, dataEdit: data }),

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: queryKeys.VEICULOS,
      });

      toast.success("Veículo atualizado com sucesso!");
    },

    onError() {
      toast.error("Erro ao atualizar veículo.");
    },
  });
}
