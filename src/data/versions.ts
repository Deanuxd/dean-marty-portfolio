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
    aboutHeading: 'I care about the people using it, and the business shipping it',
    bio: about.bio,
    tools: about.tools,
    contactHeading: 'Let’s build something that helps people.',
    contactBody:
      'Open to Product Designer roles—especially teams who care about users and about shipping something real.',
    footerLine: 'Product Designer · For the people using it, and the business behind it',
    firstCaseSlug: 'optimo',
  },
  web: {
    id: 'web',
    documentTitle: 'Dean Marty — Web Designer',
    role: 'Web Designer',
    tagline:
      'I design websites people enjoy using, and that help a business show up clearly.',
    workHeading: 'Selected work in sites and landing experiences',
    aboutHeading: 'Creative work that still has a job to do',
    bio: [
      'I’m a creative person who cares about both sides of a website: how it feels for the people using it, and whether it actually helps the business.',
      'At Foxconn iAI I redesigned the company site. On my own I make work like Tiger Chai in Figma—and Wix when that’s the right tool—to keep pushing on brand, atmosphere, and a clear next step.',
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
      'If you’re looking for a web designer who cares about craft and about results, I’d like to talk.',
    footerLine: 'Web Designer · Sites, landings, and prototypes',
    firstCaseSlug: 'tiger-chai',
  },
}

export function resolvePortfolioVersion(): VersionId {
  return import.meta.env.VITE_PORTFOLIO_VERSION === 'web' ? 'web' : 'product'
}
