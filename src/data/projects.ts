// Optimo
import optimoDashboard from '../assets/brainstorming/Optimo/Optimo_ProductDashboard.png'
import optimoWorkflow from '../assets/brainstorming/Optimo/Optimo_WorkflowConcept.png'
import optimoWorkflow2 from '../assets/brainstorming/Optimo/Optimo_WorkflowConcept2.png'
import optimoLiveDashboard from '../assets/prototype screenshots/Optimo/LiveDashboard.png'
import optimoChatClosed from '../assets/full mockups/Optimo/ai-chat_closed.png'
import annotator from '../assets/component design/Optimo/Annotator_Tool.png'
import annotatorDemo from '../assets/component design/Optimo/Annotator_Tool_Demo.mov'
import liveAnnotator from '../assets/component design/Optimo/Live_Annotator_MU.png'
import confirmationModal from '../assets/component design/Optimo/Confirmation_Modal_MU.png'
import optionsMenu from '../assets/component design/Optimo/Options_Menu_MU.png'

// Illumake
import illumakeFlows from '../assets/brainstorming/Illumake/User_Flows_Illumake.png'
import illumakeFlows2 from '../assets/brainstorming/Illumake/User_Flows_Illumake2.png'
import operatorTraining from '../assets/brainstorming/Illumake/Operator_Training.png'
import operatorTraining2 from '../assets/brainstorming/Illumake/Operator_Training2.png'
import illumakeComposerCover from '../assets/prototype screenshots/Illumake/Illumake_Composer_MU.png'
import illumakeComposer from '../assets/prototype demos/Illumake/Illu-Composer.mp4'

// RAG Workspace (Internal Tool)
import ragCover from '../assets/prototype screenshots/RAG Workspace (Internal Tool)/RAG_Workspace_App.png'
import ragDemo from '../assets/prototype demos/RAG Workspace (Internal Tool)/RAG_Workspace_Proto_Demo.m4v'

// iAI Website
import iaiCover from '../assets/live website capture/iAI Website/iAI_Landing_Website.png'
import iaiMobile from '../assets/live website capture/iAI Website/iAI_Landing_Mobile.png'
import iaiDemo from '../assets/prototype demos/iAI Website/iAI Landing demo.mp4'

// Tiger Chai
import tigerChaiCover from '../assets/prototype screenshots/Tiger Chai Landing/tigerChai_prototype.png'
import tigerChaiConcept from '../assets/full mockups/Tiger Chai Landing/tigerChai_mu.png'

export const about = {
  name: 'Dean Marty',
  role: 'Product Designer',
  tagline: 'Crafting beautiful, goal-oriented websites that users love and businesses thrive on.',
  email: 'deanuxd@gmail.com',
  linkedin: 'https://www.linkedin.com/in/deanuxd/',
  website: 'https://www.deanuxd.com',
  devto: 'https://dev.to/deanuxd',
  codepen: 'https://codepen.io/Yogu',
  bio: [
    'I’m a creative person. I care about how something looks and feels, and I care just as much about the people on the other side of the screen.',
    'I also care about the business. Design isn’t finished if users are stuck, or if the company can’t see why it matters. At Foxconn iAI I work on AI and industrial tools where both of those things have to be true.',
  ],
  tools: [
    'Figma',
    'User research',
    'Prototyping',
    'Design systems',
    'React',
    'AI product design',
  ],
}

export type MediaItem = {
  type: 'image' | 'video'
  src: string
  alt: string
  caption?: string
}

export type CaseSection = {
  id: string
  title: string
  body: string[]
  media?: MediaItem[]
}

export type PortfolioVersionId = 'product' | 'web'

export type Project = {
  slug: string
  title: string
  tagline: string
  outcome: string
  role: string
  year: string
  context: string
  tags: string[]
  cover: string
  coverAlt: string
  featuredIn: PortfolioVersionId[]
  prototypeUrl?: string
  overview: string[]
  roleDetail: string[]
  constraints: string[]
  sections: CaseSection[]
  outcomeDetail: string[]
  learnings: string[]
}

