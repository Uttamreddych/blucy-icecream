export interface InvestmentBreakdownItem {
  format: string;
  count: string;
  cost: string;
  notes?: string;
}

export interface InvestmentOption {
  optionName: string;
  items: InvestmentBreakdownItem[];
  totalInvestment: string;
  idealFor: string;
}

export interface InvestmentPackage {
  id: string;
  title: string;
  tagline: string;
  totalCost: string;
  badge?: string;
  isFlagship?: boolean;
  hasOptions: boolean;
  options?: InvestmentOption[];
  singleBreakdown?: InvestmentBreakdownItem[];
  projectedAnnualSales?: string;
  projectedMonthlySales?: string;
  sourceNote?: string;
}

export const INVESTMENT_PACKAGES: InvestmentPackage[] = [
  {
    id: 'model-40-lakh',
    title: '₹40 Lakh Model — Complete Multi-Format Setup',
    tagline: 'Full-scale model with all formats for maximum reach and brand presence.',
    totalCost: '₹40 Lakh',
    badge: 'Flagship Multi-Format',
    isFlagship: true,
    hasOptions: false,
    singleBreakdown: [
      { format: 'Shop (250 Sq. Ft.)', count: '1 Unit', cost: '₹16 Lakh', notes: 'Central dessert café & hub' },
      { format: 'Food Truck', count: '1 Unit', cost: '₹8 Lakh', notes: 'City-wide mobile reach & evening events' },
      { format: 'Mini Kiosk', count: '1 Unit', cost: '₹8 Lakh', notes: 'High-footfall mall/transit placement' },
      { format: 'Push Carts', count: '2 Units', cost: '₹4 Lakh', notes: 'Neighborhood & park mobility' },
      { format: 'Event Cart', count: '1 Unit', cost: '₹4 Lakh', notes: 'Weddings, corporate & party catering' },
    ],
    projectedAnnualSales: '₹1.44 Crore (Advertised target across 5 formats)',
    projectedMonthlySales: '₹12.0 Lakh / month',
    sourceNote: 'Brochure projected illustrative operating contribution: ~30% (~₹43.2 Lakh/yr) with estimated 11–12 months initial recovery target.',
  },
  {
    id: 'model-30-lakh',
    title: '₹30 Lakh Model — High Reach Business Model',
    tagline: 'Ideal balance of shop, truck, event cart, and push cart for strong revenue potential.',
    totalCost: '₹30 Lakh',
    badge: 'High Reach',
    hasOptions: false,
    singleBreakdown: [
      { format: 'Shop (250 Sq. Ft.)', count: '1 Unit', cost: '₹16 Lakh', notes: 'Customer seating and café anchor' },
      { format: 'Food Truck', count: '1 Unit', cost: '₹8 Lakh', notes: 'High mobility and weekend festivals' },
      { format: 'Event Cart', count: '1 Unit', cost: '₹4 Lakh', notes: 'Dedicated event and wedding catering' },
      { format: 'Push Cart', count: '1 Unit', cost: '₹2 Lakh', notes: 'Flexible pedestrian placement' },
    ],
    projectedAnnualSales: 'High Multi-Channel Target',
    sourceNote: 'Balanced portfolio delivering steady dine-in revenue complemented by agile mobile units.',
  },
  {
    id: 'model-24-lakh',
    title: '₹24 Lakh Model — Growth Focused Model',
    tagline: 'Two flexible combinations tailored to suit your specific local market opportunity.',
    totalCost: '₹24 Lakh',
    badge: 'Growth Focused',
    hasOptions: true,
    options: [
      {
        optionName: 'Option A: Storefront + Mobile Satellite Cluster',
        totalInvestment: '₹24 Lakh',
        idealFor: 'Investors with a prime retail location seeking neighbourhood expansion.',
        items: [
          { format: 'Shop (250 Sq. Ft.)', count: '1 Unit', cost: '₹16 Lakh' },
          { format: 'Push Carts', count: '2 Units', cost: '₹4 Lakh' },
          { format: 'Event Cart', count: '1 Unit', cost: '₹4 Lakh' },
        ],
      },
      {
        optionName: 'Option B: Multi-Mobile Fleet + Kiosk Format',
        totalInvestment: '₹24 Lakh',
        idealFor: 'Operators focused on rapid deployment without heavy commercial lease commitments.',
        items: [
          { format: 'Food Truck', count: '1 Unit', cost: '₹8 Lakh' },
          { format: 'Mini Kiosk', count: '1 Unit', cost: '₹8 Lakh' },
          { format: 'Event Cart', count: '1 Unit', cost: '₹4 Lakh' },
          { format: 'Push Carts', count: '2 Units', cost: '₹4 Lakh' },
        ],
      },
    ],
  },
  {
    id: 'model-20-lakh',
    title: '₹20 Lakh Model — Compact & Profitable Model',
    tagline: 'Ideal for starting with a shop and mobile presence in high-footfall areas.',
    totalCost: '₹20 Lakh (Advertised Total)',
    badge: 'Compact & Profitable',
    hasOptions: false,
    singleBreakdown: [
      { format: 'Shop (250 Sq. Ft.)', count: '1 Unit', cost: 'Advertised in brochure' },
      { format: 'Push Carts', count: '2 Units', cost: '₹4 Lakh' },
    ],
    sourceNote: 'Data Verification Note: In the source brochure infographic, the individual item text shows Shop (250 Sq.Ft.) and 2 Push Carts under the ₹20 Lakh total header. Exact breakdown of infrastructure allocation, fit-out, and initial working capital requires final written quotation from Blucy management.',
  },
  {
    id: 'model-12-lakh',
    title: '₹12 Lakh Model — Entry Level Model',
    tagline: 'Two flexible options to kickstart your Blucy entrepreneurial journey.',
    totalCost: '₹12 Lakh',
    badge: 'Entry Level',
    hasOptions: true,
    options: [
      {
        optionName: 'Option A: Food Truck + Mobile Carts',
        totalInvestment: '₹12 Lakh',
        idealFor: 'Dynamic outdoor event and high-street mobility entrepreneurs.',
        items: [
          { format: 'Food Truck', count: '1 Unit', cost: '₹8 Lakh' },
          { format: 'Push Carts', count: '2 Units', cost: '₹4 Lakh' },
        ],
      },
      {
        optionName: 'Option B: Mall Kiosk + Mobile Carts',
        totalInvestment: '₹12 Lakh',
        idealFor: 'Indoor mall footfall capture backed by outdoor mobile carts.',
        items: [
          { format: 'Mini Kiosk', count: '1 Unit', cost: '₹8 Lakh' },
          { format: 'Push Carts', count: '2 Units', cost: '₹4 Lakh' },
        ],
      },
    ],
  },
];

