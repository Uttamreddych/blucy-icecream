import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { InvestmentPackage } from '../data/investment';
import { Info, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

interface InvestmentModelCardProps {
  pkg: InvestmentPackage;
  onSelectModel?: (modelTitle: string) => void;
}

export const InvestmentModelCard: React.FC<InvestmentModelCardProps> = ({ pkg }) => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);

  const activeOption = pkg.hasOptions && pkg.options ? pkg.options[selectedOptionIndex] : null;

  return (
    <div
      className={`blucy-card flex flex-col justify-between transition-all duration-300 ${
        pkg.isFlagship
          ? 'ring-2 ring-blucy-blue shadow-card-hover bg-gradient-to-b from-white via-white to-blucy-ice/30'
          : 'bg-white'
      }`}
    >
      <div>
        {/* Card Header */}
        <div className="p-6 sm:p-7 border-b border-blucy-ice bg-gradient-to-r from-blucy-ice/60 to-transparent">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            {pkg.badge && (
              <span
                className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                  pkg.isFlagship
                    ? 'bg-blucy-pink text-white shadow-sm'
                    : 'bg-blucy-blue text-white'
                }`}
              >
                {pkg.badge}
              </span>
            )}
            <span className="text-xs text-blucy-muted font-medium bg-white px-2.5 py-1 rounded-full border border-blucy-blue/15">
              Advertised Model
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-blucy-navy">
            {pkg.title}
          </h3>
          <p className="text-xs sm:text-sm text-blucy-muted mt-1 leading-relaxed">
            {pkg.tagline}
          </p>

          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-heading font-extrabold text-blucy-blue">
              {pkg.totalCost}
            </span>
            <span className="text-xs text-blucy-muted">Advertised Investment Package</span>
          </div>
        </div>

        {/* Option Tabs for ₹24L and ₹12L models */}
        {pkg.hasOptions && pkg.options && (
          <div className="p-4 bg-blucy-ice/40 border-b border-blucy-ice">
            <div className="text-xs font-semibold text-blucy-navy mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blucy-pink" />
              <span>Select Model Configuration:</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {pkg.options.map((opt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedOptionIndex(idx)}
                  className={`text-xs font-semibold py-2 px-3 rounded-xl transition-all text-center ${
                    selectedOptionIndex === idx
                      ? 'bg-blucy-blue text-white shadow-sm'
                      : 'bg-white text-blucy-navy hover:bg-blucy-ice border border-blucy-blue/20'
                  }`}
                >
                  {opt.optionName.split(':')[0]}
                </button>
              ))}
            </div>
            {activeOption && (
              <p className="text-[11px] text-blucy-muted mt-2 italic">
                {activeOption.idealFor}
              </p>
            )}
          </div>
        )}

        {/* Format Breakdown List */}
        <div className="p-6 sm:p-7 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-blucy-navy">
            Format Allocation & Units
          </h4>

          <div className="space-y-2.5">
            {pkg.hasOptions && activeOption ? (
              activeOption.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-xl bg-blucy-ice/40 border border-blucy-blue/10 text-xs sm:text-sm"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-blucy-blue/15 text-blucy-blue flex items-center justify-center font-bold text-[10px]">
                      {item.count}
                    </div>
                    <span className="font-semibold text-blucy-navy">{item.format}</span>
                  </div>
                  <span className="font-heading font-bold text-blucy-pink">{item.cost}</span>
                </div>
              ))
            ) : pkg.singleBreakdown ? (
              pkg.singleBreakdown.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-xl bg-blucy-ice/40 border border-blucy-blue/10 text-xs sm:text-sm"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-blucy-blue/15 text-blucy-blue flex items-center justify-center font-bold text-[10px]">
                      {item.count}
                    </div>
                    <div>
                      <span className="font-semibold text-blucy-navy">{item.format}</span>
                      {item.notes && (
                        <p className="text-[11px] text-blucy-muted">{item.notes}</p>
                      )}
                    </div>
                  </div>
                  <span className="font-heading font-bold text-blucy-pink">{item.cost}</span>
                </div>
              ))
            ) : null}
          </div>

          {/* Projected Sales Highlight if available */}
          {pkg.projectedAnnualSales && (
            <div className="mt-4 p-3.5 rounded-2xl bg-gradient-to-r from-blucy-softpink to-white border border-blucy-pink/25 flex items-start gap-2.5">
              <TrendingUp className="w-4 h-4 text-blucy-pink shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-bold text-blucy-navy">Annual Sales Projection: </span>
                <span className="font-bold text-blucy-pink">{pkg.projectedAnnualSales}</span>
                {pkg.projectedMonthlySales && (
                  <span className="block text-[11px] text-blucy-muted mt-0.5">
                    Target gross sales: {pkg.projectedMonthlySales}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Verification / Source Disclaimer Note */}
          {pkg.sourceNote && (
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/60 flex items-start gap-2 text-[11px] text-amber-800 leading-relaxed">
              <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <p>{pkg.sourceNote}</p>
            </div>
          )}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-6 sm:p-7 pt-0">
        <Link
          to={`/contact?model=${encodeURIComponent(pkg.title)}`}
          className={`w-full py-3.5 text-center text-sm font-semibold rounded-full flex items-center justify-center gap-2 shadow-sm transition-all ${
            pkg.isFlagship
              ? 'btn-pink w-full justify-center text-white'
              : 'btn-primary w-full justify-center text-white'
          }`}
        >
          <span>Enquire for {pkg.totalCost} Model</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
