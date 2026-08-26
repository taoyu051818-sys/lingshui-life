'use client'

import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { Languages } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Locale } from '@/lib/locale'

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const router = useRouter()
  const [pending, startTransition] = useTransition()
  const chinese = locale === 'zh-CN'

  function toggleLocale() {
    const nextLocale = chinese ? 'en' : 'zh-CN'
    document.cookie = `lingshui-locale=${nextLocale}; path=/; max-age=31536000; samesite=lax`
    document.documentElement.lang = nextLocale
    startTransition(() => router.refresh())
  }

  return (
    <Button variant="ghost" size="sm" onClick={toggleLocale} disabled={pending} aria-label={chinese ? 'Switch to English' : '切换到中文'} aria-pressed={chinese}>
      <Languages data-icon="inline-start" />
      {pending ? '…' : chinese ? 'EN' : '中文'}
    </Button>
  )
}
