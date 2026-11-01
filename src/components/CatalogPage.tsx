import React, { useState, useMemo } from 'react';
import { 
  searchInventoryByPhone, 
  SearchInventoryType,
  createWhatsAppInquiryLink 
} from '../services/catalogService';
import { ProductCard } from './ProductCard';
import { ProductItem } from '../types';
import { 
  Search, 
  Smartphone, 
  Shield, 
  ArrowLeft, 
  Filter, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  Store
} from 'lucide-react';
import { POPULAR_PHONE_BRANDS } from '../data/mockData';

interface CatalogPageProps {
  initialSearchQuery?: string;
  initialSearchType?: SearchInventoryType;
  onBackToHome: () => void;
  onSelectProduct?: (product: ProductItem) => void;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({
  initialSearchQuery = '',
  initialSearchType = 'backcover',
  onBackToHome,
  onSelectProduct,
}) => {
  const [searchType, setSearchType] = useState<SearchInventoryType>(initialSearchType);
  const [phoneQuery, setPhoneQuery] = useState<string>(initialSearchQuery);
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Perform search
  const searchResult = useMemo(() => {
    return searchInventoryByPhone(phoneQuery, searchType);
  }, [phoneQuery, searchType]);

  // Secondary brand filtering
  const filteredItems = useMemo(() => {
    if (selectedBrand === 'All') {
      return searchResult.items;
    }
    return searchResult.items.filter((item) => 
      item.brand.toLowerCase() === selectedBrand.toLowerCase()
    );
  }, [searchResult, selectedBrand]);

  // Rule: First look shows 4 items horizontally
  const INITIAL_VISIBLE_COUNT = 4;
  const visibleItems = isExpanded ? filteredItems : filteredItems.slice(0, INITIAL_VISIBLE_COUNT);
  const hasMore = filteredItems.length > INITIAL_VISIBLE_COUNT;

  const brands = ['All', ...POPULAR_PHONE_BRANDS.map((b) => b.brand)];

  const quickPhonePresets = [
    'iPhone 15 Pro Max',
    'Galaxy S24 Ultra',
    'OnePlus 12',
    'Pixel 8 Pro',
    'Xiaomi 14 Ultra',
    'Nothing Phone (2)'
  ];

  return (
    <main className="min-h-screen pt-28 pb-20 bg-[#0B0B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back to Home & Breadcrumb */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-semibold transition-all group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Home</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <Store className="w-4 h-4" />
            <span>Live Mecheda Store Inventory Listing</span>
          </div>
        </div>

        {/* Page Hero & Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Full Inventory & Phone Model Finder</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display">
            Compatibility <span className="text-blue-500">Catalog</span>
          </h1>
          <p className="mt-3 text-sm text-slate-400">
            Search backcover or screen guard for your exact phone model. Check real-time offline stock before walking in.
          </p>
        </div>

        {/* Search & Toggle Control Box */}
        <div className="bg-[#14141E] border border-white/10 rounded-2xl p-6 mb-10 shadow-2xl">
          
          {/* Toggle between Backcover and Screen Guard */}
          <div className="flex items-center justify-center mb-6">
            <div className="inline-flex p-1 rounded-xl bg-black/60 border border-white/10">
              <button
                type="button"
                onClick={() => {
                  setSearchType('backcover');
                  setIsExpanded(false);
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                  searchType === 'backcover'
                    ? 'bg-blue-600 text-white shadow-glow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                <span>Mobile Backcovers</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSearchType('screenguard');
                  setIsExpanded(false);
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                  searchType === 'screenguard'
                    ? 'bg-blue-600 text-white shadow-glow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Shield className="w-4 h-4" />
                <span>Screen Guards & Tempered</span>
              </button>
            </div>
          </div>

          {/* Search Input Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={phoneQuery}
                onChange={(e) => {
                  setPhoneQuery(e.target.value);
                  setIsExpanded(false);
                }}
                placeholder={
                  searchType === 'backcover'
                    ? "Type phone model (e.g. iPhone 15 Pro, Samsung S24, OnePlus 12...)"
                    : "Type phone model for tempered screen guard..."
                }
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-black/50 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
              />
            </div>

            {/* Quick preset chips */}
            <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs">
              <span className="text-slate-500 font-mono text-[11px]">Quick Search:</span>
              {quickPhonePresets.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => {
                    setPhoneQuery(preset);
                    setIsExpanded(false);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-blue-600/20 text-slate-300 hover:text-blue-300 border border-white/10 text-xs transition-colors"
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>

          {/* Brand Filter (Available when searching backcovers) */}
          {searchType === 'backcover' && (
            <div className="mt-6 pt-5 border-t border-white/5 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5 mr-2 flex-shrink-0">
                <Filter className="w-3.5 h-3.5 text-blue-400" />
                Brand:
              </span>
              {brands.map((b) => (
                <button
                  key={b}
                  onClick={() => {
                    setSelectedBrand(b);
                    setIsExpanded(false);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border ${
                    selectedBrand === b
                      ? 'bg-blue-600 text-white border-blue-500 shadow-glow-sm'
                      : 'bg-white/5 text-slate-300 border-white/10 hover:border-white/20'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          )}

        </div>

        {/* Results Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-3 border-b border-white/5">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span>Matching Options for:</span>
              <span className="text-cyan-400 font-mono">
                {phoneQuery ? `"${phoneQuery}"` : `All ${searchType === 'backcover' ? 'Backcovers' : 'Screen Guards'}`}
              </span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Type: {searchType === 'backcover' ? 'Mobile Backcovers' : 'Tempered Glass & Screenguards'}
            </p>
          </div>

          <div className="mt-2 sm:mt-0 text-xs font-mono text-slate-400">
            Showing {visibleItems.length} of {filteredItems.length} products
          </div>
        </div>

        {/* 4 Items Horizontally Grid (Rule compliance) */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleItems.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#12121A] rounded-2xl border border-white/10 p-8">
            <p className="text-base text-slate-300 font-medium">
              No exact match in our online preview for this brand filter.
            </p>
            <p className="text-xs text-slate-400 mt-2 max-w-md mx-auto">
              We have custom machine-cut backcovers and laser-fitted tempered glasses for over 1,000+ phones in our Mecheda store!
            </p>
            <div className="mt-6">
              <a
                href={createWhatsAppInquiryLink(phoneQuery || 'Custom Phone Cover')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-glow-sm transition-all"
              >
                <span>Ask Store Manager on WhatsApp</span>
              </a>
            </div>
          </div>
        )}

        {/* Show More / Show Less Button */}
        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#161622] hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 hover:border-blue-500 transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-glow-sm group"
            >
              {isExpanded ? (
                <>
                  <span>Show Less Options</span>
                  <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                </>
              ) : (
                <>
                  <span>Show More ({filteredItems.length - INITIAL_VISIBLE_COUNT} More Items)</span>
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </>
              )}
            </button>
          </div>
        )}

      </div>
    </main>
  );
};
