import { betterAuth } from 'better-auth'
import { pool } from '@/lib/db'

const toOrigin = (value?: string) => {
  if (!value) return undefined
  try { return new URL(value.startsWith('http') ? value : `https://${value}`).origin } catch { return undefined }
}
const baseURL = process.env.BETTER_AUTH_URL ?? toOrigin(process.env.VERCEL_PROJECT_PRODUCTION_URL) ?? toOrigin(process.env.VERCEL_URL) ?? process.env.V0_RUNTIME_URL
const developmentOrigins = ['http://localhost:3000', process.env.V0_RUNTIME_URL, process.env.V0_DEV_APP_URL, process.env.V0_BUILD_URL, process.env.V0_SANDBOX_URL]
const productionOrigins = [toOrigin(process.env.VERCEL_URL), toOrigin(process.env.VERCEL_PROJECT_PRODUCTION_URL)]

export const auth = betterAuth({
  database: pool,
  baseURL,
  trustedOrigins: (process.env.NODE_ENV === 'development' ? developmentOrigins : productionOrigins).filter(Boolean) as string[],
  emailAndPassword: { enabled: true },
  ...(process.env.NODE_ENV === 'development' ? { advanced: { defaultCookieAttributes: { sameSite: 'none' as const, secure: true } } } : {}),
})
