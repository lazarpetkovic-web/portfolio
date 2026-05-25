# /new-project — Scaffold a Next.js Client Project

Use this skill when the user asks to start a new client project. Guide them through scaffolding a production-ready Next.js site optimized for fast delivery (48-72h target), using Lazar's preferred stack.

## Stack defaults
- **Next.js 15+** (App Router, unless Pages Router is needed for CMS reasons)
- **TypeScript** (strict mode)
- **Tailwind CSS 4** with `@tailwindcss/postcss`
- **Framer Motion** (`motion` package)
- **lucide-react** for icons
- **next/font** for Google Fonts (Inter + any brand font)
- Deploy target: **Vercel**

## Step 1 — Discover the project

Ask the user only the essential questions. Don't over-plan — Lazar delivers fast.

1. **Project type**: 
   - New Next.js site from scratch
   - Figma-to-Next.js implementation
   - Webflow/other platform → Next.js migration
   - Site redesign in Next.js
2. **Brief description**: What does the client do? (1-2 sentences)
3. **Pages needed**: Home, About, Services, Contact, Blog, Projects, etc.?
4. **CMS needed?**: None / Sanity / Strapi / Contentful
5. **Any special features?**: Booking system, multi-language, dark mode, auth, dashboard, etc.
6. **Client Figma file link** (if applicable)

## Step 2 — Scaffold the project

```bash
npx create-next-app@latest <project-name> --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --turbopack
```

Then install additional dependencies:

```bash
npm install motion lucide-react
```

If CMS:
- Sanity: `npm install next-sanity @sanity/client @sanity/image-url`
- Strapi: No extra packages needed (use REST API)
- Contentful: `npm install contentful`

If multi-language:
```bash
npm install next-intl
```

If booking/forms:
```bash
npm install resend react-hook-form zod @hookform/resolvers
```

## Step 3 — Set up project structure

Create this folder structure inside `src/`:

```
src/
  app/
    layout.tsx          — Root layout with fonts, metadata, providers
    page.tsx            — Homepage
    globals.css         — Tailwind + global styles
    (pages)/            — Optional route group for static pages
      about/page.tsx
      services/page.tsx
      contact/page.tsx
      projects/page.tsx
    blog/
      page.tsx
      [slug]/page.tsx
    api/
      contact/route.ts  — Contact form handler (Resend)
  components/
    layout/
      Header.tsx
      Footer.tsx
    ui/                 — Reusable UI primitives (Button, Container, etc.)
    sections/           — Page-specific sections (Hero, Features, CTA, etc.)
    projects/
      ProjectCard.tsx
      ProjectGrid.tsx
  lib/
    utils.ts            — cn() helper, formatDate, etc.
    constants.ts        — Site-wide constants (nav items, social links, etc.)
  types/
    index.ts            — Shared TypeScript types
```

## Step 4 — Apply Lazar's SEO boilerplate

Set up `src/app/layout.tsx` with comprehensive SEO:

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: '<Client Name> — <Tagline>',
    template: '%s | <Client Name>',
  },
  description: '<client description>',
  metadataBase: new URL('https://<domain>.com'),
  openGraph: {
    title: '<Client Name>',
    description: '<client description>',
    url: 'https://<domain>.com',
    siteName: '<Client Name>',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '<Client Name>',
    description: '<client description>',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
};
```

Always include:
- `robots.ts` at `src/app/robots.ts` → points to sitemap
- `sitemap.ts` at `src/app/sitemap.ts` → dynamic sitemap
- JSON-LD structured data (Organization / LocalBusiness / WebSite as fitting)

## Step 5 — Apply Lazar's Tailwind patterns

In `globals.css`:
```css
@import "tailwindcss";

@theme {
  --font-sans: "Inter", system-ui, -apple-system, sans-serif;
  --font-display: /* client's brand font or Inter */;
  --color-brand: /* client's primary brand color */;
}
```

## Step 6 — Build the layout shell

Create `Header.tsx` and `Footer.tsx` in `src/components/layout/`. Use Lazar's patterns: sticky header with scroll detection, mobile drawer navigation, clean footer with address/social/email columns.

## Step 7 — Build pages

Build pages in priority order. Use server components by default. Only add `'use client'` for interactive elements (navigation, forms, animations). Leverage:
- `next/image` for all images
- `motion` (Framer Motion) for scroll reveals and page transitions
- Semantic HTML (`<section>`, `<article>`, `<nav>`, `<main>`)
- Proper heading hierarchy (one `<h1>` per page)

## Step 8 — CMS setup (if needed)

**Sanity** (preferred):
- Install: `npm install next-sanity @sanity/client @sanity/image-url`
- Follow [next-sanity docs](https://www.sanity.io/docs/next-js) for studio setup
- Create schemas for: page content, blog posts, projects, testimonials

**Contentful**:
- Install: `npm install contentful`
- Create client in `src/lib/contentful.ts`
- Use GraphQL or REST queries in server components

## Step 9 — Forms

For contact forms, use Resend (Lazar already has an account):
- Create `src/app/api/contact/route.ts` (Next.js App Router route handler)
- Use `react-hook-form` + `zod` for client-side validation
- POST to the route handler, which sends via Resend

## Step 10 — Deploy prep

- `next build` must pass with zero errors
- Run `next build` and fix any issues
- Verify: `robots.txt`, `sitemap.xml`, JSON-LD, meta tags, OG image all present
- Push to GitHub, connect to Vercel, deploy
- Add domain + env vars in Vercel dashboard

## Speed principles
- **Reuse, don't rewrite** — Lazar's existing component patterns (Header scroll detection, mobile drawer, footer layout) should be adapted, not rebuilt from scratch each time
- **Server components first** — only add `'use client'` when you actually need interactivity
- **Don't over-engineer** — build exactly what the brief needs, no speculative features
- **Leverage the ecosystem** — use established libraries, don't build custom solutions for solved problems
