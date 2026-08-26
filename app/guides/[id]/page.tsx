import Link from 'next/link'
import { ArrowLeft, Clock3 } from 'lucide-react'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { Badge } from '@/components/ui/badge'
import { getContentBySlug } from '@/lib/content'
import { getLocale } from '@/lib/locale'

export default async function GuidePage({ params }: { params: Promise<{ id: string }> }) {
  const [{ id }, locale] = await Promise.all([params, getLocale()])
  const guide = await getContentBySlug(id, locale)
  if (!guide) notFound()
  const zh = locale === 'zh-CN'
  return <><SiteHeader locale={locale}/><main className="mx-auto max-w-3xl px-4 py-12 md:px-6"><Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground"><ArrowLeft className="size-4"/>{zh ? '返回首页' : 'Back to home'}</Link><div className="mt-8"><Badge>{zh ? '服务指南' : 'Service guide'}</Badge></div><h1 className="mt-5 text-balance font-serif text-4xl font-semibold leading-tight">{guide.title}</h1><p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground"><Clock3 className="size-4"/>{zh ? '更新于' : 'Updated'} {guide.updatedAt.toLocaleDateString(zh ? 'zh-CN' : 'en-US')}</p><p className="mt-5 text-lg leading-relaxed text-muted-foreground">{guide.summary}</p><article className="mt-10 whitespace-pre-wrap leading-relaxed text-foreground/85">{guide.body}</article></main></>
}
