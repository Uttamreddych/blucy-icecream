import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { BUSINESS_FORMATS } from '../data/franchise';
import { ImageLightbox } from '../components/ImageLightbox';
import {
  CheckCircle2,
  MapPin,
  Maximize2,
  Eye
} from 'lucide-react';

export const BusinessFormats: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Our Business Formats' }]} />

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blucy-ice text-xs font-bold text-blucy-blue uppercase tracking-wider mb-3">
            Multi-Format Retail Network
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-blucy-navy">
            Our Business <span className="text-gradient-pink">Formats</span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-blucy-muted font-normal leading-relaxed">
            From agile cycle carts to full-scale modern dessert cafés, Blucy’s multi-format architecture meets customer footfalls wherever they gather.
          </p>
        </div>

        {/* Format Quick Jump Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {BUSINESS_FORMATS.map((fmt) => (
            <a
              key={fmt.id}
              href={`#${fmt.slug}`}
              className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-white text-blucy-navy hover:bg-blucy-ice border border-blucy-sky/20 transition-all whitespace-nowrap shadow-sm"
            >
              {fmt.title.replace('Blucy ', '')}
            </a>
          ))}
        </div>

        {/* Formats Detailed Sections */}
        <div className="space-y-20">
          {BUSINESS_FORMATS.map((fmt, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <section
                key={fmt.id}
                id={fmt.slug}
                className="scroll-mt-28 blucy-card p-6 sm:p-10 lg:p-12 bg-white border border-blucy-sky/25"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Visual Gallery Column */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-4`}>
                    <div className="relative rounded-3xl overflow-hidden bg-blucy-ice shadow-md group">
                      <img
                        src={fmt.mainImage}
                        alt={fmt.title}
                        loading="lazy"
                        className="w-full h-auto max-h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <button
                        type="button"
                        onClick={() => setSelectedImage({ url: fmt.mainImage, title: fmt.title })}
                        className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-blucy-navy text-xs font-semibold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 backdrop-blur-sm transition-colors"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Zoom</span>
                      </button>
                      <div className="absolute top-3 left-3 bg-blucy-blue text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        {fmt.badge}
                      </div>
                    </div>

                    {/* Secondary thumbnails */}
                    {fmt.secondaryImages.length > 0 && (
                      <div className="grid grid-cols-3 gap-3">
                        {fmt.secondaryImages.slice(0, 3).map((thumb, tIdx) => (
                          <div
                            key={tIdx}
                            onClick={() => setSelectedImage({ url: thumb.url, title: `${fmt.title} — ${thumb.caption}` })}
                            className="cursor-pointer rounded-2xl overflow-hidden bg-blucy-ice/60 border border-blucy-sky/20 hover:border-blucy-blue transition-all relative group aspect-video"
                          >
                            <img
                              src={thumb.url}
                              alt={thumb.caption}
                              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-blucy-navy/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-white text-[10px] font-semibold text-center p-1">
                              <Eye className="w-4 h-4" />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Text Details Column */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'} space-y-5`}>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-blucy-pink">
                        {fmt.subtitle}
                      </span>
                      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-blucy-navy mt-1">
                        {fmt.title}
                      </h2>
                      <p className="text-sm sm:text-base text-blucy-muted mt-2 font-normal leading-relaxed">
                        {fmt.description}
                      </p>
                    </div>

                    {/* Specifications Card */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-blucy-ice/50 rounded-2xl border border-blucy-blue/15 text-xs">
                      <div>
                        <span className="text-blucy-muted block font-medium">Space Footprint:</span>
                        <span className="font-semibold text-blucy-navy text-sm">{fmt.spaceRequired}</span>
                      </div>
                      {fmt.annualSalesTarget && (
                        <div>
                          <span className="text-blucy-muted block font-medium">Annual Sales Target:</span>
                          <span className="font-bold text-blucy-pink text-sm">{fmt.annualSalesTarget}</span>
                        </div>
                      )}
                    </div>

                    {/* Key Features */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-blucy-navy mb-2">
                        Operational Features
                      </h3>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-blucy-text">
                        {fmt.keyFeatures.map((kf, kIdx) => (
                          <li key={kIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-blucy-blue shrink-0 mt-0.5" />
                            <span>{kf}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Products Served */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-blucy-navy mb-2">
                        Menu Offerings
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {fmt.productsServed.map((prod, pIdx) => (
                          <span
                            key={pIdx}
                            className="text-xs px-2.5 py-1 rounded-full bg-white border border-blucy-sky/30 text-blucy-navy font-medium shadow-2xs"
                          >
                            {prod}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Ideal Locations */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-blucy-navy mb-2 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-blucy-pink" />
                        <span>Ideal Locations</span>
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {fmt.bestSuitedFor.map((loc, lIdx) => (
                          <span
                            key={lIdx}
                            className="text-xs px-2.5 py-0.5 rounded-md bg-blucy-ice/80 text-blucy-muted font-medium"
                          >
                            • {loc}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-2 flex flex-wrap gap-3">
                      <Link
                        to={`/contact?format=${encodeURIComponent(fmt.title)}`}
                        className="btn-pink text-xs sm:text-sm py-2.5 px-6"
                      >
                        Enquire for this Format
                      </Link>
                      <Link
                        to="/investment"
                        className="btn-secondary text-xs sm:text-sm py-2.5 px-6"
                      >
                        View Investment Packages
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <ImageLightbox
            isOpen={true}
            imageSrc={selectedImage.url}
            title={selectedImage.title}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </div>
    </div>
  );
};
