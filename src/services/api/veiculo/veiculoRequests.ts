import { CreateVeiculoType, EditVeiculoType, VeiculoType } from "@/src/types/veiculos.types";
import { provider } from "../provider";

export class VeiculoRequests {
  private static BASE_ROUTE = "/veiculos";

  static async getAll(): Promise<VeiculoType[]> {
    const { data } = await provider.get(`${this.BASE_ROUTE}`);

    return data;
  }

  static async getById(id: Pick<VeiculoType, "id">): Promise<VeiculoType> {
    const { data } = await provider.get(`${this.BASE_ROUTE}/${id}`);

    return data;
  }

  static async create(dataCreate: CreateVeiculoType): Promise<VeiculoType> {
    const { data } = await provider.post(`${this.BASE_ROUTE}`, dataCreate);

    return data;
  }

  static async edit({
    id,
    dataEdit,
  }: {
    id: Pick<VeiculoType, "id">;
    dataEdit: EditVeiculoType;
  }): Promise<VeiculoType> {
    const { data } = await provider.patch(`${this.BASE_ROUTE}/${id}`, dataEdit);

    return data;
  }

  static async delete(id: Pick<VeiculoType, "id">): Promise<void> {
    const { data } = await provider.delete(`${this.BASE_ROUTE}/${id}`);

    return data;
  }
}
