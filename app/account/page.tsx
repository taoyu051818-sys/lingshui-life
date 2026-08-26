import Link from 'next/link'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { desc, eq } from 'drizzle-orm'
import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { serviceRequests } from '@/lib/db/schema'
import { getLocale } from '@/lib/locale'
import { SiteHeader } from '@/components/site-header'
import { SignOutButton } from '@/components/sign-out-button'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default async function AccountPage({ searchParams }: { searchParams: Promise<{ created?: string }> }) {
  const [session, locale, params] = await Promise.all([auth.api.getSession({ headers: await headers() }), getLocale(), searchParams])
  if (!session?.user) redirect('/sign-in')
  const requests = await db.select().from(serviceRequests).where(eq(serviceRequests.userId, session.user.id)).orderBy(desc(serviceRequests.createdAt))
  const zh = locale === 'zh-CN'
  const status: Record<string,string> = zh ? { submitted:'已提交', processing:'处理中', resolved:'已解决' } : { submitted:'Submitted', processing:'In progress', resolved:'Resolved' }
  return <><SiteHeader locale={locale}/><main className="mx-auto max-w-5xl px-4 py-12 md:px-6">{params.created === '1' && <p role="status" className="mb-6 rounded-xl border border-primary/25 bg-primary/10 p-4 text-sm font-medium text-primary">{zh ? '需求已成功提交。' : 'Your request was submitted successfully.'}</p>}<div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm text-muted-foreground">{session.user.email}</p><h1 className="mt-1 font-serif text-4xl font-semibold">{zh ? '我的服务需求' : 'My Service Requests'}</h1></div><div className="flex flex-wrap gap-2"><SignOutButton locale={locale}/><Button render={<Link href="/request" />} nativeButton={false}>{zh ? '提交新需求' : 'Submit a new request'}</Button></div></div><div className="mt-10 flex flex-col gap-3">{requests.length===0?<div className="rounded-2xl border border-dashed p-10 text-center"><p className="font-medium">{zh ? '暂无服务需求' : 'No service requests yet'}</p><p className="mt-2 text-sm text-muted-foreground">{zh ? '当你在生活、工作或本地服务方面需要帮助时，可以随时提交需求。' : 'Submit a request whenever you need help with life, work, or local services.'}</p></div>:requests.map(item=><article key={item.id} className="flex flex-col justify-between gap-4 rounded-xl border bg-card p-5 sm:flex-row sm:items-center"><div><p className="font-semibold">{item.subject}</p><p className="mt-1 text-sm text-muted-foreground">{zh ? '编号' : 'Reference'} LS-{String(item.id).padStart(5,'0')} · {item.createdAt.toLocaleDateString(zh ? 'zh-CN' : 'en-US')}</p></div><Badge variant="secondary">{status[item.status]??item.status}</Badge></article>)}</div></main></>
}
