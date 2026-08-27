import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BriefcaseBusiness, CalendarDays, GraduationCap, Handshake, HeartPulse, Home, Languages, MapPin, MessageCircle, Scale, Search, ShieldCheck, Utensils } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { Locale } from '@/lib/locale'

const zhCopy: Record<string, string> = {
  'Your gateway to international life in Lingshui': '你的陵水国际生活服务入口', 'New to Lingshui?': '初到陵水？', 'Feel at home.': '安心生活。',
  'Practical guides, trusted resources, and community connections for international teachers, students, professionals, and families living in Lingshui.': '为在陵水工作、学习、旅居的外籍教师、学生、人才及家庭，提供生活指南、资源信息和社区连接。',
  'Search resources': '搜索资源', 'Search visas, healthcare, housing, schools, or events': '搜索签证、医疗、住房、学校或活动', 'Search': '搜索', 'Popular:': '热门搜索：',
  'Welcome to Lingshui.': '欢迎来到陵水。', 'Essential Resources in Lingshui': '陵水基础资源服务', 'View resources': '查看资源',
  'A Smoother Start in Lingshui': '让初来生活更轻松', 'Read guide': '阅读全文', 'Not sure where to start?': '不确定从哪里开始？',
  'Get guidance': '获取指引', 'From Questions to the Right Resources': '从问题到资源连接', 'International Connections, Local Experiences': '国际交流与本地体验',
  'Featured community event': '社区特色活动', 'Open to all · Free registration': '开放交流 · 免费预约', 'Ask, Share, Belong': '提问、分享、融入',
  'Build your local connections here.': '从这里建立本地连接。', 'Join the community': '加入社区交流',
  'Everyday essentials, clearly explained': '日常所需，清晰说明', 'The expat guide to Lingshui': '陵水外籍人士指南', 'How the platform helps': '平台如何提供帮助', 'Events & updates': '活动与资讯', 'Community conversations': '社区交流',
  'Visa & Residency': '签证与居留', 'Work & Onboarding': '工作与入职', 'Healthcare': '医疗健康', 'Housing & Living': '住房与生活', 'Food & Daily Life': '餐饮与日常', 'Legal & Compliance': '法律与合规', 'Education & Training': '教育与培训', 'Community': '社区交流',
  'Your First 30 Days in Lingshui': '初到陵水的前 30 天', 'Finding Your Rhythm by the Coast': '在海滨找到生活节奏', 'How to Meet People in Lingshui': '如何在陵水结识朋友', 'International Education & Skills': '国际教育与技能发展',
  'Find clear information': '查找清晰信息', 'Match the right resources': '匹配合适资源', 'Submit and track a request': '提交并跟踪需求',
  'Welcome to Lingshui Orientation': '欢迎来到陵水说明会', 'Seaside Language Exchange': '海滨语言交流', 'International Talent Networking Night': '国际人才交流之夜',
  'Real questions and shared experience make local knowledge more useful.': '真实问题与经验分享，让本地生活信息更有价值。',
  'What should I arrange first after arriving in Lingshui?': '抵达陵水后，应该优先安排哪些事项？',
  'Where can I join language practice and cultural activities?': '在哪里可以参加语言练习和文化活动？',
  'What should international residents know about local healthcare?': '外籍居民需要了解哪些本地医疗信息？',
  'Community Q&A': '社区问答', 'replies': '条回复', 'Recently updated': '最近更新',
  'Ask a question, join an event, or find your way to community resources.': '提出问题、参加活动，或查找适合你的社区资源。',
  'International Education & Community Meetup': '国际教育与社区交流会',
  'Connecting educators, students, entrepreneurs, and local partners.': '连接教育工作者、学生、创业者与本地合作伙伴。',
  'September 28 · 15:00–17:30': '9月28日 · 15:00–17:30',
  'Lingshui International Education Innovation Pilot Zone': '陵水黎安国际教育创新试验区',
  'Bilingual networking · Registration required': '双语交流 · 需提前报名', 'View event details': '查看活动详情',
}