export const projects: Project[] = [
  {
    slug: 'tiger-chai',
    title: 'Tiger Chai',
    tagline: 'A cinematic landing page for David Rio’s Tiger Spice Chai—atmosphere, product, and a clear path to shop.',
    outcome: 'Designed a self-initiated landing experience to show web-design craft: mood, hierarchy, and a clickable Figma prototype.',
    role: 'Web Designer',
    year: '2026',
    context: 'Independent · Landing page',
    tags: ['Landing page', 'Visual design', 'Prototyping'],
    cover: tigerChaiCover,
    coverAlt: 'Tiger Spice Chai landing page prototype',
    featuredIn: ['web'],
    prototypeUrl:
      'https://www.figma.com/proto/brei824ohhVtBdZ13AONuk/DavidRio?node-id=1-3&t=S1GOoHEoP5gXG2kg-1&code-node-id=1-3',
    overview: [
      'Tiger Chai is independent web-design work—not a client project. I made it to show how a product brand can feel on the page: rich atmosphere, a hero product, and a simple next step.',
      'The landing leans on photography, type, and contrast so the can and the jungle mood do the talking, then points people to shop.',
    ],
    roleDetail: [
      'Owned art direction, layout, and interaction for a marketing landing page, from an early concept still to the final Figma Make prototype.',
      'Designed the first viewport around brand atmosphere and a single product story rather than a crowded feature grid.',
    ],
    constraints: [
      'Had to feel premium and energetic without hiding the product.',
      'Needed a prototype people could click through, not only a static mockup.',
      'Independent work, so the piece had to stand on craft alone.',
    ],
    sections: [
      {
        id: 'process',
        title: 'Process',
        body: [
          'David Rio makes Tiger Spice Chai—a personal favorite of mine. I wanted to use the brand\'s existing packaging to inspire the design.',
          'The pouncing tiger on the cover, the color palette, and the typeface all helped to create a sense of energy and excitement. The final design can be viewed in the Figma prototype, but below you can view an earlier version of the mockup.',
        ],
        media: [
          {
            type: 'image',
            src: tigerChaiConcept,
            alt: 'Tiger Spice Chai early landing concept',
            caption: 'First concept — atmosphere study before the final prototype',
          },
        ],
      },
      {
        id: 'solution',
        title: 'Solution',
        body: [
          'Evolved the first concept into a complete landing: navigation, conservation banner, product story, and a clear path to cart.',
          'The Figma prototype is the final design—open it to click through the live experience.',
        ],
      },
    ],
    outcomeDetail: [
      'A self-initiated landing that demonstrates web-design range beyond industrial product work.',
      'A clickable prototype that stands as the finished landing, with the early concept kept as process.',
    ],
    learnings: [
      'Brand landings live or die on the first viewport: mood, product, and one next step.',
      'A prototype makes speculative work feel real in a way a mockup alone cannot.',
    ],
  },
  {
    slug: 'iai-website',
    title: 'iAI Website',
    tagline: 'A responsive company site that makes complex industrial AI feel clear, credible, and easy to discover solutions.',
    outcome: 'Redesigned the Foxconn iAI public website across desktop and mobile, with a landing narrative and supporting content surfaces.',
    role: 'Web Designer',
    year: '2024',
    context: 'Foxconn iAI · Marketing site',
    tags: ['Responsive web', 'Landing page', 'Visual design'],
    cover: iaiCover,
    coverAlt: 'iAI website desktop landing page',
    featuredIn: ['web'],
    overview: [
      'Foxconn iAI needed a public website that could explain a technical company without burying visitors in jargon—or looking like a generic corporate template.',
      'The work was a full visual and structural pass: hierarchy, responsive layout, and a product-led landing that uses the interface itself as proof.',
    ],
    roleDetail: [
      'Designed the landing experience end to end: information architecture, visual system, desktop and mobile layouts, and motion for the live site.',
      'Shaped content hierarchy so technical claims stayed scannable for mixed audiences—operators, engineers, and decision-makers.',
    ],
    constraints: [
      'Had to speak to mixed audiences without diluting technical credibility.',
      'Needed a system that worked across desktop and mobile from the first viewport.',
      'The site had to feel like the company: calm, precise, and product-led—not decorative.',
    ],
    sections: [
      {
        id: 'process',
        title: 'Process',
        body: [
          'Started from jobs on the page: understand the company, trust the work, and find a clear next step.',
          'Explored layout that puts capability first, then proof, then action—keeping the first viewport focused instead of crowded with feature lists.',
        ],
        media: [
          {
            type: 'image',
            src: iaiCover,
            alt: 'iAI desktop landing page',
            caption: 'Desktop landing — value proposition and product presence',
          },
          {
            type: 'image',
            src: iaiMobile,
            alt: 'iAI mobile landing page',
            caption: 'Mobile layout with the same narrative priority',
          },
        ],
      },
      {
        id: 'solution',
        title: 'Solution',
        body: [
          'Designed a product-led landing that uses real interface presence as the hero, then adapted the system for mobile without losing hierarchy.',
          'Prototyped the live experience so stakeholders could feel pacing, scroll, and entry points before launch.',
        ],
        media: [
          {
            type: 'video',
            src: iaiDemo,
            alt: 'iAI website prototype demo',
            caption: 'Landing walkthrough',
          },
        ],
      },
    ],
    outcomeDetail: [
      'Shipped a cohesive responsive website that clarified how Foxconn iAI presents itself on the public web.',
      'Established a visual and narrative baseline that can extend into deeper content pages.',
    ],
    learnings: [
      'On a company site, showing the work early builds more trust than stacking claims.',
      'Responsive design is part of the story—mobile isn’t a secondary polish pass.',
    ],
  },
  {
    slug: 'optimo',
    title: 'Optimo',
    tagline: 'From manual annotation to live inference—tools that help people train AI, then run it with confidence.',
    outcome: 'Designed Optimo’s manual annotator for model training and the live dashboard for real-time inference monitoring.',
    role: 'Product Designer',
    year: '2021–2025',
    context: 'Foxconn iAI · Industrial AI',
    tags: ['Manual annotation', 'Model training', 'Live inference'],
    cover: optimoLiveDashboard,
    coverAlt: 'Optimo live inference dashboard',
    featuredIn: ['product'],
    overview: [
      'Optimo supports the full loop of industrial AI: people manually annotate data to train models, then monitor those models as they run live inference on the floor.',
      'The product had to make the training side precise and trustworthy, and the live side scannable under pressure—without treating them as unrelated tools.',
    ],
    roleDetail: [
      'Designed the manual annotator experience people use to label and prepare data for training AI models.',
      'Designed the live dashboard for inference monitoring, plus supporting patterns (confirmations, menus, chat) that keep dense workflows consistent.',
    ],
    constraints: [
      'Manual annotation needed precision and reversibility—training quality depends on clear labeling UX.',
      'Live inference views demanded high information density without burying critical status or actions.',
      'Component patterns had to feel coherent across training and live surfaces.',
    ],
    sections: [
      {
        id: 'process',
        title: 'Process',
        body: [
          'Mapped the product as a loop: annotate → train → infer live—not a single “dashboard” problem.',
          'Explored workflow concepts so the team could see how human labeling upstream feeds confident live monitoring downstream.',
        ],
        media: [
          {
            type: 'image',
            src: optimoWorkflow,
            alt: 'Optimo workflow concept board',
            caption: 'Workflow concept — from labeling through live operation',
          },
          {
            type: 'image',
            src: optimoWorkflow2,
            alt: 'Optimo workflow concept board alternate',
            caption: 'Workflow exploration across related scenarios',
          },
          {
            type: 'image',
            src: optimoDashboard,
            alt: 'Optimo product dashboard concept',
            caption: 'Early product dashboard concept',
          },
        ],
      },
      {
        id: 'solution',
        title: 'Solution',
        body: [
          'Designed a manual annotator so users can label data and train models with clear, trustworthy controls.',
          'Designed the live dashboard for inference monitoring once models are running—paired with shared component patterns and chat states across the product.',
        ],
        media: [
          {
            type: 'image',
            src: annotator,
            alt: 'Optimo manual annotator tool',
            caption: 'Manual annotator — labeling for model training',
          },
          {
            type: 'video',
            src: annotatorDemo,
            alt: 'Optimo manual annotator demo',
            caption: 'Manual annotator interaction demo',
          },
          {
            type: 'image',
            src: liveAnnotator,
            alt: 'Optimo live annotator mockup',
            caption: 'Live annotator surface in product context',
          },
          {
            type: 'image',
            src: optimoLiveDashboard,
            alt: 'Optimo live inference dashboard',
            caption: 'Live dashboard — real-time inference monitoring',
          },
          {
            type: 'image',
            src: confirmationModal,
            alt: 'Optimo confirmation modal',
            caption: 'Confirmation modal for high-impact actions',
          },
          {
            type: 'image',
            src: optionsMenu,
            alt: 'Optimo options menu',
            caption: 'Options menu pattern',
          },
          {
            type: 'image',
            src: optimoChatClosed,
            alt: 'Optimo AI chat closed state',
            caption: 'AI chat — closed state in product context',
          },
        ],
      },
    ],
    outcomeDetail: [
      'Connected training and live inference into one coherent Optimo product story—manual annotation upstream, live monitoring downstream.',
      'Gave engineering and stakeholders shared UI patterns across annotator, dashboard, and supporting controls.',
    ],
    learnings: [
      'Industrial AI UX fails when training and live inference are designed as separate products.',
      'Annotation quality is a product problem: the training UI is where model performance starts.',
    ],
  },
  {
    slug: 'illumake',
    title: 'Illumake',
    tagline: 'Operator-centered flows and a composer experience for industrial training and creation.',
    outcome: 'Mapped Illumake user flows and operator training journeys, and prototyped the Illu Composer experience.',
    role: 'Product Designer',
    year: '2022–2025',
    context: 'Foxconn iAI · Industrial product',
    tags: ['User flows', 'Operator training', 'Prototyping'],
    cover: illumakeComposerCover,
    coverAlt: 'Illumake Composer interface screenshot',
    featuredIn: ['product'],
    overview: [
      'Illumake needed clarity around who the operator is, how they learn the system, and how creation tools fit into real work—not just feature lists.',
      'The work connected early flow mapping and training journeys to a tangible composer prototype people could react to.',
    ],
    roleDetail: [
      'Defined user flows and operator training boards to align the team on decision paths and learning moments.',
      'Designed and prototyped Illu Composer to show how the creation experience should feel in motion.',
    ],
    constraints: [
      'Had to serve both experienced operators and people still ramping up.',
      'Training needed to feel connected to the product, not like a separate LMS afterthought.',
      'Prototype fidelity had to communicate interaction rhythm, not only static screens.',
    ],
    sections: [
      {
        id: 'process',
        title: 'Process',
        body: [
          'Worked from flows outward: operator goals, branching decisions, and where the product should reduce cognitive load.',
          'Paired flow work with operator training boards so onboarding and skill-building stayed part of the product story.',
        ],
        media: [
          {
            type: 'image',
            src: illumakeFlows,
            alt: 'Illumake user flows',
            caption: 'User flows — mapping Illumake decision paths',
          },
          {
            type: 'image',
            src: illumakeFlows2,
            alt: 'Illumake user flows alternate',
            caption: 'Flow exploration across related scenarios',
          },
          {
            type: 'image',
            src: operatorTraining,
            alt: 'Illumake operator training board',
            caption: 'Operator training journey exploration',
          },
          {
            type: 'image',
            src: operatorTraining2,
            alt: 'Illumake operator training board alternate',
            caption: 'Training touchpoints alongside product use',
          },
        ],
      },
      {
        id: 'solution',
        title: 'Solution',
        body: [
          'Used flow and training artifacts to align stakeholders before locking interaction details.',
          'Prototyped Illu Composer so the team could evaluate pacing, hierarchy, and creative controls in context.',
        ],
        media: [
          {
            type: 'image',
            src: illumakeComposerCover,
            alt: 'Illumake Composer interface',
            caption: 'Illu Composer — product surface',
          },
          {
            type: 'video',
            src: illumakeComposer,
            alt: 'Illu Composer prototype demo',
            caption: 'Illu Composer prototype walkthrough',
          },
        ],
      },
    ],
    outcomeDetail: [
      'Aligned the team around operator-centered flows and training moments before deeper UI polish.',
      'Produced a composer prototype that made the product direction tangible for cross-functional review.',
    ],
    learnings: [
      'Flow quality beats visual polish when the decision path is still wrong.',
      'Training isn’t separate from product design—it’s often where trust in the tool is won or lost.',
    ],
  },
  {
    slug: 'rag-workspace',
    title: 'RAG Workspace',
    tagline: 'An internal tool for exploring retrieval-augmented workflows with clear context and control.',
    outcome: 'Prototyped an internal RAG workspace that keeps sources, context, and next actions visible.',
    role: 'Product Designer',
    year: '2024–2025',
    context: 'Foxconn iAI · Internal tool',
    tags: ['Internal tools', 'RAG', 'AI UX'],
    cover: ragCover,
    coverAlt: 'RAG workspace application screenshot',
    featuredIn: ['product'],
    overview: [
      'Internal RAG tools fail when people can’t see what the system retrieved or what to do next.',
      'This workspace focused on making retrieval context inspectable and the working loop scannable for people shipping and evaluating AI features.',
    ],
    roleDetail: [
      'Designed the primary workspace layout—navigation, document/context panels, and interaction rhythm for retrieve → inspect → act.',
      'Built a clickable prototype so stakeholders could feel density and hierarchy before committing to implementation.',
    ],
    constraints: [
      'High information density without overwhelming first-time internal users.',
      'Needed to surface uncertainty (sources and context) instead of hiding it behind a chat box.',
      'Prototype had to be demoable to non-design partners.',
    ],
    sections: [
      {
        id: 'process',
        title: 'Process',
        body: [
          'Mapped the core loop around retrieval and inspection: what must stay visible, what can collapse, and how people recover when context is wrong.',
          'Prioritized spatial clarity—where am I, what am I looking at, what can I safely do next.',
        ],
        media: [
          {
            type: 'image',
            src: ragCover,
            alt: 'RAG workspace main application view',
            caption: 'Primary workspace — context and retrieval in view',
          },
        ],
      },
      {
        id: 'solution',
        title: 'Solution',
        body: [
          'Designed a workspace that treats sources and working context as first-class UI, not afterthoughts.',
          'Prototyped the end-to-end flow so teams could evaluate pacing and information hierarchy together.',
        ],
        media: [
          {
            type: 'video',
            src: ragDemo,
            alt: 'RAG workspace prototype demo',
            caption: 'Workspace prototype walkthrough',
          },
        ],
      },
    ],
    outcomeDetail: [
      'Produced a clickable internal-tool prototype that clarified how humans stay oriented inside RAG workflows.',
      'Created a shared visual reference for layout density and context hierarchy.',
    ],
    learnings: [
      'Internal AI tools earn trust when uncertainty is visible—sources, context, and editable next steps.',
      'Prototype fidelity matters most when the product is dense; static screens hide the real cognitive load.',
    ],
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(versionId: PortfolioVersionId): Project[] {
  return projects.filter((p) => p.featuredIn.includes(versionId))
}

export function getAdjacentProjects(
  slug: string,
  versionId: PortfolioVersionId,
): {
  prev: Project | null
  next: Project | null
} {
  const list = getFeaturedProjects(versionId)
  const index = list.findIndex((p) => p.slug === slug)
  if (index === -1) return { prev: null, next: null }
  return {
    prev: list[index - 1] ?? null,
    next: list[index + 1] ?? null,
  }
}
