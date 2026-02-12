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
