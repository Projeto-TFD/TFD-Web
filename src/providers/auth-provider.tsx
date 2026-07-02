"use client";

import { AuthContext } from "@/src/contexts/auth-context";
import { useQuery } from "@tanstack/react-query";
import { AuthRequests } from "../services/api/auth/authRequests";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: user, isLoading } = useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      return await AuthRequests.me();
    },
    retry: false,
    refetchOnWindowFocus: false,
  });

  return (
    <AuthContext.Provider
      value={{
        user: user ?? null,
        loading: isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
