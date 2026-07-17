"use client";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TipoVeiculo } from "@/src/types/veiculos.types";
import { Controller, useFormContext } from "react-hook-form";
import { VeiculoFormData } from "../_schemas/veiculoSchema";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";

export default function VeiculoFields() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<VeiculoFormData>();

  return (
    <section className="flex flex-col gap-3">
      <Field>
        <FieldLabel>
          Nome <span className="text-destructive">*</span>
        </FieldLabel>

        <Input
          required
          className="bg-muted/40 py-5 px-2"
          placeholder="Preencha aqui"
          {...register("nome")}
          aria-invalid={!!errors.nome}
        />

        <FieldError errors={[errors.nome]} />
      </Field>

      <Field>
        <FieldLabel>
          Placa <span className="text-destructive">*</span>
        </FieldLabel>

        <Input
          required
          className="bg-muted/40 py-5 px-2 uppercase placeholder:normal-case"
          placeholder="Preencha aqui"
          {...register("placa", {
            setValueAs: (value) => value?.toUpperCase(),
          })}
          maxLength={8}
          aria-invalid={!!errors.placa}
        />

        <FieldError errors={[errors.placa]} />
      </Field>

      <Field>
        <FieldLabel>
          Número do Renavam <span className="text-destructive">*</span>
        </FieldLabel>

        <Input
          required
          className="bg-muted/40 py-5 px-2"
          placeholder="Preencha aqui"
          {...register("renavam")}
          aria-invalid={!!errors.renavam}
          maxLength={11}
        />

        <FieldError errors={[errors.renavam]} />
      </Field>

      <Field>
        <FieldLabel>
          Ano <span className="text-destructive">*</span>
        </FieldLabel>

        <Input
          required
          className="bg-muted/40 py-5 px-2 flex items-center"
          placeholder="Preencha o ano"
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
          {...register("ano", { valueAsNumber: true })}
          aria-invalid={!!errors.ano}
        />

        <FieldError errors={[errors.ano]} />
      </Field>

      <Controller
        name="tipo"
        control={control}
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>
              Tipo <span className="text-destructive">*</span>
            </FieldLabel>

            <Select value={field.value ?? ""} onValueChange={field.onChange}>
              <SelectTrigger className="w-full bg-muted/40 py-5" aria-invalid={fieldState.invalid}>
                <SelectValue placeholder="Selecione o tipo" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value={TipoVeiculo.Proprio}>Próprio</SelectItem>

                <SelectItem value={TipoVeiculo.Locado}>Locado</SelectItem>
              </SelectContent>
            </Select>

            <FieldError errors={[fieldState.error]} />
          </Field>
        )}
      />
    </section>
  );
}
