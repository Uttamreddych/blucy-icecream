import React, { useState } from 'react';
import type { FAQItem } from '../data/faq';
import { ChevronDown } from 'lucide-react';

interface FAQAccordionProps {
  items: FAQItem[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-blucy-ice/60 border-blucy-blue/30 shadow-sm'
                : 'bg-white border-blucy-sky/20 hover:border-blucy-blue/30'
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full py-4 px-5 sm:px-6 flex items-center justify-between text-left focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-heading font-semibold text-base sm:text-lg text-blucy-navy pr-4">
                {item.question}
              </span>
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen ? 'bg-blucy-blue text-white rotate-180' : 'bg-blucy-ice text-blucy-blue'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-blucy-text leading-relaxed border-t border-blucy-sky/15">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
