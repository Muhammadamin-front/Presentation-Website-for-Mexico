import { exportSplit, remittances, risks } from "../data";
import { DataTable, HBarList, LineChart } from "../components/charts";
import { ParticleFlow } from "../components/ParticleFlow";
import { Vertical, Words } from "../components/text";
import { delay } from "../lib/utils";

export function Problems() {
  return (
    <section id="muammolar" aria-label="Muammolar" className="bg-paper">
      <div data-stop>
        <ParticleFlow theme="agave" density="medium" className="h-svh min-h-[560px]">
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
            <div
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 h-[60%] w-[min(820px,92%)] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,var(--color-paper)_40%,rgba(252,242,222,0.7)_70%,transparent)]"
            />
            <Vertical vn="Retos" className="relative">
              <Words as="h2" className="section-title text-depth" text="Yaqinlikning narxi" />
            </Vertical>
            <p className="lede relative mt-6 max-w-[48ch]" data-rev style={delay(160)}>
              Bitta bozorga qaramlik, norasmiy iqtisodiyot, pul o‘tkazmalariga tayanish va zaif investitsiya — Meksika bugun
              yechayotgan og‘ir masalalar.
            </p>
          </div>
        </ParticleFlow>
      </div>

      <div data-stop className="slide wrap-page grid gap-14 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <h3 className="text-[clamp(2rem,3.2vw,3rem)] leading-tight font-light text-depth" data-rev>
            Har besh dollar eksportdan to‘rttasi — AQShga
          </h3>
          <p className="lede mt-6" data-rev style={delay(120)}>
            2025-yilda eksport 665 mlrd $ ga yetdi, uning 80% dan ko‘pi AQShga ketadi. Vashington avtomobilga 25%,
            po‘lat va alyuminiyga 50% bojxona qo‘ydi, 2026-yil 1-iyulda esa T-MEC’ni uzaytirmadi — endi kelishuv har yili
            qayta ko‘riladi.
          </p>
          <p className="mt-6 max-w-[42ch] text-[0.95rem] leading-relaxed text-depth" data-rev style={delay(220)}>
            <span className="mr-2 inline-block size-2 rounded-full bg-uz align-middle" aria-hidden="true" />
            Kesik chiziq — O‘zbekistonning 2025-yildagi <em>butun</em> eksporti (33,8 mlrd $): Meksikaning faqat
            AQShga eksporti undan ~16 barobar katta.
          </p>
        </div>
        <figure className="pt-6">
          <HBarList
            data={exportSplit}
            max={600}
            unit=" mlrd $"
            label="Meksika eksporti yo‘nalishlari, mlrd dollar"
            reference={{ value: 33.8, label: "O‘zbekiston: jami eksport, 33,8" }}
          />
          <figcaption className="note mt-5">
            Meksika eksporti yo‘nalishlari, mlrd $, 2025 · jami 664,8 (INEGI); AQSh ulushi 80% dan ko‘p ekaniga asoslangan ~ taxminiy
          </figcaption>
        </figure>
      </div>

      <div data-stop className="slide bg-wash py-20">
        <div className="wrap-page grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <h3 className="text-[clamp(2rem,3.2vw,3rem)] leading-tight font-light text-depth" data-rev>
              Pul o‘tkazmalari: 2009-yildan beri birinchi pasayish
            </h3>
            <p className="lede mt-6" data-rev style={delay(120)}>
              AQShdagi meksikaliklar 2025-yilda 61,8 mlrd $ yubordi — 2024-dagidan 4,6% kam. Sabab: migratsiya
              nazoratining kuchayishi va naqd pul o‘tkazmalariga solingan 1% soliq. Pul o‘tkazmalari — kam
              daromadli oilalar uchun hayotiy tayanch.
            </p>
            <p className="mt-6 max-w-[42ch] text-[0.95rem] leading-relaxed text-depth" data-rev style={delay(220)}>
              <span className="mr-2 inline-block size-2 rounded-full bg-uz align-middle" aria-hidden="true" />
              O‘zbekistonda pul o‘tkazmalari 18,9 mlrd $ (2025) — YaIMning ~13% i (Meksikada ~3%), va ularning
              qariyb 78% i bitta mamlakatdan — Rossiyadan keladi.
            </p>
          </div>
          <figure>
            <LineChart
              data={remittances}
              max={70}
              ticks={[0, 20, 40, 60]}
              unit=" mlrd $"
              tickUnit=""
              label="Meksikaga pul o‘tkazmalari, mlrd dollar"
              unitLabel="pul o‘tkazmalari"
            />
            <figcaption className="note mt-3">
              Banxico (2015–2025). <span aria-hidden="true" className="mx-1 inline-block size-2 rounded-full bg-seal align-middle" /> 2025 —
              so‘nggi yil
            </figcaption>
            <DataTable
              caption="Meksikaga pul o‘tkazmalari"
              head={["Yil", "mlrd $"]}
              rows={remittances.map((r) => [r.year, r.value.toLocaleString("ru-RU")])}
            />
          </figure>
        </div>
      </div>

      <div data-stop className="slide wrap-page py-20">
        <div className="grid gap-px bg-mist md:grid-cols-2">
          {risks.map((r, i) => (
            <article key={r.title} className="bg-paper py-16 md:px-10 md:first:pl-0" data-rev style={delay(100 * i)}>
              <p className="text-[clamp(2.8rem,4.6vw,4.4rem)] leading-none font-light text-depth">{r.figure}</p>
              <h3 className="mt-5 text-[1.45rem] font-light text-depth">{r.title}</h3>
              <p className="mt-3 max-w-[46ch] leading-relaxed text-dilute">{r.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
