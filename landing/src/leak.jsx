// AI Leak Detection — analytics dashboard styled like premium fintech.

const Sparkline = ({ data, color = '#57f287', height = 40 }) => {
  const w = 240;
  const max = Math.max(...data, 1);
  const min = Math.min(...data, 0);
  const range = max - min || 1;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = height - ((v - min) / range) * (height - 4) - 2;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');
  const area = `${pts} ${w},${height} 0,${height}`;
  return (
    <svg viewBox={`0 0 ${w} ${height}`} className="w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`g-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.4"/>
          <stop offset="100%" stopColor={color} stopOpacity="0"/>
        </linearGradient>
      </defs>
      <polygon points={area} fill={`url(#g-${color})`} />
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" style={{filter: `drop-shadow(0 0 6px ${color})`}}/>
    </svg>
  );
};

const StatCell = ({ label, value, sub, color = 'text-mint' }) => (
  <div className="rounded-2xl bg-white/[0.02] border border-line p-4">
    <div className="text-[10px] uppercase tracking-[0.18em] text-gray-500 font-semibold">{label}</div>
    <div className={`mt-1 font-display text-3xl ${color}`}>{value}</div>
    {sub && <div className="text-[11px] text-gray-500 mt-0.5">{sub}</div>}
  </div>
);

const LeakRow = ({ rank, title, desc, severity, ev, hands, conf }) => (
  <div className="flex items-center gap-3 sm:gap-4 py-4 border-b border-line last:border-b-0">
    <span className="font-mono text-xs text-gray-500 w-5 text-right">{rank}</span>
    <div className="min-w-0 flex-1">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-white text-sm font-semibold">{title}</span>
        <span className={`text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded border ${
          severity === 'high' ? 'text-red-300 border-red-400/30 bg-red-500/10' :
          severity === 'med'  ? 'text-amber-200 border-amber-300/30 bg-amber-400/10' :
                                 'text-mint border-mint/30 bg-mint/10'
        }`}>{severity}</span>
      </div>
      <div className="text-[12px] text-gray-400 mt-0.5">{desc}</div>
    </div>
    <div className="hidden sm:flex flex-col items-end gap-0.5 shrink-0">
      <span className="text-[13px] font-mono font-semibold text-red-300">~-${Math.abs(ev).toLocaleString()}</span>
      <span className="text-[10px] text-gray-500">{conf}</span>
    </div>
  </div>
);

const LeakDetection = () => {
  const leaks = [
    { rank: 1, title: 'River Call Too Wide', desc: 'Calling river jams from tight players with non-nutted hands', severity: 'high', ev: 1010, hands: 5, conf: '×5 recurring' },
    { rank: 2, title: 'Missed Value', desc: 'Checking back strong top pairs+ on safe rivers', severity: 'med', ev: 45, hands: 3, conf: '×3 recurring' },
    { rank: 3, title: 'Overfolding Turn', desc: 'Folding too much to turn barrels on brick boards', severity: 'low', ev: 30, hands: 2, conf: 'Building' },
  ];

  return (
    <section id="leaks" className="section relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>AI Leak Detection</Eyebrow>
              <Display className="mt-4 text-[44px] sm:text-[64px] lg:text-[88px]">
                The app learns<br/>your mistakes.
              </Display>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <p className="text-gray-300 text-lg max-w-md leading-relaxed">
                Every hand you analyze with the AI Coach gets tagged with its leak and the dollars it cost. The app groups them so your most expensive mistakes surface first — ranked by real money lost, not theory.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Dashboard mock */}
        <Reveal>
          <div className="mt-14 glass-strong rounded-[28px] p-5 sm:p-8 relative overflow-hidden">
            {/* glow */}
            <div className="absolute -top-32 right-0 w-[500px] h-[500px] -z-0" style={{background:'radial-gradient(closest-side, rgba(87,242,135,0.18), transparent 70%)'}}/>
            <div className="absolute -bottom-32 -left-20 w-[420px] h-[420px] -z-0" style={{background:'radial-gradient(closest-side, rgba(106,169,255,0.15), transparent 70%)'}}/>

            {/* Dashboard chrome */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <BrandMark size={32}/>
                <div>
                  <div className="text-white text-sm font-semibold">Your Biggest Money Leaks</div>
                  <div className="text-[11px] text-gray-400">From the hands you analyzed with AI Coach</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="chip text-[11px]"><span className="dot"/>AI scored</span>
                <span className="chip text-[11px]"><span className="dot" style={{background:'#6aa9ff', boxShadow:'0 0 10px #6aa9ff'}}/>Pro feature</span>
              </div>
            </div>

            {/* Stats row */}
            <div className="relative z-10 mt-6 grid grid-cols-3 gap-3">
              <StatCell label="Hands analyzed" value="8" sub="so far" color="text-white" />
              <StatCell label="$ lost (total)" value="~$1,085" sub="across analyzed hands" color="text-red-300" />
              <StatCell label="Top leak" value="River Call" sub="×5 recurring" color="text-mint" />
            </div>

            {/* Two-column body */}
            <div className="relative z-10 mt-6 grid lg:grid-cols-12 gap-6">
              {/* Leaks list */}
              <div className="lg:col-span-7 rounded-2xl bg-black/30 border border-line p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-gray-500 font-semibold">Detected Leaks</div>
                    <div className="text-white text-lg font-semibold mt-0.5">Top leaks by EV cost</div>
                  </div>
                  <span className="chip text-[10px]"><span className="dot"/>AI scored</span>
                </div>
                <div className="mt-3">
                  {leaks.map(l => <LeakRow key={l.rank} {...l} />)}
                </div>
              </div>

              {/* Lost EV summary + how it works */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="rounded-2xl border border-red-400/20 p-5" style={{background:'rgba(244,112,103,0.06)'}}>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-gray-500 font-semibold">$ lost — total</div>
                  <div className="font-display text-4xl text-red-300 mt-1" style={{textShadow:'0 0 16px rgba(244,112,103,0.35)'}}>~$1,085</div>
                  <div className="text-[11px] text-gray-400 mt-0.5">across 8 analyzed hands · not a projection</div>
                  <div className="mt-3 text-[12px] text-gray-300 leading-relaxed">
                    Figures are AI estimates from the real pot and bet sizes in each hand — directional, not solver-exact. No misleading “$/month” extrapolation.
                  </div>
                </div>
                <div className="rounded-2xl bg-black/30 border border-line p-5">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-gray-500 font-semibold">How it works</div>
                  <ul className="mt-3 space-y-2.5 text-[13px] text-gray-300">
                    <li className="flex items-start gap-2.5"><span className="mt-0.5 text-mint"><I.Check/></span>Analyze a hand → AI tags its leak + $ cost</li>
                    <li className="flex items-start gap-2.5"><span className="mt-0.5 text-mint"><I.Check/></span>Leaks group by category and rank by $ lost</li>
                    <li className="flex items-start gap-2.5"><span className="mt-0.5 text-mint"><I.Check/></span>The more hands you log, the truer the ranking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

window.LeakDetection = LeakDetection;
