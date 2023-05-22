import { NextResponse } from "next/server";

export function middleware(request) {
  if (
    !request.nextUrl.pathname.startsWith("/_next/static/") &&
    !request.nextUrl.pathname.startsWith("/api/")
  ) {
    return NextResponse.rewrite(new URL("/forbidden", request.url), { status: 403 });
  }
}
