# Lazar Petkovic Portfolio

## Stack
- React 19 + TypeScript + Vite 6
- Tailwind CSS 4, Framer Motion (`motion` package)
- React Router v7 (client-side SPA, BrowserRouter)
- Lucide React for icons
- Resend for contact form emails (`api/contact.ts`)
- Deployed on Vercel with Vite framework preset

## Project structure
```
src/
  main.tsx              — entry point, BrowserRouter
  App.tsx               — routes: "/" → HomePage, "/project/:id" → ProjectPage
  types.ts              — Project, SkillGroup, Metric, TimelineEvent interfaces
  data.ts               — PROJECTS[], SKILL_GROUPS[], METRICS[], TIMELINE[]
  index.css             — Tailwind imports, Google Fonts, global styles
  components/
    Header.tsx          — sticky nav with scroll-to-section links
    HomePage.tsx        — assembles all sections + JSON-LD structured data
    BentoHero.tsx       — hero with avatar, tech pills, stats
    ProjectsSection.tsx — filterable project grid with Load More
    ProjectPage.tsx     — project detail with gallery lightbox + case study
    ExpertiseSection.tsx— 2x2 service cards
    BioTimeline.tsx     — experience timeline
    Testimonial.tsx     — single testimonial block
    ContactSection.tsx  — contact form that POSTs to /api/contact
    Footer.tsx          — shared footer
    ScrollToTop.tsx     — resets scroll on route change
api/
  contact.ts            — Vercel serverless function, sends email via Resend
public/
  projects/<slug>/      — project images (main.jpg, gallery-1.jpg, etc.)
  sitemap.xml, robots.txt, favicon.svg
```

## Adding a new project
1. **Images**: Create `public/projects/<slug>/` with at least `main.jpg`. Optional: `gallery-1.jpg` through `gallery-3.jpg`. Use `.jpg` or `.avif`.
2. **Data**: Add entry to `PROJECTS[]` in `src/data.ts`. Find the highest existing `id` and increment by 1.
3. **Sitemap**: Add `<url>` entry to `public/sitemap.xml`.

### Project entry template
```ts
{
  id: <nextId>,
  title: "<Project Name>",
  description: "<2-3 sentence description>",
  image: "/projects/<slug>/main.jpg",
  galleryImages: ["/projects/<slug>/gallery-1.jpg", ...],
  tags: ["<Tag1>", "<Tag2>"],
  link: "https://...",  // or "" if not live
  category: "<Category>",  // SaaS | Real Estate | Restaurant | Logistics | Hospitality | Interior Design | Construction | Corporate
  caseStudy: {
    challenge: "<problem description>",
    solution: "<how you solved it>",
    techStack: ["<Next.js>", "<Tailwind CSS>", ...],
  },
}
```

### Categories (used in filter tabs)
SaaS, Real Estate, Restaurant, Logistics, Hospitality, Interior Design, Construction, Corporate

### Image conventions
- Main image: 16:10 aspect ratio, JPG or AVIF
- Gallery images: 4:3 aspect ratio
- Optimize for web (sub-200KB per image)

## Environment variables (Vercel)
| Key | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key for contact form |
| `FROM_EMAIL` | Sender address (defaults to lazar@lazarpetkovic.com) |
| `TO_EMAIL` | Recipient address (defaults to lazarpetkovic.web@gmail.com) |
