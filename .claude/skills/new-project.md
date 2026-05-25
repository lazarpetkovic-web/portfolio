# /new-project — Scaffold a Client Project

Two-phase workflow: **Brain (Pro)** plans and asks questions, **Executor (Flash)** writes all the code.

---

## Phase 1 — BRAIN (DeepSeek V4 Pro — this model)

Do NOT write any code in this phase. Only discover, plan, and get approval.

### Discovery

Ask these questions:

1. **Stack?**
   - **Next.js** — App Router, TypeScript, Tailwind 4, Framer Motion, Vercel deploy (default, most projects)
   - **HTML/CSS/JS + PHP** — No framework, no build step, cPanel deploy (shared hosting clients)

2. **Brief description**: What does the client do? (1-2 sentences)

3. **Pages needed**: Home, About, Services, Contact, Blog, Projects, etc.

4. **CMS needed?** (Next.js only): None / Sanity / Strapi / Contentful

5. **Special features?**: Booking, multi-language, dark mode, auth, etc.

6. **Figma link** (if applicable)

7. **Project name** (kebab-case folder name)

8. **Domain** (if known)

### Plan

After discovery, summarize in a concise bullet list:
- Project name and folder
- Stack choice + key dependencies
- Page list with route structure
- Component tree (layout shell + section components per page)
- Data sources (CMS schemas if applicable)
- Estimated file count

**CRITICAL**: Present the plan and wait for user approval ("go", "execute", "approved"). Do NOT proceed to Phase 2 until approved.

---

## Phase 2 — EXECUTOR (DeepSeek V4 Flash)

When approved, spawn an executor agent. Use the prompt template matching the chosen stack.

### For Next.js projects:

```
Agent({
  description: "Scaffold Next.js project",
  subagent_type: "general-purpose",
  model: "haiku",
  prompt: """
    You are the executor. Write ALL files. Do NOT ask questions — just build.

    [PASTE THE APPROVED PLAN HERE]

    ## Stack
    - Next.js 15+ (App Router, TypeScript strict, Tailwind CSS 4, Turbopack)
    - motion (Framer Motion) for animations
    - lucide-react for icons
    - next/font for Google Fonts (Inter body, Plus Jakarta Sans headings)
    - Deploy target: Vercel

    ## Scaffold
    npx create-next-app@latest <project-name> --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --turbopack
    npm install motion lucide-react

    ## CMS deps (if needed)
    Sanity: npm install next-sanity @sanity/client @sanity/image-url
    Contentful: npm install contentful
    Multi-language: npm install next-intl
    Forms: npm install resend react-hook-form zod @hookform/resolvers

    ## Project structure
    src/
      app/
        layout.tsx          — Root layout with fonts, metadata, JSON-LD
        page.tsx            — Homepage
        globals.css         — Tailwind + @theme with brand colors
        robots.ts           — Allow all, point to sitemap
        sitemap.ts          — Dynamic sitemap
        (pages)/            — Route group for static pages
        api/
          contact/route.ts  — Resend contact form handler
      components/
        layout/
          Header.tsx        — Sticky header, scroll detection, mobile drawer
          Footer.tsx        — Address/email/social columns
        ui/                 — Button, Container, Section primitives
        sections/           — Page-specific sections (Hero, Features, CTA...)
      lib/
        utils.ts            — cn() helper
        constants.ts        — Nav items, social links, site config
      types/
        index.ts            — Shared TypeScript types

    ## SEO
    - layout.tsx: Metadata with title template, description, metadataBase, openGraph (full), twitter (summary_large_image), robots (index+follow)
    - robots.ts: allow all, sitemap link
    - sitemap.ts: all static pages
    - JSON-LD Organization/LocalBusiness <script> in layout.tsx
    - Semantic HTML: one <h1> per page, section/article/nav/main landmarks
    - All images: next/image with alt text

    ## Styling
    - globals.css: @import "tailwindcss" + @theme { --font-sans, --font-display, --color-brand }
    - Zinc/gray neutrals, brand color from client logo/Figma
    - Sections: py-24, containers: max-w-7xl mx-auto px-6 sm:px-8 lg:px-12
    - All interactive: transition-all duration-300

    ## Rules
    - Server components by default, 'use client' only for interactivity
    - Build exactly what the plan says — no speculative features
    - End with: npm run build and report pass/fail
  """
})
```

### For HTML/CSS/JS + PHP projects:

