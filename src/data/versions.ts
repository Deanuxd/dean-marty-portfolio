import { about, type PortfolioVersionId } from './projects'

export type VersionId = PortfolioVersionId

export type VersionConfig = {
  id: VersionId
  documentTitle: string
  role: string
  tagline: string
  workHeading: string
  aboutHeading: string
  bio: string[]
  tools: string[]
  contactHeading: string
  contactBody: string
  footerLine: string
  firstCaseSlug: string
}

export const versions: Record<VersionId, VersionConfig> = {
  product: {
    id: 'product',
    documentTitle: 'Dean Marty — Product Designer',
    role: about.role,
    tagline: about.tagline,
    workHeading: 'Case studies in complex, human-centered tools',
    aboutHeading: 'Designing for impact where clarity matters',
    bio: about.bio,
    tools: about.tools,
    contactHeading: 'Let’s build something that helps people.',
    contactBody:
      'Open to Product Designer roles—especially teams shipping tools with real human impact.',
    footerLine: 'Product Designer · Designing tools that help people work better',
    firstCaseSlug: 'optimo',
  },
  web: {
    id: 'web',
    documentTitle: 'Dean Marty — Web Designer',
    role: 'Web Designer',
    tagline:
      'Web designer for crafted sites and landing pages—atmosphere, hierarchy, and prototypes that feel alive.',
    workHeading: 'Selected work in sites and landing experiences',
    aboutHeading: 'Designing the web so it feels considered',
    bio: [
      'I design websites and landing experiences with a focus on hierarchy, responsiveness, and craft.',
      'At Foxconn iAI I redesigned the company site. I also make independent web work in Figma and Wix to show how a brand can feel on the live web.',
    ],
    tools: [
      'Figma',
      'Wix',
      'Prototyping',
      'Visual design',
      'Responsive web',
      'HTML/CSS',
    ],
    contactHeading: 'Let’s design a site people want to open.',
    contactBody:
      'Open to Web Designer roles—visual craft, responsive layout, and prototypes for the live web.',
    footerLine: 'Web Designer · Sites, landings, and prototypes',
    firstCaseSlug: 'tiger-chai',
  },
}

export function resolvePortfolioVersion(): VersionId {
  return import.meta.env.VITE_PORTFOLIO_VERSION === 'web' ? 'web' : 'product'
}
