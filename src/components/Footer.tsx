import React from 'react';
import { Logo } from './Logo';
import { SERVICES_DATA, AGENCY_CONTACT_INFO } from '../data/agencyData';
import { Mail, Phone, MapPin, ArrowUp, Linkedin, Twitter, Instagram, Github } from 'lucide-react';

interface FooterProps {
  onSelectServiceLink: (serviceTitle: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectServiceLink }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#work' },
    { label: 'About Us', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#111114] text-white pt-20 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Brand & Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-800">
          
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <Logo variant="light" size="lg" showTagline={true} />
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed max-w-sm mb-6">
                Creative design, digital development, and strategic marketing for businesses ready to grow.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-[#5A24B0] hover:text-[#A855F7] text-neutral-400 flex items-center justify-center transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-[#5A24B0] hover:text-[#A855F7] text-neutral-400 flex items-center justify-center transition-colors"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-[#5A24B0] hover:text-[#A855F7] text-neutral-400 flex items-center justify-center transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-[#5A24B0] hover:text-[#A855F7] text-neutral-400 flex items-center justify-center transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <button
                    type="button"
                    onClick={() => onSelectServiceLink(srv.title)}
                    className="text-neutral-400 hover:text-[#A855F7] transition-colors text-left cursor-pointer"
                  >
                    {srv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information Placeholders */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-5">
              Contact Details
            </h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#A855F7] shrink-0 mt-0.5" />
                <a href={`mailto:${AGENCY_CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                  {AGENCY_CONTACT_INFO.emailLabel}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#A855F7] shrink-0 mt-0.5" />
                <span>{AGENCY_CONTACT_INFO.whatsappLabel}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#A855F7] shrink-0 mt-0.5" />
                <span>{AGENCY_CONTACT_INFO.address}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © 2026 BQ Skills. All rights reserved. Brand positioning: Design. Develop. Market.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
