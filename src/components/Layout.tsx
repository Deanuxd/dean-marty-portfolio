import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Nav } from './Nav'
import { Footer } from './Footer'

export function Layout() {
  const location = useLocation()

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
