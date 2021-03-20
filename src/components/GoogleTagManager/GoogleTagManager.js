import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '@/lib/gtag'

const GoogleTagManager = ({ children }) => {
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeComplete', gtag.pageview)
    return () => router.events.off('routeChangeComplete', gtag.pageview)
  }, [router.events])

  return children
}

export default GoogleTagManager