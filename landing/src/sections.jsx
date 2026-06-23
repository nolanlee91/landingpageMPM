// Problem · Features · Modern Era · Testimonials · Final CTA · Footer

const Problem = () => {
  const cards = [
    {
      n: '01',
      title: 'You repeat the same leak',
      copy: 'The hand that cost you stacks last week shows up again tonight — but nothing tells you it’s a pattern.',
      icon: <I.Eye />,
    },
    {
      n: '02',
      title: 'No dollar on the mistake',
      copy: '“You should’ve folded” means nothing without a number. Which leak is actually bleeding your bankroll?',
      icon: <I.Stack />,
    },
    {
      n: '03',
      title: 'Solvers don’t fit live cash',
      copy: 'Desktop GTO tools aren’t built for $1/$2 live spots against a nitty reg — or for studying from your phone.',
      icon: <I.Target />,
    },
  ];
  return (
    <section id="problem" className="section relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>The Problem</Eyebrow>
          <Display className="mt-4 text-[44px] sm:text-[64px] lg:text-[80px] max-w-4xl">
            Your leaks are<br/>invisible.
          </Display>
          <p className="mt-5 text-gray-400 text-lg max-w-2xl">
            You don’t lose to one bad night — you lose to the same mistake, over and over, that nobody ever puts a price on.
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
const FeatureRow = ({ idx, eyebrow, title, body, bullets, screenshot, screenshot2, accent = 'mint', mirror = false, id }) => {
  return (
    <Reveal>
      <div id={id} className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center py-16 lg:py-24 scroll-mt-24 ${mirror ? 'lg:[&>.media]:order-2' : ''}`}>
        <div className="lg:col-span-6 media flex justify-center relative">
          <div className="absolute inset-0 -z-10" style={{background: accent==='blue' ? 'radial-gradient(closest-side, rgba(106,169,255,0.18), transparent 70%)' : 'radial-gradient(closest-side, rgba(87,242,135,0.18), transparent 70%)'}}/>
          {screenshot2 ? (
            <div className="flex items-center justify-center max-w-full">
              {/* Second phone only on ≥sm — two side-by-side phones overflow a narrow mobile column */}
              <div className="hidden sm:block -rotate-[7deg] float-b sm:-mr-20 z-0 opacity-95">
                <Phone src={screenshot2} glow={accent} width={210} notch={false} />
              </div>
              <div className="rotate-[4deg] float-a z-10">
                <Phone src={screenshot} glow={accent} width={250} notch={false} />
              </div>
            </div>
          ) : (
            <div className={mirror ? 'rotate-[3deg] float-c' : '-rotate-[3deg] float-a'}>
              <Phone src={screenshot} glow={accent} width={280} notch={false} />
            </div>
          )}
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
            Everything you need<br/>to plug the leaks.
          </Display>
          <p className="mt-5 text-gray-400 text-lg max-w-2xl">
            From the hand that cost you, to the drill that fixes it — one app, built for live cash, on your phone.
          </p>
        </Reveal>

        <div className="mt-6 divide-y divide-line">
          <FeatureRow
            idx={1}
            eyebrow="AI Coach"
            title="Paste — or speak — a hand."
            body="Type it, paste the history, or just tap the mic and say it out loud. No notation to learn — describe the spot like you'd tell a friend, online or live."
            bullets={['Voice input — say the hand', 'Paste any hand history', 'Plain English, no notation', 'First insight in ~60s']}
            screenshot="assets/coach-hero.jpg"
            accent="blue"
          />
          <FeatureRow
            idx={2}
            eyebrow="AI Coach"
            title="Get the truth on every hand."
            body="An instant read on the spot — your biggest mistake, the dollars it cost, and the better line, calibrated to your villain type and stake."
            bullets={['Biggest mistake + $ cost', 'A clear better line', 'Villain-type calibration', 'Explains in EN · VI · 中文']}
            screenshot="assets/ai-coach-analysis.jpg"
            accent="mint"
            mirror
          />
          <FeatureRow
            idx={3}
            eyebrow="Leak Profile"
            title="Every leak, ranked by $ lost."
            body="Each analyzed hand is tagged and grouped. Your most expensive leaks rise to the top — with a step-by-step fix plan built from your own hands."
            bullets={['Ranked by dollars lost', 'Recurring-leak detection', 'Step-by-step fix plan', 'Watch leaks shrink over time']}
            screenshot="assets/leak-profile.jpg"
            accent="blue"
          />
          <FeatureRow
            idx={4}
            eyebrow="Quiz & Drills"
            title="Drill the exact spots you leak."
            body="Targeted drills are pulled straight from your Leak Profile — so you practice the spots that actually cost you money, not random theory. Plus daily questions with XP and streaks."
            bullets={['Drills from your own leaks', 'Easy → Hard tiers', 'XP & daily streaks', 'Come back daily']}
            screenshot="assets/quiz.jpg"
            accent="mint"
            mirror
          />
          <FeatureRow
            idx={5}
            eyebrow="Session Debrief"
            title="One read on your whole night."
            body="Every hand you analyze is saved and grouped by day. Each night becomes a debrief: what repeated, the costliest spot, and one thing to fix next time."
            bullets={['Grouped by session', 'Costliest spot called out', 'What repeated', 'One fix for next time']}
            screenshot="assets/debrief-detail.jpg"
            accent="blue"
          />
          <FeatureRow
            idx={6}
            eyebrow="Bankroll Tracker"
            title="Track what actually matters."
            body="Sessions, profit curve, $/hour, ROI and win rate — wired to your hands so you see the real truth of your game, not a vibe."
            bullets={['Sessions + profit/loss curve', '$/hour · ROI · win rate', 'Stats and history in one', 'Live cash optimized']}
            screenshot="assets/bankroll-stats.jpg"
            screenshot2="assets/bankroll-sessions.jpg"
            accent="mint"
            mirror
          />
          <FeatureRow
            idx={7}
            eyebrow="Odds Calculator"
            title="Equity in two taps."
            body="Exact on the turn and river, Monte Carlo otherwise. Multiway support and fast enough to use while you study a spot."
            bullets={['Exact turn & river', 'Multiway villains', 'Fast Monte Carlo', 'Mobile optimized']}
            screenshot="assets/odds.jpg"
            accent="blue"
          />
          <FeatureRow
            idx={8}
            eyebrow="Hand Journal"
            title="A home for your key hands."
            body="Save the hands worth remembering with your own notes, link them to sessions, and send them into the AI Coach whenever you want a second read."
            bullets={['Save key hands + notes', 'Link to sessions', 'Send to AI Coach', 'Win-rate at a glance']}
            screenshot="assets/hand-journal.jpg"
            accent="mint"
            mirror
          />
          <FeatureRow
            idx={9}
            id="install"
            eyebrow="Install it"
            title="Add it to your home screen."
            body="No app store, no download wait. Tap “Add to home screen” and MicroPokerMaster opens full-screen and launches like a native app — straight from your phone."
            bullets={['Open Settings → Install app', 'Add to home screen', 'Opens full-screen, app-like', 'iOS & Android']}
            screenshot="assets/install-prefs.jpg"
            accent="blue"
          />
        </div>
      </div>
    </section>
  );
};

// ----------- Pricing -----------
const Pricing = () => {
  const freePerks = [
    'Paste a hand → your biggest mistake + a better line',
    '10 hand analyses to get started',
    'Odds calculator, bankroll & quiz',
    'A teaser of your top leak',
  ];
  const proPerks = [
    'Full Leak Profile — every leak ranked by $ lost',
    'The $ cost of each leak (not blurred)',
    'Step-by-step fix plan built from your own hands',
    'Session debriefs + deep follow-up coaching',
    '60 hand analyses every month',
  ];
  return (
    <section id="pricing" className="section relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Pricing</Eyebrow>
          <Display className="mt-4 text-[40px] sm:text-[60px] lg:text-[80px] max-w-3xl">Start free.<br/>Go Pro when it pays.</Display>
          <p className="mt-5 text-gray-400 text-lg max-w-2xl">
            Find your biggest mistake for free. Unlock the full Leak Profile — and the dollars behind every leak — for less than one buy-in a month.
          </p>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-2 gap-5 lg:gap-6 max-w-4xl">
          {/* Free */}
          <Reveal>
            <div className="glass-strong rounded-3xl p-8 h-full flex flex-col">
              <div className="flex items-center justify-between">
                <span className="chip text-[11px]"><span className="dot" />Free</span>
              </div>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-display text-6xl text-white">$0</span>
              </div>
              <div className="mt-1 text-gray-400 text-sm">Free account · no card needed.</div>
              <ul className="mt-6 space-y-3 flex-1">
                {freePerks.map(p => (
                  <li key={p} className="flex items-start gap-2.5 text-[14.5px] text-gray-200">
                    <span className="mt-0.5 w-5 h-5 grid place-items-center rounded-full bg-white/10 text-gray-300 shrink-0"><I.Check size={12}/></span>{p}
                  </li>
                ))}
              </ul>
              <BtnGhost size="lg" href="https://app.micropokermaster.com/" target="_blank" className="mt-8 w-full">Start free</BtnGhost>
            </div>
          </Reveal>

          {/* Pro */}
          <Reveal delay={100}>
            <div className="rounded-3xl p-8 h-full flex flex-col relative overflow-hidden" style={{border:'1px solid rgba(87,242,135,0.3)', background:'linear-gradient(180deg, rgba(20,28,55,0.7), rgba(8,12,28,0.55))'}}>
              <div className="absolute -top-28 right-0 w-72 h-72 -z-0" style={{background:'radial-gradient(closest-side, rgba(87,242,135,0.18), transparent 70%)'}}/>
              <div className="relative z-10 flex items-center justify-between">
                <span className="chip text-[11px]"><span className="dot" />Pro</span>
                <span className="chip text-[11px] text-mint" style={{borderColor:'rgba(87,242,135,0.4)'}}>Save 17% yearly</span>
              </div>
              <div className="relative z-10 mt-5 flex items-baseline gap-1.5">
                <span className="font-display text-6xl text-white">$11.99</span>
                <span className="text-gray-400 text-sm">/mo</span>
              </div>
              <div className="relative z-10 mt-1 text-gray-400 text-sm">or $119/year — $9.92/mo · less than one buy-in.</div>
              <ul className="relative z-10 mt-6 space-y-3 flex-1">
                {proPerks.map(p => (
                  <li key={p} className="flex items-start gap-2.5 text-[14.5px] text-gray-100">
                    <span className="mt-0.5 w-5 h-5 grid place-items-center rounded-full bg-mint/15 text-mint shrink-0"><I.Check size={12}/></span>{p}
                  </li>
                ))}
              </ul>
              <BtnMint size="lg" href="https://app.micropokermaster.com/" target="_blank" className="relative z-10 mt-8 w-full">Go Pro</BtnMint>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-8 flex flex-wrap gap-2.5">
            <TrustChip>Secure checkout · Stripe</TrustChip>
            <TrustChip>Cancel anytime</TrustChip>
            <TrustChip>Payments non-refundable</TrustChip>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

// ----------- Footer -----------
const Footer = () => {
  const APP = 'https://app.micropokermaster.com/';
  const cols = [
    { title: 'Product', links: [
      ['Features', '#features'],
      ['Leaks', '#leaks'],
      ['Pricing', '#pricing'],
      ['Start free', APP],
    ] },
    { title: 'Legal', links: [
      ['Terms', APP + 'terms'],
      ['Privacy', APP + 'privacy'],
      ['Contact', 'mailto:support@micropokermaster.com'],
    ] },
  ];
  const ext = (h) => /^https?:|^mailto:/.test(h);
  return (
    <footer className="border-t border-line pt-16 pb-10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-12 gap-10">
          <div className="sm:col-span-6 lg:col-span-5">
            <Wordmark size="lg" />
            <p className="mt-4 text-gray-400 text-sm max-w-xs leading-relaxed">
              The AI poker leak finder for live cash players. Paste a hand, find your leaks, fix them — from your phone.
            </p>
          </div>
          <div className="sm:col-span-6 lg:col-span-7 grid grid-cols-2 gap-8">
            {cols.map((col) => (
              <div key={col.title}>
                <div className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">{col.title}</div>
                <ul className="mt-3.5 space-y-2.5">
                  {col.links.map(([label, href]) => (
                    <li key={label}>
                      <a
                        href={href}
                        {...(ext(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="text-gray-300 hover:text-white text-sm transition-colors"
                      >{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="hairline mt-14"></div>
        <div className="mt-6 text-xs text-gray-500">
          © 2026 MicroPokerMaster · Built for live cash players.
        </div>
      </div>
    </footer>
  );
};

Object.assign(window, { Problem, Features, Pricing, Footer });
