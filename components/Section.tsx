import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ children, title, subtitle, className = '' }) => {
  return (
    <div className={`relative p-8 md:p-12 mb-12 bg-slate-900/80 backdrop-blur-sm border border-slate-700 ${className}`}>
      {/* Decorative Corners */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-amber-600" />
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-amber-600" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-amber-600" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-amber-600" />

      {/* Header */}
      <div className="mb-10 border-b border-slate-700 pb-6 flex flex-col gap-2">
        <h2 className="text-4xl md:text-5xl text-amber-500 tracking-wider uppercase drop-shadow-lg font-bold">
          {title}
        </h2>
        {subtitle && (
          <p className="font-tech text-cyan-500/80 text-base md:text-lg tracking-[0.2em] uppercase">
            // {subtitle}
          </p>
        )}
      </div>

      {children}
    </div>
  );
};