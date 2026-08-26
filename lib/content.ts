import { and, asc, eq, ilike, or } from 'drizzle-orm'
import { db } from '@/lib/db'
import { categories, contentItems, contentTranslations } from '@/lib/db/schema'
import type { Locale } from '@/lib/locale'

export async function getCategories(locale: Locale) {
  const rows = await db.select().from(categories).orderBy(asc(categories.sortOrder))
  return rows.map((row) => ({ ...row, name: locale === 'zh-CN' ? row.nameZh : row.nameEn, description: locale === 'zh-CN' ? row.descriptionZh : row.descriptionEn }))
}

export async function searchContent(query: string, locale: Locale) {
  const normalized = query.trim()
  const localeKey = locale === 'zh-CN' ? 'zh' : 'en'
  const conditions = [eq(contentItems.status, 'published'), eq(contentTranslations.locale, localeKey)]
  if (normalized) conditions.push(or(ilike(contentTranslations.title, `%${normalized}%`), ilike(contentTranslations.summary, `%${normalized}%`), ilike(contentTranslations.body, `%${normalized}%`))!)
  return db.select({ id: contentItems.id, slug: contentItems.slug, title: contentTranslations.title, summary: contentTranslations.summary, categoryId: contentItems.categoryId }).from(contentItems).innerJoin(contentTranslations, eq(contentTranslations.contentId, contentItems.id)).where(and(...conditions)).orderBy(contentItems.publishedAt)
}

export async function getContentBySlug(slug: string, locale: Locale) {
  const localeKey = locale === 'zh-CN' ? 'zh' : 'en'
  const [row] = await db.select({ id: contentItems.id, slug: contentItems.slug, title: contentTranslations.title, summary: contentTranslations.summary, body: contentTranslations.body, updatedAt: contentTranslations.updatedAt }).from(contentItems).innerJoin(contentTranslations, eq(contentTranslations.contentId, contentItems.id)).where(and(eq(contentItems.slug, slug), eq(contentItems.status, 'published'), eq(contentTranslations.locale, localeKey))).limit(1)
  return row ?? null
}
