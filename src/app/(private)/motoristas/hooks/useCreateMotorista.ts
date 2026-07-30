"use client";

import { queryKeys } from "@/src/constants/query-keys.constants";
import { UsuarioRequests } from "@/src/services/api/usuario/usuarioRequests";
import { CreateUsuarioType } from "@/src/types/usuario.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useCreateMotorista() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateUsuarioType) => UsuarioRequests.create(data),

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
