import { NextRequest } from 'next/server'
import { cookies } from 'next/headers'
import { SignJWT, jwtVerify } from 'jose'

const secretKey = process.env.JWT_SECRET || 'your-secret-key'
const key = new TextEncoder().encode(secretKey)

export interface AdminSession {
  id: string
  email: string
  isAdmin: boolean
  [key: string]: unknown
}

export async function encrypt(payload: AdminSession) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(key)
}

export async function decrypt(input: string): Promise<AdminSession | null> {
  try {
    const { payload } = await jwtVerify(input, key, {
      algorithms: ['HS256'],
    })
    return payload as AdminSession
  } catch (error) {
    return null
  }
}

export async function getSession(): Promise<AdminSession | null> {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin-session')?.value
  if (!session) return null
  return await decrypt(session)
}

export async function verifyAdmin(request: NextRequest): Promise<AdminSession | null> {
  const token = request.cookies.get('admin-session')?.value
  if (!token) return null
  return await decrypt(token)
}

export function isValidAdmin(email: string, password: string): boolean {
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@ayungproject.com'
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123'
  
  return email === adminEmail && password === adminPassword
}