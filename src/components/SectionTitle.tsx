import { Motif } from './Motif'

type Props = {
  children: React.ReactNode
  className?: string
  motifSize?: 'md' | 'lg' | 'xl'
}

/**
 * Display heading with the open (wireframe) motif —
 * same DNA as the solid mark, different silhouette for section titles.
 */
export function SectionTitle({ children, className = '', motifSize = 'xl' }: Props) {
  return (
    <h2
      className={`flex items-start gap-3 font-display italic text-paper md:gap-4 ${className}`}
    >
      <Motif
        variant="open"
        size={motifSize}
        className="mt-[0.35em] opacity-90"
      />
      <span className="min-w-0">{children}</span>
    </h2>
  )
}