```
Agent({
  description: "Scaffold cPanel project",
  subagent_type: "general-purpose",
  model: "haiku",
  prompt: """
    You are the executor. Write ALL files. Do NOT ask questions — just build.

    [PASTE THE APPROVED PLAN HERE]

    ## Stack
    - Plain HTML5, CSS3 (vanilla), vanilla JavaScript (ES6+)
    - PHP 8+ for server-side includes and contact form handling
    - No framework, no build step, no npm
    - Deploy target: cPanel shared hosting via FTP

    ## Project structure
    /
      index.html           — Homepage
      about.html           — About page
      services.html        — Services page
      contact.html         — Contact page with PHP form
      /blog/
        index.html         — Blog listing
        post.html          — Single blog post template
      /projects/
        index.html         — Project listing
        project.html       — Single project template
      /assets/
        /css/
          style.css        — Main stylesheet (CSS custom properties for theming)
        /js/
          main.js          — Navigation, animations, form validation
        /images/           — All project images
        /fonts/            — Self-hosted fonts (if not using Google Fonts CDN)
      /includes/
        header.php         — Shared header (nav, logo)
        footer.php         — Shared footer
        head.php           — Shared <head> with meta tags
      /api/
        contact.php        — Contact form handler (PHP mail() or SMTP)
        newsletter.php     — Newsletter signup handler (if needed)
      robots.txt
      sitemap.xml
      .htaccess            — Rewrite rules, caching, security headers

    ## SEO
    - Every page: <title>, <meta name="description">, <meta name="robots">
    - Open Graph + Twitter Card tags on every page
    - <link rel="canonical"> on every page
    - robots.txt: allow all, sitemap link
    - sitemap.xml: all pages
    - JSON-LD Organization/LocalBusiness as <script> in header
    - Semantic HTML: <header>, <nav>, <main>, <section>, <article>, <footer>
    - One <h1> per page
    - All images: loading="lazy", width/height, alt text
    - Structured heading hierarchy (h1 → h2 → h3)

    ## Styling (style.css)
    - CSS custom properties: --color-brand, --color-text, --color-bg, --font-sans, --font-display
    - Mobile-first responsive: min-width breakpoints at 640px / 768px / 1024px / 1280px
    - Container: max-width 1280px, padding 1.5rem
    - Section spacing: padding 6rem 0
    - Use Inter from Google Fonts CDN (link in <head>)
    - Smooth scroll: scroll-behavior: smooth on html
    - Transition on interactive elements: transition: all 0.3s ease

    ## JavaScript (main.js)
    - Mobile hamburger menu toggle
    - Header scroll state (add .scrolled class after 20px scroll)
    - Smooth scroll for anchor links
    - Contact form client-side validation
    - Intersection Observer for scroll-reveal animations (.reveal class)
    - No jQuery, no libraries — vanilla JS only

    ## PHP (contact.php)
    - Accept POST with name, email, message
    - Validate server-side (required fields, valid email)
    - Sanitize inputs with htmlspecialchars() and filter_var()
    - Send email via PHP mail() with proper headers
    - Return JSON { "success": true } or { "error": "..." }
    - Rate limiting: check referrer, block if >3 submissions from same IP in 1 hour (simple file-based log)
    - CSRF: generate token, store in session, validate on submit

    ## .htaccess
    - Rewrite rules for clean URLs (hide .html extension)
    - Cache headers for assets (1 year for images/fonts, 1 week for CSS/JS)
    - Security: disable directory listing, protect .htaccess itself
    - Force HTTPS redirect
    - Custom 404 page redirect

    ## Rules
    - Every page includes header.php + footer.php via PHP include
    - No copy-paste headers/footers — use PHP includes from the start
    - All CSS in style.css, all JS in main.js — no inline styles/scripts
    - Build every page listed in the plan, not just a subset
    - End with a checklist: every file created, every page has SEO tags, form works
  """
})
```

---

## cPanel deployment checklist

After the executor finishes building the HTML/CSS/JS + PHP project, remind the user:

1. Test the contact form locally (needs PHP running, e.g., `php -S localhost:8000`)
2. Upload via FTP to `public_html/` on cPanel
3. Verify: contact form sends, all pages load, mobile menu works
4. Set up email in cPanel if using PHP mail()
5. Add SSL via Let's Encrypt (cPanel one-click)
6. Submit sitemap to Google Search Console
