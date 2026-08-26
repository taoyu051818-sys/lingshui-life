import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BriefcaseBusiness, CalendarDays, GraduationCap, Handshake, HeartPulse, Home, Languages, MapPin, MessageCircle, Scale, Search, ShieldCheck, Utensils } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const resources = [
  { icon: ShieldCheck, title: '签证与居留', desc: '流程指引、材料清单、期限提醒及合规转介。' },
  { icon: BriefcaseBusiness, title: '就业与入职', desc: '国际教育岗位、人才服务和入职支持信息。' },
  { icon: HeartPulse, title: '医疗与健康', desc: '就医导航、保险及紧急医疗信息提示。' },
  { icon: Home, title: '住房与生活', desc: '租住提示、生活缴费和本地社区指南。' },
  { icon: Utensils, title: '餐饮与日常', desc: '国际友好型餐饮与日常生活资源。' },
  { icon: Scale, title: '法务与合规', desc: '劳动、税务、合同等专业事项转介。' },
  { icon: GraduationCap, title: '教育与培训', desc: '语言学习、国际教育与家庭资源。' },
  { icon: Handshake, title: '社区与交流', desc: '认识国际邻里，参与本地文化生活。' },
]
const guides = [
  { tag: '抵达陵水', title: '抵达后的前 30 天清单', desc: '住宿登记、交通、通信支付和日常生活事项。', image: '/images/guide-arrival.png', alt: '国际居民抵达陵水新居' },
  { tag: '日常生活', title: '在滨海陵水找到生活节奏', desc: '居住片区、购物餐饮、出行和服务从哪里开始。', image: '/images/guide-daily-life.png', alt: '国际居民体验陵水本地市场' },
  { tag: '社区融入', title: '如何在陵水认识新朋友', desc: '语言交换、高校活动、志愿服务和文化体验。', image: '/images/guide-community.png', alt: '陵水海边咖啡馆语言交流活动' },
  { tag: '教育服务', title: '国际教育与能力提升资源', desc: '语言学习、考试服务、技能培训和升学信息。', image: '/images/guide-education.png', alt: '陵水国际教育园区学习环境' },
]
const events = [
  ['12', '9 月', '“初到陵水”迎新说明会'],
  ['19', '9 月', '海边语言交换活动'],
  ['26', '9 月', '国际人才交流之夜'],
]

