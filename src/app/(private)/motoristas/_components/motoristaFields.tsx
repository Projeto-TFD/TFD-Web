"use client";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Controller, useFormContext } from "react-hook-form";
import { MotoristaFormData } from "../_schemas/motoristaSchema";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TipoHabilitacao, TipoVinculoMotorista } from "@/src/types/motorista.types";

export default function MotoristaFields() {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext<MotoristaFormData>();

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
          <FieldLabel>
            Endereço <span className="text-destructive">*</span>
          </FieldLabel>

          <Input
            required
            autoComplete="street-address"
            maxLength={255}
            className="bg-muted/40 py-5 px-2"
            placeholder="Preencha aqui"
            {...register("endereco")}
          />

          <FieldError errors={[errors.endereco]} />
        </Field>

        <Field>
          <FieldLabel>
            CPF <span className="text-destructive">*</span>
          </FieldLabel>

          <Input
            required
            maxLength={11}
            className="bg-muted/40 py-5 px-2"
            placeholder="Preencha aqui"
            {...register("cpf")}
          />

          <FieldError errors={[errors.cpf]} />
        </Field>

        <Controller
          name="tipoVinculo"
          control={control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel>
                Tipo do Vínculo <span className="text-destructive">*</span>
              </FieldLabel>

              <Select value={field.value ?? ""} onValueChange={field.onChange}>
                <SelectTrigger className="w-full bg-muted/40 py-5" aria-invalid={fieldState.invalid}>
                  <SelectValue placeholder="Selecione o vínculo" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value={TipoVinculoMotorista.Efetivo}>Efetivo</SelectItem>
                  <SelectItem value={TipoVinculoMotorista.Contratado}>Contratado</SelectItem>
                  <SelectItem value={TipoVinculoMotorista.Comissionado}>Comissionado</SelectItem>
                </SelectContent>
              </Select>

              <FieldError errors={[fieldState.error]} />
            </Field>
          )}
        />
      </div>

      <div className="flex flex-col flex-1 gap-3">
        <Field>
          <FieldLabel>
            Renach <span className="text-destructive">*</span>
          </FieldLabel>

          <Input
            required
            maxLength={11}
            className="bg-muted/40 py-5 px-2"
            placeholder="Preencha aqui"
            {...register("renach")}
          />

          <FieldError errors={[errors.renach]} />
        </Field>

        <Controller
          name="tipoHabilitacao"
          control={control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel>
                Categoria da habilitação <span className="text-destructive">*</span>
              </FieldLabel>

              <Select value={field.value ?? ""} onValueChange={field.onChange}>
                <SelectTrigger className="w-full bg-muted/40 py-5" aria-invalid={fieldState.invalid}>
                  <SelectValue placeholder="Selecione a categoria da habilitação" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value={TipoHabilitacao.A}>Categoria A</SelectItem>
                  <SelectItem value={TipoHabilitacao.B}>Categoria B</SelectItem>
                  <SelectItem value={TipoHabilitacao.C}>Categoria C</SelectItem>
                  <SelectItem value={TipoHabilitacao.D}>Categoria D</SelectItem>
                  <SelectItem value={TipoHabilitacao.E}>Categoria E</SelectItem>
                </SelectContent>
              </Select>

              <FieldError errors={[fieldState.error]} />
            </Field>
          )}
        />

        <Field>
          <FieldLabel>
            Validade da Habilitação <span className="text-destructive">*</span>
          </FieldLabel>

          <Input
            required
            type="date"
            min={new Date().toISOString().split("T")[0]}
            className="bg-muted/40 h-11 px-3"
            placeholder="Preencha aqui"
            {...register("validadeHabilitacao")}
          />

          <FieldError errors={[errors.validadeHabilitacao]} />
        </Field>
      </div>
    </section>
  );
}
