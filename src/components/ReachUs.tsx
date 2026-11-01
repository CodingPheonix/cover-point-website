import React from 'react';
import { STORE_INFO } from '../data/mockData';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  Navigation, 
  Train, 
  Car, 
  ExternalLink 
} from 'lucide-react';
import { createPhoneCallLink } from '../services/catalogService';

export const ReachUs: React.FC = () => {
  const whatsappUrl = `https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(
    'Hi Cover Point! I am planning to visit your store at Mecheda Bus Stand. Could you share landmark directions?'
  )}`;

  return (
    <section id="reach-us" className="py-24 bg-[#0B0B10] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Store Coordinates</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Reach <span className="text-blue-500">Cover Point</span>
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Come visit us in person. Our experts are ready with live stock, laser fitting jigs, and express repair counters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Store Info, Phone, Timings & Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Address Card */}
            <div className="bg-[#12121A] rounded-2xl p-6 border border-white/10 hover:border-blue-500/40 transition-all">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Physical Store Address</h3>
                  <p className="mt-1 text-sm text-slate-300 font-medium leading-relaxed">
                    {STORE_INFO.address}
                  </p>
                  <p className="mt-1 text-xs text-blue-400 font-mono">
                    Landmark: {STORE_INFO.landmark}
                  </p>
                  <p className="text-xs text-slate-400">
                    {STORE_INFO.city} - {STORE_INFO.pincode}
                  </p>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-[#12121A] rounded-2xl p-6 border border-white/10 hover:border-blue-500/40 transition-all">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-600/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Store Operating Hours</h3>
                  <p className="mt-1 text-sm text-slate-300 font-medium">
                    {STORE_INFO.timings}
                  </p>
                  <p className="mt-1 text-xs text-cyan-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    Open All 7 Days — Walk-ins always welcome
                  </p>
                </div>
              </div>
            </div>

            {/* Railway & Bus Transit */}
            <div className="bg-[#12121A] rounded-2xl p-6 border border-white/10 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300">
                  <Train className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Mecheda Railway Station</p>
                  <p className="text-[11px] text-slate-400">Howrah - Kharagpur Line (2 Min Walk)</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300">
                  <Car className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Mecheda Central Bus Stand</p>
                  <p className="text-[11px] text-slate-400">Directly Opposite Bus Stand</p>
                </div>
              </div>
            </div>

            {/* Direct Connect Buttons (Call + WhatsApp) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={createPhoneCallLink()}
                className="py-3.5 px-4 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-glow-sm hover:shadow-glow-md transition-all flex items-center justify-center gap-2 group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Call {STORE_INFO.phone}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-4 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-glow-sm hover:shadow-glow-md transition-all flex items-center justify-center gap-2 group"
              >
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Message on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Interactive Google Map & Visual Location Preview */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-[#12121A] rounded-2xl border border-white/10 overflow-hidden flex-grow flex flex-col shadow-2xl relative">
              
              {/* Map header bar */}
              <div className="p-4 bg-[#161622] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-blue-500" />
                  <span className="w-3 h-3 rounded-full bg-cyan-400" />
                  <span className="w-3 h-3 rounded-full bg-white/40" />
                  <span className="ml-2 text-xs font-mono text-slate-300 font-semibold">
                    Live GPS Map • Mecheda Bus Stand
                  </span>
                </div>

                <a
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-white transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Embedded Interactive Map */}
              <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] bg-[#0A0A0E]">
                <iframe
                  title="Cover Point Store Location Map - Mecheda Bus Stand"
                  src="https://maps.google.com/maps?q=Mecheda%20Bus%20Stand&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                {/* Floating GPS Point Pin Callout */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 p-2 sm:p-3 rounded-xl bg-black/90 backdrop-blur-md border border-cyan-400/40 text-[11px] sm:text-xs shadow-2xl flex items-center gap-2 sm:gap-3 max-w-[200px] sm:max-w-none">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-cyan-400 animate-ping flex-shrink-0" />
                  <div>
                    <p className="font-bold text-white leading-tight">Cover Point Store</p>
                    <p className="text-[10px] sm:text-[11px] text-cyan-300">Opposite Mecheda Bus Stand</p>
                  </div>
                </div>

                {/* Bottom Navigation Button */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
                  <a
                    href={STORE_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-glow-sm flex items-center gap-1.5 sm:gap-2 active:scale-95 transition-transform"
                  >
                    <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span>Turn-by-Turn GPS</span>
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
