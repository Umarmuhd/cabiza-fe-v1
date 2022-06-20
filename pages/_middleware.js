import { NextResponse } from "next/server";

/**
 * @param req
 */
export default function middleware(req) {
  // Clone the request url
  const url = req.nextUrl.clone();

  const { pathname } = req.nextUrl;
  // Get hostname (e.g. vercel.com, test.vercel.app, etc.)
  const hostname = req.headers.get("host");

  if (!hostname)
    return new Response(null, {
      status: 400,
      statusText: "No hostname found in request headers",
    });

  // If localhost, assign the host value manually
  // If prod, get the custom domain/subdomain value by removing the root URL
  // (in the case of "test.vercel.app", "vercel.app" is the root URL)
  const currentHost =
    process.env.NODE_ENV == "production"
      ? hostname?.replace(`.cabiza.net`, "") // PUT YOUR DOMAIN HERE
      : hostname?.replace(`.localhost:3000`, "");

  // Prevent security issues – users should not be able to canonically access
  // the pages/sites folder and its respective contents. This can also be done
  // via rewrites to a custom 404 page
  if (pathname.startsWith(`/_sites`)) {
    return new Response(null, { status: 404 });
  }

  if (
    !pathname.includes(".") && // exclude all files in the public folder
    !pathname.startsWith("/api") // exclude all API routes
  ) {
    if (currentHost == "app") {
      if (pathname === "/login" && req.cookies["__refresh_token"]) {
        url.pathname = "/profile";
        return NextResponse.redirect(url);
      }

      url.pathname = pathname !== "/" ? `/app${pathname}` : `/app/profile`;
      return NextResponse.rewrite(url);
    }

    if (hostname === "localhost:3000" || hostname === "cabiza.net") {
      url.pathname = `${pathname}`;
      return NextResponse.rewrite(url);
    }

    // rewrite to the current hostname under the pages/sites folder
    // the main logic component will happen in pages/sites/[site]/index.tsx
    // return NextResponse.rewrite(`/_sites/${currentHost}${pathname}`);
    return NextResponse.rewrite(
      new URL(`/_sites/${currentHost}${pathname}`, req.url)
    );
  }
}
