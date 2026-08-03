"use client";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import MotoristaBaseFields from "./motoristaBaseFields";
import { CreateMotoristaFormData } from "../_schemas/motoristaSchema";
import { useFormContext } from "react-hook-form";
import InputPassword from "@/src/components/ui/InputPassword";

export default function CreateMotoristaFields() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CreateMotoristaFormData>();

  return (
    <section className="flex flex-col gap-5">
      <div className="flex gap-5">
        <MotoristaBaseFields />
      </div>

      <div className="flex flex-col gap-3">
        <div>
          <h2 className="font-semibold text-slate-800">Dados de usuário</h2>
          <h4 className="text-xs text-muted-foreground">Os dados abaixo poderão ser editados na tela de usuários</h4>
        </div>

        <Separator />
      </div>

      <div className="flex flex-1 gap-5">
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
      </div>
    </section>
  );
}