const resources = [
  { icon: ShieldCheck, title: 'Visa & Residency', desc: 'Process guidance, document checklists, deadline reminders, and compliant referrals.' },
  { icon: BriefcaseBusiness, title: 'Work & Onboarding', desc: 'International education roles, talent services, and onboarding support.' },
  { icon: HeartPulse, title: 'Healthcare', desc: 'Care navigation, insurance information, and emergency medical guidance.' },
  { icon: Home, title: 'Housing & Living', desc: 'Rental tips, household services, and local neighborhood guidance.' },
  { icon: Utensils, title: 'Food & Daily Life', desc: 'International-friendly dining and everyday living resources.' },
  { icon: Scale, title: 'Legal & Compliance', desc: 'Referrals for employment, tax, contracts, and other professional matters.' },
  { icon: GraduationCap, title: 'Education & Training', desc: 'Language learning, international education, and family resources.' },
  { icon: Handshake, title: 'Community', desc: 'Meet international neighbors and take part in local cultural life.' },
]
const guides = [
  { tag: 'Arriving in Lingshui', title: 'Your First 30 Days in Lingshui', desc: 'Registration, transport, connectivity, payments, and everyday essentials.', image: '/images/guide-arrival.png', alt: 'International residents arriving at their new home in Lingshui' },
  { tag: 'Daily Life', title: 'Finding Your Rhythm by the Coast', desc: 'Where to begin with neighborhoods, shopping, dining, transport, and services.', image: '/images/guide-daily-life.png', alt: 'International residents exploring a local market in Lingshui' },
  { tag: 'Community', title: 'How to Meet People in Lingshui', desc: 'Language exchanges, university events, volunteering, and cultural experiences.', image: '/images/guide-community.png', alt: 'A language exchange at a seaside café in Lingshui' },
  { tag: 'Education', title: 'International Education & Skills', desc: 'Language learning, testing services, professional training, and study pathways.', image: '/images/guide-education.png', alt: 'Learning environment at Lingshui International Education Innovation Pilot Zone' },
]
const events = [
  ['12', 'SEP', 'Welcome to Lingshui Orientation'],
  ['19', 'SEP', 'Seaside Language Exchange'],
  ['26', 'SEP', 'International Talent Networking Night'],
]

