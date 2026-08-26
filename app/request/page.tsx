import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'
import { RequestForm } from '@/components/request-form'
import { SiteHeader } from '@/components/site-header'

export default async function RequestPage(){const session=await auth.api.getSession({headers:await headers()});if(!session?.user)redirect('/sign-in');return <><SiteHeader/><main className="mx-auto grid max-w-5xl gap-10 px-4 py-12 md:grid-cols-[.7fr_1.3fr] md:px-6"><div><p className="text-sm font-semibold text-primary">专人协助</p><h1 className="mt-2 text-balance font-serif text-4xl font-semibold">提交服务申请</h1><p className="mt-4 leading-relaxed text-muted-foreground">请尽量完整地描述你的需求。平台工作人员将在受理后通过你留下的联系方式与你沟通。</p></div><section className="rounded-2xl border bg-card p-6 md:p-8"><RequestForm/></section></main></>}
