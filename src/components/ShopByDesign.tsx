import React, { useState, useMemo } from 'react';
import { PHONE_DESIGNS, POPULAR_PHONE_BRANDS } from '../data/mockData';
import { ProductCard } from './ProductCard';
import { ProductItem } from '../types';
import { ChevronDown, ChevronUp, Smartphone, Layers } from 'lucide-react';

interface ShopByDesignProps {
  onSelectProduct?: (product: ProductItem) => void;
}

export const ShopByDesign: React.FC<ShopByDesignProps> = ({ onSelectProduct }) => {
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Available brands
  const brands = useMemo(() => {
    return ['All', ...POPULAR_PHONE_BRANDS.map((b) => b.brand)];
  }, []);

  // Filter items based on selected brand
  const filteredItems = useMemo(() => {
    if (selectedBrand === 'All') {
      return PHONE_DESIGNS;
    }
    return PHONE_DESIGNS.filter((item) => item.brand.toLowerCase() === selectedBrand.toLowerCase());
  }, [selectedBrand]);

  // Rule: "the first look should show 4 items horizontally, if more are available for display in any section, use a show more button."
  const INITIAL_VISIBLE_COUNT = 4;
  const visibleItems = isExpanded ? filteredItems : filteredItems.slice(0, INITIAL_VISIBLE_COUNT);
  const hasMore = filteredItems.length > INITIAL_VISIBLE_COUNT;

  const handleBrandChange = (brand: string) => {
    setSelectedBrand(brand);
    setIsExpanded(false); // Reset to 4 items on filter switch
  };

  return (
    <section id="shop-by-design" className="py-20 bg-[#0B0B10] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Tailored By Device</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display">
              Shop By <span className="text-blue-500">Design</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-xl">
              Curated precision cases custom-fit for Apple, Samsung, OnePlus, Google Pixel, Xiaomi, and Nothing devices.
            </p>
          </div>

          <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5 flex-shrink-0">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span>Showing {visibleItems.length} of {filteredItems.length} curated designs</span>
          </div>
        </div>

        {/* Phone Company Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => handleBrandChange(brand)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${
                selectedBrand === brand
                  ? 'bg-blue-600 text-white border-blue-500 shadow-glow-sm'
                  : 'bg-[#14141E] text-slate-300 border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              {brand === 'All' ? 'All Phone Brands' : brand}
            </button>
          ))}
        </div>

        {/* 4 Items Horizontally Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleItems.map((product) => (
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
                  <span>Show Less Designs</span>
                  <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                </>
              ) : (
                <>
                  <span>Show More ({filteredItems.length - INITIAL_VISIBLE_COUNT} More Designs)</span>
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

