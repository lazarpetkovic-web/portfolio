import React from 'react';
import Header from './Header';
import BentoHero from './BentoHero';
import ProjectsSection from './ProjectsSection';
import ExpertiseSection from './ExpertiseSection';
import BioTimeline from './BioTimeline';
import Testimonial from './Testimonial';
import ContactSection from './ContactSection';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-zinc-50 text-zinc-900 overflow-x-hidden antialiased">
      
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

      {/* 8. Brand Black Footer exactly matching reference */}
      <footer id="main-footer" className="relative z-10 bg-[#0d0d0d] text-zinc-400 border-t border-zinc-900 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-zinc-850 pb-12 mb-8">
          
          {/* Brand Col */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                <span className="font-display font-black text-[13px] tracking-[-0.05em] text-zinc-950 leading-none">LP</span>
              </div>
              <span className="font-display font-extrabold text-[15px] tracking-tight text-white">
                Lazar<span className="text-zinc-500 font-light"> Petkovic</span>
              </span>
            </div>
            <p className="font-sans text-xs text-zinc-500 leading-relaxed max-w-xs">
              Systematic Web Developer and Frontend Engineer crafting high-fidelity digital platforms, scalable CMS layouts, and fast interactive codebases in Europe.
            </p>
          </div>

          {/* Details Col 1: Address */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="font-sans text-[10px] font-black uppercase tracking-widest text-zinc-500">Address</h4>
            <p className="font-sans text-xs text-zinc-300 leading-relaxed">
              Niš, Serbia
            </p>
          </div>

          {/* Details Col 2: Email */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="font-sans text-[10px] font-black uppercase tracking-widest text-zinc-500">Email Address</h4>
            <p className="font-sans text-xs text-zinc-300">
              lazarpetkovic.web@gmail.com
            </p>
          </div>

          {/* Details Col 3: Social list */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="font-sans text-[10px] font-black uppercase tracking-widest text-zinc-500">Social Connect</h4>
            <div className="flex items-center gap-3">
              <a 
                href="https://github.com/lazar7cf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/lazarpetkovic99/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="mailto:lazarpetkovic.web@gmail.com" 
                className="p-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Back and Copyright */}
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-zinc-650">
          <span>
            © {new Date().getFullYear()} LAZAR PETKOVIC. ALL RIGHTS RESERVED.
          </span>
        </div>
      </footer>

    </div>
  );
}
