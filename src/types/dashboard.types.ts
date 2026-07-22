export type DashboardMetrics = {
  totalViagens: number;
  totalPassageiros: number;
  totalMotoristasAtivos: number;
  totalVeiculos: number;
};

export type DashboardViagemType = {
  cidade: string;
  quantidadeViagens: number;
};

export type DashboardType = DashboardMetrics & {
  viagensPorDestino: DashboardViagemType[];
};
