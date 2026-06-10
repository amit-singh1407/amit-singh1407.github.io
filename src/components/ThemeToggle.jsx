import { useTheme } from '../context/ThemeContext';

/* ── Crescent Moon SVG ────────────────────────────────────────── */
const MoonSVG = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    style={{ animation: 'moon-glow 3s ease-in-out infinite', display: 'block' }}>
    <path
      d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
      fill="#f1f5f9"
    />
  </svg>
);

/* ── Rotating Sun SVG ─────────────────────────────────────────── */
const SunSVG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ display: 'block' }}>
    {/* Rotating rays */}
    <g style={{ transformOrigin: '12px 12px', animation: 'spin-rays 6s linear infinite' }}>
      {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => (
        <line
          key={angle}
          x1="12" y1="2.5"
          x2="12" y2="5.5"
          stroke="#92400e"
          strokeWidth="2.2"
          strokeLinecap="round"
          transform={`rotate(${angle} 12 12)`}
        />
      ))}
    </g>
    {/* Core glow ring */}
    <circle cx="12" cy="12" r="5.2" fill="#f59e0b" opacity="0.4" />
    {/* Core */}
    <circle cx="12" cy="12" r="4" fill="#fef3c7" />
    <circle cx="12" cy="12" r="2.5" fill="#fbbf24" />
  </svg>
);

/* ── Stars helper ─────────────────────────────────────────────── */
const STARS = [
  { top: '7px',  right: '11px', size: '2.5px', delay: '0s',    dur: '2.1s' },
  { top: '20px', right: '16px', size: '2px',   delay: '0.45s', dur: '1.8s' },
  { top: '11px', right: '23px', size: '3px',   delay: '0.9s',  dur: '2.5s' },
];

/* ── Cloud puffs helper ───────────────────────────────────────── */
const CLOUDS = [
  { top: '8px',  right: '11px', w: '11px', h: '5px',  opacity: 0.9, delay: '0s'    },
  { top: '18px', right: '15px', w: '8px',  h: '4px',  opacity: 0.7, delay: '0.1s'  },
];

/* ═══════════════════════════════════════════════════════════════ */
export default function ThemeToggle({ className = '' }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      {/* Keyframes injected once */}
      <style>{`
        @keyframes spin-rays {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 1;   transform: scale(1);   }
          50%       { opacity: 0.2; transform: scale(0.5); }
        }
        @keyframes moon-glow {
          0%, 100% { filter: drop-shadow(0 0 2px rgba(226,232,240,0.7)); }
          50%       { filter: drop-shadow(0 0 6px rgba(226,232,240,1));   }
        }
        @keyframes cloud-drift {
          0%, 100% { transform: translateX(0); }
          50%       { transform: translateX(2px); }
        }
      `}</style>

      <button
        onClick={toggleTheme}
        aria-label={isDark ? 'Switch to day mode' : 'Switch to night mode'}
        title={isDark ? 'Switch to day mode' : 'Switch to night mode'}
        className={className}
        style={{
          position:     'relative',
          width:        '72px',
          height:       '34px',
          borderRadius: '9999px',
          border:       'none',
          cursor:       'pointer',
          padding:      0,
          overflow:     'hidden',
          flexShrink:   0,
          outline:      'none',
          /* Sky gradient background */
          background: isDark
            ? 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #0f2744 100%)'
            : 'linear-gradient(135deg, #7dd3fc 0%, #38bdf8 40%, #fde68a 100%)',
          boxShadow: isDark
            ? '0 0 0 1.5px #334155, inset 0 1px 3px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.4)'
            : '0 0 0 1.5px #fbbf24, inset 0 1px 3px rgba(0,0,0,0.1), 0 2px 8px rgba(251,191,36,0.3)',
          transition: 'background 0.5s ease, box-shadow 0.4s ease',
        }}
      >
        {/* ── Twinkling stars (dark mode only) ──── */}
        {STARS.map((s, i) => (
          <span
            key={`star-${i}`}
            style={{
              position:     'absolute',
              top:          s.top,
              right:        s.right,
              width:        s.size,
              height:       s.size,
              borderRadius: '50%',
              background:   'white',
              opacity:       isDark ? 1 : 0,
              animation:     isDark ? `twinkle ${s.dur} ${s.delay} infinite ease-in-out` : 'none',
              transition:   'opacity 0.4s ease',
            }}
          />
        ))}

        {/* ── Cloud puffs (light mode only) ──────── */}
        {CLOUDS.map((c, i) => (
          <span
            key={`cloud-${i}`}
            style={{
              position:     'absolute',
              top:          c.top,
              right:        c.right,
              width:        c.w,
              height:       c.h,
              borderRadius: '9999px',
              background:   `rgba(255,255,255,${c.opacity})`,
              opacity:       isDark ? 0 : 1,
              transition:   `opacity 0.4s ease ${c.delay}`,
              animation:    !isDark ? `cloud-drift 3s ease-in-out ${c.delay} infinite` : 'none',
            }}
          />
        ))}

        {/* ── Sliding thumb ───────────────────────── */}
        <span
          style={{
            position:     'absolute',
            top:          '4px',
            left:         '4px',
            width:        '26px',
            height:       '26px',
            borderRadius: '50%',
            display:      'flex',
            alignItems:   'center',
            justifyContent: 'center',
            /* Slide: dark→left  light→right */
            transform:    isDark ? 'translateX(0)' : 'translateX(38px)',
            transition:   'transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)',
            /* Moon: slate-white radial  |  Sun: warm amber radial */
            background: isDark
              ? 'radial-gradient(circle at 38% 38%, #e2e8f0 0%, #94a3b8 100%)'
              : 'radial-gradient(circle at 38% 38%, #fef9c3 0%, #fbbf24 100%)',
            boxShadow: isDark
              ? '0 0 10px 3px rgba(148,163,184,0.55), 0 2px 5px rgba(0,0,0,0.5)'
              : '0 0 14px 4px rgba(251,191,36,0.65), 0 2px 5px rgba(0,0,0,0.2)',
            transition: [
              'transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)',
              'background 0.4s ease',
              'box-shadow 0.4s ease',
            ].join(', '),
          }}
        >
          {isDark ? <MoonSVG /> : <SunSVG />}
        </span>
      </button>
    </>
  );
}
