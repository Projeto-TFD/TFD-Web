import { TipoVeiculo } from "@/src/types/veiculos.types";
import { z } from "zod/v4";

export const veiculoSchema = z.object({
  nome: z.string().min(3, "Informe o nome do veículo"),

  placa: z.string().min(7, "Placa inválida").max(8, "Placa inválida"),

  ano: z
    .number()
    .int("O ano deve ser inteiro")
    .min(1900)
    .max(new Date().getFullYear() + 1, "Ano inválido"),

  renavam: z.string().length(11, "Renavam deve possuir 11 dígitos"),

  tipo: z.enum(TipoVeiculo),
});

export type VeiculoFormData = z.infer<typeof veiculoSchema>;
