import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Send, 
  CheckCircle, 
  Clock, 
  Globe, 
  AlertCircle,
  Linkedin,
  Twitter,
  Instagram,
  Github
} from 'lucide-react';
import { AGENCY_CONTACT_INFO, SERVICES_DATA } from '../data/agencyData';
import { InquiryFormData } from '../types';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    company: '',
    serviceRequired: initialService || SERVICES_DATA[0].title,
    budget: '',
    projectDetails: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync initialService if parent passes one
  React.useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceRequired: initialService }));
    }
  }, [initialService]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.serviceRequired) {
      errs.serviceRequired = 'Please select a service';
    }
    if (!formData.projectDetails.trim()) {
      errs.projectDetails = 'Please provide brief details about your project';
    } else if (formData.projectDetails.trim().length < 10) {
      errs.projectDetails = 'Project details should be at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulating realistic reliable transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      company: '',
      serviceRequired: SERVICES_DATA[0].title,
      budget: '',
      projectDetails: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#5A24B0]" aria-hidden="true" />
            <span className="text-xs font-bold tracking-widest text-[#5A24B0] uppercase">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111114] tracking-tight mb-4">
            Let's Talk About Your Project.
          </h2>
          <p className="text-base sm:text-lg text-[#666675]">
            Fill in the details below and we will get back to you with recommended next steps and timeline estimates.
          </p>
        </div>

        {/* Two-Column Grid: Form on Left, Contact Details on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Accessible Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#F7F5FC]/60 rounded-2xl p-6 sm:p-10 border border-[#E9E6F0]">
              
              {isSubmitted ? (
                <div className="py-12 px-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#111114] mb-3">
                    Thank You, {formData.fullName.split(' ')[0]}!
                  </h3>
                  <p className="text-base text-[#666675] max-w-md mx-auto mb-8">
                    Your project inquiry regarding <span className="font-semibold text-[#111114]">{formData.serviceRequired}</span> has been received. Our team will review your requirements and reach out via <span className="font-semibold text-[#111114]">{formData.email}</span> within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#5A24B0] hover:bg-[#481c91] transition-all cursor-pointer shadow-xs"
                  >
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  {/* Row 1: Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold text-[#111114] uppercase tracking-wider mb-2">
                        Full Name <span className="text-[#5A24B0]">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-4 py-3 rounded-xl bg-white border ${
                          errors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-[#E9E6F0]'
                        } text-sm text-[#111114] placeholder-[#666675]/50 focus:outline-none focus:border-[#5A24B0] focus:ring-1 focus:ring-[#5A24B0] transition-colors`}
                        aria-required="true"
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      />
                      {errors.fullName && (
                        <p id="fullName-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-[#111114] uppercase tracking-wider mb-2">
                        Email Address <span className="text-[#5A24B0]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white border ${
                          errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-[#E9E6F0]'
                        } text-sm text-[#111114] placeholder-[#666675]/50 focus:outline-none focus:border-[#5A24B0] focus:ring-1 focus:ring-[#5A24B0] transition-colors`}
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Company (Optional) & Service Required */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-xs font-bold text-[#111114] uppercase tracking-wider mb-2">
                        Company or Brand <span className="text-xs font-normal text-[#666675] lowercase">(optional)</span>
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company Name"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E9E6F0] text-sm text-[#111114] placeholder-[#666675]/50 focus:outline-none focus:border-[#5A24B0] focus:ring-1 focus:ring-[#5A24B0] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="serviceRequired" className="block text-xs font-bold text-[#111114] uppercase tracking-wider mb-2">
                        Service Required <span className="text-[#5A24B0]">*</span>
                      </label>
                      <select
                        id="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E9E6F0] text-sm text-[#111114] focus:outline-none focus:border-[#5A24B0] focus:ring-1 focus:ring-[#5A24B0] transition-colors"
                      >
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.title}>
                            {srv.title}
                          </option>
                        ))}
                        <option value="Complete Digital Transformation">Complete Digital Transformation (Full Suite)</option>
                        <option value="Other Custom Inquiry">Other Custom Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Budget Range (Optional) */}
                  <div>
                    <label htmlFor="budget" className="block text-xs font-bold text-[#111114] uppercase tracking-wider mb-2">
                      Estimated Project Budget <span className="text-xs font-normal text-[#666675] lowercase">(optional)</span>
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#E9E6F0] text-sm text-[#111114] focus:outline-none focus:border-[#5A24B0] focus:ring-1 focus:ring-[#5A24B0] transition-colors"
                    >
                      <option value="">Select an estimated range (optional)</option>
                      <option value="under-2k">&lt; $2,000</option>
                      <option value="2k-5k">$2,000 — $5,000</option>
                      <option value="5k-10k">$5,000 — $10,000</option>
                      <option value="10k-plus">$10,000+</option>
                    </select>
                  </div>

                  {/* Row 4: Project Details */}
                  <div>
                    <label htmlFor="projectDetails" className="block text-xs font-bold text-[#111114] uppercase tracking-wider mb-2">
                      Project Details <span className="text-[#5A24B0]">*</span>
                    </label>
                    <textarea
                      id="projectDetails"
                      rows={4}
                      value={formData.projectDetails}
                      onChange={(e) => {
                        setFormData({ ...formData, projectDetails: e.target.value });
                        if (errors.projectDetails) setErrors({ ...errors, projectDetails: '' });
                      }}
                      placeholder="Briefly describe your objectives, target deliverables, or any specific requirements..."
                      className={`w-full px-4 py-3 rounded-xl bg-white border ${
                        errors.projectDetails ? 'border-red-500 ring-1 ring-red-500' : 'border-[#E9E6F0]'
                      } text-sm text-[#111114] placeholder-[#666675]/50 focus:outline-none focus:border-[#5A24B0] focus:ring-1 focus:ring-[#5A24B0] transition-colors resize-y`}
                      aria-required="true"
                      aria-invalid={!!errors.projectDetails}
                      aria-describedby={errors.projectDetails ? 'projectDetails-error' : undefined}
                    />
                    {errors.projectDetails && (
                      <p id="projectDetails-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.projectDetails}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-sm text-white bg-[#5A24B0] hover:bg-[#481c91] active:bg-[#3c177a] disabled:opacity-70 transition-all shadow-sm cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending Your Inquiry...</span>
                    ) : (
                      <>
                        <span>Send Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-[#666675] text-center">
                    We treat your project information with strict confidentiality. No spam.
                  </p>

                </form>
              )}

            </div>
          </div>

          {/* Right Column: Agency Contact Information Placeholders */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Information Card */}
            <div className="bg-[#111114] text-white rounded-2xl p-8 border border-neutral-800">
              <h3 className="text-xl font-bold mb-6 text-white">
                Agency Contact Information
              </h3>

              <div className="space-y-6">
                
                {/* Business Email Placeholder */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-[#A855F7] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                      Business Email
                    </div>
                    <a 
                      href={`mailto:${AGENCY_CONTACT_INFO.email}`} 
                      className="text-sm font-medium text-white hover:text-[#A855F7] transition-colors break-all"
                    >
                      {AGENCY_CONTACT_INFO.emailLabel}
                    </a>
                  </div>
                </div>

                {/* WhatsApp Placeholder */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-[#A855F7] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                      WhatsApp / Direct Phone
                    </div>
                    <span className="text-sm font-medium text-white">
                      {AGENCY_CONTACT_INFO.whatsappLabel}
                    </span>
                  </div>
                </div>

                {/* Turnaround Pledge */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-[#A855F7] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                      Response Pledge
                    </div>
                    <span className="text-sm font-medium text-white">
                      {AGENCY_CONTACT_INFO.turnaroundTime}
                    </span>
                  </div>
                </div>

                {/* Working Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-[#A855F7] flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                      Coverage
                    </div>
                    <span className="text-sm font-medium text-white">
                      {AGENCY_CONTACT_INFO.address}
                    </span>
                  </div>
                </div>

              </div>

              {/* Social Channels Placeholders */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-4">
                  Connect On Social Media
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="#contact"
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#5A24B0] text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
                    aria-label="BQ Skills LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#contact"
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#5A24B0] text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
                    aria-label="BQ Skills Twitter / X"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="#contact"
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#5A24B0] text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
                    aria-label="BQ Skills Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="#contact"
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#5A24B0] text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
                    aria-label="BQ Skills GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

            {/* Direct Notice Box */}
            <div className="p-6 rounded-2xl bg-[#F7F5FC] border border-[#E9E6F0] text-xs text-[#666675]">
              <span className="font-bold text-[#111114]">Note for Clients:</span> You can also reach out directly via email with your RFP or specifications. All inquiries receive initial review by a lead designer and engineer.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
