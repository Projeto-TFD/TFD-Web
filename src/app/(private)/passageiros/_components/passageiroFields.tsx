"use client";

import { PassageirosType } from "@/src/types/passageiros.types";

interface FormPassageiroProps {
  formData: Omit<PassageirosType, "id">;
  handleChangeFormData: (data: Omit<PassageirosType, "id">) => void;
}

export default function PassageiroFields({ formData, handleChangeFormData }: FormPassageiroProps) {
  return (
    <>
      <div>
        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Nome Completo</label>
        <input
          required
          className="w-full p-2 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.name}
          onChange={(e) => handleChangeFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">CPF / Cartão SUS</label>
        <input
          required
          className="w-full p-2 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.sub}
          onChange={(e) => handleChangeFormData({ ...formData, sub: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Status</label>
        <select
          className="w-full p-2 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.status}
          onChange={(e) => handleChangeFormData({ ...formData, status: e.target.value })}
        >
          <option value="Ativo">Ativo</option>
          <option value="Inativo">Inativo</option>
        </select>
      </div>
    </>
  );
}
