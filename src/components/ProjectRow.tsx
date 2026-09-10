import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Project } from '../data/projects'

type Props = {
  project: Project
  index: number
}

export function ProjectRow({ project, index }: Props) {
  const reverse = index % 2 === 1

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
      <Link
        to={`/work/${project.slug}`}
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
      </Link>
      <div className="flex w-full flex-col gap-4 md:w-[42%]">
        <p className="text-xs uppercase tracking-[0.18em] text-muted">
          {project.context} · {project.year}
        </p>
        <h3 className="font-display text-3xl text-paper md:text-4xl">{project.title}</h3>
        <p className="max-w-md text-base leading-relaxed text-fog/90">{project.tagline}</p>
        <Link
          to={`/work/${project.slug}`}
          className="mt-2 inline-flex w-fit items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-paper"
        >
          View case study
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </motion.article>
  )
}
