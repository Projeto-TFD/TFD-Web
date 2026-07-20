"use client";

import { queryKeys } from "@/src/constants/query-keys.constants";
import { VeiculoRequests } from "@/src/services/api/veiculo/veiculoRequests";
import { VeiculoIdType } from "@/src/types/veiculos.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useDeleteVeiculo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: VeiculoIdType) => VeiculoRequests.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.VEICULOS });

      toast.success("Veiculo removido com sucesso!");
    },
    onError: () => {
      toast.error("Ocorreu um erro ao deletar o veiculo, tente novamente!");
    },
  });
}
