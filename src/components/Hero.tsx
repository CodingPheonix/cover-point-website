import React, { useState } from 'react';
import { 
  MessageCircle, 
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Wrench, 
  CheckCircle2
} from 'lucide-react';
import { STORE_INFO } from '../data/mockData';

interface HeroProps {
  onScrollToReachUs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToReachUs }) => {
  const [activeCoverAngle, setActiveCoverAngle] = useState<'front' | 'angled' | 'rear'>('angled');
  const [isRotatingManually, setIsRotatingManually] = useState(false);

  const whatsappInquiryUrl = `https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(
    'Hi Cover Point! I saw your website and I would like to visit the store / inquire about backcovers and repairs.'
  )}`;

  return (
    <section className="relative min-h-[92vh] pt-28 sm:pt-32 pb-16 sm:pb-20 flex items-center overflow-hidden bg-radial-hero">
      {/* Decorative ambient tech grid & glow elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Cyan/Blue Neon Ambient Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[250px] sm:h-[350px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/10 to-transparent blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-48 sm:w-80 h-48 sm:h-80 bg-blue-700/10 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-56 sm:w-96 h-56 sm:h-96 bg-cyan-600/10 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Business Positioning & Contact Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-5 sm:space-y-6">
            
            {/* Store Status Chip */}
            <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-[11px] sm:text-xs font-semibold backdrop-blur-md shadow-glow-sm max-w-full">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping flex-shrink-0" />
              <span className="tracking-wide truncate">OFFLINE STORE • OPEN TODAY 10:30 AM - 9:30 PM</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-display leading-[1.15] sm:leading-[1.1] break-words">
              Engineered <span className="text-gradient-cyan">Protection.</span><br className="hidden sm:inline" />
              Uncompromising <span className="text-gradient-blue">Aesthetics.</span>
            </h1>

            {/* Sub-description emphasizing offline experience */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Step into Mecheda's premier offline destination for premium mobile cases, 
              bubble-free tempered glass machine fittings, custom printing, and certified on-the-spot smartphone repairs.
            </p>

            {/* Offline Footfall Promise Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-2 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2 sm:gap-2.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-[11px] sm:text-xs text-slate-300 font-medium">1,000+ Covers In-Stock</span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2 sm:gap-2.5">
                <Sparkles className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-[11px] sm:text-xs text-slate-300 font-medium">Free Screen Alignment</span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2 sm:gap-2.5 col-span-2 sm:col-span-1">
                <Wrench className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-[11px] sm:text-xs text-slate-300 font-medium">30-Min Fast Repairs</span>
              </div>
            </div>

            {/* Hero Action Buttons: Landing area buttons ONLY Chat on WhatsApp and Store Location */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-3.5">
              
              {/* WhatsApp Contact Button */}
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-glow-sm hover:shadow-glow-md transition-all flex items-center justify-center gap-2.5 group active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Store Location Button */}
              <button
                onClick={onScrollToReachUs}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm bg-blue-600 hover:bg-blue-500 text-white shadow-glow-sm hover:shadow-glow-md transition-all flex items-center justify-center gap-2.5 active:scale-[0.98]"
              >
                <MapPin className="w-4 h-4 text-white flex-shrink-0" />
                <span>Store Location</span>
              </button>

            </div>

            {/* Offline Footnote reminder */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
              <span className="text-left">We do not sell online — inspect and feel every texture in person at our physical store!</span>
            </div>

          </div>

          {/* Right Column: High-End Rolling Mobile Backcovers Showcase ($10,000 look) */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-0">
            
            {/* Glowing Backdrop Circle */}
            <div className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[400px] lg:h-[400px] rounded-full border border-blue-500/20 bg-gradient-to-b from-blue-900/10 to-transparent flex items-center justify-center relative">
              <div className="absolute inset-4 rounded-full border border-cyan-500/15 animate-[spin_30s_linear_infinite]" />
              <div className="absolute -inset-2 rounded-full border border-dashed border-blue-400/20 animate-[spin_40s_linear_infinite_reverse]" />
              
              {/* Rolling 3D Phone Cover Container */}
              <div className="perspective-1000 w-56 h-[380px] sm:w-64 sm:h-[440px] lg:w-72 lg:h-[480px] relative preserve-3d flex items-center justify-center">
                
                {/* 3D Phone Case with Rolling / Spin Dynamics */}
                <div 
                  className={`w-52 h-[360px] sm:w-60 sm:h-[420px] lg:w-64 lg:h-[450px] rounded-[36px] sm:rounded-[42px] p-2.5 sm:p-3 shadow-2xl transition-transform duration-700 preserve-3d cursor-pointer ${
                    isRotatingManually ? '' : 'animate-rolling-cover'
                  }`}
                  style={
                    isRotatingManually 
                      ? {
                          transform: 
                            activeCoverAngle === 'front' 
                              ? 'rotateY(0deg) rotateX(0deg)' 
                              : activeCoverAngle === 'rear' 
                                ? 'rotateY(180deg)' 
                                : 'rotateY(35deg) rotateX(-5deg)'
                        }
                      : {}
                  }
                  onClick={() => setIsRotatingManually(!isRotatingManually)}
                  title="Click to toggle continuous rolling or manual angle"
                >
                  {/* Outer Rim Armor */}
                  <div className="w-full h-full rounded-[30px] sm:rounded-[36px] bg-gradient-to-b from-[#1C1C28] via-[#101018] to-[#0A0A0E] border-2 border-cyan-400/40 shadow-glow-cyan p-2 sm:p-2.5 flex flex-col justify-between relative overflow-hidden">
                    
                    {/* Metallic Camera Island Highlight */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-black border border-white/20 p-1.5 sm:p-2 shadow-inner self-start ml-2 mt-2 relative">
                      <div className="grid grid-cols-2 gap-1 sm:gap-1.5 h-full">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-cyan-400/60 bg-black/80 flex items-center justify-center">
                          <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-cyan-500/50 shadow-glow-sm" />
                        </div>
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-blue-400/60 bg-black/80 flex items-center justify-center">
                          <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-blue-500/50 shadow-glow-sm" />
                        </div>
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-slate-600 bg-black/80 flex items-center justify-center">
                          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-slate-400/30" />
                        </div>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-amber-400/60 self-center justify-self-center blur-[1px]" />
                      </div>
                    </div>

                    {/* Integrated Magnetic Ring Graphic (MagSafe style) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-cyan-400/30 flex items-center justify-center pointer-events-none">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-dashed border-blue-500/40" />
                      <div className="absolute bottom-[-14px] sm:bottom-[-16px] w-1.5 sm:w-2 h-5 sm:h-6 bg-cyan-400/40 rounded-full" />
                    </div>

                    {/* Bottom Branding on Case */}
                    <div className="z-10 text-center pb-2.5 sm:pb-3">
                      <p className="text-[9px] sm:text-[10px] tracking-widest font-mono text-cyan-300 font-bold uppercase">
                        COVER POINT • TITANIUM SHIELD
                      </p>
                      <p className="text-[7px] sm:text-[8px] tracking-wider text-slate-400">
                        MIL-STD 810G IMPACT RATED
                      </p>
                    </div>

                    {/* Gloss / Light reflection sweep */}
                    <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 pointer-events-none animate-shimmer" />

                  </div>
                </div>

                {/* Floating Interactive Badge 1: Instant Alignment */}
                <div className="absolute -left-2 sm:-left-6 top-4 sm:top-8 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-[#161622]/95 border border-white/15 backdrop-blur-md shadow-2xl flex items-center gap-2 sm:gap-3 animate-float-slow max-w-[150px] sm:max-w-none">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-blue-600/30 border border-blue-500/50 flex items-center justify-center text-blue-400 flex-shrink-0">
                    <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] sm:text-xs font-bold text-white leading-tight">Laser Cut Fitting</p>
                    <p className="text-[9px] sm:text-[10px] text-cyan-300">0% Bubble Guarantee</p>
                  </div>
                </div>

                {/* Floating Interactive Badge 2: Express Repair */}
                <div className="absolute -right-2 sm:-right-6 bottom-10 sm:bottom-12 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-[#161622]/95 border border-white/15 backdrop-blur-md shadow-2xl flex items-center gap-2 sm:gap-3 animate-float-delayed max-w-[150px] sm:max-w-none">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-cyan-600/30 border border-cyan-500/50 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] sm:text-xs font-bold text-white leading-tight">30-Min Fast Repair</p>
                    <p className="text-[9px] sm:text-[10px] text-cyan-400">Genuine Spares Ready</p>
                  </div>
                </div>

                {/* Interactive Angle Switchers */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-1 p-1 rounded-xl bg-black/80 border border-white/10 backdrop-blur-md z-20 shadow-lg">
                  <button
                    onClick={() => {
                      setIsRotatingManually(false);
                    }}
                    className={`px-2 sm:px-2.5 py-1 rounded-lg text-[9px] sm:text-[10px] font-mono transition-colors ${
                      !isRotatingManually 
                        ? 'bg-blue-600 text-white font-bold' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Rolling
                  </button>
                  <button
                    onClick={() => {
                      setIsRotatingManually(true);
                      setActiveCoverAngle('front');
                    }}
                    className={`px-2 sm:px-2.5 py-1 rounded-lg text-[9px] sm:text-[10px] font-mono transition-colors ${
                      isRotatingManually && activeCoverAngle === 'front'
                        ? 'bg-blue-600 text-white font-bold' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Front
                  </button>
                  <button
                    onClick={() => {
                      setIsRotatingManually(true);
                      setActiveCoverAngle('angled');
                    }}
                    className={`px-2 sm:px-2.5 py-1 rounded-lg text-[9px] sm:text-[10px] font-mono transition-colors ${
                      isRotatingManually && activeCoverAngle === 'angled'
                        ? 'bg-blue-600 text-white font-bold' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    3D
                  </button>
                  <button
                    onClick={() => {
                      setIsRotatingManually(true);
                      setActiveCoverAngle('rear');
                    }}
                    className={`px-2 sm:px-2.5 py-1 rounded-lg text-[9px] sm:text-[10px] font-mono transition-colors ${
                      isRotatingManually && activeCoverAngle === 'rear'
                        ? 'bg-blue-600 text-white font-bold' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Rear
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
