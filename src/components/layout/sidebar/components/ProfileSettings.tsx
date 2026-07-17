"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useAuth from "@/src/hooks/useAuth";
import { UserCircle } from "lucide-react";
import ConfirmModal from "../../modais/ConfirmModal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next/client";
import { Rotas } from "@/src/constants/route.constants";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/src/constants/query-keys.constants";
import { authConstants } from "@/src/constants/auth.constants";

export default function ProfileSettings() {
  const { user } = useAuth();
  const router = useRouter();
  const [isConfirmingLogout, setIsConfirmingLogout] = useState(false);
  const queryClient = useQueryClient();

  const handleLogout = () => {
    deleteCookie(authConstants.NAME_TOKEN_IN_STORAGE);
    setIsConfirmingLogout(false);
    queryClient.removeQueries({ queryKey: queryKeys.USER_LOGADO });

    router.replace(Rotas.Login);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div
            title="Exibir configurações"
            className="flex items-center gap-2 bg-blue-800 px-3 py-2 rounded-full cursor-pointer hover:bg-blue-700 transition-colors"
          >
            <UserCircle size={24} />
            <span className="text-xs font-medium">{user?.nome}</span>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => setIsConfirmingLogout(true)} className="text-destructive">
              Sair
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <ConfirmModal
        open={isConfirmingLogout}
        onOpenChange={setIsConfirmingLogout}
        onClick={handleLogout}
        title="Sair"
        description="Você tem certeza que deseja sair?"
      />
    </>
  );
}
