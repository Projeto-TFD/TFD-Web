import { RoleUsuario } from "./usuario.types";

export type LoginResponse = {
  accessToken: string;
  expiresIn: number;
  tokenType: string;
  user: RoleUsuario;
};

export type LoginRequest = {
  email: string;
  password: string;
};
