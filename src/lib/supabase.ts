import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Create a service role client that bypasses RLS
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

// Regular client for public operations
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database Types
export interface Service {
  id: string
  title: string
  description: string
  short_description: string
  price: string
  features: string[]
  image: string
  category: string
  created_at: string
  updated_at: string
}

export interface Portfolio {
  id: string
  title: string
  description: string
  short_description: string
  image: string
  category: string
  client: string
  year: string
  technologies: string[]
  gallery: string[]
  created_at: string
  updated_at: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  order: number
  created_at: string
  updated_at: string
}

export interface AdminUser {
  id: string
  email: string
  created_at: string
}