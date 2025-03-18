import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // First convert the pathname to lowercase
  const lowercasePathname = pathname.toLowerCase()
  
  // If the original pathname had uppercase letters, rewrite to lowercase
  if (pathname !== lowercasePathname) {
    return NextResponse.rewrite(new URL(lowercasePathname, request.url))
  }

  // Check if the URL matches our location-based pattern
  if (pathname.match(/^\/services\/([^/]+)\/in\/(chennai|tamil-nadu|india)/)) {
    // Extract the service name from the URL
    const service = pathname.split('/')[2]
    
    // Redirect to the main service page while preserving query parameters
    const redirectUrl = new URL(`/services/${service}`, request.url)
    
    // Add a query parameter to indicate the location (optional, for analytics)
    const location = pathname.split('/').pop()
    if (location) {
      redirectUrl.searchParams.set('location', location)
    }
    
    return NextResponse.redirect(redirectUrl)
  }

  // Handle /services/in/{location} redirects
  if (pathname.match(/^\/services\/in\/(chennai|tamil-nadu|india)/)) {
    // Redirect to main services page while preserving query parameters
    const redirectUrl = new URL('/services', request.url)
    
    // Add location as query parameter (optional, for analytics)
    const location = pathname.split('/').pop()
    if (location) {
      redirectUrl.searchParams.set('location', location)
    }
    
    return NextResponse.redirect(redirectUrl)
  }

  return NextResponse.next()
}

// Configure the middleware to run on all paths
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    '/services/:path*/in/:location*',
    '/services/in/:location*'
  ]
} 