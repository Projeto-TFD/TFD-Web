"use client";

import useAuth from "@/src/hooks/useAuth";
import { LayoutDashboard, Users, User, Bus } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export enum Rotas {
  Dashboard = "/",
  Veiculos = "/veiculos",
  Motoristas = "/motoristas",
  Passageiros = "/passageiros",
}

export default function useSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { user, loading } = useAuth();

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, path: Rotas.Dashboard },
    { id: "vehicles", label: "Veículos", icon: Bus, path: Rotas.Veiculos },
    { id: "drivers", label: "Motoristas", icon: User, path: Rotas.Motoristas },
    { id: "passengers", label: "Passageiros", icon: Users, path: Rotas.Passageiros },
  ] as const;

  return { menuItems, router, user, loading, pathname };
}
