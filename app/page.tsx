import { PortalHome } from '@/components/portal-home'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { getLocale } from '@/lib/locale'

export default async function Page() {
  const locale = await getLocale()
  return <><SiteHeader locale={locale} /><main><PortalHome locale={locale} /></main><SiteFooter locale={locale} /></>
}
