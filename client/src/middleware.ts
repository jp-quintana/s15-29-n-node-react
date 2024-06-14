import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const protectedRoutes = [
      '/payment',
      '/dashboard',
      '/publish',
      '/dashboard/profile',
      '/dashboard/profile/edit',
      '/dashboard/profile/account-settings',
      '/dashboard/profile/notifications',
      '/dashboard/profile/privacy',
    ];
    const authRoutes = ['/login', '/register'];

    const { nextUrl } = req;
    const { pathname } = nextUrl;

    const isLoggedIn = !!req.nextauth.token;
    const isAuthRoute = authRoutes.includes(pathname);
    const isProtectedRoute = protectedRoutes.includes(pathname);

    if (isAuthRoute && isLoggedIn)
      return NextResponse.redirect(new URL('/', req.url));

    if (isProtectedRoute && !isLoggedIn)
      return NextResponse.redirect(new URL('/login', req.url));

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized() {
        return true;
      },
    },
  }
);

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
