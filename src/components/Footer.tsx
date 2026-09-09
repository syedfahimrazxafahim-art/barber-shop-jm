import React from 'react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1435] text-white border-t-2 border-[#172D73]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand & Emblem */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30 flex-shrink-0 bg-white">
                <img
                  src={BUSINESS_INFO.logo}
                  alt="Barber Shop J.M. Official Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight uppercase block leading-none">
                  BARBER SHOP J.M.
                </span>
                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">
                  Brooklyn, NY
                </span>
              </div>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Classic American Barbershop with modern premium craft. Open 7 days a week.
            </p>
            {/* Facebook Link */}
            <div className="pt-1">
              <a
                href={BUSINESS_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-facebook-link"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#1877F2]/20 hover:bg-[#1877F2]/40 border border-[#1877F2]/40 rounded text-xs font-bold text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current text-[#1877F2]" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Follow on Facebook</span>
                <ExternalLink className="w-3 h-3 text-zinc-400" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium text-zinc-300">
              <li>
                <a href="#hero" className="hover:text-[#E32626] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#E32626] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#barbers" className="hover:text-[#E32626] transition-colors">
                  Barbers
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#E32626] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#E32626] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#E32626] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Address & Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
              Location &amp; Phone
            </h4>
            <div className="space-y-2.5 text-xs text-zinc-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E32626] flex-shrink-0 mt-0.5" />
                <span>
                  1808 76th St.<br />
                  Brooklyn, NY 11214
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-[#E32626] flex-shrink-0" />
                <a
                  href={BUSINESS_INFO.phone.tel}
                  className="font-bold text-white hover:text-[#E32626] transition-colors"
                >
                  {BUSINESS_INFO.phone.display}
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
              Hours of Operation
            </h4>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center gap-2 text-zinc-300">
                <Clock className="w-4 h-4 text-[#E32626] flex-shrink-0" />
                <span className="font-bold text-white">OPEN 7 DAYS A WEEK</span>
              </div>
              <div className="pl-6 text-sm font-extrabold text-[#E32626]">
                9:00 AM – 10:00 PM
              </div>
              <p className="pl-6 text-[11px] text-zinc-400">
                Monday through Sunday
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-3">
          <div>
            &copy; {currentYear} Barber Shop J.M. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>1808 76th St., Brooklyn, NY 11214</span>
            <span>•</span>
            <span>Phone: {BUSINESS_INFO.phone.display}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
