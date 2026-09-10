import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { about, getFeaturedProjects, profileImage } from '../data/projects'
import { ProjectRow } from '../components/ProjectRow'
import cubesPattern from '../assets/portfolio elements/cubes.png'

export function Home() {
  const featured = getFeaturedProjects()

  return (
    <>
      <section className="relative flex min-h-svh flex-col justify-end overflow-hidden px-6 pb-20 pt-28 md:px-8 md:pb-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 top-24 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute bottom-10 left-[-10%] h-[280px] w-[280px] rounded-full bg-paper/5 blur-3xl" />
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-y-0 right-0 w-[58%] max-w-2xl"
            style={{
              WebkitMaskImage:
                'radial-gradient(ellipse 85% 80% at 78% 42%, black 0%, rgba(0,0,0,0.85) 38%, transparent 74%)',
              maskImage:
                'radial-gradient(ellipse 85% 80% at 78% 42%, black 0%, rgba(0,0,0,0.85) 38%, transparent 74%)',
            }}
          >
            <div
              className="absolute inset-0 bg-fog/35 md:bg-fog/40"
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
              className="mb-4 text-sm uppercase tracking-[0.2em] text-accent"
            >
              {about.role}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(3.25rem,10vw,6.5rem)] leading-[0.95] tracking-tight text-paper"
            >
              {about.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-lg leading-relaxed text-fog md:text-xl"
            >
              {about.tagline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                className="inline-flex items-center bg-accent px-6 py-3 text-sm font-medium text-ink transition hover:bg-paper"
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
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-muted">Selected work</p>
            <h2 className="font-display text-3xl text-paper md:text-5xl">
              Case studies in complex, human-centered tools
            </h2>
          </div>
          <div className="flex flex-col gap-24 md:gap-32">
            {featured.map((project, index) => (
              <ProjectRow key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 border-t border-line px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16">
          <div className="overflow-hidden bg-ink-soft">
            <img
              src={profileImage}
              alt={`${about.name} portrait`}
              className="aspect-[4/5] w-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-muted">About</p>
            <h2 className="font-display text-3xl text-paper md:text-4xl">
              Designing for impact where clarity matters
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-fog/90 md:text-lg">
              {about.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
              {about.tools.map((tool) => (
                <li key={tool} className="after:ml-5 after:text-line after:content-['·'] last:after:content-none">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 border-t border-line px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-muted">Contact</p>
          <h2 className="font-display text-3xl text-paper md:text-5xl">
            Let’s build something that helps people.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-fog/90">
            Open to Product Designer roles—especially teams shipping tools with real human impact.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <a
              href={`mailto:${about.email}`}
              className="inline-flex w-fit bg-accent px-6 py-3 text-sm font-medium text-ink transition hover:bg-paper"
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
            <Link to="/work/optimo" className="text-sm text-muted transition hover:text-accent">
              Start with a case study →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
