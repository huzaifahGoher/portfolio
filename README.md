# Portfolio — Huzaifah Goher

Personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
app/
├── components/
│   ├── Introduction/   # Hero section
│   ├── navbar/         # Navigation bar
│   ├── projects/       # Projects showcase
│   ├── project/        # Individual project card
│   ├── contact/        # Contact section
│   └── socials/        # Social links
├── constants/          # Hrefs, languages, etc.
├── globals.css         # Global styles & animations
├── layout.tsx          # Root layout
└── page.tsx            # Home page
```

## Deployment

Deployed on [Vercel](https://vercel.com). Every push to `main` triggers an automatic deployment.
