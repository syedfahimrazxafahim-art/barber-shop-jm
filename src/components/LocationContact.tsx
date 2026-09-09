import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const LocationContact: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#F5F5F5] border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-zinc-200 rounded text-xs font-bold text-[#172D73] uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#E32626]" />
            <span>Visit Us in Brooklyn</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#172D73] uppercase tracking-tight">
            LOCATION &amp; CONTACT
          </h2>
          <div className="w-16 h-1 bg-[#E32626] mx-auto my-4"></div>
          <p className="text-base sm:text-lg text-zinc-600 font-normal">
            Conveniently located on 76th Street in Brooklyn, NY. Walk-ins are always welcomed or reach us directly.
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-lg shadow-md border border-zinc-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Contact Details & CTAs */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-[#0e1c4a] text-white">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#E32626] flex-shrink-0 bg-white shadow-md">
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
                    <span className="text-[11px] text-zinc-300 font-semibold tracking-wider uppercase mt-0.5 block">
                      Brooklyn, New York
                    </span>
                  </div>
                </div>

                {/* Address Block */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded bg-white/10 text-[#E32626] flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                        Address
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-white mt-1">
                        1808 76th St.
                      </div>
                      <div className="text-lg font-bold text-zinc-200">
                        Brooklyn, NY 11214
                      </div>
                    </div>
                  </div>

                  {/* Phone Block */}
                  <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                    <div className="p-3 rounded bg-white/10 text-[#E32626] flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                        Phone Number
                      </div>
                      <a
                        href={BUSINESS_INFO.phone.tel}
                        id="contact-phone-link"
                        className="text-2xl sm:text-3xl font-black text-white hover:text-[#E32626] transition-colors mt-1 block"
                      >
                        {BUSINESS_INFO.phone.display}
                      </a>
                      <div className="text-xs text-zinc-400 mt-1">
                        Tap to call for chair availability or immediate inquiries
                      </div>
                    </div>
                  </div>

                  {/* Hours Block */}
                  <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                    <div className="p-3 rounded bg-white/10 text-[#E32626] flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                        Opening Schedule
                      </div>
                      <div className="text-lg font-bold text-white mt-1">
                        OPEN 7 DAYS A WEEK
                      </div>
                      <div className="text-sm font-semibold text-[#E32626]">
                        9:00 AM – 10:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Three Prominent Action Buttons */}
              <div className="pt-8 space-y-3">
                <a
                  href={BUSINESS_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-get-directions-btn"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 bg-[#E32626] hover:bg-[#c41e1e] active:scale-98 text-white font-extrabold text-sm uppercase tracking-wider rounded-xs shadow-lg transition-all duration-150 cursor-pointer"
                >
                  <Navigation className="w-5 h-5" />
                  <span>GET DIRECTIONS</span>
                </a>

                <a
                  href={BUSINESS_INFO.phone.tel}
                  id="contact-call-now-btn"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 bg-white/10 hover:bg-white/20 text-white font-bold text-sm uppercase tracking-wider rounded-xs border border-white/20 transition-all duration-150 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#E32626]" />
                  <span>CALL: {BUSINESS_INFO.phone.display}</span>
                </a>

                <a
                  href={BUSINESS_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-facebook-btn"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-6 bg-[#1877F2]/20 hover:bg-[#1877F2]/35 text-white font-bold text-sm uppercase tracking-wider rounded-xs border border-[#1877F2]/40 transition-all duration-150 cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current text-[#1877F2]" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>CONNECT ON FACEBOOK</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-300" />
                </a>
              </div>
            </div>

            {/* Right: Embedded Interactive Map */}
            <div className="lg:col-span-7 h-[420px] lg:h-auto min-h-[400px] relative bg-zinc-200">
              <iframe
                title="Barber Shop J.M. Location Map"
                src={BUSINESS_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[400px]"
              ></iframe>

              {/* Map Floating Card */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-md p-4 rounded shadow-lg border border-zinc-200 text-left max-w-xs">
                <div className="font-extrabold text-sm text-[#172D73] uppercase">
                  Barber Shop J.M.
                </div>
                <div className="text-xs text-zinc-700 mt-1 font-medium">
                  1808 76th St., Brooklyn, NY 11214
                </div>
                <a
                  href={BUSINESS_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#E32626] hover:underline mt-2"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
