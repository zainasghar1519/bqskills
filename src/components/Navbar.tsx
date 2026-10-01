import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContactModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#work' },
    { label: 'About Us', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleCtaClick = () => {
    setMobileMenuOpen(false);
    if (onOpenContactModal) {
      onOpenContactModal();
    } else {
      const contactEl = document.querySelector('#contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-200 bg-white/95 backdrop-blur-md ${
        isScrolled ? 'border-b border-[#E9E6F0] shadow-xs' : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict 3-Zone Top Bar Contract */}
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Brand Wordmark Element */}
          <a 
            href="#" 
            onClick={(e) => handleNavClick(e, '#')} 
            className="flex items-center focus-visible:outline-2 focus-visible:outline-[#5A24B0] rounded-lg"
            aria-label="BQ Skills Home"
          >
            <Logo variant="dark" size="md" />
          </a>

          {/* Zone 2: 4-6 Clean Text Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-[#111114] hover:text-[#5A24B0] transition-colors relative py-1 focus-visible:outline-2 focus-visible:outline-[#5A24B0] rounded-sm whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleCtaClick}
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-white bg-[#5A24B0] hover:bg-[#481c91] active:bg-[#3c177a] rounded-xl transition-all shadow-xs hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5A24B0] cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4 opacity-90" aria-hidden="true" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex md:hidden items-center justify-center p-2 rounded-lg text-[#111114] hover:text-[#5A24B0] hover:bg-[#F7F5FC] focus-visible:outline-2 focus-visible:outline-[#5A24B0]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E9E6F0] bg-white px-4 pt-3 pb-6 shadow-lg animate-in fade-in duration-150">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-[#111114] hover:bg-[#F7F5FC] hover:text-[#5A24B0] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-[#E9E6F0]">
              <button
                onClick={handleCtaClick}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white bg-[#5A24B0] hover:bg-[#481c91] font-semibold text-sm transition-colors shadow-sm"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
