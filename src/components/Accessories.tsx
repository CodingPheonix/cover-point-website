import React, { useState } from 'react';
import { ACCESSORIES_ITEMS } from '../data/mockData';
import { ProductCard } from './ProductCard';
import { ProductItem } from '../types';
import { ChevronDown, ChevronUp, Zap } from 'lucide-react';

interface AccessoriesProps {
  onSelectProduct?: (product: ProductItem) => void;
}

export const Accessories: React.FC<AccessoriesProps> = ({ onSelectProduct }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Rule: "the first look should show 4 items horizontally, if more are available for display in any section, use a show more button."
  const INITIAL_VISIBLE_COUNT = 4;
  const visibleAccessories = isExpanded ? ACCESSORIES_ITEMS : ACCESSORIES_ITEMS.slice(0, INITIAL_VISIBLE_COUNT);
  const hasMore = ACCESSORIES_ITEMS.length > INITIAL_VISIBLE_COUNT;

  return (
    <section id="accessories" className="py-20 bg-[#0B0B10] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>Power & Essentials</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display">
              Essential <span className="text-blue-500">Accessories</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-xl">
              High-efficiency GaN chargers, unbreakable braided cables, wireless magnetic powerbanks, studio earphones & lens protectors.
            </p>
          </div>

          <div className="text-xs text-slate-400 font-mono flex-shrink-0">
            All Genuine Store Warranty Included
          </div>
        </div>

        {/* 4 Items Horizontally Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleAccessories.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onSelect={onSelectProduct}
            />
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#161622] hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 hover:border-blue-500 transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-glow-sm group"
            >
              {isExpanded ? (
                <>
                  <span>Show Less Accessories</span>
                  <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                </>
              ) : (
                <>
                  <span>Show More ({ACCESSORIES_ITEMS.length - INITIAL_VISIBLE_COUNT} More Items)</span>
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </>
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
