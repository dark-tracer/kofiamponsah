import AdinkraDivider from './AdinkraDivider';

interface EulogyCardProps {
  title: string;
  placeholder: string;
}

const EulogyCard = ({ title, placeholder }: EulogyCardProps) => (
  <div className="bg-cream rounded-sm p-8 md:p-10 shadow-lg">
    <h3 className="text-2xl font-serif-display text-[hsl(var(--gold-muted))] mb-6">
      {title}
    </h3>
    <p className="text-[hsl(0,0%,30%)] font-body leading-relaxed text-sm md:text-base">
      {placeholder}
    </p>
  </div>
);

const EulogySection = () => {
  return (
    <section id="eulogies" className="py-20 px-4 bg-charcoal-deep scroll-mt-nav">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif-display text-gold text-center gold-glow mb-2">
          Awerɛhyem
        </h2>
        <p className="text-center text-muted-foreground text-sm tracking-widest uppercase mb-8 font-body">
          Eulogies & Tributes
        </p>

        <AdinkraDivider symbol="sankofa" />

        <div className="mt-8 space-y-8">
          <EulogyCard
            title="Eulogy from His Wife"
            placeholder="[Wife's eulogy text will go here. Share memories, love, and the life you built together. This section is styled for comfortable reading with dark text on a warm cream background.]"
          />

          <AdinkraDivider symbol="nkontim" className="py-4" />

          <EulogyCard
            title="Eulogy from His Son"
            placeholder="[Son's eulogy text will go here. Share what your father meant to you, the lessons he taught, and how his legacy lives on through you.]"
          />

          <AdinkraDivider symbol="nkontim" className="py-4" />

          <EulogyCard
            title="Eulogy from His Daughter"
            placeholder="[Daughter's eulogy text will go here. Share your cherished memories, his wisdom, and the love that will endure forever.]"
          />
        </div>
      </div>
    </section>
  );
};

export default EulogySection;
