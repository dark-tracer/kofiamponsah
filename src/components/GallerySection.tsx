import { useState } from 'react';
import AdinkraDivider from './AdinkraDivider';
import Autoplay from 'embla-carousel-autoplay';
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
                  <button
                    onClick={() => setLightboxIndex(i)}
                    className="w-full rounded-sm overflow-hidden border-2 border-gold-muted/30 hover:border-gold transition-all duration-500 group relative cursor-pointer hover-scale"
                    aria-label={`View photo: ${photo.alt}`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-auto object-contain animate-fade-in"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-gold-muted/30 text-gold hover:bg-gold/10 hover:text-gold-soft" />
            <CarouselNext className="border-gold-muted/30 text-gold hover:bg-gold/10 hover:text-gold-soft" />
          </Carousel>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-4 right-4 text-gold text-3xl hover:text-gold-soft transition-colors"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close lightbox"
          >
            ×
          </button>

          <div className="max-w-3xl w-full bg-charcoal rounded-sm p-4 border border-gold-muted/30" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-center mb-4">
              <img
                src={photos[lightboxIndex]?.src}
                alt={photos[lightboxIndex]?.alt}
                className="max-h-[70vh] w-auto rounded-sm object-contain"
              />
            </div>
            <p className="text-center text-muted-foreground font-body text-sm mb-4">
              {photos[lightboxIndex]?.alt}
            </p>
            <div className="flex justify-between">
              <button
                onClick={() => setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length)}
                className="text-gold hover:text-gold-soft font-body text-sm"
              >
                ← Previous
              </button>
              <button
                onClick={() => setLightboxIndex((lightboxIndex + 1) % photos.length)}
                className="text-gold hover:text-gold-soft font-body text-sm"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
