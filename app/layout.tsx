import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Noto_Sans_SC, Noto_Serif_SC } from 'next/font/google'
import './globals.css'

const sans = Noto_Sans_SC({ subsets: ['latin'], variable: '--font-noto-sans' })
const serif = Noto_Serif_SC({ subsets: ['latin'], variable: '--font-noto-serif' })

export const metadata: Metadata = { title: { default: '陵水生活通', template: '%s｜陵水生活通' }, description: '为陵水国际居民提供清晰可信的双语生活服务、办事指南与在线申请。' }
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f6f8f5', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN" className="bg-background"><body className={`${sans.variable} ${serif.variable} font-sans antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
