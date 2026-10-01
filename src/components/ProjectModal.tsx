import React, { useEffect, useState } from 'react';
import { X, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';
import { PortfolioItem } from '../types';

interface ProjectModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
  onRequestSimilar: (title: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onRequestSimilar }) => {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setImgError(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#E9E6F0] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-[#666675] hover:text-[#111114] hover:bg-[#F7F5FC] transition-colors cursor-pointer z-10"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Image Frame */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#F7F5FC] mb-6 border border-[#E9E6F0]">
          {!imgError ? (
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#F7F5FC] to-[#EDE7F9]">
              <Layers className="w-10 h-10 text-[#5A24B0] mb-2" />
              <span className="font-bold text-[#111114]">{project.title}</span>
            </div>
          )}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg border border-[#E9E6F0] text-xs font-bold text-[#111114]">
            {project.category}
          </div>
        </div>

        {/* Title */}
        <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-[#111114] mb-3">
          {project.title}
        </h3>

        {/* Summary */}
        <p className="text-sm sm:text-base text-[#666675] leading-relaxed mb-6">
          {project.summary}
        </p>

        {/* Two-Column Specs: Stack & Deliverables */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 p-5 rounded-2xl bg-[#F7F5FC] border border-[#E9E6F0]">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111114] mb-3">
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span key={tech} className="text-xs font-medium text-[#111114] bg-white px-2.5 py-1 rounded-lg border border-[#E9E6F0]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111114] mb-3">
              Project Deliverables
            </h4>
            <ul className="space-y-1.5 text-xs text-[#666675]">
              {project.deliverables.map((d, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5A24B0] shrink-0" />
                  <span className="text-[#111114] font-medium">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Transparency Notice */}
        <div className="text-xs text-[#666675] mb-6 italic">
          * Notice: Curated agency showcase layout. Real BQ Skills client case studies and metrics will be integrated upon confirmation.
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-[#E9E6F0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-[#666675] hover:text-[#111114] cursor-pointer"
          >
            Back to Portfolio
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onRequestSimilar(project.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#5A24B0] hover:bg-[#481c91] transition-all cursor-pointer shadow-xs"
          >
            <span>Start a Similar Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
