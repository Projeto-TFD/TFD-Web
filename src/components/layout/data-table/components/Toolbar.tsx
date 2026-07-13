"use client";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table } from "@tanstack/react-table";
import { Search } from "lucide-react";
import { Dispatch } from "react";

type StatusOption = { label: string; value: string };

export type StatusFilter = {
  column: string;
  options: StatusOption[];
  placeholder?: string;
};

interface ToolbarProps<TData> {
  table: Table<TData>;
  searchColumn?: string;
  setGlobalFilter: Dispatch<React.SetStateAction<string>>;
  globalFilter: string;
  searchPlaceholder?: string;
  statusFilter?: StatusFilter;
}

export default function Toolbar<TData>({
  table,
  globalFilter,
  setGlobalFilter,
  statusFilter,
  searchColumn,
  searchPlaceholder = "Pesquisar...",
}: ToolbarProps<TData>) {
  const searchValue = searchColumn ? ((table.getColumn(searchColumn)?.getFilterValue() as string) ?? "") : globalFilter;

  const onSearchChange = (value: string) => {
    if (searchColumn) {
      table.getColumn(searchColumn)?.setFilterValue(value);
    } else {
      setGlobalFilter(value);
    }
  };

  const statusValue = statusFilter
    ? ((table.getColumn(statusFilter.column)?.getFilterValue() as string) ?? "all")
    : "all";
  const onStatusChange = (value: string) => {
    if (!statusFilter) return;
    table.getColumn(statusFilter.column)?.setFilterValue(value === "all" ? undefined : value);
  };

  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={searchPlaceholder}
          className="pl-8 bg-background py-5 disabled:bg-background/80"
          aria-label="Pesquisar"
        />
      </div>
      {statusFilter ? (
        <Select value={statusValue} onValueChange={onStatusChange}>
          <SelectTrigger className="sm:w-40 bg-background py-5" aria-label="Filtrar por status">
            <SelectValue placeholder={statusFilter.placeholder ?? "Filtrar por status"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            {statusFilter.options.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : null}
    </div>
  );
}
