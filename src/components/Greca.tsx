import { useId } from "react";
import { cn } from "../lib/utils";

/* Greca — Mitla/Aztek pog‘onali «piramida» naqshi. Rang currentColor’dan olinadi. */
const STEP = "M0 22H6V16H12V10H18V4H30V10H36V16H42V22H48";

export function Greca({ className, drift = true }: { className?: string; drift?: boolean }) {
  const id = useId().replace(/:/g, "");
  return (
    <div aria-hidden="true" className={cn("greca h-7", className)}>
      <svg height="28" style={drift ? undefined : { animation: "none" }}>
        <defs>
          <pattern id={id} width="96" height="28" patternUnits="userSpaceOnUse">
            {[0, 48].map((x) => (
              <g key={x} transform={`translate(${x} 0)`} fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="miter">
                <path d={STEP} />
                <path d="M0 26.5H48" strokeWidth="2" />
                <path d="M24 10L28 14L24 18L20 14Z" fill="currentColor" stroke="none" />
              </g>
            ))}
          </pattern>
        </defs>
        <rect width="100%" height="28" fill={`url(#${id})`} />
      </svg>
    </div>
  );
}
