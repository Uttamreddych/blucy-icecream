import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { SectionHeading } from '../components/SectionHeading';
import {
  Compass,
  Target,
  Sparkles,
  ShieldCheck,
  Truck,
  Store,
  Bike,
  Layers,
  ArrowRight
} from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    {
      title: 'Accessibility',
      desc: 'Bringing great-tasting ice creams, desserts, and café beverages directly to customer doorsteps through flexible retail formats — from neighborhood cycle carts to prime high-street shops.',
      icon: <Compass className="w-6 h-6 text-blucy-blue" />,
      accent: 'border-blucy-blue/30 bg-blucy-ice/40',
    },
    {
      title: 'Affordability',
      desc: 'Ensuring that premium dairy treats and joyful dessert experiences remain budget-friendly, making happiness accessible to families, students, and everyday consumers without premium price friction.',
      icon: <Sparkles className="w-6 h-6 text-blucy-pink" />,
      accent: 'border-blucy-pink/30 bg-blucy-softpink/40',
    },
    {
      title: 'Product Quality',
      desc: 'Commitment to authentic dairy recipes, pure fruit infusions, warm baked Belgian waffles, and artisanal coffee brews prepared under strict hygiene and standardized SOPs.',
      icon: <ShieldCheck className="w-6 h-6 text-blucy-sky" />,
      accent: 'border-blucy-sky/30 bg-blucy-ice/60',
    },
  ];

  const strategyFormats = [
    { name: 'Cycle Carts', tag: 'Micro-Mobility', icon: <Bike className="w-5 h-5 text-blucy-blue" /> },
    { name: 'Mini Carts', tag: 'Flexible Plazas', icon: <Layers className="w-5 h-5 text-blucy-pink" /> },
    { name: 'Food Trucks', tag: 'City-Wide Reach', icon: <Truck className="w-5 h-5 text-blucy-sky" /> },
    { name: 'Café Shops (250 Sq. Ft.)', tag: 'Dine-In Destinations', icon: <Store className="w-5 h-5 text-blucy-navy" /> },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'About Us' }]} />

        {/* Hero Editorial Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blucy-softpink text-xs font-bold text-blucy-pink uppercase tracking-wider mb-4">
            Our Brand Story
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-blucy-navy leading-tight">
            Crafting Happiness in <span className="text-gradient-pink">Every Scoop</span>
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-blucy-muted font-normal leading-relaxed">
            Blucy Ice Creamery was conceived with a simple, powerful conviction: premium-quality ice creams, waffles, and café desserts should not be a rare luxury, but a joyful, everyday experience within everyone’s reach.
          </p>
        </div>

        {/* Split Editorial Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-3xl font-heading font-bold text-blucy-navy">
              The Blucy Journey & Philosophy
            </h2>
            <p className="text-base text-blucy-text leading-relaxed">
              Blucy is an Indian dessert and café brand born to make quality ice creams and café treats accessible through a network of flexible, low-investment retail formats.
            </p>
            <p className="text-base text-blucy-text leading-relaxed">
              Traditional ice cream parlours often face heavy commercial lease costs and restrictive fixed locations. Blucy breaks away from this convention by combining a flagship café experience with agile mobile distribution channels — including cycle pushcarts, mini carts, food trucks, event stations, and mall kiosks.
            </p>
            <p className="text-base text-blucy-text leading-relaxed">
              This hybrid model enables Blucy to enter diverse markets with tailored capital requirements, bringing fresh scoops, warm Belgian waffles, and iced coffees directly to where customer celebrations and conversations happen.
            </p>

            <div className="pt-3">
              <Link to="/founder" className="text-sm font-semibold text-blucy-blue hover:text-blucy-pink flex items-center gap-1.5 transition-colors">
                <span>Learn about our Founder & Promoter Konduru Sharath</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="blucy-card rounded-3xl overflow-hidden shadow-card-hover border-4 border-white">
                <img
                  src="/images/franchise/shop_front.png"
                  alt="Blucy Storefront and Interiors"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-44 sm:w-56 blucy-card rounded-2xl overflow-hidden shadow-2xl border-2 border-white hidden sm:block">
                <img
                  src="/images/products/waffle_hero_plate.png"
                  alt="Blucy Warm Waffle"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Mission Box */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-blucy-ice via-white to-white border-2 border-blucy-blue/20 shadow-brand relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-blucy-blue text-white flex items-center justify-center mb-5 shadow-md">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-blucy-blue">
              Our Guiding Purpose
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-blucy-navy mt-2 mb-4">
              Our Mission
            </h3>
            <blockquote className="text-lg font-heading font-semibold text-blucy-pink italic border-l-4 border-blucy-pink pl-4 mb-4">
              “Premium Taste. Affordable Price. Available Everywhere.”
            </blockquote>
            <p className="text-sm text-blucy-muted leading-relaxed">
              Blucy’s mission is to make premium-quality ice creams and desserts accessible to everyone at affordable prices. We build a flexible, low-investment distribution network to offer better products at accessible prices, increase customer reach, and create multiple revenue channels for our partners.
            </p>
          </div>

          {/* Vision Box */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-blucy-softpink via-white to-white border-2 border-blucy-pink/20 shadow-brand relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-blucy-pink text-white flex items-center justify-center mb-5 shadow-brand-pink">
              <Compass className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-blucy-pink">
              Our Ambition
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-blucy-navy mt-2 mb-4">
              Our Vision
            </h3>
            <blockquote className="text-lg font-heading font-semibold text-blucy-navy italic border-l-4 border-blucy-navy pl-4 mb-4">
              “To build one of India’s most accessible and scalable ice cream & dessert brands.”
            </blockquote>
            <p className="text-sm text-blucy-muted leading-relaxed">
              Blucy is not just building isolated ice cream shops. We are engineering a nationwide dessert network that connects mobile reach with high-street café presence, combining great-tasting products with an attractive outlet franchise model.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <SectionHeading
            badge="Brand Fundamentals"
            badgeColor="pink"
            title="Our Core"
            highlight="Values"
            subtitle="Three non-negotiable principles that shape every recipe, customer interaction, and franchise partnership."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-3xl border ${val.accent} shadow-brand hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5">
                    {val.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-blucy-navy mb-3">
                    {val.title}
                  </h3>
                  <p className="text-sm text-blucy-muted leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Multi-Format Business Strategy */}
        <div className="p-8 sm:p-12 rounded-3xl bg-blucy-ice/60 border border-blucy-sky/30 mb-16">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-blucy-blue">
              Strategic Expansion
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-blucy-navy mt-2">
              The Multi-Format Business Strategy
            </h2>
            <p className="text-sm text-blucy-muted mt-2">
              Each format in the Blucy ecosystem serves a distinctive role in the customer journey while optimizing capital efficiency.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {strategyFormats.map((item, idx) => (
              <div key={idx} className="p-4 bg-white rounded-2xl border border-blucy-blue/15 text-center shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blucy-ice mx-auto flex items-center justify-center mb-2">
                  {item.icon}
                </div>
                <h4 className="font-heading font-bold text-blucy-navy text-sm">{item.name}</h4>
                <span className="text-[11px] text-blucy-pink font-semibold">{item.tag}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link to="/business-formats" className="btn-primary text-sm px-6 py-2.5">
              Explore All Formats & Spatial Layouts
            </Link>
          </div>
        </div>

        {/* Real Brand Visual Showcase Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="rounded-2xl overflow-hidden aspect-video bg-blucy-ice shadow-sm">
            <img src="/images/franchise/cycle_cart_main.png" alt="Blucy Cycle Cart" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-video bg-blucy-ice shadow-sm">
            <img src="/images/franchise/food_truck_main.png" alt="Blucy Food Truck" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-video bg-blucy-ice shadow-sm">
            <img src="/images/franchise/event_cart_main.png" alt="Blucy Event Cart" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-video bg-blucy-ice shadow-sm">
            <img src="/images/franchise/mini_cart_main.png" alt="Blucy Mini Cart" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};
