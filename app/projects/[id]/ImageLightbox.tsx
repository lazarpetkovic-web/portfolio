"use client";

import { useState } from "react";

export default function ImageLightbox({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Clickable Image */}
      <div
        onClick={() => setIsOpen(true)}
        className="aspect-video rounded-2xl border border-white/10 relative overflow-hidden bg-gradient-to-br from-purple-600/20 to-pink-600/20 cursor-pointer group"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-9xl opacity-10">🌐</div>
        </div>
        {/* Actual Image */}
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-contain md:p-8 p-0 group-hover:scale-105 transition-transform duration-300"
        />
        {/* Click Hint */}
        <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity">
          Click to enlarge
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-200"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-10"
          >
            ×
          </button>
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
