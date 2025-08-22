// export const config = {
//   matcher: [
//     // Protect everything EXCEPT explicitly public files
//     "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|manifest.json|icons/|sw.js).*)",
//   ],
// };

export const config = {
  matcher: [
    "/dashboard/:path*",   // only protect dashboard
  ],
};
