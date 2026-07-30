import { CreateMotoristaType, MotoristaType } from "./motorista.types";

export type UsuarioIdType = number;

export enum RoleUsuario {
  Admin = "ADMIN",
  Operador = "OPERADOR",
}

export type UsuarioType = {
  id: UsuarioIdType;
  nome: string;
  email: string;
  role: RoleUsuario;
  ativo: boolean;
  createdAt: string;
  updatedAt: string;
  motorista: Omit<MotoristaType, "nome"> | null;
};

export type PasswordType = {
  password: string;
};

export type CreateUsuarioType = Omit<UsuarioType, "id" | "createdAt" | "updatedAt" | "motorista" | "ativo"> &
  PasswordType & {
    motorista: Omit<CreateMotoristaType, "nome"> | null;
  };

export type EditUsuarioType = Partial<UsuarioType>;
