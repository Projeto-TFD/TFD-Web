"use client";

import { queryKeys } from "@/src/constants/query-keys.constants";
import { UsuarioRequests } from "@/src/services/api/usuario/usuarioRequests";
import { useQuery } from "@tanstack/react-query";

export function useUsuariosQuery() {
  return useQuery({
    queryKey: queryKeys.USUARIOS,
    queryFn: async () => await UsuarioRequests.getAll(),
  });
}
