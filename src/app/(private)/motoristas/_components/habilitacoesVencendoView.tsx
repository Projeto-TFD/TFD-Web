"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useMemo, useState } from "react";
import { useHabilitacoesVencendoQuery } from "../hooks/useHabilitacoesVencendoQuery";
import EmptyCustom from "@/src/components/ui/Empty";
import { differenceInCalendarDays } from "date-fns";
import Loading from "@/src/components/ui/LoadingCircle";

const DIAS_MES_BASE = 30;

export default function HabilitacoesVencendoView() {
  const [meses, setMeses] = useState("1");

  const params = useMemo(
    () => ({
      dias: Number(meses) * DIAS_MES_BASE,
    }),
    [meses],
  );

  const { isLoading, isSuccess, data } = useHabilitacoesVencendoQuery({
    key: meses,
    params,
  });

  const renderContent = () => {
    if (isLoading) {
      return <Loading />;
    }

    if (!isSuccess) {
      return <EmptyCustom isError size="sm" />;
    }

    if (!data.length) {
      return (
        <EmptyCustom
          size="sm"
          title="Nenhuma habilitação vencendo nesse periodo"
          description="Tente ajustar o período filtrado"
        />
      );
    }

    return data.map((m) => {
      const diasRestantes = differenceInCalendarDays(new Date(m.validadeHabilitacao), new Date());

      return (
        <div
          key={m.id}
          className="flex items-center justify-between rounded-lg border border-orange-200 bg-orange-50 p-3"
        >
          <div className="flex flex-col">
            <span className="text-base font-semibold text-slate-900">{m.nome}</span>

            <div className="mt-1 flex gap-4 text-sm text-slate-500">
              <span>CPF: {m.cpf}</span>
              <span>RENACH: {m.renach}</span>
            </div>
          </div>

          <div className="text-right">
            <p className="text-sm font-medium text-orange-600">Vence em</p>

            <p className="text-2xl font-bold text-orange-700">{diasRestantes} dias</p>
          </div>
        </div>
      );
    });
  };

  return (
    <section className="flex flex-col gap-5">
      <Select value={meses} onValueChange={setMeses}>
        <SelectTrigger className=" bg-muted/40 py-5">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          {Array.from({ length: 12 }, (_, i) => {
            const mes = i + 1;

            return (
              <SelectItem key={mes} value={String(mes)}>
                {mes} {mes === 1 ? "mês" : "meses"}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>

      <div className="cursor-all-scroll flex flex-col gap-4 min-h-30 max-h-90 overflow-y-auto">{renderContent()}</div>
    </section>
  );
}
