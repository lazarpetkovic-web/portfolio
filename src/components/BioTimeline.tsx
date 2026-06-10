/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TIMELINE } from '../data';

export default function BioTimeline() {
  return (
    <section id="experience-section" className="relative py-24 bg-zinc-50 border-b border-zinc-200/40 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Experience Label tag */}
        <div className="mb-4">
          <span className="bg-zinc-100 border border-zinc-200/80 text-zinc-800 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            Experience
          </span>
        </div>

        {/* 2-Column Experience Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading and Summary text */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-zinc-900 tracking-tight leading-tight select-none">
              A Yearly snapshot of my web engineering milestones
            </h2>
            <p className="font-sans text-sm text-zinc-500 leading-relaxed">
              An annual summary that maps out my professional journey, web development roles, and software system milestones throughout the years.
            </p>
          </div>

          {/* Right Column: Wide Horizontal Experience Rows - Matching Odama style precisely */}
          <div className="lg:col-span-8 flex flex-col border-t border-zinc-200" id="experience-rows-container">
            {TIMELINE.map((event, index) => (
              <div
                key={index}
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-8 px-6 border-b border-zinc-200 transition-all duration-500 hover:bg-zinc-100/70 rounded-2xl cursor-pointer"
              >
                {/* Left side: Role details */}
                <div className="flex-1 max-w-xl">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-zinc-900 leading-tight mb-2 group-hover:text-zinc-950 transition-colors">
                    {event.role}
                  </h3>
                  <p className="font-sans text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                    {event.company}
                  </p>
                  <p className="font-sans text-xs text-zinc-500 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {/* Right side: Giant high-impact year span exactly matching reference layout */}
                <div className="flex-shrink-0 text-left sm:text-right">
                  <span className="font-display font-black text-2xl sm:text-3.5xl lg:text-4xl text-zinc-300 group-hover:text-zinc-600 tracking-tighter transition-all duration-500 select-none">
                    {event.year}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
