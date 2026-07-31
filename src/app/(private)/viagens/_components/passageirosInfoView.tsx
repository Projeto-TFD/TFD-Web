"use client";

import { TipoParticipacao, ViagemPessoaType } from "@/src/types/viagem.types";
import Badge from "@/src/components/ui/Badge";
import EmptyCustom from "@/src/components/ui/Empty";

export default function PassageirosInfoView({ pessoas }: { pessoas: ViagemPessoaType[] }) {
  if (!pessoas.length) {
    return (
      <EmptyCustom
        size="sm"
        title="Nenhum passageiro vinculado"
        description="Essa viagem não possui passageiros registrados"
      />
    );
  }

  return (
    <div className="flex flex-col gap-4 max-h-90 overflow-y-auto">
      {pessoas.map((viagemPessoa) => (
        <div
          key={viagemPessoa.id}
          className="flex items-center justify-between rounded-lg border bg-muted/30 p-3"
        >
          <div className="flex flex-col">
            <span className="text-base font-semibold text-slate-900">{viagemPessoa.pessoa.nome}</span>

            <div className="mt-1 flex gap-4 text-sm text-slate-500">
              {viagemPessoa.pessoa.cpf && <span>CPF: {viagemPessoa.pessoa.cpf}</span>}

              {viagemPessoa.observacao && <span>Obs: {viagemPessoa.observacao}</span>}
            </div>
          </div>

          <Badge variant={viagemPessoa.tipoParticipacao === TipoParticipacao.Paciente ? "info" : "default"}>
            {viagemPessoa.tipoParticipacao === TipoParticipacao.Paciente ? "Paciente" : "Acompanhante"}
          </Badge>
        </div>
      ))}
    </div>
  );
}
