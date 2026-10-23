import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SectionHeading } from '../components/SectionHeading';
import { FOUNDER_INFO } from '../data/founder';
import { ImageLightbox } from '../components/ImageLightbox';
import {
  GraduationCap,
  Sparkles,
  Eye,
  CheckCircle2,
  Building2,
  Quote
} from 'lucide-react';

export const Founder: React.FC = () => {
  const [showPosterLightbox, setShowPosterLightbox] = useState(false);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Founder & Promoter' }]} />

        {/* Hero Card */}
        <div className="blucy-card p-8 sm:p-12 lg:p-14 bg-gradient-to-br from-white via-blucy-ice/50 to-blucy-softpink/30 border border-blucy-sky/30 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Portrait Column */}
            <div className="lg:col-span-5 text-center">
              <div className="relative inline-block mx-auto">
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden p-2 bg-gradient-to-tr from-blucy-blue via-blucy-sky to-blucy-pink shadow-2xl">
                  <img
                    src={FOUNDER_INFO.images.portrait}
                    alt={FOUNDER_INFO.name}
                    className="w-full h-full object-cover rounded-full bg-white"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-blucy-navy text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
                  Promoter — Blucy Ice Creamery
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => setShowPosterLightbox(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blucy-blue hover:text-blucy-pink transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Official Founder Spotlight Poster</span>
                </button>
              </div>
            </div>

            {/* Profile Intro Column */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blucy-softpink text-xs font-bold text-blucy-pink uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Founder & Promoter Spotlight
              </div>

              <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-blucy-navy">
                {FOUNDER_INFO.name}
              </h1>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-sm font-semibold text-blucy-blue">
                {FOUNDER_INFO.titles.map((title, idx) => (
                  <React.Fragment key={idx}>
                    <span>{title}</span>
                    {idx < FOUNDER_INFO.titles.length - 1 && (
                      <span className="text-blucy-pink">•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <p className="text-base sm:text-lg text-blucy-text leading-relaxed font-normal">
                {FOUNDER_INFO.bio}
              </p>

              <p className="text-sm text-blucy-muted leading-relaxed font-normal">
                {FOUNDER_INFO.overview}
              </p>

              {/* Stats Bar */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                {FOUNDER_INFO.stats.map((s, idx) => (
                  <div key={idx} className="p-3 bg-white rounded-2xl border border-blucy-sky/20 shadow-sm">
                    <span className="block font-heading font-bold text-blucy-pink text-xl">
                      {s.value}
                    </span>
                    <span className="text-[11px] text-blucy-muted font-medium">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Professional & Business Portfolio */}
        <div className="mb-20">
          <SectionHeading
            badge="Diverse Leadership Experience"
            badgeColor="blue"
            title="Business & Entrepreneurial"
            highlight="Portfolio"
            subtitle="Hands-on executive leadership across Food & Beverage, Franchising, Events, Corporate Gifting, Sports, and Creative Media."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FOUNDER_INFO.portfolio.map((entity, idx) => (
              <div
                key={idx}
                className="blucy-card p-6 bg-white border border-blucy-sky/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blucy-pink bg-blucy-softpink px-2.5 py-0.5 rounded-full">
                      {entity.tag}
                    </span>
                    <Building2 className="w-4 h-4 text-blucy-sky" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-blucy-navy">
                    {entity.name}
                  </h3>
                  <p className="text-xs font-semibold text-blucy-blue mt-0.5">
                    {entity.role} • {entity.domain}
                  </p>
                  <p className="text-xs text-blucy-muted mt-2.5 leading-relaxed">
                    {entity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Background & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          <div className="lg:col-span-6 p-8 rounded-3xl bg-blucy-ice/50 border border-blucy-blue/20 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blucy-blue text-white flex items-center justify-center mb-5 shadow-sm">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-blucy-navy mb-4">
                Professional & Creative Qualifications
              </h2>
              <ul className="space-y-3 text-sm text-blucy-text leading-relaxed">
                {FOUNDER_INFO.qualifications.map((q, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blucy-blue shrink-0 mt-1" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-blucy-sky/20 text-xs text-blucy-muted">
              Source: Official Konduru Sharath Profile Dossier
            </div>
          </div>

          <div className="lg:col-span-6 p-8 rounded-3xl bg-gradient-to-br from-blucy-softpink via-white to-blucy-ice border border-blucy-pink/20 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blucy-pink text-white flex items-center justify-center mb-5 shadow-brand-pink">
                <Quote className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-blucy-navy mb-2">
                The Blucy Vision
              </h2>
              <blockquote className="text-sm sm:text-base text-blucy-navy font-medium italic mb-4 leading-relaxed">
                “{FOUNDER_INFO.vision}”
              </blockquote>
              <div className="p-4 rounded-2xl bg-white/80 border border-blucy-pink/20">
                <span className="text-xs font-bold text-blucy-pink uppercase tracking-wide block mb-1">
                  Our Ambition
                </span>
                <p className="text-xs sm:text-sm text-blucy-muted leading-relaxed">
                  {FOUNDER_INFO.ambition}
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-blucy-pink/20 text-xs text-blucy-muted">
              Promoting Blucy — Café & Ice Creamery
            </div>
          </div>
        </div>

        {/* Poster Lightbox */}
        {showPosterLightbox && (
          <ImageLightbox
            isOpen={true}
            imageSrc={FOUNDER_INFO.images.poster}
            title="Official Founder & Promoter Spotlight Poster"
            description="High-resolution verified profile dossier for Konduru Sharath."
            onClose={() => setShowPosterLightbox(false)}
          />
        )}
      </div>
    </div>
  );
};
