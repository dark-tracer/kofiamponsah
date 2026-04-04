import { useState, useEffect, useCallback } from 'react';
import AdinkraDivider from './AdinkraDivider';
import Autoplay from 'embla-carousel-autoplay';
import { Maximize, X, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

import photo1 from '@/assets/gallery/photo1.jpg';
import photo2 from '@/assets/gallery/photo2.jpg';
import photo3 from '@/assets/gallery/photo3.jpg';
import photo4 from '@/assets/gallery/photo4.jpg';
import photo5 from '@/assets/gallery/photo5.jpg';
import photo6 from '@/assets/gallery/photo6.jpg';
import photo7 from '@/assets/gallery/photo7.jpg';
import photo8 from '@/assets/gallery/photo8.jpg';
import photo9 from '@/assets/gallery/photo9.jpg';
import photo10 from '@/assets/gallery/photo10.jpg';
import photo11 from '@/assets/gallery/photo11.jpg';

const photos = [
  { id: 1, src: photo1, alt: 'Graduation day with son' },
  { id: 2, src: photo2, alt: 'Family celebration' },
  { id: 3, src: photo3, alt: 'Portrait' },
  { id: 4, src: photo4, alt: 'With wife and newborn' },
  { id: 5, src: photo5, alt: 'Holding his child' },
  { id: 6, src: photo6, alt: 'With his wife' },
  { id: 7, src: photo7, alt: 'Studio portrait' },
  { id: 8, src: photo8, alt: 'With a friend' },
  { id: 9, src: photo9, alt: 'At his shop' },
  { id: 10, src: photo10, alt: 'At work' },
  { id: 11, src: photo11, alt: 'Family portrait' },
];

const GallerySection = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) => prev !== null ? (prev - 1 + photos.length) % photos.length : null);
  }, []);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) => prev !== null ? (prev + 1) % photos.length : null);
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxIndex, handlePrev, handleNext]);

  // Block right-click globally when lightbox is open
  useEffect(() => {
    if (lightboxIndex === null) return;
    const block = (e: Event) => e.preventDefault();
    document.addEventListener('contextmenu', block);
    return () => document.removeEventListener('contextmenu', block);
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="py-20 px-4 bg-charcoal scroll-mt-nav">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif-display text-gold text-center gold-glow mb-2">
          Mfonini
        </h2>
        <p className="text-center text-muted-foreground text-sm tracking-widest uppercase mb-8 font-body">
          Photo Gallery
        </p>

        <AdinkraDivider symbol="sankofa" />

        <div className="mt-8 px-12">
          <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]} className="w-full">
            <CarouselContent>
              {photos.map((photo, i) => (
                <CarouselItem key={photo.id} className="md:basis-1/2 lg:basis-1/3">
                  <div
                    className="w-full rounded-sm overflow-hidden border-2 border-gold-muted/30 hover:border-gold transition-all duration-500 group relative cursor-pointer hover-scale select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-auto object-contain animate-fade-in pointer-events-none"
                      loading="lazy"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button
                        onClick={() => setLightboxIndex(i)}
                        className="bg-black/60 rounded-full p-3 text-gold hover:text-gold-soft hover:bg-black/80 transition-all"
                        aria-label={`View full screen: ${photo.alt}`}
                      >
                        <Maximize className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-gold-muted/30 text-gold hover:bg-gold/10 hover:text-gold-soft" />
            <CarouselNext className="border-gold-muted/30 text-gold hover:bg-gold/10 hover:text-gold-soft" />
          </Carousel>
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center select-none"
          onClick={() => setLightboxIndex(null)}
          onContextMenu={(e) => e.preventDefault()}
        >
          {/* Watermark overlay to deter screenshots */}
          <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center opacity-[0.03]">
            <p className="text-white text-6xl font-bold rotate-[-30deg] whitespace-nowrap">
              In Loving Memory
            </p>
          </div>

          <button
            className="absolute top-4 right-4 z-20 text-gold text-3xl hover:text-gold-soft transition-colors bg-black/50 rounded-full p-2"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close fullscreen"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-gold hover:text-gold-soft bg-black/50 rounded-full p-2 transition-colors"
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          {/* Next */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-gold hover:text-gold-soft bg-black/50 rounded-full p-2 transition-colors"
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            aria-label="Next photo"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div
            className="max-w-4xl max-h-[90vh] w-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
            onDragStart={(e) => e.preventDefault()}
          >
            <img
              key={lightboxIndex}
              src={photos[lightboxIndex]?.src}
              alt={photos[lightboxIndex]?.alt}
              className="max-h-[85vh] max-w-full object-contain rounded-sm pointer-events-none animate-[lightbox-fade_0.4s_ease-out]"
              draggable={false}
            />
          </div>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground font-body text-sm z-20">
            {photos[lightboxIndex]?.alt} — {lightboxIndex + 1} / {photos.length}
          </p>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
