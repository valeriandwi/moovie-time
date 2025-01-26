import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pageUrl = pathname.split("/")[1];
  const viewBy = pathname.split("/")[2];

  // Redirect if there is no locale
  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/home/popular`, request.url));
  }
  // Redirect if home page is not popular or release_date params
  if (pageUrl === "home" && viewBy !== "popular" && viewBy !== "release_date") {
    return NextResponse.redirect(new URL(`/home/popular`, request.url));
  }

  return NextResponse.next();
}