export function PortalHome() {
  return <div className="portal-original">
    <section className="portal-hero relative min-h-[610px] overflow-hidden bg-brand-navy text-primary-foreground">
      <Image src="/images/lingshui-coast.png" alt="陵水热带海岸与国际社区" fill priority className="object-cover opacity-65" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-violet/80 to-brand-pink/25" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-navy/55 to-transparent" />
      <div className="relative mx-auto flex min-h-[610px] max-w-6xl items-center px-4 py-20 md:px-6">
        <div className="flex max-w-3xl flex-col items-start gap-6">
          <Badge className="rounded-full bg-brand-pink text-primary-foreground">你的陵水国际生活服务入口</Badge>
          <h1 className="text-balance text-5xl font-black leading-tight tracking-tight md:text-7xl">初到陵水，<br /><span>安心生活。</span></h1>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/85">为在陵水工作、学习、旅居的外籍教师、学生、人才及家庭，提供生活指南、资源信息和社区连接。</p>
          <form action="/search" className="portal-search flex w-full items-center gap-2 bg-card text-card-foreground">
            <Search className="ml-2 size-5 text-muted-foreground" aria-hidden="true" /><label className="sr-only" htmlFor="hero-search">搜索资源</label>
            <input id="hero-search" name="q" className="min-w-0 flex-1 bg-transparent px-2 py-2 outline-none" placeholder="搜索签证、医疗、住房、学校、活动" />
            <Button type="submit">搜索资源</Button>
          </form>
          <div className="flex flex-wrap items-center gap-3 text-sm"><span className="text-primary-foreground/70">热门搜索：</span>{['签证居留','医疗健康','住房生活','就业入职'].map(item => <Link key={item} href={`/search?q=${item}`} className="border-b border-primary-foreground/50 hover:border-primary-foreground">{item}</Link>)}</div>
        </div>
      </div>
    </section>

    <section className="portal-intro border-b"><div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 md:flex-row md:items-start md:gap-16 md:px-6"><h2 className="shrink-0 font-serif text-2xl font-semibold">欢迎来到陵水。</h2><p className="max-w-3xl text-pretty leading-relaxed text-muted-foreground">平台围绕国际教育园区和陵水国际化生活场景，连接基础生活信息、服务资源和社区活动。专业事项提供流程指引和合规转介，由有资质机构依法办理。</p></div></section>

    <section id="resources" className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <SectionHead kicker="生活所需，一站指引" title="陵水基础资源服务" desc="先获取清晰、实用的信息，再对接相应部门、机构或服务提供方。" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{resources.map(({ icon: Icon, title, desc }) => <Card key={title} className="portal-resource group"><CardHeader><span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-violet to-primary text-primary-foreground shadow-md"><Icon className="size-5" aria-hidden="true" /></span><CardTitle>{title}</CardTitle><CardDescription className="leading-relaxed">{desc}</CardDescription></CardHeader><CardContent><Link href={`/search?q=${encodeURIComponent(title)}`} className="inline-flex items-center gap-2 text-sm font-semibold text-primary">查看资源 <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link></CardContent></Card>)}</div>
    </section>

    <section id="guides" className="bg-muted"><div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <SectionHead kicker="外籍人士陵水生活指南" title="让初来生活更轻松" desc="用通俗、实用的内容，回答工作、学习和居住中的常见问题。" />
      <div className="grid gap-6 lg:grid-cols-[1.4fr_.6fr]"><div className="grid gap-5 sm:grid-cols-2">{guides.map((guide, i) => <Link href={`/guides/${i + 1}`} key={guide.title} className="portal-guide group overflow-hidden border bg-card"><div className="relative aspect-[4/3] overflow-hidden"><Image src={guide.image} alt={guide.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 100vw" /><div className="absolute inset-0 bg-gradient-to-t from-foreground/35 to-transparent" /><Badge variant="secondary" className="absolute bottom-4 left-4">{guide.tag}</Badge></div><div className="p-6"><h3 className="text-balance text-xl font-semibold group-hover:text-primary">{guide.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{guide.desc}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">阅读全文 <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span></div></Link>)}</div><aside className="portal-help flex min-h-96 flex-col justify-between p-7 text-primary-foreground"><div className="flex flex-col gap-4"><MapPin className="size-7" /><p className="text-sm font-semibold text-primary-foreground/70">刚来到陵水？</p><h3 className="font-serif text-3xl font-semibold">不确定从哪里开始？</h3><p className="leading-relaxed text-primary-foreground/75">提交简单需求，我们将为你指向相关指南、责任机构或经核验的服务资源。</p></div><Button render={<Link href="/request" />} nativeButton={false} variant="secondary">获取指引 <ArrowRight data-icon="inline-end" /></Button></aside></div>
    </div></section>

    <section id="services" className="mx-auto max-w-6xl px-4 py-20 md:px-6"><SectionHead kicker="平台如何服务" title="从问题到资源连接" desc="以清晰的信息、透明的转介和持续跟进回应复杂需求。" /><div className="grid gap-8 md:grid-cols-3">{[['查找清晰信息','浏览双语指南、常见问答和事项清单。'],['匹配适当资源','按类别查找医疗、住房、教育和专业服务。'],['提交并跟进需求','记录复杂问题，并在用户中心查看处理状态。']].map(([title,desc],i)=><article key={title} className="flex flex-col gap-4 border-t-2 border-primary pt-6"><span className="font-serif text-4xl text-primary/45">0{i+1}</span><h3 className="text-xl font-semibold">{title}</h3><p className="leading-relaxed text-muted-foreground">{desc}</p></article>)}</div></section>

    <section id="events"><div className="mx-auto max-w-6xl px-4 py-20 md:px-6"><SectionHead kicker="活动与资讯" title="国际交流与本地体验" desc="让新的居住地真正成为有归属感的社区。" /><div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]"><div className="portal-event-main relative overflow-hidden"><Image src="/images/community-gathering.png" alt="陵水国际社区交流活动" fill className="object-cover" sizes="(min-width: 1024px) 55vw, 100vw" /><div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-violet/25 to-brand-pink/10" /><div className="absolute inset-x-0 bottom-0 p-7"><Badge variant="secondary">社区特色活动</Badge><h3 className="mt-4 font-serif text-3xl font-semibold">国际教育与社区交流会</h3><p className="mt-2 text-primary-foreground/75">连接教育工作者、学生、创业者与本地伙伴。</p></div></div><div className="flex flex-col divide-y overflow-hidden rounded-2xl border bg-card">{events.map(([day,month,title])=><article key={title} className="flex items-center gap-5 py-5 first:pt-0"><div className="flex size-16 shrink-0 flex-col items-center justify-center text-brand-pink"><strong className="text-xl">{day}</strong><small>{month}</small></div><div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm text-muted-foreground">开放交流 · 免费预约</p></div></article>)}</div></div></div></section>

    <section id="community" className="portal-community px-4 py-20 md:px-6"><div className="mx-auto max-w-6xl"><SectionHead kicker="社区话题交流" title="提问、分享、融入" desc="真实的问题与经验交流，让本地信息发挥更大价值。" inverse /><div className="grid gap-6 lg:grid-cols-[1.3fr_.7fr]"><div className="flex flex-col divide-y rounded-2xl border bg-card px-6">{['刚到陵水，优先需要办理哪些生活事项？','哪里可以参加中文练习和文化体验活动？','国际友好型医疗就诊有哪些实用建议？'].map((title,i)=><article key={title} className="py-6"><div className="flex items-start gap-4"><MessageCircle className="mt-1 size-5 shrink-0 text-primary" /><div><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm text-muted-foreground">社区问答 · {5+i*3} 条回复 · 最近更新</p></div></div></article>)}</div><aside className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-brand-gold to-accent p-7 text-brand-navy shadow-xl shadow-brand-gold/20"><div><Languages className="size-7" /><h3 className="mt-6 font-serif text-3xl font-semibold">从这里建立本地连接。</h3><p className="mt-4 leading-relaxed opacity-75">提出问题、参与活动或获取社区资源指引。</p></div><Button render={<Link href="/request" />} nativeButton={false}>加入社区交流</Button></aside></div></div></section>
  </div>
}

function SectionHead({ kicker, title, desc, inverse = false }: { kicker: string; title: string; desc: string; inverse?: boolean }) {
  return <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><p className={inverse ? 'text-sm font-semibold text-primary-foreground/65' : 'text-sm font-semibold text-primary'}>{kicker}</p><h2 className="mt-2 text-balance font-serif text-3xl font-semibold md:text-4xl">{title}</h2></div><p className={inverse ? 'max-w-xl text-pretty leading-relaxed text-primary-foreground/70' : 'max-w-xl text-pretty leading-relaxed text-muted-foreground'}>{desc}</p></div>
}
