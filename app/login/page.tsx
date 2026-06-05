import type { Metadata } from 'next'
import LoginForm from '@/components/LoginForm'

export const metadata: Metadata = {
  title: 'Sign in',
  description: 'Sign in to your Invictus institution admin console.',
  robots: { index: false, follow: false },
}

export default function LoginPage() {
  return <LoginForm />
}
