const MemorialFooter = () => {
  return (
    <footer className="bg-charcoal-deep border-t border-gold-muted/20">
      <div className="kente-border-thick" />
      <div className="max-w-3xl mx-auto px-4 py-10 text-center space-y-4">
        <p className="font-serif-display text-gold text-lg">
          Funeral Service
        </p>
        <p className="text-muted-foreground text-sm font-body">
          Bodomase, Last Bus Stop, Sekyere Kumawu District, Ashanti Region
        </p>
        <div className="flex items-center justify-center gap-3 text-muted-foreground text-sm font-body">
          <span>30th May 2026</span>
          <span className="text-gold-soft">·</span>
          <span>9:00 AM</span>
        </div>

        {/* Burial Location Map */}
        <div className="pt-4 space-y-2">
          <p className="font-serif-display text-gold text-sm tracking-wider uppercase">
            Burial Ceremony Location
          </p>
          <p className="text-muted-foreground text-xs font-body">Sekyere Kumawu, Ghana</p>
          <div className="rounded-lg overflow-hidden border border-gold-muted/20 mx-auto max-w-xl">
            <iframe
              title="Burial Location - Sekyere Kumawu, Ghana"
              src="https://www.google.com/maps?q=Sekyere+Kumawu&output=embed"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href="https://maps.app.goo.gl/uReBLRP4YZ9XYhdZ9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-gold-soft hover:text-gold text-xs font-body underline underline-offset-4 transition-colors"
          >
            Open in Google Maps →
          </a>
        </div>
        
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-[hsl(var(--gold-muted))] to-transparent mx-auto my-6" />
        
        <p className="text-gold-soft font-serif-display italic text-sm">
          "We thank you"
        </p>
        
        <p className="text-muted-foreground/50 text-xs font-body mt-4">
          With love and reverence
        </p>
      </div>
    </footer>
  );
};

export default MemorialFooter;
