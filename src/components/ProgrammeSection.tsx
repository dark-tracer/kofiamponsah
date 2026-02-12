import AdinkraDivider from './AdinkraDivider';

const programmeItems = [
  { time: '8:00 AM', event: 'Filing Past / Viewing of Remains', note: '' },
  { time: '9:00 AM', event: 'Libation Pouring', note: 'Traditional rites by family elder' },
  { time: '9:30 AM', event: 'Opening Hymn & Prayer', note: '' },
  { time: '10:00 AM', event: 'Biography Reading', note: '' },
  { time: '10:20 AM', event: 'Tributes', note: 'Family, friends, and colleagues' },
  { time: '11:00 AM', event: 'Sermon & Hymns', note: '' },
  { time: '11:30 AM', event: 'Family Condolences', note: '' },
  { time: '12:00 PM', event: 'Final Farewell & Commendation', note: '' },
  { time: '12:30 PM', event: 'Burial Rites', note: '' },
  { time: '1:30 PM', event: 'Reception & Refreshments', note: '' },
];

const ProgrammeSection = () => {
  return (
    <section id="programme" className="py-20 px-4 bg-charcoal scroll-mt-nav">
      <div className="max-w-3xl mx-auto">
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
              <span className="text-gold font-serif-display text-sm md:text-base w-24 md:w-28 shrink-0 pt-0.5">
                {item.time}
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
