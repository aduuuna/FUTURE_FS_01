import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'

export async function updateSession(request) {
  // Create a response object that we can modify
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    }
  })

  // Create the Supabase client using the updated API
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON,
    {
      cookies: {
        get(name) {
          return request.cookies.get(name)?.value
        },
        set(name, value, options) {
          // Set cookie on the response
          response.cookies.set(name, value, options)
        },
        remove(name, options) {
          // Remove cookie from the response
          response.cookies.set(name, '', { ...options, maxAge: 0 })
        },
      },
    }
  )

  // Refresh the auth token
  await supabase.auth.getUser()

  return response
}