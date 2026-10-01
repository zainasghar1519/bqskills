/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { CTASection } from './components/CTASection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ServiceModal } from './components/ServiceModal';
import { ProjectModal } from './components/ProjectModal';
import { ServiceItem, PortfolioItem } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [contactServicePrefill, setContactServicePrefill] = useState<string>('');

  const scrollToContact = (serviceTitle?: string) => {
    if (serviceTitle) {
      setContactServicePrefill(serviceTitle);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111114] flex flex-col font-sans selection:bg-[#5A24B0] selection:text-white">
      {/* Sticky Navigation Header */}
      <Navbar onOpenContactModal={() => scrollToContact()} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onStartProject={() => scrollToContact()} 
          onExploreWork={scrollToWork} 
        />

        {/* Services Section */}
        <Services 
          onSelectService={(service) => setSelectedService(service)}
          onInquireService={(serviceTitle) => scrollToContact(serviceTitle)}
        />

        {/* Why Choose BQ Skills? Section (Near-black background for visual depth) */}
        <WhyChooseUs />

        {/* Portfolio / Selected Work Section */}
        <Portfolio 
          onSelectProject={(project) => setSelectedProject(project)}
          onRequestSimilar={(projectTitle) => scrollToContact(projectTitle)}
        />

        {/* Structured 4-Step Process Section */}
        <Process />

        {/* Testimonials with transparent placeholder markings */}
        <Testimonials />

        {/* Call to Action Section (Vibrant purple background) */}
        <CTASection 
          onStartProject={() => scrollToContact()} 
          onTalkToTeam={() => scrollToContact()} 
        />

        {/* Two-Column Contact Section with Form Validation & Info Placeholders */}
        <Contact initialService={contactServicePrefill} />
      </main>

      {/* Near-Black Footer */}
      <Footer onSelectServiceLink={(serviceTitle) => scrollToContact(serviceTitle)} />

      {/* Service Detail Modal */}
      <ServiceModal 
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onInquire={(serviceTitle) => scrollToContact(serviceTitle)}
      />

      {/* Portfolio Showcase Modal */}
      <ProjectModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestSimilar={(projectTitle) => scrollToContact(`Project similar to ${projectTitle}`)}
      />
    </div>
  );
}
