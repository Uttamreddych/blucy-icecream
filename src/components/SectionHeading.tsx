import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  badgeColor?: 'pink' | 'blue';
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeColor = 'pink',
  title,
  highlight,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 ${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${className}`}>
      {badge && (
        <span
          className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 ${
            badgeColor === 'pink'
              ? 'bg-blucy-softpink text-blucy-pink border border-blucy-pink/25'
              : 'bg-blucy-ice text-blucy-blue border border-blucy-blue/25'
          }`}
        >
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-blucy-navy leading-tight">
        {title}{' '}
        {highlight && (
          <span className="text-gradient-pink relative inline-block">
            {highlight}
            <svg
              className="absolute -bottom-1 left-0 w-full h-2 text-blucy-pink/40"
              viewBox="0 0 100 8"
              preserveAspectRatio="none"
            >
              <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-blucy-muted font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
