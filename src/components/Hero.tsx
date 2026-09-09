import React from 'react';
import { Calendar, Clock, Phone, ArrowRight, ShieldCheck, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, FEATURED_ASSETS } from '../data/business';

interface HeroProps {
  onBookClick: () => void;
  onServicesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onServicesClick }) => {
  return (
    <section
      id="hero"
      className="relative bg-[#0e1c4a] text-white overflow-hidden border-b-4 border-[#E32626]"
    >
      {/* Barber Pole Decorative Ribbon Top Stripe */}
      <div className="h-1.5 w-full barber-pole-thin opacity-90"></div>

      {/* Background Decorative Pattern / Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1435] via-[#0e1c4a] to-[#172D73]/80 opacity-95"></div>
      
      {/* Subtle Geometric Overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Brand Logo & Location Tag */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs sm:text-sm font-semibold text-zinc-200 tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#E32626] animate-pulse"></span>
                <span>1808 76th St., Brooklyn, NY 11214</span>
                <span className="text-zinc-400">•</span>
                <span className="text-white font-bold">Open 7 Days (9 AM – 10 PM)</span>
              </div>

              <a
                href={BUSINESS_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-facebook-badge"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1877F2]/20 hover:bg-[#1877F2]/30 border border-[#1877F2]/40 rounded-full text-xs font-semibold text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current text-[#1877F2]" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Follow on Facebook</span>
                <ExternalLink className="w-3 h-3 text-zinc-300" />
              </a>
            </div>

            {/* Main Headline with Official Brand Identity */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <img
                  src={BUSINESS_INFO.logo}
                  alt="Barber Shop J.M. Official Logo"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#E32626] shadow-md object-cover bg-white flex-shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-[#E32626]">
                    Official Barbershop • Brooklyn, NY
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    BARBER SHOP J.M.
                  </h2>
                </div>
              </div>

              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white uppercase leading-[1.05]">
                LOOK SHARP. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-zinc-300">
                  FEEL CONFIDENT.
                </span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed">
              Professional cuts, clean fades, and classic barbering for everyone. Walk in or schedule your chair time.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                id="hero-book-appointment-cta"
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#E32626] hover:bg-[#c41e1e] active:scale-98 text-white font-extrabold text-base tracking-wider uppercase rounded-xs shadow-lg transition-all duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Calendar className="w-5 h-5" />
                <span>BOOK AN APPOINTMENT</span>
              </button>

              <button
                type="button"
                id="hero-view-services-cta"
                onClick={onServicesClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#172D73] hover:bg-[#23419c] text-white border border-white/20 font-bold text-base tracking-wide rounded-xs transition-all duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>VIEW OUR SERVICES</span>
                <ArrowRight className="w-4 h-4 text-[#E32626]" />
              </button>
            </div>

            {/* Quick Trust Highlights */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded bg-white/10 text-[#E32626]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 font-medium uppercase">Hours</div>
                  <div className="text-sm font-bold text-white">9 AM – 10 PM Daily</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded bg-white/10 text-[#E32626]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 font-medium uppercase">Direct Phone</div>
                  <a
                    href={BUSINESS_INFO.phone.tel}
                    className="text-sm font-bold text-white hover:text-[#E32626] transition-colors"
                  >
                    {BUSINESS_INFO.phone.display}
                  </a>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5">
                <div className="p-2 rounded bg-white/10 text-[#E32626]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 font-medium uppercase">Walk-Ins</div>
                  <div className="text-sm font-bold text-white">Always Welcomed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Frame with Red/Navy Border Accent */}
              <div className="relative rounded-lg overflow-hidden border-2 border-white/20 shadow-2xl bg-black">
                {/* Hero Barber Image (Using supplied high-resolution atmospheric image) */}
                <img
                  src={FEATURED_ASSETS.heroMain}
                  alt="Barber Shop J.M. interior and barber station in Brooklyn"
                  className="w-full h-[420px] sm:h-[500px] object-cover object-center filter contrast-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1435] via-transparent to-transparent opacity-80 pointer-events-none"></div>

                {/* Overlaid Barber Shop Badge with Official Logo */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded border-l-4 border-[#E32626] text-black shadow-lg">
                  <div className="flex items-center gap-3">
                    <img
                      src={BUSINESS_INFO.logo}
                      alt="Barber Shop J.M. Official Logo"
                      className="w-12 h-12 rounded-full border border-zinc-300 object-cover flex-shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-black text-sm sm:text-base text-[#172D73] uppercase tracking-wide">
                          BARBER SHOP J.M.
                        </h3>
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-[#172D73] text-white rounded uppercase tracking-wider">
                          Brooklyn, NY
                        </span>
                      </div>
                      <p className="text-xs text-zinc-600 font-medium mt-0.5">
                        Classic American Cuts &amp; Precision Fades
                      </p>
                    </div>
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-zinc-200 flex items-center justify-between text-[11px] text-zinc-600">
                    <span className="font-semibold text-[#E32626]">Open 7 Days (9 AM - 10 PM)</span>
                    <span>1808 76th St.</span>
                  </div>
                </div>
              </div>

              {/* Decorative Barber Pole Element */}
              <div className="hidden sm:block absolute -top-4 -right-4 w-6 h-24 barber-pole-border rounded-xs border-2 border-white shadow-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
