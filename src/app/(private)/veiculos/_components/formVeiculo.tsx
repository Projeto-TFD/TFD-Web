"use client";

import { VeiculoType } from "@/src/types/veiculos.types";
import { SubmitEvent } from "react";

interface FormVeiculoProps {
  handleSubmit: (e: SubmitEvent<HTMLFormElement>) => void;
  formData: Omit<VeiculoType, "id">;
  editingVehicle: boolean;
  handleChangeFormData: (data: Omit<VeiculoType, "id">) => void;
  handleOpenModal: (b: boolean) => void;
}

export default function FormVeiculo({
  handleSubmit,
  formData,
  handleChangeFormData,
  editingVehicle,
  handleOpenModal,
}: FormVeiculoProps) {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
      <div className="flex gap-3 pt-4">
        <button
          type="button"
          onClick={() => handleOpenModal(false)}
          className="flex-1 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="flex-1 py-2 bg-blue-700 text-white text-sm font-bold rounded-lg hover:bg-blue-800 transition-colors"
        >
          {editingVehicle ? "Salvar Alterações" : "Cadastrar"}
        </button>
      </div>
    </form>
  );
}
