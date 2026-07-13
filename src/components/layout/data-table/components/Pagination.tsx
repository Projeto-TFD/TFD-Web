"use client";

import { Button } from "@/components/ui/button";
import { Table } from "@tanstack/react-table";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps<TData> {
  table: Table<TData>;
  isLoading: boolean;
}

export default function Pagination<TData>({ table, isLoading }: PaginationProps<TData>) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-sm text-muted-foreground tabular-nums">
        Página {table.getState().pagination.pageIndex + 1} de {Math.max(1, table.getPageCount())}
      </span>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage() || isLoading}
        >
          <ChevronLeft className="size-4" />
          Anterior
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage() || isLoading}
        >
          Próxima
          <ChevronRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
