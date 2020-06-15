import { useEffect } from 'react'
import Router from 'next/router'

declare global {
  interface Window {
    gtag: UniversalAnalytics.ga
  }
}

export default function useAnalytics(trackingId: string) {
  function pageview(path) {
    if (!window.gtag) return
    const { gtag } = window
    gtag('config', trackingId, { page_path: path })
  }

  useEffect(() => {
    if (navigator?.doNotTrack === '1') {
      return
    }
    const handleRouteChange = (path) => {
      pageview(path)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])
}
