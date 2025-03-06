import createMiddleware from "next-intl/middleware"
import { locales } from "../config"
import { type NextRequest, NextResponse } from "next/server"

// Create the intl middleware with pathnames that should NOT be internationalized
const intlMiddleware = createMiddleware({
    locales,
    defaultLocale: "ru",
    // This is the key: exclude paths that should not be internationalized
    localePrefix: "as-needed",
    // Add this to exclude specific paths from internationalization
    alternateLinks: false,
})

// Export the middleware function
export default function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    // Skip internationalization for image paths
    if (pathname.startsWith("/img/")) {
        return NextResponse.next()
    }

    // Use the intl middleware for all other paths
    return intlMiddleware(request)
}

// Update the matcher to exclude /img/ paths
export const config = {
    matcher: [
        // Exclude static assets and API routes
        "/((?!api|_next|favicon.ico|img).*)",
        "/(en|ukr)/:path*",
    ],
}

