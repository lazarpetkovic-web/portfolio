/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUpRight, ArrowRight } from 'lucide-react';

export default function ExpertiseSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const services = [
    {
      id: 'srv-fast-nextjs',
      title: 'Fast Next.js Delivery',
      description: 'Lightning-fast Next.js websites delivered in 48–72 hours without sacrificing quality, responsiveness, or performance. Every build is optimized for speed, SEO, and modern user experience from day one.',
      highlight: true
    },
    {
      id: 'srv-responsive',
      title: 'Pixel-Perfect Responsive Development',
      description: 'Accurate Figma-to-code implementation built to work flawlessly across desktop, tablet, and mobile devices. Clean layouts, smooth responsiveness, and attention to detail in every section.',
      highlight: false
    },
    {
      id: 'srv-cms',
      title: 'Headless CMS Integrations',
      description: 'Flexible CMS setups using platforms like Sanity, Strapi, or Contentful, allowing clients to easily manage content, blog posts, images, and updates without relying on developers.',
      highlight: false
    },
    {
      id: 'srv-seo',
      title: 'SEO & Clean Production Code',
      description: 'Production-ready architecture with built-in technical SEO, optimized Core Web Vitals, semantic structure, and scalable clean code designed for long-term performance and maintainability.',
      highlight: false
    }
  ];

  return (
    <section id="expertise-section" className="relative py-24 bg-white border-b border-zinc-200/40 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Tag tag */}
        <div className="mb-4">
          <span className="bg-zinc-100/90 border border-zinc-200 text-zinc-800 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            For Agencies
          </span>
        </div>

        {/* 2-Column Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block: Title, Bio Description and action button */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-32">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-zinc-900 tracking-tight leading-tight select-none">
              White-Label Next.js Partner for Agencies
            </h2>
            <p className="font-sans text-sm sm:text-[15px] text-zinc-500 leading-relaxed max-w-sm">
              Need a reliable developer to execute your Figma designs or client projects?
            </p>
            <p className="font-sans text-sm sm:text-[15px] text-zinc-500 leading-relaxed max-w-sm">
              I help agencies deliver:
            </p>
            <ul className="font-sans text-sm sm:text-[15px] text-zinc-500 leading-relaxed max-w-sm list-disc pl-5 space-y-1">
              <li>Fast Next.js websites</li>
              <li>Full responsive implementation</li>
              <li>CMS integrations</li>
              <li>SEO optimization</li>
              <li>Clean production-ready code</li>
            </ul>
            <p className="font-sans text-sm sm:text-[15px] text-zinc-500 leading-relaxed max-w-sm">
              Delivered under your brand.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-2">
              <button
                onClick={() => scrollToSection('contact-section')}
                className="group/btn px-6 py-3 font-sans text-xs font-bold text-white bg-zinc-900 border border-zinc-950 rounded-full hover:bg-zinc-950 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer flex items-center gap-1.5"
              >
                <span>Partner With Me</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
              <button
                onClick={() => scrollToSection('contact-section')}
                className="group/btn px-6 py-3 font-sans text-xs font-bold text-zinc-900 bg-transparent border border-zinc-300 rounded-full hover:bg-zinc-100 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer flex items-center gap-1.5"
              >
                <span>How Collaboration Works</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Block: 2x2 service items grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 auto-rows-fr gap-6" id="services-grid-container">
            {services.map((srv) => (
              <div
                key={srv.id}
                id={srv.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between group transition-all duration-500 hover:-translate-y-1.5 cursor-pointer ${
                  srv.highlight
                    ? 'bg-zinc-900 text-white shadow-lg border border-zinc-950'
                    : 'bg-zinc-50 border border-zinc-200 text-zinc-900 hover:border-zinc-300 hover:shadow-2xs'
                }`}
                onClick={() => scrollToSection('contact-section')}
              >
                <div>
                  <h3 className={`font-display font-bold text-xl sm:text-2xl mb-4 tracking-tight ${
                    srv.highlight ? 'text-white' : 'text-zinc-900'
                  }`}>
                    {srv.title}
                  </h3>
                  <p className={`font-sans text-xs leading-relaxed ${
                    srv.highlight ? 'text-zinc-300' : 'text-zinc-500'
                  }`}>
                    {srv.description}
                  </p>
                </div>

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
