import Link from 'next/link'
import { Compass, Languages, UserRound } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function SiteHeader() {
  return <header className="border-b bg-background/95">
    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
      <Link href="/" className="flex items-center gap-3 font-semibold"><span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Compass aria-hidden="true" /></span><span>陵水生活通</span></Link>
      <nav aria-label="主导航" className="hidden items-center gap-6 text-sm md:flex"><Link href="#services">生活服务</Link><Link href="#guides">办事指南</Link><Link href="#events">近期活动</Link><Link href="/account">我的申请</Link></nav>
      <div className="flex items-center gap-2"><Button variant="ghost" size="sm"><Languages data-icon="inline-start" />EN</Button><Button render={<Link href="/sign-in" />} nativeButton={false} size="sm"><UserRound data-icon="inline-start" />登录</Button></div>
    </div>
  </header>
}
