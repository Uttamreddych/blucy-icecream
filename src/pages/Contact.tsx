import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { EnquiryForm } from '../components/EnquiryForm';
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  QrCode,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialModel = searchParams.get('model') || searchParams.get('format') || '';

  const address = "4th Floor, H.No. 8-3-228/A/2, Flat No. 402, RRV Apartment, Yadgiri Nagar, Yousufguda Check Post, Hyderabad, Telangana – 500045";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Contact Us' }]} />

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blucy-softpink text-xs font-bold text-blucy-pink uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-blucy-navy">
            Contact Blucy <span className="text-gradient-pink">Foods & Beverages</span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-blucy-muted font-normal leading-relaxed">
            Have questions about franchise models, investment returns, dessert catering, or setting up a Blucy cart in your city? We’d love to hear from you.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Official Contact Dossier */}
          <div className="lg:col-span-5 space-y-6">
            <div className="blucy-card p-6 sm:p-8 bg-white border border-blucy-sky/30 shadow-brand space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blucy-blue">
                  Corporate Office
                </span>
                <h2 className="text-2xl font-heading font-bold text-blucy-navy mt-1">
                  Blucy Foods & Beverages
                </h2>
                <p className="text-xs text-blucy-pink font-semibold mt-0.5">
                  Promoter: Konduru Sharath
                </p>
              </div>

              {/* Address Card */}
              <div className="p-4 rounded-2xl bg-blucy-ice/50 border border-blucy-blue/15 space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blucy-pink shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-blucy-navy">
                      Registered Address
                    </h3>
                    <p className="text-xs sm:text-sm text-blucy-text mt-1 leading-relaxed">
                      {address}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-blucy-blue/10">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blucy-blue hover:text-blucy-pink transition-colors"
                  >
                    <span>Open in Google Maps Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Direct Communications */}
              <div className="space-y-3">
                {/* Telephone */}
                <a
                  href="tel:8686448825"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-blucy-sky/20 hover:border-blucy-blue hover:bg-blucy-ice/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blucy-ice text-blucy-blue flex items-center justify-center shrink-0 group-hover:bg-blucy-blue group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-blucy-muted uppercase block">
                      Direct Phone
                    </span>
                    <span className="font-heading font-bold text-base text-blucy-navy group-hover:text-blucy-blue">
                      +91 8686448825
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:blucyfoods@gmail.com"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-blucy-sky/20 hover:border-blucy-blue hover:bg-blucy-ice/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blucy-softpink text-blucy-pink flex items-center justify-center shrink-0 group-hover:bg-blucy-pink group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-semibold text-blucy-muted uppercase block">
                      Official Email
                    </span>
                    <span className="font-heading font-semibold text-sm sm:text-base text-blucy-navy group-hover:text-blucy-blue truncate block">
                      blucyfoods@gmail.com
                    </span>
                  </div>
                </a>
              </div>

              {/* Verified Original QR Code Asset */}
              <div className="p-4 rounded-2xl bg-blucy-ice/40 border border-blucy-sky/20 flex items-center gap-4">
                <div className="w-20 h-20 bg-white p-1 rounded-xl shadow-xs shrink-0 border border-blucy-blue/20">
                  <img
                    src="/images/brand/blucy_qr_code.png"
                    alt="Scan to Connect with Blucy Foods"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-blucy-navy uppercase">
                    <QrCode className="w-4 h-4 text-blucy-pink" />
                    <span>Scan to Connect</span>
                  </div>
                  <p className="text-xs text-blucy-muted mt-1 leading-snug">
                    Scan with your mobile camera to quickly save contact details and discuss opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* General Enquiries Covered */}
            <div className="p-5 rounded-2xl bg-white border border-blucy-sky/20 shadow-sm text-xs space-y-2">
              <span className="font-bold text-blucy-navy uppercase tracking-wider block">
                We Welcome Enquiries For:
              </span>
              <ul className="space-y-1.5 text-blucy-muted">
                <li className="flex items-center gap-2 text-blucy-text">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blucy-blue" />
                  <span>Franchise partnerships across India</span>
                </li>
                <li className="flex items-center gap-2 text-blucy-text">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blucy-blue" />
                  <span>₹12L to ₹40L Multi-format investment models</span>
                </li>
                <li className="flex items-center gap-2 text-blucy-text">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blucy-blue" />
                  <span>Event cart catering for weddings & corporate gatherings</span>
                </li>
                <li className="flex items-center gap-2 text-blucy-text">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blucy-blue" />
                  <span>Site assessments and kiosk leasing partnerships</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <EnquiryForm initialModel={initialModel} />
          </div>
        </div>
      </div>
    </div>
  );
};
