"use client";

import { UsuarioRequests } from "@/src/services/api/usuario/usuarioRequests";
import { PasswordType, UsuarioIdType } from "@/src/types/usuario.types";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useEditSenha() {
  return useMutation({
    mutationFn: async ({ id, data }: { id: UsuarioIdType; data: PasswordType }) =>
      UsuarioRequests.editPassword({ id, dataEdit: data }),

    onSuccess() {
      toast.success("Senha atualizada com sucesso!");
    },

    onError() {
      toast.error("Erro ao atualizar a senha.");
    },
  });
}
