import portraitPlaceholder from '@/assets/portrait-placeholder.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative bg-charcoal-deep px-4 pt-20">
      {/* Subtle dark texture overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,215,0,0.03) 20px, rgba(255,215,0,0.03) 40px)`
      }} />

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        {/* Portrait */}
        <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-gold-muted shadow-2xl mb-8 relative">
          <img
            src={portraitPlaceholder}
            alt="Portrait of the deceased"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 rounded-full ring-2 ring-inset ring-[hsl(var(--gold))/0.3]" />
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-serif-display text-gold gold-glow tracking-wide leading-tight mb-4">
          [Father's Full Name]
        </h1>

        {/* Years */}
        <p className="text-xl md:text-2xl text-gold-soft font-serif-display tracking-[0.3em] mb-6">
          1960 — 2025
        </p>

        {/* Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent mb-6" />

        {/* Akan phrase */}
        <p className="text-lg md:text-xl font-serif-display italic text-gold-soft gold-glow mb-2">
          "Da yie, Ɔdɔfo"
        </p>
        <p className="text-sm text-muted-foreground tracking-wider uppercase font-body">
          Sleep well, Beloved
        </p>
      </div>

      {/* Kente border at bottom */}
      <div className="absolute bottom-0 left-0 right-0 kente-border-thick" />
    </section>
  );
};

export default HeroSection;
