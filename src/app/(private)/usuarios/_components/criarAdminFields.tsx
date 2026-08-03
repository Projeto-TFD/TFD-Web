"use client";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { CreateAdminFormData } from "../_schemas/usuarioSchema";
import { useFormContext } from "react-hook-form";
import InputPassword from "@/src/components/ui/InputPassword";

export default function CriarAdminFields() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CreateAdminFormData>();

  return (
    <section className="flex flex-col gap-3">
      <Field>
        <FieldLabel>
          Nome <span className="text-destructive">*</span>
        </FieldLabel>

        <Input
          required
          autoComplete="name"
          className="bg-muted/40 py-5 px-2"
          placeholder="Preencha aqui"
          {...register("nome")}
        />

        <FieldError errors={[errors.nome]} />
      </Field>

      <Field>
        <FieldLabel>
          Email <span className="text-destructive">*</span>
        </FieldLabel>

        <Input
          required
          type="email"
          autoComplete="email"
          className="bg-muted/40 h-11 px-3"
          placeholder="Preencha aqui"
          {...register("email")}
        />

        <FieldError errors={[errors.email]} />
      </Field>

      <Field>
        <FieldLabel>
          Senha <span className="text-destructive">*</span>
        </FieldLabel>

        <InputPassword
          required
          autoComplete="new-password"
          className="bg-muted/40 h-11 px-3 pr-10"
          placeholder="Preencha aqui"
          {...register("password")}
        />

        <FieldError errors={[errors.password]} />
      </Field>
    </section>
  );
}
