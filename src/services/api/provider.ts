import { authConstants } from "@/src/constants/auth.constants";
import axios, { AxiosError, AxiosResponse, HttpStatusCode } from "axios";
import { getCookie, deleteCookie } from "cookies-next/client";

export const provider = axios.create({
  baseURL: authConstants.BASE_URL,
});

export const providerPubic = axios.create({
  baseURL: authConstants.BASE_URL,
});

provider.interceptors.request.use((config) => {
  const token = getCookie(authConstants.NAME_TOKEN_IN_STORAGE)?.toString();

  if (!token) {
    deleteCookie(authConstants.NAME_TOKEN_IN_STORAGE);

    if (typeof window !== "undefined") {
      window.location.replace("/login");
    }

    return Promise.reject(new Error("Chave de acesso não encontrada. Redirecionando para a página de login."));
  }

  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

provider.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    if (error.status === HttpStatusCode.Unauthorized) {
      if (typeof window !== "undefined") {
        deleteCookie(authConstants.NAME_TOKEN_IN_STORAGE);

        window.location.replace("/login");
      }
    }
    return Promise.reject(error);
  },
);
