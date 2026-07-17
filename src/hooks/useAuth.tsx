"use client";

import { useContext } from "react";
import { AuthContext } from "@/src/contexts/auth-context";

export default function useAuth() {
  return useContext(AuthContext);
}
