"use client";

import { createContext } from "react";
import { UserType } from "../types/auth.types";

interface AuthContextType {
  user: UserType | null;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);
