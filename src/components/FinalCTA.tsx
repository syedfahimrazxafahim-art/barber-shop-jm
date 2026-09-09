import React from 'react';
import { Calendar, Phone, Clock, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

interface FinalCTAProps {
  onBookClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onBookClick }) => {
  return (
    <section className="relative py-20 bg-[#0e1c4a] text-white overflow-hidden border-b border-[#172D73]">
      {/* Barber Pole Accent Top Stripe */}
      <div className="absolute top-0 left-0 right-0 h-1.5 barber-pole-thin opacity-90"></div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1435] via-[#0e1c4a] to-[#172D73]/90"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#E32626] bg-white shadow-xl">
            <img
              src={BUSINESS_INFO.logo}
              alt="Barber Shop J.M. Official Logo"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/10 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest text-[#E32626]">
            <span>Barber Shop J.M. • Brooklyn, NY</span>
          </div>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
          READY FOR YOUR FRESH CUT?
        </h2>

        <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto font-normal">
          Walk in or book your next appointment today.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            id="final-cta-book-now"
            onClick={onBookClick}
            className="w-full sm:w-auto px-9 py-4 bg-[#E32626] hover:bg-[#c41e1e] active:scale-98 text-white font-black text-base uppercase tracking-wider rounded-xs shadow-xl transition-all duration-150 cursor-pointer"
          >
            BOOK NOW
          </button>

          <a
            href={BUSINESS_INFO.phone.tel}
            id="final-cta-call-phone"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-base uppercase tracking-wider rounded-xs border border-white/20 transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#E32626]" />
            <span>CALL {BUSINESS_INFO.phone.display}</span>
          </a>
        </div>

        {/* Schedule & Address quick badges */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-zinc-300 font-medium">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#E32626]" />
            <span>Open 7 Days a Week: 9:00 AM – 10:00 PM</span>
          </span>
          <span className="text-zinc-600 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#E32626]" />
            <span>1808 76th St., Brooklyn, NY 11214</span>
          </span>
        </div>
      </div>
    </section>
  );
};
