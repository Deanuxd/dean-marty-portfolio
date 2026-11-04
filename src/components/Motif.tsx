type MotifProps = {
  className?: string
  /** sm: labels · md: nav/footer · lg: hero · xl: section titles · watermark: highlight BG */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'watermark'
  /**
   * solid — filled cube (nav, labels, footer)
   * open — wireframe cube (section titles)
   * fan — three faces fanned out (optional flourish)
   */
  variant?: 'solid' | 'open' | 'fan'
}

const sizes = {
  sm: 'h-3 w-3.5',
  md: 'h-4 w-5',
  lg: 'h-5 w-6',
  xl: 'h-7 w-8 md:h-8 md:w-9',
  watermark: 'h-40 w-48 md:h-52 md:w-60',
} as const

/**
 * Signature isometric mark — three rhombus faces in coral / aqua / gold.
 */
export function Motif({ className = '', size = 'sm', variant = 'solid' }: MotifProps) {
  if (variant === 'fan') {
    return (
      <svg
        className={`${sizes[size]} shrink-0 ${className}`}
        viewBox="0 0 44 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M7 3 L13 6.5 L7 10 L1 6.5 Z" fill="#ffd56a" />
        <path d="M22 5 L28 8.5 L22 12 L16 8.5 Z" fill="#ff6b45" />
        <path d="M37 7 L43 10.5 L37 14 L31 10.5 Z" fill="#3ecfcf" />
      </svg>
    )
  }

  if (variant === 'open') {
    return (
      <svg
        className={`${sizes[size]} shrink-0 ${className}`}
        viewBox="0 0 28 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer silhouette */}
        <path
          d="M14 1.5 L26 8.5 L26 15.5 L14 22.5 L2 15.5 L2 8.5 Z"
          stroke="#ff6b45"
          strokeWidth="1.35"
          strokeLinejoin="round"
        />
        {/* Center ridge down */}
        <path d="M14 1.5 L14 22.5" stroke="#ffd56a" strokeWidth="1.35" strokeLinecap="round" />
        {/* Mid horizontal split */}
        <path
          d="M2 8.5 L14 15.5 L26 8.5"
          stroke="#3ecfcf"
          strokeWidth="1.35"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    )
  }

  return (
    <svg
      className={`${sizes[size]} shrink-0 ${className}`}
      viewBox="0 0 28 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M14 1.5 L26 8.5 L14 15.5 L2 8.5 Z" fill="#ffd56a" />
      <path d="M2 8.5 L14 15.5 L14 22.5 L2 15.5 Z" fill="#ff6b45" />
      <path d="M14 15.5 L26 8.5 L26 15.5 L14 22.5 Z" fill="#3ecfcf" />
    </svg>
  )
}
