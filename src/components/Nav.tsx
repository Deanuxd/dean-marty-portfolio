import { Link } from 'react-router-dom'
import { about } from '../data/projects'

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-8">
        <Link
          to="/"
          className="font-display text-lg tracking-tight text-paper transition-colors hover:text-accent"
        >
          {about.name}
        </Link>
        <nav className="flex items-center gap-6 md:gap-8">
          <Link
            to="/#work"
            className="text-sm tracking-wide text-muted transition-colors hover:text-paper"
          >
            Work
          </Link>
          <Link
            to="/#about"
            className="text-sm tracking-wide text-muted transition-colors hover:text-paper"
          >
            About
          </Link>
          <Link
            to="/#contact"
            className="text-sm font-medium tracking-wide text-accent transition-colors hover:text-paper"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
