import { cn } from "../lib/utils";

/** Romb (markazi cx, cy; yarim diagonal r) — ko‘p pog‘onali piramida naqshi */
export function starPath(cx: number, cy: number, r: number) {
  return `M${cx} ${cy - r} L${cx + r} ${cy} L${cx} ${cy + r} L${cx - r} ${cy} Z`;
}

const PETALS = Array.from({ length: 8 }, (_, i) => i * 45);

/** Logotip: cempasúchil guli (8 gulbarg) agave-yashil halqada, marigold romb-muhr bilan */
export function Emblem({ className, seal = true }: { className?: string; seal?: boolean }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={cn("shrink-0", className)}>
      <circle cx="30" cy="30" r="26" fill="none" stroke="var(--color-ink)" strokeWidth="2.5" />
      <circle cx="30" cy="30" r="26" fill="none" stroke="var(--color-seal)" strokeWidth="2.5" strokeDasharray="1.5 6" strokeLinecap="round" transform="rotate(8 30 30)" />
      {PETALS.map((a) => (
        <ellipse
          key={a}
          cx="30"
          cy="17.5"
          rx="4.6"
          ry="8"
          fill={a % 90 === 0 ? "var(--color-seal)" : "var(--color-rosa)"}
          transform={`rotate(${a} 30 30)`}
        />
      ))}
      <circle cx="30" cy="30" r="7.5" fill="var(--color-depth)" />
      <path d={starPath(30, 30, 4.2)} fill="var(--color-seal)" />
      {seal && (
        <g>
          <rect x="46" y="46" width="15" height="15" rx="2" fill="var(--color-ink)" />
          <path d={starPath(53.5, 53.5, 4.4)} fill="var(--color-seal)" />
        </g>
      )}
    </svg>
  );
}
