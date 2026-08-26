import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Noto_Sans_SC, Noto_Serif_SC } from 'next/font/google'
import './globals.css'

const sans = Noto_Sans_SC({ subsets: ['latin'], variable: '--font-noto-sans' })
const serif = Noto_Serif_SC({ subsets: ['latin'], variable: '--font-noto-serif' })

export const metadata: Metadata = { title: { default: 'Lingshui Expats | Living Guide for International Residents', template: '%s | Lingshui Expats' }, description: 'Practical living guides, trusted resources, and community connections for international residents in Lingshui, Hainan.' }
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f6f8f5', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-background"><body className={`${sans.variable} ${serif.variable} font-sans antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
