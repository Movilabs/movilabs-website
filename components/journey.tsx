import type { SVGProps } from "react";

type Step = { title: string; note: string };

type JourneyProps = {
  label: string;
  steps: Step[];
};

const nodes = [
  { x: 60, y: 140 },
  { x: 280, y: 110 },
  { x: 510, y: 110 },
  { x: 735, y: 100 },
];

export function PhoneMock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 130 220" aria-hidden {...props}>
      <rect x="2" y="2" width="126" height="216" rx="22" className="fill-panel stroke-accent" strokeWidth="1.4" />
      <rect x="49" y="10" width="32" height="6" rx="3" className="fill-line" />
      <rect x="12" y="26" width="106" height="182" rx="13" className="fill-canvas" />
      <rect x="22" y="38" width="44" height="7" rx="3.5" className="fill-accent" />
      <rect x="22" y="52" width="84" height="5" rx="2.5" className="fill-line" />
      <g className="stroke-line" strokeWidth="1">
        <rect x="22" y="70" width="86" height="30" rx="8" className="fill-panel" />
        <rect x="22" y="106" width="86" height="30" rx="8" className="fill-panel" />
      </g>
      <circle cx="37" cy="85" r="6" className="fill-accent" />
      <circle cx="37" cy="121" r="6" className="fill-muted" />
      <rect x="50" y="80" width="40" height="5" rx="2.5" className="fill-ink" />
      <rect x="50" y="90" width="26" height="4" rx="2" className="fill-line" />
      <rect x="50" y="116" width="34" height="5" rx="2.5" className="fill-ink" />
      <rect x="50" y="126" width="22" height="4" rx="2" className="fill-line" />
      <polyline
        points="26,178 44,164 62,170 82,150 102,155"
        fill="none"
        className="stroke-accent"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="22" y="186" width="86" height="14" rx="7" className="fill-accent" />
    </svg>
  );
}

export function Journey({ label, steps }: JourneyProps) {
  return (
    <div>
      <div className="hidden lg:block">
        <svg
          viewBox="0 0 1000 252"
          role="img"
          aria-label={`${label}: ${steps.map((step) => step.title).join(" → ")}`}
          className="mx-auto h-auto max-h-[30vh] w-full"
        >
          <path
            d="M60 140 C 130 40, 220 40, 280 110 S 440 185, 510 110 S 680 45, 735 100"
            fill="none"
            className="stroke-accent animate-dash-flow"
            strokeWidth="1.5"
            strokeDasharray="5 6"
          />

          <line x1="60" y1="224" x2="735" y2="224" className="stroke-muted" strokeWidth="0.8" />
          {nodes.map((node, index) => (
            <g key={steps[index].title}>
              <line x1={node.x} y1="217" x2={node.x} y2="231" className="stroke-muted" strokeWidth="0.8" />
              <text x={node.x} y="246" textAnchor="middle" className="fill-muted" fontSize="10" letterSpacing="1.5">
                {String(index + 1).padStart(2, "0")}
              </text>
              <line
                x1={node.x}
                y1={node.y + 14}
                x2={node.x}
                y2="166"
                className="stroke-line"
                strokeWidth="1"
                strokeDasharray="2 4"
              />
              <circle
                cx={node.x}
                cy={node.y}
                r="10"
                strokeWidth="1.5"
                className={index === nodes.length - 1 ? "fill-accent stroke-accent" : "fill-canvas stroke-accent"}
              />
              <text x={node.x} y="188" textAnchor="middle" className="fill-ink" fontSize="15" fontWeight="500">
                {steps[index].title}
              </text>
              <text x={node.x} y="207" textAnchor="middle" className="fill-muted" fontSize="12.5">
                {steps[index].note}
              </text>
            </g>
          ))}

          <PhoneMock x="835" y="6" width="125" height="212" />
        </svg>
      </div>

      <div className="flex items-end justify-between gap-6 lg:hidden">
        <ol className="relative space-y-7 border-l border-line pl-6" aria-label={label}>
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              <span
                aria-hidden
                className={`absolute -left-[1.95rem] top-1 h-3 w-3 rounded-full border border-accent ${
                  index === steps.length - 1 ? "bg-accent" : "bg-canvas"
                }`}
              />
              <p className="text-[11px] tracking-[0.18em] text-muted">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-1 text-base font-medium text-ink">{step.title}</p>
              <p className="text-sm text-muted">{step.note}</p>
            </li>
          ))}
        </ol>
        <PhoneMock className="h-44 w-auto shrink-0" />
      </div>
    </div>
  );
}
