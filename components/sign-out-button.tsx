'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'
import { Button } from '@/components/ui/button'
import type { Locale } from '@/lib/locale'

export function SignOutButton({ locale }: { locale: Locale }) {
  const [pending, setPending] = useState(false)
  const router = useRouter()
  const zh = locale === 'zh-CN'
  async function signOut() {
    setPending(true)
    await authClient.signOut()
    router.push('/')
    router.refresh()
  }
  return <Button type="button" variant="outline" onClick={signOut} disabled={pending}>{pending ? (zh ? '退出中…' : 'Signing out…') : (zh ? '退出登录' : 'Sign out')}</Button>
}
