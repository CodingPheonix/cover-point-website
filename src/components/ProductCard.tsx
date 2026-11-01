import React from 'react';
import { ProductItem } from '../types';
import { MessageCircle, ShieldCheck } from 'lucide-react';
import { createWhatsAppInquiryLink } from '../services/catalogService';

interface ProductCardProps {
  product: ProductItem;
  onSelect?: (product: ProductItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const whatsappUrl = createWhatsAppInquiryLink(product.name, product.phoneModel);

  return (
    <div 
      className="group relative flex flex-col justify-between bg-[#121218] rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-glow-md overflow-hidden"
    >
      {/* Top badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1.5 pointer-events-none">
        {product.discountPercentage && (
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-600 text-white shadow-sm tracking-wide">
            {product.discountPercentage}% OFF
          </span>
        )}
        {product.styleCategory && (
          <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-black/70 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
            {product.styleCategory}
          </span>
        )}
      </div>

      {/* Product Image with sleek hover zoom and glass overlay */}
      <div 
        onClick={() => onSelect && onSelect(product)}
        className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#0A0A0E] cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-95 group-hover:brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121218] via-transparent to-black/20" />
        
        {/* Subtle hover overlay hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
          <span className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600/90 text-white shadow-lg border border-blue-400/30 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" /> Check In-Store
          </span>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          {/* Brand & Phone model badge */}
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
            <span className="font-medium text-blue-400 uppercase tracking-wider text-[11px]">
              {product.brand}
            </span>
            {product.phoneModel && (
              <span className="truncate max-w-[150px] text-slate-400 font-mono text-[11px]">
                {product.phoneModel}
              </span>
            )}
          </div>

          {/* Product Name */}
          <h3 
            onClick={() => onSelect && onSelect(product)}
            className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors line-clamp-1 cursor-pointer"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Description */}
          <p className="mt-1 text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Pricing & Offline Inquiry CTA */}
        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-white tracking-tight">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-slate-500 line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          {/* WhatsApp In-Store Stock Check */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Ask store manager on WhatsApp"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600/20 hover:bg-blue-600 text-cyan-300 hover:text-white border border-cyan-500/30 transition-all duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Inquire</span>
          </a>
        </div>
      </div>
    </div>
  );
};

