"use client";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
} from "@tanstack/react-table";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ReactNode, useState } from "react";
import Toolbar, { StatusFilter } from "./components/Toolbar";
import Pagination from "./components/Pagination";
import EmptyCustom from "../../ui/Empty";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isLoading?: boolean;
  searchPlaceholder?: string;
  searchColumn?: string;
  statusFilter?: StatusFilter;
  emptyComponent?: ReactNode;
  pageSize?: number;
}

export default function DataTable<TData, TValue>({
  columns,
  data,
  isLoading = false,
  searchPlaceholder,
  searchColumn,
  statusFilter,
  emptyComponent = <EmptyCustom />,
  pageSize = 10,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data,
    columns,
    state: { sorting, columnFilters, globalFilter },
    initialState: { pagination: { pageSize } },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const columnCount = table.getVisibleLeafColumns().length;

  return (
    <div className="flex flex-col gap-4">
      <Toolbar
        table={table}
        searchColumn={searchColumn}
        statusFilter={statusFilter}
        searchPlaceholder={searchPlaceholder}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />

      <div className="rounded-md border bg-card">
        <Table>
          <TableHeader className="bg-muted/70 border-b">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="font-semibold py-3">
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isLoading ? (
              Array.from({ length: Math.min(pageSize, 5) }).map((_, i) => (
                <TableRow key={`skeleton-${i}`}>
                  {Array.from({ length: columnCount }).map((__, j) => (
                    <TableCell key={j} className="py-3">
                      <Skeleton className="h-4 w-full" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row, index) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() ? "selected" : undefined}
                  className={`${index % 2 === 0 ? "bg-background hover:bg-muted/50" : "bg-sky-50 hover:bg-sky-100"} text-slate-900`}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columnCount} className="min-h-30 text-center text-sm text-muted-foreground">
                  {emptyComponent}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <Pagination table={table} isLoading={isLoading} />
    </div>
  );
}
