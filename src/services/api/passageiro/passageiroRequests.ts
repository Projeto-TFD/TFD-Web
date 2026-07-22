import { provider } from "../provider";
import {
  CreatePassageiroType,
  EditPassageiroType,
  PassageiroIdType,
  PassageiroType,
} from "@/src/types/passageiros.types";

export class PassageiroRequests {
  private static BASE_ROUTE = "/pessoas";

  static async getAll(): Promise<PassageiroType[]> {
    const { data } = await provider.get(`${this.BASE_ROUTE}`);

    return data;
  }

  static async getById(id: PassageiroIdType): Promise<PassageiroType> {
    const { data } = await provider.get(`${this.BASE_ROUTE}/${id}`);

    return data;
  }

  //   static async getHistoricInTravels(id: PassageiroIdType): Promise<PassageiroType> {
  //     const { data } = await provider.get(`${this.BASE_ROUTE}/${id}/historico`);

  //     return data;
  //   }

  static async create(dataCreate: CreatePassageiroType): Promise<PassageiroType> {
    const { data } = await provider.post(`${this.BASE_ROUTE}`, dataCreate);

    return data;
  }

  static async edit({ id, dataEdit }: { id: PassageiroIdType; dataEdit: EditPassageiroType }): Promise<PassageiroType> {
    const { data } = await provider.patch(`${this.BASE_ROUTE}/${id}`, dataEdit);

    return data;
  }

  static async delete(id: PassageiroIdType): Promise<void> {
    const { data } = await provider.delete(`${this.BASE_ROUTE}/${id}`);

    return data;
  }
}
