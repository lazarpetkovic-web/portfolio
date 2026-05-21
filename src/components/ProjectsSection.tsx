/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowUpRight, 
  SlidersHorizontal,
  ChevronDown 
} from 'lucide-react';
import { PROJECTS } from '../data';

const PER_PAGE = 6;

export default function ProjectsSection() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState(PER_PAGE);

  const categories = ['All', 'Real Estate', 'Restaurant', 'Logistics', 'Hospitality', 'Interior Design', 'Construction', 'Corporate'];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      return selectedCategory === 'All' || project.category === selectedCategory;
    });
  }, [selectedCategory]);

  useEffect(() => {
    setVisibleCount(PER_PAGE);
  }, [selectedCategory]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;



  return (
    <section id="work-section" className="relative py-24 bg-white border-b border-zinc-200/40 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Label Tag */}
        <div className="mb-4">
          <span className="bg-zinc-100 border border-zinc-200 text-zinc-800 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            Portfolio
          </span>
        </div>

        {/* 2-Column Title section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-6">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-zinc-900 tracking-tight leading-tight select-none">
              Explore my archive of engineered web systems
            </h2>
          </div>
          <div className="lg:col-span-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 w-full lg:pt-4">
            <p className="font-sans text-sm text-zinc-500 leading-relaxed max-w-sm">
              Discover a production archive of customized real-estate plans, gastropub system frameworks, and transport logistics panels developed across Central Europe.
            </p>
          </div>
        </div>

        {/* Tabs for Category Selection */}
        <div className="flex flex-wrap gap-2.5 mb-12 pb-3 border-b border-zinc-200/60" id="project-categories-tabs">
          {categories.map((category) => (
            <button
              key={category}
              id={`filter-tab-${category.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setSelectedCategory(category)}
              className={`px-4.5 py-2 rounded-full font-mono text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-zinc-900 text-white shadow-xs'
                  : 'bg-transparent text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Responsive layout matches original-3d57befd117b37dde91e87086e57d9ba.png grid precisely */}
        {filteredProjects.length > 0 ? (
          <div id="projects-bento-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => navigate(`/project/${project.id}`)}
                className="group bg-white rounded-[2rem] p-6 border border-zinc-200/80 hover:border-zinc-300 shadow-sm hover:shadow-md transition-all duration-500 cursor-pointer flex flex-col justify-between h-full relative"
              >
                <div>
                  {/* Project Image representation */}
                  <div className="mb-6 relative overflow-hidden rounded-2xl border border-zinc-200/60 transition-all duration-500 select-none aspect-[16/10] bg-zinc-50 flex items-center justify-center">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  </div>

                  {/* Categories layout tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[9px] font-extrabold text-zinc-700 bg-zinc-100 px-3 py-1 rounded-full uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.tags[0] && (
                      <span className="font-mono text-[10px] text-zinc-400 font-semibold">
                        {project.tags[0]}
                      </span>
                    )}
                  </div>

                  {/* Title and synopsis details */}
                  <h3 className="font-display font-extrabold text-xl text-zinc-900 group-hover:underline tracking-tight transition-colors mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs text-zinc-500 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Footer stack tags */}
                <div className="border-t border-zinc-150 pt-5 mt-6 flex items-center justify-between font-mono text-[11px] text-zinc-400 font-semibold">
                  <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-zinc-500">#{tag}</span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="text-[10px] text-zinc-300">+{project.tags.length - 2}</span>
                    )}
                  </div>

                  <div className="flex items-center gap-1 text-zinc-800 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                    <span className="uppercase text-[9px] tracking-widest font-bold">Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : null}

        {/* Load More / Show Less */}
        {filteredProjects.length > 0 && (
          <div className="flex justify-center mt-12">
            {hasMore ? (
              <button
                onClick={() => setVisibleCount((prev) => prev + PER_PAGE)}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 text-white font-sans text-xs font-bold uppercase tracking-wider hover:bg-zinc-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Load More
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </button>
            ) : filteredProjects.length > PER_PAGE ? (
              <button
                onClick={() => setVisibleCount(PER_PAGE)}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-100 text-zinc-700 font-sans text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-all duration-300"
              >
                Show Less
              </button>
            ) : null}
          </div>
        )}

        {filteredProjects.length === 0 ? (
          <div id="no-projects-state" className="flex flex-col items-center justify-center py-20 bg-zinc-50 rounded-3xl border border-dashed border-zinc-200">
            <SlidersHorizontal className="w-8 h-8 text-zinc-300 stroke-1 animate-pulse mb-3" />
            <h4 className="font-display text-sm text-zinc-500 font-medium mb-1">No matching projects found</h4>
          </div>
        ) : null}

      </div>
    </section>
  );
}
