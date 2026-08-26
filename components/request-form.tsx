'use client'

import { useFormStatus } from 'react-dom'
import { createServiceRequest } from '@/app/actions/requests'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import type { Locale } from '@/lib/locale'

type Category = { id: number; name: string }

export function RequestForm({ categories, locale }: { categories: Category[]; locale: Locale }) {
  const zh = locale === 'zh-CN'
  return <form action={createServiceRequest} className="flex flex-col gap-5"><div className="flex flex-col gap-2"><Label htmlFor="categoryId">{zh ? '服务类别' : 'Service category'}</Label><select id="categoryId" name="categoryId" required defaultValue="" className="h-10 rounded-md border bg-background px-3 text-sm"><option value="" disabled>{zh ? '请选择类别' : 'Select a category'}</option>{categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}</select></div><div className="flex flex-col gap-2"><Label htmlFor="subject">{zh ? '需求主题' : 'Request subject'}</Label><Input id="subject" name="subject" minLength={3} maxLength={120} required placeholder={zh ? '简要描述你需要的帮助' : 'Briefly describe the help you need'}/></div><div className="flex flex-col gap-2"><Label htmlFor="description">{zh ? '详细说明' : 'Details'}</Label><Textarea id="description" name="description" minLength={10} maxLength={3000} required rows={7} placeholder={zh ? '描述你的情况、所需支持和相关期限' : 'Describe your situation, the support you need, and any relevant deadlines'}/></div><div className="flex flex-col gap-2"><Label htmlFor="contact">{zh ? '联系方式' : 'Contact details'}</Label><Input id="contact" name="contact" required minLength={3} maxLength={120} placeholder={zh ? '电话号码或其他方便联系你的方式' : 'Phone number or another convenient way to reach you'}/></div><SubmitButton zh={zh}/></form>
}

function SubmitButton({ zh }: { zh: boolean }) {
  const { pending } = useFormStatus()
  return <Button type="submit" disabled={pending} aria-disabled={pending}>{pending ? (zh ? '提交中…' : 'Submitting…') : (zh ? '提交需求' : 'Submit request')}</Button>
}
