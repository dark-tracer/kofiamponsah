const MemorialFooter = () => {
  return (
    <footer className="bg-charcoal-deep border-t border-gold-muted/20">
      <div className="kente-border-thick" />
      <div className="max-w-3xl mx-auto px-4 py-10 text-center space-y-4">
        <p className="font-serif-display text-gold text-lg">
          [Funeral Home Name]
        </p>
        <p className="text-muted-foreground text-sm font-body">
          [Address Line 1, City, Region]
        </p>
        <div className="flex items-center justify-center gap-3 text-muted-foreground text-sm font-body">
          <span>[Date of Funeral]</span>
          <span className="text-gold-soft">·</span>
          <span>[Time]</span>
        </div>

        {/* Burial Location Map */}
        <div className="pt-4 space-y-2">
          <p className="font-serif-display text-gold text-sm tracking-wider uppercase">
            Burial Ceremony Location
          </p>
          <p className="text-muted-foreground text-xs font-body">Bodomase, Ghana</p>
          <div className="rounded-lg overflow-hidden border border-gold-muted/20 mx-auto max-w-xl">
            <iframe
              title="Burial Location - Bodomase, Ghana"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15891.674!2d-1.6!3d6.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb8d47b1e2b7f7%3A0x2a2a2a2a2a2a2a2a!2sBodomase%2C%20Ghana!5e0!3m2!1sen!2s!4v1700000000000"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href="https://www.google.com/maps/search/Bodomase,+Ghana"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-gold-soft hover:text-gold text-xs font-body underline underline-offset-4 transition-colors"
          >
            Open in Google Maps →
          </a>
        </div>
        
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-[hsl(var(--gold-muted))] to-transparent mx-auto my-6" />
        
        <p className="text-gold-soft font-serif-display italic text-sm">
          "Yɛda mo ase" — We thank you
        </p>
        
        <p className="text-muted-foreground/50 text-xs font-body mt-4">
          With love and reverence
        </p>
      </div>
    </footer>
  );
};

export default MemorialFooter;
