import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { SectionHeading } from '../components/SectionHeading';
import { BUSINESS_FORMATS } from '../data/franchise';
import { FranchiseFormatCard } from '../components/FranchiseFormatCard';
import { INVESTMENT_PACKAGES } from '../data/investment';
import { FAQ_DATA } from '../data/faq';
import { FAQAccordion } from '../components/FAQAccordion';
import { EnquiryForm } from '../components/EnquiryForm';
import {
  Sparkles,
  TrendingUp,
  Store,
  Truck,
  Bike,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

export const Franchise: React.FC = () => {
  const suitabilityPoints = [
    {
      title: 'First-Time Entrepreneurs',
      desc: 'Cycle Carts & Mini Carts provide a low-capex, accessible entry into retail without massive fixed rent.',
      icon: <Bike className="w-5 h-5 text-blucy-blue" />,
    },
    {
      title: 'Retail & Café Operators',
      desc: '250 sq. ft. Dessert Café format offers full dine-in seating, café beverage sales, and high ticket value.',
      icon: <Store className="w-5 h-5 text-blucy-pink" />,
    },
    {
      title: 'Mobile Fleet & Event Caterers',
      desc: 'Food Trucks and Event Carts generate lucrative weekend, carnival, wedding, and corporate booking revenue.',
      icon: <Truck className="w-5 h-5 text-blucy-sky" />,
    },
    {
      title: 'Multi-Unit Portfolio Investors',
      desc: '₹30L and ₹40L multi-format models enable partners to dominate whole city clusters with centralized logistics.',
      icon: <TrendingUp className="w-5 h-5 text-blucy-navy" />,
    },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Franchise Opportunities' }]} />

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blucy-navy via-blucy-blue to-blucy-sky text-white p-8 sm:p-14 mb-16 shadow-xl">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider text-blucy-ice">
              <Sparkles className="w-3.5 h-3.5 text-blucy-pink" /> Franchise Partnership
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight">
              Let’s Create Sweeter <br />
              Opportunities Together!
            </h1>
            <p className="text-white/90 text-base sm:text-xl font-normal leading-relaxed">
              Partner with Blucy and be a part of a growing, profitable and delightful ice cream & café brand across India.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a href="#enquiry-section" className="btn-pink text-sm sm:text-base px-8 py-3.5">
                Discuss Your Franchise Opportunity
              </a>
              <Link to="/investment" className="btn-outline-white text-sm sm:text-base px-8 py-3.5">
                View Investment Models
              </Link>
            </div>
          </div>
        </div>

        {/* Business Formats Grid */}
        <div className="mb-20">
          <SectionHeading
            badge="Versatile Business Formats"
            badgeColor="pink"
            title="Choose Your"
            highlight="Retail Configuration"
            subtitle="Explore our 6 scalable business formats engineered for different investment budgets, locations, and operational styles."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BUSINESS_FORMATS.slice(0, 6).map((format) => (
              <FranchiseFormatCard key={format.id} format={format} />
            ))}
          </div>
        </div>

        {/* Investment Model Overview Preview */}
        <div className="p-8 sm:p-12 rounded-3xl bg-blucy-ice/60 border border-blucy-sky/30 mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blucy-blue">
                Capital Planning
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-blucy-navy mt-1">
                Advertised Investment Models at a Glance
              </h2>
              <p className="text-sm text-blucy-muted mt-1">
                Packages structured to match single-unit entrepreneurs up to multi-format cluster operators.
              </p>
            </div>
            <Link to="/investment" className="mt-4 md:mt-0 btn-primary text-xs sm:text-sm px-6 py-2.5 self-start">
              <span>Compare Full Investment Models</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {INVESTMENT_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="p-5 bg-white rounded-2xl border border-blucy-blue/15 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase text-blucy-pink block mb-1">
                    {pkg.badge}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-blucy-navy">
                    {pkg.totalCost}
                  </h3>
                  <p className="text-xs text-blucy-muted mt-1 line-clamp-2">
                    {pkg.tagline}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-blucy-ice">
                  <Link
                    to="/investment"
                    className="text-xs font-semibold text-blucy-blue hover:text-blucy-pink flex items-center justify-between"
                  >
                    <span>View Setup</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Who the Formats Suit */}
        <div className="mb-20">
          <SectionHeading
            badge="Partner Fit"
            badgeColor="blue"
            title="Who Are These Formats"
            highlight="Suited For?"
            subtitle="Tailored opportunities whether you are entering F&B for the first time or expanding an established investment portfolio."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {suitabilityPoints.map((point, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-blucy-sky/20 shadow-brand flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blucy-ice flex items-center justify-center mb-4">
                    {point.icon}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-blucy-navy mb-2">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-blucy-muted leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-20">
          <SectionHeading
            badge="Common Inquiries"
            badgeColor="pink"
            title="Frequently Asked"
            highlight="Questions"
            subtitle="Got questions regarding franchise operations, profit sharing, or location eligibility? Find clarity below."
          />
          <FAQAccordion items={FAQ_DATA} />
        </div>

        {/* Enquiry Form Section */}
        <div id="enquiry-section" className="scroll-mt-28 mb-12">
          <EnquiryForm />
        </div>

        {/* Disclaimer Warning */}
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <span className="font-bold">Important Commercial Disclaimer:</span> Blucy Foods & Beverages does not guarantee specific revenue levels, returns on investment, or operational profitability. All figures displayed represent promotional advertised packaging estimates. Final contractual terms, territorial allocation, and equipment bills require mutual due diligence and written execution.
          </p>
        </div>
      </div>
    </div>
  );
};
