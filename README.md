# Riccardo's Portfolio

High-performance portfolio showcasing deep learning projects and technical writing.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router v6

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Type-check and production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript without emitting |
| `npm run test` | Run Vitest in watch mode |
| `npm run test:run` | Run Vitest once |

## Environment variables

Copy `.env.example` to `.env.local` and set:

- `VITE_API_ENDPOINT` — contact form submission URL
- `VITE_SITE_URL` — canonical site URL for SEO/OG tags

## Project structure

See `TECHNICAL_SPECIFICATION.md` for the full architecture, component map, and deployment checklist.

