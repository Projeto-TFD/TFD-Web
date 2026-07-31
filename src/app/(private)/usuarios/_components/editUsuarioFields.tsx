"use client";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Controller, useFormContext } from "react-hook-form";
import { EditUsuarioFormData } from "../_schemas/usuarioSchema";

export default function EditUsuarioFields() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<EditUsuarioFormData>();

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

      <Controller
        name="ativo"
        control={control}
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>
              Ativo <span className="text-destructive">*</span>
            </FieldLabel>

            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full bg-muted/40 py-5" aria-invalid={fieldState.invalid}>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="true">Ativo</SelectItem>

                <SelectItem value="false">Inativo</SelectItem>
              </SelectContent>
            </Select>

            <FieldError errors={[fieldState.error]} />
          </Field>
        )}
      />
    </section>
  );
}
