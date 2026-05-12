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

      {/* Center phone — Bankroll (hero shot) */}
      <div className="absolute left-1/2 top-6 -translate-x-1/2 float-a z-20">
        <Phone src="assets/app-bankroll.png" glow="mint" width={300} />
      </div>

      {/* Left phone — Coach */}
      <div className="absolute left-0 lg:-left-10 top-32 sm:top-28 float-b -rotate-[8deg] z-10 hidden sm:block">
        <Phone src="assets/app-coach.png" glow="blue" width={230} />
      </div>

      {/* Right phone — Odds */}
      <div className="absolute right-0 lg:-right-8 top-40 sm:top-36 float-c rotate-[7deg] z-10 hidden sm:block">
        <Phone src="assets/app-odds.png" glow="mint" width={230} />
      </div>

      {/* Bottom-right small — Quiz */}
      <div className="absolute right-6 bottom-2 float-b rotate-[4deg] z-30 hidden lg:block">
        <Phone src="assets/app-quiz.png" glow="mint" width={210} />
      </div>

      {/* Floating analytics card */}
      <div className="absolute left-2 lg:-left-6 bottom-8 z-30 hidden md:block float-c">
        <div className="glass-strong rounded-2xl p-4 w-[230px] shadow-card">
          <div className="flex items-center justify-between">
            <div className="text-[10px] uppercase tracking-[0.18em] text-gray-400 font-semibold">Hourly</div>
            <span className="chip py-0.5 px-2 text-[10px]"><span className="dot" />live</span>
          </div>
          <div className="mt-1.5 flex items-baseline gap-1">
            <span className="font-display text-4xl text-mint" style={{textShadow:'0 0 24px rgba(87,242,135,0.45)'}}>$108.2</span>
            <span className="text-gray-400 text-xs">/h</span>
          </div>
          <div className="mt-3 flex items-end gap-1 h-10">
            {[5,7,4,9,6,8,12,10,14,11,16,13].map((h,i)=>(
              <div key={i} className="bar flex-1" style={{height: `${h*4}px`}} />
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
              <div className="text-[10px] uppercase tracking-[0.18em] text-gray-400 font-semibold">Leak Detected</div>
              <div className="text-white text-[13px] font-semibold">Overfolding river vs LAG</div>
            </div>
          </div>
          <div className="mt-2.5 h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full bg-mint" style={{width:'62%', boxShadow:'0 0 12px #57f287'}} />
          </div>
          <div className="mt-1.5 flex justify-between text-[10px] text-gray-400">
            <span>Confidence</span><span className="text-mint font-semibold">62%</span>
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
              <div className="inline-flex items-center gap-2 chip"><span className="dot" />Now in Beta · Live Cash Focused</div>
            </Reveal>
            <Reveal delay={80}>
              <Display className="mt-5 text-[52px] sm:text-[80px] lg:text-[100px] xl:text-[116px]">
                Stop Guessing.<br/>
                <span className="relative inline-block">
                  Start Studying<br/>Like a&nbsp;Pro.
                  <span className="absolute -inset-x-2 -bottom-2 h-1 bg-mint blur-md opacity-60"></span>
                </span>
              </Display>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-gray-300 text-lg sm:text-xl max-w-xl leading-relaxed">
                Track sessions, analyze hands, detect leaks, and improve faster with AI — the operating system for serious live cash players.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <ul className="mt-7 grid sm:grid-cols-3 gap-3 max-w-xl">
                {[
                  ['AI hand analysis', <I.Brain/>],
                  ['Bankroll tracking', <I.Wallet/>],
                  ['Leak detection', <I.Target/>],
                ].map(([t, icon]) => (
                  <li key={t} className="glass rounded-xl px-3.5 py-3 flex items-center gap-2.5">
                    <span className="text-mint">{icon}</span>
                    <span className="text-[13.5px] text-gray-100 font-medium">{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-8 flex flex-wrap gap-3">
                <BtnMint size="lg" href="#cta">Try Beta</BtnMint>
                <BtnGhost size="lg" href="#demo" iconLeft={<I.Play/>}>Watch Demo</BtnGhost>
              </div>
            </Reveal>
            <Reveal delay={340}>
              <div className="mt-7 flex flex-wrap gap-2.5">
                <TrustChip>Live Cash Focused</TrustChip>
                <TrustChip>AI Powered</TrustChip>
                <TrustChip>Mobile First</TrustChip>
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
                ['$1/$3 NL', 'Bay 101', 'Vegas Cash', 'Hustler Live', 'Commerce Casino', 'PokerGO Studios', 'Lodge ATX', 'WPT Cash', '$5/$10 Mid-Stakes', 'Vlogger Approved'].map((t, j) => (
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
