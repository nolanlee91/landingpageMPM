// Forward marketing attribution from the landing site into the app.
// Landing (micropokermaster.com) and the app (app.micropokermaster.com) are
// different origins → they do NOT share localStorage. So when a visitor arrives on
// the landing with ?utm_* (e.g. from an Instagram/Facebook link), we copy those
// params — plus the real external referrer and the landing path — onto every CTA
// link that points at the app. The app then captures them (src/lib/attribution.js).
//
// Plain JS (no JSX/Babel): the rest of the landing is rendered by React via
// Babel-in-browser, so the CTA links appear AFTER load — we rescan as the DOM fills.
(function () {
  var APP_PREFIX = 'https://app.micropokermaster.com';
  var UTM = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

  var here = new URLSearchParams(window.location.search);
  var fwd = new URLSearchParams();
  UTM.forEach(function (k) { var v = here.get(k); if (v) fwd.set(k, v); });
  if (document.referrer) fwd.set('mpm_ref', document.referrer);
  fwd.set('mpm_lp', window.location.pathname + window.location.search);

  // Nothing to forward unless this visit actually carries a campaign source or an
  // external referrer — don't decorate links for plain organic visits.
  if (!fwd.has('utm_source') && !document.referrer) return;

  function decorate(a) {
    if (!a || a.dataset.utmDone) return;
    try {
      var url = new URL(a.href);
      var q = url.searchParams;
      fwd.forEach(function (v, k) { if (!q.has(k)) q.set(k, v); });
      url.search = q.toString();
      a.href = url.toString();
      a.dataset.utmDone = '1';
    } catch (e) { /* leave the link as-is on any parse error */ }
  }
  function scan() {
    var links = document.querySelectorAll('a[href^="' + APP_PREFIX + '"]');
    for (var i = 0; i < links.length; i++) decorate(links[i]);
  }

  scan();
  document.addEventListener('DOMContentLoaded', scan);
  if (window.MutationObserver) {
    var mo = new MutationObserver(scan);
    mo.observe(document.documentElement, { childList: true, subtree: true });
    // Stop watching once the page has settled — no need to observe forever.
    setTimeout(function () { mo.disconnect(); scan(); }, 8000);
  }
})();
