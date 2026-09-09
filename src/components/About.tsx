import React from 'react';
import { Scissors, Sparkles, HeartHandshake, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO, FEATURED_ASSETS } from '../data/business';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authentic Shop Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border-2 border-zinc-200 shadow-lg bg-zinc-900">
              <img
                src={FEATURED_ASSETS.aboutBanner}
                alt="Barber Shop J.M. official studio presentation in Brooklyn, NY"
                className="w-full h-[400px] sm:h-[460px] object-cover object-center filter contrast-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Overlay Card with Logo */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-xs rounded border-l-4 border-[#E32626] text-[#111111] shadow-md">
                <div className="flex items-center gap-3">
                  <img
                    src={BUSINESS_INFO.logo}
                    alt="Barber Shop J.M. Official Logo"
                    className="w-10 h-10 rounded-full border border-zinc-300 object-cover flex-shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-[#172D73] uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5 text-[#E32626]" />
                      <span>Brooklyn, New York</span>
                    </div>
                    <div className="text-sm font-extrabold text-[#111111] uppercase mt-0.5">
                      1808 76th St., Brooklyn, NY 11214
                    </div>
                  </div>
                </div>
                <div className="text-xs text-zinc-600 mt-2 pt-2 border-t border-zinc-200 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#172D73]" />
                    <span>Open 7 Days • 9 AM – 10 PM</span>
                  </span>
                  <span className="font-bold text-[#E32626]">Walk-Ins Welcomed</span>
                </div>
              </div>
            </div>

            {/* Barber Pole Accent side ribbon */}
            <div className="hidden sm:block absolute -bottom-4 -left-4 w-5 h-20 barber-pole-thin rounded-xs border border-zinc-300 shadow-md"></div>
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-100 border border-zinc-200 rounded text-xs font-bold text-[#172D73] uppercase tracking-wider">
              <Scissors className="w-3.5 h-3.5 text-[#E32626]" />
              <span>About Our Shop</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#172D73] uppercase tracking-tight leading-tight">
              CLASSIC AMERICAN BARBERSHOP <br />
              <span className="text-[#E32626]">&amp; MODERN CRAFT</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-zinc-700 leading-relaxed">
              <p>
                <strong>Barber Shop J.M.</strong> is a neighborhood barbershop in Brooklyn, New York, bringing together classic barbering traditions with a clean, contemporary atmosphere. We specialize in precision haircuts, skin fades, beard sculpting, and hot towel straight-razor shaves.
              </p>
              <p>
                Whether you need a weekly skin fade maintenance, a complete beard trim and lineup, or a patient haircut for your child, our chairs are dedicated to meticulous craftsmanship and welcoming service for everyone.
              </p>
            </div>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded border border-zinc-200 bg-zinc-50/70 hover:border-[#172D73]/30 transition-colors">
                <div className="w-8 h-8 rounded bg-red-50 text-[#E32626] flex items-center justify-center mb-2.5">
                  <Scissors className="w-4 h-4" />
                </div>
                <h3 className="font-extrabold text-sm text-[#111111] uppercase tracking-wide">
                  Classic Cuts
                </h3>
                <p className="text-xs text-zinc-600 mt-1">
                  Time-honored scissors and clippers technique.
                </p>
              </div>

              <div className="p-4 rounded border border-zinc-200 bg-zinc-50/70 hover:border-[#172D73]/30 transition-colors">
                <div className="w-8 h-8 rounded bg-blue-50 text-[#172D73] flex items-center justify-center mb-2.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-extrabold text-sm text-[#111111] uppercase tracking-wide">
                  Modern Styles
                </h3>
                <p className="text-xs text-zinc-600 mt-1">
                  Skin fades, sharp tapers, and texturing.
                </p>
              </div>

              <div className="p-4 rounded border border-zinc-200 bg-zinc-50/70 hover:border-[#172D73]/30 transition-colors">
                <div className="w-8 h-8 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2.5">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h3 className="font-extrabold text-sm text-[#111111] uppercase tracking-wide">
                  Welcoming Care
                </h3>
                <p className="text-xs text-zinc-600 mt-1">
                  Friendly atmosphere open 7 days a week.
                </p>
              </div>
            </div>

            {/* Direct Contact strip */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={BUSINESS_INFO.phone.tel}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#172D73] hover:bg-[#0e1c4a] text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
              >
                <span>CALL: {BUSINESS_INFO.phone.display}</span>
              </a>
              <a
                href={BUSINESS_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1877F2]/10 hover:bg-[#1877F2]/20 border border-[#1877F2]/30 text-[#1877F2] text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Connect on Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
