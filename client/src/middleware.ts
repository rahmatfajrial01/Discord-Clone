import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {

    const token = request.cookies.get("user")?.value || ''
    const isLogin = token

    if (request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/register") {
        if (isLogin) {
            return NextResponse.redirect(new URL("/", request.url))
        }
    }

    if (request.nextUrl.pathname === "/admin" || request.nextUrl.pathname === "/") {
        if (!isLogin) {
            return NextResponse.redirect(new URL("/login", request.url))
        }
    }
}