"use client";

import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-lg">
          <div className="bg-transparent md:bg-secondary rounded-sm p-8 md:p-10 shadow-0 md:shadow-md border border-gray">
            <h1 className="text-3xl font-bold text-slate-800 text-center mb-8">Login</h1>

            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                router.push("/");
              }}
            >
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  E-mail
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="seu@email.com"
                  className="w-full bg-background rounded-md border border-gray-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2">
                  Senha
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Digite sua senha"
                  className="w-full bg-background  rounded-md border border-gray-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-blue-700 px-4 py-3 font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
