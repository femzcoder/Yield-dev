import type { NextRequest } from "next/server";
import { auth0 } from "./lib/auth0";

export async function middleware(request: NextRequest) {
  return await auth0.middleware(request);
}

export const config = {
  matcher: [
    // Protect everything EXCEPT explicitly public files
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|manifest.json|icons/|sw.js).*)",
  ],
};

