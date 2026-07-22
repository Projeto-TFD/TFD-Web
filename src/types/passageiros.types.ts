export type PassageirosType = {
  id: number;
  name: string;
  sub: string;
  status: string;
};

export type PassageiroIdType = number;

export type PassageiroType = {
  id: PassageiroIdType;
  nome: string;
  cpf: string | null;
  cartaoSus: string | null;
  dataNascimento: string | null;
  telefone: string | null;
  endereco: string | null;
  municipio: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreatePassageiroType = Omit<PassageiroType, "id" | "createdAt" | "updatedAt">;

export type EditPassageiroType = Partial<PassageiroType>;
