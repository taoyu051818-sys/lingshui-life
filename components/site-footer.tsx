import Link from 'next/link'
import type { Locale } from '@/lib/locale'

export function SiteFooter({ locale }: { locale: Locale }) {
  const zh = locale === 'zh-CN'
  return <footer className="bg-brand-navy text-primary-foreground"><div className="mx-auto max-w-6xl px-4 py-14 md:px-6"><div className="grid gap-10 md:grid-cols-4"><div><h2 className="font-serif text-xl font-semibold">Lingshui Expats</h2><p className="mt-4 text-sm leading-relaxed text-primary-foreground/60">{zh ? '面向海南陵水国际居民的本地信息与资源连接平台。' : 'Local information and trusted connections for international residents in Lingshui, Hainan.'}</p></div><FooterGroup title={zh ? '快速浏览' : 'Explore'} links={zh ? [['生活指南','#guides'],['资源目录','#resources'],['活动资讯','#events']] : [['Living Guides','#guides'],['Resource Directory','#resources'],['Events & Updates','#events']]} /><FooterGroup title={zh ? '平台服务' : 'Platform'} links={zh ? [['服务流程','#services'],['提交需求','/request'],['我的申请','/account']] : [['How It Works','#services'],['Submit a Request','/request'],['My Requests','/account']]} /><div><h3 className="text-sm font-semibold">{zh ? '重要说明' : 'Important Notice'}</h3><p className="mt-4 text-sm leading-relaxed text-primary-foreground/60">{zh ? '平台不提供行政审批、法律意见、医疗诊断或签证获批承诺。' : 'This platform does not provide administrative approval, legal advice, medical diagnosis, or visa approval guarantees.'}</p></div></div><div className="mt-12 flex flex-col gap-2 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/50 sm:flex-row sm:justify-between"><p>© 2026 Lingshui Expats</p><p>{zh ? '为海南陵水的国际生活而设计' : 'Designed for international life in Lingshui, Hainan'}</p></div></div></footer>
}

function FooterGroup({ title, links }: { title: string; links: string[][] }) {
  return <div><h3 className="text-sm font-semibold">{title}</h3><div className="mt-4 flex flex-col gap-3 text-sm text-primary-foreground/60">{links.map(([label,href])=><Link key={label} href={href} className="hover:text-primary-foreground">{label}</Link>)}</div></div>
}
