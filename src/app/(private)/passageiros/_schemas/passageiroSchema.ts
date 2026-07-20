import { z } from "zod/v4";

export const passageiroSchema = z.object({
  nome: z.string().min(3, "Informe o nome do passageiro"),

  cpf: z.string().length(11, "CPF deve possuir 11 dígitos").or(z.literal("")),

  cartaoSus: z.string().length(15, "Cartão SUS deve possuir 15 dígitos").or(z.literal("")),

  dataNascimento: z
    .string()
    .refine((value) => value === "" || new Date(value) <= new Date(), "A data de nascimento não pode ser no futuro"),

  telefone: z
    .string()
    .min(10, "Telefone precisa ter 10 ou 11 numeros")
    .max(11, "Telefone precisa ter 10 ou 11 numeros")
    .or(z.literal("")),

  endereco: z.string(),

  municipio: z.string(),
});

export type PassageiroFormData = z.infer<typeof passageiroSchema>;
