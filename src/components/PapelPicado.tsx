import type { CSSProperties } from "react";
import { cn } from "../lib/utils";

/* Papel picado — qirqma qog‘oz bayroqchalar tasmasi (Día de Muertos va bayramlar bezagi).
   Bayroqchalar arqonga osilgan, har biri o‘z fazasida chayqaladi. */

const COLORS = ["text-rosa", "text-seal", "text-turq", "text-ink", "text-rojo", "text-violet", "text-terra"];

const circle = (cx: number, cy: number, r: number) => `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0Z`;
const diamond = (cx: number, cy: number, r: number) => `M${cx} ${cy - r}L${cx + r} ${cy}L${cx} ${cy + r}L${cx - r} ${cy}Z`;

const OUTLINE = "M0 0H60V62L55 72L50 62L45 72L40 62L35 72L30 62L25 72L20 62L15 72L10 62L5 72L0 62Z";
const SLITS = [6, 14, 22, 30, 38, 46].map((x) => `M${x} 5h4v3h-4z`).join("");

// evenodd: ichma-ich shakllar navbat bilan «teshik» / «qog‘oz» bo‘ladi
const CUTS = [
  [circle(30, 34, 11), circle(30, 34, 6), circle(30, 34, 2.5), diamond(9, 34, 5), diamond(51, 34, 5)]
    .concat([12, 24, 36, 48].map((x) => circle(x, 54, 2.4)))
    .join(""),
  [diamond(30, 30, 15), diamond(30, 30, 9), diamond(30, 30, 4), circle(10, 24, 3), circle(50, 24, 3), circle(10, 40, 3), circle(50, 40, 3)]
    .concat([15, 30, 45].map((x) => diamond(x, 54, 3.5)))
    .join(""),
  [circle(30, 30, 4), circle(30, 15, 5), circle(30, 45, 5), circle(15, 30, 5), circle(45, 30, 5)]
    .concat([14, 30, 46].map((x) => diamond(x, 55, 4)))
    .join(""),
];

function Flag({ i, k, n }: { i: number; k: number; n: number }) {
  const style = {
    "--k": k.toFixed(3),
    "--dl": `${-((i * 0.77) % 4.6).toFixed(2)}s`,
    "--dur": `${(3.8 + ((i * 37) % 17) / 10).toFixed(1)}s`,
  } as CSSProperties;
  return (
    <svg
      viewBox="0 0 60 74"
      aria-hidden="true"
      className={cn("picado__flag", COLORS[(i + n) % COLORS.length])}
      style={style}
    >
      <path fill="currentColor" fillRule="evenodd" d={`${OUTLINE}${SLITS}${CUTS[i % CUTS.length]}`} />
      <rect width="60" height="3" fill="#2b1420" opacity="0.28" />
    </svg>
  );
}

function Row({ count, className }: { count: number; className?: string }) {
  return (
    <div className={cn("picado__row flex", className)}>
      {Array.from({ length: count }, (_, i) => {
        const t = count === 1 ? 0.5 : i / (count - 1);
        return <Flag key={i} i={i} n={count} k={4 * t * (1 - t)} />;
      })}
    </div>
  );
}

export function PapelPicado({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("picado relative", className)}>
      <svg className="picado__rope" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 0Q50 40 100 0" fill="none" stroke="#2b1420" strokeOpacity="0.55" strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
      </svg>
      <Row count={8} className="sm:hidden" />
      <Row count={15} className="max-sm:hidden" />
    </div>
  );
}
