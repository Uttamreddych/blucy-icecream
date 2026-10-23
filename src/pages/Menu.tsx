import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { CAFE_MENU_DATA } from '../data/menu';
import { MenuItemRow } from '../components/MenuItemRow';
import { ImageLightbox } from '../components/ImageLightbox';
import {
  Coffee,
  IceCream,
  UtensilsCrossed,
  Pizza,
  Sparkles,
  Eye,
  Info,
  Clock
} from 'lucide-react';

export const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'beverages' | 'ice-creams' | 'desserts' | 'food'>('all');
  const [lightboxPoster, setLightboxPoster] = useState<{ url: string; title: string } | null>(null);

  const categories = [
    { id: 'all', label: 'Complete Menu', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'ice-creams', label: 'Scoops & Ice Creams', icon: <IceCream className="w-4 h-4" /> },
    { id: 'desserts', label: 'Waffles & Sundaes', icon: <UtensilsCrossed className="w-4 h-4" /> },
    { id: 'beverages', label: 'Coffees & Shakes', icon: <Coffee className="w-4 h-4" /> },
    { id: 'food', label: 'Burgers, Pizzas & Bites', icon: <Pizza className="w-4 h-4" /> },
  ];

  const filteredSections = activeTab === 'all'
    ? CAFE_MENU_DATA
    : CAFE_MENU_DATA.filter((s) => s.category === activeTab);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Café Menu' }]} />

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blucy-softpink text-xs font-bold text-blucy-pink uppercase tracking-wider mb-3">
            Sips & Smiles
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-blucy-navy">
            Blucy Café <span className="text-gradient-pink">Menu</span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-blucy-muted font-normal leading-relaxed">
            Every item meticulously reproduced from our official menu artwork with transparent pricing in Indian Rupees (₹).
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id as any)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === cat.id
                  ? 'bg-blucy-blue text-white shadow-md'
                  : 'bg-white text-blucy-navy hover:bg-blucy-ice border border-blucy-sky/20'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Notice Badge */}
        <div className="p-3.5 bg-blucy-ice/80 rounded-2xl border border-blucy-blue/20 text-xs text-blucy-navy mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-blucy-blue shrink-0" />
            <span>
              Prices shown in Indian Rupees (₹). Menu items, seasonal fruits, and regional pricing may vary slightly by outlet location.
            </span>
          </div>
          <span className="text-[11px] text-blucy-muted shrink-0 font-medium flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> Source: Official Blucy Menu Artwork
          </span>
        </div>

        {/* Menu Sections Grid */}
        <div className="space-y-12">
          {filteredSections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="blucy-card p-6 sm:p-8 bg-white border border-blucy-sky/25"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-blucy-ice mb-6 gap-3">
                <div>
                  <span className="text-xs font-bold text-blucy-pink uppercase tracking-wider">
                    {section.tagline}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-blucy-navy mt-0.5">
                    {section.title}
                  </h2>
                </div>

                {section.posterImage && (
                  <button
                    type="button"
                    onClick={() => setLightboxPoster({ url: section.posterImage!, title: `${section.title} Official Artwork` })}
                    className="self-start sm:self-auto inline-flex items-center gap-1.5 text-xs font-semibold text-blucy-blue hover:text-blucy-pink bg-blucy-ice px-3 py-1.5 rounded-full transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Poster Artwork</span>
                  </button>
                )}
              </div>

              {/* Items List */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-2">
                {section.items.map((item, idx) => (
                  <MenuItemRow key={idx} item={item} />
                ))}
              </div>

              {/* Section Note if any */}
              {section.note && (
                <div className="mt-4 pt-3 border-t border-blucy-ice/60 text-xs text-blucy-muted italic">
                  * {section.note}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Lightbox for Poster Preview */}
        {lightboxPoster && (
          <ImageLightbox
            isOpen={true}
            imageSrc={lightboxPoster.url}
            title={lightboxPoster.title}
            description="High-resolution verified original menu artwork reference."
            onClose={() => setLightboxPoster(null)}
          />
        )}
      </div>
    </div>
  );
};
