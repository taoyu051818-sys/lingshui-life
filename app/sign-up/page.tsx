import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { AuthForm } from '@/components/auth-form'
import { auth } from '@/lib/auth'

export default async function SignUp(){const session=await auth.api.getSession({headers:await headers()});if(session?.user)redirect('/account');return <main className="flex min-h-screen items-center justify-center bg-secondary px-4"><section className="w-full max-w-md rounded-2xl border bg-card p-8 shadow-sm"><p className="text-sm font-semibold text-primary">Lingshui Expats</p><h1 className="mt-2 font-serif text-3xl font-semibold">Create your account</h1><p className="mb-8 mt-2 text-muted-foreground">Register with your email to submit and track service requests.</p><AuthForm mode="sign-up"/></section></main>}
