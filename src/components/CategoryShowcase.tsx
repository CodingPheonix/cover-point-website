import React from 'react';
import { CATEGORY_SHOWCASE } from '../data/mockData';
import { LayoutGrid, ArrowRight, MessageCircle } from 'lucide-react';
import { createWhatsAppInquiryLink } from '../services/catalogService';

interface CategoryShowcaseProps {
  onSelectCategory?: (categorySlug: string) => void;
}

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-20 bg-[#0E0E14] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Complete Inventory Range</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Explore All <span className="text-blue-500">8 Categories</span>
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            From military-grade cases and UV-cured screenguards to 65W GaN chargers and precision screen repairs.
          </p>
        </div>

        {/* 8 Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORY_SHOWCASE.map((item, index) => {
            const whatsappLink = createWhatsAppInquiryLink(item.productName, item.category);

            return (
              <div
                key={index}
                className="group bg-[#14141E] rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-glow-md overflow-hidden flex flex-col justify-between"
              >
                {/* Category Thumbnail */}
                <div className="relative h-48 w-full overflow-hidden bg-[#0A0A0E]">
                  <img
                    src={item.image}
                    alt={item.category}
                    loading="lazy"
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-95 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14141E] via-transparent to-black/30" />
                  
                  {/* Category Highlight Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-blue-600/90 text-white backdrop-blur-sm border border-blue-400/30">
                      {item.highlight}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                      {item.category}
                    </h3>
                    
                    {/* Featured Product example */}
                    <div className="mt-2 p-2.5 rounded-xl bg-black/40 border border-white/5">
                      <p className="text-[10px] text-blue-400 font-mono uppercase tracking-wider">
                        Flagship Example:
                      </p>
                      <p className="text-xs font-semibold text-slate-200 truncate mt-0.5">
                        {item.productName}
                      </p>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-xs font-bold text-white">
                          Starting ₹{item.price}
                        </span>
                        <span className="text-[10px] text-slate-500 line-through">
                          ₹{item.originalPrice}
                        </span>
                      </div>
                    </div>

                    <p className="mt-2.5 text-xs text-slate-400 line-clamp-2">
                      {item.tagline}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Inquire In-Store</span>
                    </a>

                    <button
                      onClick={() => onSelectCategory && onSelectCategory(item.slug)}
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-blue-600 text-slate-300 hover:text-white transition-all"
                      title={`Browse ${item.category}`}
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
