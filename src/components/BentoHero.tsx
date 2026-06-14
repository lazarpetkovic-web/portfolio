/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Code2, MapPin } from 'lucide-react';

export default function BentoHero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero-section" className="relative pt-36 pb-20 bg-zinc-50 border-b border-zinc-200/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* ================= HERO TEXT & PORTRAIT (DUWY STYLE ROW 1) ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-2">
          <h1 className="font-display font-extrabold text-[15vw] sm:text-[10vw] md:text-[8vw] lg:text-[7.5rem] uppercase tracking-[-0.04em] text-zinc-900 leading-[0.8] select-none">
            Next.js
          </h1>
          
          {/* Portrait Image Block */}
          <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-60 lg:h-60 rounded-[2rem] overflow-hidden shadow-sm border-2 border-white bg-zinc-200/80 flex-shrink-0 relative group self-start md:self-auto mb-4 md:mb-1 hover:scale-[1.03] transition-transform duration-500">
            <img 
              src="/hero_avatar.png" 
              alt="Lazar Petkovic 3D avatar"
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-zinc-900/5 mix-blend-multiply"></div>
            {/* Minimal Location tag in dark gray */}
            <div className="absolute bottom-3 right-3 bg-zinc-900/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] font-mono uppercase tracking-wider text-white border border-white/10">
              <MapPin className="w-3 h-3" /> Niš, SRB
            </div>
          </div>
        </div>

        {/* ================= HERO TEXT & DESCRIPTION (DUWY STYLE ROW 2) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start mb-16">
          <div className="md:col-span-8">
            <p className="font-display font-extrabold text-[15vw] sm:text-[10vw] md:text-[8vw] lg:text-[7.5rem] uppercase tracking-[-0.04em] text-zinc-900 leading-[0.8] select-none">
              Developer
            </p>
          </div>
          <div className="md:col-span-4 lg:pt-6 md:pl-4">
            <p className="font-sans text-sm sm:text-[15px] text-zinc-500 leading-relaxed font-normal mb-1">
              Hi, I'm Lazar Petkovic, a Niš-based Next.js Developer. I build premium, lightning-fast Next.js applications, scalable React architectures, and polished digital experiences from Serbia.
            </p>
          </div>
        </div>

        {/* ================= INTERACTIVE BRAND PILLS CONVEYOR ================= */}
        <div className="border-t border-b border-zinc-200/80 py-6 mb-20">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:flex lg:flex-nowrap justify-between items-center gap-3 lg:gap-4">
            {['Next.js', 'TypeScript', 'React', 'Supabase', 'Figma UX', 'Tailwind CSS', 'PostgreSQL', 'REST APIs'].map((techName, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2.5 px-5 py-2.5 bg-white rounded-full border border-zinc-200/60 shadow-xs font-mono text-[11px] text-zinc-700 font-semibold justify-center lg:justify-start"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0"></span>
                {techName}
              </div>
            ))}
          </div>
        </div>

        {/* ================= ABOUT ME SECTION & STATS ================= */}
        <div id="bio-section" className="scroll-mt-24">
          <div className="mb-4">
            <span className="bg-zinc-200/80 text-zinc-800 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              About Me
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left side: Heading and Blueprint frame with Play button overlay */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-zinc-900 tracking-tight leading-tight">
                Engineering aesthetic storefronts is more than just a job - it's my systematic passion.
              </h2>
              
              {/* Massive Interactive Blueprint Mockup block with central solid dark circle / Play icon overlay */}
              <div className="w-full aspect-[16/10] bg-zinc-100 rounded-[2rem] border border-zinc-200 overflow-hidden relative group shadow-xs">
                {/* Developer workspace image */}
                <img 
                  src="/about_me_workspace.png" 
                  alt="Developer workspace setup"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-all duration-700"
                />
                


                {/* Subtle gradient overlay with dev badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/30 via-transparent to-transparent transition-all group-hover:from-zinc-900/40" />
                <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-zinc-900/90 backdrop-blur-md px-3 py-1.5 rounded-full">
                  <Code2 className="w-3.5 h-3.5 text-white" />
                  <span className="font-mono text-[9px] uppercase tracking-wider text-white font-bold">Fullstack Developer</span>
                </div>
              </div>
            </div>

            {/* Right side: Large custom statistical summaries matching "+320 / +280" in size */}
            <div className="lg:col-span-5 flex flex-col gap-10 lg:pt-4">
              
              {/* Stat 1: Years Experience */}
              <div className="border-t border-zinc-200 pt-6">
                <div className="flex items-baseline gap-2 mb-1.5">
                  <span className="font-display font-black text-6xl text-zinc-900 leading-none">
                    +6
                  </span>
                  <span className="font-display font-bold text-xl text-zinc-900">
                    Years
                  </span>
                </div>
                <h4 className="font-display font-bold text-lg text-zinc-900 mb-1">
                  Professional Experience
                </h4>
                <p className="font-sans text-xs text-zinc-500 leading-relaxed max-w-sm">
                  Deeply specialized in building production-grade Next.js applications, scalable API architectures, and fast React codebases for corporate and real estate brands across Europe.
                </p>
              </div>

              {/* Stat 2: Delivered Deliverables */}
              <div className="border-t border-zinc-200 pt-6">
                <div className="flex items-baseline gap-2 mb-1.5">
                  <span className="font-display font-black text-6xl text-zinc-900 leading-none">
                    +42
                  </span>
                  <span className="font-display font-bold text-xl text-zinc-900">
                    Delivered
                  </span>
                </div>
                <h4 className="font-display font-bold text-lg text-zinc-900 mb-1">
                  Masterful Client Launchings
                </h4>
                <p className="font-sans text-xs text-zinc-500 leading-relaxed max-w-sm">
                  Successfully deployed robust real estate presentations, custom interactive bistro systems, logistics portals, and luxury hospitality platforms with flawless execution times.
                </p>
              </div>

              {/* Stat 3: Fast Delivery */}
              <div className="border-t border-zinc-200 pt-6">
                <div className="flex items-baseline gap-2 mb-1.5">
                  <span className="font-display font-black text-6xl text-zinc-900 leading-none">
                    48-72h
                  </span>
                  <span className="font-display font-bold text-xl text-zinc-900">
                    Delivery
                  </span>
                </div>
                <h4 className="font-display font-bold text-lg text-zinc-900 mb-1">
                  Rapid Next.js Project Turnaround
                </h4>
                <p className="font-sans text-xs text-zinc-500 leading-relaxed max-w-sm">
                  Send me a full brief, Figma file, or just a text idea - and I deliver a production-ready Next.js project within 48 to 72 hours. No endless meetings, just fast execution.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
