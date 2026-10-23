import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/gallery';
import type { GalleryItem } from '../data/gallery';
import { ImageLightbox } from '../components/ImageLightbox';
import { Eye, Maximize2, Sparkles } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Gallery' }]} />

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blucy-softpink text-xs font-bold text-blucy-pink uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Visual Showcase
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-blucy-navy">
            Blucy Brand & Retail <span className="text-gradient-pink">Gallery</span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-blucy-muted font-normal leading-relaxed">
            Explore authentic photographs, store interiors, food trucks, mobile cycle carts, and verified marketing posters from Blucy Ice Creamery.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {GALLERY_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-blucy-blue text-white shadow-md'
                    : 'bg-white text-blucy-navy hover:bg-blucy-ice border border-blucy-sky/20'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="blucy-card group cursor-pointer bg-white border border-blucy-sky/20 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-blucy-ice/60">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-blucy-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-blucy-blue flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-blucy-navy text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                  {item.categoryLabel}
                </div>
              </div>

              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-blucy-navy group-hover:text-blucy-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-blucy-muted mt-1.5 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-blucy-ice flex items-center justify-between text-xs text-blucy-blue font-semibold">
                  <span className="flex items-center gap-1 group-hover:underline">
                    <Eye className="w-3.5 h-3.5" /> Click to view full image
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {activeItem && (
          <ImageLightbox
            isOpen={true}
            imageSrc={activeItem.image}
            title={activeItem.title}
            description={activeItem.description}
            onClose={() => setActiveItem(null)}
          />
        )}
      </div>
    </div>
  );
};
