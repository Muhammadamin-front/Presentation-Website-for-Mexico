import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import { author } from "../data";
import { Emblem } from "../components/Emblem";
import { PapelPicado } from "../components/PapelPicado";
import { Petals } from "../components/Petals";
import { scrollToId } from "../lib/scroll";
import { cn, delay, prefersReducedMotion } from "../lib/utils";

/** Muqova jumlasi — urg‘u o‘zgaradigan joylardan bo‘lingan */
const SEGMENTS: { text: string; className?: string }[] = [
  { text: `${author.name}ning`, className: "text-depth" },
  { text: " " },
  { text: `«${author.subject}»`, className: "text-rosa" },
  { text: " fanidan " },
  { text: "1-mustaqil ishi", className: "text-ink" },
];
const TOTAL = SEGMENTS.reduce((n, s) => n + s.text.length, 0);
const START_MS = 1100;
const CHAR_MS = 45;

/**
 * Yozuv mashinkasi: muqova har safar ko‘rinishga kirganda qaytadan yozadi.
 * Barcha harflar birinchi kadrdanoq joyini egallaydi (yozilmaganlari shaffof),
 * shuning uchun katta matn yozilayotganda siljimaydi.
 */
function useTypewriter<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      setTyped(TOTAL);
      return;
    }
    let timer = 0;
    let tick = 0;
    const run = () => {
      window.clearTimeout(timer);
      window.clearInterval(tick);
      setTyped(0);
      timer = window.setTimeout(() => {
        let n = 0;
        tick = window.setInterval(() => {
          n += 1;
          setTyped(n);
          if (n >= TOTAL) window.clearInterval(tick);
        }, CHAR_MS);
      }, START_MS);
    };
    const io = new IntersectionObserver(([e]) => e?.isIntersecting && run(), { threshold: 0.6 });
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearTimeout(timer);
      window.clearInterval(tick);
    };
  }, []);

  return { ref, typed, done: typed >= TOTAL };
}

export function Cover() {
  const { ref, typed, done } = useTypewriter<HTMLElement>();
  let left = typed;

  return (
    <section
      ref={ref}
      id="muqova"
      data-stop
      aria-label="Muqova"
      className="relative isolate h-svh min-h-[680px] overflow-hidden bg-paper max-md:h-auto max-md:min-h-svh"
    >
      <PapelPicado className="pointer-events-none absolute inset-x-0 top-0 z-10 -mt-1" />
      <Petals count={16} seed={23} />
      <Emblem
        seal={false}
        className="cover-spin pointer-events-none absolute top-1/2 right-[6%] -z-10 size-[min(50vh,26vw)] -translate-y-1/2 opacity-90 max-lg:hidden"
      />

      <div className="relative z-10 flex h-full flex-col px-[clamp(1.25rem,5vw,5rem)] pt-28 pb-10 max-md:pt-24">
        <div data-rev>
          <p className="text-[clamp(1.05rem,1.8vw,1.7rem)] leading-tight font-semibold tracking-[0.12em] text-depth uppercase">
            {author.university}
          </p>
          <p className="mt-1.5 text-[clamp(1rem,1.5vw,1.4rem)] text-dilute">{author.faculty}</p>
        </div>

        <div className="my-auto w-full py-10 lg:max-w-[64%]">
          <p className="flex items-center gap-3 text-[clamp(1.05rem,1.6vw,1.5rem)] text-dilute" data-rev style={delay(250)}>
            <span aria-hidden="true" className="h-[3px] w-10 rounded-full bg-seal" />
            {author.group} talabasi
          </p>

          <h1
            className="mt-5 text-[clamp(2.4rem,5vw,5.4rem)] leading-[1.05] tracking-[-0.02em] text-depth"
            aria-label={SEGMENTS.map((s) => s.text).join("")}
          >
            <span aria-hidden="true">
              {SEGMENTS.map((s, i) => {
                const shown = Math.max(0, Math.min(s.text.length, left));
                // Kursor hali yozilayotgan bo‘lakda turadi
                const caretHere = !done && left >= 0 && left < s.text.length;
                left -= s.text.length;
                return (
                  <span key={i} className={s.className}>
                    {s.text.slice(0, shown)}
                    {caretHere && <span className="cover-caret" />}
                    <span className="text-transparent">{s.text.slice(shown)}</span>
                  </span>
                );
              })}
              {done && <span className="cover-caret cover-caret--idle" />}
            </span>
          </h1>

          <p
            className={cn(
              "mt-8 flex items-baseline gap-3 text-[clamp(1.1rem,1.6vw,1.5rem)] text-dilute transition-[opacity,transform] duration-1000",
              done ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
            )}
          >
            Mavzu: <span className="font-medium text-depth">Meksika iqtisodiyoti</span>
            <span className="es text-rosa">· Economía de México</span>
          </p>
        </div>

        <div
          className={cn(
            "flex flex-wrap items-end justify-between gap-6 transition-opacity duration-1000",
            done ? "opacity-100" : "opacity-0",
          )}
        >
          <p className="tnum text-[clamp(1rem,1.4vw,1.3rem)] text-dilute">Farg‘ona · 2026</p>
          <button
            type="button"
            onClick={() => scrollToId("kirish")}
            className="group inline-flex h-14 items-center gap-4 rounded-full bg-depth pr-3 pl-7 text-paper shadow-[0_10px_28px_-10px_rgba(230,25,123,0.6)] transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <span className="label !tracking-[0.16em]">Taqdimotni boshlash</span>
            <span className="grid size-9 place-items-center rounded-full bg-rosa">
              <ArrowDown className="size-4 motion-safe:animate-bounce" strokeWidth={1.8} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
