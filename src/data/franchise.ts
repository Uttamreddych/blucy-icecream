export interface BusinessFormat {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  badge: string;
  description: string;
  targetFootfall?: string;
  investmentStarting?: string;
  annualSalesTarget?: string;
  monthlySalesTarget?: string;
  spaceRequired: string;
  mainImage: string;
  secondaryImages: { url: string; caption: string }[];
  keyFeatures: string[];
  productsServed: string[];
  bestSuitedFor: string[];
}

export const BUSINESS_FORMATS: BusinessFormat[] = [
  {
    id: 'format-shops',
    slug: 'shops',
    title: 'Blucy Café & Ice Cream Shops',
    subtitle: 'A Sweeter Place for Happier People',
    tagline: 'Attractive store design, dine-in comfort, and full product spectrum.',
    badge: 'Flagship Format',
    description: 'A 250 sq. ft. brick-and-mortar dessert café format designed to deliver a high-energy, cheerful retail experience. Featuring eye-catching brand interiors, illuminated menu canopies, customer seating, and a comprehensive product display covering ice creams, waffles, sundaes, espresso coffee, and gourmet snacks.',
    spaceRequired: '250 Sq. Ft. (approx.)',
    annualSalesTarget: '₹54 Lakh (Advertised under ₹40L Model)',
    monthlySalesTarget: '₹4.5 Lakh / month',
    mainImage: '/images/franchise/shop_front.png',
    secondaryImages: [
      { url: '/images/franchise/shop_interior_seating.png', caption: 'Cozy Dine-in Seating Area' },
      { url: '/images/franchise/shop_interior_counter.png', caption: 'Live Gelato & Dessert Service Counter' },
      { url: '/images/franchise/franchise_shops_poster.png', caption: 'Full Shop Format Architecture' },
    ],
    keyFeatures: [
      'Attractive blue-and-pink cloud store design with high visual pull',
      'Accommodates customer seating and vibrant ambient lighting',
      'Equipped for hot beverages, cold frappes, waffles, snacks & scoops',
      'Strong local destination brand loyalty and repeat footfalls',
    ],
    productsServed: [
      'Scooped Ice Creams',
      'Fresh Waffles & Sundaes',
      'Espresso & Café Beverages',
      'Burgers & Crinkle Fries',
      'Pizzas, Pasta & Momos',
      'Softy Cones & Kulfies',
    ],
    bestSuitedFor: [
      'High-street commercial retail markets',
      'Prominent mall food courts and concourses',
      'Dense residential hubs and family recreation zones',
      'IT corridors and college campus vicinities',
    ],
  },
  {
    id: 'format-food-truck',
    slug: 'food-trucks',
    title: 'Blucy Food Trucks',
    subtitle: 'Mobile & Flexible. Happiness on Wheels.',
    tagline: 'High-visibility branded mobile service unit with extensive reach.',
    badge: 'High Reach',
    description: 'A custom-built, fully branded commercial ice cream truck engineered for swift deployment across cities, food truck parks, weekend festivals, and high-footfall transit points. Combines illuminated menu boards, awning displays, deep freezer storage, and multi-product counters.',
    spaceRequired: 'Standard Vehicle Parking Footprint',
    annualSalesTarget: '₹30 Lakh (Advertised under ₹40L Model)',
    monthlySalesTarget: '₹2.5 Lakh / month',
    mainImage: '/images/franchise/food_truck_main.png',
    secondaryImages: [
      { url: '/images/franchise/food_truck_side.png', caption: 'Side Service Profile View' },
      { url: '/images/franchise/food_truck_front.png', caption: 'Front Cabin & Roof Awning' },
      { url: '/images/franchise/food_truck_rear.png', caption: 'Rear Brand Billboard' },
      { url: '/images/franchise/food_truck_interior.png', caption: 'Professional Stainless Counter & Storage' },
    ],
    keyFeatures: [
      'Relocatable to match day-part footfall and peak demand zones',
      'Complete onboard power and refrigeration setup',
      'Doubles as an impactful moving brand billboard',
      'Generates high revenue during evening and weekend peaks',
    ],
    productsServed: [
      'Scooped Ice Creams',
      'Softy Cones',
      'Real Fruit Popsicles',
      'Traditional Kulfies',
      'Chilled Beverages',
    ],
    bestSuitedFor: [
      'Food truck avenues and night markets',
      'Public parks, lakes, and seafront boulevards',
      'College fests, sports events, and carnivals',
      'High-traffic junctions during evening hours',
    ],
  },
  {
    id: 'format-cycle-carts',
    slug: 'cycle-carts',
    title: 'Blucy Cycle Carts',
    subtitle: 'Low Investment. High Mobility. Maximum Reach.',
    tagline: 'Start Small. Move Smart. Grow with Blucy.',
    badge: 'Most Accessible',
    description: 'Blucy Cycle Carts are designed as a flexible, low-investment retail format that brings quality ice cream directly to customers. Their compact footprint, mobility, striped canopy, and strong visual branding make them ideal for residential neighbourhoods, parks, schools, colleges, marketplaces, and community events.',
    spaceRequired: 'Compact 3-wheel footprint',
    annualSalesTarget: '₹24 Lakh (Combined for 2 units under ₹40L Model)',
    monthlySalesTarget: '₹1.0 Lakh / unit / month',
    mainImage: '/images/franchise/cycle_cart_main.png',
    secondaryImages: [
      { url: '/images/franchise/cycle_cart_side.png', caption: 'Side View with Branded Canopy' },
      { url: '/images/franchise/cycle_cart_close.png', caption: 'Display Counter & Cone Holders' },
      { url: '/images/franchise/cycle_cart_back.png', caption: 'Pedal-Assisted Rear Profile' },
    ],
    keyFeatures: [
      'Extremely low capital barrier to entry for micro-entrepreneurs',
      'Move effortlessly closer to changing customer crowds throughout the day',
      'Eye-catching blue and white canopy with warm ambient lighting',
      'Fast deployment with zero real-estate civil construction time',
    ],
    productsServed: [
      'Classic & Premium Ice Creams',
      'Popsicles & Ice Candies',
      'Traditional Stick Kulfies',
      'Softy Cones',
    ],
    bestSuitedFor: [
      'Gated residential communities and townships',
      'Children’s parks and morning walking tracks',
      'School and tuition centre exits',
      'Local neighborhood markets and temple zones',
    ],
  },
  {
    id: 'format-mini-carts',
    slug: 'mini-carts',
    title: 'Blucy Mini Carts',
    subtitle: 'Small Footprint. Big Smiles.',
    tagline: 'Compact. Stylish. Profitable.',
    badge: 'Flexible Retail',
    description: 'Blucy Mini Carts offer the perfect balance of mobility, affordability, and brand impact. Engineered for high-traffic pedestrian zones, plazas, and commercial premises, these compact carts deliver delicious ice creams right where crowds gather.',
    spaceRequired: '30 - 50 Sq. Ft.',
    annualSalesTarget: 'Targeted High ROI',
    monthlySalesTarget: 'Optimized for high margins',
    mainImage: '/images/franchise/mini_cart_main.png',
    secondaryImages: [
      { url: '/images/franchise/mini_cart_park.png', caption: 'Parks & Recreational Spots Placement' },
      { url: '/images/franchise/mini_cart_community.png', caption: 'Events & Community Gatherings Setup' },
    ],
    keyFeatures: [
      'Wheeled mobility with locking casters for quick relocation',
      'Heavy-duty insulated storage maintaining scoop consistency',
      'Branded sneeze-guard display and integrated cone dispensers',
      'Ideal companion addition to existing retail shops or kiosks',
    ],
    productsServed: [
      'Assorted Scoop Ice Creams',
      'Softy Cones',
      'Fruit Popsicles',
      'Milk Kulfies',
    ],
    bestSuitedFor: [
      'Commercial office lobbies and IT cafeteria perimeters',
      'Recreation parks and jogging promenades',
      'Transit hubs, bus terminals, and railway station plazas',
      'Front-of-store curb spaces outside busy restaurants',
    ],
  },
  {
    id: 'format-event-carts',
    slug: 'event-carts',
    title: 'Blucy Event Carts',
    subtitle: 'Make Every Event Sweeter.',
    tagline: 'Premium, engaging dessert stations for celebrations & gatherings.',
    badge: 'Event Ready',
    description: 'Designed specifically for catering at weddings, corporate galas, exhibitions, birthday parties, college fests, and cultural celebrations. The Blucy Event Cart creates a cheerful, Instagram-worthy live dessert station with uniform branding and professional presentation.',
    spaceRequired: 'Modular Event Space (40 - 60 Sq. Ft.)',
    annualSalesTarget: '₹18 Lakh (Advertised under ₹40L Model)',
    monthlySalesTarget: '₹1.5 Lakh / month',
    mainImage: '/images/franchise/event_cart_main.png',
    secondaryImages: [
      { url: '/images/franchise/event_cart_front.png', caption: 'Warmly Lit Wedding & Party Front View' },
      { url: '/images/franchise/event_cart_side.png', caption: 'Compact Mobile Side Setup' },
      { url: '/images/franchise/event_carts_poster.png', caption: 'Full Event Format Showcase' },
    ],
    keyFeatures: [
      'Fast, hassle-free indoor and outdoor venue setup',
      'High crowd-handling capacity with live scoop & dip counter',
      'Creates premium brand presence at prestigious celebrations',
      'Generates lucrative bulk-order revenue per event booking',
    ],
    productsServed: [
      'Live Waffle Crisps & Toppings',
      'Gourmet Scoop Sundaes',
      'Traditional Royal Kulfies',
      'Specialty Cones & Dips',
    ],
    bestSuitedFor: [
      'Weddings and reception banquets',
      'Corporate annual gatherings and conferences',
      'Trade exhibitions and lifestyle expos',
      'Birthday parties and festive society carnivals',
    ],
  },
  {
    id: 'format-mini-kiosks',
    slug: 'mini-kiosks',
    title: 'Blucy Mini Kiosks',
    subtitle: 'Compact Footprint. Maximum Brand Impact.',
    tagline: 'Fixed high-visibility retail units for malls and premium plazas.',
    badge: 'Semi-Permanent Retail',
    description: 'A semi-permanent, 80–120 sq. ft. prefabricated kiosk unit engineered for enclosed retail environments. Offers 360-degree branding, lighted signage, complete refrigeration, POS billing terminal, and display merchandising in a compact space.',
    spaceRequired: '80 - 120 Sq. Ft.',
    annualSalesTarget: '₹18 Lakh (Advertised under ₹40L Model)',
    monthlySalesTarget: '₹1.5 Lakh / month',
    mainImage: '/images/franchise/kiosk_main.png',
    secondaryImages: [
      { url: '/images/franchise/investment_models_poster.png', caption: 'Kiosk Format Showcase' },
      { url: '/images/franchise/business_infographic_poster.png', caption: 'Kiosk Sales Projections' },
    ],
    keyFeatures: [
      'Low lease area requirements with maximum pedestrian visibility',
      'Turnkey modular design ready for rapid installation',
      'Plug-and-play refrigeration and POS infrastructure',
      'Consistent daily footfall capture in captive retail environments',
    ],
    productsServed: [
      'Scooped Ice Creams & Cones',
      'Softy Cones & Dips',
      'Milkshakes & Frappes',
      'Popsicles & Kulfies',
    ],
    bestSuitedFor: [
      'Shopping mall atrium walkways and cinema corridors',
      'Airport departure lounges and metro transit concourses',
      'Supermarket entrances and hypermarket galleries',
      'Theme parks and tourist visitor plazas',
    ],
  },
  {
    id: 'format-franchise-network',
    slug: 'franchise-network',
    title: 'Blucy Franchise Network',
    subtitle: 'Scale Together Across India',
    tagline: 'Multi-format synergy under one powerful consumer brand.',
    badge: 'Synergy Model',
    description: 'The overarching Blucy franchise philosophy brings multiple retail formats together into a synergistic cluster. A franchise partner can combine a central shop with satellite cycle carts, a food truck, and event carts to dominate their city or territory with minimal overhead and maximum brand visibility.',
    spaceRequired: 'Customized based on cluster model',
    annualSalesTarget: 'Up to ₹1.44 Crore (Complete Multi-Format Setup)',
    monthlySalesTarget: 'Scalable across channels',
    mainImage: '/images/franchise/growth_model_poster.png',
    secondaryImages: [
      { url: '/images/franchise/business_infographic_poster.png', caption: 'Cluster Revenue Mechanics' },
      { url: '/images/franchise/investor_return_poster.png', caption: 'Shared Prosperity Blueprint' },
    ],
    keyFeatures: [
      'Cluster logistics: central shop acts as inventory hub for satellite mobile carts',
      'Multiple revenue channels capturing morning, afternoon, evening, and event footfall',
      'Single territory exclusivity options under master or multi-unit arrangements',
      'Comprehensive founder-led operational guidance and brand collateral support',
    ],
    productsServed: [
      'Full Blucy Product Universe',
    ],
    bestSuitedFor: [
      'Multi-unit franchise investors',
      'Regional master franchise operators',
      'F&B hospitality groups looking for dessert expansion',
    ],
  },
];
