import "tailwindcss/tailwind.css"
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

import { trpc } from '../utils/trpc';

export default trpc.withTRPC(MyApp);