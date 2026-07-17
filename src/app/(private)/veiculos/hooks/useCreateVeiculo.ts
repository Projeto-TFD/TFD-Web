"use client";

import { queryKeys } from "@/src/constants/query-keys.constants";
import { VeiculoRequests } from "@/src/services/api/veiculo/veiculoRequests";
import { CreateVeiculoType } from "@/src/types/veiculos.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useCreateVeiculo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateVeiculoType) => VeiculoRequests.create(data),

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: queryKeys.VEICULOS,
      });

      toast.success("Veículo criado com sucesso!");
    },

    onError() {
      toast.error("Erro ao criar veículo.");
    },
  });
}
