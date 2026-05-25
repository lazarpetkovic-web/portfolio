# /new-project — Scaffold a Next.js Client Project

Two-phase workflow: **Brain (Pro)** plans and asks questions, **Executor (Flash)** writes all the code.

---

## Phase 1 — BRAIN (DeepSeek V4 Pro — this model)

Do NOT write any code in this phase. Only discover, plan, and get approval.

### Discovery
Ask the user only the essential questions. Don't over-plan — Lazar delivers in 48-72h.

1. **Project type**: New site / Figma-to-code / platform migration / redesign
2. **Brief description**: What does the client do? (1-2 sentences)
3. **Pages needed**: Home, About, Services, Contact, Blog, Projects, etc.
4. **CMS needed?**: None / Sanity / Strapi / Contentful
5. **Special features?**: Booking, multi-language, dark mode, auth, etc.
6. **Figma link** (if applicable)
7. **Project name** (kebab-case, used for the folder name)

### Plan
After discovery, summarize the plan in a concise bullet list:
- Project name and folder
- Tech stack (based on defaults below + any additions from discovery)
- Page list with route structure
- Component tree (layout shell + section components per page)
- Data sources (CMS schemas if applicable, API endpoints)
- Estimated file count

**CRITICAL**: Present the plan and wait for user approval. Do NOT proceed to Phase 2 until the user says "go", "execute", "approved", etc.

---

## Phase 2 — EXECUTOR (DeepSeek V4 Flash)

When the user approves, spawn an executor agent to write all the code:

```
Agent({
  description: "Scaffold Next.js project",
  subagent_type: "general-purpose",
  model: "haiku",
  prompt: """
    You are the executor. Follow this exact plan. Write ALL files. Do NOT ask questions — just build.

    [COPY THE APPROVED PLAN + FULL TECH SPECS HERE]
    [COPY THE STACK DEFAULTS SECTION BELOW]
    [COPY THE PROJECT STRUCTURE SECTION BELOW]
    [COPY THE SEO BOILERPLATE SECTION BELOW]
    [COPY THE TAILWIND PATTERNS SECTION BELOW]
    [COPY THE SPEED PRINCIPLES SECTION BELOW]
  """
})
```

**Rules for the executor prompt**:
- Paste the FULL plan the user approved — every page, every component, every CMS schema
- Paste ALL sections below (Stack defaults, Project structure, SEO boilerplate, etc.)
- The executor must write every file in sequence: scaffold → deps → layout → pages → CMS → forms → deploy check
- The executor must end by running `npm run build` and reporting pass/fail

---

## Stack defaults

Copy this section verbatim into every executor prompt:

```
## Stack
- Next.js 15+ (App Router, TypeScript strict, Tailwind CSS 4, Turbopack)
- motion (Framer Motion) for animations
- lucide-react for icons
- next/font for Google Fonts (default: Inter for body, Plus Jakarta Sans for headings)
- Deploy target: Vercel

## Scaffold command
npx create-next-app@latest <project-name> --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --turbopack

## Core dependencies (always install)
npm install motion lucide-react

## Conditional dependencies
- CMS Sanity: npm install next-sanity @sanity/client @sanity/image-url
- CMS Contentful: npm install contentful
- Multi-language: npm install next-intl
- Forms: npm install resend react-hook-form zod @hookform/resolvers
```

---

## Project structure

Copy this section verbatim into every executor prompt:

```
## Folder structure
Create this structure inside src/:

src/
  app/
    layout.tsx          — Root layout with fonts, metadata
    page.tsx            — Homepage
    globals.css         — Tailwind + global styles
    robots.ts           — Robots file pointing to sitemap
    sitemap.ts          — Dynamic sitemap
    (pages)/            — Route group for static pages
    api/
      contact/route.ts  — Contact form handler (Resend)
  components/
    layout/
      Header.tsx        — Sticky header, scroll detection, mobile drawer
      Footer.tsx        — Address, email, social columns
    ui/                 — Reusable primitives (Button, Container, Section)
    sections/           — Page-specific sections (Hero, Features, CTA, etc.)
  lib/
    utils.ts            — cn() helper from clsx/tailwind-merge
    constants.ts        — Nav items, social links, site config
  types/
    index.ts            — Shared TypeScript types
```

---

## SEO boilerplate

Copy this section verbatim into every executor prompt:

```
## SEO requirements
- layout.tsx must export a Metadata object with: title template, description, metadataBase, openGraph (full), twitter (summary_large_image), robots (index+follow)
- robots.ts must allow all crawlers and point to sitemap
- sitemap.ts must list all static pages
- Add JSON-LD structured data as a <script> tag in layout.tsx (Organization or LocalBusiness schema matching the client)
- All images use next/image with explicit width/height and alt text
- Semantic HTML: one <h1> per page, proper section/article/nav/main landmarks
```

---

## Tailwind patterns

Copy this section verbatim into every executor prompt:

```
## Styling rules
- globals.css uses @import "tailwindcss" with @theme block
- Font variables: --font-sans (Inter), --font-display (client brand or Plus Jakarta Sans)
- Brand color: extract from Figma or client logo, set as --color-brand in @theme
- Use Tailwind's built-in zinc/gray scale for neutrals — don't invent colors
- Consistent spacing: sections get py-24, containers get max-w-7xl mx-auto px-6 sm:px-8 lg:px-12
- All interactive elements have transition-all duration-300
```

---

## Speed principles (for the executor)

```
- Server components by default — only 'use client' when interactivity demands it
- Reuse patterns: scroll detection in Header, mobile drawer, footer layout
- No speculative features — build exactly what the plan says
- Library-first: next/image, motion, lucide-react, react-hook-form — don't reinvent
- End every execution with: npm run build and report the result
```
