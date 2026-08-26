import Link from 'next/link'
import { Languages, UserRound } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function SiteHeader() {
  return <>
    <div className="bg-brand-navy text-primary-foreground"><div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-2 text-xs sm:flex-row sm:items-center sm:justify-between md:px-6"><p><strong>Lingshui Expat Guide</strong> — Serving the International Education Innovation Pilot Zone and global residents</p><p className="text-primary-foreground/65">Information and referrals only; not an administrative authority</p></div></div>
    <header className="sticky top-0 z-20 border-b bg-card/95 backdrop-blur"><div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 md:px-6">
      <Link href="/" className="flex items-center gap-3"><span className="original-brand-mark" aria-hidden="true" /><span><strong className="block text-lg font-black leading-none tracking-tight text-brand-navy">Lingshui Expats</strong><small className="mt-1 block text-[10px] font-bold tracking-widest text-brand-pink">LIVING GUIDE FOR INTERNATIONAL RESIDENTS</small></span></Link>
      <nav aria-label="Main navigation" className="hidden items-center gap-5 text-sm font-bold text-brand-navy lg:flex"><Link href="#guides" className="hover:text-brand-pink">Guides</Link><Link href="#resources" className="hover:text-brand-pink">Resources</Link><Link href="#services" className="hover:text-brand-pink">How It Works</Link><Link href="#events" className="hover:text-brand-pink">Events</Link><Link href="#community" className="hover:text-brand-pink">Community</Link></nav>
      <div className="flex items-center gap-2"><Button variant="ghost" size="sm" aria-label="Switch to Chinese"><Languages data-icon="inline-start" />中文</Button><Button render={<Link href="/sign-in" />} nativeButton={false} size="sm" className="rounded-full bg-gradient-to-r from-brand-pink to-brand-violet shadow-lg shadow-brand-pink/20"><UserRound data-icon="inline-start" />Sign in</Button></div>
    </div></header>
  </>
}
