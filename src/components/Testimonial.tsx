/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TESTIMONIALS } from '../data';

export default function Testimonial() {
  const t = TESTIMONIALS[0];

  return (
    <section className="relative py-28 bg-zinc-50 border-b border-zinc-200/40">
      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">

        <div className="text-zinc-200 font-display text-[8rem] font-bold leading-none select-none h-12 flex items-center justify-center mb-8">
          “
        </div>

        <blockquote className="font-sans font-medium italic text-xl sm:text-2xl md:text-3xl text-zinc-900 leading-relaxed mb-6 max-w-3xl">
          "{t.quote}"
        </blockquote>

        <p className="font-sans font-medium italic text-base sm:text-lg text-zinc-500 leading-relaxed max-w-2xl mb-10">
          "{t.secondary}"
        </p>

        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-zinc-200 shadow-2xs bg-zinc-200 flex items-center justify-center">
            <span className="font-display font-black text-zinc-500 text-lg">{t.initials}</span>
          </div>
          <div>
            <h4 className="font-display font-extrabold text-[14px] text-zinc-900 tracking-tight">
              {t.author}
            </h4>
            <p className="font-sans text-[11px] text-zinc-400 font-semibold uppercase tracking-wider">
              {t.role}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
