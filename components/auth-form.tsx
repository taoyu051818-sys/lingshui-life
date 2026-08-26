'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function AuthForm({ mode }: { mode: 'sign-in' | 'sign-up' }) {
  const router = useRouter(); const [error,setError]=useState(''); const [pending,setPending]=useState(false)
  async function submit(e: React.FormEvent<HTMLFormElement>) { e.preventDefault(); setPending(true); setError(''); const data=new FormData(e.currentTarget); const email=String(data.get('email')); const password=String(data.get('password')); const name=String(data.get('name')||'新用户'); const result=mode==='sign-in'?await authClient.signIn.email({email,password}):await authClient.signUp.email({email,password,name}); if(result.error){setError('操作失败，请检查信息后重试。');setPending(false);return} router.push('/account');router.refresh() }
  return <form onSubmit={submit} className="flex flex-col gap-5">{mode==='sign-up'&&<div className="flex flex-col gap-2"><Label htmlFor="name">姓名</Label><Input id="name" name="name" required /></div>}<div className="flex flex-col gap-2"><Label htmlFor="email">邮箱</Label><Input id="email" name="email" type="email" autoComplete="email" required /></div><div className="flex flex-col gap-2"><Label htmlFor="password">密码</Label><Input id="password" name="password" type="password" minLength={8} autoComplete={mode==='sign-in'?'current-password':'new-password'} required /></div>{error&&<p role="alert" className="text-sm text-destructive">{error}</p>}<Button disabled={pending}>{pending?'请稍候…':mode==='sign-in'?'登录':'创建账号'}</Button><p className="text-center text-sm text-muted-foreground">{mode==='sign-in'?'还没有账号？':'已有账号？'} <Link className="font-medium text-primary" href={mode==='sign-in'?'/sign-up':'/sign-in'}>{mode==='sign-in'?'立即注册':'返回登录'}</Link></p></form>
}
