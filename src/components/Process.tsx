import React from 'react';
import { PROCESS_DATA } from '../data/agencyData';
import { Compass, PenTool, Terminal, Rocket } from 'lucide-react';

export const Process: React.FC = () => {
  const stepIcons = [
    <Compass className="w-5 h-5" />,
    <PenTool className="w-5 h-5" />,
    <Terminal className="w-5 h-5" />,
    <Rocket className="w-5 h-5" />,
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#F7F5FC]/50 border-t border-[#E9E6F0]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#5A24B0]" aria-hidden="true" />
            <span className="text-xs font-bold tracking-widest text-[#5A24B0] uppercase">
              STRUCTURED WORKFLOW
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111114] tracking-tight mb-4">
            From First Conversation to Final Launch.
          </h2>
          <p className="text-base sm:text-lg text-[#666675]">
            A transparent four-phase delivery framework designed for predictable timelines and exceptional craft.
          </p>
        </div>

        {/* Process Steps (Desktop: Horizontal Grid with Connecting Bar, Mobile: Vertical Steps) */}
        <div className="relative">
          
          {/* Subtle Connecting Line on Desktop */}
          <div 
            className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-[#E9E6F0] -z-0" 
            aria-hidden="true" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_DATA.map((item, index) => (
              <div 
                key={item.step}
                className="bg-white rounded-2xl p-7 border border-[#E9E6F0] hover:border-[#5A24B0]/50 transition-all duration-300 flex flex-col justify-between hover:shadow-md relative group"
              >
                <div>
                  {/* Step Marker Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#F7F5FC] text-[#5A24B0] group-hover:bg-[#5A24B0] group-hover:text-white flex items-center justify-center transition-colors duration-300 border border-[#E9E6F0]/80 shadow-xs">
                      {stepIcons[index]}
                    </div>
                    <span className="text-sm font-extrabold text-[#5A24B0] tracking-wider tabular-nums bg-[#F7F5FC] px-2.5 py-1 rounded-lg border border-[#E9E6F0]">
                      STEP {item.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#111114] mb-3 group-hover:text-[#5A24B0] transition-colors">
                    {item.title}
                  </h3>

                  {/* Core Description from Prompt */}
                  <p className="text-sm text-[#111114] font-medium leading-relaxed mb-3">
                    {item.description}
                  </p>

                  {/* Explanatory Details */}
                  <p className="text-xs text-[#666675] leading-relaxed">
                    {item.details}
                  </p>
                </div>

                {/* Subtle Bottom Accent Indicator */}
                <div className="mt-6 pt-4 border-t border-[#E9E6F0]/50 flex items-center gap-1.5 text-[11px] font-semibold text-[#666675]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5A24B0]" />
                  <span>Phase {index + 1} Delivery</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
