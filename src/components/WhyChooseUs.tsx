import React from 'react';
import { Lightbulb, Target, Users, Award, ShieldCheck, Zap } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const strengths = [
    {
      icon: <Lightbulb className="w-6 h-6 text-[#A855F7]" />,
      title: 'Creative & Strategic Thinking',
      description: 'We do not just execute tasks; we look at the complete picture. Every visual decision and line of code connects back to your brand positioning and business goals.'
    },
    {
      icon: <Target className="w-6 h-6 text-[#A855F7]" />,
      title: 'Solutions Tailored to Your Business',
      description: 'No generic, one-size-fits-all templates. We architect custom solutions engineered specifically around your workflow, market landscape, and audience expectations.'
    },
    {
      icon: <Users className="w-6 h-6 text-[#A855F7]" />,
      title: 'Design That Puts Users First',
      description: 'An interface must be as intuitive as it is striking. We prioritize user accessibility, responsive layout clarity, and seamless journeys that convert interest into action.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#A855F7]" />,
      title: 'A Focus on Quality and Results',
      description: 'From clean component architecture to rigorous testing and post-launch refinement, our standard is high-craftsmanship built to endure.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#111114] text-white relative overflow-hidden">
      {/* Restrained Purple Ambient Glow */}
      <div 
        className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#5A24B0]/20 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 right-0 w-80 h-80 bg-[#7B4AE2]/10 rounded-full blur-[100px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two-Column Grid: Header & Narrative on Left, 4 Core Strengths on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#A855F7]" aria-hidden="true" />
              <span className="text-xs font-bold tracking-widest text-[#A855F7] uppercase">
                WHY WORK WITH US
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight text-balance">
              More Than a Service Provider.{' '}
              <span className="text-[#A855F7]">Your Digital Partner.</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8">
              We combine thoughtful design, reliable development, and strategic execution to help brands move forward.
            </p>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#5A24B0] text-white flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Our Commitment</h4>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Direct communication, transparent scopes, and end-to-end dedication from concept to deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Strengths Bento Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {strengths.map((item, idx) => (
              <div 
                key={idx}
                className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#5A24B0] transition-colors duration-300 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
