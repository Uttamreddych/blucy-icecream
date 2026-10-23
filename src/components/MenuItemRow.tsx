import React from 'react';
import type { MenuItem } from '../data/menu';

interface MenuItemRowProps {
  item: MenuItem;
}

export const MenuItemRow: React.FC<MenuItemRowProps> = ({ item }) => {
  return (
    <div className="py-3 px-4 rounded-2xl transition-colors hover:bg-blucy-ice/50 border border-transparent hover:border-blucy-sky/20 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
      <div className="flex-grow">
        <div className="flex items-center gap-2">
          <h4 className="font-heading font-semibold text-blucy-navy text-base">
            {item.name}
          </h4>
          {item.badge && (
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blucy-softpink text-blucy-pink border border-blucy-pink/20">
              {item.badge}
            </span>
          )}
          {item.isSpecial && (
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 border border-amber-300">
              Special Offer
            </span>
          )}
        </div>
        {item.description && (
          <p className="text-xs text-blucy-muted mt-0.5 leading-relaxed">
            {item.description}
          </p>
        )}
      </div>

      {/* Price tag */}
      <div className="shrink-0 text-right">
        {item.singlePrice !== undefined && item.doublePrice !== undefined ? (
          <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold">
            <span className="text-blucy-navy">
              Single: <span className="font-bold text-blucy-pink">₹{item.singlePrice}</span>
            </span>
            <span className="text-blucy-sky/40">/</span>
            <span className="text-blucy-navy">
              Double: <span className="font-bold text-blucy-pink">₹{item.doublePrice}</span>
            </span>
          </div>
        ) : item.smallPrice !== undefined && item.regularPrice !== undefined ? (
          <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold">
            <span className="text-blucy-navy">
              Small: <span className="font-bold text-blucy-pink">₹{item.smallPrice}</span>
            </span>
            <span className="text-blucy-sky/40">/</span>
            <span className="text-blucy-navy">
              Regular: <span className="font-bold text-blucy-pink">₹{item.regularPrice}</span>
            </span>
          </div>
        ) : item.price !== undefined ? (
          <div className="flex items-center gap-2 justify-end">
            {item.regularPrice && (
              <span className="text-xs text-blucy-muted line-through">₹{item.regularPrice}</span>
            )}
            <span className="font-heading font-bold text-base sm:text-lg text-blucy-blue">
              ₹{item.price}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
};
