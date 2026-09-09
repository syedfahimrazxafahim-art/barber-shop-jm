/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OpeningHours } from './components/OpeningHours';
import { Services } from './components/Services';
import { Barbers } from './components/Barbers';
import { About } from './components/About';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { BookingSection } from './components/BookingSection';
import { LocationContact } from './components/LocationContact';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { INITIAL_BARBERS, BUSINESS_INFO } from './data/business';
import { BarberProfile } from './types';
import { Phone, Calendar } from 'lucide-react';

export default function App() {
  const [barbers, setBarbers] = useState<BarberProfile[]>(() => {
    try {
      const saved = localStorage.getItem('jm_barbers_config');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return INITIAL_BARBERS;
  });

  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [selectedBarberId, setSelectedBarberId] = useState<string>('');
  const [activeSection, setActiveSection] = useState<string>('hero');

  const handleUpdateBarbers = (updated: BarberProfile[]) => {
    setBarbers(updated);
    try {
      localStorage.setItem('jm_barbers_config', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    scrollToBooking();
  };

  const handleSelectBarber = (barberId: string) => {
    setSelectedBarberId(barberId);
    scrollToBooking();
  };

  // Active section observer
  useEffect(() => {
    const sectionIds = [
      'hero',
      'services',
      'barbers',
      'about',
      'gallery',
      'reviews',
      'contact',
      'booking',
    ];

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-30% 0px -60% 0px',
    });

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col selection:bg-[#E32626] selection:text-white pb-16 sm:pb-0">
      {/* Sticky Header with Navigation */}
      <Navbar onBookClick={scrollToBooking} activeSection={activeSection} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onBookClick={scrollToBooking}
          onServicesClick={scrollToServices}
        />

        {/* Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* Meet Our Barbers Section */}
        <Barbers
          barbers={barbers}
          onSelectBarber={handleSelectBarber}
          onUpdateBarber={handleUpdateBarbers}
        />

        {/* Opening Hours Schedule Panel */}
        <OpeningHours onBookClick={scrollToBooking} />

        {/* About Section */}
        <About />

        {/* Why Barber Shop J.M. Pillars */}
        <WhyChooseUs />

        {/* Gallery with Lightbox */}
        <Gallery />

        {/* Reviews Carousel (Strict Sample Preview Disclosure) */}
        <Reviews />

        {/* Appointment Booking Section */}
        <BookingSection
          barbers={barbers}
          selectedServiceId={selectedServiceId}
          selectedBarberId={selectedBarberId}
          onClearSelections={() => {
            setSelectedServiceId('');
            setSelectedBarberId('');
          }}
        />

        {/* Location & Contact */}
        <LocationContact />

        {/* Final CTA Banner */}
        <FinalCTA onBookClick={scrollToBooking} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0e1c4a] border-t-2 border-[#E32626] p-2.5 flex items-center gap-2 shadow-2xl">
        <a
          href={BUSINESS_INFO.phone.tel}
          id="mobile-sticky-call-btn"
          className="flex-1 py-2.5 px-3 bg-white/10 hover:bg-white/20 text-white rounded text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-[#E32626]" />
          <span>Call Shop</span>
        </a>
        <button
          type="button"
          id="mobile-sticky-book-btn"
          onClick={scrollToBooking}
          className="flex-1 py-2.5 px-3 bg-[#E32626] hover:bg-[#c41e1e] text-white rounded text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md cursor-pointer transition-colors"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Now</span>
        </button>
      </div>
    </div>
  );
}
