import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Heart, ArrowUpRight, IceCream } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-white via-blucy-ice to-[#e1f3ff] text-blucy-text border-t border-blucy-sky/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Banner / Franchise Callout */}
        <div className="bg-gradient-to-r from-blucy-navy via-blucy-blue to-blucy-sky rounded-3xl p-8 sm:p-10 mb-16 shadow-xl text-white flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold uppercase tracking-wider mb-3">
              <IceCream className="w-3.5 h-3.5 text-blucy-pink" /> Franchise & Partnership
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2">
              Let’s Create Sweeter Opportunities Together!
            </h3>
            <p className="text-white/85 text-sm sm:text-base max-w-2xl">
              Partner with Blucy and become part of a fast-growing, scalable ice cream & café network with flexible retail formats from ₹12 Lakh to ₹40 Lakh.
            </p>
          </div>
          <div className="relative z-10 flex flex-wrap gap-3">
            <Link to="/franchise" className="btn-pink text-sm sm:text-base px-6 py-3">
              Explore Franchise
            </Link>
            <Link to="/contact" className="btn-outline-white text-sm sm:text-base px-6 py-3">
              Contact Team
            </Link>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block focus:outline-none" aria-label="Blucy Ice Creamery">
              <img
                src="/images/brand/blucy_logo.png"
                alt="Blucy Ice Creamery"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-blucy-navy font-medium text-sm leading-relaxed max-w-sm">
              <span className="text-blucy-pink font-semibold">“Happiness in Every Scoop.”</span><br />
              Premium Taste. Affordable Price. Available Everywhere. Making quality ice creams and dessert cafés accessible across India through versatile retail formats.
            </p>
            <div className="pt-2 text-xs text-blucy-muted space-y-1">
              <p className="font-semibold text-blucy-navy">Blucy Foods & Beverages</p>
              <p>Promoter: Konduru Sharath</p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-blucy-navy text-base tracking-wide border-b border-blucy-sky/30 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-blucy-muted hover:text-blucy-blue transition-colors flex items-center gap-1 group">
                  <span>Home</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-blucy-muted hover:text-blucy-blue transition-colors flex items-center gap-1 group">
                  <span>About Us</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-blucy-muted hover:text-blucy-blue transition-colors flex items-center gap-1 group">
                  <span>Our Products</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-blucy-muted hover:text-blucy-blue transition-colors flex items-center gap-1 group">
                  <span>Café Menu</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-blucy-muted hover:text-blucy-blue transition-colors flex items-center gap-1 group">
                  <span>Gallery</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/founder" className="text-blucy-muted hover:text-blucy-blue transition-colors flex items-center gap-1 group">
                  <span>Founder Spotlight</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Business Formats */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-blucy-navy text-base tracking-wide border-b border-blucy-sky/30 pb-2">
              Business Formats
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/business-formats#shops" className="text-blucy-muted hover:text-blucy-blue transition-colors">
                  Ice Cream Shops (250 Sq. Ft.)
                </Link>
              </li>
              <li>
                <Link to="/business-formats#food-trucks" className="text-blucy-muted hover:text-blucy-blue transition-colors">
                  Food Trucks
                </Link>
              </li>
              <li>
                <Link to="/business-formats#cycle-carts" className="text-blucy-muted hover:text-blucy-blue transition-colors">
                  Cycle Push Carts
                </Link>
              </li>
              <li>
                <Link to="/business-formats#mini-carts" className="text-blucy-muted hover:text-blucy-blue transition-colors">
                  Mini Carts
                </Link>
              </li>
              <li>
                <Link to="/business-formats#event-carts" className="text-blucy-muted hover:text-blucy-blue transition-colors">
                  Event Carts
                </Link>
              </li>
              <li>
                <Link to="/business-formats#mini-kiosks" className="text-blucy-muted hover:text-blucy-blue transition-colors">
                  Mini Kiosks
                </Link>
              </li>
              <li>
                <Link to="/investment" className="text-blucy-pink font-semibold hover:underline flex items-center gap-1">
                  <span>Investment Models (₹12L–₹40L)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-blucy-navy text-base tracking-wide border-b border-blucy-sky/30 pb-2">
              Reach Us
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blucy-pink shrink-0 mt-1" />
                <p className="text-blucy-muted leading-relaxed">
                  4th Floor, H.No. 8-3-228/A/2, Flat No. 402, RRV Apartment, Yadgiri Nagar, Yousufguda Check Post, Hyderabad, Telangana – 500045.
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blucy-blue shrink-0" />
                <a href="tel:8686448825" className="text-blucy-navy font-semibold hover:text-blucy-blue transition-colors">
                  8686448825
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blucy-sky shrink-0" />
                <a href="mailto:blucyfoods@gmail.com" className="text-blucy-navy font-medium hover:text-blucy-blue transition-colors break-all">
                  blucyfoods@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="border-t border-blucy-sky/20 pt-6 pb-6 text-xs text-blucy-muted/80 leading-relaxed">
          <p className="font-semibold text-blucy-muted mb-1">Commercial & Legal Notice:</p>
          <p>
            All investment figures (₹40 Lakh, ₹30 Lakh, ₹24 Lakh, ₹20 Lakh, ₹12 Lakh), revenue projections, returns structures (50:50 sharing), and timelines displayed on this website represent advertised promotional models and illustrative figures sourced directly from Blucy Ice Creamery marketing brochures. They do not constitute an independent guarantee of financial performance, profit, or legal commitment. Actual costs, equipment lists, licenses, and contractual terms require formal written agreement, territory due diligence, and official confirmation by Blucy Foods & Beverages.
          </p>
        </div>

        {/* Bottom Credits */}
        <div className="border-t border-blucy-sky/20 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-blucy-muted gap-4">
          <p>© {CURRENT_YEAR} Blucy Foods & Beverages. All Rights Reserved.</p>
          <div className="flex items-center gap-1 text-blucy-muted">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-blucy-pink fill-blucy-pink" />
            <span>for Sweet Scoops & Great Smiles</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
