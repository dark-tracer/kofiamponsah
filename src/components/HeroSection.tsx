import portraitPlaceholder from '@/assets/portrait-placeholder.jpg';
import AdinkraFloating from './AdinkraDecorations';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative bg-charcoal-deep px-4 pt-20 overflow-hidden">
      {/* Subtle dark texture overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,215,0,0.03) 20px, rgba(255,215,0,0.03) 40px)`
      }} />

      {/* Decorative Adinkra symbols */}
      <AdinkraFloating symbol="gye-nyame" className="absolute top-24 left-6 w-16 h-16 text-[hsl(var(--gold-muted))] opacity-[0.07] md:w-24 md:h-24 md:left-12" />
      <AdinkraFloating symbol="adinkrahene" className="absolute top-32 right-6 w-14 h-14 text-[hsl(var(--gold-muted))] opacity-[0.07] md:w-20 md:h-20 md:right-16" />
      <AdinkraFloating symbol="dwennimmen" className="absolute bottom-20 left-8 w-12 h-12 text-[hsl(var(--gold-muted))] opacity-[0.06] md:w-16 md:h-16 md:left-20" />
      <AdinkraFloating symbol="funtunfunefu" className="absolute bottom-32 right-10 w-14 h-14 text-[hsl(var(--gold-muted))] opacity-[0.06] md:w-18 md:h-18 md:right-24" />
      <AdinkraFloating symbol="gye-nyame" className="absolute top-1/2 left-4 w-10 h-10 text-[hsl(var(--gold-muted))] opacity-[0.05] md:w-14 md:h-14" />
      <AdinkraFloating symbol="ese-ne-tekrema" className="absolute top-1/2 right-4 w-10 h-10 text-[hsl(var(--gold-muted))] opacity-[0.05] md:w-14 md:h-14" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        {/* Portrait */}
        <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-gold-muted shadow-2xl mb-8 relative">
          <img
            src={portraitPlaceholder}
            alt="Portrait of the deceased"
            className="w-full h-full object-cover" />

          <div className="absolute inset-0 rounded-full ring-2 ring-inset ring-[hsl(var(--gold))/0.3]" />
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-serif-display text-gold gold-glow tracking-wide leading-tight mb-4">Kofi Duffour Amponsah

        </h1>

        {/* Years */}
        <p className="text-xl md:text-2xl text-gold-soft font-serif-display tracking-[0.3em] mb-6">
          1960 — 2025
        </p>

        {/* Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent mb-6" />

        <p className="text-lg md:text-xl font-serif-display italic text-gold-soft gold-glow mb-2">
          "Sleep well, Beloved"
        </p>
      </div>

      {/* Kente border at bottom */}
      <div className="absolute bottom-0 left-0 right-0 kente-border-thick" />
    </section>);

};

export default HeroSection;