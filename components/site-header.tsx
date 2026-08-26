import Link from 'next/link'
import { Compass, Languages, UserRound } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function SiteHeader() {
  return <>
    <div className="bg-primary text-primary-foreground"><div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-2 text-xs sm:flex-row sm:items-center sm:justify-between md:px-6"><p><strong>海南陵水外籍人士生活指南</strong> — 服务国际教育园区与来陵国际居民</p><p className="text-primary-foreground/65">信息指引与资源转介，不替代行政审批</p></div></div>
    <header className="sticky top-0 z-20 border-b bg-background/95 backdrop-blur"><div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 md:px-6">
      <Link href="/" className="flex items-center gap-3"><span className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground"><Compass className="size-5" aria-hidden="true" /></span><span><strong className="block leading-none">Lingshui Expats</strong><small className="mt-1 block text-[10px] tracking-wider text-primary">陵水外籍人士生活指南</small></span></Link>
      <nav aria-label="主导航" className="hidden items-center gap-5 text-sm font-medium lg:flex"><Link href="#guides">生活指南</Link><Link href="#resources">资源服务</Link><Link href="#services">平台服务</Link><Link href="#events">活动资讯</Link><Link href="#community">社区交流</Link></nav>
      <div className="flex items-center gap-2"><Button variant="ghost" size="sm"><Languages data-icon="inline-start" />EN</Button><Button render={<Link href="/sign-in" />} nativeButton={false} size="sm"><UserRound data-icon="inline-start" />登录</Button></div>
    </div></header>
  </>
}
