# Dean Marty — Portfolio

Portfolio built with Vite, React, TypeScript, and Tailwind CSS.

## Versions

The site builds as **one** version at a time:

| Version | How to run | What it shows |
| --- | --- | --- |
| Product Designer (default local) | `npm run dev` | Optimo, Illumake, RAG Workspace |
| Web Designer | `npm run dev:web` | Tiger Chai landing (Figma prototype) and iAI website |

Local `npm run dev` is still Product Designer. Production builds (`npm run build`, including Netlify) currently ship the **Web Designer** version via [`.env.production`](.env.production). To ship Product Designer instead, set `VITE_PORTFOLIO_VERSION=product` in that file or in Netlify’s environment variables.

## Develop

```bash
npm install
npm run dev        # Product Designer
npm run dev:web    # Web Designer
```

## Build

```bash
npm run build      # uses .env.production (Web Designer)
npm run build:web  # Web Designer
npm run preview
```

## Content

- Bio and contact: [`src/data/projects.ts`](src/data/projects.ts) (`about` export)
- Case studies: same file (`projects` array). Use `featuredIn` to show a project on `product`, `web`, or both.
- Version copy: [`src/data/versions.ts`](src/data/versions.ts)
- Media: [`src/assets/`](src/assets/)

To add a project, drop assets into `src/assets/`, import them in `projects.ts`, and append a new entry with the same section shape (overview, role, process, solution, outcome).

## Deploy (Netlify)

1. Push this repo to GitHub
2. Import the project in Netlify (Vite / `npm run build` / `dist`)
3. SPA redirects are in [`netlify.toml`](netlify.toml)
4. Optional: set env var `VITE_PORTFOLIO_VERSION` to `product` or `web` (production currently defaults to `web` via `.env.production`)

### Media note

Prototype demos include large `.mov` / `.mp4` files. For production performance, re-export demos as compressed H.264 `.mp4` before deploy when possible. Videos on case study pages lazy-load when scrolled into view.

## Contact

- Email: deanuxd@gmail.com
- LinkedIn: https://www.linkedin.com/in/deanuxd/
