import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from './Header';
import BentoHero from './BentoHero';
import ProjectsSection from './ProjectsSection';
import ExpertiseSection from './ExpertiseSection';
import BioTimeline from './BioTimeline';
import Testimonial from './Testimonial';
import ContactSection from './ContactSection';
import Footer from './Footer';

export default function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const scrollToId = location.state?.scrollTo as string | undefined;
    if (scrollToId) {
      window.history.replaceState({}, document.title);
      const timer = setTimeout(() => {
        const element = document.getElementById(scrollToId);
        if (element) {
          const offset = 80;
          const y = element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  return (
    <div className="relative min-h-screen bg-zinc-50 text-zinc-900 overflow-x-hidden antialiased">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Lazar Petkovic',
              jobTitle: 'Next.js Developer',
              url: 'https://lazarpetkovic.com',
              sameAs: [
                'https://github.com/lazar7cf',
                'https://www.linkedin.com/in/lazarpetkovic99/',
              ],
              image: 'https://lazarpetkovic.com/hero_avatar.png',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Nis',
                addressCountry: 'RS',
              },
              knowsAbout: [
                'Next.js',
                'React',
                'TypeScript',
                'Tailwind CSS',
                'Webflow',
                'Headless CMS',
                'Frontend Development',
                'Full-Stack Development',
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Lazar Petkovic Portfolio',
              url: 'https://lazarpetkovic.com',
              description:
                'Project-based Next.js development for agencies. Production-ready sites in 48-72h.',
            },
          ]),
        }}
      />

      {/* 1. Light Sticky Navigation Header */}
      <Header />

      {/* Core Portfolio Content Panels */}
      <main className="relative z-10 w-full animate-fade-in">
        
        {/* 2. Hero Section - Large typography & portrait */}
        <BentoHero />

        {/* 3. Explore Portfolio Grid with interactive custom vector schematics */}
        <ProjectsSection />

        {/* 4. Expertise Section - Grid with highlighted dark card */}
        <ExpertiseSection />

        {/* 5. Experience Timeline Snapshot */}
        <BioTimeline />

        {/* 6. Centered Client Testimonial quotes */}
        <Testimonial />

        {/* 7. Let's Connect There inquiry panel with Budget proposals calculator */}
        <ContactSection />

      </main>

      {/* 8. Brand Black Footer */}
      <Footer />

    </div>
  );
}
