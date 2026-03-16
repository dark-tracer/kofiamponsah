import { useState } from 'react';
import AdinkraDivider from './AdinkraDivider';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

const placeholderPhotos = [
  { id: 1, alt: 'Family moment', placeholder: true },
  { id: 2, alt: 'Traditional ceremony', placeholder: true },
  { id: 3, alt: 'Personal moment', placeholder: true },
  { id: 4, alt: 'With loved ones', placeholder: true },
  { id: 5, alt: 'Celebration', placeholder: true },
  { id: 6, alt: 'Legacy', placeholder: true },
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
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {placeholderPhotos.map((photo, i) => (
                <CarouselItem key={photo.id} className="md:basis-1/2 lg:basis-1/3">
                  <button
                    onClick={() => setLightboxIndex(i)}
                    className="aspect-square w-full bg-muted rounded-sm overflow-hidden border-2 border-gold-muted/30 hover:border-gold transition-all duration-300 group relative cursor-pointer"
                    aria-label={`View photo: ${photo.alt}`}
                  >
                    <div className="w-full h-full flex items-center justify-center bg-charcoal-deep">
                      <div className="text-center p-4">
                        <svg className="w-8 h-8 mx-auto text-gold-soft/40 mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                        </svg>
                        <p className="text-muted-foreground text-xs font-body">{photo.alt}</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-[hsl(var(--gold))/0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-gold-muted/30 text-gold hover:bg-gold/10 hover:text-gold-soft" />
            <CarouselNext className="border-gold-muted/30 text-gold hover:bg-gold/10 hover:text-gold-soft" />
          </Carousel>
        </div>

        <p className="text-center text-muted-foreground text-xs mt-6 font-body italic">
          Replace these placeholders with your own photos
        </p>
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

          <div className="max-w-3xl w-full bg-charcoal rounded-sm p-8 text-center border border-gold-muted/30" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-video bg-charcoal-deep rounded-sm flex items-center justify-center mb-4">
              <p className="text-muted-foreground font-body text-sm">
                {placeholderPhotos[lightboxIndex]?.alt}
              </p>
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => setLightboxIndex(Math.max(0, lightboxIndex - 1))}
                className="text-gold hover:text-gold-soft font-body text-sm disabled:opacity-30"
                disabled={lightboxIndex === 0}
              >
                ← Previous
              </button>
              <button
                onClick={() => setLightboxIndex(Math.min(placeholderPhotos.length - 1, lightboxIndex + 1))}
                className="text-gold hover:text-gold-soft font-body text-sm disabled:opacity-30"
                disabled={lightboxIndex === placeholderPhotos.length - 1}
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
