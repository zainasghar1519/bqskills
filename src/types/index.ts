export type ServiceId = 
  | 'ui-ux-design'
  | 'web-development'
  | 'ecommerce'
  | 'mobile-apps'
  | 'digital-marketing'
  | 'seo-growth';

export interface ServiceItem {
  id: ServiceId;
  title: string;
  tagline: string;
  description: string;
  subservices: string[];
  deliverables: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  categorySlug: 'web' | 'ecommerce' | 'mobile' | 'branding' | 'marketing' | 'landing';
  isPlaceholder: boolean;
  image: string;
  summary: string;
  technologies: string[];
  deliverables: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  isPlaceholder: boolean;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  company: string;
  serviceRequired: string;
  budget: string;
  projectDetails: string;
}
