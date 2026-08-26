import Link from 'next/link'

export function SiteFooter() {
  return <footer className="bg-brand-navy text-primary-foreground"><div className="mx-auto max-w-6xl px-4 py-14 md:px-6"><div className="grid gap-10 md:grid-cols-4"><div><h2 className="font-serif text-xl font-semibold">Lingshui Expats</h2><p className="mt-4 text-sm leading-relaxed text-primary-foreground/60">面向海南陵水国际居民的本地信息与资源连接平台。</p></div><FooterGroup title="快速浏览" links={[['生活指南','#guides'],['资源目录','#resources'],['活动资讯','#events']]} /><FooterGroup title="平台服务" links={[['服务流程','#services'],['提交需求','/request'],['我的申请','/account']]} /><div><h3 className="text-sm font-semibold">重要说明</h3><p className="mt-4 text-sm leading-relaxed text-primary-foreground/60">平台不提供行政审批、法律意见、医疗诊断或签证获批承诺。</p></div></div><div className="mt-12 flex flex-col gap-2 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/50 sm:flex-row sm:justify-between"><p>© 2026 Lingshui Expats</p><p>为海南陵水的国际生活而设计</p></div></div></footer>
}

function FooterGroup({ title, links }: { title: string; links: [string, string][] }) {
  return <div><h3 className="text-sm font-semibold">{title}</h3><div className="mt-4 flex flex-col gap-3 text-sm text-primary-foreground/60">{links.map(([label,href])=><Link key={label} href={href} className="hover:text-primary-foreground">{label}</Link>)}</div></div>
}
