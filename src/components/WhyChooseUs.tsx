import React from 'react';
import { WHY_US_PILLARS } from '../data/business';
import { CheckCircle } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#0e1c4a] text-white relative overflow-hidden border-b border-[#172D73]">
      {/* Subtle background barber accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 barber-pole-thin opacity-85"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 text-left">
          <span className="text-xs font-bold text-[#E32626] uppercase tracking-widest">
            The J.M. Standard
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mt-1">
            WHY BARBER SHOP J.M.
          </h2>
          <div className="w-16 h-1 bg-[#E32626] my-4"></div>
          <p className="text-base sm:text-lg text-zinc-300 font-normal">
            Rooted in classic American barbershop principles with an unwavering focus on clean, consistent execution for every client.
          </p>
        </div>

        {/* Benefits Grid - Large Typography & Red/Navy Accent Lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {WHY_US_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="relative p-6 sm:p-8 bg-[#0a1435] rounded-md border-l-4 border-[#E32626] border-y border-r border-white/10 hover:border-white/20 transition-all duration-200 group"
            >
              <div className="flex items-start justify-between">
                <span className="text-3xl sm:text-4xl font-black text-white/20 group-hover:text-[#E32626] transition-colors font-mono">
                  0{idx + 1}
                </span>
                <CheckCircle className="w-5 h-5 text-[#E32626]" />
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide mt-3 group-hover:text-zinc-100 transition-colors">
                {pillar.title}
              </h3>

              <div className="w-10 h-0.5 bg-[#172D73] group-hover:bg-[#E32626] my-3 transition-colors"></div>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
