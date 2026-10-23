export interface MenuItem {
  name: string;
  price?: number;
  singlePrice?: number;
  doublePrice?: number;
  smallPrice?: number;
  regularPrice?: number;
  description?: string;
  badge?: string;
  isSpecial?: boolean;
}

export interface MenuSection {
  id: string;
  title: string;
  category: 'beverages' | 'ice-creams' | 'desserts' | 'food';
  tagline: string;
  items: MenuItem[];
  note?: string;
  posterImage?: string;
}

export const CAFE_MENU_DATA: MenuSection[] = [
  {
    id: 'hot-coffee',
    title: 'Hot Coffee Brew',
    category: 'beverages',
    tagline: 'Rich Aroma. Great Mood.',
    posterImage: '/images/menus/cafe_menu_poster.png',
    items: [
      { name: 'Classic Espresso', price: 89, description: 'Bold single shot of dark roast Arabica beans' },
      { name: 'Cafe Latte', price: 149, description: 'Silky espresso combined with velvety steamed milk' },
      { name: 'Cappuccino', price: 159, description: 'Equal parts espresso, hot milk, and deep rich foam' },
      { name: 'Long Black', price: 139, description: 'Hot water topped with a double espresso shot' },
      { name: 'Flat White', price: 159, description: 'Double shot with velvety microfoam' },
      { name: 'Spanish Latte', price: 169, description: 'Sweet condensed milk with bold espresso & warm milk' },
      { name: 'Moccacino Craffeine', price: 169, description: 'Espresso with rich melted chocolate and steamed milk' },
    ],
    note: 'Brewed with 100% premium coffee beans.',
  },
  {
    id: 'frosted-coffee',
    title: 'Frosted Coffee (Frappes)',
    category: 'beverages',
    tagline: 'Cool Sips. Bigger Smiles.',
    posterImage: '/images/menus/cafe_menu_poster.png',
    items: [
      { name: 'Caramel Blizzard Frappe', price: 169, description: 'Rich blended coffee, caramel drizzle and whipped cream' },
      { name: 'Chocolate Avalanche', price: 179, description: 'Deep chocolate blended frappe with dark chocolate shavings' },
      { name: 'Hazelnut Glacier Frappe', price: 179, description: 'Roasted hazelnut infusion with ice-cold blended brew' },
      { name: 'Java Chip Thunder Frappe', price: 189, description: 'Crunchy chocolate chips blended into mocha slush' },
      { name: 'Vanilla Bean Frappe', price: 169, description: 'Real vanilla bean extract with cold whipped coffee' },
    ],
  },
  {
    id: 'classic-ice-creams',
    title: 'Classic Ice Creams',
    category: 'ice-creams',
    tagline: 'Happiness in Every Scoop.',
    posterImage: '/images/menus/ice_cream_menu_poster.png',
    items: [
      { name: 'Vanilla', singlePrice: 55, doublePrice: 69 },
      { name: 'Strawberry', singlePrice: 55, doublePrice: 69 },
      { name: 'Butterscotch', singlePrice: 65, doublePrice: 79 },
      { name: 'Mango', singlePrice: 69, doublePrice: 89 },
      { name: 'Tutti Frutti', singlePrice: 69, doublePrice: 89 },
    ],
  },
  {
    id: 'premium-ice-creams',
    title: 'Premium Ice Creams',
    category: 'ice-creams',
    tagline: 'Rich Flavours & Premium Ingredients.',
    posterImage: '/images/menus/ice_cream_menu_poster.png',
    items: [
      { name: 'Paan', singlePrice: 99, doublePrice: 129, badge: 'Signature' },
      { name: 'Roasted Almond', singlePrice: 89, doublePrice: 119 },
      { name: 'Chocolate Chips', singlePrice: 89, doublePrice: 119 },
      { name: 'Black Current', singlePrice: 89, doublePrice: 119 },
      { name: 'Malai Kulfi', singlePrice: 99, doublePrice: 129 },
      { name: 'Rajbhog', singlePrice: 99, doublePrice: 129 },
      { name: 'Cookies & Cream', singlePrice: 99, doublePrice: 129 },
      { name: 'Kaju Kishmish', singlePrice: 89, doublePrice: 119 },
      { name: 'American Nuts', singlePrice: 89, doublePrice: 119 },
      { name: 'Kashmiri Gulkand', singlePrice: 89, doublePrice: 119 },
    ],
  },
  {
    id: 'exotic-ice-creams',
    title: 'Exotic Ice Creams',
    category: 'ice-creams',
    tagline: 'Unforgettable Indulgences.',
    posterImage: '/images/menus/ice_cream_menu_poster.png',
    items: [
      { name: 'Wild Blueberry', singlePrice: 109, doublePrice: 139, badge: 'Exotic' },
      { name: 'Anjeer', singlePrice: 109, doublePrice: 139 },
      { name: 'Kesar Pista', singlePrice: 109, doublePrice: 139 },
      { name: 'Alphonso Coconut', singlePrice: 109, doublePrice: 139 },
      { name: 'Chocolate Brownies', singlePrice: 109, doublePrice: 139, badge: 'Choco Delight' },
    ],
  },
  {
    id: 'softy-cones',
    title: 'Softy Cones',
    category: 'desserts',
    tagline: 'Freshly Swirled & Dipped.',
    posterImage: '/images/menus/ice_cream_menu_poster.png',
    items: [
      { name: 'Vanilla Softy', price: 49 },
      { name: 'Strawberry Softy', price: 59 },
      { name: 'Chocolate Softy', price: 59 },
      { name: 'Twin Flavour Softy', price: 69, badge: 'Combo' },
      { name: 'Choco Dip Cone', price: 79, badge: 'Popular' },
      { name: 'Nutty Choco Dip', price: 89, badge: 'Loaded' },
    ],
  },
  {
    id: 'kulfies',
    title: 'Traditional Kulfies',
    category: 'desserts',
    tagline: 'Authentic Indian Slow-Cooked Milk Sticks.',
    posterImage: '/images/menus/ice_cream_menu_poster.png',
    items: [
      { name: 'Malai Kulfi', price: 69 },
      { name: 'Kesar Pista Kulfi', price: 79 },
      { name: 'Rajbhog Kulfi', price: 79 },
      { name: 'Badam Kulfi', price: 79 },
      { name: 'Choco Kulfi', price: 79 },
    ],
  },
  {
    id: 'popsicals',
    title: 'Popsicals',
    category: 'desserts',
    tagline: 'Icy Cool Natural Refreshment.',
    posterImage: '/images/menus/ice_cream_menu_poster.png',
    items: [
      { name: 'Mango Popsicle', price: 49 },
      { name: 'Orange Popsicle', price: 49 },
      { name: 'Strawberry Popsicle', price: 49 },
      { name: 'Watermelon Popsicle', price: 49 },
      { name: 'Real Fruit Mix Popsicle', price: 59, badge: 'Real Fruit' },
    ],
  },
  {
    id: 'sundaes',
    title: 'Signature Sundaes',
    category: 'desserts',
    tagline: 'Decadent Multi-Flavour Masterpieces.',
    posterImage: '/images/menus/ice_cream_menu_poster.png',
    items: [
      { name: 'California', price: 259, description: 'Exotic fruit medley, almond slivers and sweet berry coulis' },
      { name: 'Indian Tradition', price: 299, description: 'Royal paan & kulfi scoops topped with rabri & gulkand' },
      { name: 'Italian Berry', price: 249, description: 'Wild berry gelato, strawberry sauce and dark choco curls' },
      { name: 'Honeyman Signature', price: 369, description: 'Grand signature 4-scoop feast with waffles and caramel' },
      { name: 'Swiss Chocolate', price: 329, description: 'Warm fudge brownie topped with dark cocoa gelato' },
    ],
  },
  {
    id: 'waffles',
    title: 'Waffles',
    category: 'desserts',
    tagline: 'Waffles Make Life Sweeter.',
    posterImage: '/images/menus/waffles_poster.png',
    items: [
      { name: 'Banana Crunch', price: 149, description: 'Sliced fresh banana, chocolate sauce and toasted nuts' },
      { name: 'Oreo Crunch', price: 179, description: 'Oreo cookies, dark chocolate sauce and rich whipped cream' },
      { name: 'Chocolate Fantasy', price: 179, description: 'Triple chocolate sauce, choco fudge scoop and chips' },
      { name: 'Nutella & Nut Heaven', price: 199, description: 'Creamy Nutella spread and crunchy roasted hazelnuts' },
    ],
  },
  {
    id: 'burgers',
    title: 'Burgers',
    category: 'food',
    tagline: 'Hot, Crispy & Delicious.',
    posterImage: '/images/menus/food_menu_poster.png',
    items: [
      { name: 'HM Classic', price: 65, description: 'Crispy aloo tikki patty with fresh onion, tomato and creamy sauce' },
      { name: 'Veg Delight', price: 99, description: 'Double patty, with cheese, onions, crisp lettuce, spicy jalapeños and a rich blend of sauces' },
      { name: 'Cheesy Buzzzz', price: 119, description: 'Veg patty with onions, lettuce, jalapeños and smooth cheese sauce' },
      { name: 'Chilli Sting', price: 129, description: 'Hearty veg patty with onions, crisp lettuce, spicy jalapeños and bold spicy sauce' },
      { name: 'Mushroom Supreme', price: 149, description: 'Tasty veggie patty with onions, crisp lettuce and sweet-tangy honey mustard sauce' },
      { name: 'Tandoori Paneer', price: 189, description: 'Paneer patty with fresh onions, lettuce, tomato and smoky tandoori sauce' },
    ],
  },
  {
    id: 'fries',
    title: 'Crinkle Fries',
    category: 'food',
    tagline: 'Crispy Golden Bites.',
    posterImage: '/images/menus/food_menu_poster.png',
    items: [
      { name: 'Salted Crinkles', smallPrice: 69, regularPrice: 89 },
      { name: 'Peri Peri Crinkles', smallPrice: 79, regularPrice: 99 },
      { name: 'Cheesy Crinkles', smallPrice: 109, regularPrice: 139 },
      { name: 'HM Cheesy Crinkles', smallPrice: 119, regularPrice: 149 },
    ],
  },
  {
    id: 'sandwiches',
    title: 'Grilled Sandwiches',
    category: 'food',
    tagline: 'Toasted to Golden Perfection.',
    posterImage: '/images/menus/food_menu_poster.png',
    items: [
      { name: 'Veg Cheese Sandwich', price: 129 },
      { name: 'Exotic Veggie Sandwich', price: 149 },
      { name: 'Chilli Cheese Sandwich', price: 149 },
      { name: 'Paneer Tikka Sandwich', price: 179 },
    ],
  },
  {
    id: 'quick-bites',
    title: 'Quick Bites',
    category: 'food',
    tagline: 'Snack Attack.',
    posterImage: '/images/menus/food_menu_poster.png',
    items: [
      { name: 'Pizza Pocket (3 Pcs)', price: 115 },
      { name: 'Onion Rings (5 Pcs)', price: 139 },
      { name: 'Cheesy Corn Nuggets (5 Pcs)', price: 139 },
    ],
  },
  {
    id: 'ice-cream-shakes',
    title: 'Ice Cream Shakes',
    category: 'beverages',
    tagline: 'Cool Sips. Day & Night.',
    posterImage: '/images/menus/food_menu_poster.png',
    items: [
      { name: 'Vanilla Shake', price: 169 },
      { name: 'Strawberry Shake', price: 169 },
      { name: 'Butterscotch Shake', price: 169 },
      { name: 'Kesar Pista Shake', price: 199 },
      { name: 'Choco Oreo Shake', price: 199 },
      { name: 'Black Forest Shake', price: 199 },
    ],
  },
  {
    id: 'pizzas',
    title: 'Pizzas',
    category: 'food',
    tagline: 'Stone-Baked & Loaded with Cheese.',
    posterImage: '/images/menus/food_menu_poster.png',
    items: [
      { name: 'Classic Margherita', price: 169 },
      { name: 'Corn & Cheese', price: 179 },
      { name: 'Veggie Hive', price: 199 },
      { name: 'Paneer Punch', price: 219 },
      { name: 'Garden Fiesta', price: 219 },
      { name: 'Cheese Avalanche', price: 299 },
    ],
  },
  {
    id: 'pasta-momos',
    title: 'Pasta & Momos',
    category: 'food',
    tagline: 'Italian & Asian Treats.',
    posterImage: '/images/menus/food_menu_poster.png',
    items: [
      { name: 'White Cheese Pasta', price: 199 },
      { name: 'Red Sauce Pasta with Veggies', price: 219 },
      { name: 'Veggie Fried Momos', price: 99 },
      { name: 'Paneer Fried Momos', price: 129 },
      { name: 'Veg Kurkure Momos', price: 129 },
    ],
  },
  {
    id: 'khawa-tea',
    title: 'Traditional Khawa',
    category: 'beverages',
    tagline: 'Special Promo: Get Any At Only ₹49!',
    posterImage: '/images/menus/food_menu_poster.png',
    items: [
      { name: 'Kashmiri Khawa', price: 49, regularPrice: 99, isSpecial: true },
      { name: 'Kesar Khawa', price: 49, regularPrice: 99, isSpecial: true },
      { name: 'Ginger Khawa', price: 49, regularPrice: 99, isSpecial: true },
      { name: 'Badam Khawa', price: 49, regularPrice: 99, isSpecial: true },
      { name: 'Gulab Khawa', price: 49, regularPrice: 99, isSpecial: true },
    ],
    note: 'Special promotional pricing: ₹49 across all Khawa varieties (Regular price ₹99).',
  },
  {
    id: 'mocktails',
    title: 'Mocktails & Coolers',
    category: 'beverages',
    tagline: 'Chilled & Refreshing.',
    posterImage: '/images/menus/food_menu_poster.png',
    items: [
      { name: 'Lemon Iced Tea', price: 99 },
      { name: 'Peach Iced Tea', price: 99 },
      { name: 'Mint Mojito', price: 129 },
      { name: 'Watermelon Cooler', price: 129 },
      { name: 'Blue Lagoon', price: 129 },
      { name: 'Masala Lemonade', price: 139 },
    ],
  },
];
