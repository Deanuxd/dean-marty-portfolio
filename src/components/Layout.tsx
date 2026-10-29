import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { usePortfolioVersion } from '../hooks/usePortfolioVersion'

export function Layout() {
  const location = useLocation()
  const version = usePortfolioVersion()

  useEffect(() => {
    document.title = version.documentTitle
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', `${version.role} — ${version.tagline}`)
  }, [version.documentTitle, version.role, version.tagline])

  return (
    <div className="atmosphere grain min-h-svh">
      <div className="relative z-10 flex min-h-svh flex-col">
        <Nav />
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            className="flex-1"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  )
}
