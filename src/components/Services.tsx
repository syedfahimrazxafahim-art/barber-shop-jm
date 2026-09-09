import React from 'react';
import { Scissors, Sparkles, Wind, Flame, Layers, UserCheck, Shield, Calendar } from 'lucide-react';
import { SERVICES } from '../data/business';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getServiceIcon = (iconType: ServiceItem['icon']) => {
    switch (iconType) {
      case 'scissors':
        return <Scissors className="w-6 h-6 text-[#E32626]" />;
      case 'clippers':
        return <Layers className="w-6 h-6 text-[#172D73]" />;
      case 'beard':
        return <Shield className="w-6 h-6 text-[#E32626]" />;
      case 'razor':
        return <Flame className="w-6 h-6 text-[#172D73]" />;
      case 'comb':
        return <UserCheck className="w-6 h-6 text-[#E32626]" />;
      case 'styling':
        return <Wind className="w-6 h-6 text-[#172D73]" />;
      default:
        return <Scissors className="w-6 h-6 text-[#172D73]" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-100 border border-zinc-200 rounded text-xs font-bold text-[#172D73] uppercase tracking-wider mb-3">
            <Scissors className="w-3.5 h-3.5 text-[#E32626]" />
            <span>Classic & Modern Grooming</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#172D73] uppercase tracking-tight">
            OUR SERVICES
          </h2>
          <div className="w-16 h-1 bg-[#E32626] mx-auto my-4"></div>
          <p className="text-base sm:text-lg text-zinc-600 font-normal">
            Precision haircuts, tailored fades, beard sculpting, and traditional hot towel shaves. Select any service to request your appointment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group bg-white rounded-md border border-zinc-200 p-6 shadow-sm hover:shadow-md hover:border-[#172D73]/40 transition-all duration-200 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-zinc-100 group-hover:bg-[#E32626] transition-colors"></div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-sm bg-zinc-50 border border-zinc-200 flex items-center justify-center group-hover:bg-red-50 group-hover:border-red-200 transition-colors">
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="text-xs font-bold text-zinc-400 font-mono">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-[#111111] uppercase tracking-tight group-hover:text-[#172D73] transition-colors">
                  {service.title}
                </h3>

                <p className="mt-2.5 text-sm text-zinc-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-zinc-500">
                  Estimated: {service.duration || '30 mins'}
                </span>

                <button
                  type="button"
                  id={`book-service-${service.id}`}
                  onClick={() => onSelectService(service.id)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white border border-[#172D73] hover:bg-[#E32626] hover:border-[#E32626] hover:text-white text-[#172D73] text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>BOOK THIS SERVICE</span>
                </button>
              </div>
            </div>
          ))}

          {/* Complimentary Service Card / Walk-in Notice */}
          <div className="bg-[#0e1c4a] text-white rounded-md border border-[#172D73] p-6 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 barber-pole-thin"></div>
            <div>
              <div className="w-12 h-12 rounded-sm bg-white/10 flex items-center justify-center text-[#E32626] mb-4">
                <Sparkles className="w-6 h-6 text-[#E32626]" />
              </div>
              <h3 className="text-xl font-extrabold text-white uppercase tracking-tight">
                WALK-INS WELCOMED
              </h3>
              <p className="mt-2.5 text-sm text-zinc-300 leading-relaxed">
                Need a cut today? Walk into our shop at 1808 76th St., Brooklyn. Open 7 days a week from 9:00 AM to 10:00 PM.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-semibold text-zinc-400">No Wait Guarantee</span>
              <a
                href="tel:19295920764"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#E32626] hover:bg-[#c41e1e] text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
              >
                CALL 929-592-0764
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
