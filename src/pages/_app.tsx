import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthenticationProvider } from '../contexts/useAuthentication';

function Hammerbeam({ Component, pageProps }: AppProps) {    
  return (
    <AuthenticationProvider>
      <Component {...pageProps} />
    </AuthenticationProvider>    
  )
}

export default Hammerbeam