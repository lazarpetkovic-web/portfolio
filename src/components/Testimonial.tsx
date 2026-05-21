/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export default function Testimonial() {
  return (
    <section className="relative py-28 bg-zinc-50 border-b border-zinc-200/40">
      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Giant quotation mark in soft zinc-200 matching the reference */}
        <div className="text-zinc-200 font-display text-[8rem] font-bold leading-none select-none h-12 flex items-center justify-center mb-8">
          “
        </div>

        {/* First paragraph of italic quote */}
        <blockquote className="font-sans font-medium italic text-xl sm:text-2xl md:text-3xl text-zinc-900 leading-relaxed mb-6 max-w-3xl">
          "Lazar built my complete brand presence from scratch - a dynamic website that perfectly captures the energy of my DJ sets. The booking system and music portfolio integration work flawlessly."
        </blockquote>

        {/* Secondary paragraph of italic quote */}
        <p className="font-sans font-medium italic text-base sm:text-lg text-zinc-500 leading-relaxed max-w-2xl mb-10">
          "I needed a site that looks as good on a phone as it does on a big screen, with smooth animations and instant load times. Lazar delivered exactly that. Since going live, I've been getting more gig inquiries than ever before."
        </p>

        {/* User Author Avatar and details */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-zinc-200 shadow-2xs bg-zinc-200 flex items-center justify-center">
            <span className="font-display font-black text-zinc-500 text-lg">MP</span>
          </div>
          <div>
            <h4 className="font-display font-extrabold text-[14px] text-zinc-900 tracking-tight">
              Milan Pešić
            </h4>
            <p className="font-sans text-[11px] text-zinc-400 font-semibold uppercase tracking-wider">
              DJ Sync
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
