import Link from 'next/link'
import { Search } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { Button } from '@/components/ui/button'
import { searchContent } from '@/lib/content'
import { getLocale } from '@/lib/locale'

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const [{ q = '' }, locale] = await Promise.all([searchParams, getLocale()])
  const zh = locale === 'zh-CN'
  const results = await searchContent(q, locale)
  return <><SiteHeader locale={locale}/><main className="mx-auto max-w-4xl px-4 py-12 md:px-6"><p className="text-sm font-semibold text-primary">{zh ? '资源搜索' : 'Resource search'}</p><h1 className="mt-2 font-serif text-4xl font-semibold">{zh ? '搜索生活资源' : 'Search Living Resources'}</h1><form className="mt-8 flex gap-2 rounded-xl border bg-card p-2"><Search className="ml-2 self-center text-muted-foreground"/><input name="q" defaultValue={q} className="min-w-0 flex-1 bg-transparent px-2 outline-none" aria-label={zh ? '搜索关键词' : 'Search terms'}/><Button>{zh ? '搜索' : 'Search'}</Button></form><p className="mt-8 text-sm text-muted-foreground">{zh ? `找到 ${results.length} 条结果` : `${results.length} results found`}{q ? (zh ? `：“${q}”` : ` for “${q}”`) : ''}</p><div className="mt-4 flex flex-col gap-3">{results.length === 0 ? <div className="rounded-xl border border-dashed p-8 text-center text-muted-foreground">{zh ? '没有找到匹配内容，请尝试其他关键词。' : 'No matching content. Try another search term.'}</div> : results.map((item)=><Link key={item.id} href={`/guides/${item.slug}`} className="rounded-xl border bg-card p-5 font-medium hover:border-primary">{item.title}<p className="mt-2 text-sm font-normal text-muted-foreground">{item.summary}</p></Link>)}</div></main></>
}
