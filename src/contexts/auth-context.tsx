"use client";

import { createContext } from "react";
import { UsuarioType } from "../types/usuario.types";

interface AuthContextType {
  user: UsuarioType | null;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);
