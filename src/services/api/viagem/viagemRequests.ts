import { ViagemIdType, ViagemType } from "@/src/types/viagem.types";
import { provider } from "../provider";

export class ViagemRequests {
  private static BASE_ROUTE = "/viagens";

  static async getAll(): Promise<ViagemType[]> {
    const { data } = await provider.get(`${this.BASE_ROUTE}`);

    return data;
  }

  static async getById(id: ViagemIdType): Promise<ViagemType> {
    const { data } = await provider.get(`${this.BASE_ROUTE}/${id}`);

    return data;
  }
}
