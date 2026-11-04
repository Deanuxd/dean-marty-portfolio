import { Motif } from './Motif'

type Props = {
  children: React.ReactNode
  label?: string
  className?: string
}

/**
 * Atmospheric highlight band — large open motif as watermark,
 * coral/aqua wash, no card chrome.
 */
export function HighlightCallout({ children, label = 'Highlight', className = '' }: Props) {
  return (
    <aside
      className={`relative isolate overflow-hidden border-y border-line ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 90% at 100% 50%, rgba(255, 107, 69, 0.14), transparent 55%), radial-gradient(ellipse 50% 80% at 0% 80%, rgba(62, 207, 207, 0.08), transparent 50%), #1a1614',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-4 top-1/2 -translate-y-1/2 opacity-[0.14] md:-right-2 md:opacity-[0.18]"
        aria-hidden="true"
      >
        <Motif variant="open" size="watermark" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-12 md:px-8 md:py-16">
        <p className="mb-4 text-xs uppercase tracking-[0.18em] text-accent">{label}</p>
        <div className="max-w-2xl font-display text-xl italic leading-snug text-paper md:text-2xl md:leading-snug">
          {children}
        </div>
      </div>
    </aside>
  )
}
