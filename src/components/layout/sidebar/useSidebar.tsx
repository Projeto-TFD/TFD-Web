"use client";

import { Rotas } from "@/src/constants/route.constants";
import useAuth from "@/src/hooks/useAuth";
import { LayoutDashboard, Users, User, Bus } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function useSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { loading } = useAuth();

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, path: Rotas.Dashboard },
    { id: "vehicles", label: "Veículos", icon: Bus, path: Rotas.Veiculos },
    { id: "drivers", label: "Motoristas", icon: User, path: Rotas.Motoristas },
    { id: "passengers", label: "Passageiros", icon: Users, path: Rotas.Passageiros },
  ] as const;

  return { menuItems, router, loading, pathname };
}
