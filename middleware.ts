import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { auth } from "./auth"

const PUBLIC_ROUTES = ["/welcome", "/login", "/api/auth/.*"] as const

const IGNORED_ROUTES = ["/_next", "/favicon", "/assets", "/images", ".*\\.(svg|jpg|png|gif|ico|css|js)$"] as const

const isPublicRoute = (pathname: string) =>
  PUBLIC_ROUTES.some((route) => pathname === route || new RegExp(`^${route}$`).test(pathname))

const shouldIgnoreRoute = (pathname: string) =>
  IGNORED_ROUTES.some((route) => pathname.startsWith(route) || new RegExp(`^${route}$`).test(pathname))

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (shouldIgnoreRoute(pathname)) {
    return NextResponse.next()
  }

  const session = await auth()

  if (isPublicRoute(pathname)) {
    return session ? NextResponse.redirect(new URL("/", req.url)) : NextResponse.next()
  }

  if (!session) {
    return NextResponse.redirect(new URL("/welcome", req.url))
  }

  return NextResponse.next()
}
