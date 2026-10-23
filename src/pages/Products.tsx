import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { ProductCard } from '../components/ProductCard';
import { ALL_PRODUCTS } from '../data/products';
import { Search, Sparkles, IceCream, Utensils } from 'lucide-react';

export const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';
  const [searchTerm, setSearchTerm] = useState('');

  const filterTabs = [
    { slug: 'all', label: 'All Delights' },
    { slug: 'ice-creams', label: 'Ice Creams' },
    { slug: 'waffles', label: 'Waffles' },
    { slug: 'softy-cones', label: 'Softy Cones' },
    { slug: 'kulfies', label: 'Kulfies' },
    { slug: 'popsicles', label: 'Popsicles' },
    { slug: 'sundaes', label: 'Sundaes & Desserts' },
    { slug: 'milkshakes', label: 'Milkshakes & Frappes' },
    { slug: 'cafe', label: 'Café Brews' },
    { slug: 'quick-bites', label: 'Quick Bites & Food' },
  ];

  const handleTabChange = (slug: string) => {
    if (slug === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: slug });
    }
  };

  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((product) => {
      const matchesCategory =
        activeCategory === 'all' || product.categorySlug === activeCategory;
      const matchesSearch =
        searchTerm.trim() === '' ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Our Products' }]} />

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blucy-softpink text-xs font-bold text-blucy-pink uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Delicious Catalog
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-blucy-navy">
            Our Sweet <span className="text-gradient-pink">Universe</span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-blucy-muted font-normal leading-relaxed">
            Every scoop, cone, stick, and waffle is crafted with high-quality ingredients to deliver rich flavours and creamy textures at honest, affordable prices.
          </p>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="mb-10 space-y-4">
          {/* Search bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-blucy-muted absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search flavours: Vanilla, Nutella, Paan, Kesar..."
              className="w-full pl-12 pr-4 py-3 rounded-full border border-blucy-sky/30 bg-white shadow-sm text-sm text-blucy-navy placeholder-blucy-muted/60 focus:outline-none focus:ring-2 focus:ring-blucy-blue/30 transition-all"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-blucy-muted hover:text-blucy-pink font-semibold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Pill Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {filterTabs.map((tab) => {
              const isSelected = activeCategory === tab.slug;
              return (
                <button
                  key={tab.slug}
                  type="button"
                  onClick={() => handleTabChange(tab.slug)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    isSelected
                      ? 'bg-blucy-blue text-white shadow-md'
                      : 'bg-white text-blucy-navy hover:bg-blucy-ice border border-blucy-sky/20'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Vegetarian Assurance Banner */}
        <div className="mb-10 p-3.5 bg-green-50/80 rounded-2xl border border-green-200/70 flex items-center justify-between text-xs text-green-800">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-green-600 rounded-sm flex items-center justify-center bg-white">
              <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
            </div>
            <span className="font-medium">All Blucy ice cream, softy, kulfi, waffle, and café items are 100% Pure Vegetarian.</span>
          </div>
          <Link to="/menu" className="hidden sm:inline-flex items-center gap-1 font-bold text-green-900 hover:underline">
            <span>View Full Price Menu</span>
            <Utensils className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-blucy-ice/30 rounded-3xl border border-blucy-sky/20">
            <IceCream className="w-12 h-12 text-blucy-muted mx-auto mb-3" />
            <h3 className="text-xl font-heading font-bold text-blucy-navy">
              No matching products found
            </h3>
            <p className="text-sm text-blucy-muted mt-1">
              Try searching with another keyword or select “All Delights”.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                handleTabChange('all');
              }}
              className="mt-4 btn-primary text-xs py-2 px-5"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Footer Promo Box */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blucy-navy to-blucy-blue text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl font-heading font-bold text-white">
              Want to see our comprehensive Dine-In Café Menu?
            </h3>
            <p className="text-white/80 text-sm mt-1">
              Check out all beverage prices, hot coffees, frosted frappes, burgers, fries, pizzas, and mocktails.
            </p>
          </div>
          <Link to="/menu" className="btn-pink text-sm px-6 py-3 shrink-0">
            Browse Café Menu
          </Link>
        </div>
      </div>
    </div>
  );
};
