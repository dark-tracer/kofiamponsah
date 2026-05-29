import AdinkraDivider from './AdinkraDivider';
import AdinkraFloating from './AdinkraDecorations';

const ClosingSection = () => {
  return (
    <section className="py-20 px-4 bg-charcoal-deep relative overflow-hidden">
      <AdinkraFloating symbol="gye-nyame" className="absolute top-12 right-10 w-24 h-24 text-[hsl(var(--gold-muted))] opacity-[0.06] md:w-32 md:h-32" />
      <AdinkraFloating symbol="adinkrahene" className="absolute bottom-12 left-8 w-18 h-18 text-[hsl(var(--gold-muted))] opacity-[0.05] md:w-24 md:h-24" />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <AdinkraDivider symbol="nyame-dua" />

        {/* Proverb */}
        <blockquote className="my-10">
          <p className="text-xl md:text-2xl font-serif-display italic text-gold gold-glow leading-relaxed">
            "It is people who make people human"
          </p>
        </blockquote>

        <div className="w-16 h-px bg-gradient-to-r from-transparent via-[hsl(var(--gold-muted))] to-transparent mx-auto my-8" />

        {/* Thank you message */}
        <div className="space-y-4">
          <p className="text-cream font-body leading-relaxed text-sm md:text-base">
            The family wishes to express our deepest gratitude to all who have shared in our grief 
            and celebrated the life of our beloved father. Your presence, prayers, and support 
            have been a comfort beyond words.
          </p>
          <p className="text-gold font-serif-display text-lg mt-6">
            We thank you
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
