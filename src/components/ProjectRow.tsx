import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Project } from '../data/projects'

type Props = {
  project: Project
  index: number
}

export function ProjectRow({ project, index }: Props) {
  const reverse = index % 2 === 1
  const href = `/work/${project.slug}`
  const cover = project.prototypeUrl ? (
    <a
      href={project.prototypeUrl}
      target="_blank"
      rel="noreferrer"
      className="group relative block w-full overflow-hidden md:w-[58%]"
    >
      <div className="overflow-hidden bg-ink-soft">
        <img
          src={project.cover}
          alt={project.coverAlt}
          className="aspect-[16/10] w-full object-cover object-top transition duration-700 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 bg-accent px-4 py-2 text-sm font-medium text-ink">
        Open prototype
        <span aria-hidden="true">↗</span>
      </span>
    </a>
  ) : (
    <Link to={href} className="group relative block w-full overflow-hidden md:w-[58%]">
      <div className="overflow-hidden bg-ink-soft">
        <img
          src={project.cover}
          alt={project.coverAlt}
          className="aspect-[16/10] w-full object-cover object-top transition duration-700 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
    </Link>
  )

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-8 md:items-center md:gap-12 ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
    >
      {cover}
      <div className="flex w-full flex-col gap-4 md:w-[42%]">
        <p className="text-xs uppercase tracking-[0.18em] text-muted">
          {project.context} · {project.year}
        </p>
        <h3 className="font-display text-3xl text-paper md:text-4xl">{project.title}</h3>
        <p className="max-w-md text-base leading-relaxed text-fog/90">{project.tagline}</p>
        <div className="mt-2 flex flex-wrap items-center gap-5">
          {project.prototypeUrl ? (
            <a
              href={project.prototypeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-paper"
            >
              Open prototype
              <span aria-hidden="true">↗</span>
            </a>
          ) : null}
          <Link
            to={href}
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-paper"
          >
            View case study
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
