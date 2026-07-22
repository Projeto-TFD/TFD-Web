"use client";

import { ReactNode, useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

interface MonthPickerProps {
  value: Date;
  onChange: (date: Date) => void;
  trigger?: ReactNode;
  classNameCalendarItemSelected?: string;
}

export function MonthPicker({
  value,
  onChange,
  trigger,
  classNameCalendarItemSelected = "bg-slate-600 hover:bg-slate-700",
}: MonthPickerProps) {
  const [open, setOpen] = useState(false);
  const [year, setYear] = useState(value.getFullYear());

  function handleSelectMonth(month: number) {
    onChange(new Date(year, month, 1));
    setOpen(false);
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        {trigger ?? (
          <Button
            title="Selecionar período"
            className="cursor-pointer justify-between p-5 bg-blue-600 hover:bg-blue-700 text-white text-md"
          >
            <div className="flex items-center gap-2">
              <CalendarIcon className="size-4" />
              {format(value, "MMMM 'de' yyyy", {
                locale: ptBR,
              })}
            </div>
          </Button>
        )}
      </PopoverTrigger>

      <PopoverContent className="w-72 p-4">
        <div className="flex items-center justify-between mb-4">
          <Button size="icon" variant="ghost" onClick={() => setYear((y) => y - 1)}>
            <ChevronLeft className="size-4" />
          </Button>

          <span className="font-semibold text-lg">{year}</span>

          <Button size="icon" variant="ghost" onClick={() => setYear((y) => y + 1)}>
            <ChevronRight className="size-4" />
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {months.map((month, index) => {
            const selected = value.getFullYear() === year && value.getMonth() === index;

            return (
              <Button
                key={month}
                className={`cursor-pointer ${selected ? classNameCalendarItemSelected : ""}`}
                variant={selected ? "default" : "ghost"}
                onClick={() => handleSelectMonth(index)}
              >
                {month}
              </Button>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}
