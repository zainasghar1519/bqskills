import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

interface CTASectionProps {
  onStartProject: () => void;
  onTalkToTeam: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onStartProject, onTalkToTeam }) => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24 bg-[#5A24B0] text-white">
      {/* Restrained Geometric Aura */}
      <div 
        className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-2xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/20 rounded-full blur-2xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Subtle Label */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-white" aria-hidden="true" />
          <span className="text-xs font-bold tracking-widest text-purple-200 uppercase">
            LET'S COLLABORATE
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight text-balance">
          Have an Idea? Let's Make It Happen.
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg text-purple-100 max-w-2xl mx-auto mb-10 leading-relaxed">
          Tell us what you're building. We'll help you explore the right design, development, and marketing solution for your goals.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            type="button"
            onClick={onStartProject}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-[#111114] bg-white hover:bg-neutral-100 active:bg-neutral-200 transition-all shadow-md cursor-pointer whitespace-nowrap"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 text-[#5A24B0]" />
          </button>

          <button
            type="button"
            onClick={onTalkToTeam}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-white hover:text-purple-200 underline decoration-purple-300 underline-offset-4 transition-colors cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Talk to Our Team</span>
          </button>
        </div>

      </div>
    </section>
  );
};
