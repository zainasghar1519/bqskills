import React from 'react';
import { Quote, MessageSquare } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/agencyData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#E9E6F0]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#5A24B0]" aria-hidden="true" />
            <span className="text-xs font-bold tracking-widest text-[#5A24B0] uppercase">
              CLIENT TESTIMONIALS & FEEDBACK
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111114] tracking-tight mb-4">
            Good Work Builds Good Relationships.
          </h2>
          <p className="text-base sm:text-lg text-[#666675]">
            We measure our success by the clarity, longevity, and impact of the digital solutions we deliver.
          </p>
        </div>

        {/* 3 Testimonial Cards with Editable Placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-[#F7F5FC]/70 rounded-2xl p-8 border border-[#E9E6F0] flex flex-col justify-between hover:border-[#5A24B0]/40 transition-colors"
            >
              <div>
                {/* Clean Quote Icon */}
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E9E6F0] text-[#5A24B0] flex items-center justify-center mb-6 shadow-xs">
                  <Quote className="w-5 h-5" />
                </div>

                {/* Quote Text */}
                <blockquote className="text-sm sm:text-base text-[#111114] leading-relaxed mb-6 font-medium italic">
                  "{item.quote.replace(/^\[Client Testimonial Placeholder — "/, '').replace(/"\]$/, '')}"
                </blockquote>
              </div>

              {/* Attribution / Client Placeholder */}
              <div className="pt-6 border-t border-[#E9E6F0] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#EDE7F9] border border-[#E9E6F0] flex items-center justify-center text-[#5A24B0] font-bold text-xs shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#111114]">
                    {item.author.replace(/\[|\]/g, '')}
                  </div>
                  <div className="text-xs text-[#666675]">
                    {item.role.replace(/\[|\]/g, '')} · {item.company.replace(/\[|\]/g, '')}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Section Notice Indicator */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#666675]">
            [Editable Testimonial Slot — To be updated with genuine verified client feedback and project case studies]
          </p>
        </div>

      </div>
    </section>
  );
};
