import { provider, providerPubic } from "../provider";
import { LoginRequest, LoginResponse, UserType } from "@/src/types/auth.types";

export class AuthRequests {
  private static BASE_ROUTE = "/auth";

  static async login(dataLogin: LoginRequest): Promise<LoginResponse> {
    const { data } = await providerPubic.post(`${this.BASE_ROUTE}/admin/login`, dataLogin);

    return data;
  }

  static async me(): Promise<UserType> {
    const { data } = await provider.get(`${this.BASE_ROUTE}/me`);

    return data;
  }
}
