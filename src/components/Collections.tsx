import React, { useState, useMemo } from 'react';
import { COLLECTIONS_ITEMS } from '../data/mockData';
import { ProductCard } from './ProductCard';
import { ProductItem, CoverStyle } from '../types';
import { ChevronDown, ChevronUp, Filter } from 'lucide-react';

interface CollectionsProps {
  onSelectProduct?: (product: ProductItem) => void;
}

export const Collections: React.FC<CollectionsProps> = ({ onSelectProduct }) => {
  const [activeCategory, setActiveCategory] = useState<CoverStyle | 'All'>('All');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const categories: (CoverStyle | 'All')[] = [
    'All',
    'Matte Cyber',
    'Luxe Leather',
    'Military Armor',
    'Holographic Art',
    'Crystal Clear',
    'Carbon Fiber'
  ];

  // Filter items
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') {
      return COLLECTIONS_ITEMS;
    }
    return COLLECTIONS_ITEMS.filter((item) => item.styleCategory === activeCategory);
  }, [activeCategory]);

  // Rule: First look shows 4 items horizontally
  const INITIAL_VISIBLE_COUNT = 4;
  const visibleProducts = isExpanded ? filteredProducts : filteredProducts.slice(0, INITIAL_VISIBLE_COUNT);
  const hasMore = filteredProducts.length > INITIAL_VISIBLE_COUNT;

  const handleCategoryChange = (cat: CoverStyle | 'All') => {
    setActiveCategory(cat);
    setIsExpanded(false);
  };

  return (
    <section id="collections" className="py-20 bg-[#0E0E14] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Material & Aesthetics</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display">
              Curated <span className="text-blue-500">Collections</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-xl">
              Filter by tactical armor, genuine leather, anti-yellowing crystal clear, or chromatic holographic textures.
            </p>
          </div>

          <div className="text-xs text-slate-400 font-mono flex-shrink-0">
            Category: <span className="text-cyan-400 font-semibold">{activeCategory}</span>
          </div>
        </div>

        {/* Categories Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white border-blue-500 shadow-glow-sm'
                  : 'bg-[#14141E] text-slate-300 border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat === 'All' ? 'All Collections' : cat}
            </button>
          ))}
        </div>

        {/* 4 Items Horizontally Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleProducts.map((product) => (
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
                  <span>Show Less Collections</span>
                  <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                </>
              ) : (
                <>
                  <span>Show More ({filteredProducts.length - INITIAL_VISIBLE_COUNT} More)</span>
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
