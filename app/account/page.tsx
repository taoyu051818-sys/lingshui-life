import Link from 'next/link'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { desc, eq } from 'drizzle-orm'
import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { serviceRequests } from '@/lib/db/schema'
import { SiteHeader } from '@/components/site-header'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const status:Record<string,string>={submitted:'已提交',processing:'处理中',resolved:'已完成'}
export default async function AccountPage(){const session=await auth.api.getSession({headers:await headers()});if(!session?.user)redirect('/sign-in');const requests=await db.select().from(serviceRequests).where(eq(serviceRequests.userId,session.user.id)).orderBy(desc(serviceRequests.createdAt));return <><SiteHeader/><main className="mx-auto max-w-5xl px-4 py-12 md:px-6"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm text-muted-foreground">{session.user.email}</p><h1 className="mt-1 font-serif text-4xl font-semibold">我的服务申请</h1></div><Button render={<Link href="/request" />} nativeButton={false}>提交新申请</Button></div><div className="mt-10 flex flex-col gap-3">{requests.length===0?<div className="rounded-2xl border border-dashed p-10 text-center"><p className="font-medium">还没有服务申请</p><p className="mt-2 text-sm text-muted-foreground">遇到生活、工作或办事问题时，可在线提交需求。</p></div>:requests.map(item=><article key={item.id} className="flex flex-col justify-between gap-4 rounded-xl border bg-card p-5 sm:flex-row sm:items-center"><div><p className="font-semibold">{item.subject}</p><p className="mt-1 text-sm text-muted-foreground">编号 LS-{String(item.id).padStart(5,'0')} · {item.createdAt.toLocaleDateString('zh-CN')}</p></div><Badge variant="secondary">{status[item.status]??item.status}</Badge></article>)}</div></main></>}
