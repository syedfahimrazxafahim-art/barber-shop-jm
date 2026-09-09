import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Clock, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

interface NavbarProps {
  onBookClick: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Escape to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Barbers', href: '#barbers' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Announcement Strip */}
      <div className="bg-[#0e1c4a] text-white text-xs border-b border-[#172D73] py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center tracking-wide font-medium">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Clock className="w-3.5 h-3.5 text-[#E32626]" />
              <strong className="text-white">OPEN 7 DAYS:</strong> 9:00 AM – 10:00 PM
            </span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-[#E32626]" />
              1808 76th St., Brooklyn, NY 11214
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={BUSINESS_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-top-facebook"
              className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-[#1877F2] fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook</span>
            </a>
            <span className="text-zinc-500">|</span>
            <a
              href={BUSINESS_INFO.phone.tel}
              id="nav-top-phone"
              className="flex items-center gap-1.5 text-white hover:text-[#E32626] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E32626]" />
              <span>Call: {BUSINESS_INFO.phone.display}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-zinc-200 py-2.5'
            : 'bg-white border-b border-zinc-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            id="navbar-brand-logo"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#172D73] rounded p-1"
          >
            {/* Official Brand Logo */}
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#172D73] shadow-sm flex-shrink-0 bg-white">
              <img
                src={BUSINESS_INFO.logo}
                alt="Barber Shop J.M. Official Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#172D73] leading-none group-hover:text-[#E32626] transition-colors">
                BARBER SHOP J.M.
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#111111] uppercase mt-0.5">
                Brooklyn • New York
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  id={`nav-link-${link.label.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-1.5 text-sm font-semibold tracking-wide transition-colors duration-150 rounded-md ${
                    isActive
                      ? 'text-[#E32626] bg-red-50/80 font-bold'
                      : 'text-[#172D73] hover:text-[#E32626] hover:bg-zinc-50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA & Facebook Link */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={BUSINESS_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-facebook-icon-btn"
              aria-label="Visit Barber Shop J.M. on Facebook"
              className="p-2 text-[#1877F2] hover:bg-blue-50 rounded-full border border-zinc-200 transition-colors"
              title="Follow us on Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href={BUSINESS_INFO.phone.tel}
              id="nav-call-btn"
              className="px-3 py-2 text-xs font-bold text-[#172D73] hover:text-[#E32626] flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E32626]" />
              {BUSINESS_INFO.phone.display}
            </a>
            <button
              type="button"
              id="nav-book-now-button"
              onClick={onBookClick}
              className="bg-[#E32626] hover:bg-[#c41e1e] active:scale-98 text-white font-bold text-sm tracking-wider uppercase px-5 py-2.5 rounded-sm shadow-sm transition-all duration-150 flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#172D73]"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK NOW</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={BUSINESS_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              id="mobile-nav-fb-btn"
              aria-label="Facebook"
              className="p-2 text-[#1877F2] hover:bg-zinc-100 rounded-md"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <button
              type="button"
              id="mobile-quick-book-btn"
              onClick={onBookClick}
              className="bg-[#E32626] hover:bg-[#c41e1e] text-white font-bold text-xs uppercase px-3 py-1.5 rounded-sm shadow-xs"
            >
              BOOK
            </button>
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              className="p-2 text-[#172D73] hover:text-[#E32626] focus:outline-none focus:ring-2 focus:ring-[#172D73] rounded-md"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen 100dvh Mobile Navigation Overlay */}
      {isOpen && (
        <div
          id="mobile-menu-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 bg-[#0e1c4a] text-white flex flex-col justify-between h-[100dvh] w-full overflow-y-auto animate-in fade-in duration-200"
        >
          {/* Top Bar inside Overlay */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#172D73]/60">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white/40 flex-shrink-0 bg-white shadow-sm">
                <img
                  src={BUSINESS_INFO.logo}
                  alt="Barber Shop J.M. Official Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                BARBER SHOP J.M.
              </span>
            </div>
            <button
              type="button"
              id="close-mobile-menu-btn"
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md text-zinc-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Links List */}
          <div className="flex-1 px-6 py-6 flex flex-col justify-center space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  id={`mobile-nav-${link.label.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`block py-3 px-4 text-2xl font-bold rounded-md transition-colors ${
                    isActive
                      ? 'text-[#E32626] bg-white/10 pl-6 border-l-4 border-[#E32626]'
                      : 'text-white hover:text-[#E32626] hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Bottom Actions */}
          <div className="p-6 border-t border-[#172D73]/60 bg-[#0a1435] space-y-3">
            <button
              type="button"
              id="mobile-menu-book-btn"
              onClick={() => {
                setIsOpen(false);
                onBookClick();
              }}
              className="w-full bg-[#E32626] hover:bg-[#c41e1e] text-white font-extrabold py-3.5 rounded-sm uppercase tracking-wider text-base shadow-lg transition-transform active:scale-98 cursor-pointer"
            >
              BOOK AN APPOINTMENT
            </button>

            <a
              href={BUSINESS_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              id="mobile-menu-facebook-link"
              className="w-full py-2.5 px-4 bg-[#1877F2]/20 hover:bg-[#1877F2]/30 border border-[#1877F2]/40 rounded text-sm font-semibold flex items-center justify-center gap-2 text-white transition-colors"
            >
              <svg className="w-4 h-4 fill-current text-[#1877F2]" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Follow on Facebook</span>
            </a>

            <div className="grid grid-cols-2 gap-2.5 text-center">
              <a
                href={BUSINESS_INFO.phone.tel}
                id="mobile-menu-call-link"
                className="py-2.5 px-3 bg-white/10 hover:bg-white/20 rounded text-xs font-semibold flex items-center justify-center gap-1.5 text-white"
              >
                <Phone className="w-3.5 h-3.5 text-[#E32626]" />
                <span>Call Now</span>
              </a>
              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="mobile-menu-directions-link"
                className="py-2.5 px-3 bg-white/10 hover:bg-white/20 rounded text-xs font-semibold flex items-center justify-center gap-1.5 text-white"
              >
                <MapPin className="w-3.5 h-3.5 text-[#E32626]" />
                <span>Directions</span>
              </a>
            </div>

            <p className="text-center text-[11px] text-zinc-400 pt-1">
              Open 7 Days a Week • 9:00 AM – 10:00 PM
            </p>
          </div>
        </div>
      )}
    </>
  );
};
