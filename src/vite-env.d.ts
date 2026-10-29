/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PORTFOLIO_VERSION?: string
}

declare module '*.mov' {
  const src: string
  export default src
}

declare module '*.m4v' {
  const src: string
  export default src
}
