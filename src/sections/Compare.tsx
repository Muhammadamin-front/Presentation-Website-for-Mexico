import { compare, different, lessons, similar } from "../data";
import { Butterfly } from "../components/charts";
import { Vertical, Words } from "../components/text";
import { delay } from "../lib/utils";

export function Compare() {
  return (
    <section id="taqqoslash" aria-label="Meksika va O‘zbekiston" className="bg-paper">
      <div data-stop className="slide wrap-page py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <Vertical vn="Comparación">
            <Words as="h2" className="section-title text-depth" text="Meksika va O‘zbekiston" />
          </Vertical>
          <p className="lede" data-rev style={delay(120)}>
            Ikkalasi ham bitta yirik hamkorga bog‘liq, muhojirlar pullariga tayanadi, norasmiy iqtisodiyoti katta. Farq —
            boylik darajasi va o‘sish sur’ati. Qator ustiga olib boring: kim necha barobar oldinda.
          </p>
        </div>
        <figure className="mt-14">
          <Butterfly rows={compare} />
          <figcaption className="note mt-4">
            2025-yil ma’lumotlari: INEGI, Banxico, Jahon banki; O‘zbekiston Milliy statistika qo‘mitasi va Markaziy banki;
            aholi — 1.01.2026 (O‘zbekiston) · ~ taxminiy yoki hisoblangan
          </figcaption>
        </figure>
      </div>

      <div data-stop className="slide bg-wash py-20">
        <div className="wrap-page">
          <Words as="h2" className="section-title text-depth" text="Ikki yo‘l: o‘xshash va farqli" />
          <div className="mt-14 grid gap-px bg-mist md:grid-cols-2">
            {[
              { title: "O‘xshash", items: similar, dot: "bg-feather" },
              { title: "Farqli", items: different, dot: "bg-ink" },
            ].map((col, c) => (
              <article key={col.title} className="bg-wash py-10 md:px-10 md:first:pl-0" data-rev style={delay(120 * c)}>
                <h3 className="label text-dilute">{col.title}</h3>
                <ul className="mt-6 flex flex-col">
                  {col.items.map((t) => (
                    <li key={t} className="flex gap-4 border-t border-mist py-4 leading-relaxed text-depth">
                      <span aria-hidden="true" className={`mt-2.5 size-2 shrink-0 rounded-full ${col.dot}`} />
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div data-stop className="slide wrap-page py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <Words as="h2" className="section-title text-depth" text="O‘zbekiston uchun 4 saboq" />
          <p className="lede" data-rev style={delay(120)}>
            Meksika tajribasini ko‘chirib bo‘lmaydi — qo‘shnilar boshqa, tuzilma boshqa. Lekin tamoyillar umumiy.
          </p>
        </div>
        <ol className="mt-16 grid gap-12 md:grid-cols-2 xl:grid-cols-4" data-rev>
          {lessons.map((l, i) => (
            <li key={l.title}>
              <svg viewBox="0 0 320 40" className="w-full overflow-visible" aria-hidden="true">
                <path
                  className="draw"
                  pathLength={1}
                  d="M4 20 H300"
                  stroke="var(--color-uz)"
                  strokeWidth="1.6"
                  fill="none"
                  style={{ transitionDelay: `${i * 220}ms` }}
                />
                <path
                  className="draw"
                  pathLength={1}
                  d="M286 8 L306 20 L286 32"
                  stroke="var(--color-uz)"
                  strokeWidth="1.6"
                  fill="none"
                  style={{ transitionDelay: `${i * 220 + 500}ms` }}
                />
              </svg>
              <div className="mt-6 flex items-baseline gap-4">
                <span className="es text-[2.6rem] leading-none text-uz">{i + 1}</span>
                <h3 className="text-[1.35rem] leading-tight font-light text-depth">{l.title}</h3>
              </div>
              <p className="mt-3 leading-relaxed text-dilute">{l.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
