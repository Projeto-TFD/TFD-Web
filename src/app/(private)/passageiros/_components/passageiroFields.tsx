"use client";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { PassageiroFormData } from "../_schemas/passageiroSchema";

export default function PassageiroFields() {
  const {
    register,
    formState: { errors },
  } = useFormContext<PassageiroFormData>();

  return (
    <section className="flex gap-5">
      <div className="flex flex-col flex-1 gap-3">
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
          <FieldLabel>CPF</FieldLabel>

          <Input maxLength={11} className="bg-muted/40 py-5 px-2" placeholder="Preencha aqui" {...register("cpf")} />

          <FieldError errors={[errors.cpf]} />
        </Field>

        <Field>
          <FieldLabel>Cartão SUS</FieldLabel>

          <Input
            maxLength={15}
            className="bg-muted/40 py-5 px-2"
            placeholder="Preencha aqui"
            {...register("cartaoSus")}
          />

          <FieldError errors={[errors.cartaoSus]} />
        </Field>

        <Field>
          <FieldLabel>Data de Nascimento</FieldLabel>

          <Input
            type="date"
            max={new Date().toISOString().split("T")[0]}
            autoComplete="bday"
            className="bg-muted/40 h-11 px-3"
            placeholder="Preencha aqui"
            {...register("dataNascimento")}
          />

          <FieldError errors={[errors.dataNascimento]} />
        </Field>
      </div>

      <div className="flex flex-col flex-1 gap-3">
        <Field>
          <FieldLabel>Telefone</FieldLabel>

          <Input
            type="tel"
            maxLength={11}
            autoComplete="tel"
            className="bg-muted/40 py-5 px-2"
            placeholder="Preencha aqui"
            {...register("telefone")}
          />

          <FieldError errors={[errors.telefone]} />
        </Field>

        <Field>
          <FieldLabel>Município</FieldLabel>

          <Input
            maxLength={50}
            autoComplete="city"
            className="bg-muted/40 py-5 px-2"
            placeholder="Preencha aqui"
            {...register("municipio")}
          />

          <FieldError errors={[errors.municipio]} />
        </Field>

        <Field>
          <FieldLabel>Endereço</FieldLabel>

          <Input
            autoComplete="street-address"
            className="bg-muted/40 py-5 px-2"
            placeholder="Preencha aqui"
            {...register("endereco")}
          />

          <FieldError errors={[errors.endereco]} />
        </Field>
      </div>
    </section>
  );
}
