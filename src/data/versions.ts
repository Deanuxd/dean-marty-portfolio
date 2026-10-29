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
    tagline:
      'I design tools that feel good to use, and that help the people and the business behind them.',
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
    tagline: about.tagline,
    workHeading: 'Selected work in sites and landing experiences',
    aboutHeading: 'Passionate about people, dedicated to results.',
    bio: [
      'I’ve always believed that great web design sits at the intersection of empathy and strategy. My goal isn’t just to build websites that look great—it’s to create meaningful digital experiences that visitors actually enjoy using and that help businesses reach their full potential.',
      'I bring a positive, collaborative energy to every project, whether I’m sketching initial wireframes, translating complex business goals into clean user flows, or diving into code. I view every design challenge as an opportunity to solve problems creatively and make the web a little more thoughtful, accessible, and engaging.',
    ],
    tools: [
      'Figma',
      'Wix',
      'Prototyping',
      'Visual design',
      'Responsive web',
      'HTML/CSS',
    ],
    contactHeading: 'Ready to build a web experience that delivers real results?',
    contactBody:
      'I’m currently available for new projects and collaborations. Send me a message about your goals, and let’s explore how we can work together.',
    footerLine: 'Web Designer · Sites, landings, and prototypes',
    firstCaseSlug: 'tiger-chai',
  },
}

export function resolvePortfolioVersion(): VersionId {
  return import.meta.env.VITE_PORTFOLIO_VERSION === 'web' ? 'web' : 'product'
}
