import React from 'react';
import { ProductItem } from '../types';
import { 
  X, 
  MessageCircle, 
  Phone, 
  ShieldCheck, 
  CheckCircle2
} from 'lucide-react';
import { createWhatsAppInquiryLink, createPhoneCallLink, calculateSavings } from '../services/catalogService';
import { STORE_INFO } from '../data/mockData';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const whatsappUrl = createWhatsAppInquiryLink(product.name, product.phoneModel);
  const savings = calculateSavings(product.originalPrice, product.price);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg md:max-w-2xl bg-[#12121A] border border-white/15 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row my-auto max-h-[90vh] md:max-h-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 rounded-full bg-black/70 hover:bg-black/90 text-slate-300 hover:text-white border border-white/10 transition-colors"
          aria-label="Close product modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left Side: Product Image Showcase */}
        <div className="relative md:w-1/2 h-52 sm:h-64 md:h-auto min-h-[200px] md:min-h-[300px] bg-[#0A0A0E] overflow-hidden flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12121A] via-transparent to-transparent md:hidden" />
          
          {product.discountPercentage && (
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
              <span className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-extrabold bg-blue-600 text-white shadow-lg">
                SAVE {product.discountPercentage}%
              </span>
            </div>
          )}
        </div>

        {/* Right Side: Product Details & Walk-in Inquiry Actions */}
        <div className="p-4 sm:p-6 md:w-1/2 flex flex-col justify-between space-y-3 sm:space-y-4 overflow-y-auto">
          <div>
            {/* Brand & Phone */}
            <div className="flex items-center gap-2 text-xs mb-2">
              <span className="font-mono uppercase font-bold text-blue-400">
                {product.brand}
              </span>
              {product.phoneModel && (
                <span className="text-slate-400 font-mono">
                  • {product.phoneModel}
                </span>
              )}
            </div>

            {/* Product Title */}
            <h3 className="text-xl font-bold text-white tracking-tight">
              {product.name}
            </h3>

            {/* Price section */}
            <div className="mt-3 flex items-baseline gap-2.5">
              <span className="text-2xl font-black text-white">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-slate-500 line-through">
                  ₹{product.originalPrice}
                </span>
              )}
              {savings > 0 && (
                <span className="text-xs font-semibold text-cyan-400 font-mono">
                  (You Save ₹{savings})
                </span>
              )}
            </div>

            {/* Description */}
            <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {product.description}
            </p>

            {/* Store Inspection & Guarantee points */}
            <div className="mt-4 pt-3 border-t border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                <span>Available for in-person inspection at Mecheda store</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span>Free laser-guided alignment & dust-free fitting</span>
              </div>
            </div>
          </div>

          {/* Action Buttons: Prompt emphasizes company does not sell online, just online presence with contact */}
          <div className="pt-4 border-t border-white/10 space-y-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-glow-sm transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire Stock on WhatsApp</span>
            </a>

            <a
              href={createPhoneCallLink()}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>Call Store ({STORE_INFO.phone})</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
