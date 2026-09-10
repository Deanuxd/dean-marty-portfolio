import { Link, useParams } from 'react-router-dom'
import { about, getAdjacentProjects, getProject } from '../data/projects'
import { MediaBlock } from '../components/MediaBlock'

export function CaseStudy() {
  const { slug = '' } = useParams()
  const project = getProject(slug)
  const { prev, next } = getAdjacentProjects(slug)

  if (!project) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-32 text-center md:px-8">
        <h1 className="font-display text-3xl text-paper">Project not found</h1>
        <Link to="/" className="mt-6 inline-block text-accent hover:text-paper">
          ← Back home
        </Link>
      </div>
    )
  }

  return (
    <article className="pb-24 pt-24 md:pb-32 md:pt-28">
      <header className="border-b border-line px-6 pb-16 md:px-8 md:pb-20">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/#work"
            className="mb-8 inline-flex text-sm text-muted transition hover:text-accent"
          >
            ← Selected work
          </Link>
          <p className="mb-4 text-xs uppercase tracking-[0.18em] text-accent">
            {project.context} · {project.year}
          </p>
          <h1 className="font-display text-[clamp(2.5rem,7vw,4.75rem)] leading-[1.05] tracking-tight text-paper">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fog md:text-xl">
            {project.outcome}
          </p>
          <dl className="mt-10 grid gap-6 sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-muted">Role</dt>
              <dd className="mt-2 text-paper">{project.role}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-muted">Focus</dt>
              <dd className="mt-2 text-paper">{project.tags.join(' · ')}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-muted">Tagline</dt>
              <dd className="mt-2 text-paper">{project.tagline}</dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mt-10 overflow-hidden bg-ink-soft md:mt-14">
          <img
            src={project.cover}
            alt={project.coverAlt}
            className="aspect-[16/9] w-full object-cover object-top"
          />
        </div>

        <section className="mt-20 grid gap-10 md:mt-28 md:grid-cols-[minmax(0,0.35fr)_minmax(0,0.65fr)] md:gap-16">
          <h2 className="font-display text-2xl text-paper md:text-3xl">Overview</h2>
          <div className="space-y-4 text-base leading-relaxed text-fog/90 md:text-lg">
            {project.overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-10 border-t border-line pt-20 md:mt-28 md:grid-cols-2 md:gap-16 md:pt-28">
          <div>
            <h2 className="font-display text-2xl text-paper md:text-3xl">Role</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-fog/90">
              {project.roleDetail.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl text-paper md:text-3xl">Constraints</h2>
            <ul className="mt-6 space-y-3 text-base leading-relaxed text-fog/90">
              {project.constraints.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {project.sections.map((section) => (
          <section
            key={section.id}
            className="mt-20 border-t border-line pt-20 md:mt-28 md:pt-28"
          >
            <div className="grid gap-10 md:grid-cols-[minmax(0,0.35fr)_minmax(0,0.65fr)] md:gap-16">
              <h2 className="font-display text-2xl text-paper md:text-3xl">{section.title}</h2>
              <div className="space-y-4 text-base leading-relaxed text-fog/90 md:text-lg">
                {section.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
            {section.media && section.media.length > 0 ? (
              <div className="mt-12 grid gap-10 md:mt-16">
                {section.media.map((item) => (
                  <MediaBlock key={`${item.src}-${item.alt}`} item={item} />
                ))}
              </div>
            ) : null}
          </section>
        ))}

        <section className="mt-20 grid gap-10 border-t border-line pt-20 md:mt-28 md:grid-cols-2 md:gap-16 md:pt-28">
          <div>
            <h2 className="font-display text-2xl text-paper md:text-3xl">Outcome</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-fog/90">
              {project.outcomeDetail.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl text-paper md:text-3xl">Learnings</h2>
            <ul className="mt-6 space-y-3 text-base leading-relaxed text-fog/90">
              {project.learnings.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-20 border-t border-line pt-20 md:mt-28 md:pt-28">
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.18em] text-muted">Next</p>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                {prev ? (
                  <Link
                    to={`/work/${prev.slug}`}
                    className="group text-paper transition hover:text-accent"
                  >
                    <span className="block text-sm text-muted group-hover:text-accent">Previous</span>
                    <span className="font-display text-2xl">{prev.title}</span>
                  </Link>
                ) : null}
                {next ? (
                  <Link
                    to={`/work/${next.slug}`}
                    className="group text-paper transition hover:text-accent"
                  >
                    <span className="block text-sm text-muted group-hover:text-accent">Next</span>
                    <span className="font-display text-2xl">{next.title}</span>
                  </Link>
                ) : null}
              </div>
            </div>
            <a
              href={`mailto:${about.email}`}
              className="inline-flex w-fit bg-accent px-6 py-3 text-sm font-medium text-ink transition hover:bg-paper"
            >
              Get in touch
            </a>
          </div>
        </section>
      </div>
    </article>
  )
}
