// Problem · Features · Modern Era · Testimonials · Final CTA · Footer

const Problem = () => {
  const cards = [
    {
      n: '01',
      title: 'Results-based thinking',
      copy: 'Players remember outcomes instead of decisions — chasing variance instead of process.',
      icon: <I.Eye />,
    },
    {
      n: '02',
      title: 'No structured study',
      copy: 'Important hands disappear after sessions. There’s no system to learn from them later.',
      icon: <I.Stack />,
    },
    {
      n: '03',
      title: 'No bankroll discipline',
      copy: 'Most players never track real hourly winrate, true variance, or recurring leaks.',
      icon: <I.Wallet />,
    },
  ];
  return (
    <section id="problem" className="section relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>The Problem</Eyebrow>
          <Display className="mt-4 text-[44px] sm:text-[64px] lg:text-[80px] max-w-4xl">
            Most poker players<br/>never improve.
          </Display>
          <p className="mt-5 text-gray-400 text-lg max-w-2xl">
            Not because they don’t play enough — because they play more than they study.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-4 lg:gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.n} delay={i*80}>
              <div className="glass-strong rounded-3xl p-7 lg:p-8 h-full relative overflow-hidden feature-card">
                <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full" style={{background:'radial-gradient(closest-side, rgba(87,242,135,0.10), transparent 70%)'}}/>
                <div className="flex items-center justify-between">
                  <span className="text-mint/80 font-mono text-[12px]">{c.n}</span>
                  <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 grid place-items-center text-gray-200">{c.icon}</span>
                </div>
                <h3 className="mt-8 text-white text-2xl font-semibold tracking-tight">{c.title}</h3>
                <p className="mt-3 text-gray-400 leading-relaxed">{c.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---- Feature row component (alternating screenshot + content) ----
const FeatureRow = ({ idx, eyebrow, title, body, bullets, screenshot, accent = 'mint', mirror = false }) => {
  return (
    <Reveal>
      <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center py-16 lg:py-24 ${mirror ? 'lg:[&>.media]:order-2' : ''}`}>
        <div className="lg:col-span-6 media flex justify-center relative">
          <div className="absolute inset-0 -z-10" style={{background: accent==='blue' ? 'radial-gradient(closest-side, rgba(106,169,255,0.18), transparent 70%)' : 'radial-gradient(closest-side, rgba(87,242,135,0.18), transparent 70%)'}}/>
          <div className={mirror ? 'rotate-[3deg] float-c' : '-rotate-[3deg] float-a'}>
            <Phone src={screenshot} glow={accent} width={280} />
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="flex items-center gap-3">
            <span className={`font-mono text-xs ${accent==='blue'?'text-haze':'text-mint'}`}>{`0${idx}`}</span>
            <Eyebrow color={accent}>{eyebrow}</Eyebrow>
          </div>
          <Display className="mt-3 text-[40px] sm:text-[56px] lg:text-[68px] max-w-xl">{title}</Display>
          <p className="mt-5 text-gray-300 text-lg max-w-lg leading-relaxed">{body}</p>
          <ul className="mt-7 grid sm:grid-cols-2 gap-2.5 max-w-lg">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2.5 text-[14.5px] text-gray-200">
                <span className={`w-5 h-5 grid place-items-center rounded-full ${accent==='blue'?'bg-haze/15 text-haze':'bg-mint/15 text-mint'}`}><I.Check size={12} /></span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
};

const Features = () => {
  return (
    <section id="features" className="section relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Core Features</Eyebrow>
          <Display className="mt-4 text-[44px] sm:text-[64px] lg:text-[88px] max-w-5xl">
            Everything serious<br/>players need.
          </Display>
          <p className="mt-5 text-gray-400 text-lg max-w-2xl">
            One operating system for the modern grinder. No fragmented tools. No clutter.
          </p>
        </Reveal>

        <div className="mt-6 divide-y divide-line">
          <FeatureRow
            idx={1}
            eyebrow="AI Coach"
            title="Your coach in your pocket."
            body="Paste a hand history and get an instant street-by-street breakdown — calibrated to your villain type and stake."
            bullets={['Villain analysis', 'Bluff frequency logic', 'Street-by-street breakdown', 'Leak identification']}
            screenshot="assets/app-coach.png"
            accent="blue"
          />
          <FeatureRow
            idx={2}
            eyebrow="Bankroll Tracker"
            title="Track what actually matters."
            body="Profit, sessions, hourly winrate, and key hands — wired together so you can see the truth of your game."
            bullets={['Session tracking', 'Profit graph', 'Linked hand history', 'Live cash optimized']}
            screenshot="assets/app-bankroll.png"
            accent="mint"
            mirror
          />
          <FeatureRow
            idx={3}
            eyebrow="Odds Calculator"
            title="Equity in two taps."
            body="Run multiway equity, board simulations, and quick checks during study — fast enough to use mid-session."
            bullets={['Multiway support', 'Board simulation', 'Fast calculations', 'Mobile optimized']}
            screenshot="assets/app-odds.png"
            accent="mint"
          />
          <FeatureRow
            idx={4}
            eyebrow="Hand History"
            title="A permanent archive of your spots."
            body="Save important hands, link them to sessions, tag them, and send them straight into the AI Coach."
            bullets={['Session linking', 'Key hand tagging', 'AI analyze', 'Poker archive']}
            screenshot="assets/app-history.png"
            accent="blue"
            mirror
          />
          <FeatureRow
            idx={5}
            eyebrow="Quiz System"
            title="Train instincts, not theory."
            body="AI-generated scenarios tuned to your leaks. Spaced repetition for the spots you actually misplay."
            bullets={['Difficulty levels', 'Leak-focused quizzes', 'GTO concepts', 'Progress tracking']}
            screenshot="assets/app-quiz.png"
            accent="mint"
          />
        </div>
      </div>
    </section>
  );
};

// ----------- Modern Poker Era (creators) -----------
const ModernEra = () => {
  const cards = [
    { title: 'Study after sessions', copy: 'Capture the hands that matter while they’re still fresh — review them tomorrow morning with the AI Coach.', icon: <I.Brain/> },
    { title: 'Track real improvement', copy: 'Stop confusing volume with progress. Watch leak scores fall and quiz streaks build week over week.', icon: <I.Trend/> },
    { title: 'Create better content', copy: 'Pull session data, key hands, and AI breakdowns straight into vlogs, shorts, and reels — vertical-first.', icon: <I.Camera/> },
  ];
  return (
    <section id="creators" className="section relative overflow-hidden">
      {/* Vertical "poker rail" lines */}
      <div className="absolute left-8 top-10 bottom-10 rail-mint opacity-40 hidden md:block" />
      <div className="absolute right-8 top-20 bottom-10 rail-mint opacity-30 hidden md:block" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>The Modern Poker Era</Eyebrow>
              <Display className="mt-4 text-[44px] sm:text-[64px] lg:text-[84px] max-w-4xl">
                Built for the modern<br/>poker grind.
              </Display>
              <p className="mt-5 text-gray-400 text-lg max-w-xl">
                Live cash. Vertical content. AI study. The modern player doesn’t live behind a desktop — and neither does MicroPokerMaster.
              </p>
            </Reveal>
          </div>

          {/* Vertical content mockup */}
          <div className="lg:col-span-5 relative">
            <Reveal>
              <div className="relative mx-auto" style={{ width: 280 }}>
                <div className="phone-glow" />
                <div className="phone">
                  <div className="phone-screen aspect-[9/19.5]" style={{ aspectRatio: '9/19.5' }}>
                    <div className="phone-notch" />
                    {/* Faux short / reel UI */}
                    <div className="relative h-full bg-gradient-to-b from-ink-800 via-ink-900 to-ink-950">
                      <div className="absolute inset-0 bg-grid opacity-30" />
                      <div className="absolute inset-x-6 top-14 glass-strong rounded-xl p-3">
                        <div className="flex items-center gap-2">
                          <BrandMark size={22} />
                          <span className="text-xs font-semibold">Live · $5/$10</span>
                        </div>
                        <div className="mt-2 font-display text-3xl text-mint" style={{textShadow:'0 0 16px rgba(87,242,135,0.45)'}}>+$2,140</div>
                      </div>
                      <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 glass-strong rounded-xl p-3">
                        <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Key Hand</div>
                        <div className="mt-1 flex gap-1">
                          {['A♠','K♠'].map((c,i)=>(
                            <span key={i} className="bg-white text-black rounded text-xs font-bold px-2 py-1.5">{c}</span>
                          ))}
                          <span className="text-gray-500 mx-1">vs</span>
                          {['Q♥','Q♦'].map((c,i)=>(
                            <span key={i} className={`${c.includes('♥')||c.includes('♦')?'text-red-500':'text-black'} bg-white rounded text-xs font-bold px-2 py-1.5`}>{c}</span>
                          ))}
                        </div>
                        <div className="mt-2 text-[11px] text-gray-300">3-bet pot, BTN vs CO — turn brick spot</div>
                      </div>
                      <div className="absolute right-3 bottom-24 flex flex-col gap-3 items-center">
                        {[<I.Sparkle/>,<I.Camera/>,<I.Mic/>].map((ic,i)=>(
                          <span key={i} className="w-9 h-9 rounded-full bg-white/10 border border-white/15 grid place-items-center text-white">{ic}</span>
                        ))}
                      </div>
                      <div className="absolute inset-x-4 bottom-6">
                        <div className="text-white text-[13px] font-semibold">@modernpoker · 2.1M views</div>
                        <div className="text-gray-300 text-[11px]">“Why I’m folding the river here, even closing.”</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-4 lg:gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i*80}>
              <div className="glass-strong rounded-3xl p-7 h-full feature-card relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mint/60 to-transparent" />
                <span className="w-11 h-11 rounded-xl bg-mint/10 border border-mint/25 text-mint grid place-items-center">{c.icon}</span>
                <h3 className="mt-6 text-white text-xl font-semibold">{c.title}</h3>
                <p className="mt-2 text-gray-400 leading-relaxed">{c.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ----------- Testimonials -----------
const Testimonials = () => {
  const cards = [
    {
      quote: 'Finally a poker app designed for live cash players. The bankroll view alone replaced three other tools for me.',
      name: 'Marcus L.',
      role: '$2/$5 grinder · Bay Area',
      stars: 5,
      tag: 'Live Cash',
    },
    {
      quote: 'The bankroll tracking alone is worth it. I’ve got a clean year of hourly data for the first time ever.',
      name: 'Sara T.',
      role: 'Recreational player · Toronto',
      stars: 5,
      tag: 'Bankroll',
    },
    {
      quote: 'Actually helps me study consistently. The quiz system surfaces the exact leaks the coach flagged.',
      name: 'Devon R.',
      role: 'Vlogger & mid-stakes pro',
      stars: 5,
      tag: 'Study',
    },
  ];
  return (
    <section id="testimonials" className="section relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <Eyebrow>Player Notes</Eyebrow>
              <Display className="mt-4 text-[40px] sm:text-[60px] lg:text-[76px] max-w-3xl">What players are saying.</Display>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <div className="flex">
                {[...Array(5)].map((_,i)=>(<span key={i} className="text-mint"><I.Star/></span>))}
              </div>
              <span><span className="text-white font-semibold">4.9</span> · early access feedback</span>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-4 lg:gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.name} delay={i*80}>
              <figure className="glass-strong rounded-3xl p-7 h-full flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {[...Array(c.stars)].map((_,k)=>(<span key={k} className="text-mint"><I.Star/></span>))}
                  </div>
                  <span className="chip text-[10px]"><span className="dot" />{c.tag}</span>
                </div>
                <blockquote className="mt-5 text-white text-lg leading-snug font-medium">
                  “{c.quote}”
                </blockquote>
                <figcaption className="mt-auto pt-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-gradient-to-br from-ink-600 to-ink-800 border border-white/10 grid place-items-center text-white font-semibold">
                    {c.name.split(' ').map(s=>s[0]).join('')}
                  </span>
                  <div>
                    <div className="text-white text-sm font-semibold">{c.name}</div>
                    <div className="text-gray-400 text-xs">{c.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ----------- Final CTA -----------
const FinalCTA = () => {
  return (
    <section id="cta" className="section relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="relative rounded-[40px] overflow-hidden p-10 sm:p-16 lg:p-24 text-center"
               style={{
                 background: 'linear-gradient(180deg, rgba(11,18,40,0.7) 0%, rgba(5,8,22,0.7) 100%)',
                 border: '1px solid rgba(87,242,135,0.18)',
               }}>
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[120%] h-[400px] -z-10"
                 style={{ background: 'radial-gradient(closest-side, rgba(87,242,135,0.35), transparent 70%)' }} />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mint to-transparent opacity-50" />
            <div className="absolute inset-0 bg-grid opacity-25" style={{
              WebkitMaskImage:'radial-gradient(closest-side, black 30%, transparent 75%)',
              maskImage:'radial-gradient(closest-side, black 30%, transparent 75%)'
            }} />
            <Eyebrow>Beta Access</Eyebrow>
            <Display className="mt-5 text-[52px] sm:text-[84px] lg:text-[124px]">
              Your edge<br/>starts here.
            </Display>
            <p className="mt-6 text-gray-300 text-lg sm:text-xl max-w-xl mx-auto">
              Study smarter. Track better. Improve faster.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 justify-center">
              <BtnMint size="lg" href="#">Try Beta</BtnMint>
              <BtnGhost size="lg" href="#" iconLeft={<I.Play/>}>Watch Demo</BtnGhost>
            </div>
            <div className="mt-8 flex flex-wrap gap-2.5 justify-center">
              <TrustChip>Free during beta</TrustChip>
              <TrustChip>iOS · Android · Web</TrustChip>
              <TrustChip>No card required</TrustChip>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

// ----------- Footer -----------
const Footer = () => {
  const cols = [
    { title: 'Product', links: ['AI Coach','Bankroll','Odds Calculator','Hand History','Quiz'] },
    { title: 'Company', links: ['About','Changelog','Roadmap','Contact'] },
    { title: 'Resources', links: ['Help center','Press kit','Status','Brand'] },
    { title: 'Legal', links: ['Terms','Privacy','Responsible play','Cookies'] },
  ];
  return (
    <footer className="border-t border-line pt-16 pb-10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Wordmark size="lg" />
            <p className="mt-4 text-gray-400 text-sm max-w-xs leading-relaxed">
              The AI poker companion for serious players. Built for the modern grinder — desk, table, or vlog.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {/* Social */}
              {[
                ['Twitter', <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M18 3h3l-7.5 8.6L22 21h-6.7l-5.2-6.1L4 21H1l8-9.1L1.7 3h6.9l4.7 5.6L18 3zm-1.2 16h1.7L7.3 4.9H5.5L16.8 19z"/></svg>],
                ['YouTube', <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.5 12 4.5 12 4.5s-7 0-8.9.6A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.6 8.9.6 8.9.6s7 0 8.9-.6a3 3 0 0 0 2.1-2.1c.4-1.5.5-3.2.5-4.8s-.1-3.3-.5-4.8zM10 15.4V8.6L15.8 12 10 15.4z"/></svg>],
                ['TikTok', <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M16.5 2c.4 2.1 1.6 3.7 3.5 4.4v3a7.7 7.7 0 0 1-4-1.1v6.5a6.4 6.4 0 1 1-6.4-6.4c.3 0 .6 0 1 .1v3.2a3.2 3.2 0 1 0 2.3 3V2h3.6z"/></svg>],
                ['Instagram', <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>],
                ['Discord', <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M19.5 5.4A17 17 0 0 0 15.3 4l-.2.4a14 14 0 0 0-6.2 0L8.7 4a17 17 0 0 0-4.2 1.4C2.3 9 1.7 12.5 2 16a17 17 0 0 0 5.1 2.6l.4-.6a11 11 0 0 1-1.7-.8l.4-.3a12 12 0 0 0 11.6 0l.4.3a11 11 0 0 1-1.7.8l.4.6A17 17 0 0 0 22 16c.3-3.7-.4-7.2-2.5-10.6zM9 14.3a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zm6 0a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6z"/></svg>],
              ].map(([name, ic]) => (
                <a key={name} aria-label={name} href="#" className="w-9 h-9 rounded-full grid place-items-center bg-white/5 border border-white/10 text-gray-300 hover:text-mint hover:border-mint/40 transition-colors">
                  {ic}
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {cols.map((col) => (
              <div key={col.title}>
                <div className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">{col.title}</div>
                <ul className="mt-3.5 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="hairline mt-14"></div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
          <div>© 2026 MicroPokerMaster · Built for serious poker players.</div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-mint" style={{boxShadow:'0 0 10px #57f287'}}></span>
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

Object.assign(window, { Problem, Features, ModernEra, Testimonials, FinalCTA, Footer });
