"use client";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { EditSenhaFormData } from "../_schemas/usuarioSchema";
import { useFormContext } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function EditSenhaFields() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    formState: { errors },
  } = useFormContext<EditSenhaFormData>();

  return (
    <section className="flex flex-col gap-3">
      <Field>
        <FieldLabel>
          Nova senha <span className="text-destructive">*</span>
        </FieldLabel>

        <div className="relative">
          <Input
            required
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            className="bg-muted/40 h-11 px-3 pr-10"
            placeholder="Preencha aqui"
            {...register("password")}
          />

          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-0 top-0 h-11 w-10"
            tabIndex={-1}
            aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </Button>
        </div>

        <FieldError errors={[errors.password]} />
      </Field>
    </section>
  );
}
