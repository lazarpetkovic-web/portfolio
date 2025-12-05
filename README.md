# Lazar Petkovic - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Optimized for static export and deployment to Hostinger shared hosting.

## Features

- ✨ Modern, clean design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🌙 Dark mode support
- 🎨 Smooth animations and transitions
- 🔍 Project filtering by category
- ⚡ Optimized for performance
- 📦 Static export ready for any hosting

## Project Structure

```
portfolio/
├── app/
│   ├── data/
│   │   └── projects.ts      # Your project data
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main homepage
├── public/                  # Static assets
├── next.config.ts           # Next.js configuration
└── package.json
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Customize Your Content

#### Update Projects

Edit `app/data/projects.ts` with your actual projects:

```typescript
{
  id: 1,
  title: "Your Project Name",
  description: "Brief description of the project",
  image: "/projects/your-image.jpg",
  tags: ["Webflow", "Design", "Development"],
  link: "https://your-project-url.com",
  category: "SaaS" // or E-commerce, Corporate, etc.
}
```

#### Update Contact Information

In `app/page.tsx`, replace:
- `lazar@example.com` with your actual email
- LinkedIn URL: `https://www.linkedin.com/in/lazarpetkovic`
- GitHub URL: `https://github.com/lazarpetkovic`

#### Add Project Images

1. Create folder: `public/projects/`
2. Add your project screenshots
3. Reference them in `projects.ts` as `/projects/image-name.jpg`

### 4. Customize About Section

Edit the "About Me" text in `app/page.tsx` to reflect your experience and background.

## Building for Production

### Build Static Site

```bash
npm run build
```

This creates an `out` folder with all static files ready for deployment.

## Deploying to Hostinger

### Option 1: File Manager Upload

1. Run `npm run build`
2. Log into Hostinger control panel
3. Open File Manager
4. Navigate to `public_html` (or your domain folder)
5. Upload all files from the `out` folder
6. Done! Your site is live

### Option 2: FTP Upload

1. Run `npm run build`
2. Connect via FTP (use FileZilla or similar)
3. Upload contents of `out` folder to `public_html`
4. Your site is live!

### Important Notes for Hostinger

- Make sure to upload the contents of the `out` folder, not the folder itself
- If deploying to a subdomain, upload to the subdomain's folder
- The site is fully static - no Node.js server needed
- Works on any Hostinger shared hosting plan

## Customization

### Colors

The site uses Tailwind CSS. To change colors, edit the classes in `app/page.tsx`:

- Primary: `bg-gray-900` / `dark:bg-white`
- Background: `bg-white` / `dark:bg-gray-950`
- Text: `text-gray-900` / `dark:text-white`

### Fonts

Fonts are configured in `app/layout.tsx`. Currently using Geist Sans and Geist Mono from Google Fonts.

### Layout

All sections are in `app/page.tsx`:
- Navigation
- Hero
- About
- Projects (with filtering)
- Stats
- Contact
- Footer

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Static Export

## Support

For issues or questions, contact: lazar@example.com

## License

© 2024 Lazar Petkovic. All rights reserved.
