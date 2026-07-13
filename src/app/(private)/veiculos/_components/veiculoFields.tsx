"use client";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
        <Input
          required
          className="bg-muted/40 py-5 px-2 focus-visible:ring-2 focus-visible:ring-blue-500"
          value={formData.name}
          onChange={(e) => handleChangeFormData({ ...formData, name: e.target.value.toUpperCase() })}
        />
      </div>
      <div>
        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Modelo / Detalhes</label>
        <Input
          required
          className="bg-muted/40 py-5 px-2 focus-visible:ring-2 focus-visible:ring-blue-500"
          value={formData.sub}
          onChange={(e) => handleChangeFormData({ ...formData, sub: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Status</label>
        <Select
          value={formData.status}
          onValueChange={(tp: string) => handleChangeFormData({ ...formData, status: tp })}
        >
          <SelectTrigger className="w-full bg-muted/20 py-5" aria-label="Status do Veiculo">
            <SelectValue placeholder={"Ativo"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={"Ativo"}>Ativo</SelectItem>
            <SelectItem value={"Inativo"}>Inativo</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
}
