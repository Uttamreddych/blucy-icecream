export interface GalleryItem {
  id: string;
  title: string;
  category: 'brand' | 'desserts' | 'interiors' | 'cycle-carts' | 'mini-carts' | 'food-trucks' | 'event-carts' | 'franchise';
  categoryLabel: string;
  image: string;
  description: string;
  aspect?: 'square' | 'wide' | 'tall';
}

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All Photos' },
  { id: 'brand', label: 'Brand & Logo' },
  { id: 'desserts', label: 'Ice Creams & Desserts' },
  { id: 'interiors', label: 'Café & Store Interiors' },
  { id: 'cycle-carts', label: 'Cycle Carts' },
  { id: 'mini-carts', label: 'Mini Carts' },
  { id: 'food-trucks', label: 'Food Trucks' },
  { id: 'event-carts', label: 'Event Carts' },
  { id: 'franchise', label: 'Investment & Franchise' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // Brand
  {
    id: 'g-logo',
    title: 'Official Café Blucy Brand Mark',
    category: 'brand',
    categoryLabel: 'Brand & Logo',
    image: '/images/brand/blucy_logo.png',
    description: 'The vibrant blue and pink 3D cloud logo featuring the soft-serve swirl cone and friendly smile.',
    aspect: 'wide',
  },
  {
    id: 'g-product-universe',
    title: 'Blucy Product Universe',
    category: 'brand',
    categoryLabel: 'Brand & Logo',
    image: '/images/brand/product_universe_poster.png',
    description: 'Comprehensive product ecosystem: ice creams, desserts, waffles, shakes, and cafe beverages.',
    aspect: 'tall',
  },
  {
    id: 'g-mission-poster',
    title: 'Brand Mission & Vision Architecture',
    category: 'brand',
    categoryLabel: 'Brand & Logo',
    image: '/images/brand/blucy_mission_poster.jpg',
    description: 'Premium Taste. Affordable Price. Available Everywhere.',
    aspect: 'tall',
  },

  // Desserts
  {
    id: 'g-waffle-hero',
    title: 'Warm Belgian Dessert Waffle Plate',
    category: 'desserts',
    categoryLabel: 'Ice Creams & Desserts',
    image: '/images/products/waffle_hero_plate.png',
    description: 'Freshly baked golden waffle loaded with vanilla gelato, chocolate fudge, and roasted nuts.',
    aspect: 'wide',
  },
  {
    id: 'g-waffles-menu',
    title: 'Signature Waffles Collection',
    category: 'desserts',
    categoryLabel: 'Ice Creams & Desserts',
    image: '/images/menus/waffles_poster.png',
    description: 'Banana Crunch, Oreo Crunch, Chocolate Fantasy, and Nutella & Nut Heaven.',
    aspect: 'tall',
  },
  {
    id: 'g-ice-cream-menu',
    title: 'Signature Scoops, Sundaes & Cones',
    category: 'desserts',
    categoryLabel: 'Ice Creams & Desserts',
    image: '/images/menus/ice_cream_menu_poster.png',
    description: 'Full ice cream menu featuring classic, premium, and exotic scoops alongside softy cones and kulfies.',
    aspect: 'tall',
  },
  {
    id: 'g-cafe-menu',
    title: 'Café Brews & Blended Frappes',
    category: 'desserts',
    categoryLabel: 'Ice Creams & Desserts',
    image: '/images/menus/cafe_menu_poster.png',
    description: 'Artisanal hot espresso coffees and ice-blended frosted frappes with decadent syrups.',
    aspect: 'tall',
  },
  {
    id: 'g-food-menu',
    title: 'Café Savory Menu & Quick Bites',
    category: 'desserts',
    categoryLabel: 'Ice Creams & Desserts',
    image: '/images/menus/food_menu_poster.png',
    description: 'Gourmet burgers, crinkle fries, grilled sandwiches, stone-baked pizzas, pasta, and momos.',
    aspect: 'tall',
  },

  // Interiors & Shops
  {
    id: 'g-shop-front',
    title: '250 Sq. Ft. Blucy Storefront',
    category: 'interiors',
    categoryLabel: 'Café & Store Interiors',
    image: '/images/franchise/shop_front.png',
    description: 'Welcoming store design with lighted signage, cloud awnings, and panoramic glass facade.',
    aspect: 'wide',
  },
  {
    id: 'g-shop-seating',
    title: 'Café Dine-in Seating Interior',
    category: 'interiors',
    categoryLabel: 'Café & Store Interiors',
    image: '/images/franchise/shop_interior_seating.png',
    description: 'Cheery checkered floor, cozy booths, and cheerful wall graphics for customer gatherings.',
    aspect: 'wide',
  },
  {
    id: 'g-shop-counter',
    title: 'Gelato Counter & Order Display',
    category: 'interiors',
    categoryLabel: 'Café & Store Interiors',
    image: '/images/franchise/shop_interior_counter.png',
    description: 'Illuminated product menu boards and gleaming curved glass scoop display freezer.',
    aspect: 'wide',
  },

  // Cycle Carts
  {
    id: 'g-cycle-cart-main',
    title: 'Blucy Cycle Cart in High-Footfall Park',
    category: 'cycle-carts',
    categoryLabel: 'Cycle Carts',
    image: '/images/franchise/cycle_cart_main.png',
    description: 'Low-investment mobile cart with blue-and-white striped awning and illuminated counter.',
    aspect: 'wide',
  },
  {
    id: 'g-cycle-poster',
    title: 'Cycle Cart Mobility & Specifications',
    category: 'cycle-carts',
    categoryLabel: 'Cycle Carts',
    image: '/images/franchise/cycle_carts_poster.png',
    description: 'Complete operational profile and design features of the Blucy cycle cart.',
    aspect: 'tall',
  },

  // Mini Carts
  {
    id: 'g-mini-cart-main',
    title: 'Blucy Mini Cart Unit',
    category: 'mini-carts',
    categoryLabel: 'Mini Carts',
    image: '/images/franchise/mini_cart_main.png',
    description: 'Compact wheeled footprint engineered for pedestrian corridors, malls, and event grounds.',
    aspect: 'wide',
  },
  {
    id: 'g-mini-cart-park',
    title: 'Mini Cart Serving at Public Park',
    category: 'mini-carts',
    categoryLabel: 'Mini Carts',
    image: '/images/franchise/mini_cart_park.png',
    description: 'Active mobile setup serving families in green recreational spaces.',
    aspect: 'wide',
  },
  {
    id: 'g-mini-cart-comm',
    title: 'Mini Cart at Community Gathering',
    category: 'mini-carts',
    categoryLabel: 'Mini Carts',
    image: '/images/franchise/mini_cart_community.png',
    description: 'High customer engagement at an evening neighborhood festival.',
    aspect: 'wide',
  },

  // Food Trucks
  {
    id: 'g-truck-main',
    title: 'Blucy Food Truck Fleet Service',
    category: 'food-trucks',
    categoryLabel: 'Food Trucks',
    image: '/images/franchise/food_truck_main.png',
    description: 'Commercial custom-fitted ice cream truck with awning lights and deep freezer stations.',
    aspect: 'wide',
  },
  {
    id: 'g-truck-side',
    title: 'Food Truck Side Service Window',
    category: 'food-trucks',
    categoryLabel: 'Food Trucks',
    image: '/images/franchise/food_truck_side.png',
    description: 'Ergonomic service hatch with integrated menu board and cone display holders.',
    aspect: 'wide',
  },
  {
    id: 'g-truck-interior',
    title: 'Food Truck Stainless Steel Interior',
    category: 'food-trucks',
    categoryLabel: 'Food Trucks',
    image: '/images/franchise/food_truck_interior.png',
    description: 'Commercial grade prep stations, storage freezers, and hygienic operations.',
    aspect: 'wide',
  },

  // Event Carts
  {
    id: 'g-event-main',
    title: 'Blucy Event Cart at Outdoor Gala',
    category: 'event-carts',
    categoryLabel: 'Event Carts',
    image: '/images/franchise/event_cart_main.png',
    description: 'Festive fairy-light dessert station for weddings, corporate galas, and celebrations.',
    aspect: 'wide',
  },
  {
    id: 'g-event-front',
    title: 'Event Cart Evening Display',
    category: 'event-carts',
    categoryLabel: 'Event Carts',
    image: '/images/franchise/event_cart_front.png',
    description: 'Welcoming front presentation with colorful scoops and cone dispensers.',
    aspect: 'wide',
  },

  // Investment & Franchise
  {
    id: 'g-investment-poster',
    title: 'Investment Package Models Overview',
    category: 'franchise',
    categoryLabel: 'Investment & Franchise',
    image: '/images/franchise/investment_models_poster.png',
    description: 'Complete breakdown across ₹40L, ₹30L, ₹24L, ₹20L, and ₹12L advertised models.',
    aspect: 'tall',
  },
  {
    id: 'g-return-poster',
    title: 'Investor Return Structure & 50:50 Sharing',
    category: 'franchise',
    categoryLabel: 'Investment & Franchise',
    image: '/images/franchise/investor_return_poster.png',
    description: 'Proposed 3-phase journey: Year 1 recovery, 50:50 profit sharing, and transition.',
    aspect: 'tall',
  },
  {
    id: 'g-business-infographic',
    title: 'Multi-Format Business Economics Infographic',
    category: 'franchise',
    categoryLabel: 'Investment & Franchise',
    image: '/images/franchise/business_infographic_poster.png',
    description: '12-month illustrative projections showing ₹1.44 Crore annual sales target across formats.',
    aspect: 'tall',
  },
];
