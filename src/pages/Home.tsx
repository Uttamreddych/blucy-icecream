import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/SectionHeading';
import { PRODUCT_CATEGORIES } from '../data/products';
import { BUSINESS_FORMATS } from '../data/franchise';
import { FranchiseFormatCard } from '../components/FranchiseFormatCard';
import {
  IceCream,
  Sparkles,
  ArrowRight,
  TrendingUp,
  DollarSign,
  Layers,
  Zap,
  Eye,
  Target,
  Truck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export const Home: React.FC = () => {
  const whyBlucyBenefits = [
    {
      icon: <Target className="w-6 h-6 text-blucy-blue" />,
      title: 'Wider Market Reach',
      desc: 'Reach customers across high-street residential zones, public parks, colleges, and event locations through mobile and stationary formats.',
    },
    {
      icon: <DollarSign className="w-6 h-6 text-blucy-pink" />,
      title: 'Lower Entry Cost',
      desc: 'Controlled infrastructure setup with options starting from flexible entry-level models, keeping operational overhead lean.',
    },
    {
      icon: <Layers className="w-6 h-6 text-blucy-sky" />,
      title: 'Multiple Revenue Channels',
      desc: 'Diversify daily income across dine-in scoops, mobile cart footfall, evening food truck sales, and high-margin event catering.',
    },
    {
      icon: <Zap className="w-6 h-6 text-blucy-blue" />,
      title: 'Faster Expansion',
      desc: 'Pre-designed modular vehicles, kiosks, and shop layouts enable rapid rollout without long civil construction delays.',
    },
    {
      icon: <Eye className="w-6 h-6 text-blucy-pink" />,
      title: 'Stronger Brand Visibility',
      desc: 'Unmistakable blue-and-pink branding, friendly smiling mascots, and mobile units act as moving billboards across your city.',
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blucy-sky" />,
      title: 'Higher Market Penetration',
      desc: 'Place products right where the customer is — bringing delicious treats closer to families, youth, and celebration crowds.',
    },
  ];

  const featuredMenuItems = [
    { name: 'Shahi Paan Scoop', category: 'Premium Ice Cream', price: '₹99 single / ₹129 double', tag: 'Signature' },
    { name: 'Oreo Crunch Waffle', category: 'Crisp Warm Waffles', price: '₹179', tag: 'Bestseller' },
    { name: 'Caramel Blizzard Frappe', category: 'Frosted Coffee', price: '₹169', tag: 'Chilled' },
    { name: 'Nutty Choco Dip Cone', category: 'Softy Cones', price: '₹89', tag: 'Popular' },
    { name: 'Kesar Pista Kulfi', category: 'Traditional Kulfi', price: '₹79', tag: 'Heritage' },
    { name: 'HM Classic Burger', category: 'Café Quick Bites', price: '₹65', tag: 'Value Hit' },
  ];

  const heroSlides = [
    {
      image: '/images/products/waffle_hero_plate.png',
      tag: 'Signature Treat',
      title: 'Crisp Waffles & Pure Dairy Scoops',
      subtitle: 'Warm Belgian waffles paired with rich artisan ice cream',
      priceBadge: 'Waffles from ₹149',
      link: '/products?category=waffles',
    },
    {
      image: '/images/products/ice_cream_scoops_cup.png',
      tag: '100% Pure Dairy',
      title: 'Artisanal Ice Creams & Exotic Flavours',
      subtitle: 'Shahi Paan, Roasted Almond, Wild Blueberry & more',
      priceBadge: 'Scoops from ₹49',
      link: '/products?category=ice-creams',
    },
    {
      image: '/images/products/softy_cones.png',
      tag: 'Freshly Swirled',
      title: 'Crunchy Choco Dip Softy Cones',
      subtitle: 'Classic vanilla, strawberry, chocolate & nutty dips',
      priceBadge: 'Cones from ₹49',
      link: '/products?category=softy-cones',
    },
    {
      image: '/images/products/sundae_bowl.png',
      tag: 'Chef Signature',
      title: 'Velvety Handcrafted Sundaes',
      subtitle: 'California, Indian Tradition & Swiss Chocolate sundaes',
      priceBadge: 'Sundaes from ₹249',
      link: '/products?category=sundaes-desserts',
    },
    {
      image: '/images/products/cafe_frappes.png',
      tag: 'Frosted Sips',
      title: 'Caramel Blizzard & Java Chip Frappes',
      subtitle: 'Thick, frosty iced coffees and indulgent chocolate frappes',
      priceBadge: 'Frappes from ₹169',
      link: '/products?category=milkshakes-beverages',
    },
    {
      image: '/images/products/kulfies_platter.png',
      tag: 'Desi Indulgence',
      title: 'Traditional Malai & Kesar Pista Kulfis',
      subtitle: 'Rich, authentic regional treats on sticks and platters',
      priceBadge: 'Kulfis from ₹69',
      link: '/products?category=kulfies',
    },
    {
      image: '/images/franchise/food_truck_main.png',
      tag: 'Franchise Growth',
      title: 'Branded Mobile Food Trucks',
      subtitle: 'High-visibility rolling cafés for city events and hotspots',
      priceBadge: 'Turnkey Setup',
      link: '/franchise',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, heroSlides.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    setTouchStart(null);
  };

  return (
    <div className="pt-20">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blucy-ice via-white to-white py-12 lg:py-20">
        {/* Decorative background blurs */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-blucy-sky/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-blucy-pink/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blucy-blue/20 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blucy-pink animate-pulse" />
                <span className="text-xs font-bold text-blucy-navy uppercase tracking-wider">
                  India’s Multi-Format Dessert & Café Brand
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-blucy-navy leading-[1.15]">
                Happiness in <br className="hidden sm:inline" />
                <span className="text-gradient-pink">Every Scoop.</span>
              </h1>

              <p className="text-xl sm:text-2xl font-heading font-semibold text-blucy-blue">
                “Premium Taste. Affordable Price. Available Everywhere.”
              </p>

              <p className="text-base sm:text-lg text-blucy-muted max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                From velvety artisanal ice creams, warm Belgian waffles, and thick milkshakes to aromatic espresso brews and quick bites — Blucy brings joyful flavours to everyone through flexible cafés, food trucks, kiosks, and mobile carts.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link to="/products" className="btn-primary w-full sm:w-auto px-8 py-3.5 text-base flex items-center justify-center gap-2 group shadow-brand">
                  <IceCream className="w-5 h-5 text-blucy-sky transition-transform group-hover:rotate-12" />
                  <span>Explore Our Products</span>
                </Link>
                <Link to="/franchise" className="btn-pink w-full sm:w-auto px-8 py-3.5 text-base flex items-center justify-center gap-2 group shadow-brand-pink">
                  <span>Franchise Opportunities</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Quick Trust Badges */}
              <div className="pt-6 border-t border-blucy-sky/20 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 text-center">
                <div className="p-2.5 rounded-2xl bg-white/80 border border-blucy-sky/20">
                  <span className="block font-heading font-bold text-blucy-blue text-lg sm:text-xl">100%</span>
                  <span className="text-[11px] text-blucy-muted font-medium">Pure Vegetarian</span>
                </div>
                <div className="p-2.5 rounded-2xl bg-white/80 border border-blucy-sky/20">
                  <span className="block font-heading font-bold text-blucy-pink text-lg sm:text-xl">6+ Formats</span>
                  <span className="text-[11px] text-blucy-muted font-medium">Retail Flexibility</span>
                </div>
                <div className="p-2.5 rounded-2xl bg-white/80 border border-blucy-sky/20">
                  <span className="block font-heading font-bold text-blucy-navy text-lg sm:text-xl">₹12L - ₹40L</span>
                  <span className="text-[11px] text-blucy-muted font-medium">Franchise Models</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Collage / Auto-Scrolling Product Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Card Carousel */}
                <div
                  className="relative z-10 rounded-3xl overflow-hidden shadow-card-hover border-4 border-white bg-white group select-none"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  {/* Sliding Container */}
                  <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {heroSlides.map((slide, idx) => (
                      <Link
                        key={idx}
                        to={slide.link}
                        className="w-full shrink-0 relative aspect-[4/3] sm:aspect-[16/11] bg-gradient-to-tr from-blucy-ice via-white to-blucy-softpink/40 flex items-center justify-center overflow-hidden block"
                        title={slide.title}
                      >
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Gradient Overlay & Captions */}
                        <div className="p-4 sm:p-5 bg-gradient-to-t from-blucy-navy/95 via-blucy-navy/65 to-transparent text-white absolute bottom-0 left-0 right-0">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <span className="text-[11px] font-bold text-blucy-sky uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-sm">
                              {slide.tag}
                            </span>
                            <span className="text-[11px] font-semibold text-white/70">
                              {idx + 1} / {heroSlides.length}
                            </span>
                          </div>
                          <h3 className="font-heading font-bold text-lg sm:text-xl text-white drop-shadow-sm leading-snug">
                            {slide.title}
                          </h3>
                          <p className="text-xs text-white/80 font-normal line-clamp-1 mt-0.5">
                            {slide.subtitle}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Left Arrow Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      prevSlide();
                    }}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-blucy-navy flex items-center justify-center shadow-lg backdrop-blur-sm opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20 focus:outline-none"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5 text-blucy-navy" />
                  </button>

                  {/* Right Arrow Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      nextSlide();
                    }}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-blucy-navy flex items-center justify-center shadow-lg backdrop-blur-sm opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20 focus:outline-none"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-5 h-5 text-blucy-navy" />
                  </button>

                  {/* Slide Indicators / Pill Dots */}
                  <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 bg-blucy-navy/60 backdrop-blur-md px-2.5 py-1 rounded-full">
                    {heroSlides.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentSlide(dotIdx);
                        }}
                        className={`h-1.5 transition-all duration-300 rounded-full ${
                          currentSlide === dotIdx ? 'w-5 bg-blucy-pink' : 'w-1.5 bg-white/50 hover:bg-white'
                        }`}
                        aria-label={`Go to slide ${dotIdx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Floating Badge 1: Multi-Format Mobility */}
                <div className="absolute -bottom-6 -left-6 z-20 bg-white p-3 rounded-2xl shadow-xl border border-blucy-sky/20 flex items-center gap-3 animate-float hidden sm:flex">
                  <div className="w-12 h-12 rounded-xl bg-blucy-ice flex items-center justify-center text-blucy-blue shrink-0">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-blucy-navy block">Mobile Food Trucks</span>
                    <span className="text-[11px] text-blucy-pink font-semibold">Happiness on Wheels</span>
                  </div>
                </div>

                {/* Floating Badge 2: Dynamic Live Price Point */}
                <div className="absolute -top-4 -right-4 z-20 bg-blucy-pink text-white px-4 py-2.5 rounded-2xl shadow-brand-pink text-xs font-heading font-bold transform rotate-3 flex items-center gap-1.5 transition-all duration-300">
                  <Sparkles className="w-4 h-4 fill-white" />
                  <span>{heroSlides[currentSlide].priceBadge}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT UNIVERSE / CATEGORIES */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Delicious Range"
            badgeColor="pink"
            title="Explore the Blucy"
            highlight="Product Universe"
            subtitle="Craving a quick popsicle on a sunny afternoon or sharing a decadent waffle sundae at the café? Discover our irresistible offerings."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PRODUCT_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={`/products?category=${cat.slug}`}
                className="blucy-card group flex flex-col justify-between hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] bg-gradient-to-tr from-blucy-ice/60 via-white to-blucy-softpink/40 p-6 flex items-center justify-center overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-blucy-blue flex items-center justify-center shadow-sm group-hover:bg-blucy-blue group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-xs font-semibold text-blucy-pink uppercase tracking-wider block">
                    {cat.tagline}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-blucy-navy mt-1 group-hover:text-blucy-blue transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-blucy-muted mt-2 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/products" className="btn-secondary px-8 py-3 text-sm">
              <span>View All Products & Flavours</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. BUSINESS FORMATS OVERVIEW */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-blucy-ice/50 via-white to-blucy-ice/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Flexible Retail Growth"
            badgeColor="blue"
            title="Our Multi-Format"
            highlight="Business Model"
            subtitle="From agile 3-wheel cycle carts to 250 sq. ft. modern dessert cafés, Blucy provides low-capex formats customized for parks, high-streets, malls, and event catering."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BUSINESS_FORMATS.slice(0, 6).map((format) => (
              <FranchiseFormatCard key={format.id} format={format} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/business-formats" className="btn-primary px-8 py-3.5 text-sm">
              <span>Compare All 7 Business Formats</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. WHY BLUCY? (BRAND POSITIONING) */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Brand Positioning"
            badgeColor="pink"
            title="Why Partner with"
            highlight="Blucy Ice Creamery?"
            subtitle="Treating these advantages as our strategic brand positioning pillars to build India's most accessible and scalable dessert business."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyBlucyBenefits.map((item, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-gradient-to-b from-white to-blucy-ice/30 border border-blucy-sky/20 hover:border-blucy-blue/40 shadow-brand hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-blucy-sky/20 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-blucy-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-blucy-muted leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-2xl bg-blucy-ice/60 border border-blucy-blue/20 text-center text-xs text-blucy-muted max-w-2xl mx-auto">
            * Strategic positioning statements representing the brand vision and retail operational strategy. Actual business outcomes vary by location, execution, and local market factors.
          </div>
        </div>
      </section>

      {/* 5. BRAND STORY & MISSION */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-blucy-navy via-blucy-blue to-[#0e48b8] text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 bg-blucy-pink/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/20 text-xs font-semibold uppercase tracking-wider text-blucy-ice">
                Our Core Mission
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
                “Premium Taste. Affordable Price. Available Everywhere.”
              </h2>
              <p className="text-white/85 text-base sm:text-lg leading-relaxed">
                Blucy's mission is to make premium-quality ice creams and desserts accessible to everyone at affordable prices. By reducing infrastructure and operating costs through compact, innovative mobile carts and modern cafés, Blucy aims to offer better products at accessible prices, increase customer reach, and create multiple revenue channels.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <h4 className="font-heading font-bold text-blucy-ice text-lg">Accessibility</h4>
                  <p className="text-xs text-white/80 mt-1">Reaching customers in residential hubs, parks, and campuses.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <h4 className="font-heading font-bold text-blucy-pink text-lg">Affordability</h4>
                  <p className="text-xs text-white/80 mt-1">Value-for-money pricing without compromising on pure dairy quality.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <h4 className="font-heading font-bold text-blucy-sky text-lg">Product Quality</h4>
                  <p className="text-xs text-white/80 mt-1">Rich recipes, fresh ingredients, and delightful scoops.</p>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/about" className="btn-outline-white text-sm px-6 py-3">
                  Read Our Full Brand Story
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30">
                <img
                  src="/images/franchise/shop_front.png"
                  alt="Blucy Dessert Café Storefront"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FEATURED SIGNATURE MENU */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blucy-pink bg-blucy-softpink px-3 py-1 rounded-full">
                Sips & Smiles
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-blucy-navy mt-3">
                Selected Signature Delights
              </h2>
              <p className="text-sm sm:text-base text-blucy-muted mt-2">
                Sample favourite items with verified source prices from the Blucy Café Menu.
              </p>
            </div>
            <Link to="/menu" className="btn-primary mt-4 md:mt-0 text-sm px-6 py-3 self-start md:self-auto">
              <span>View Full Menu & Prices</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredMenuItems.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-blucy-ice/40 border border-blucy-sky/20 flex items-center justify-between hover:bg-blucy-ice transition-colors"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blucy-pink bg-blucy-softpink px-2 py-0.5 rounded-full">
                    {item.tag}
                  </span>
                  <h3 className="font-heading font-bold text-blucy-navy text-base mt-1">
                    {item.name}
                  </h3>
                  <span className="text-xs text-blucy-muted">{item.category}</span>
                </div>
                <div className="text-right">
                  <span className="font-heading font-bold text-base text-blucy-blue block">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FRANCHISE CTA BANNER */}
      <section className="py-16 bg-gradient-to-b from-white to-blucy-ice">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blucy-pink via-[#e60b78] to-[#bd005e] rounded-3xl p-8 sm:p-14 text-white text-center shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider">
                Investment Packages ₹12 Lakh to ₹40 Lakh
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white">
                Let’s Create Sweeter Opportunities Together!
              </h2>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                Whether you want to launch a 3-wheel cycle cart in your neighborhood or establish a complete multi-format cluster (shop + food truck + kiosk + carts), Blucy offers scalable business configurations for every investor.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <Link to="/investment" className="btn-primary text-sm sm:text-base px-8 py-3.5 shadow-lg bg-blucy-navy hover:bg-[#05297a]">
                  Explore Investment Models
                </Link>
                <Link to="/contact" className="btn-outline-white text-sm sm:text-base px-8 py-3.5">
                  Contact Our Franchise Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
