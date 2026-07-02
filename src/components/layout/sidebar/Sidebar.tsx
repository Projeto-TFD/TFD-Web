"use client";

import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Bus, UserCircle } from "lucide-react";
import useSidebar from "./useSidebar";

const Sidebar = () => {
  const { menuItems, router, user, loading, pathname } = useSidebar();

  return (
    <aside className="w-64 bg-[#1e2d4a] text-slate-300 flex flex-col">
      <div className="p-6 text-white font-bold text-xl flex items-center gap-2 border-b border-slate-700">
        <Bus className="text-blue-400" /> TFD Admin
      </div>
      <nav className="flex-1 mt-4 px-3 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => router.push(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                pathname === item.path
                  ? "bg-[#2a4070] text-white border-l-3 border-blue-400"
                  : "hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon size={20} />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto px-3 pb-6">
        <Separator className="mb-4 bg-slate-700" />

        {loading ? (
          <Skeleton className="bg-blue-800 h-8 rounded-full" />
        ) : (
          <div className="flex items-center gap-2 bg-blue-800 px-3 py-2 rounded-full cursor-pointer hover:bg-blue-700 transition-colors">
            <UserCircle size={24} />
            <span className="text-xs font-medium">{user?.nome}</span>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
