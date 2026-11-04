import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { about, getFeaturedProjects } from '../data/projects'
import { ProjectRow } from '../components/ProjectRow'
import { HeroMesh } from '../components/HeroMesh'
import { Motif } from '../components/Motif'
import { SectionLabel } from '../components/SectionLabel'
import { SectionTitle } from '../components/SectionTitle'
import { usePortfolioVersion } from '../hooks/usePortfolioVersion'
import cubesPattern from '../assets/portfolio elements/cubes.png'

export function Home() {
  const version = usePortfolioVersion()
  const featured = getFeaturedProjects(version.id)

  return (
    <>
      <section className="relative flex min-h-svh flex-col justify-end overflow-hidden px-6 pb-20 pt-28 md:px-8 md:pb-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <HeroMesh />
          </motion.div>
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-y-0 right-0 w-[50%] max-w-xl"
            style={{
              WebkitMaskImage:
                'radial-gradient(ellipse 85% 80% at 78% 42%, black 0%, rgba(0,0,0,0.75) 38%, transparent 74%)',
              maskImage:
                'radial-gradient(ellipse 85% 80% at 78% 42%, black 0%, rgba(0,0,0,0.75) 38%, transparent 74%)',
            }}
          >
            <div
              className="absolute inset-0 bg-pop/35 md:bg-pop/40"
              style={{
                WebkitMaskImage: `url(${cubesPattern})`,
                maskImage: `url(${cubesPattern})`,
                WebkitMaskRepeat: 'repeat',
                maskRepeat: 'repeat',
                WebkitMaskSize: '67px 100px',
                maskSize: '67px 100px',
                WebkitMaskPosition: 'center top',
                maskPosition: 'center top',
              }}
            />
          </motion.div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <div className="max-w-xl lg:max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-4 inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-accent"
            >
              <Motif size="lg" />
              {version.role}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(3.25rem,10vw,6.5rem)] leading-[0.95] tracking-tight text-paper italic"
            >
              {about.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-lg leading-relaxed text-fog md:text-xl"
            >
              {version.tagline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                className="inline-flex items-center bg-accent px-6 py-3 text-sm font-semibold text-ink shadow-[0_0_40px_-8px_rgba(255,107,69,0.7)] transition hover:bg-paper hover:shadow-[0_0_48px_-6px_rgba(255,107,69,0.85)]"
              >
                View work
              </a>
              <a
                href={`mailto:${about.email}`}
                className="inline-flex items-center border border-line px-6 py-3 text-sm font-medium text-paper transition hover:border-accent hover:text-accent"
              >
                Email me
              </a>
              <a
                href={about.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted transition hover:text-paper"
              >
                LinkedIn
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-20 border-t border-line px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-2xl md:mb-20">
            <SectionLabel>Selected work</SectionLabel>
            <SectionTitle className="text-3xl md:text-5xl">
              {version.workHeading}
            </SectionTitle>
          </div>
          <div className="flex flex-col gap-24 md:gap-32">
            {featured.map((project, index) => (
              <ProjectRow
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 border-t border-line px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-20">
          <div>
            <SectionLabel>About</SectionLabel>
            <SectionTitle className="text-3xl md:text-4xl">
              {version.aboutHeading}
            </SectionTitle>
            <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-fog/90 md:text-lg">
              {version.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div>
            <SectionLabel tone="accent" className="mb-6 inline-flex items-center gap-2.5">
              <Motif size="sm" />
              Skills
            </SectionLabel>
            <ul className="grid grid-cols-1 gap-px sm:grid-cols-2">
              {version.tools.map((tool) => (
                <li
                  key={tool}
                  className="border-t border-line py-4 font-display text-2xl tracking-tight text-paper md:text-[1.65rem]"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 border-t border-line px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Contact</SectionLabel>
          <SectionTitle className="text-3xl md:text-5xl">
            {version.contactHeading}
          </SectionTitle>
          <p className="mt-5 max-w-xl text-lg text-fog/90">{version.contactBody}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <a
              href={`mailto:${about.email}`}
              className="inline-flex w-fit bg-accent px-6 py-3 text-sm font-semibold text-ink shadow-[0_0_36px_-8px_rgba(255,107,69,0.65)] transition hover:bg-paper"
            >
              {about.email}
            </a>
            <a
              href={about.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted transition hover:text-accent"
            >
              LinkedIn
            </a>
            <Link
              to={`/work/${version.firstCaseSlug}`}
              className="text-sm text-muted transition hover:text-accent"
            >
              Start with a case study →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
