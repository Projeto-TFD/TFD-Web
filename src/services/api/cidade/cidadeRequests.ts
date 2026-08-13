import { CidadeType } from "@/src/types/cidade.types";
import { provider } from "../provider";

export class CidadeRequests {
  private static BASE_ROUTE = "/cidades";

  static async getAll(): Promise<CidadeType[]> {
    const { data } = await provider.get(`${this.BASE_ROUTE}`);

    return data;
  }
}
