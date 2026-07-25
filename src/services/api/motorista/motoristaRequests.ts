import { CreateMotoristaType, EditMotoristaType, MotoristaIdType, MotoristaType } from "@/src/types/motorista.types";
import { provider } from "../provider";

export type ParametrosHabilitacoesVencendoRequest = {
  dias: number;
};

export class MotoristaRequests {
  private static BASE_ROUTE = "/motoristas";
  private static MIN_DIAS_HABILITACAO_VENCENDO = 30;

  static async getAll(): Promise<MotoristaType[]> {
    const { data } = await provider.get(`${this.BASE_ROUTE}`);

    return data;
  }

  static async getById(id: MotoristaIdType): Promise<MotoristaType> {
    const { data } = await provider.get(`${this.BASE_ROUTE}/${id}`);

    return data;
  }

  static async getHabilitacoesVencendo({
    dias = this.MIN_DIAS_HABILITACAO_VENCENDO,
  }: ParametrosHabilitacoesVencendoRequest): Promise<MotoristaType[]> {
    const { data } = await provider.get(`${this.BASE_ROUTE}/alertas/habilitacoes-vencendo`, {
      params: { dias },
    });

    return data;
  }

  static async create(dataCreate: CreateMotoristaType): Promise<MotoristaType> {
    const { data } = await provider.post(`${this.BASE_ROUTE}`, dataCreate);

    return data;
  }

  static async edit({ id, dataEdit }: { id: MotoristaIdType; dataEdit: EditMotoristaType }): Promise<MotoristaType> {
    const { data } = await provider.patch(`${this.BASE_ROUTE}/${id}`, dataEdit);

    return data;
  }

  static async delete(id: MotoristaIdType): Promise<void> {
    const { data } = await provider.delete(`${this.BASE_ROUTE}/${id}`);

    return data;
  }
}
