export enum TipoVeiculo {
  Proprio = "PROPRIO",
}

export type VeiculoType = {
  id: number;
  nome: string;
  placa: string;
  ano: number;
  renavam: string;
  tipo: TipoVeiculo;
  createdAt: string;
  updatedAt: string;
};

export type CreateVeiculoType = Omit<VeiculoType, "id" | "createdAt" | "updatedAt">;

export type EditVeiculoType = Partial<CreateVeiculoType>;
