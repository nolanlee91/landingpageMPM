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

const LeakRow = ({ rank, title, desc, severity, freq }) => (
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
    <div className="hidden sm:flex items-center gap-3">
      <div className="w-24 h-1.5 rounded-full bg-white/8 overflow-hidden">
        <div className={`h-full ${severity==='high'?'bg-red-400':severity==='med'?'bg-amber-300':'bg-mint'}`} style={{width:`${freq}%`}}/>
      </div>
      <span className="text-[12px] text-gray-300 font-mono w-10 text-right">{freq}%</span>
    </div>
  </div>
);

const LeakDetection = () => {
  const leaks = [
    { rank: 1, title: 'Overfolding river', desc: 'Single raise pots, OOP — 22% under MDF vs medium sizing', severity: 'high', freq: 78 },
    { rank: 2, title: 'Calling too wide preflop', desc: 'UTG and HJ vs 3-bets — flat % above population baseline', severity: 'high', freq: 71 },
    { rank: 3, title: 'Bluffing too little', desc: 'Turn double-barrel on brick boards — under-bluffed by 14%', severity: 'med', freq: 54 },
    { rank: 4, title: 'Losing from blinds', desc: 'BB defense too tight vs CO/BTN min-raises — costing ~6 bb/100', severity: 'med', freq: 47 },
    { rank: 5, title: 'C-bet sizing leak', desc: 'Using one size on dry boards — easy to exploit, EV –2.1 bb', severity: 'low', freq: 31 },
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
                Every hand you log feeds a model of your tendencies. The longer you study, the sharper the picture — leaks ranked by frequency and EV cost, not theory.
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
                  <div className="text-white text-sm font-semibold">Leak Report · last 90 days</div>
                  <div className="text-[11px] text-gray-400">12,418 hands · 38 sessions · $1/$3 → $5/$10</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="chip text-[11px]"><span className="dot"/>updated 2m ago</span>
                <span className="chip text-[11px]"><span className="dot" style={{background:'#6aa9ff', boxShadow:'0 0 10px #6aa9ff'}}/>v2.4 model</span>
              </div>
            </div>

            {/* Stats row */}
            <div className="relative z-10 mt-6 grid grid-cols-2 sm:grid-cols-5 gap-3">
              <StatCell label="VPIP" value="24.3" sub="population: 23.0" color="text-white" />
              <StatCell label="PFR" value="19.1" sub="3bet 7.4%" color="text-white" />
              <StatCell label="Aggression" value="2.8" sub="post-flop" color="text-haze" />
              <StatCell label="Leak score" value="34" sub="↓ 12 vs last month" color="text-mint" />
              <StatCell label="Study streak" value="14d" sub="goal: 30 days" color="text-mint" />
            </div>

            {/* Two-column body */}
            <div className="relative z-10 mt-6 grid lg:grid-cols-12 gap-6">
              {/* Leaks list */}
              <div className="lg:col-span-7 rounded-2xl bg-black/30 border border-line p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-gray-500 font-semibold">Detected Leaks</div>
                    <div className="text-white text-lg font-semibold mt-0.5">Top 5 by EV cost</div>
                  </div>
                  <span className="chip text-[10px]"><span className="dot"/>AI scored</span>
                </div>
                <div className="mt-3">
                  {leaks.map(l => <LeakRow key={l.rank} {...l} />)}
                </div>
              </div>

              {/* EV trend + study */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="rounded-2xl bg-black/30 border border-line p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.18em] text-gray-500 font-semibold">EV Trend</div>
                      <div className="font-display text-4xl text-mint mt-1" style={{textShadow:'0 0 16px rgba(87,242,135,0.4)'}}>+4.2 bb/100</div>
                      <div className="text-[11px] text-gray-400">net of leaks · 90d rolling</div>
                    </div>
                    <span className="chip text-[10px] text-mint border-mint/30 bg-mint/5"><I.Trend size={12}/> +1.6</span>
                  </div>
                  <div className="mt-3">
                    <Sparkline data={[-0.2,0.4,0.1,0.8,1.2,0.9,1.5,2.0,1.7,2.4,2.9,2.6,3.4,3.0,3.7,4.1,3.8,4.2]} />
                  </div>
                </div>
                <div className="rounded-2xl bg-black/30 border border-line p-5">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-gray-500 font-semibold">Study Consistency</div>
                  <div className="mt-3 grid grid-cols-7 gap-1">
                    {[
                      0.8,1,0.6,0.4,0,0.9,1,
                      0.7,0.5,0.8,1,1,0.3,0.6,
                      1,0.8,1,0.4,0.2,1,0.9,
                      0.5,0.7,1,1,0.8,1,0.9,
                    ].map((v,i)=>(
                      <div key={i} className="aspect-square rounded-sm" style={{
                        background: v === 0 ? 'rgba(255,255,255,0.04)' : `rgba(87,242,135, ${0.15 + v*0.75})`,
                        boxShadow: v > 0.6 ? '0 0 8px rgba(87,242,135,0.4)' : 'none'
                      }}/>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-gray-400">
                    <span>4 weeks</span>
                    <span><span className="text-mint font-semibold">22</span>/28 days studied</span>
                  </div>
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
