# Dean Marty — Portfolio

Product designer portfolio built with Vite, React, TypeScript, and Tailwind CSS.

## Positioning

Product designer for complex tools that help people work better—case studies from industrial AI and operator-facing software.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Content

- Bio and contact: [`src/data/projects.ts`](src/data/projects.ts) (`about` export)
- Case studies: same file (`projects` array)
- Media: [`src/assets/`](src/assets/)

To add a project, drop assets into `src/assets/`, import them in `projects.ts`, and append a new entry with the same section shape (overview, role, process, solution, outcome).

## Deploy (Vercel)

1. Push this repo to GitHub
2. Import the project in Vercel (framework preset: Vite)
3. Build command: `npm run build` · Output: `dist`

[`vercel.json`](vercel.json) rewrites SPA routes to `index.html`.

### Media note

Prototype demos include large `.mov` / `.mp4` files. For production performance, re-export demos as compressed H.264 `.mp4` before deploy when possible. Videos on case study pages lazy-load when scrolled into view.

## Contact

- Email: deanuxd@gmail.com
- LinkedIn: https://www.linkedin.com/in/deanuxd/
