// Hero section

const HeroPhones = () => {
  return (
    <div className="relative h-[640px] sm:h-[720px] lg:h-[780px] w-full">
      {/* Backdrop felt glow */}
      <div className="absolute inset-0 -z-10 felt rounded-[40px]" />
      <div className="absolute -top-10 -right-10 w-[60%] h-[60%] -z-10 rounded-full"
           style={{ background: 'radial-gradient(closest-side, rgba(87,242,135,0.18), transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[55%] h-[50%] -z-10 rounded-full"
           style={{ background: 'radial-gradient(closest-side, rgba(106,169,255,0.18), transparent 70%)' }} />

      {/* Center phone — Leak Profile (the hero shot / moat).
          NOTE: the float-* animation sets `transform: translateY()` which would
          override Tailwind's -translate-x-1/2 / rotate. Keep positioning+rotate on
          the OUTER div and the float animation on an INNER div so they compose
          (otherwise the phone loses centering and gets cut off on mobile). */}
      <div className="absolute left-1/2 top-6 -translate-x-1/2 z-20 max-w-[86vw]">
        <div className="float-a"><Phone src="assets/leak-profile.jpg" glow="mint" width={300} notch={false} /></div>
      </div>

      {/* Left phone — AI Coach analysis */}
      <div className="absolute left-0 lg:-left-10 top-32 sm:top-28 -rotate-[8deg] z-10 hidden sm:block">
        <div className="float-b"><Phone src="assets/ai-coach-analysis.jpg" glow="blue" width={230} notch={false} /></div>
      </div>

      {/* Right phone — Odds */}
      <div className="absolute right-0 lg:-right-8 top-40 sm:top-36 rotate-[7deg] z-10 hidden sm:block">
        <div className="float-c"><Phone src="assets/odds.jpg" glow="mint" width={230} notch={false} /></div>
      </div>

      {/* Bottom-right small — Quiz */}
      <div className="absolute right-6 bottom-2 rotate-[4deg] z-30 hidden lg:block">
        <div className="float-b"><Phone src="assets/quiz.jpg" glow="mint" width={210} notch={false} /></div>
      </div>

      {/* Floating analytics card */}
      <div className="absolute left-2 lg:-left-6 bottom-8 z-30 hidden md:block float-c">
        <div className="glass-strong rounded-2xl p-4 w-[230px] shadow-card">
          <div className="flex items-center justify-between">
            <div className="text-[10px] uppercase tracking-[0.18em] text-gray-400 font-semibold">Biggest leak</div>
            <span className="chip py-0.5 px-2 text-[10px]"><span className="dot" />ranked</span>
          </div>
          <div className="mt-1.5 flex items-baseline gap-1">
            <span className="font-display text-4xl text-red-300" style={{textShadow:'0 0 24px rgba(244,112,103,0.4)'}}>~$1,010</span>
          </div>
          <div className="mt-1 text-[11px] text-gray-400">River Call Too Wide · ×5</div>
          <div className="mt-3 flex items-end gap-1 h-10">
            {[16,5,4,3,3,2,2,2,1,1,1,1].map((h,i)=>(
              <div key={i} className={`flex-1 ${i===0?'bar':'bar muted'}`} style={{height: `${Math.max(h*2.2,4)}px`}} />
            ))}
          </div>
        </div>
      </div>

      {/* Floating leak tag card */}
      <div className="absolute right-4 lg:right-6 -top-2 z-30 hidden md:block float-a">
        <div className="glass-strong rounded-2xl p-3.5 w-[240px] shadow-card">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg flex items-center justify-center bg-mint/15 text-mint border border-mint/30"><I.Sparkle/></span>
            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-gray-400 font-semibold">Fix plan ready</div>
              <div className="text-white text-[13px] font-semibold">Missed Value · thin bets</div>
            </div>
          </div>
          <div className="mt-2.5 h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full bg-mint" style={{width:'78%', boxShadow:'0 0 12px #57f287'}} />
          </div>
          <div className="mt-1.5 flex justify-between text-[10px] text-gray-400">
            <span>Step-by-step plan</span><span className="text-mint font-semibold">4 steps</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="top" className="relative pt-32 sm:pt-36 pb-10 sm:pb-20 overflow-hidden">
      {/* Top-bleed grid */}
      <div className="absolute inset-x-0 top-0 h-[520px] -z-10 bg-grid opacity-40" style={{
        WebkitMaskImage: 'linear-gradient(180deg, black, transparent)',
        maskImage: 'linear-gradient(180deg, black, transparent)'
      }} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          <div className="lg:col-span-6 xl:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 chip"><span className="dot" />AI Leak Finder · Live Cash</div>
            </Reveal>
            <Reveal delay={80}>
              <Display className="mt-5 text-[52px] sm:text-[80px] lg:text-[100px] xl:text-[112px]">
                Find the leaks<br/>
                <span className="relative inline-block">
                  costing you<br/>the most.
                  <span className="absolute -inset-x-2 -bottom-2 h-1 bg-mint blur-md opacity-60"></span>
                </span>
              </Display>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-gray-300 text-lg sm:text-xl max-w-xl leading-relaxed">
                Paste a hand — online or live — and get your biggest mistake and a better line in seconds. MicroPokerMaster builds a Leak Profile that ranks every leak by the dollars it costs you, then hands you a fix.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <ul className="mt-7 grid sm:grid-cols-3 gap-3 max-w-xl">
                {[
                  ['Find your leaks', <I.Target/>],
                  ['AI hand analysis', <I.Brain/>],
                  ['Ranked by $ lost', <I.Wallet/>],
                ].map(([t, icon]) => (
                  <li key={t} className="glass rounded-xl px-3.5 py-3 flex items-center gap-2.5">
                    <span className="text-mint">{icon}</span>
                    <span className="text-[13.5px] text-gray-100 font-medium">{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-8">
                <BtnMint size="lg" href="https://app.micropokermaster.com/" target="_blank">Start free</BtnMint>
              </div>
            </Reveal>
            <Reveal delay={340}>
              <div className="mt-7 flex flex-wrap gap-2.5">
                <TrustChip>No signup to try</TrustChip>
                <TrustChip>First insight in ~60s</TrustChip>
                <TrustChip>Live &amp; online</TrustChip>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 xl:col-span-5 relative">
            <HeroPhones />
          </div>
        </div>

        {/* Logo-strip / marquee of "trusted by" themes — content-neutral */}
        <Reveal>
          <div className="mt-16 sm:mt-20 relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-950 to-transparent z-10 pointer-events-none" />
            <div className="flex gap-12 marquee-track whitespace-nowrap items-center">
              {[...Array(2)].flatMap((_, i) => (
                ['Built for $1/$2 Live', '$1/$3 Live', '$2/$5 Live', 'Online Micro', 'Card Room Grind', 'Live Cash First', 'Paste a hand', 'Find your leaks', 'Mobile-first', 'EN · VI · 中文'].map((t, j) => (
                  <span key={`${i}-${j}`} className="font-display uppercase tracking-[0.18em] text-gray-500 text-base sm:text-lg">{t} <span className="text-gray-700 ml-12">●</span></span>
                ))
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

window.Hero = Hero;
