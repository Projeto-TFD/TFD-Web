"use client";

import { LoginRequest } from "@/src/types/auth.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { setCookie } from "cookies-next/client";
import { AuthRequests } from "@/src/services/api/auth/authRequests";
import { useForm } from "react-hook-form";
import { Rotas } from "@/src/constants/route.constants";
import { queryKeys } from "@/src/constants/query-keys.constants";
import { authConstants } from "@/src/constants/auth.constants";

interface LoginForm {
  email: string;
  password: string;
}

export default function useLogin() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const form = useForm<LoginForm>({
    defaultValues: {
      email: "admin@local.com",
      password: "admin123",
    },
  });

  const loginMutation = useMutation({
    mutationFn: async (data: LoginRequest) => {
      return await AuthRequests.login(data);
    },
    onSuccess: (data) => {
      setCookie(authConstants.NAME_TOKEN_IN_STORAGE, data.accessToken, { path: "/", maxAge: data.expiresIn });
      queryClient.setQueryData(queryKeys.USER_LOGADO, data.user);

      router.replace(Rotas.Dashboard);

      toast.info("Bem vindo a área administrativa!");
    },
    onError: () => {
      toast.error("Erro ao fazer login. Verifique suas credenciais e tente novamente.");
    },
  });

  const onSubmit = (data: LoginForm) => {
    loginMutation.mutate({ email: data.email, password: data.password });
  };

  return { form, onSubmit, loginMutation };
}
