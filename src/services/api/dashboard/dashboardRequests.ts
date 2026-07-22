import { VeiculoType } from "@/src/types/veiculos.types";
import { provider } from "../provider";
import { DashboardType } from "@/src/types/dashboard.types";

export type ParametrosDashboardRequest = { dataInicio?: string; dataFim?: string };

export class DashboardRequests {
  private static BASE_ROUTE = "/dashboard";

  static async getAll(params?: ParametrosDashboardRequest): Promise<DashboardType> {
    const { data } = await provider.get(`${this.BASE_ROUTE}`, { params: { ...params } });

    return data;
  }

  static async getMetrics(params?: ParametrosDashboardRequest): Promise<VeiculoType[]> {
    const { data } = await provider.get(`${this.BASE_ROUTE}`, { params: { ...params } });

    return data;
  }
}