export interface ReturnStructureStep {
  phase: string;
  title: string;
  duration: string;
  highlights: string[];
  description: string;
  accent: string;
}

export const RETURN_STRUCTURE_STEPS: ReturnStructureStep[] = [
  {
    phase: 'Phase 1',
    title: 'Setup, Launch & Initial Recovery',
    duration: 'Months 1 to ~8–12',
    accent: 'blucy-blue',
    highlights: [
      'Comprehensive store, vehicle, kiosk & cart setup',
      'Local marketing rollout & brand activation',
      'Initial sales acceleration across all channels',
      'Target recovery of initial capital in approx. 8–12 months (as proposed in brochure)',
    ],
    description: 'The initial operational phase is dedicated to setting up the retail infrastructure, training staff, and rapidly achieving breakeven to recover the partner’s initial investment capital.',
  },
  {
    phase: 'Phase 2',
    title: '50 : 50 Profit Sharing Collaboration',
    duration: 'Post Recovery up to 3 Years',
    accent: 'blucy-pink',
    highlights: [
      '50% Net Profit to Investor Partner',
      '50% Net Profit to Blucy Company',
      'Ongoing supply-chain and branding support',
      'Active for a period of up to 3 years from investment recovery date',
    ],
    description: 'Once the initial capital is recovered, the partnership enters the 50:50 profit sharing period described in the source brochure, continuing for up to three years from the recovery date.',
  },
  {
    phase: 'Phase 3',
    title: 'Operational Transition & Re-Investment Priority',
    duration: 'After 3 Years',
    accent: 'blucy-navy',
    highlights: [
      'Day-to-day operations transition to company management (subject to terms)',
      'Existing investor receives first right of opportunity for new franchise / territory expansion',
      'Option to reinvest into new formats or territories under then-current terms',
    ],
    description: 'As outlined in the brochure, operations transition to the company after three years. Existing investors receive first priority for renewal, new franchise agreements, or territory allocations.',
  },
];
