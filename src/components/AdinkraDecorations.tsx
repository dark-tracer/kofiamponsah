interface AdinkraFloatingProps {
  symbol: 'gye-nyame' | 'dwennimmen' | 'adinkrahene' | 'ese-ne-tekrema' | 'funtunfunefu';
  className?: string;
}

const symbols: Record<string, { path: string; label: string }> = {
  'gye-nyame': {
    label: 'Gye Nyame - Except God',
    path: 'M40 8c-4 0-8 2-10 6-3 5-2 11 2 15l8 8 8-8c4-4 5-10 2-15-2-4-6-6-10-6zm0 6c2 0 4 1 5 3 2 3 1 6-1 8l-4 4-4-4c-2-2-3-5-1-8 1-2 3-3 5-3zM15 35c-3 0-6 2-7 5s0 7 3 9l29 22 29-22c3-2 4-6 3-9s-4-5-7-5c-2 0-4 1-5 3L40 58 20 38c-1-2-3-3-5-3z',
  },
  'dwennimmen': {
    label: 'Dwennimmen - Humility and Strength',
    path: 'M20 20c-6 0-10 4-10 10s4 10 10 10h5v-5c0-6 4-10 10-10h10c6 0 10 4 10 10v5h5c6 0 10-4 10-10s-4-10-10-10H20zM35 35c-3 0-5 2-5 5v20c0 3 2 5 5 5h10c3 0 5-2 5-5V40c0-3-2-5-5-5H35z',
  },
  'adinkrahene': {
    label: 'Adinkrahene - Greatness and Leadership',
    path: 'M40 12a28 28 0 100 56 28 28 0 000-56zm0 8a20 20 0 110 40 20 20 0 010-40zm0 8a12 12 0 100 24 12 12 0 000-24z',
  },
  'ese-ne-tekrema': {
    label: 'Ese Ne Tekrema - Friendship',
    path: 'M20 25c0-8 9-15 20-15s20 7 20 15c0 5-4 10-10 13v17c0 3-4 5-10 5s-10-2-10-5V38c-6-3-10-8-10-13zm10 0c0 5 5 9 10 9s10-4 10-9-5-9-10-9-10 4-10 9z',
  },
  'funtunfunefu': {
    label: 'Funtunfunefu - Unity in Diversity',
    path: 'M40 10c-16 0-30 13-30 30s14 30 30 30 30-13 30-30-14-30-30-30zm0 10c5 0 9 4 9 10 0 4-2 7-5 9v12c0 2-2 4-4 4s-4-2-4-4V39c-3-2-5-5-5-9 0-6 4-10 9-10zm-15 15c3-3 7-5 11-5v10c-4 0-8-2-11-5zm30 0c-3 3-7 5-11 5V25c4 0 8 2 11 5z',
  },
};

const AdinkraFloating = ({ symbol, className = '' }: AdinkraFloatingProps) => {
  const s = symbols[symbol];
  return (
    <svg
      viewBox="0 0 80 80"
      className={`fill-current ${className}`}
      aria-label={s.label}
    >
      <path d={s.path} />
    </svg>
  );
};

export default AdinkraFloating;
