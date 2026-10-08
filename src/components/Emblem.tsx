import { cn } from "../lib/utils";

/** Romb (markazi cx, cy; yarim diagonal r) — ko‘p pog‘onali piramida naqshi */
export function starPath(cx: number, cy: number, r: number) {
  return `M${cx} ${cy - r} L${cx + r} ${cy} L${cx} ${cy + r} L${cx - r} ${cy} Z`;
}

/** Logotip: suvga tushgan tomchi (agave-yashil) + marigold romb, muhr bilan */
export function Emblem({ className, seal = true }: { className?: string; seal?: boolean }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={cn("shrink-0", className)}>
      <circle cx="30" cy="30" r="24" fill="none" stroke="var(--color-feather)" strokeWidth="2.5" />
      <circle cx="30" cy="30" r="16.5" fill="none" stroke="var(--color-dilute)" strokeWidth="2.5" />
      <circle cx="30" cy="30" r="9" fill="var(--color-ink)" />
      <path d={starPath(30, 30, 5)} fill="var(--color-seal)" />
      {seal && (
        <g>
          <rect x="46" y="46" width="15" height="15" rx="2" fill="var(--color-ink)" />
          <path d={starPath(53.5, 53.5, 4.4)} fill="var(--color-seal)" />
        </g>
      )}
    </svg>
  );
}
