import { boolean, integer, pgTable, serial, text, timestamp, unique } from 'drizzle-orm/pg-core'

export const user = pgTable('user', {
  id: text('id').primaryKey(), name: text('name').notNull(), email: text('email').notNull().unique(),
  emailVerified: boolean('emailVerified').notNull().default(false), image: text('image'),
  createdAt: timestamp('createdAt').notNull().defaultNow(), updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})
export const session = pgTable('session', {
  id: text('id').primaryKey(), expiresAt: timestamp('expiresAt').notNull(), token: text('token').notNull().unique(),
  createdAt: timestamp('createdAt').notNull().defaultNow(), updatedAt: timestamp('updatedAt').notNull().defaultNow(),
  ipAddress: text('ipAddress'), userAgent: text('userAgent'), userId: text('userId').notNull().references(() => user.id, { onDelete: 'cascade' }),
})
export const account = pgTable('account', {
  id: text('id').primaryKey(), accountId: text('accountId').notNull(), providerId: text('providerId').notNull(),
  userId: text('userId').notNull().references(() => user.id, { onDelete: 'cascade' }), accessToken: text('accessToken'),
  refreshToken: text('refreshToken'), idToken: text('idToken'), accessTokenExpiresAt: timestamp('accessTokenExpiresAt'),
  refreshTokenExpiresAt: timestamp('refreshTokenExpiresAt'), scope: text('scope'), password: text('password'),
  createdAt: timestamp('createdAt').notNull().defaultNow(), updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})
export const verification = pgTable('verification', {
  id: text('id').primaryKey(), identifier: text('identifier').notNull(), value: text('value').notNull(),
  expiresAt: timestamp('expiresAt').notNull(), createdAt: timestamp('createdAt').notNull().defaultNow(), updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})
export const categories = pgTable('categories', {
  id: serial('id').primaryKey(), slug: text('slug').notNull().unique(), nameZh: text('nameZh').notNull(), nameEn: text('nameEn').notNull(),
  descriptionZh: text('descriptionZh').notNull(), descriptionEn: text('descriptionEn').notNull(), icon: text('icon').notNull(), sortOrder: integer('sortOrder').notNull().default(0), createdAt: timestamp('createdAt').notNull().defaultNow(),
})
export const contentItems = pgTable('content_items', {
  id: serial('id').primaryKey(), slug: text('slug').notNull().unique(), categoryId: integer('categoryId').notNull(), status: text('status').notNull().default('draft'), featured: boolean('featured').notNull().default(false), publishedAt: timestamp('publishedAt'), createdAt: timestamp('createdAt').notNull().defaultNow(), updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})
export const contentTranslations = pgTable('content_translations', {
  id: serial('id').primaryKey(), contentId: integer('contentId').notNull(), locale: text('locale').notNull(), title: text('title').notNull(), summary: text('summary').notNull(), body: text('body').notNull(), updatedAt: timestamp('updatedAt').notNull().defaultNow(),
}, (t) => [unique().on(t.contentId, t.locale)])
export const serviceRequests = pgTable('service_requests', {
  id: serial('id').primaryKey(), userId: text('userId').notNull(), categoryId: integer('categoryId').notNull(), subject: text('subject').notNull(), description: text('description').notNull(), contact: text('contact').notNull(), status: text('status').notNull().default('submitted'), createdAt: timestamp('createdAt').notNull().defaultNow(), updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})
export const userProfiles = pgTable('user_profiles', {
  id: serial('id').primaryKey(), userId: text('userId').notNull().unique(), role: text('role').notNull().default('resident'), preferredLocale: text('preferredLocale').notNull().default('zh'), createdAt: timestamp('createdAt').notNull().defaultNow(), updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})
