import Link from 'next/link'
import { ArrowRight, BriefcaseBusiness, CalendarDays, GraduationCap, HeartPulse, Home, Search, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const services = [
  { icon: ShieldCheck, title: '签证与居留', desc: '签证延期、居留许可与入境政策指引' },
  { icon: BriefcaseBusiness, title: '就业与创业', desc: '工作许可、人才服务与企业注册流程' },
  { icon: HeartPulse, title: '医疗健康', desc: '医院就诊、医保办理与紧急医疗信息' },
  { icon: Home, title: '住房生活', desc: '租房提示、水电服务与社区生活指南' },
  { icon: GraduationCap, title: '教育服务', desc: '国际学校、入学政策与语言学习资源' },
  { icon: CalendarDays, title: '文化活动', desc: '发现本地节庆、社区交流与志愿活动' },
]
const guides = ['外国人来华工作许可办理指南', '境外人员住宿登记说明', '陵水常用医疗机构与急救电话']

export function PortalHome() {
  return <>
    <section className="border-b bg-secondary"><div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1.3fr_.7fr] md:px-6 md:py-24">
      <div className="flex flex-col items-start gap-6"><Badge variant="outline">Lingshui International Services</Badge><h1 className="max-w-3xl text-balance font-serif text-4xl font-semibold leading-tight md:text-6xl">在陵水生活，<br/><span className="text-primary">从这里开始。</span></h1><p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">为在陵水工作、学习和生活的国际居民提供可信、清晰、便捷的双语公共服务信息。</p><form action="/search" className="flex w-full max-w-2xl gap-2 rounded-xl border bg-card p-2 shadow-sm"><label className="sr-only" htmlFor="home-search">搜索服务</label><Search className="ml-2 self-center text-muted-foreground" aria-hidden="true"/><input id="home-search" name="q" className="min-w-0 flex-1 bg-transparent px-2 text-base outline-none" placeholder="搜索签证、医疗、住房等服务"/><Button type="submit">搜索</Button></form></div>
      <div className="flex flex-col justify-between rounded-2xl bg-primary p-7 text-primary-foreground"><p className="text-sm font-medium opacity-80">快速服务通道</p><div className="flex flex-col gap-6"><div><p className="font-serif text-3xl font-semibold">需要专人协助？</p><p className="mt-2 leading-relaxed opacity-80">提交服务申请，我们会为你匹配合适的服务部门。</p></div><Button render={<Link href="/request" />} nativeButton={false} variant="secondary">提交服务申请<ArrowRight data-icon="inline-end"/></Button></div></div>
    </div></section>
    <section id="services" className="mx-auto max-w-6xl px-4 py-16 md:px-6"><div className="mb-8 flex items-end justify-between"><div><p className="text-sm font-semibold text-primary">常用服务</p><h2 className="mt-2 font-serif text-3xl font-semibold">找到你需要的帮助</h2></div></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{services.map(({icon: Icon,title,desc})=><Card key={title} className="transition-transform hover:-translate-y-1"><CardHeader><Icon className="size-6 text-primary" aria-hidden="true"/><CardTitle>{title}</CardTitle><CardDescription className="leading-relaxed">{desc}</CardDescription></CardHeader><CardContent><Link href={`/search?q=${encodeURIComponent(title)}`} className="text-sm font-medium text-primary">查看服务 →</Link></CardContent></Card>)}</div></section>
    <section id="guides" className="bg-muted"><div className="mx-auto max-w-6xl px-4 py-16 md:px-6"><div className="grid gap-10 md:grid-cols-[.7fr_1.3fr]"><div><p className="text-sm font-semibold text-primary">最新指南</p><h2 className="mt-2 text-balance font-serif text-3xl font-semibold">把复杂的流程，讲得简单清楚</h2><p className="mt-4 leading-relaxed text-muted-foreground">信息持续更新，重要政策均标注适用范围与办理渠道。</p></div><div className="flex flex-col gap-3">{guides.map((guide,i)=><Link href={`/guides/${i+1}`} key={guide} className="flex items-center justify-between rounded-xl border bg-card p-5 font-medium hover:border-primary"><span>{guide}</span><ArrowRight className="size-5 text-primary" aria-hidden="true"/></Link>)}</div></div></div></section>
  </>
}
