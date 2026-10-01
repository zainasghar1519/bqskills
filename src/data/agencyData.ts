import { ServiceItem, PortfolioItem, ProcessStep, TestimonialItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ui-ux-design',
    title: 'UI/UX & Graphic Design',
    tagline: 'Brand memorable visual identities & intuitive user interfaces',
    description: 'Beautiful, intuitive digital experiences and creative visuals that make your brand memorable.',
    subservices: [
      'Brand Identity & Guidelines',
      'UI/UX Design Systems',
      'Landing Page Design',
      'Social Media Creatives',
      'Marketing Graphics & Assets'
    ],
    deliverables: ['Figma Prototypes', 'Design System Library', 'Asset Export Kit', 'Brand Style Guide']
  },
  {
    id: 'web-development',
    title: 'Website Development',
    tagline: 'Fast, secure, responsive websites that turn visitors into customers',
    description: 'Modern, responsive websites designed to represent your brand and turn visitors into customers.',
    subservices: [
      'Custom React & Next.js Platforms',
      'WordPress & Headless CMS',
      'Business & Corporate Websites',
      'High-Performance Landing Pages',
      'API & Backend Integrations'
    ],
    deliverables: ['Clean Codebase', 'Lighthouse 95+ Performance', 'Mobile Responsiveness', 'SEO Setup']
  },
  {
    id: 'ecommerce' as const,
    title: 'E-commerce Development',
    tagline: 'High-converting online stores built for modern retail growth',
    description: 'Online stores designed to deliver a smooth shopping experience and support business growth.',
    subservices: [
      'Shopify & Shopify Plus Stores',
      'WooCommerce Customization',
      'Conversion-Optimized Checkout',
      'Product Page Architecture',
      'Payment Gateway Integrations'
    ],
    deliverables: ['Custom Store Theme', 'Cart Optimization', 'Inventory Setup', 'Payment & Tax Flow']
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    tagline: 'Intuitive, native & cross-platform apps tailored to your business',
    description: 'Practical, user-friendly mobile applications built around your business goals.',
    subservices: [
      'iOS & Android App Development',
      'Cross-Platform React Native / Flutter',
      'Mobile App UI/UX Architecture',
      'App Store Optimization (ASO)',
      'Push Notifications & Offline Sync'
    ],
    deliverables: ['Production App Build', 'Store Submission Assistance', 'Offline Capability', 'Telemetry Hookup']
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    tagline: 'Targeted campaigns and consistent, ROI-focused brand growth',
    description: 'Reach the right audience through thoughtful digital campaigns and a consistent online presence.',
    subservices: [
      'Paid Social Advertising (Meta, LinkedIn)',
      'Search Engine Marketing (PPC)',
      'Content Marketing & Strategy',
      'Social Media Brand Management',
      'Conversion Rate Optimization (CRO)'
    ],
    deliverables: ['Campaign Media Plan', 'Creative Ad Sets', 'Bi-weekly Performance Reports', 'Attribution Tracking']
  },
  {
    id: 'seo-growth',
    title: 'SEO & Growth',
    tagline: 'Sustainable search visibility that attracts qualified organic traffic',
    description: 'Improve your search visibility and help the right customers discover your business.',
    subservices: [
      'Comprehensive On-Page SEO',
      'Technical SEO & Core Web Vitals',
      'Competitor & Keyword Intelligence',
      'Site Speed Optimization',
      'Schema.org Structured Data'
    ],
    deliverables: ['SEO Audit & Fix Roadmap', 'Schema Markup Plan', 'Target Keyword Mapping', 'Monthly Organic Insights']
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'proj-1',
    title: 'Corporate Web Platform',
    category: 'Website Development',
    categorySlug: 'web',
    isPlaceholder: true,
    image: '/src/assets/images/portfolio_business_web_1790874528411.jpg',
    summary: 'A clean, high-performance corporate platform engineered with structured typography and modern component architecture for enterprise visibility.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    deliverables: ['Responsive Web App', 'Design System', 'CMS Integration', 'Fast Loading Times']
  },
  {
    id: 'proj-2',
    title: 'Modern Retail & Lifestyle Store',
    category: 'E-commerce Development',
    categorySlug: 'ecommerce',
    isPlaceholder: true,
    image: '/src/assets/images/portfolio_ecommerce_1790874498172.jpg',
    summary: 'A conversion-focused e-commerce storefront designed for seamless catalogue exploration, fluid checkout flow, and refined mobile shopping.',
    technologies: ['Shopify Liquid', 'Tailwind', 'Stripe', 'Alpine.js'],
    deliverables: ['Storefront Theme', 'Checkout Optimization', 'Mobile Experience', 'Speed Hardening']
  },
  {
    id: 'proj-3',
    title: 'FinTech & Daily Wellness App',
    category: 'Mobile Application',
    categorySlug: 'mobile',
    isPlaceholder: true,
    image: '/src/assets/images/portfolio_mobile_app_1790874508195.jpg',
    summary: 'Intuitive iOS & Android application designed with touch-first ergonomics, micro-interactions, and real-time dashboard analytics.',
    technologies: ['React Native', 'Figma', 'TypeScript', 'Node.js'],
    deliverables: ['iOS & Android Builds', 'UX Wireframes', 'Design Token System', 'API Sync']
  },
  {
    id: 'proj-4',
    title: 'Studio Brand Identity & System',
    category: 'Brand Identity',
    categorySlug: 'branding',
    isPlaceholder: true,
    image: '/src/assets/images/portfolio_brand_identity_1790874517977.jpg',
    summary: 'A cohesive brand system comprising custom wordmark geometry, stationery applications, typographic rules, and social media creative toolkits.',
    technologies: ['Figma', 'Illustrator', 'Design Guidelines'],
    deliverables: ['Logo System', 'Typography Hierarchy', 'Brand Collateral', 'Social Templates']
  },
  {
    id: 'proj-5',
    title: 'Multi-Channel Growth Campaign',
    category: 'Digital Marketing',
    categorySlug: 'marketing',
    isPlaceholder: true,
    image: '/src/assets/images/hero_agency_showcase_1790874487723.jpg',
    summary: 'Strategic advertising framework combining high-converting motion ad creatives with structured audience segmentation and retargeting funnels.',
    technologies: ['Meta Ads Manager', 'LinkedIn Campaign Manager', 'Google Ads', 'GA4 Analytics'],
    deliverables: ['Ad Creative Production', 'Audience Retargeting', 'Landing Page Pairing', 'Analytics Setup']
  },
  {
    id: 'proj-6',
    title: 'High-Converting SaaS Launchpad',
    category: 'Landing Page Design',
    categorySlug: 'landing',
    isPlaceholder: true,
    image: '/src/assets/images/portfolio_business_web_1790874528411.jpg',
    summary: 'An editorial SaaS product landing page designed to capture inbound enterprise leads with clear hierarchy and interactive feature previews.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    deliverables: ['Interactive Prototype', 'Conversion Architecture', 'Lead Magnet Funnel', 'A/B Test Setup']
  }
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    description: 'We understand your business, audience, goals, and requirements.',
    details: 'Through structured discovery sessions, we map out technical constraints, target personas, competitors, and explicit milestones.'
  },
  {
    step: '02',
    title: 'Plan & Design',
    description: 'We develop the creative direction, structure, and solution for your project.',
    details: 'From wireframes and user journeys to interactive prototypes in Figma, we iterate rapidly until every interaction feels intuitive.'
  },
  {
    step: '03',
    title: 'Build & Refine',
    description: 'We bring the design to life, test functionality, and refine the details.',
    details: 'Our engineers write clean, scalable code while testing across real screen sizes, testing performance, accessibility, and security.'
  },
  {
    step: '04',
    title: 'Launch & Support',
    description: 'We help you launch confidently and provide agreed ongoing support.',
    details: 'We execute launch checklists, domain routing, analytics setup, and provide hands-on post-launch maintenance.'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: '[Client Testimonial Placeholder — "Working with BQ Skills gave our digital presence the polish and clarity it needed. The design precision and rapid communication made our launch seamless."]',
    author: '[Client Name Placeholder]',
    role: '[Founder & CEO Placeholder]',
    company: '[Client Brand Placeholder]',
    isPlaceholder: true
  },
  {
    id: 'test-2',
    quote: '[Client Testimonial Placeholder — "BQ Skills delivered a modern e-commerce storefront that significantly elevated our brand perception and improved our customer checkout journey."]',
    author: '[Client Name Placeholder]',
    role: '[Head of Digital Marketing Placeholder]',
    company: '[Retail Partner Placeholder]',
    isPlaceholder: true
  },
  {
    id: 'test-3',
    quote: '[Client Testimonial Placeholder — "From initial discovery through technical execution, the team understood our objectives and built a robust web application that performs effortlessly."]',
    author: '[Client Name Placeholder]',
    role: '[Operations Director Placeholder]',
    company: '[Enterprise Client Placeholder]',
    isPlaceholder: true
  }
];

export const AGENCY_CONTACT_INFO = {
  email: 'hello@bqskills.example.com',
  emailLabel: '[agency-email@bqskills.com]',
  whatsapp: '+1 (555) 234-5678',
  whatsappLabel: '[WhatsApp: +1 555 234-5678]',
  address: '[Digital Agency HQ Placeholder — Available for Worldwide Projects]',
  turnaroundTime: 'We respond within 24 business hours'
};
