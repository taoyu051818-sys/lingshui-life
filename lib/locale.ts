import { cookies } from 'next/headers'

export type Locale = 'en' | 'zh-CN'

export async function getLocale(): Promise<Locale> {
  const store = await cookies()
  return store.get('lingshui-locale')?.value === 'zh-CN' ? 'zh-CN' : 'en'
}

export function isChinese(locale: Locale) {
  return locale === 'zh-CN'
}
