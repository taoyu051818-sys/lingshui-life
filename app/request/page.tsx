import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'
import { RequestForm } from '@/components/request-form'
import { SiteHeader } from '@/components/site-header'

export default async function RequestPage(){const session=await auth.api.getSession({headers:await headers()});if(!session?.user)redirect('/sign-in');return <><SiteHeader/><main className="mx-auto grid max-w-5xl gap-10 px-4 py-12 md:grid-cols-[.7fr_1.3fr] md:px-6"><div><p className="text-sm font-semibold text-primary">Personal support</p><h1 className="mt-2 text-balance font-serif text-4xl font-semibold">Submit a Service Request</h1><p className="mt-4 leading-relaxed text-muted-foreground">Please describe your needs as fully as possible. A member of our team will contact you using the details you provide after your request is reviewed.</p></div><section className="rounded-2xl border bg-card p-6 md:p-8"><RequestForm/></section></main></>}
