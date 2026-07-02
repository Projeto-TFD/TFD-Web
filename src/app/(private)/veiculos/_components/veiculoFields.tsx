"use client";

import { VeiculosType as VeiculoType } from "@/src/types/veiculos.types";

interface VeiculoFieldsProps {
  formData: Omit<VeiculoType, "id">;
  editingVehicle: boolean;
  handleChangeFormData: (data: Omit<VeiculoType, "id">) => void;
}

export default function VeiculoFields({ formData, handleChangeFormData }: VeiculoFieldsProps) {
  return (
    <>
      <div>
        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Placa</label>
        <input
          required
          className="w-full p-2 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.name}
          onChange={(e) => handleChangeFormData({ ...formData, name: e.target.value.toUpperCase() })}
        />
      </div>
      <div>
        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Modelo / Detalhes</label>
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
          <option value="Manutenção">Manutenção</option>
          <option value="Inativo">Inativo</option>
        </select>
      </div>
    </>
  );
}
