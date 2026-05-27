import AdinkraDivider from './AdinkraDivider';
import AdinkraFloating from './AdinkraDecorations';

const programmeItems = [
  { order: '1', event: 'Opening Prayer', note: '' },
  { order: '2', event: 'Scripture Reading', note: 'Deaconess Grace' },
  { order: '3', event: 'Praise & Worship', note: 'Deacon Eric (Philadelphia Choir)' },
  { order: '4', event: 'Song Ministration', note: 'Deacon Eric (Philadelphia Choir)' },
  { order: '5', event: 'Sermon / Word of Exhortation', note: 'Rev. Owusu Antwi Malik' },
  { order: '6', event: 'Tribute by Family', note: 'Family' },
  { order: '7', event: 'Offertory', note: 'Philadelphia Choir' },
  { order: '8', event: 'Closing Prayer & Benediction', note: 'Rev. Owusu Antwi Malik' },
  { order: '9', event: 'Procession to Cemetery / Burial Ground', note: '' },
];

const ProgrammeSection = () => {
  return (
    <section id="programme" className="py-20 px-4 bg-charcoal scroll-mt-nav relative overflow-hidden">
      <AdinkraFloating symbol="adinkrahene" className="absolute top-10 right-8 w-20 h-20 text-[hsl(var(--gold-muted))] opacity-[0.05] md:w-28 md:h-28" />
      <AdinkraFloating symbol="dwennimmen" className="absolute bottom-10 left-6 w-16 h-16 text-[hsl(var(--gold-muted))] opacity-[0.05] md:w-24 md:h-24" />
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-serif-display text-gold text-center gold-glow mb-2">
          Ayie Dwumadie
        </h2>
        <p className="text-center text-muted-foreground text-sm tracking-widest uppercase mb-8 font-body">
          Funeral Programme
        </p>

        <AdinkraDivider symbol="nyame-dua" />

        <div className="mt-8 space-y-0">
          {programmeItems.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 md:gap-8 py-4 border-b border-gold-muted/20 last:border-b-0 group"
            >
              <span className="text-gold font-serif-display text-sm md:text-base w-8 md:w-10 shrink-0 pt-0.5">
                {item.order}.
              </span>
              <div className="flex-1">
                <p className="text-cream text-sm md:text-base font-body">
                  {item.event}
                </p>
                {item.note && (
                  <p className="text-muted-foreground text-xs mt-1 italic font-body">
                    {item.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgrammeSection;
