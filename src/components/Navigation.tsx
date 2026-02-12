import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Fie', href: '#home', english: 'Home' },
  { label: 'Ayie Dwumadie', href: '#programme', english: 'Programme' },
  { label: 'Awerɛhyem', href: '#eulogies', english: 'Eulogies' },
  { label: 'Mfonini', href: '#gallery', english: 'Gallery' },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-charcoal-deep/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="kente-border" />
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <span className="font-serif-display text-gold text-lg tracking-wider gold-glow">
          In Memoriam
        </span>
        
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="text-gold-soft hover:text-gold transition-colors text-sm tracking-widest uppercase font-body"
              title={item.english}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gold p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-charcoal-deep/98 backdrop-blur-sm border-t border-gold-muted">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="block w-full text-left px-6 py-4 text-gold-soft hover:text-gold hover:bg-charcoal transition-colors text-sm tracking-widest uppercase font-body border-b border-gold-muted/20"
            >
              {item.label} <span className="text-muted-foreground ml-2 text-xs normal-case">({item.english})</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
