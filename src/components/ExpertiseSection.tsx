/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export default function ExpertiseSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const services = [
    {
      id: 'srv-platform-migration',
      title: 'Platform Migration to Next.js',
      description: 'Seamlessly convert WordPress, Webflow, Wix, Shopify, or legacy static sites into modern, production-grade Next.js applications. I extract your content, rebuild your UI with React server components, optimize Core Web Vitals, and deploy on Vercel - delivering 2-5x faster load times, superior SEO, and a future-proof architecture.',
      highlight: true
    },
    {
      id: 'srv-frontend-eng',
      title: 'Frontend Engineering',
      description: 'Building blazing-fast user interfaces in React 19, TypeScript models, modular component libraries, and clean custom animations.',
      highlight: false
    },
    {
      id: 'srv-nextjs',
      title: 'Next.js Full-Stack Development',
      description: 'Building production-grade Next.js apps with App Router, server components, REST/tRPC APIs, and seamless database integrations.',
      highlight: false
    },
    {
      id: 'srv-conversion-opt',
      title: 'Conversion Experience',
      description: 'Optimizing and profiling pages for lightning-fast loads, robust technical SEO structures, clean copy spacing, and flawless conversion funnels.',
      highlight: false
    }
  ];

  return (
    <section id="expertise-section" className="relative py-24 bg-white border-b border-zinc-200/40 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Tag tag */}
        <div className="mb-4">
          <span className="bg-zinc-100/90 border border-zinc-200 text-zinc-800 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            Services
          </span>
        </div>

        {/* 2-Column Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block: Title, Bio Description and action button */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-32">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-zinc-900 tracking-tight leading-tight select-none">
              Migrate your existing platform to Next.js - faster, scalable, future-proof
            </h2>
            <p className="font-sans text-sm sm:text-[15px] text-zinc-500 leading-relaxed max-w-sm">
              I specialize in converting WordPress, Webflow, Wix, and legacy sites into high-performance Next.js applications - preserving your content while massively upgrading speed, SEO, and developer experience.
            </p>
            
            {/* Outlined brand button matching Duwy left button */}
            <button
              onClick={() => scrollToSection('contact-section')}
              className="group/btn w-fit mt-2 px-6 py-3 font-sans text-xs font-bold text-white bg-zinc-900 border border-zinc-950 rounded-full hover:bg-zinc-950 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer flex items-center gap-1.5"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
          </div>

          {/* Right Block: 2x2 asymmetric interactive service items grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6" id="services-grid-container">
            {services.map((srv) => (
              <div
                key={srv.id}
                id={srv.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between aspect-square group transition-all duration-500 hover:-translate-y-1.5 cursor-pointer ${
                  srv.highlight
                    ? 'bg-zinc-900 text-white shadow-lg border border-zinc-950'
                    : 'bg-zinc-50 border border-zinc-200 text-zinc-900 hover:border-zinc-300 hover:shadow-2xs'
                }`}
                onClick={() => scrollToSection('contact-section')}
              >
                <div>
                  {/* Service Title */}
                  <h3 className={`font-display font-bold text-xl sm:text-2xl mb-4 tracking-tight ${
                    srv.highlight ? 'text-white' : 'text-zinc-900'
                  }`}>
                    {srv.title}
                  </h3>
                  {/* Service Description */}
                  <p className={`font-sans text-xs leading-relaxed ${
                    srv.highlight ? 'text-zinc-300' : 'text-zinc-500'
                  }`}>
                    {srv.description}
                  </p>
                </div>

                {/* Arrow icon placed exactly at bottom-right corner */}
                <div className="self-end mt-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                    srv.highlight ? 'bg-white/10 text-white' : 'bg-zinc-200/50 text-zinc-900'
                  }`}>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
