import { MotoristaType } from "./motorista.types";
import { PassageiroType } from "./passageiros.types";
import { VeiculoType } from "./veiculos.types";

export type ViagemIdType = number;

export type CidadeType = {
  id: number;
  nome: string;
  uf: string;
};

export enum TipoParticipacao {
  Paciente = "PACIENTE",
  Acompanhante = "ACOMPANHANTE",
}

export type ViagemPessoaType = {
  id: number;
  pessoaId: number;
  tipoParticipacao: TipoParticipacao;
  observacao: string | null;
  pessoa: PassageiroType;
};

export type ViagemType = {
  id: ViagemIdType;
  veiculoId: number;
  motoristaId: number;
  cidadeOrigemId: number;
  cidadeDestinoId: number;
  dataSaida: string;
  dataEntrada: string | null;
  observacao: string | null;
  createdAt: string;
  updatedAt: string;
  veiculo: VeiculoType;
  motorista: MotoristaType;
  cidadeOrigem: CidadeType;
  cidadeDestino: CidadeType;
  pessoas: ViagemPessoaType[];
};
