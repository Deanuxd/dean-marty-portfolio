import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scroll to hash targets after client-side navigation (e.g. /#work). */
export function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    const id = hash.replace('#', '')
    const frame = requestAnimationFrame(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })

    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}
