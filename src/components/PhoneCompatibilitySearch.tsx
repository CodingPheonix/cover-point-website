import React, { useState } from 'react';
import { Search, Shield, Smartphone, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { SearchInventoryType } from '../services/catalogService';

interface PhoneCompatibilitySearchProps {
  onSearch: (phoneName: string, type: SearchInventoryType) => void;
}

export const PhoneCompatibilitySearch: React.FC<PhoneCompatibilitySearchProps> = ({ onSearch }) => {
  const [selectedType, setSelectedType] = useState<SearchInventoryType>('backcover');
  const [phoneInput, setPhoneInput] = useState<string>('');

  const popularPhoneChips = [
    'iPhone 15 Pro Max',
    'Samsung S24 Ultra',
    'OnePlus 12',
    'Pixel 8 Pro',
    'Xiaomi 14 Ultra',
    'Nothing Phone (2)'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneInput.trim()) {
      onSearch(phoneInput.trim(), selectedType);
    }
  };

  const handleChipClick = (phone: string) => {
    setPhoneInput(phone);
    onSearch(phone, selectedType);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#0E0E14] to-[#0B0B10] border-t border-b border-white/5 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-blue-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Instant Compatibility Finder</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
            Search Backcover or Screen Guard for <span className="text-blue-500">Your Phone</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400">
            Select what you are looking for, enter your exact device model, and view all in-store stock immediately.
          </p>
        </div>

        {/* The Search Card Container */}
        <div className="bg-[#14141E]/90 border border-white/10 rounded-2xl p-4 sm:p-6 shadow-2xl backdrop-blur-xl">
          
          {/* Toggle between Backcover and Screen Guard */}
          <div className="flex items-center justify-center mb-5 sm:mb-6">
            <div className="grid grid-cols-2 p-1 rounded-xl bg-black/60 border border-white/10 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setSelectedType('backcover')}
                className={`flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                  selectedType === 'backcover'
                    ? 'bg-blue-600 text-white shadow-glow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="truncate">Backcovers</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedType('screenguard')}
                className={`flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                  selectedType === 'screenguard'
                    ? 'bg-blue-600 text-white shadow-glow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="truncate">Screen Guards & Tempered</span>
              </button>
            </div>
          </div>

          {/* Phone Search Input Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3.5 sm:pl-4 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={phoneInput}
                onChange={(e) => setPhoneInput(e.target.value)}
                placeholder={
                  selectedType === 'backcover'
                    ? "Enter phone model (e.g. iPhone 15, S24...)"
                    : "Enter phone model for tempered screen guard..."
                }
                className="w-full pl-10 sm:pl-11 pr-4 py-3 sm:py-3.5 rounded-xl bg-black/50 border border-white/15 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
              />
            </div>

            <button
              type="submit"
              className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-blue-600 hover:bg-blue-500 text-white transition-all duration-200 shadow-glow-sm hover:shadow-glow-md flex items-center justify-center gap-2 whitespace-nowrap active:scale-[0.98]"
            >
              <span>Explore In-Store Stock</span>
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </button>
          </form>

          {/* Quick Click Suggestions */}
          <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-400 font-mono text-[11px]">Popular Phones:</span>
            {popularPhoneChips.map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => handleChipClick(chip)}
                className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-blue-600/20 text-slate-300 hover:text-blue-300 border border-white/10 hover:border-blue-500/30 transition-all text-xs"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* In-Store Guarantee Note */}
          <div className="mt-3 flex items-center gap-2 text-[11px] text-cyan-300/80">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Over 1,000+ ready covers and free machine-cut tempered screen fittings available offline!</span>
          </div>

        </div>

      </div>
    </section>
  );
};

