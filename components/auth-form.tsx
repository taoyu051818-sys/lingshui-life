'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { Locale } from '@/lib/locale'

export function AuthForm({ mode, locale }: { mode: 'sign-in' | 'sign-up'; locale: Locale }) {
  const zh = locale === 'zh-CN'
  const router = useRouter()
  const [error, setError] = useState('')
  const [pending, setPending] = useState(false)
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setPending(true); setError('')
    const data = new FormData(e.currentTarget)
    const email = String(data.get('email')); const password = String(data.get('password')); const name = String(data.get('name') || 'New user')
    const result = mode === 'sign-in' ? await authClient.signIn.email({ email, password }) : await authClient.signUp.email({ email, password, name })
    if (result.error) { setError(zh ? '操作失败，请检查输入后重试。' : 'Something went wrong. Check your details and try again.'); setPending(false); return }
    router.push('/account'); router.refresh()
  }
  return <form onSubmit={submit} className="flex flex-col gap-5">{mode === 'sign-up' && <div className="flex flex-col gap-2"><Label htmlFor="name">{zh ? '姓名' : 'Name'}</Label><Input id="name" name="name" autoComplete="name" required /></div>}<div className="flex flex-col gap-2"><Label htmlFor="email">{zh ? '邮箱' : 'Email'}</Label><Input id="email" name="email" type="email" autoComplete="email" required /></div><div className="flex flex-col gap-2"><Label htmlFor="password">{zh ? '密码' : 'Password'}</Label><Input id="password" name="password" type="password" minLength={8} autoComplete={mode === 'sign-in' ? 'current-password' : 'new-password'} required /></div>{error && <p role="alert" className="text-sm text-destructive">{error}</p>}<Button disabled={pending}>{pending ? (zh ? '请稍候…' : 'Please wait…') : mode === 'sign-in' ? (zh ? '登录' : 'Sign in') : (zh ? '创建账户' : 'Create account')}</Button><p className="text-center text-sm text-muted-foreground">{mode === 'sign-in' ? (zh ? '还没有账户？' : "Don't have an account?") : (zh ? '已有账户？' : 'Already have an account?')} <Link className="font-medium text-primary" href={mode === 'sign-in' ? '/sign-up' : '/sign-in'}>{mode === 'sign-in' ? (zh ? '立即创建' : 'Create one') : (zh ? '返回登录' : 'Back to sign in')}</Link></p></form>
}
