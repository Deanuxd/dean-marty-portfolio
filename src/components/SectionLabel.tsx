type Props = {
  children: React.ReactNode
  tone?: 'muted' | 'accent'
  className?: string
}

/** Small uppercase eyebrow — no motif; titles carry the open mark instead. */
export function SectionLabel({ children, tone = 'muted', className = '' }: Props) {
  const color = tone === 'accent' ? 'text-accent' : 'text-muted'

  return (
    <p className={`mb-3 text-xs uppercase tracking-[0.18em] ${color} ${className}`}>
      {children}
    </p>
  )
}
