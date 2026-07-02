export enum RoleUser {
  Admin = "ADMIN",
  Operador = "OPERADOR",
}

export type UserType = {
  id: number;
  nome: string;
  email: string;
  role: RoleUser;
};

export type LoginResponse = {
  accessToken: string;
  expiresIn: number;
  tokenType: string;
  user: UserType;
};

export type LoginRequest = {
  email: string;
  password: string;
};
