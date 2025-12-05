# Portfolio Setup Guide

## Adding Your Projects

1. Open `app/data/projects.ts`
2. Replace the placeholder projects with your actual projects from https://www.design-studio-sync.rs/projekti
3. For each project, update:
   - `title`: Project name
   - `description`: Brief description
   - `image`: Path to project image (place images in `public/projects/`)
   - `tags`: Technologies/categories used
   - `link`: Live project URL
   - `category`: Project type

## Adding Project Images

1. Create a folder: `public/projects/`
2. Add your project screenshots/images there
3. Reference them in projects.ts as `/projects/your-image.jpg`

## Updating Contact Info

In `app/page.tsx`, update:
- Email address in the "Get in Touch" button
- Add your social media links if needed

## Running Locally

```bash
npm run dev
```

Visit http://localhost:3000

## Building for Production

```bash
npm run build
```

This creates an `out` folder with static files ready for Hostinger.

## Deploying to Hostinger

1. Run `npm run build`
2. Upload everything from the `out` folder to your Hostinger public_html directory
3. Done!

## Customization

- Colors: Edit Tailwind classes in `app/page.tsx`
- Layout: Modify the sections in `app/page.tsx`
- Fonts: Update in `app/layout.tsx`
- Global styles: Edit `app/globals.css`
