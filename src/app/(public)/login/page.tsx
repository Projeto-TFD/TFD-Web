"use client";

import useLogin from "./useLogin";

export default function Login() {
  const { form, onSubmit, loginMutation } = useLogin();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-lg">
          <div className="bg-transparent md:bg-secondary rounded-sm p-8 md:p-10 shadow-0 md:shadow-md border border-gray">
            <h1 className="text-3xl font-bold text-slate-800 text-center mb-8">Login</h1>

            <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase mb-1">
                  E-mail
                </label>

                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="seu@email.com"
                  className="w-full bg-background px-4 py-2.5 border border-slate-200 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  {...form.register("email")}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-xs font-bold text-slate-500 uppercase mb-1">
                  Senha
                </label>

                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Digite sua senha"
                  className="w-full bg-background px-4 py-2.5 border border-slate-200 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  {...form.register("password")}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-blue-700 px-4 py-3 font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                disabled={loginMutation.isPending}
              >
                {loginMutation.isPending ? "Entrando" : "Entrar"}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
