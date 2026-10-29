# Dean Marty — Portfolio

Portfolio built with Vite, React, TypeScript, and Tailwind CSS.

## Versions

The site builds as **one** version at a time:

| Version | How to run | What it shows |
| --- | --- | --- |
| Product Designer (default) | `npm run dev` | Optimo, Illumake, RAG Workspace |
| Web Designer | `npm run dev:web` | Tiger Chai landing (Figma prototype) and iAI website |

Set `VITE_PORTFOLIO_VERSION=web` in Vercel (or copy [`.env.example`](.env.example) to `.env`) to deploy the Web Designer build. Unset or `product` deploys the Product Designer build.

## Develop

```bash
npm install
npm run dev        # Product Designer
npm run dev:web    # Web Designer
```

## Build

```bash
npm run build      # Product Designer
npm run build:web  # Web Designer
npm run preview
```

## Content

- Bio and contact: [`src/data/projects.ts`](src/data/projects.ts) (`about` export)
- Case studies: same file (`projects` array). Use `featuredIn` to show a project on `product`, `web`, or both.
- Version copy: [`src/data/versions.ts`](src/data/versions.ts)
- Media: [`src/assets/`](src/assets/)

To add a project, drop assets into `src/assets/`, import them in `projects.ts`, and append a new entry with the same section shape (overview, role, process, solution, outcome).

## Deploy (Vercel)

1. Push this repo to GitHub
2. Import the project in Vercel (framework preset: Vite)
3. Build command: `npm run build` (product) or `npm run build:web` (web) · Output: `dist`
4. Optional: set env var `VITE_PORTFOLIO_VERSION` to `product` or `web`

[`vercel.json`](vercel.json) rewrites SPA routes to `index.html`.

### Media note

Prototype demos include large `.mov` / `.mp4` files. For production performance, re-export demos as compressed H.264 `.mp4` before deploy when possible. Videos on case study pages lazy-load when scrolled into view.

## Contact

- Email: deanuxd@gmail.com
- LinkedIn: https://www.linkedin.com/in/deanuxd/
