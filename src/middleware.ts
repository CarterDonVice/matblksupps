import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * TEMPORARY development access gate.
 * Redirects any unauthenticated request to /login until a valid
 * `tenet_gate` cookie is present. Remove this file (and the /login
 * page + /api/login route) to take the gate down.
 */
const COOKIE = 'tenet_gate';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Always allow the login page and its credential endpoint through.
  if (pathname === '/login' || pathname.startsWith('/api/login')) {
    return NextResponse.next();
  }

  const authed = req.cookies.get(COOKIE)?.value === 'ok';
  if (authed) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = '/login';
  url.search = pathname && pathname !== '/' ? `?from=${encodeURIComponent(pathname)}` : '';
  return NextResponse.redirect(url);
}

export const config = {
  // Run on every route except Next internals and public static assets,
  // so the login screen can still load its styling, fonts, and images.
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images/).*)'],
};
