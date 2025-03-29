import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
    console.log("Middleware applied to:", req.nextUrl.pathname);

    // Get session token from NextAuth
    const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    console.log("Session:", session);

    if (req.nextUrl.pathname.startsWith('/user') && !session) {
        return NextResponse.redirect(new URL('/signin', req.url));
    }

    return NextResponse.next();
}

// Apply middleware to all /user/* routes
export const config = {
    matcher: ['/user/:path*'],
};
