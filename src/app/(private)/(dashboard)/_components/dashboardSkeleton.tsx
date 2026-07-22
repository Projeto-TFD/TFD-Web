import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-3 w-24" />
          </div>
        ))}
      </div>

      {/* Gráfico/lista */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
          <Skeleton className="h-4 w-48" />

          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="space-y-3">
              <div className="flex justify-between">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-3 w-10" />
              </div>

              <Skeleton className="h-3 w-full rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
