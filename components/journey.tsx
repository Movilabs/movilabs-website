"use client";

import { useEffect, useRef, useState, type SVGProps } from "react";

type Step = { title: string; note: string };

type JourneyProps = {
  label: string;
  steps: Step[];
};

type PhoneMockProps = SVGProps<SVGSVGElement> & { step?: number };

const nodes = [
  { x: 60, y: 140 },
  { x: 280, y: 110 },
  { x: 510, y: 110 },
  { x: 735, y: 100 },
];

const nodeDelays = [1, 1.75, 2.25, 2.6];
const INTRO_MS = 4300;
const STEP_MS = 2400;

export function PhoneMock({ step = 3, className = "", ...props }: PhoneMockProps) {
  return (
    <svg viewBox="0 0 130 220" aria-hidden data-step={step} {...props} className={`pm overflow-visible ${className}`}>
      <rect x="-3" y="-3" width="136" height="226" rx="26" fill="none" className="pm-ring stroke-accent" strokeWidth="1.2" />
      <rect x="2" y="2" width="126" height="216" rx="22" className="pm-fr fill-panel stroke-accent" strokeWidth="1.4" />
      <rect x="49" y="10" width="32" height="6" rx="3" className="fill-line" />
      <rect x="12" y="26" width="106" height="182" rx="13" className="fill-canvas" />
      <rect x="22" y="38" width="44" height="7" rx="3.5" className="pm-x fill-accent" />
      <rect x="22" y="52" width="84" height="5" rx="2.5" className="pm-x fill-line" />
      <g className="stroke-line" strokeWidth="1">
        <rect x="22" y="70" width="86" height="30" rx="8" className="pm-x fill-panel" />
        <rect x="22" y="106" width="86" height="30" rx="8" className="pm-x fill-panel" />
        <rect x="22" y="144" width="86" height="38" rx="8" className="pm-x fill-panel" />
      </g>
      <g className="pm-in">
        <circle cx="37" cy="85" r="6" className="fill-accent" />
        <circle cx="37" cy="121" r="6" className="fill-muted" />
        <rect x="50" y="80" width="40" height="5" rx="2.5" className="fill-ink" />
        <rect x="50" y="90" width="26" height="4" rx="2" className="fill-line" />
        <rect x="50" y="116" width="34" height="5" rx="2.5" className="fill-ink" />
        <rect x="50" y="126" width="22" height="4" rx="2" className="fill-line" />
      </g>
      <polyline
        points="26,174 44,160 62,166 82,150 102,154"
        fill="none"
        pathLength="1"
        className="pm-ch stroke-accent"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="22" y="188" width="86" height="14" rx="7" className="pm-bt fill-accent" />
    </svg>
  );
}

export function Journey({ label, steps }: JourneyProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(3);
  const [looping, setLooping] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let visible = true;
    let interval: ReturnType<typeof setInterval> | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.2 }
    );

    if (rootRef.current) {
      observer.observe(rootRef.current);
    }

    const start = setTimeout(() => {
      setLooping(true);
      setStep(0);
      interval = setInterval(() => {
        if (visible && !document.hidden) {
          setStep((current) => (current + 1) % 4);
        }
      }, STEP_MS);
    }, INTRO_MS);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  const reached = (index: number) => (looping ? index <= step : index === steps.length - 1);

  return (
    <div ref={rootRef}>
      <div className="hidden lg:block">
        <svg
          viewBox="0 0 1000 252"
          role="img"
          aria-label={`${label}: ${steps.map((item) => item.title).join(" → ")}`}
          className="mx-auto h-auto max-h-[30vh] w-full"
        >
          <defs>
            <clipPath id="mg-clip">
              <rect className="mg-wipe" x="0" y="0" width="780" height="252" />
            </clipPath>
          </defs>

          <g clipPath="url(#mg-clip)">
            <path
              d="M60 140 C 130 40, 220 40, 280 110 S 440 185, 510 110 S 680 45, 735 100"
              fill="none"
              className="stroke-accent animate-dash-flow"
              strokeWidth="1.5"
              strokeDasharray="5 6"
            />
          </g>

          <g className="mg-fade" style={{ animationDelay: "1s" }}>
            <line x1="60" y1="224" x2="735" y2="224" className="stroke-muted" strokeWidth="0.8" />
          </g>

          {nodes.map((node, index) => (
            <g key={steps[index].title}>
              <g className="mg-fade" style={{ animationDelay: `${nodeDelays[index] + 0.1}s` }}>
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
                <text
                  x={node.x}
                  y="188"
                  textAnchor="middle"
                  className="fill-ink"
                  fontSize="15"
                  fontWeight="500"
                >
                  {steps[index].title}
                </text>
                <text
                  x={node.x}
                  y="207"
                  textAnchor="middle"
                  className="fill-muted"
                  fontSize="12.5"
                >
                  {steps[index].note}
                </text>
              </g>
              {looping && index === step && (
                <circle cx={node.x} cy={node.y} r="10" fill="none" strokeWidth="1.2" className="mg-ping stroke-accent" />
              )}
              <circle
                cx={node.x}
                cy={node.y}
                r="10"
                strokeWidth="1.5"
                className={`mg-node mg-fill stroke-accent ${reached(index) ? "fill-accent" : "fill-canvas"}`}
                style={{ animationDelay: `${nodeDelays[index]}s` }}
              />
            </g>
          ))}

          <g className="mg-phone" style={{ transformBox: "fill-box" }}>
            <PhoneMock x="835" y="6" width="125" height="212" step={looping ? step : 3} />
          </g>
        </svg>
      </div>

      <div className="flex items-end justify-between gap-6 lg:hidden">
        <ol className="relative space-y-7 border-l border-line pl-6" aria-label={label}>
          {steps.map((item, index) => (
            <li key={item.title} className="mg-fade relative" style={{ animationDelay: `${0.9 + index * 0.35}s` }}>
              <span
                aria-hidden
                className={`mg-fill absolute -left-[1.95rem] top-1 h-3 w-3 rounded-full border border-accent ${
                  reached(index) ? "bg-accent" : "bg-canvas"
                }`}
              />
              <p className="text-[11px] tracking-[0.18em] text-muted">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-1 text-base font-medium text-ink">{item.title}</p>
              <p className="text-sm text-muted">{item.note}</p>
            </li>
          ))}
        </ol>
        <div className="mg-phone shrink-0">
          <PhoneMock className="h-44 w-auto" step={looping ? step : 3} />
        </div>
      </div>
    </div>
  );
}
