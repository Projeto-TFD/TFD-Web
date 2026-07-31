"use client";

import { TipoVeiculo, VeiculoType } from "@/src/types/veiculos.types";
import Badge from "@/src/components/ui/Badge";

export default function VeiculoInfoView({ veiculo }: { veiculo: VeiculoType }) {
  return (
    <section className="grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium text-muted-foreground">Nome</span>

        <span className="text-sm text-slate-900">{veiculo.nome}</span>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium text-muted-foreground">Placa</span>

        <span className="text-sm text-slate-900">{veiculo.placa}</span>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium text-muted-foreground">Ano</span>

        <span className="text-sm text-slate-900">{veiculo.ano}</span>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium text-muted-foreground">Renavam</span>

        <span className="text-sm text-slate-900">{veiculo.renavam}</span>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium text-muted-foreground">Tipo</span>

        <span>
          {" "}
          <Badge variant={veiculo.tipo === TipoVeiculo.Proprio ? "success" : "warning"}>{veiculo.tipo}</Badge>
        </span>
      </div>
    </section>
  );
}
