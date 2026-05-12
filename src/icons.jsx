// Inline SVG icons. Stroke-based, 1.6 width, consistent silhouette.
const Icon = ({ children, size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
       className={className}>
    {children}
  </svg>
);

const I = {
  Spade: ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.5c-1.6 2.6-3.8 4.6-5.6 6.1-1.7 1.5-2.9 3-2.9 4.9 0 2.5 2 4.5 4.5 4.5 1.3 0 2.4-.5 3.2-1.4l-.7 4.2h3l-.7-4.2c.8.9 1.9 1.4 3.2 1.4 2.5 0 4.5-2 4.5-4.5 0-1.9-1.2-3.4-2.9-4.9C15.8 7.1 13.6 5.1 12 2.5z"/>
    </svg>
  ),
  Brain: () => (
    <Icon><path d="M9 4a3 3 0 0 0-3 3v.5A3 3 0 0 0 4 10v1a3 3 0 0 0 1.5 2.6V15a3 3 0 0 0 3 3h.5"/><path d="M15 4a3 3 0 0 1 3 3v.5A3 3 0 0 1 20 10v1a3 3 0 0 1-1.5 2.6V15a3 3 0 0 1-3 3H15"/><path d="M12 4v16"/><path d="M9 9h.01M15 9h.01"/></Icon>
  ),
  Wallet: () => (
    <Icon><rect x="3" y="6" width="18" height="13" rx="2.5"/><path d="M3 9h15a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H3"/><circle cx="17" cy="12" r="1.2"/></Icon>
  ),
  Calc: () => (
    <Icon><rect x="4" y="3" width="16" height="18" rx="2.5"/><path d="M8 7h8M8 11h2M12 11h2M16 11h0M8 15h2M12 15h2M16 15h0M8 19h2M12 19h2M16 19h0"/></Icon>
  ),
  Stack: () => (
    <Icon><path d="M4 7l8-4 8 4-8 4-8-4z"/><path d="M4 12l8 4 8-4"/><path d="M4 17l8 4 8-4"/></Icon>
  ),
  Bolt: () => (
    <Icon><path d="M13 3 4 14h7l-1 7 9-11h-7l1-7z"/></Icon>
  ),
  Chart: () => (
    <Icon><path d="M3 20h18"/><path d="M6 16l4-5 3 3 5-7"/><circle cx="6" cy="16" r="0.8" fill="currentColor"/><circle cx="18" cy="7" r="0.8" fill="currentColor"/></Icon>
  ),
  Play: () => (
    <Icon><path d="M6 4l14 8-14 8V4z" fill="currentColor"/></Icon>
  ),
  Arrow: () => (
    <Icon><path d="M5 12h14M13 6l6 6-6 6"/></Icon>
  ),
  Check: () => (
    <Icon><path d="M5 12l4 4 10-10"/></Icon>
  ),
  Sparkle: () => (
    <Icon><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18"/></Icon>
  ),
  Target: () => (
    <Icon><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1" fill="currentColor"/></Icon>
  ),
  Eye: () => (
    <Icon><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></Icon>
  ),
  Phone: () => (
    <Icon><rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/></Icon>
  ),
  Lock: () => (
    <Icon><rect x="4.5" y="10" width="15" height="10" rx="2.5"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></Icon>
  ),
  ChevronDown: () => (
    <Icon><path d="M6 9l6 6 6-6"/></Icon>
  ),
  Menu: () => (
    <Icon><path d="M4 7h16M4 12h16M4 17h16"/></Icon>
  ),
  Close: () => (
    <Icon><path d="M6 6l12 12M18 6L6 18"/></Icon>
  ),
  Camera: () => (
    <Icon><rect x="3" y="7" width="18" height="13" rx="2.5"/><circle cx="12" cy="13.5" r="3.5"/><path d="M9 7l1.5-3h3L15 7"/></Icon>
  ),
  Mic: () => (
    <Icon><rect x="9.5" y="3" width="5" height="11" rx="2.5"/><path d="M6 11a6 6 0 0 0 12 0M12 17v3"/></Icon>
  ),
  Trend: () => (
    <Icon><path d="M3 17l6-6 4 4 8-9"/><path d="M14 6h7v7"/></Icon>
  ),
  Quote: () => (
    <Icon><path d="M7 7h4v4c0 2-1 4-4 4M14 7h4v4c0 2-1 4-4 4"/></Icon>
  ),
  Star: () => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
      <path d="M12 2l2.9 6.9 7.5.6-5.7 4.9 1.8 7.3L12 17.8 5.5 21.7 7.3 14.4 1.6 9.5 9.1 8.9z"/>
    </svg>
  ),
};

window.I = I;
