import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { AuthForm } from '@/components/auth-form'
import { auth } from '@/lib/auth'
import { getLocale } from '@/lib/locale'

export default async function SignIn(){const [session,locale]=await Promise.all([auth.api.getSession({headers:await headers()}),getLocale()]);if(session?.user)redirect('/account');const zh=locale==='zh-CN';return <main className="flex min-h-screen items-center justify-center bg-secondary px-4"><section className="w-full max-w-md rounded-2xl border bg-card p-8 shadow-sm"><p className="text-sm font-semibold text-primary">Lingshui Expats</p><h1 className="mt-2 font-serif text-3xl font-semibold">{zh?'欢迎回来':'Welcome back'}</h1><p className="mb-8 mt-2 text-muted-foreground">{zh?'登录后查看服务需求并跟踪进度。':'Sign in to view your service requests and track their progress.'}</p><AuthForm mode="sign-in" locale={locale}/></section></main>}
