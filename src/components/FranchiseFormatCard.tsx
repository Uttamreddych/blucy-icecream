import React from 'react';
import { Link } from 'react-router-dom';
import type { BusinessFormat } from '../data/franchise';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface FranchiseFormatCardProps {
  format: BusinessFormat;
}

export const FranchiseFormatCard: React.FC<FranchiseFormatCardProps> = ({ format }) => {
  return (
    <div className="blucy-card flex flex-col h-full bg-white border border-blucy-sky/20">
      {/* Format Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-blucy-ice">
        <img
          src={format.mainImage}
          alt={format.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-blucy-blue text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          {format.badge}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <span className="text-xs font-semibold text-blucy-pink uppercase tracking-wider">
            {format.subtitle}
          </span>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-blucy-navy mt-1">
            {format.title}
          </h3>
          <p className="text-sm text-blucy-muted mt-2 leading-relaxed">
            {format.description}
          </p>

          {/* Metrics summary */}
          <div className="mt-4 p-3.5 bg-blucy-ice/60 rounded-2xl border border-blucy-blue/15 space-y-1.5 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-blucy-muted font-medium">Space Footprint:</span>
              <span className="font-semibold text-blucy-navy">{format.spaceRequired}</span>
            </div>
            {format.annualSalesTarget && (
              <div className="flex items-center justify-between">
                <span className="text-blucy-muted font-medium">Annual Sales Target:</span>
                <span className="font-bold text-blucy-pink">{format.annualSalesTarget}</span>
              </div>
            )}
          </div>

          {/* Key Advantages */}
          <div className="mt-5 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blucy-navy">
              Key Advantages
            </h4>
            <ul className="space-y-1.5 text-xs text-blucy-text">
              {format.keyFeatures.slice(0, 3).map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blucy-blue shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action button */}
        <div className="mt-6 pt-4 border-t border-blucy-ice flex items-center justify-between">
          <Link
            to={`/business-formats#${format.slug}`}
            className="text-xs sm:text-sm font-semibold text-blucy-blue hover:text-blucy-pink flex items-center gap-1.5 transition-colors group"
          >
            <span>Format Details & Visuals</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="btn-pink text-xs py-1.5 px-4"
          >
            Enquire
          </Link>
        </div>
      </div>
    </div>
  );
};
