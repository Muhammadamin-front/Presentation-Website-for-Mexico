import { countryFacts } from "../data";
import { PapelPicado } from "../components/PapelPicado";
import { ParallaxHero } from "../components/ParallaxHero";
import { Words } from "../components/text";
import { delay } from "../lib/utils";

export function Country() {
  return (
    <section id="meksika" aria-label="Meksika" className="tiles relative bg-paper [--tiles-o:0.28]">
      <div data-stop>
        <ParallaxHero
          image="/images/mexico.jpg"
          alt="Chichén Itzá: El Castillo — Mayya piramidasi, Yukatan"
          title={
            <>
              <PapelPicado className="mb-2 w-full" />
              <span className="es text-[clamp(4.5rem,11vw,10rem)] leading-none text-rosa [text-shadow:0_3px_0_#fcf2de,0_0_36px_rgba(252,242,222,0.85)]">
                México
              </span>
              <span className="mt-3 text-[clamp(1.05rem,1.5vw,1.4rem)] font-medium text-depth [text-shadow:0_0_18px_rgba(252,242,222,0.95),0_0_6px_rgba(252,242,222,0.9)]">
                Meksika — «Mexica» yurti · Chichén Itzá, Yukatan
              </span>
            </>
          }
        />
      </div>
      <div data-stop className="slide wrap-page grid gap-x-20 gap-y-14 py-24 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <Words as="h2" className="section-title text-depth" text="Ikki okean oralig‘ida, bitta yirik bozor yonida" />
          <p className="lede mt-8" data-rev style={delay(120)}>
            Tinch okeani va Meksika ko‘rfazi oralig‘ida joylashgan mamlakat: shimolda AQSh bilan 3 145 km chegara, janubda
            Markaziy Amerika. Neft, kumush va qishloq xo‘jaligidan boshlangan iqtisodiyot bugun avtomobil va elektronika
            eksport qiluvchi sanoat markaziga aylandi.
          </p>
          <p
            className="mt-10 max-w-[28ch] text-[clamp(1.5rem,2.4vw,2.2rem)] leading-snug font-light text-depth"
            data-rev
            style={delay(240)}
          >
            Dunyodagi eng boy bozorning yonida bo‘lish — Meksika iqtisodiyotining eng katta ustunligi va eng katta xavfi.
          </p>
        </div>
        <dl className="self-end border-t border-mist">
          {countryFacts.map((f, i) => (
            <div
              key={f.label}
              className="grid items-baseline gap-2 border-b border-mist py-5 sm:grid-cols-[minmax(9rem,auto)_1fr] sm:gap-6"
              data-rev
              style={delay(80 * i)}
            >
              <dt className="text-[clamp(1.5rem,2.2vw,2rem)] font-display font-semibold text-ink">{f.value}</dt>
              <dd className="text-dilute">{f.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
