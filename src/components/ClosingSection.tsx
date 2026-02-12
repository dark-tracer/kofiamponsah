import AdinkraDivider from './AdinkraDivider';

const ClosingSection = () => {
  return (
    <section className="py-20 px-4 bg-charcoal-deep">
      <div className="max-w-3xl mx-auto text-center">
        <AdinkraDivider symbol="nyame-dua" />

        {/* Proverb */}
        <blockquote className="my-10">
          <p className="text-xl md:text-2xl font-serif-display italic text-gold gold-glow leading-relaxed">
            "Onipa na ɔma onipa ye"
          </p>
          <p className="text-muted-foreground text-sm mt-3 font-body tracking-wider">
            It is people who make people human
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
            Yɛda mo ase
          </p>
          <p className="text-muted-foreground text-xs tracking-widest uppercase font-body">
            We thank you
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
