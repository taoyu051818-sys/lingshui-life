import Link from 'next/link'
import { UserRound } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LanguageSwitcher } from '@/components/language-switcher'
import type { Locale } from '@/lib/locale'

export function SiteHeader({ locale }: { locale: Locale }) {
  const zh = locale === 'zh-CN'
  const nav = zh
    ? [['生活指南', '#guides'], ['资源服务', '#resources'], ['平台服务', '#services'], ['活动资讯', '#events'], ['社区交流', '#community']]
    : [['Guides', '#guides'], ['Resources', '#resources'], ['How It Works', '#services'], ['Events', '#events'], ['Community', '#community']]

  return <>
    <div className="bg-brand-navy text-primary-foreground"><div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-2 text-xs sm:flex-row sm:items-center sm:justify-between md:px-6"><p><strong>{zh ? '海南陵水外籍人士生活指南' : 'Lingshui Expat Guide'}</strong> — {zh ? '服务国际教育园区与来陵国际居民' : 'Serving the International Education Innovation Pilot Zone and global residents'}</p><p className="text-primary-foreground/65">{zh ? '信息指引与资源转介，不替代行政审批' : 'Information and referrals only; not an administrative authority'}</p></div></div>
    <header className="sticky top-0 z-20 border-b bg-card/95 backdrop-blur"><div className="mx-auto flex min-h-18 max-w-6xl items-center justify-between gap-3 px-4 md:px-6">
      <Link href="/" className="flex min-w-0 items-center gap-3"><span className="original-brand-mark shrink-0" aria-hidden="true" /><span className="min-w-0"><strong className="block truncate text-lg font-black leading-none tracking-tight text-brand-navy">Lingshui Expats</strong><small className="mt-1 hidden text-[10px] font-bold tracking-widest text-brand-pink sm:block">{zh ? '陵水外籍人士生活指南' : 'LIVING GUIDE FOR INTERNATIONAL RESIDENTS'}</small></span></Link>
      <nav aria-label={zh ? '主导航' : 'Main navigation'} className="hidden items-center gap-5 text-sm font-bold text-brand-navy lg:flex">{nav.map(([label, href]) => <Link key={href} href={href} className="hover:text-brand-pink">{label}</Link>)}</nav>
      <div className="flex shrink-0 items-center gap-2"><LanguageSwitcher locale={locale} /><Button render={<Link href="/sign-in" />} nativeButton={false} size="sm" className="rounded-full bg-gradient-to-r from-brand-pink to-brand-violet shadow-lg shadow-brand-pink/20"><UserRound data-icon="inline-start" />{zh ? '登录' : 'Sign in'}</Button></div>
    </div><nav aria-label={zh ? '移动导航' : 'Mobile navigation'} className="flex gap-4 overflow-x-auto border-t px-4 py-3 text-sm font-semibold text-brand-navy lg:hidden">{nav.map(([label, href]) => <Link key={href} href={href} className="shrink-0">{label}</Link>)}</nav></header>
  </>
}
