"use client";

import { Field, FieldLabel } from "@/components/ui/field";
import useLogin from "./useLogin";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import InputPassword from "@/src/components/ui/InputPassword";

export default function Login() {
  const { form, onSubmit, loginMutation } = useLogin();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-lg">
          <div className="bg-transparent md:bg-secondary rounded-sm p-8 md:p-10 shadow-0 md:shadow-md border border-gray">
            <h1 className="text-3xl font-bold text-slate-800 text-center mb-8">Login</h1>

            <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
              <Field>
                <FieldLabel>
                  E-mail <span className="text-destructive">*</span>
                </FieldLabel>

                <Input
                  required
                  type="email"
                  autoComplete="email"
                  className="bg-background py-5 px-2"
                  placeholder="seu@email.com"
                  {...form.register("email")}
                />
              </Field>

              <Field>
                <FieldLabel>
                  Senha <span className="text-destructive">*</span>
                </FieldLabel>

                <InputPassword
                  required
                  autoComplete="current-password"
                  className="bg-background py-5 px-2"
                  placeholder="digite sua senha"
                  {...form.register("password")}
                />
              </Field>

              <Button
                type="submit"
                className="w-full rounded-md bg-blue-700 px-2 py-5 font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                disabled={loginMutation.isPending}
              >
                {loginMutation.isPending ? "Entrando" : "Entrar"}
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
