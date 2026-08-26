import Link from 'next/link'

export function SiteFooter() {
  return <footer className="bg-brand-navy text-primary-foreground"><div className="mx-auto max-w-6xl px-4 py-14 md:px-6"><div className="grid gap-10 md:grid-cols-4"><div><h2 className="font-serif text-xl font-semibold">Lingshui Expats</h2><p className="mt-4 text-sm leading-relaxed text-primary-foreground/60">Local information and trusted connections for international residents in Lingshui, Hainan.</p></div><FooterGroup title="Explore" links={[["Living Guides","#guides"],["Resource Directory","#resources"],["Events & Updates","#events"]]} /><FooterGroup title="Platform" links={[["How It Works","#services"],["Submit a Request","/request"],["My Requests","/account"]]} /><div><h3 className="text-sm font-semibold">Important Notice</h3><p className="mt-4 text-sm leading-relaxed text-primary-foreground/60">This platform does not provide administrative approval, legal advice, medical diagnosis, or visa approval guarantees.</p></div></div><div className="mt-12 flex flex-col gap-2 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/50 sm:flex-row sm:justify-between"><p>© 2026 Lingshui Expats</p><p>Designed for international life in Lingshui, Hainan</p></div></div></footer>
}

function FooterGroup({ title, links }: { title: string; links: [string, string][] }) {
  return <div><h3 className="text-sm font-semibold">{title}</h3><div className="mt-4 flex flex-col gap-3 text-sm text-primary-foreground/60">{links.map(([label,href])=><Link key={label} href={href} className="hover:text-primary-foreground">{label}</Link>)}</div></div>
}
