import { TipoHabilitacao, TipoVinculoMotorista } from "@/src/types/motorista.types";
import { z } from "zod/v4";

export const motoristaSchema = z.object({
  nome: z.string().min(3, "Informe o nome do motorista"),

  cpf: z.string().length(11, "CPF deve possuir 11 dígitos"),

  endereco: z.string().max(255, "Endereço deve possuir 255 caracteres"),

  renach: z.string().length(11, "RENACH deve possuir 11 caracteres"),

  validadeHabilitacao: z.string().refine((value) => new Date(value) >= new Date(), "A habilitação está vencida"),

  tipoHabilitacao: z.enum(TipoHabilitacao),

  tipoVinculo: z.enum(TipoVinculoMotorista),
});

export type MotoristaFormData = z.infer<typeof motoristaSchema>;
