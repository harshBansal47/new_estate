import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Redirect only if trying to access '/create-listing'
  if (pathname.startsWith('/create-listing')) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  return NextResponse.next();
}

// Applying middleware only to '/create-listing' path
export const config = {
  matcher: '/create-listing',
};