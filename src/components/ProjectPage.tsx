import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Compass, X, ChevronLeft, ChevronRight, Images, Lightbulb, Target, Code } from 'lucide-react';
import Footer from './Footer';
import { PROJECTS } from '../data';
import Header from './Header';

function LazyImage({ src, alt, className, onClick }: { src: string; alt: string; className?: string; onClick?: () => void }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden ${className || ''}`} onClick={onClick}>
      {!loaded && <div className="absolute inset-0 bg-zinc-200 animate-pulse" />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${onClick ? 'cursor-pointer' : ''}`}
      />
    </div>
  );
}

export default function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === Number(id));
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <div className="text-center">
          <h1 className="font-display font-bold text-2xl text-zinc-900 mb-4">Project not found</h1>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 text-white font-sans text-xs font-bold uppercase tracking-wider hover:bg-zinc-800 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  let urlHostname = '';
  try {
    if (project.link) {
      urlHostname = new URL(project.link).hostname;
    }
  } catch {
    urlHostname = project.link;
  }

  const allImages = [project.image, ...(project.galleryImages || [])];

  return (
    <div className="min-h-screen bg-zinc-50">
      <Header />

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-zinc-950/90 backdrop-blur-md flex items-center justify-center"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 z-10 p-2 text-white/80 hover:text-white bg-zinc-900/60 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {allImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev === 0 ? allImages.length - 1 : prev! - 1));
                }}
                className="absolute left-4 z-10 p-2 text-white/80 hover:text-white bg-zinc-900/60 rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev === allImages.length - 1 ? 0 : prev! + 1));
                }}
                className="absolute right-4 z-10 p-2 text-white/80 hover:text-white bg-zinc-900/60 rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <img
            src={allImages[lightboxIndex]}
            alt={`${project.title} - ${lightboxIndex + 1}`}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs text-white/60 bg-zinc-900/60 px-3 py-1.5 rounded-full">
            {lightboxIndex + 1} / {allImages.length}
          </span>
        </div>
      )}

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 pt-32 pb-12">
        {/* Category tag */}
        <div className="mb-4">
          <span className="font-mono text-[9px] font-extrabold text-zinc-800 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-full uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-zinc-900 tracking-tight mb-4">
          {project.title}
        </h1>

        <p className="text-sm sm:text-base text-zinc-500 leading-relaxed font-sans mb-6 max-w-2xl">
          {project.description}
        </p>

        {/* Visit Live Button */}
        {project.link && (
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 border border-zinc-950 text-white font-sans text-xs font-bold uppercase tracking-wider hover:bg-zinc-800 transition-all duration-300"
            >
              Visit Live Site
              <ArrowUpRight className="w-4 h-4" />
            </a>
            {urlHostname && (
              <span className="font-mono text-xs text-zinc-400">
                {urlHostname}
              </span>
            )}
          </div>
        )}

        {/* Preview Image */}
        <div
          className="mb-10 relative rounded-[2rem] border border-zinc-200 shadow-sm aspect-[16/10] select-none group"
          onClick={() => setLightboxIndex(0)}
        >
          <LazyImage
            src={project.image}
            alt={project.title}
            className="w-full h-full rounded-[2rem]"
          />
          <div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/10 transition-all duration-300 rounded-[2rem]" />
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-zinc-900/80 backdrop-blur-sm text-white text-[10px] font-mono px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <Images className="w-3.5 h-3.5" />
            {allImages.length} photos
          </div>
        </div>

        {/* Project Tags */}
        <div className="mb-10">
          <h3 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-1.5 border-b border-zinc-200 pb-1.5 font-bold">
            <Compass className="w-3.5 h-3.5 text-zinc-400" />
            Project Tags & Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 text-[10px] font-mono text-zinc-600 bg-zinc-50 border border-zinc-200/80 rounded-xl uppercase font-bold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Case Study */}
        {project.caseStudy && (
          <div className="mb-10 p-8 bg-zinc-900 rounded-3xl text-white">
            <h3 className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-6 flex items-center gap-2 font-bold">
              <Code className="w-3.5 h-3.5" />
              Case Study
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Target className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white mb-1.5">The Challenge</h4>
                    <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                      {project.caseStudy.challenge}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Lightbulb className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white mb-1.5">The Solution</h4>
                    <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                      {project.caseStudy.solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-800 pt-6">
              <h4 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-3 font-bold">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.caseStudy.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-[10px] font-mono bg-zinc-800 border border-zinc-700 text-zinc-300 rounded-xl font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Gallery Grid */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <div className="mb-10">
            <h3 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-1.5 border-b border-zinc-200 pb-1.5 font-bold">
              <Images className="w-3.5 h-3.5 text-zinc-400" />
              Project Gallery
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl border border-zinc-200 shadow-sm aspect-[4/3] group"
                  onClick={() => setLightboxIndex(i + 1)}
                >
                  <LazyImage
                    src={img}
                    alt={`${project.title} gallery ${i + 1}`}
                    className="w-full h-full rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/5 transition-all duration-300 rounded-2xl" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom spacer */}
        <div className="mt-16 pt-8 border-t border-zinc-200/60">
          <button
            onClick={() => navigate('/')}
            className="group inline-flex items-center gap-2 font-sans text-xs font-bold text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to all projects
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
