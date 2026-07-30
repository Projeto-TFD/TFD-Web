import {
  CreateUsuarioType,
  EditUsuarioType,
  PasswordType,
  UsuarioIdType,
  UsuarioType,
} from "@/src/types/usuario.types";
import { provider } from "../provider";

export class UsuarioRequests {
  private static BASE_ROUTE = "/usuarios";

  static async getAll(): Promise<UsuarioType[]> {
    const { data } = await provider.get(`${this.BASE_ROUTE}`);

    return data;
  }

  static async getById(id: UsuarioIdType): Promise<UsuarioType> {
    const { data } = await provider.get(`${this.BASE_ROUTE}/${id}`);

    return data;
  }

  static async create(dataCreate: CreateUsuarioType): Promise<UsuarioType> {
    const { data } = await provider.post(`${this.BASE_ROUTE}`, dataCreate);

    return data;
  }

  static async edit({ id, dataEdit }: { id: UsuarioIdType; dataEdit: EditUsuarioType }): Promise<UsuarioType> {
    const { data } = await provider.patch(`${this.BASE_ROUTE}/${id}`, dataEdit);

    return data;
  }

  static async editPassword({ id, dataEdit }: { id: UsuarioIdType; dataEdit: PasswordType }): Promise<UsuarioType> {
    const { data } = await provider.patch(`${this.BASE_ROUTE}/${id}/senha`, dataEdit);

    return data;
  }

  static async delete(id: UsuarioIdType): Promise<void> {
    const { data } = await provider.delete(`${this.BASE_ROUTE}/${id}`);

    return data;
  }
}
