const common = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function PrincipleIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="5" rx="1.5" />
        <rect x="3" y="12" width="11" height="3" rx="1" />
        <rect x="3" y="18" width="7" height="2" rx="1" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M12 3l9 5-9 5-9-5z" />
      <path d="M3 13l9 5 9-5" />
    </svg>
  );
}
