export interface FAQItem {
  question: string;
  answer: string;
  category: 'franchise' | 'investment' | 'operations' | 'products';
}

export const FAQ_DATA: FAQItem[] = [
  {
    category: 'franchise',
    question: 'What business formats does Blucy Ice Creamery offer?',
    answer: 'Blucy offers a versatile multi-format portfolio including 250 sq. ft. Ice Cream & Café Shops, Cycle Carts, Mini Carts, Food Trucks, Mini Kiosks, and Event Carts. Partners can invest in single formats or complete multi-format clusters depending on their capital and local territory.',
  },
  {
    category: 'investment',
    question: 'What are the advertised investment package tiers?',
    answer: 'As shown in the official brochures, Blucy advertises five primary models: ₹40 Lakh (Complete Multi-Format Setup), ₹30 Lakh (High Reach Model), ₹24 Lakh (Growth Focused Model with 2 options), ₹20 Lakh (Compact & Profitable Model), and ₹12 Lakh (Entry Level Model with 2 options). All figures represent advertised packages and final quotations depend on location, inclusions, and commercial terms.',
  },
  {
    category: 'investment',
    question: 'How does the Investor Return Structure work?',
    answer: 'According to the brochure proposal: Year 1 focuses on setup, marketing launch, and target initial recovery in approximately 8 to 12 months. After initial capital recovery, profits are shared equally (50% Investor / 50% Blucy) for up to three years. After three years, operations transition to the company with the investor having first right of refusal for new franchise/investment arrangements.',
  },
  {
    category: 'operations',
    question: 'Does Blucy provide operational training and supply support?',
    answer: 'Yes. Blucy supports franchise partners with comprehensive staff training, standardized recipe SOPs, supply chain fulfillment for ice creams, premixes, branded packaging, and ongoing marketing assistance.',
  },
  {
    category: 'operations',
    question: 'Who handles site selection and approvals?',
    answer: 'Blucy’s franchise team assists partners in assessing high-footfall catchment zones, evaluating commercial agreements, and determining optimal placement for stationary stores, kiosks, and mobile units.',
  },
  {
    category: 'products',
    question: 'Are Blucy ice cream products 100% vegetarian?',
    answer: 'Yes! Blucy’s core ice cream scoops, softy cones, kulfies, waffles, beverages, and café items are 100% vegetarian, made using quality dairy and pure ingredients.',
  },
];
