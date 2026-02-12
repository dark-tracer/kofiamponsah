interface AdinkraDividerProps {
  symbol?: 'sankofa' | 'nyame-dua' | 'nkontim';
  className?: string;
}

const AdinkraDivider = ({ symbol = 'sankofa', className = '' }: AdinkraDividerProps) => {
  const renderSymbol = () => {
    switch (symbol) {
      case 'sankofa':
        return (
          <svg viewBox="0 0 80 80" className="w-10 h-10 fill-current text-gold" aria-label="Sankofa - Go back and get it">
            <path d="M40 10c-8 0-14 6-14 14 0 5 3 9 7 12l-8 14c-2 3-3 7-3 10 0 8 7 14 15 14h1c2-6 6-10 6-10s-4-2-6-6c-1-3 0-6 2-8l10-16c3-3 5-7 5-11 0-7-6-13-15-13zm-2 8c4 0 7 3 7 7s-3 7-7 7-7-3-7-7 3-7 7-7zm2 14c1 0 3 1 4 2l-7 12c-3-2-5-5-5-9l8-5z" />
          </svg>
        );
      case 'nyame-dua':
        return (
          <svg viewBox="0 0 80 80" className="w-10 h-10 fill-current text-gold" aria-label="Nyame Dua - God's altar">
            <rect x="36" y="10" width="8" height="60" rx="2" />
            <rect x="20" y="26" width="40" height="8" rx="2" />
            <rect x="28" y="18" width="24" height="8" rx="2" />
            <circle cx="40" cy="14" r="5" />
            <path d="M24 62h32l-4 8H28z" />
          </svg>
        );
      case 'nkontim':
        return (
          <svg viewBox="0 0 80 80" className="w-10 h-10 fill-current text-gold" aria-label="Nkontim - Loyalty">
            <circle cx="40" cy="40" r="8" />
            <circle cx="40" cy="40" r="16" fill="none" stroke="currentColor" strokeWidth="3" />
            <circle cx="40" cy="40" r="24" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="40" cy="40" r="32" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        );
    }
  };

  return (
    <div className={`flex items-center justify-center gap-4 py-6 ${className}`}>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[hsl(var(--gold-muted))] to-transparent" />
      {renderSymbol()}
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[hsl(var(--gold-muted))] to-transparent" />
    </div>
  );
};

export default AdinkraDivider;
