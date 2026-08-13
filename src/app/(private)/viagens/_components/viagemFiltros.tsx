"use client";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { MotoristaType } from "@/src/types/motorista.types";
import { VeiculoType } from "@/src/types/veiculos.types";
import { PassageiroType } from "@/src/types/passageiros.types";
import { CidadeType } from "@/src/types/cidade.types";
import { ViagensFiltrosState } from "../hooks/useViagens";

interface ViagemFiltrosProps {
  filtros: ViagensFiltrosState;
  onFiltroChange: (campo: keyof ViagensFiltrosState, valor: number | string | undefined) => void;
  onLimparFiltros: () => void;
  motoristas: MotoristaType[];
  veiculos: VeiculoType[];
  passageiros: PassageiroType[];
  cidades: CidadeType[];
}

export default function ViagemFiltros({
  filtros,
  onFiltroChange,
  onLimparFiltros,
  motoristas,
  veiculos,
  passageiros,
  cidades,
}: ViagemFiltrosProps) {
  const temFiltroAtivo = Object.values(filtros).some((valor) => valor !== undefined && valor !== "");

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        <Select
          value={filtros.motoristaId ? String(filtros.motoristaId) : "all"}
          onValueChange={(value) => onFiltroChange("motoristaId", value === "all" ? undefined : Number(value))}
        >
          <SelectTrigger className="w-full bg-background py-5" aria-label="Filtrar por motorista">
            <SelectValue placeholder="Motorista" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">Todos os motoristas</SelectItem>

            {motoristas.map((motorista) => (
              <SelectItem key={motorista.id} value={String(motorista.id)}>
                {motorista.nome}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={filtros.passageiroId ? String(filtros.passageiroId) : "all"}
          onValueChange={(value) => onFiltroChange("passageiroId", value === "all" ? undefined : Number(value))}
        >
          <SelectTrigger className="w-full bg-background py-5" aria-label="Filtrar por passageiro">
            <SelectValue placeholder="Passageiro" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">Todos os passageiros</SelectItem>

            {passageiros.map((passageiro) => (
              <SelectItem key={passageiro.id} value={String(passageiro.id)}>
                {passageiro.nome}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={filtros.veiculoId ? String(filtros.veiculoId) : "all"}
          onValueChange={(value) => onFiltroChange("veiculoId", value === "all" ? undefined : Number(value))}
        >
          <SelectTrigger className="w-full bg-background py-5" aria-label="Filtrar por veículo">
            <SelectValue placeholder="Veículo" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">Todos os veículos</SelectItem>

            {veiculos.map((veiculo) => (
              <SelectItem key={veiculo.id} value={String(veiculo.id)}>
                {veiculo.nome} - {veiculo.placa}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={filtros.cidadeDestinoId ? String(filtros.cidadeDestinoId) : "all"}
          onValueChange={(value) => onFiltroChange("cidadeDestinoId", value === "all" ? undefined : Number(value))}
        >
          <SelectTrigger className="w-full bg-background py-5" aria-label="Filtrar por cidade de destino">
            <SelectValue placeholder="Cidade de destino" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">Todas as cidades destino</SelectItem>

            {cidades.map((cidade) => (
              <SelectItem key={cidade.id} value={String(cidade.id)}>
                {cidade.nome}/{cidade.uf}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <Input
          type="datetime-local"
          value={filtros.dataInicio ?? ""}
          max={filtros.dataFim ?? ""}
          onChange={(e) => onFiltroChange("dataInicio", e.target.value || undefined)}
          className="bg-background py-5 sm:w-56"
          aria-label="Data de início"
        />

        <Input
          type="datetime-local"
          min={filtros.dataInicio ?? ""}
          value={filtros.dataFim ?? ""}
          onChange={(e) => onFiltroChange("dataFim", e.target.value || undefined)}
          className="bg-background py-5 sm:w-56"
          aria-label="Data de fim"
        />

        {temFiltroAtivo ? (
          <Button
            variant="outline"
            className="cursor-pointer py-5 bg-blue-600 text-white hover:bg-blue-500 hover:text-white"
            onClick={onLimparFiltros}
            title="Limpar filtros"
            type="button"
          >
            <X className="size-4" /> Limpar filtros
          </Button>
        ) : null}
      </div>
    </div>
  );
}
