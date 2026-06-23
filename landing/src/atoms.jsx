// Reusable atoms: Buttons, Nav, Phone, Reveal, Chips, etc.

const Reveal = ({ children, delay = 0, as: As = 'div', className = '' }) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('in'), delay);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return <As ref={ref} className={`reveal ${className}`}>{children}</As>;
};

const BtnMint = ({ children, href = '#', size = 'md', className = '', icon = true, target, rel }) => {
  const pad = size === 'lg' ? 'px-7 py-4 text-[15px]' : size === 'sm' ? 'px-4 py-2 text-[13px]' : 'px-6 py-3.5 text-sm';
  return (
    <a href={href} target={target} rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)} className={`btn-mint inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide ${pad} ${className}`}>
      <span>{children}</span>
      {icon && <span className="-mr-1"><I.Arrow /></span>}
    </a>
  );
};

const BtnGhost = ({ children, href = 'javascript:void(0)', size = 'md', className = '', iconLeft = null, target, rel }) => {
  const pad = size === 'lg' ? 'px-7 py-4 text-[15px]' : size === 'sm' ? 'px-4 py-2 text-[13px]' : 'px-6 py-3.5 text-sm';
  return (
    <a href={href} target={target} rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)} className={`btn-ghost inline-flex items-center justify-center gap-2 rounded-full font-semibold ${pad} ${className}`}>
      {iconLeft && <span>{iconLeft}</span>}
      <span>{children}</span>
    </a>
  );
};

const BrandMark = ({ size = 28 }) => (
  <span className="brand-mark" style={{ width: size, height: size, borderRadius: Math.round(size * 0.28) }}>
    <I.Spade size={Math.round(size * 0.55)} />
  </span>
);

const Wordmark = ({ size = 'md' }) => (
  <div className="flex items-center gap-2.5 nosel">
    <BrandMark size={size === 'lg' ? 34 : 28} />
    <div className={`font-bold tracking-tight ${size === 'lg' ? 'text-xl' : 'text-[17px]'} text-white`}>
      MicroPoker<span className="text-mint">Master</span>
    </div>
  </div>
);

const Nav = () => {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    ['Features', '#features'],
    ['Leaks', '#leaks'],
    ['Pricing', '#pricing'],
  ];
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md' : ''}`}>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all ${scrolled ? 'pt-3' : 'pt-5'}`}>
        <div className={`flex items-center justify-between rounded-2xl px-3 sm:px-5 py-2.5 ${scrolled ? 'glass-strong' : ''}`}>
          <a href="#top" className="flex items-center"><Wordmark /></a>
          <nav className="hidden md:flex items-center gap-7">
            {links.map(([l, h]) => (
              <a key={l} href={h} className="text-[13.5px] text-gray-300 hover:text-white transition-colors">{l}</a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <BtnMint href="https://app.micropokermaster.com/" target="_blank" size="sm">Start free</BtnMint>
          </div>
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="md:hidden btn-ghost rounded-full p-2.5">
            {open ? <I.Close /> : <I.Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-3">
            {links.map(([l, h]) => (
              <a key={l} href={h} onClick={() => setOpen(false)} className="block px-3 py-3 text-gray-200 hover:text-white">{l}</a>
            ))}
            <div className="hairline my-1" />
            <div className="p-2">
              <BtnMint size="sm" href="https://app.micropokermaster.com/" target="_blank" className="w-full">Start free</BtnMint>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Phone with screenshot — supports drop-shadow glow color
const Phone = ({ src, alt = '', glow = 'mint', width = 280, className = '', notch = true }) => (
  <div className={`relative ${className}`} style={{ width }}>
    <div className={`phone-glow ${glow === 'blue' ? 'blue' : ''}`} />
    <div className="phone">
      <div className="phone-screen">
        {notch && <div className="phone-notch" />}
        <img src={src} alt={alt} draggable="false" />
      </div>
    </div>
  </div>
);

// Trust chip used in hero
const TrustChip = ({ children }) => (
  <span className="chip"><span className="dot" />{children}</span>
);

// Section eyebrow
const Eyebrow = ({ children, color = 'mint' }) => (
  <div className="inline-flex items-center gap-2">
    <span className={`h-px w-8 ${color === 'mint' ? 'bg-mint' : 'bg-haze'}`} style={{ boxShadow: color === 'mint' ? '0 0 8px #57f287' : '0 0 8px #6aa9ff' }}></span>
    <span className={`uppercase tracking-[0.22em] text-[11px] font-semibold ${color === 'mint' ? 'text-mint' : 'text-haze'}`}>{children}</span>
  </div>
);

// Display heading
const Display = ({ children, className = '', as: As = 'h2' }) => (
  <As className={`font-display uppercase text-white leading-[0.95] ${className}`}>{children}</As>
);

Object.assign(window, { Reveal, BtnMint, BtnGhost, BrandMark, Wordmark, Nav, Phone, TrustChip, Eyebrow, Display });
