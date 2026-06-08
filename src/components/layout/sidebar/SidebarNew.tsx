"use client";

import { LayoutDashboard, Users, User, Bus } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, path: "/" },
  { id: "vehicles", label: "Veículos", icon: Bus, path: "/veiculos" },
  { id: "drivers", label: "Motoristas", icon: User, path: "/motoristas" },
  { id: "passengers", label: "Passageiros", icon: Users, path: "/passageiros" },
] as const;

export function AppSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Sidebar className="border-r bg-[#1e2d4a]" collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-4 text-white font-bold text-xl">
          <Bus className="text-blue-400" />
          <span>TFD Admin</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;

            return (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton
                  onClick={() => router.push(item.path)}
                  isActive={isActive}
                  className={`
                    mx-2
                    text-slate-300
                    hover:text-white
                    hover:bg-slate-800
                    ${isActive ? "bg-[#2a4070] text-white" : ""}
                  `}
                >
                  <Icon />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
