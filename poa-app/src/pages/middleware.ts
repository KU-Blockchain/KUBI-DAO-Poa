import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Function to extract subdomain from the host
function getSubdomain(host: string): string | null {
  const parts = host.split('.');
  if (parts.length > 2) {
    return parts[0]; // Return the subdomain (e.g., 'create')
  }
  return null;
}

// Middleware to rewrite URLs based on subdomain
export function middleware(req: NextRequest) {
  const host = req.headers.get('host');
  const subdomain = host ? getSubdomain(host) : null;

  if (subdomain) {
    // Clone the request URL and rewrite it based on the subdomain
    const newUrl = req.nextUrl.clone();
    newUrl.pathname = `/${subdomain}${req.nextUrl.pathname}`; // Rewrite based on subdomain
    return NextResponse.rewrite(newUrl); // Rewrite to new URL
  }

  return NextResponse.next(); // Continue without rewriting if no subdomain
}

// Apply middleware to all requests
export const config = {
  matcher: '/:path*', // Apply to all paths
};