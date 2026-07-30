import { TipoHabilitacao, TipoVinculoMotorista } from "@/src/types/motorista.types";
import { z } from "zod/v4";

export const motoristaBaseSchema = z.object({
  cpf: z.string().length(11, "CPF deve possuir 11 dígitos"),

  endereco: z.string().max(255, "Endereço deve possuir 255 caracteres"),

  renach: z.string().length(11, "RENACH deve possuir 11 caracteres"),

  validadeHabilitacao: z.string().refine((value) => new Date(value) >= new Date(), "A habilitação está vencida"),

  tipoHabilitacao: z.enum(TipoHabilitacao),

  tipoVinculo: z.enum(TipoVinculoMotorista),
});

export const createMotoristaSchema = motoristaBaseSchema.extend({
  nome: z.string().min(3, "Informe o nome do motorista"),
  email: z.email("Informe um email válido"),

  password: z.string().min(8, "A senha deve possuir pelo menos 8 caracteres"),
});
export type MotoristaFormData = z.infer<typeof motoristaBaseSchema>;
export type CreateMotoristaFormData = z.infer<typeof createMotoristaSchema>;
