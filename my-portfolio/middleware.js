import { updateSession } from './app/utils/supabase/middleware.js'

export async function middleware(request) {
  return await updateSession(request)
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|api/|_vercel|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}