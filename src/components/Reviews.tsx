import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Play, Pause, MessageSquare } from 'lucide-react';
import { SAMPLE_REVIEWS } from '../data/business';

export const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Responsive items per view: Desktop 3, Tablet 2, Mobile 1
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.max(1, SAMPLE_REVIEWS.length - itemsPerView + 1);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1 >= totalPages ? 0 : prev + 1));
  }, [totalPages]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? totalPages - 1 : prev - 1));
  }, [totalPages]);

  // Autoplay with tab visibility, hover, focus, and reduced-motion checks
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion || !isPlaying || isHovered || isFocused) {
      return;
    }

    const interval = setInterval(() => {
      if (document.visibilityState === 'visible') {
        nextSlide();
      }
    }, 5500);

    return () => clearInterval(interval);
  }, [isPlaying, isHovered, isFocused, nextSlide]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="reviews"
      className="py-16 sm:py-24 bg-white border-b border-zinc-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-100 border border-zinc-200 rounded text-xs font-bold text-[#172D73] uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#E32626]" />
            <span>Client Feedback Preview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#172D73] uppercase tracking-tight">
            COMMUNITY REVIEWS
          </h2>
          <div className="w-16 h-1 bg-[#E32626] mx-auto my-4"></div>

          {/* Strict Notice as instructed */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-200 rounded text-xs font-semibold text-[#E32626]">
            <span>SAMPLE REVIEWS — PREVIEW CONTENT</span>
          </div>
          <p className="text-xs text-zinc-500 mt-2">
            *Placeholder reviews illustrating layout structure until verified client feedback is integrated.
          </p>
        </div>

        {/* Carousel Viewport */}
        <div
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {SAMPLE_REVIEWS.map((review) => (
              <div
                key={review.id}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="bg-[#F5F5F5] border border-zinc-200 rounded-md p-6 sm:p-7 h-full flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow relative">
                  <div>
                    {/* Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-red-100 text-[#E32626] rounded">
                        {review.label}
                      </span>
                      {/* Red Star Accents */}
                      <div className="flex items-center gap-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-[#E32626] text-[#E32626]"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Quote text */}
                    <p className="text-sm sm:text-base text-[#111111] italic leading-relaxed font-normal">
                      &ldquo;{review.quote}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-200/80">
                    <div className="text-xs font-bold text-[#172D73] uppercase tracking-wide">
                      Barber Shop J.M. Client
                    </div>
                    <div className="text-[11px] text-zinc-500 mt-0.5">
                      {review.clientContext}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slider Controls & Pagination */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-100">
          {/* Autoplay status and pause button */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-semibold transition-colors cursor-pointer"
              aria-label={isPlaying ? 'Pause review autoplay' : 'Play review autoplay'}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#E32626]" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-[#172D73]" />
                  <span>Play</span>
                </>
              )}
            </button>
            <span className="text-xs text-zinc-500">
              {isPlaying ? 'Auto-advancing' : 'Paused'}
            </span>
          </div>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide page ${i + 1}`}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  currentIndex === i
                    ? 'w-8 bg-[#E32626]'
                    : 'w-2.5 bg-zinc-300 hover:bg-zinc-400'
                }`}
              />
            ))}
          </div>

          {/* Prev / Next Arrows */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              id="reviews-prev-btn"
              onClick={prevSlide}
              aria-label="Previous review"
              className="p-2 rounded border border-zinc-300 hover:bg-[#172D73] hover:text-white hover:border-[#172D73] text-[#172D73] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              id="reviews-next-btn"
              onClick={nextSlide}
              aria-label="Next review"
              className="p-2 rounded border border-zinc-300 hover:bg-[#172D73] hover:text-white hover:border-[#172D73] text-[#172D73] transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
