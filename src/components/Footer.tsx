import { about } from '../data/projects'
import { usePortfolioVersion } from '../hooks/usePortfolioVersion'

export function Footer() {
  const version = usePortfolioVersion()

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="font-display text-paper">{about.name}</p>
        <p className="text-sm text-muted">{version.footerLine}</p>
        <div className="flex gap-5 text-sm text-muted">
          <a className="hover:text-accent" href={`mailto:${about.email}`}>
            Email
          </a>
          <a className="hover:text-accent" href={about.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
