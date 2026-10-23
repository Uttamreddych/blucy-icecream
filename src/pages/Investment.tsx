import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { SectionHeading } from '../components/SectionHeading';
import { INVESTMENT_PACKAGES, RETURN_STRUCTURE_STEPS } from '../data/investment';
import { InvestmentModelCard } from '../components/InvestmentModelCard';
import { ImageLightbox } from '../components/ImageLightbox';
import {
  Calendar,
  CheckCircle2,
  Eye,
  Info
} from 'lucide-react';

export const Investment: React.FC = () => {
  const [lightboxPoster, setLightboxPoster] = useState<{ url: string; title: string } | null>(null);

  const illustrativeProjections = [
    { format: 'Shop – 250 Sq.Ft.', monthly: '₹4.5 L', annual: '₹54 L', units: '1 Store' },
    { format: '2 Cycle Pushcarts', monthly: '₹2.0 L', annual: '₹24 L', units: '2 Carts' },
    { format: 'Food Truck', monthly: '₹2.5 L', annual: '₹30 L', units: '1 Truck' },
    { format: 'Mini Kiosk', monthly: '₹1.5 L', annual: '₹18 L', units: '1 Kiosk' },
    { format: 'Event Cart', monthly: '₹1.5 L', annual: '₹18 L', units: '1 Cart' },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Investment Models' }]} />

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blucy-ice text-xs font-bold text-blucy-blue uppercase tracking-wider mb-3">
            Source-Advertised Models
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-blucy-navy">
            Investment <span className="text-gradient-pink">Package Models</span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-blucy-muted font-normal leading-relaxed">
            Different sizes. Same sweet success. Transparently presenting all source-advertised packages from ₹12 Lakh to ₹40 Lakh.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => setLightboxPoster({
                url: '/images/franchise/investment_models_poster.png',
                title: 'Official Investment Package Models Brochure'
              })}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blucy-navy bg-white hover:bg-blucy-ice border border-blucy-blue/20 px-4 py-2 rounded-full transition-colors shadow-sm"
            >
              <Eye className="w-4 h-4 text-blucy-pink" />
              <span>View Original Investment Poster</span>
            </button>
            <button
              type="button"
              onClick={() => setLightboxPoster({
                url: '/images/franchise/investor_return_poster.png',
                title: 'Investor Return Structure Flowchart'
              })}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blucy-navy bg-white hover:bg-blucy-ice border border-blucy-blue/20 px-4 py-2 rounded-full transition-colors shadow-sm"
            >
              <Eye className="w-4 h-4 text-blucy-blue" />
              <span>View Return Structure Poster</span>
            </button>
          </div>
        </div>

        {/* Mandatory Transparency Disclaimer Box */}
        <div className="mb-14 p-5 rounded-3xl bg-amber-50/90 border border-amber-200/80 text-amber-900 text-xs sm:text-sm leading-relaxed flex items-start gap-3 shadow-sm">
          <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold">Notice Regarding Advertised Financial Figures:</p>
            <p className="text-amber-800 text-xs">
              All figures below reflect advertised models and illustrative projections published in the official Blucy Ice Creamery marketing brochures. They do not represent independently audited or guaranteed figures. Final equipment specifications, store fit-outs, vehicle registration, operational expenses, taxes, and contractual commitments require formal verification and written agreement with Blucy Foods & Beverages.
            </p>
          </div>
        </div>

        {/* 1. Advertised Investment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {INVESTMENT_PACKAGES.map((pkg) => (
            <InvestmentModelCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* 2. Investor Return Structure (3-Phase Flow) */}
        <div className="mb-20">
          <SectionHeading
            badge="Proposed Partnership Flow"
            badgeColor="pink"
            title="Investor Return"
            highlight="Structure"
            subtitle="As outlined in the Blucy marketing brochure: Invest. Grow. Share. Expand Together."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RETURN_STRUCTURE_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="blucy-card p-7 sm:p-8 bg-white border border-blucy-sky/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-blucy-pink bg-blucy-softpink px-3 py-1 rounded-full">
                      {step.phase}
                    </span>
                    <span className="text-xs font-semibold text-blucy-navy flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-blucy-blue" />
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-blucy-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-blucy-muted mb-5 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="space-y-2.5 pt-3 border-t border-blucy-ice">
                    {step.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-blucy-navy">
                        <CheckCircle2 className="w-4 h-4 text-blucy-blue shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center text-xs text-blucy-muted">
            * Proposed structure subject to formal written contract, territory performance, and mutual commercial terms.
          </div>
        </div>

        {/* 3. Illustrative 12-Month Projections (From Business Infographic) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blucy-ice/60 via-white to-blucy-ice/40 border border-blucy-sky/30 shadow-brand mb-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-blucy-blue">
              Illustrative Brochure Modeling
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-blucy-navy mt-1">
              ₹40 Lakh Model — Simple 12-Month Sales Target Projection
            </h2>
            <p className="text-xs sm:text-sm text-blucy-muted mt-1">
              Illustrative figures taken directly from the Blucy Business Infographic poster demonstrating target revenue across 5 synchronized retail formats.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-2xl border border-blucy-sky/20 bg-white shadow-sm mb-6">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-blucy-ice text-blucy-navy font-heading font-bold">
                <tr>
                  <th className="py-3.5 px-4 sm:px-6">Format Component</th>
                  <th className="py-3.5 px-4 sm:px-6">Units Included</th>
                  <th className="py-3.5 px-4 sm:px-6">Monthly Target</th>
                  <th className="py-3.5 px-4 sm:px-6 text-right">Annual Gross Sales Target</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blucy-ice text-blucy-text font-medium">
                {illustrativeProjections.map((row, idx) => (
                  <tr key={idx} className="hover:bg-blucy-ice/40 transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-semibold text-blucy-navy">{row.format}</td>
                    <td className="py-3 px-4 sm:px-6 text-blucy-muted">{row.units}</td>
                    <td className="py-3 px-4 sm:px-6 text-blucy-navy">{row.monthly}</td>
                    <td className="py-3 px-4 sm:px-6 font-heading font-bold text-blucy-blue text-right">{row.annual}</td>
                  </tr>
                ))}
                <tr className="bg-blucy-ice/80 font-bold">
                  <td className="py-4 px-4 sm:px-6 text-blucy-navy" colSpan={2}>
                    Total Gross Sales Target (Combined)
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-blucy-navy">₹12.0 Lakh / month</td>
                  <td className="py-4 px-4 sm:px-6 font-heading font-extrabold text-blucy-pink text-base sm:text-lg text-right">
                    ₹1.44 Crore
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-white border border-blucy-blue/15">
              <span className="text-blucy-muted font-medium block">Annual Target</span>
              <span className="font-heading font-bold text-lg text-blucy-navy">₹1.44 Crore</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-blucy-blue/15">
              <span className="text-blucy-muted font-medium block">Illustrative Operating Contribution (30%)</span>
              <span className="font-heading font-bold text-lg text-blucy-pink">~₹43.2 Lakh</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-blucy-blue/15">
              <span className="text-blucy-muted font-medium block">Brochure Recovery Potential</span>
              <span className="font-heading font-bold text-lg text-blucy-blue">11 – 12 Months</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-8 sm:p-12 bg-white rounded-3xl border border-blucy-sky/30 shadow-brand">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-blucy-navy">
            Ready to explore an investment package for your territory?
          </h3>
          <p className="text-sm text-blucy-muted mt-2 max-w-xl mx-auto">
            Contact our franchise consulting team to discuss available cities, site suitability assessments, and customized investment proposals.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-pink text-sm sm:text-base px-8 py-3">
              Enquire for Investment
            </Link>
            <Link to="/business-formats" className="btn-secondary text-sm sm:text-base px-8 py-3">
              Explore Format Specifications
            </Link>
          </div>
        </div>

        {/* Lightbox for Posters */}
        {lightboxPoster && (
          <ImageLightbox
            isOpen={true}
            imageSrc={lightboxPoster.url}
            title={lightboxPoster.title}
            description="Verified source marketing artwork from Blucy Ice Creamery."
            onClose={() => setLightboxPoster(null)}
          />
        )}
      </div>
    </div>
  );
};
