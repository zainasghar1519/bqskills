import React from 'react';
import { 
  Palette, 
  Code2, 
  ShoppingBag, 
  Smartphone, 
  Megaphone, 
  TrendingUp, 
  ArrowRight,
  Check
} from 'lucide-react';
import { SERVICES_DATA } from '../data/agencyData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
  onInquireService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService, onInquireService }) => {
  // Mapping service IDs to clean line icons
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'ui-ux-design':
        return <Palette className="w-6 h-6" />;
      case 'web-development':
        return <Code2 className="w-6 h-6" />;
      case 'ecommerce':
        return <ShoppingBag className="w-6 h-6" />;
      case 'mobile-apps':
        return <Smartphone className="w-6 h-6" />;
      case 'digital-marketing':
        return <Megaphone className="w-6 h-6" />;
      case 'seo-growth':
        return <TrendingUp className="w-6 h-6" />;
      default:
        return <Code2 className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F7F5FC]/60 border-t border-b border-[#E9E6F0]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#5A24B0]" aria-hidden="true" />
            <span className="text-xs font-bold tracking-widest text-[#5A24B0] uppercase">
              CAPABILITIES & EXPERTISE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111114] tracking-tight mb-4 text-balance">
            Everything You Need to Grow Digitally.
          </h2>
          <p className="text-base sm:text-lg text-[#666675] leading-relaxed">
            From the first idea to the final launch, we bring creativity, technology, and strategy together.
          </p>
        </div>

        {/* 6 Elegant Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl p-7 border border-[#E9E6F0] hover:border-[#5A24B0]/60 transition-all duration-300 flex flex-col justify-between hover:shadow-md"
            >
              {/* Top Accent & Icon */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#F7F5FC] group-hover:bg-[#5A24B0] text-[#5A24B0] group-hover:text-white flex items-center justify-center transition-colors duration-300">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="text-xs font-semibold text-[#666675]/60 tabular-nums">
                    0{index + 1}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-[#111114] mb-3 group-hover:text-[#5A24B0] transition-colors">
                  {service.title}
                </h3>

                {/* Service Short Description */}
                <p className="text-sm text-[#666675] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Included Subservices list */}
                <ul className="space-y-2 mb-6 pt-4 border-t border-[#E9E6F0]/60 text-xs text-[#666675]">
                  {service.subservices.slice(0, 4).map((sub, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#5A24B0] shrink-0" />
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Actions: Learn More & Quick Inquiry */}
              <div className="pt-4 border-t border-[#E9E6F0]/60 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5A24B0] hover:text-[#481c91] transition-colors cursor-pointer group-hover:translate-x-0.5"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => onInquireService(service.title)}
                  className="text-xs font-medium text-[#666675] hover:text-[#111114] transition-colors cursor-pointer"
                >
                  Start Project
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
