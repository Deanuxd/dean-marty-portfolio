/**
 * High-contrast animated gradient mesh for the hero.
 * Hot coral + gold + aqua for a creative "pop" on dark ink.
 */
export function HeroMesh() {
  return (
    <div className="hero-mesh pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="heroGrad1" cx="50%" cy="50%" fx="10%" fy="50%" r=".65">
            <animate attributeName="fx" dur="28s" values="0%;40%;0%" repeatCount="indefinite" />
            <stop offset="0%" stopColor="#ffd56a" stopOpacity="1" />
            <stop offset="55%" stopColor="#ffd56a" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ffd56a" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="heroGrad2" cx="50%" cy="50%" fx="10%" fy="50%" r=".7">
            <animate attributeName="fx" dur="19s" values="0%;45%;0%" repeatCount="indefinite" />
            <stop offset="0%" stopColor="#ff6b45" stopOpacity="1" />
            <stop offset="50%" stopColor="#ff6b45" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#ff6b45" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="heroGrad3" cx="50%" cy="50%" fx="50%" fy="50%" r=".6">
            <animate attributeName="fx" dur="22s" values="0%;35%;0%" repeatCount="indefinite" />
            <stop offset="0%" stopColor="#3ecfcf" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#3ecfcf" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#3ecfcf" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#heroGrad1)">
          <animate attributeName="x" dur="16s" values="20%;-5%;20%" repeatCount="indefinite" />
          <animate attributeName="y" dur="18s" values="-5%;20%;-5%" repeatCount="indefinite" />
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="14s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#heroGrad2)">
          <animate attributeName="x" dur="18s" values="-20%;5%;-20%" repeatCount="indefinite" />
          <animate attributeName="y" dur="20s" values="5%;40%;5%" repeatCount="indefinite" />
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="15s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#heroGrad3)">
          <animate attributeName="x" dur="21s" values="5%;25%;5%" repeatCount="indefinite" />
          <animate attributeName="y" dur="17s" values="15%;-10%;15%" repeatCount="indefinite" />
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="360 50 50"
            to="0 50 50"
            dur="16s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
      {/* Lighter scrim — let color show, keep type readable on the left */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/40" />
    </div>
  )
}
