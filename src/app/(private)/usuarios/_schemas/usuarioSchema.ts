import { z } from "zod/v4";

export const createAdminSchema = z.object({
  nome: z.string().min(3, "Informe o nome do usuário"),

  email: z.email("Informe um email válido"),

  password: z.string().min(8, "A senha deve possuir pelo menos 8 caracteres"),
});
export type CreateAdminFormData = z.infer<typeof createAdminSchema>;

export const editUsuarioSchema = z.object({
  nome: z.string().min(3, "Informe o nome do usuário"),

  email: z.email("Informe um email válido"),

  ativo: z.enum(["true", "false"]),
});
export type EditUsuarioFormData = z.infer<typeof editUsuarioSchema>;
