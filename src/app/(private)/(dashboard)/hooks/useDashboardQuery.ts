"use client";

import { queryKeys } from "@/src/constants/query-keys.constants";
import { DashboardRequests, ParametrosDashboardRequest } from "@/src/services/api/dashboard/dashboardRequests";
import { useQuery } from "@tanstack/react-query";

export function useDashboardQuery({ key, params }: { key: string; params: ParametrosDashboardRequest }) {
  return useQuery({
    queryKey: [...queryKeys.DASHBOARD_COMPLETO, key],
    queryFn: async () => await DashboardRequests.getAll(params),
  });
}
