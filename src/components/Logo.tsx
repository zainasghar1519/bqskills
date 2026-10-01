import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'dark', 
  size = 'md',
  showTagline = false 
}) => {
  const isDark = variant === 'dark';

  const sizeClasses = {
    sm: { icon: 'w-7 h-7', text: 'text-lg', dot: 'w-1.5 h-1.5' },
    md: { icon: 'w-9 h-9', text: 'text-xl', dot: 'w-2 h-2' },
    lg: { icon: 'w-11 h-11', text: 'text-2xl', dot: 'w-2.5 h-2.5' }
  }[size];

  return (
    <div className="flex items-center gap-2.5 select-none group">
      {/* Geometric BQ Monogram Emblem */}
      <div 
        className={`${sizeClasses.icon} relative flex items-center justify-center rounded-xl bg-[#5A24B0] text-white shadow-sm transition-transform duration-300 group-hover:scale-105 shrink-0 overflow-hidden`}
        aria-hidden="true"
      >
        <svg 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full p-1.5"
        >
          {/* Subtle gradient layer inside icon */}
          <rect width="40" height="40" rx="10" fill="#5A24B0" />
          <path 
            d="M11 11H21C23.7614 11 26 13.2386 26 16C26 17.6569 25.1936 19.1255 23.9566 20.0384C25.7677 20.892 27 22.8028 27 25C27 28.3137 24.3137 31 21 31H11V11Z" 
            fill="white" 
            fillOpacity="0.18"
          />
          {/* Crisp 'B' and dynamic 'Q' tail curve */}
          <path 
            d="M12 11V29H20.5C23.5376 29 26 26.5376 26 23.5C26 21.0379 24.3789 18.9547 22.1472 18.2575C23.8587 17.4815 25 15.7533 25 13.75C25 11.1266 22.8734 9 20.25 9H12V11Z" 
            stroke="white" 
            strokeWidth="3.2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M12 19H20" 
            stroke="white" 
            strokeWidth="3.2" 
            strokeLinecap="round"
          />
          {/* Dynamic Q accent sweep */}
          <path 
            d="M22 25L28 31" 
            stroke="#C084FC" 
            strokeWidth="3.6" 
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Typography: BQ Skills Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1 leading-none">
          <span className={`font-extrabold tracking-tight ${sizeClasses.text} ${isDark ? 'text-[#111114]' : 'text-white'}`}>
            BQ
          </span>
          <span className={`font-light tracking-normal ${sizeClasses.text} ${isDark ? 'text-[#5A24B0]' : 'text-[#A855F7]'}`}>
            Skills
          </span>
          <span className={`${sizeClasses.dot} rounded-full bg-[#5A24B0]`} />
        </div>
        {showTagline && (
          <span className={`text-[10px] tracking-widest font-semibold uppercase mt-0.5 ${isDark ? 'text-[#666675]' : 'text-neutral-400'}`}>
            Design · Develop · Market
          </span>
        )}
      </div>
    </div>
  );
};
