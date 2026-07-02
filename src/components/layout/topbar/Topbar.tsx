"use client";

import { Bell, UserCircle } from "lucide-react";

const Topbar = () => {
  return (
    <header className="h-16 bg-[#1a3a6b] text-white flex items-center justify-between px-6 shadow-md">
      <div className="flex items-center gap-2 font-semibold text-sm opacity-90">
        <span>Prefeitura Municipal de Marizópolis</span>
      </div>
      <div className="flex items-center gap-4">
        {/* <button className="p-2 hover:bg-blue-800 rounded-full relative">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button> */}

        <div className="flex items-center gap-2 bg-blue-800 px-3 py-1.5 rounded-full cursor-pointer hover:bg-blue-700 transition-colors">
          <span className="text-xs font-medium">Administrador</span>
          <UserCircle size={24} />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
