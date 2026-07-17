import { NextRequest, NextResponse } from "next/server";
import { authConstants } from "./constants/auth.constants";
import { Rotas } from "./constants/route.constants";

export default function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get(authConstants.NAME_TOKEN_IN_STORAGE)?.value;

  if (!token && path === Rotas.Login) {
    return NextResponse.next();
  }
  if (!token) {
    return NextResponse.redirect(new URL(Rotas.Login, request.url));
  }
  if (token && path === Rotas.Login) {
    return NextResponse.redirect(new URL(Rotas.Dashboard, request.url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
