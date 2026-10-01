import React, { useState } from 'react';
import { ArrowRight, Layers, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onExploreWork }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white">
      {/* Subtle architectural background grid & lavender aura */}
      <div 
        className="absolute top-0 right-0 w-3/4 h-[600px] pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#EDE7F9] via-[#F7F5FC] to-transparent -z-10" 
        aria-hidden="true"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Small Unboxed Label */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#5A24B0]" aria-hidden="true" />
              <span className="text-xs font-bold tracking-widest text-[#5A24B0] uppercase">
                YOUR DIGITAL GROWTH PARTNER
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111114] tracking-tight leading-[1.12] mb-6 text-balance">
              We Turn Ideas Into{' '}
              <span className="text-[#5A24B0] inline-block relative">
                Digital Experiences
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3 text-[#5A24B0]/25 overflow-visible"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M1 9.5C28 2.5 72 2.5 99 9.5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-lg text-[#666675] leading-relaxed max-w-xl mb-8">
              Creative design, powerful development, and strategic marketing — everything your business needs to stand out and grow online.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <button
                type="button"
                onClick={onStartProject}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-[#5A24B0] hover:bg-[#481c91] active:bg-[#3c177a] rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
              >
                <span>Let's Build Something</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onExploreWork}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-[#111114] bg-white hover:bg-[#F7F5FC] border border-[#E9E6F0] hover:border-[#5A24B0] rounded-xl transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Explore Our Work</span>
              </button>
            </div>

            {/* Trust Statement */}
            <div className="pt-6 border-t border-[#E9E6F0]/80">
              <p className="text-sm font-medium text-[#666675] flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="font-semibold text-[#111114]">Creative Thinking</span>
                <span className="text-[#E9E6F0]" aria-hidden="true">·</span>
                <span className="font-semibold text-[#111114]">Smart Technology</span>
                <span className="text-[#E9E6F0]" aria-hidden="true">·</span>
                <span className="font-semibold text-[#111114]">Measurable Growth</span>
              </p>
            </div>

          </div>

          {/* Right Column: Sophisticated Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Lavender Base Container with Subtle Border */}
              <div className="relative rounded-2xl p-3 sm:p-4 bg-gradient-to-b from-[#F7F5FC] to-white border border-[#E9E6F0] shadow-sm overflow-hidden">
                
                {/* Main Agency Visual */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#F7F5FC] border border-[#E9E6F0]/60">
                  {!imgError ? (
                    <img
                      src="/src/assets/images/hero_agency_showcase_1790874487723.jpg"
                      alt="BQ Skills Digital Agency Project Showcase - Design, Development, and Marketing"
                      referrerPolicy="no-referrer"
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-500"
                    />
                  ) : (
                    /* High-Fidelity Styled CSS Fallback */
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#F7F5FC] to-[#EDE7F9] text-center">
                      <div className="w-14 h-14 rounded-2xl bg-[#5A24B0] text-white flex items-center justify-center mb-4 shadow-md">
                        <Layers className="w-7 h-7" />
                      </div>
                      <h2 className="text-lg font-bold text-[#111114]">Integrated Digital Craft</h2>
                      <p className="text-sm text-[#666675] max-w-xs mt-1">Design · Engineering · Growth</p>
                    </div>
                  )}

                  {/* Subtle Gradient Overlays for High-End Studio Depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Overlaid Micro-Proof Card 1: Design & Development */}
                <div className="absolute top-7 right-7 sm:top-8 sm:right-8 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-[#E9E6F0] shadow-md hidden sm:flex items-center gap-3 animate-in fade-in duration-300">
                  <div className="w-8 h-8 rounded-lg bg-[#5A24B0]/10 text-[#5A24B0] flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#111114]">UI/UX & Code Craft</div>
                    <div className="text-[11px] text-[#666675]">Custom High-Performance Build</div>
                  </div>
                </div>

                {/* Overlaid Micro-Proof Card 2: Marketing & Growth */}
                <div className="absolute bottom-7 left-7 sm:bottom-8 sm:left-8 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-[#E9E6F0] shadow-md hidden sm:flex items-center gap-3 animate-in fade-in duration-300">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#111114]">Growth-Driven Strategy</div>
                    <div className="text-[11px] text-[#666675]">Built for Conversion & Reach</div>
                  </div>
                </div>

              </div>

              {/* Decorative Subtle Corner Accent */}
              <div 
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#5A24B0]/5 rounded-2xl -z-10 blur-xl" 
                aria-hidden="true" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
