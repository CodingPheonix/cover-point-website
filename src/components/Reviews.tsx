import React from 'react';
import { CUSTOMER_REVIEWS } from '../data/mockData';
import { Star, ShieldCheck, MessageSquare } from 'lucide-react';

export const Reviews: React.FC = () => {
  return (
    <section className="py-20 bg-[#0E0E14] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Store Customer Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Loved By Gurugram's <span className="text-blue-500">Tech Enthusiasts</span>
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Real feedback from verified walk-in customers who visited our Cyber Hub store.
          </p>
          
          {/* Average Rating Banner */}
          <div className="mt-4 inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <span className="font-bold text-white">4.9 / 5.0</span>
            <span className="text-slate-400 font-mono">(520+ Offline Google Reviews)</span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CUSTOMER_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#14141E] rounded-2xl p-5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:shadow-glow-sm flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & verified badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>

                  {review.verifiedWalkIn && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      <ShieldCheck className="w-3 h-3" />
                      Walk-in
                    </span>
                  )}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Device info */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-bold text-white">{review.author}</h4>
                    <p className="text-[11px] text-blue-400 font-mono">{review.device}</p>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">{review.date}</span>
                </div>
                <div className="mt-1.5 text-[10px] text-slate-400 truncate">
                  Purchased: {review.servicePurchased}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
