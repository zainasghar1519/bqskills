import React, { useEffect } from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onInquire: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#E9E6F0] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-service-title"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-[#666675] hover:text-[#111114] hover:bg-[#F7F5FC] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Small Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#5A24B0]" />
          <span className="text-xs font-bold tracking-widest text-[#5A24B0] uppercase">
            SERVICE OVERVIEW & DELIVERABLES
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 id="modal-service-title" className="text-2xl sm:text-3xl font-extrabold text-[#111114] mb-2">
          {service.title}
        </h3>
        <p className="text-sm sm:text-base text-[#5A24B0] font-medium mb-6">
          {service.tagline}
        </p>

        {/* Description */}
        <p className="text-sm text-[#666675] leading-relaxed mb-8">
          {service.description}
        </p>

        {/* Two-Column Grid: Subservices & Key Deliverables */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 pt-6 border-t border-[#E9E6F0]">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111114] mb-4">
              Scope & Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-[#666675]">
              {service.subservices.map((sub, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#5A24B0] shrink-0 mt-0.5" />
                  <span>{sub}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111114] mb-4">
              Standard Deliverables
            </h4>
            <ul className="space-y-2.5 text-xs text-[#666675]">
              {service.deliverables.map((del, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5A24B0] shrink-0 mt-1.5" />
                  <span className="font-medium text-[#111114]">{del}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-6 border-t border-[#E9E6F0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-[#666675] hover:text-[#111114] cursor-pointer"
          >
            Close Preview
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onInquire(service.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#5A24B0] hover:bg-[#481c91] transition-all cursor-pointer shadow-xs"
          >
            <span>Inquire About This Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
