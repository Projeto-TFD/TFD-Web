"use client";

import { queryKeys } from "@/src/constants/query-keys.constants";
import { UsuarioRequests } from "@/src/services/api/usuario/usuarioRequests";
import { EditUsuarioType, UsuarioIdType } from "@/src/types/usuario.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useEditUsuario() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }: { id: UsuarioIdType; data: EditUsuarioType }) =>
      UsuarioRequests.edit({ id, dataEdit: data }),

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: queryKeys.USUARIOS,
      });

      toast.success("Usuário atualizado com sucesso!");
    },

    onError() {
      toast.error("Erro ao atualizar usuário.");
    },
  });
}
