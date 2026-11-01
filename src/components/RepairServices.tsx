import React from 'react';
import { REPAIR_SERVICES, STORE_INFO } from '../data/mockData';
import { 
  Wrench, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Smartphone, 
  BatteryCharging, 
  Zap, 
  Camera, 
  Droplets,
  MessageCircle,
  Phone
} from 'lucide-react';
import { createPhoneCallLink } from '../services/catalogService';

export const RepairServices: React.FC = () => {
  // Helper to map icon name to Lucide Icon
  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Smartphone':
        return <Smartphone className="w-5 h-5" />;
      case 'BatteryCharging':
        return <BatteryCharging className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Camera':
        return <Camera className="w-5 h-5" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5" />;
      default:
        return <Wrench className="w-5 h-5" />;
    }
  };

  return (
    <section id="repair-services" className="py-24 bg-[#0B0B10] border-t border-white/5 relative overflow-hidden">
      {/* Tech Grid Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Wrench className="w-3.5 h-3.5 text-cyan-400" />
              <span>Certified Express Lab</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              On-The-Spot <span className="text-blue-500">Phone Repairing</span>
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-xl">
              Don't leave your phone for days. Watch our technicians diagnose and repair original screens, batteries, and charging ports within 30 minutes.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono text-cyan-400">Technicians On-Duty at Mecheda Store</span>
          </div>
        </div>

        {/* Repair Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REPAIR_SERVICES.map((service) => {
            const repairWhatsAppUrl = `https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(
              `Hi Cover Point! I need a repair quote for: ${service.title}. Could you let me know estimated cost and time?`
            )}`;

            return (
              <div
                key={service.id}
                className="bg-[#12121A] rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-glow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-white/5 text-cyan-300 border border-white/10 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-cyan-400" />
                      {service.duration}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="text-slate-400">Starting at</span>
                    <span className="text-base font-extrabold text-white">
                      ₹{service.priceStartingAt}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] text-cyan-400 font-medium flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                      {service.warranty}
                    </span>

                    <a
                      href={repairWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600/20 hover:bg-blue-600 text-cyan-300 hover:text-white border border-cyan-500/30 transition-all flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Book Slot</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Repair Callout Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-900/30 via-[#141420] to-blue-950/40 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Need a Custom or Urgent Diagnostic?</span>
            </h4>
            <p className="text-xs text-slate-400">
              Walk right in without appointment or call our lead technician directly for quick troubleshooting.
            </p>
          </div>

          <a
            href={createPhoneCallLink()}
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-glow-sm transition-all flex items-center gap-2 whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Lab Technician</span>
          </a>
        </div>

      </div>
    </section>
  );
};

