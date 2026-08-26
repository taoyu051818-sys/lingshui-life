import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'
import { getCategories } from '@/lib/content'
import { getLocale } from '@/lib/locale'
import { RequestForm } from '@/components/request-form'
import { SiteHeader } from '@/components/site-header'

export default async function RequestPage() {
  const [session, locale] = await Promise.all([auth.api.getSession({ headers: await headers() }), getLocale()])
  if (!session?.user) redirect('/sign-in')
  const categories = await getCategories(locale)
  const zh = locale === 'zh-CN'
  return <><SiteHeader locale={locale}/><main className="mx-auto grid max-w-5xl gap-10 px-4 py-12 md:grid-cols-[.7fr_1.3fr] md:px-6"><div><p className="text-sm font-semibold text-primary">{zh ? '个人支持' : 'Personal support'}</p><h1 className="mt-2 text-balance font-serif text-4xl font-semibold">{zh ? '提交服务需求' : 'Submit a Service Request'}</h1><p className="mt-4 leading-relaxed text-muted-foreground">{zh ? '请尽可能完整地描述你的需求。审核后，我们将通过你提供的联系方式与你联系。' : 'Please describe your needs as fully as possible. A member of our team will contact you using the details you provide after your request is reviewed.'}</p></div><section className="rounded-2xl border bg-card p-6 md:p-8"><RequestForm categories={categories} locale={locale}/></section></main></>
}
