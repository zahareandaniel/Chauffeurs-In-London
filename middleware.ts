import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const APEX_HOST = 'chauffeursinlondon.co.uk';
const CANONICAL_HOST = 'www.chauffeursinlondon.co.uk';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')?.split(':')[0]?.toLowerCase();
  if (host === APEX_HOST) {
    const url = request.nextUrl.clone();
    url.hostname = CANONICAL_HOST;
    url.protocol = 'https:';
    url.port = '';
    return NextResponse.redirect(url, 308);
  }

  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/admin')) {
    const adminCookie = request.cookies.get('admin_auth');
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminCookie || adminCookie.value !== adminPassword) {
      // Allow access to the login page itself
      if (pathname === '/admin/login') {
        return NextResponse.next();
      }
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Run on all paths except Next internals and static assets so apex→www applies
     * to /, /sitemap.xml, and the rest of the site (not only /admin).
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
};
