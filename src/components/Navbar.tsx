import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Shield, 
  Menu, 
  X
} from 'lucide-react';
import { STORE_INFO } from '../data/mockData';
import { createPhoneCallLink } from '../services/catalogService';

interface NavbarProps {
  currentView: 'home' | 'catalog';
  onNavigate: (view: 'home' | 'catalog', sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId?: string) => {
    setIsMobileMenuOpen(false);
    if (sectionId) {
      if (currentView !== 'home') {
        onNavigate('home', sectionId);
      } else {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const whatsappDirectUrl = `https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(
    'Hi Cover Point! I am looking for a mobile cover / accessory and would like to check current store availability.'
  )}`;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0B0B10]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Company Name */}
          <button 
            onClick={() => handleNavClick()}
            className="flex items-center gap-2.5 group focus:outline-none text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-500 p-[1px] shadow-glow-sm group-hover:shadow-glow-md transition-shadow">
              <div className="w-full h-full bg-[#0B0B10] rounded-[11px] flex items-center justify-center">
                <Shield className="w-5 h-5 text-blue-400 group-hover:text-cyan-300 transition-colors" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-white font-display">
                  Cover <span className="text-blue-500">Point</span>
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.2 rounded text-[10px] font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  STORE
                </span>
              </div>
              <p className="text-[10px] text-slate-400 tracking-wider uppercase font-mono hidden sm:block">
                Flagship Device Protection
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links (as requested: Shop by Design, Collections, Accessories) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              onClick={() => handleNavClick('shop-by-design')}
              className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              Shop by Design
            </button>
            <button
              onClick={() => handleNavClick('collections')}
              className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              Collections
            </button>
            <button
              onClick={() => handleNavClick('accessories')}
              className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              Accessories
            </button>
            <button
              onClick={() => handleNavClick('repair-services')}
              className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              Express Repair
            </button>
            <button
              onClick={() => handleNavClick('reach-us')}
              className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              Reach Us
            </button>
          </nav>

          {/* Action Icons in Navbar: WhatsApp and Call icons (User Requirement) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct Call Button */}
            <a
              href={createPhoneCallLink()}
              aria-label="Call Cover Point store"
              title={`Call Store: ${STORE_INFO.phone}`}
              className="p-2.5 rounded-xl bg-[#161620] hover:bg-blue-600 text-blue-400 hover:text-white border border-white/10 hover:border-blue-500 transition-all duration-200 shadow-sm hover:shadow-glow-sm group flex items-center gap-2"
            >
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="hidden xl:inline text-xs font-medium text-slate-300 group-hover:text-white">
                Call Store
              </span>
            </a>

            {/* WhatsApp Connect Button */}
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on WhatsApp"
              title="Chat with Cover Point on WhatsApp"
              className="p-2.5 rounded-xl bg-[#161620] hover:bg-cyan-600 text-cyan-400 hover:text-white border border-white/10 hover:border-cyan-500 transition-all duration-200 shadow-sm hover:shadow-glow-sm group flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="hidden lg:inline text-xs font-medium text-slate-300 group-hover:text-white">
                WhatsApp Us
              </span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 md:hidden rounded-xl bg-[#161620] text-slate-300 hover:text-white border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0F0F16] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-1 gap-1">
            <button
              onClick={() => handleNavClick('shop-by-design')}
              className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5 rounded-lg"
            >
              Shop by Design
            </button>
            <button
              onClick={() => handleNavClick('collections')}
              className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5 rounded-lg"
            >
              Collections
            </button>
            <button
              onClick={() => handleNavClick('accessories')}
              className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5 rounded-lg"
            >
              Accessories
            </button>
            <button
              onClick={() => handleNavClick('repair-services')}
              className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5 rounded-lg"
            >
              Express Repair Services
            </button>
            <button
              onClick={() => handleNavClick('reach-us')}
              className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5 rounded-lg"
            >
              Reach Us & Store Location
            </button>
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={createPhoneCallLink()}
                className="py-2.5 px-3 rounded-xl bg-white/5 text-center text-xs font-medium text-slate-200 flex items-center justify-center gap-1.5 border border-white/10"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>Call Store</span>
              </a>
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl bg-cyan-600/20 text-center text-xs font-medium text-cyan-400 flex items-center justify-center gap-1.5 border border-cyan-500/30"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
