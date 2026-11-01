import React from 'react';
import { 
  Store, 
  Sparkles, 
  ShieldCheck, 
  Printer, 
  Wrench, 
  MapPin, 
  ArrowRight 
} from 'lucide-react';
import { STORE_INFO } from '../data/mockData';

interface ShopStoryProps {
  onScrollToReachUs: () => void;
}

export const ShopStory: React.FC<ShopStoryProps> = ({ onScrollToReachUs }) => {
  const storeHighlights = [
    {
      icon: Store,
      title: "Real Touch & Feel Inspection",
      description: "Why gamble with online photos? Feel genuine Italian leather, authentic aramid weave, and matte grip in your hand before paying.",
      badge: "Zero Guesswork"
    },
    {
      icon: Sparkles,
      title: "Free Machine-Assisted Screen Fitting",
      description: "Tired of bubbles and dust under your screen protector? Our store technicians use ultrasonic air-cleaning and precision alignment jigs in 3 minutes.",
      badge: "0% Bubbles"
    },
    {
      icon: Printer,
      title: "Instant 20-Min Custom Printing",
      description: "Bring any family photo, anime art, company logo, or personalized monogram. We print it on tempered glass or matte hybrid cases on the spot.",
      badge: "Ready in 20 Mins"
    },
    {
      icon: Wrench,
      title: "Transparent Front-Counter Repairs",
      description: "Watch certified engineers repair your screen or replace battery right in front of you. 100% data privacy and genuine tested parts guaranteed.",
      badge: "In-Person Repair"
    }
  ];

  return (
    <section className="py-24 bg-[#0B0B10] border-t border-white/5 relative overflow-hidden">
      {/* Background Tech Glow */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Store className="w-3.5 h-3.5" />
            <span>The Offline Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Why Shop In-Person at <span className="text-blue-500">Cover Point?</span>
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed font-light">
            We intentionally choose not to sell online so we can provide unmatched offline perfection. 
            No 4-day shipping delays, no incorrect model deliveries, and zero bubble frustration.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {storeHighlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#12121A] rounded-2xl p-6 border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:shadow-glow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-cyan-300 border border-blue-500/20">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs font-medium text-slate-400 group-hover:text-cyan-400 transition-colors">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>Cover Point Store Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Address & Visit CTA */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-blue-950/60 via-[#161622] to-cyan-950/40 border border-blue-500/20 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-glow-sm">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>Visit Us at Cyber Hub Galleria</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              {STORE_INFO.address} • {STORE_INFO.timings}
            </p>
          </div>

          <button
            onClick={onScrollToReachUs}
            className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-blue-600 hover:bg-blue-500 text-white shadow-glow-sm hover:shadow-glow-md transition-all flex items-center gap-2 whitespace-nowrap"
          >
            <span>Get Directions & Map</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
