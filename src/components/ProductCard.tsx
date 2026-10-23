import React from 'react';
import type { Product } from '../data/products';
import { Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onEnquire?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onEnquire }) => {
  return (
    <div className="blucy-card flex flex-col h-full group bg-white border border-blucy-sky/20">
      {/* Product Image Frame */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-tr from-blucy-ice via-white to-blucy-softpink/40 p-4 flex items-center justify-center">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-108"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-blucy-ice flex items-center justify-center text-blucy-blue font-bold">
            Blucy
          </div>
        )}

        {/* Veg Badge Top Right */}
        {product.isVegetarian && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-1 rounded-md border border-green-600/30 shadow-sm" title="100% Pure Vegetarian">
            <div className="w-3.5 h-3.5 border-2 border-green-600 rounded-sm flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
            </div>
          </div>
        )}

        {/* Tag / Badge Top Left */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-blucy-pink text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
            <Sparkles className="w-3 h-3 fill-white" />
            <span>{product.badge}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow justify-between bg-white">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-blucy-sky">
            {product.category}
          </span>
          <h3 className="text-lg font-heading font-bold text-blucy-navy mt-0.5 group-hover:text-blucy-blue transition-colors">
            {product.name}
          </h3>
          <p className="text-xs sm:text-sm text-blucy-muted mt-2 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Pricing & CTA */}
        <div className="mt-5 pt-3 border-t border-blucy-ice flex items-center justify-between">
          <div className="flex flex-col">
            {product.singlePrice !== undefined && product.doublePrice !== undefined ? (
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-semibold text-blucy-navy">
                  Single: <span className="text-blucy-pink font-bold">₹{product.singlePrice}</span>
                </span>
                <span className="text-xs text-blucy-muted">|</span>
                <span className="text-sm font-semibold text-blucy-navy">
                  Double: <span className="text-blucy-pink font-bold">₹{product.doublePrice}</span>
                </span>
              </div>
            ) : product.price !== undefined ? (
              <div className="flex items-baseline gap-1.5">
                <span className="text-xs text-blucy-muted font-medium">Price:</span>
                <span className="text-xl font-heading font-bold text-blucy-pink">₹{product.price}</span>
                {product.regularPrice && (
                  <span className="text-xs text-blucy-muted line-through ml-1">₹{product.regularPrice}</span>
                )}
              </div>
            ) : product.smallPrice !== undefined && product.regularPrice !== undefined ? (
              <div className="text-xs font-semibold text-blucy-navy">
                Small: <span className="text-blucy-pink font-bold">₹{product.smallPrice}</span> | Reg: <span className="text-blucy-pink font-bold">₹{product.regularPrice}</span>
              </div>
            ) : (
              <span className="text-xs text-blucy-muted">Contact for details</span>
            )}
          </div>

          {onEnquire && (
            <button
              type="button"
              onClick={() => onEnquire(product)}
              className="text-xs font-semibold text-blucy-blue hover:text-blucy-pink transition-colors focus:outline-none"
            >
              Enquire
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
