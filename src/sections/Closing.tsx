import { useEffect, useRef, useState } from "react";
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react";
import { author, conclusions, sources } from "../data";
import { Emblem } from "../components/Emblem";
import { Greca } from "../components/Greca";
import { PapelPicado } from "../components/PapelPicado";
import { Petals } from "../components/Petals";
import { FlipText } from "../components/FlipText";
import { SplashButton } from "../components/SplashButton";
import { Words } from "../components/text";
import { scrollToY } from "../lib/scroll";
import { delay } from "../lib/utils";

/** Har safar ko‘rinishga kirganda hisoblagich oshadi — animatsiya qayta ishga tushadi */
function useReplay() {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e?.isIntersecting && setCount((c) => c + 1), { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, count };
}

function Seal() {
  return (
    <div className="relative grid size-40 place-items-center">
      <PulsingBorder
        colors={["#e6197b", "#f29a0e", "#12878f", "#fcf2de"]}
        colorBack="#00000000"
        speed={1.2}
        roundness={1}
        thickness={0.08}
        softness={0.3}
        intensity={0.5}
        spots={4}
        spotSize={0.12}
        pulse={0.12}
        smoke={0.4}
        smokeSize={3}
        style={{ width: 96, height: 96, borderRadius: "50%" }}
        className="absolute"
      />
      <Emblem className="relative size-12" />
      <svg
        viewBox="0 0 100 100"
        aria-hidden="true"
        className="absolute inset-0 size-full animate-[spin_28s_linear_infinite] motion-reduce:animate-none"
      >
        <defs>
          <path id="seal-ring" d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
        </defs>
        <text className="fill-seal text-[7px] tracking-[0.24em] uppercase">
          <textPath href="#seal-ring">Meksika iqtisodiyoti · Economía de México · 2026 · Rahmat ·</textPath>
        </text>
      </svg>
    </div>
  );
}

export function Closing() {
  const replay = useReplay();
  return (
    <>
      <section id="xulosa" aria-label="Xulosa" className="relative isolate overflow-hidden bg-depth text-paper">
        <MeshGradient
          className="absolute inset-0 -z-10 h-full w-full"
          colors={["#2b1420", "#7a1c4b", "#0b4d34", "#8f3a14"]}
          distortion={0.85}
          swirl={0.25}
          speed={0.22}
        />
        <Greca className="absolute inset-x-0 top-0 text-seal" />
        <div data-stop className="slide wrap-page py-20 pt-28">
          <Words as="h2" className="section-title text-paper" text="Xulosa" />
          <ul className="mt-14 grid gap-10 md:grid-cols-3">
            {conclusions.map((c, i) => (
              <li
                key={i}
                className="border-t-[3px] border-seal pt-6 text-[clamp(1.1rem,1.5vw,1.35rem)] leading-relaxed text-mist"
                data-rev
                style={delay(120 * i)}
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div
          ref={replay.ref}
          data-stop
          className="relative flex min-h-svh flex-col items-center justify-center px-6 pt-36 pb-24 text-center"
        >
          <PapelPicado className="absolute inset-x-0 top-0" />
          <Petals count={26} seed={5} />
          <Seal />
          <h2 className="relative z-10 mt-10 text-[clamp(4.5rem,12vw,10.5rem)] leading-none font-bold tracking-[-0.03em] text-paper [text-shadow:0_6px_0_rgba(230,25,123,0.85)]">
            {replay.count > 0 ? <FlipText key={replay.count}>Rahmat!</FlipText> : "Rahmat!"}
          </h2>
          <p className="es relative z-10 mt-6 text-[clamp(1.6rem,2.4vw,2.2rem)] tracking-[0.08em] text-seal">¡Muchas gracias!</p>
          <p className="lede relative z-10 mt-4 !text-mist">E’tiboringiz uchun rahmat. Savollaringiz bo‘lsa — marhamat.</p>
          {author.name && (
            <p className="relative z-10 mt-2 text-mist">
              {author.name}
              {author.group && <span className="text-feather"> · {author.group}</span>}
            </p>
          )}
          <SplashButton
            className="splash-btn--light relative z-10 mt-12"
            label="Boshiga qaytish"
            hoverLabel="Yana bir bor"
            onClick={() => scrollToY(0)}
          />
        </div>
      </section>

      <section id="manbalar" data-stop aria-label="Manbalar" className="slide bg-paper pb-20">
        <div aria-hidden="true" className="serape-h mb-20" />
        <div className="wrap-page grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">
          <div>
            <h2 className="text-[1.8rem] text-depth">Manbalar</h2>
            <p className="note mt-3 max-w-[32ch]">
              Barcha raqamlar ochiq manbalardan olingan. «~» — yaxlitlangan yoki taxminiy qiymat.
            </p>
          </div>
          <ul className="grid gap-x-10 sm:grid-cols-2">
            {sources.map((s) => (
              <li key={s} className="border-b border-mist py-3 text-[0.95rem] text-depth">
                {s}
              </li>
            ))}
          </ul>
        </div>
        <p className="wrap-page note mt-14">
          Sayt React, Spline 3D, GSAP, Lenis va WebGL suyuqlik simulyatsiyasi bilan qurilgan · 2026
        </p>
      </section>
    </>
  );
}
