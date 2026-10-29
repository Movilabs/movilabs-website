const svgProps = {
  viewBox: "0 0 240 150",
  fill: "none",
  "aria-hidden": true,
  className: "h-full w-full",
};

export function PrincipleArt({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg {...svgProps}>
        <g className="stroke-line" strokeWidth="1" strokeDasharray="3 4">
          <rect x="14" y="24" width="40" height="24" rx="6" />
          <rect x="186" y="30" width="40" height="18" rx="6" />
          <rect x="18" y="104" width="36" height="22" rx="6" />
          <circle cx="206" cy="108" r="12" />
        </g>
        <rect x="74" y="20" width="92" height="110" rx="12" className="fill-canvas stroke-accent" strokeWidth="1.3" />
        <circle cx="120" cy="52" r="14" className="fill-accent" />
        <rect x="94" y="78" width="52" height="6" rx="3" className="fill-ink" />
        <rect x="102" y="90" width="36" height="4" rx="2" className="fill-line" />
        <rect x="92" y="104" width="56" height="14" rx="7" className="fill-accent" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg {...svgProps}>
        <line x1="76" y1="22" x2="76" y2="128" className="stroke-line" strokeWidth="1" strokeDasharray="3 4" />
        <text x="22" y="56" fontSize="38" fontWeight="500" className="fill-accent font-display">
          Aa
        </text>
        <text x="22" y="90" fontSize="22" fontWeight="500" className="fill-muted font-display">
          Aa
        </text>
        <text x="22" y="116" fontSize="12" className="fill-muted font-display">
          Aa
        </text>
        <rect x="92" y="36" width="124" height="14" rx="4" className="fill-accent" />
        <rect x="92" y="70" width="96" height="9" rx="3" className="fill-ink" />
        <rect x="92" y="96" width="124" height="5" rx="2.5" className="fill-line" />
        <rect x="92" y="108" width="108" height="5" rx="2.5" className="fill-line" />
        <rect x="92" y="120" width="70" height="5" rx="2.5" className="fill-line" />
      </svg>
    );
  }

  return (
    <svg {...svgProps}>
      <path d="M120 70 L200 100 L120 130 L40 100 Z" className="fill-canvas stroke-line" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M120 48 L200 78 L120 108 L40 78 Z" className="fill-panel stroke-muted" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M120 26 L200 56 L120 86 L40 56 Z" className="fill-accent stroke-accent" strokeWidth="1.2" strokeLinejoin="round" />
      <circle cx="120" cy="56" r="4" className="fill-canvas" />
    </svg>
  );
}
