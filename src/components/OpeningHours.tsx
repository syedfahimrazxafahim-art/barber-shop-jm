import React from 'react';
import { Clock, Calendar, CheckCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

interface OpeningHoursProps {
  onBookClick: () => void;
}

export const OpeningHours: React.FC<OpeningHoursProps> = ({ onBookClick }) => {
  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  return (
    <section id="hours" className="py-14 sm:py-20 bg-[#F5F5F5] border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#0e1c4a] text-white rounded-lg shadow-xl overflow-hidden border border-[#172D73]">
          {/* Barber Pole Accent Top Bar */}
          <div className="h-2 w-full barber-pole-border"></div>

          <div className="p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Big Banner Header */}
              <div className="lg:col-span-5 space-y-4 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E32626] text-white rounded text-xs font-bold uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Consistent Daily Schedule</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight">
                  OPEN 7 DAYS <br />
                  <span className="text-[#E32626]">A WEEK</span>
                </h2>

                <div className="py-2">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide flex items-center gap-3">
                    <span className="bg-white/10 px-3 py-1.5 rounded border border-white/20">
                      9:00 AM – 10:00 PM
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-2">
                    Open every day, morning until night. Walk-ins welcomed or book an appointment online.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    id="hours-book-cta"
                    onClick={onBookClick}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#E32626] hover:bg-[#c41e1e] text-white font-extrabold text-sm uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>BOOK YOUR TIME</span>
                  </button>

                  <a
                    href={BUSINESS_INFO.phone.tel}
                    id="hours-call-cta"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xs border border-white/20 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#E32626]" />
                    <span>{BUSINESS_INFO.phone.display}</span>
                  </a>
                </div>
              </div>

              {/* Right Column: 7 Days Grid */}
              <div className="lg:col-span-7 bg-[#0a1435] p-5 sm:p-7 rounded-md border border-white/10">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                    Day
                  </span>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                    Hours (Open Daily)
                  </span>
                </div>

                <div className="divide-y divide-white/5 space-y-0.5">
                  {daysOfWeek.map((day) => (
                    <div
                      key={day}
                      className="py-2.5 px-2 flex items-center justify-between text-sm hover:bg-white/5 rounded transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#E32626] flex-shrink-0" />
                        <span className="font-semibold text-white">{day}</span>
                      </div>
                      <span className="font-mono text-xs sm:text-sm font-bold text-zinc-200 bg-white/5 px-2.5 py-1 rounded">
                        9:00 AM – 10:00 PM
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Currently Open Regular Hours
                  </span>
                  <span>1808 76th St., Brooklyn, NY</span>
                </div>
              </div>
            </div>
          </div>

          {/* Barber Pole Accent Bottom Bar */}
          <div className="h-1.5 w-full barber-pole-thin opacity-80"></div>
        </div>
      </div>
    </section>
  );
};
