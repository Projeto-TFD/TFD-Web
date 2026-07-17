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
  cpf: string;
  cartaoSus: string;
  dataNascimento: string;
  telefone: string;
  endereco: string;
  municipio: string;
  createdAt: string;
  updatedAt: string;
};

export type CreatePassageiroType = Omit<PassageiroType, "id" | "createdAt" | "updatedAt">;

export type EditPassageiroType = Partial<PassageiroType>;
