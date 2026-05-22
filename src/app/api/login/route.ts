import { NextResponse } from 'next/server';

/**
 * Validates the temporary dev-gate credentials and sets the access cookie.
 * Credentials live here on the server, so they are not shipped in the
 * client bundle.
 */
const USERNAME = 'Carter';
const PASSWORD = 'password123';
const COOKIE = 'tenet_gate';

export async function POST(req: Request) {
  let username = '';
  let password = '';
  try {
    const body = (await req.json()) as { username?: string; password?: string };
    username = body.username ?? '';
    password = body.password ?? '';
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (username === USERNAME && password === PASSWORD) {
    const res = NextResponse.json({ ok: true });
    res.cookies.set(COOKIE, 'ok', {
      httpOnly: true,
      sameSite: 'lax',
      secure: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    return res;
  }

  return NextResponse.json({ ok: false }, { status: 401 });
}
