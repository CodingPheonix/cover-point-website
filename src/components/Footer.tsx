import React from 'react';
import { Shield, Phone, MessageCircle, MapPin, Heart, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data/mockData';
import { createPhoneCallLink } from '../services/catalogService';

interface FooterProps {
  onNavigate: (view: 'home' | 'catalog', sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const whatsappUrl = `https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(
    'Hi Cover Point! I am looking for store information and direction.'
  )}`;

  return (
    <footer className="bg-[#07070A] border-t border-white/10 text-slate-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 p-[1px] shadow-glow-sm flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black text-white font-display">
                Cover <span className="text-blue-500">Point</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Your premier offline destination at Mecheda Bus Stand for high-end mobile backcovers, military-grade screen guards, 20-min custom printing, and certified on-the-spot smartphone repairs.
            </p>

            {/* Offline Footnote Notice */}
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-slate-300">
              <p className="font-semibold text-blue-400 flex items-center gap-1.5 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Physical Store Guarantee
              </p>
              We do not sell online. Walk in to feel real textures, inspect camera bezels, and get free machine-cut screen fittings!
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Explore Store
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home', 'shop-by-design')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Shop by Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'collections')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Curated Collections
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'accessories')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Essential Accessories
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'repair-services')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Express Phone Repair
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog')}
                  className="hover:text-cyan-400 transition-colors font-semibold"
                >
                  Compatibility Catalog
                </button>
              </li>
            </ul>
          </div>

          {/* Offline Store Timings & Hours */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Working Hours
            </h4>
            <div className="space-y-2 text-xs">
              <p className="text-slate-300 font-medium">Monday - Sunday</p>
              <p className="text-cyan-300 font-mono">10:30 AM – 9:30 PM</p>
              <p className="text-[11px] text-cyan-400">Open All 365 Days</p>
              <p className="text-[11px] text-slate-400">Walk-ins welcome anytime without appointment</p>
            </div>
          </div>

          {/* Quick Contact & WhatsApp */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Connect Directly
            </h4>
            
            <div className="space-y-2 text-xs">
              <p className="text-slate-300 flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>{STORE_INFO.address}</span>
              </p>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={createPhoneCallLink()}
                  className="inline-flex items-center gap-2 text-xs text-white hover:text-blue-400 transition-colors font-mono"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                  <span>{STORE_INFO.phone}</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp: {STORE_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Cover Point Flagship Store. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered with <Heart className="w-3.5 h-3.5 text-blue-500 fill-blue-500" /> for mobile aesthetics.
          </p>
        </div>

      </div>
    </footer>
  );
};