export function PortalHome({ locale }: { locale: Locale }) {
  const t = (value: string) => locale === 'zh-CN' ? (zhCopy[value] ?? value) : value
  return <div className="portal-original">
    <section className="portal-hero relative min-h-[610px] overflow-hidden bg-brand-navy text-primary-foreground">
      <Image src="/images/lingshui-coast.png" alt="Lingshui tropical coast and international community" fill priority className="object-cover opacity-65" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-violet/80 to-brand-pink/25" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-navy/55 to-transparent" />
      <div className="relative mx-auto flex min-h-[610px] max-w-6xl items-center px-4 py-20 md:px-6">
        <div className="flex max-w-3xl flex-col items-start gap-6">
          <Badge className="rounded-full bg-brand-pink text-primary-foreground">{t('Your gateway to international life in Lingshui')}</Badge>
          <h1 className="text-balance text-5xl font-black leading-tight tracking-tight text-primary-foreground md:text-7xl">{t('New to Lingshui?')}<br />{t('Feel at home.')}</h1>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/85">{t('Practical guides, trusted resources, and community connections for international teachers, students, professionals, and families living in Lingshui.')}</p>
          <form action="/search" className="portal-search flex w-full items-center gap-2 bg-card text-card-foreground">
            <Search className="ml-2 size-5 text-muted-foreground" aria-hidden="true" /><label className="sr-only" htmlFor="hero-search">{t('Search resources')}</label>
            <input id="hero-search" name="q" className="min-w-0 flex-1 bg-transparent px-2 py-2 outline-none" placeholder={t('Search visas, healthcare, housing, schools, or events')} />
            <Button type="submit">{t('Search')}</Button>
          </form>
          <div className="flex flex-wrap items-center gap-3 text-sm"><span className="text-primary-foreground/70">{t('Popular:')}</span>{['Visa & Residency','Healthcare','Housing','Work & Onboarding'].map(item => <Link key={item} href={`/search?q=${encodeURIComponent(item)}`} className="border-b border-primary-foreground/50 hover:border-primary-foreground">{item}</Link>)}</div>
        </div>
      </div>
    </section>

    <section className="portal-intro border-b"><div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 md:flex-row md:items-start md:gap-16 md:px-6"><h2 className="shrink-0 font-serif text-2xl font-semibold">{t('Welcome to Lingshui.')}</h2><p className="max-w-3xl text-pretty leading-relaxed text-muted-foreground">Built around the International Education Innovation Pilot Zone and everyday life in Lingshui, this platform connects essential information, service resources, and community activities. Professional matters are supported through clear guidance and referrals to qualified providers.</p></div></section>

    <section id="resources" className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <SectionHead kicker={t('Everyday essentials, clearly explained')} title={t('Essential Resources in Lingshui')} desc="Start with clear, practical information, then connect with the appropriate authority, organization, or service provider." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{resources.map(({ icon: Icon, title, desc }) => <Card key={title} className="portal-resource group"><CardHeader><span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-violet to-primary text-primary-foreground shadow-md"><Icon className="size-5" aria-hidden="true" /></span><CardTitle>{t(title)}</CardTitle><CardDescription className="leading-relaxed">{t(desc)}</CardDescription></CardHeader><CardContent><Link href={`/search?q=${encodeURIComponent(title)}`} className="inline-flex items-center gap-2 text-sm font-semibold text-primary">{t('View resources')} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link></CardContent></Card>)}</div>
    </section>

    <section id="guides" className="bg-muted"><div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <SectionHead kicker={t('The expat guide to Lingshui')} title={t('A Smoother Start in Lingshui')} desc="Straightforward, practical answers to common questions about working, studying, and living here." />
      <div className="grid gap-6 lg:grid-cols-[1.4fr_.6fr]"><div className="grid gap-5 sm:grid-cols-2">{guides.map((guide) => <Link href={`/search?q=${encodeURIComponent(guide.title)}`} key={guide.title} className="portal-guide group overflow-hidden border bg-card"><div className="relative aspect-[4/3] overflow-hidden"><Image src={guide.image} alt={guide.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 100vw" /><div className="absolute inset-0 bg-gradient-to-t from-foreground/35 to-transparent" /><Badge variant="secondary" className="absolute bottom-4 left-4">{t(guide.tag)}</Badge></div><div className="p-6"><h3 className="text-balance text-xl font-semibold group-hover:text-primary">{t(guide.title)}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(guide.desc)}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">{t('Read guide')} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span></div></Link>)}</div><aside className="portal-help flex min-h-96 flex-col justify-between p-7 text-primary-foreground"><div className="flex flex-col gap-4"><MapPin className="size-7" /><p className="text-sm font-semibold text-primary-foreground/70">{t('New to Lingshui?')}</p><h3 className="font-serif text-3xl font-semibold">{t('Not sure where to start?')}</h3><p className="leading-relaxed text-primary-foreground/75">Tell us what you need, and we&apos;ll point you to the right guide, responsible authority, or verified service resource.</p></div><Button render={<Link href="/request" />} nativeButton={false} variant="secondary">{t('Get guidance')} <ArrowRight data-icon="inline-end" /></Button></aside></div>
    </div></section>

    <section id="services" className="mx-auto max-w-6xl px-4 py-20 md:px-6"><SectionHead kicker={t('How the platform helps')} title={t('From Questions to the Right Resources')} desc="Clear information, transparent referrals, and ongoing follow-up for more complex needs." /><div className="grid gap-8 md:grid-cols-3">{[['Find clear information','Browse practical guides, common questions, and useful checklists.'],['Match the right resources','Explore healthcare, housing, education, and professional services by category.'],['Submit and track a request','Record a complex issue and follow its status in your account.']].map(([title,desc],i)=><article key={title} className="flex flex-col gap-4 border-t-2 border-primary pt-6"><span className="font-serif text-4xl text-primary/45">0{i+1}</span><h3 className="text-xl font-semibold">{t(title)}</h3><p className="leading-relaxed text-muted-foreground">{t(desc)}</p></article>)}</div></section>

    <section id="events"><div className="mx-auto max-w-6xl px-4 py-20 md:px-6"><SectionHead kicker={t('Events & updates')} title={t('International Connections, Local Experiences')} desc="Make your new home feel like a community where you belong." /><div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]"><div className="portal-event-main relative overflow-hidden"><Image src="/images/community-gathering.png" alt="International community gathering in Lingshui" fill className="object-cover" sizes="(min-width: 1024px) 55vw, 100vw" /><div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-violet/25 to-brand-pink/10" /><div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-3 p-7"><Badge variant="secondary">{t('Featured community event')}</Badge><h3 className="font-serif text-3xl font-semibold">{t('International Education & Community Meetup')}</h3><p className="text-primary-foreground/75">{t('Connecting educators, students, entrepreneurs, and local partners.')}</p><div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-primary-foreground/85"><span className="inline-flex items-center gap-2"><CalendarDays className="size-4" aria-hidden="true" />{t('September 28 · 15:00–17:30')}</span><span className="inline-flex items-center gap-2"><MapPin className="size-4" aria-hidden="true" />{t('Lingshui International Education Innovation Pilot Zone')}</span></div><p className="text-sm font-medium text-primary-foreground">{t('Bilingual networking · Registration required')}</p><Button render={<Link href="/request" />} nativeButton={false} variant="secondary">{t('View event details')} <ArrowRight data-icon="inline-end" /></Button></div></div><div className="flex flex-col divide-y overflow-hidden rounded-2xl border bg-card">{events.map(([day,month,title])=><article key={title} className="flex items-center gap-5 py-5 first:pt-0"><div className="flex size-16 shrink-0 flex-col items-center justify-center text-brand-pink"><strong className="text-xl">{day}</strong><small>{month}</small></div><div><h3 className="font-semibold">{t(title)}</h3><p className="mt-1 text-sm text-muted-foreground">{t('Open to all · Free registration')}</p></div></article>)}</div></div></div></section>

    <section id="community" className="portal-community px-4 py-20 md:px-6"><div className="mx-auto max-w-6xl"><SectionHead kicker={t('Community conversations')} title={t('Ask, Share, Belong')} desc={t('Real questions and shared experience make local knowledge more useful.')} inverse /><div className="grid gap-6 lg:grid-cols-[1.3fr_.7fr]"><div className="flex flex-col divide-y rounded-2xl border bg-card px-6">{['What should I arrange first after arriving in Lingshui?','Where can I join language practice and cultural activities?','What should international residents know about local healthcare?'].map((title,i)=><article key={title} className="py-6"><div className="flex items-start gap-4"><MessageCircle className="mt-1 size-5 shrink-0 text-primary" /><div><h3 className="font-semibold">{t(title)}</h3><p className="mt-2 text-sm text-muted-foreground">{t('Community Q&A')} · {5+i*3} {t('replies')} · {t('Recently updated')}</p></div></div></article>)}</div><aside className="flex flex-col justify-between rounded-3xl bg-[linear-gradient(145deg,rgb(113,57,213),rgb(249,47,157)_56%,rgb(255,119,95))] p-7 text-brand-navy shadow-xl shadow-brand-pink/20"><div><Languages className="size-7" /><h3 className="mt-6 font-serif text-3xl font-semibold">{t('Build your local connections here.')}</h3><p className="mt-4 leading-relaxed opacity-75">{t('Ask a question, join an event, or find your way to community resources.')}</p></div><Button render={<Link href="/request" />} nativeButton={false}>{t('Join the community')}</Button></aside></div></div></section>
  </div>
}

function SectionHead({ kicker, title, desc, inverse = false }: { kicker: string; title: string; desc: string; inverse?: boolean }) {
  return <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><p className={inverse ? 'text-sm font-semibold text-primary-foreground/65' : 'text-sm font-semibold text-primary'}>{kicker}</p><h2 className="mt-2 text-balance font-serif text-3xl font-semibold md:text-4xl">{title}</h2></div><p className={inverse ? 'max-w-xl text-pretty leading-relaxed text-primary-foreground/70' : 'max-w-xl text-pretty leading-relaxed text-muted-foreground'}>{desc}</p></div>
}
