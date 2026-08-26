import Link from 'next/link'
import { Search } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { Button } from '@/components/ui/button'

const results=['外国人来华工作许可办理指南','境外人员住宿登记说明','陵水常用医疗机构与急救电话','外国人居留许可延期办理提示','国际学校与教育资源目录']
export default async function SearchPage({searchParams}:{searchParams:Promise<{q?:string}>}){const {q=''}=await searchParams;const matched=results.filter(x=>x.includes(q)||!q);return <><SiteHeader/><main className="mx-auto max-w-4xl px-4 py-12 md:px-6"><p className="text-sm font-semibold text-primary">服务检索</p><h1 className="mt-2 font-serif text-4xl font-semibold">搜索生活服务</h1><form className="mt-8 flex gap-2 rounded-xl border bg-card p-2"><Search className="ml-2 self-center text-muted-foreground"/><input name="q" defaultValue={q} className="min-w-0 flex-1 bg-transparent px-2 outline-none" aria-label="搜索关键词"/><Button>搜索</Button></form><p className="mt-8 text-sm text-muted-foreground">找到 {matched.length} 条与“{q}”相关的内容</p><div className="mt-4 flex flex-col gap-3">{matched.map((title,i)=><Link key={title} href={`/guides/${i+1}`} className="rounded-xl border bg-card p-5 font-medium hover:border-primary">{title}<p className="mt-2 text-sm font-normal text-muted-foreground">查看办理条件、所需材料、办理渠道和注意事项。</p></Link>)}</div></main></>}
