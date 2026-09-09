import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Eye, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/business';
import { GalleryPhoto } from '../types';

export const Gallery: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = useMemo(() => {
    return ['All', 'Fade', 'Cut', 'Beard', 'Craft', 'Shop'];
  }, []);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const handleOpenLightbox = (item: GalleryPhoto) => {
    const originalIdx = GALLERY_ITEMS.findIndex((g) => g.id === item.id);
    setSelectedPhotoIndex(originalIdx !== -1 ? originalIdx : 0);
  };

  const handleCloseLightbox = useCallback(() => {
    setSelectedPhotoIndex(null);
  }, []);

  const handleNext = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex + 1) % GALLERY_ITEMS.length);
  }, [selectedPhotoIndex]);

  const handlePrev = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex(
      (selectedPhotoIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
    );
  }, [selectedPhotoIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, handleCloseLightbox, handleNext, handlePrev]);

  // Lock scroll during lightbox
  useEffect(() => {
    if (selectedPhotoIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPhotoIndex]);

  const activePhoto: GalleryPhoto | null =
    selectedPhotoIndex !== null ? GALLERY_ITEMS[selectedPhotoIndex] : null;

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#F5F5F5] border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-zinc-200 rounded text-xs font-bold text-[#172D73] uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5 text-[#E32626]" />
            <span>Atmosphere &amp; Craftsmanship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#172D73] uppercase tracking-tight">
            BARBERSHOP GALLERY
          </h2>
          <div className="w-16 h-1 bg-[#E32626] mx-auto my-4"></div>
          <p className="text-base sm:text-lg text-zinc-600 font-normal">
            A visual showcase of clean fades, classic cuts, sharp beard lineups, and the authentic Barber Shop J.M. atmosphere.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                id={`gallery-filter-${cat.toLowerCase()}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#172D73] text-white shadow-sm'
                    : 'bg-white text-zinc-600 hover:text-black border border-zinc-200'
                }`}
              >
                {cat === 'All' ? 'All Photos' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className="group relative rounded-md overflow-hidden bg-zinc-900 border border-zinc-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer aspect-4/3"
            >
              <img
                src={item.url}
                alt={item.alt}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 filter contrast-105"
              />

              {/* Hover overlay with red accent */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1c4a]/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-5">
                <div className="flex justify-between items-start">
                  <span className="px-2.5 py-1 bg-[#E32626] text-white text-[11px] font-extrabold uppercase tracking-wider rounded-xs">
                    {item.category}
                  </span>
                  <span className="p-2 rounded-full bg-white/20 text-white backdrop-blur-xs">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>

                <div>
                  <h3 className="text-white font-black text-lg uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <div className="w-8 h-0.5 bg-[#E32626] my-1"></div>
                  <p className="text-xs text-zinc-300 line-clamp-1">{item.alt}</p>
                </div>
              </div>

              {/* Static bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#E32626] transition-colors"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 select-none animate-in fade-in duration-150"
        >
          {/* Close button */}
          <button
            type="button"
            id="close-lightbox-btn"
            onClick={handleCloseLightbox}
            className="absolute top-4 right-4 z-60 p-2.5 rounded-full bg-white/10 hover:bg-[#E32626] text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close Lightbox (Esc)"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            type="button"
            id="lightbox-prev-btn"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-60 p-3 rounded-full bg-white/10 hover:bg-[#E32626] text-white transition-colors cursor-pointer focus:outline-none"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            type="button"
            id="lightbox-next-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-60 p-3 rounded-full bg-white/10 hover:bg-[#E32626] text-white transition-colors cursor-pointer focus:outline-none"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-md overflow-hidden border-2 border-white/20 shadow-2xl bg-black">
              <img
                src={activePhoto.url}
                alt={activePhoto.alt}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto object-contain mx-auto"
              />
            </div>

            {/* Lightbox Caption */}
            <div className="mt-4 text-center text-white space-y-1 max-w-xl">
              <div className="flex items-center justify-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E32626] bg-white/10 px-2.5 py-0.5 rounded">
                  {activePhoto.category}
                </span>
                <span className="text-sm font-bold text-zinc-400">
                  {selectedPhotoIndex! + 1} / {GALLERY_ITEMS.length}
                </span>
              </div>
              <h4 className="text-lg font-black uppercase tracking-wide">
                {activePhoto.title}
              </h4>
              <p className="text-xs text-zinc-300 font-normal">{activePhoto.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
