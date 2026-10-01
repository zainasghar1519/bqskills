import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Filter, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/agencyData';
import { PortfolioItem } from '../types';

interface PortfolioProps {
  onSelectProject: (project: PortfolioItem) => void;
  onRequestSimilar: (projectTitle: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject, onRequestSimilar }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'branding', label: 'Brand Identity' },
    { id: 'marketing', label: 'Digital Marketing' },
    { id: 'landing', label: 'Landing Pages' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((p) => p.categorySlug === activeFilter);

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="work" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#5A24B0]" aria-hidden="true" />
              <span className="text-xs font-bold tracking-widest text-[#5A24B0] uppercase">
                SELECTED WORK & CASE ARCHIVE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111114] tracking-tight mb-3">
              Ideas We've Brought to Life.
            </h2>
            <p className="text-base sm:text-lg text-[#666675] max-w-xl">
              Explore a selection of digital experiences, creative campaigns, and websites.
            </p>
          </div>

          {/* Placeholder Notice Badge (Ensuring 100% Transparency per Brief) */}
          <div className="text-xs text-[#666675] bg-[#F7F5FC] border border-[#E9E6F0] rounded-xl px-4 py-2.5 max-w-xs self-start md:self-auto">
            <span className="font-semibold text-[#5A24B0]">Notice:</span> Curated showcase mockups. Replaceable with client-verified live deployments.
          </div>
        </div>

        {/* Interactive Filter Tabs (Segmented Buttons) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-10 scrollbar-none" role="tablist">
          {filterCategories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#5A24B0] text-white shadow-xs'
                    : 'bg-[#F7F5FC] text-[#666675] hover:text-[#111114] hover:bg-[#EDE7F9]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const hasError = imageErrors[project.id];

            return (
              <div
                key={project.id}
                className="group flex flex-col bg-white rounded-2xl border border-[#E9E6F0] hover:border-[#5A24B0]/50 transition-all duration-300 overflow-hidden hover:shadow-lg"
              >
                {/* Visual Media Container */}
                <div 
                  className="relative aspect-[4/3] bg-[#F7F5FC] overflow-hidden cursor-pointer"
                  onClick={() => onSelectProject(project)}
                >
                  {!hasError ? (
                    <img
                      src={project.image}
                      alt={`${project.title} - ${project.category}`}
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(project.id)}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#F7F5FC] to-[#EDE7F9] text-center">
                      <Sparkles className="w-8 h-8 text-[#5A24B0] mb-2" />
                      <span className="text-sm font-bold text-[#111114]">{project.title}</span>
                      <span className="text-xs text-[#666675]">{project.category}</span>
                    </div>
                  )}

                  {/* Clean unboxed category overlay */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg border border-[#E9E6F0] text-[11px] font-semibold text-[#111114]">
                    {project.category}
                  </div>

                  {/* Interactive Quick View Overlay on Hover */}
                  <div className="absolute inset-0 bg-[#5A24B0]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <span className="px-4 py-2 rounded-xl bg-white text-[#111114] text-xs font-bold shadow-md flex items-center gap-1.5">
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Project Title */}
                    <h3 
                      onClick={() => onSelectProject(project)}
                      className="text-lg font-bold text-[#111114] group-hover:text-[#5A24B0] transition-colors cursor-pointer mb-2 flex items-center justify-between"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#5A24B0]" />
                    </h3>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-[#666675] leading-relaxed mb-4 line-clamp-2">
                      {project.summary}
                    </p>

                    {/* Tech list as clean unboxed typography */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#666675] mb-4">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <React.Fragment key={tech}>
                          <span className="text-[11px] font-medium text-[#111114]">{tech}</span>
                          {i < Math.min(project.technologies.length, 3) - 1 && (
                            <span className="text-[#E9E6F0]" aria-hidden="true">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-4 border-t border-[#E9E6F0]/60 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="text-xs font-bold text-[#5A24B0] hover:text-[#481c91] cursor-pointer inline-flex items-center gap-1"
                    >
                      <span>Explore Showcase</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onRequestSimilar(project.title)}
                      className="text-xs font-medium text-[#666675] hover:text-[#111114] cursor-pointer"
                    >
                      Start Similar
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Portfolio CTA */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={() => onRequestSimilar('Custom Digital Project')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white border border-[#E9E6F0] hover:border-[#5A24B0] text-[#111114] hover:text-[#5A24B0] text-sm font-semibold transition-all shadow-xs cursor-pointer"
          >
            <span>Have a specific project in mind? View Our Full Capabilities</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
