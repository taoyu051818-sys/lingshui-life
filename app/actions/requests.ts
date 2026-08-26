'use server'

import { z } from 'zod'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { serviceRequests } from '@/lib/db/schema'

const schema=z.object({categoryId:z.coerce.number().int().positive(),subject:z.string().trim().min(3).max(120),description:z.string().trim().min(10).max(3000),contact:z.string().trim().min(3).max(120)})
export async function createServiceRequest(formData:FormData){const session=await auth.api.getSession({headers:await headers()});if(!session?.user)redirect('/sign-in');const parsed=schema.safeParse(Object.fromEntries(formData));if(!parsed.success)throw new Error('提交内容不完整');await db.insert(serviceRequests).values({...parsed.data,userId:session.user.id});revalidatePath('/account');redirect('/account?created=1')}
