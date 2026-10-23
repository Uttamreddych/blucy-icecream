export interface PortfolioEntity {
  name: string;
  role: string;
  domain: string;
  description: string;
  tag: string;
}

export const FOUNDER_INFO = {
  name: 'Konduru Sharath',
  titles: ['Entrepreneur', 'Creative Professional', 'Business Leader'],
  promoterRole: 'Promoter — Blucy Café & Ice Creamery',
  bio: 'Konduru Sharath is a Hyderabad-based entrepreneur, creative professional and business leader with 10+ years of entrepreneurial and business experience, backed by 6+ years in the IT industry.',
  overview: 'He is the promoter behind Blucy – Café & Ice Creamery, a new consumer-focused brand offering ice creams, desserts, waffles, milkshakes, beverages and café products. Blucy builds on his existing experience in the food & beverage sector through CreamBerg Ice Cream, an established ice cream brand in Madhapur, Hyderabad.',
  experienceSummary: 'Sharath brings multi-disciplinary leadership across Food & Beverages, Franchising, Events, Corporate Gifting, Sports Development, Arts & Culture, and Media & Entertainment, giving Blucy a solid foundation for brand building, operational discipline, creative marketing and rapid expansion.',
  
  stats: [
    { label: 'Entrepreneurial & Business Experience', value: '10+ Years' },
    { label: 'IT Industry Experience', value: '6+ Years' },
    { label: 'Key Venture Role', value: 'Promoter' },
  ],

  qualifications: [
    'Postgraduate degree in MCA (Chennai)',
    '6+ years of corporate experience in the IT industry',
    'Experienced Film Director, Writer & Producer with strong capabilities in storytelling, branding, creative communication, marketing and audience engagement',
  ],

  vision: 'With his existing Food & Beverage experience and a diversified entrepreneurial background, Sharath is building Blucy – Café & Ice Creamery as a scalable, modern consumer brand. Blucy aims to combine great-tasting ice creams and desserts with an attractive café experience, supported by a scalable outlet and franchise model.',

  ambition: 'Blucy is not just building ice cream stores. We are building an accessible ice cream & dessert network. By offering premium taste at an affordable price, we are building a national dessert network.',

  portfolio: [
    {
      name: 'Manakosha Foods & Beverages Pvt. Ltd.',
      role: 'Managing Partner',
      domain: 'Food & Beverage Sector',
      description: 'Promoting CreamBerg Ice Cream in Madhapur, Hyderabad with end-to-end retail and cold chain operations.',
      tag: 'Food & Beverage',
    },
    {
      name: 'Franchise Buddy Pvt. Ltd.',
      role: 'Managing Director',
      domain: 'Franchise Development & Expansion',
      description: 'Spearheading franchise network expansion, business development, operational scaling, and investor facilitation.',
      tag: 'Franchising',
    },
    {
      name: 'Studio26 Pictures',
      role: 'Proprietor',
      domain: 'Film Production & Creative Media',
      description: 'Creative direction, visual storytelling, commercial media production, and high-impact brand communications.',
      tag: 'Creative Media',
    },
    {
      name: 'ViewMonks Pvt. Ltd.',
      role: 'Partner',
      domain: 'Corporate Gifting Solutions',
      description: 'Delivering end-to-end customized corporate gifting, merchandise, and institutional client servicing in Hyderabad.',
      tag: 'Corporate Solutions',
    },
    {
      name: 'CrickMonks',
      role: 'Founder',
      domain: 'Sports & Grassroots Development',
      description: 'Fostering cricket development, youth coaching, sports tournament management, and athletic training initiatives.',
      tag: 'Sports',
    },
    {
      name: 'AmalaSarath Arts Academy',
      role: 'Founder / Promoter',
      domain: 'Arts & Cultural Heritage',
      description: 'Preserving traditional Indian performing arts through Kuchipudi dance and Carnatic music training.',
      tag: 'Culture & Arts',
    },
    {
      name: 'Virinchi Events',
      role: 'Promoter',
      domain: 'Event Management',
      description: 'Corporate conferences, milestone celebrations, promotional brand activations, and large-scale experiential events.',
      tag: 'Events',
    },
  ] as PortfolioEntity[],

  images: {
    portrait: '/images/founder/konduru_sharath.jpg',
    withCart: '/images/founder/sharath_with_cart.jpg',
    poster: '/images/founder/founder_spotlight_poster.jpg',
  }
};
