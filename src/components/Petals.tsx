import { useMemo, type CSSProperties } from "react";

/* Cempasúchil (marigold) gulbarglari — Día de Muertos’dagi kabi sekin yog‘iladi */
const TONES: [string, string][] = [
  ["#f29a0e", "#ffd36a"],
  ["#ff7a1a", "#ffc46b"],
  ["#e6197b", "#ff8cc0"],
  ["#f5b50f", "#ffe08a"],
];

function rng(seed: number) {
  let a = seed;
  return () => {
    a = (a * 1664525 + 1013904223) % 4294967296;
    return a / 4294967296;
  };
}

export function Petals({ count = 22, seed = 7 }: { count?: number; seed?: number }) {
  const petals = useMemo(() => {
    const r = rng(seed);
    return Array.from({ length: count }, (_, i) => {
      const [c, c2] = TONES[i % TONES.length];
      return {
        "--x": `${(r() * 100).toFixed(1)}%`,
        "--s": `${(9 + r() * 12).toFixed(1)}px`,
        "--t": `${(11 + r() * 12).toFixed(1)}s`,
        "--w": `${(2.2 + r() * 2.4).toFixed(1)}s`,
        "--dl": `${(-r() * 22).toFixed(1)}s`,
        "--dx": `${(-14 + r() * 28).toFixed(0)}vw`,
        "--c": c,
        "--c2": c2,
      } as CSSProperties;
    });
  }, [count, seed]);
  return (
    <div className="petals" aria-hidden="true">
      {petals.map((style, i) => (
        <span key={i} className="petal" style={style}>
          <i />
        </span>
      ))}
    </div>
  );
}
