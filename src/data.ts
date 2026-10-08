/* Taqdimotning barcha matn va raqamlari shu faylda.
   «~» — yaxlitlangan yoki taxminiy qiymat. */

export const author = {
  name: "", // masalan: "Ism Familiya"
  group: "", // masalan: "IQT-21"
  course: "Iqtisodiyot fanidan taqdimot",
};

export const sections = [
  { id: "kirish", label: "Kirish" },
  { id: "meksika", label: "Meksika" },
  { id: "raqamlar", label: "Raqamlarda" },
  { id: "tarix", label: "Tarix" },
  { id: "inqiroz", label: "Inqiroz" },
  { id: "sanoat", label: "Sanoat" },
  { id: "nearshoring", label: "Nearshoring" },
  { id: "muammolar", label: "Muammolar" },
  { id: "kelajak", label: "Kelajak" },
  { id: "taqqoslash", label: "Taqqoslash" },
  { id: "xulosa", label: "Xulosa" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

/* ── Kirish ── */
export const heroStats = [
  { label: "YaIM", value: "~1,9 trln $", note: "2025 · XVF 2026 bahosi: ~2,1" },
  { label: "Aholi", value: "~131 mln", note: "2025" },
  { label: "Real o‘sish", value: "0,8%", note: "2025 · 2026 1-yarim: 1,2%" },
];

/* ── Meksika ── */
export const countryFacts = [
  { value: "1,96 mln km²", label: "Maydoni — O‘zbekistondan (449 ming km²) 4,4 barobar katta" },
  { value: "3 145 km", label: "AQSh bilan chegara — dunyodagi eng gavjum savdo yo‘llaridan biri" },
  { value: "~131 mln", label: "Aholi — O‘zbekistondan (38,2 mln) 3,4 barobar ko‘p" },
  { value: "$ Peso", label: "Milliy valyuta · Poytaxt va eng yirik shahar — Mexiko" },
];

/* ── Raqamlarda ── */
export type Bubble = { country: string; code: string; value: number; focus?: "mx" | "uz" };
export const latamGdp: Bubble[] = [
  { country: "Braziliya", code: "br", value: 2.64 },
  { country: "Meksika", code: "mx", value: 2.12, focus: "mx" },
  { country: "Argentina", code: "ar", value: 0.69 },
  { country: "Kolumbiya", code: "co", value: 0.54 },
  { country: "Chili", code: "cl", value: 0.41 },
  { country: "Peru", code: "pe", value: 0.38 },
  { country: "O‘zbekiston", code: "uz", value: 0.145, focus: "uz" },
];

export type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  note: string;
};
export const keyStats: Stat[] = [
  {
    value: 13889,
    suffix: " $",
    label: "Aholi jon boshiga YaIM — yuqori-o‘rta daromadli davlatlar guruhida",
    note: "2025, Jahon banki · O‘zbekiston: ~3,8 ming $",
  },
  {
    value: 664.8,
    suffix: " mlrd $",
    decimals: 1,
    label: "Eksport — rekord (+7,6%); uning 80% dan ko‘pi AQShga ketadi",
    note: "INEGI, 2025 · O‘zbekiston: 33,8 mlrd $",
  },
  {
    value: 40.9,
    suffix: " mlrd $",
    decimals: 1,
    label: "Xorijiy to‘g‘ridan-to‘g‘ri investitsiya (FDI) — tarixdagi eng yuqori yillik ko‘rsatkich",
    note: "Iqtisodiyot vazirligi, 2025",
  },
  {
    value: 3.69,
    suffix: "%",
    decimals: 2,
    label: "Yillik inflyatsiya (dekabr) — Markaziy bank maqsadi 3% ±1 ga yaqin",
    note: "INEGI, 2025 · O‘zbekiston: 7,3%",
  },
  {
    value: 61.8,
    suffix: " mlrd $",
    decimals: 1,
    label: "Muhojirlar pul o‘tkazmalari — dunyoda 2-yirik oqim; 2009-yildan beri birinchi pasayish (−4,6%)",
    note: "Banxico, 2025",
  },
  {
    value: 55,
    suffix: "%",
    label: "Norasmiy bandlik ulushi — ~33 mln odam rasmiy shartnomasiz ishlaydi",
    note: "INEGI, ENOE, 2025-yil 4-chorak",
  },
];

/* ── Tarix ── */
export const timeline = [
  {
    year: "1938",
    title: "Neft milliylashtirildi",
    text: "Prezident Kárdenas xorijiy neft kompaniyalarini milliylashtirdi — Pemex tug‘ildi. 1940–1970 yillarda iqtisodiyot yiliga ~6% o‘sdi: «Meksika mo‘jizasi».",
  },
  {
    year: "1965",
    title: "Maquiladora dasturi",
    text: "AQSh chegarasida zavodlar ehtiyot qismlarni bojsiz olib kelib, yig‘ib, qayta eksport qila boshladi — Meksika eksport sanoatining ilk g‘ishti.",
  },
  {
    year: "1982",
    title: "Qarz inqirozi",
    text: "Neft narxi qulab, foizlar ko‘tarilgach Meksika tashqi qarzini to‘lay olmasligini e’lon qildi. Boshlandi «yo‘qotilgan o‘n yillik» (la década perdida).",
  },
  {
    year: "1994",
    title: "NAFTA va peso inqirozi",
    text: "1-yanvar: Shimoliy Amerika erkin savdo zonasi kuchga kirdi. Dekabr: peso keskin qadrsizlandi, 1995-yilda YaIM ~6% qisqardi.",
  },
  {
    year: "2020",
    title: "T-MEC (USMCA)",
    text: "NAFTA yangi kelishuvga almashdi: avtomobil qismlarining mintaqaviy ulushi va mehnat huquqlari bo‘yicha qattiqroq qoidalar.",
  },
  {
    year: "2025",
    title: "Tariflar va Plan México",
    text: "Eksport 665 mlrd $ rekordga chiqdi, lekin YaIM atigi ~0,8% o‘sdi. AQSh avtomobilga 25%, po‘latga 50% bojxona qo‘ydi; T-MEC 2026-yilda uzaytirilmadi.",
  },
];

export const growthPeriods = [
  { period: "1941–1981", name: "Meksika mo‘jizasi", value: 6.4, approx: true },
  { period: "1982–1993", name: "Yo‘qotilgan o‘n yillik", value: 1.8, approx: true },
  { period: "1994–2019", name: "NAFTA davri", value: 2.4, approx: true },
  { period: "2020–2025", name: "Pandemiya va sustlik", value: 1.0, approx: true },
];

/* ── Inqiroz ── */
export const crisis = [
  {
    title: "Qarz inqirozi",
    period: "1982",
    text: "Meksika to‘lovlarni to‘xtatdi — butun Lotin Amerikasiga yoyilgan inqiroz boshlandi. Banklar milliylashtirildi, peso qadrsizlandi.",
  },
  {
    title: "Giperinflyatsiya",
    period: "1983–1988",
    text: "Narxlar yiliga 100% dan oshdi (1987-yilda ~159%). Maosh qadrsizlanib, o‘rta sinf jamg‘armalari yo‘qoldi.",
  },
  {
    title: "Tekila inqirozi",
    period: "1994–1995",
    text: "Dekabrda peso devalvatsiya qilindi, kapital chiqib ketdi: 1995-yilda YaIM ~6% qisqardi, AQSh boshchiligida ~50 mlrd $ yordam berildi.",
  },
];

export const reformSteps = [
  {
    n: "I",
    title: "Ochilish: GATT",
    text: "1986-yilda GATT’ga qo‘shilib, Meksika yuqori import to‘siqlarini keskin kamaytirdi — «importni almashtirish» modeli tugadi.",
  },
  {
    n: "II",
    title: "Xususiylashtirish",
    text: "1988–1994: yuzlab davlat korxonalari, jumladan Telmex va banklar xususiylashtirildi, byudjet intizomi joriy etildi.",
  },
  {
    n: "III",
    title: "NAFTA — AQShga eshik",
    text: "1994-yildan AQSh va Kanada bozori bojsiz ochildi. Eksport 1980-yillardagi ~20–25 mlrd $ dan bugun 665 mlrd $ ga yetdi.",
  },
];

/* ── Sanoat ── */
export const exportsList = [
  {
    name: "Avtomobil va ehtiyot qismlar",
    es: "Automotriz",
    text: "2025-yilda 4,09 mln avtomobil ishlab chiqarildi (dunyoda 7-o‘rin), 3,4 mln i eksport qilindi. Avtosanoat eksportning ~31% ini (2024: ~194 mlrd $) beradi.",
    makers: "GM · Ford · Nissan · Volkswagen · Toyota · Stellantis",
  },
  {
    name: "Elektronika va kompyuterlar",
    es: "Electrónica",
    text: "Televizor, kompyuter va serverlar: Meksika dunyoning eng yirik televizor eksportchilaridan, Guadalajara — «Meksika Silikon vodiysi».",
    makers: "Foxconn · Samsung · LG · Flex · Jabil",
  },
  {
    name: "Qishloq xo‘jaligi va ichimliklar",
    es: "Agroindustria",
    text: "Avokado, pomidor, pivo va tekila — AQSh dasturxonining katta qismi. Meksika dunyoning eng yirik pivo va avokado eksportchilaridan biri.",
    makers: "Avokado · Tekila · Pivo · Pomidor · Berrilar",
  },
  {
    name: "Neft va turizm",
    es: "Petróleo y turismo",
    text: "Neft eksporti 2025-yilda 26% ga qisqarib 21 mlrd $ ga tushdi, turizm esa yiliga ~45 mln xorijiy mehmon (2024) bilan valyutaning yirik manbai.",
    makers: "Pemex · Kankun · Los-Kabos · Riviera Maya",
  },
];

export const companies: [string, string][] = [
  ["Pemex", "neft"],
  ["América Móvil", "telekom"],
  ["Walmart de México", "chakana savdo"],
  ["FEMSA", "ichimliklar"],
  ["Cemex", "sement"],
  ["Grupo Bimbo", "non mahsulotlari"],
  ["Grupo México", "kon-metallurgiya"],
  ["Grupo Modelo", "pivo"],
  ["BBVA México", "bank"],
  ["Banorte", "bank"],
  ["Gruma", "makkajo‘xori unlari"],
  ["Televisa", "media"],
  ["Aeroméxico", "aviatsiya"],
  ["Liverpool", "universal magazin"],
  ["Mercado Libre", "elektron savdo"],
  ["Arca Continental", "ichimliklar"],
];

export const modelWords = [
  {
    word: "Maquila",
    label: "Maquiladora · 1965",
    meaning: "Chegara zavodlari",
    text: "Ehtiyot qismlarni bojsiz keltirib, Meksikada yig‘ib, AQShga qaytarish. Bugun minglab zavodlar shu g‘oyaning avlodlari.",
  },
  {
    word: "T-MEC",
    label: "USMCA · 2020",
    meaning: "Uch mamlakat bozori",
    text: "Meksika, AQSh va Kanada o‘rtasida bojsiz savdo. 2026-yil 1-iyulda AQSh uni uzaytirmadi — endi har yili qayta ko‘riladi.",
  },
  {
    word: "Ejido",
    label: "Ejido · 1917",
    meaning: "Jamoaviy yer",
    text: "Inqilobdan so‘ng dehqon jamoalariga berilgan yer: 1992-yilgacha sotib bo‘lmasdi. Bugun ham Meksika yerining katta qismi ejido va jamoalar qo‘lida.",
  },
  {
    word: "Remesas",
    label: "Remesas · 2025",
    meaning: "Muhojirlar pullari",
    text: "AQShdagi millionlab meksikaliklar oilasiga yiliga ~62 mlrd $ yuboradi — YaIMning ~3% i, lekin kam daromadli hududlar uchun hayotiy.",
  },
];

/* ── Nearshoring ── */
export const techStats: Stat[] = [
  {
    value: 194,
    suffix: " mlrd $",
    label: "Avtosanoat eksporti (avtomobil va ehtiyot qismlar)",
    note: "2024 · eksportning ~31% i",
  },
  {
    value: 4.09,
    suffix: " mln",
    decimals: 2,
    label: "Ishlab chiqarilgan avtomobillar",
    note: "2025 · dunyoda 7-o‘rin (2024: 5-o‘rin)",
  },
  {
    value: 40.9,
    suffix: " mlrd $",
    decimals: 1,
    label: "Rekord xorijiy investitsiya (FDI)",
    note: "2025 · yangi kapital 6,5 mlrd $ ga yetdi",
  },
  {
    value: 80,
    prefix: ">",
    suffix: "%",
    label: "Eksportning AQShga ketadigan ulushi",
    note: "2025",
  },
];

export const factoryPath = [
  { year: "1938", name: "Pemex", text: "Neft milliylashtirildi — davlat iqtisodiyoti poydevori" },
  { year: "1965", name: "Maquiladora", text: "Chegarada ilk eksport zavodlari" },
  { year: "1994", name: "NAFTA", text: "AQSh va Kanada bozoriga bojsiz kirish" },
  { year: "2001", name: "Xitoy JSTda", text: "Arzon yig‘ish bozorining bir qismi Xitoyga ketdi" },
  { year: "2020", name: "T-MEC", text: "Avtomobil qismlari va mehnat bo‘yicha yangi qoidalar" },
  { year: "2025", name: "Plan México", text: "Soliq imtiyozlari, sanoat parklari, nearshoring" },
];

export const fdiChain = [
  { title: "AQSh yonida", figure: "3 145 km", note: "chegara — dunyodagi eng yirik iste’mol bozori qo‘shnisi" },
  { title: "Kapital keladi", figure: "40,9 mlrd $", note: "FDI, 2025-yil rekord" },
  { title: "Zavodlar eksport qiladi", figure: "665 mlrd $", note: "eksport (2025)" },
  { title: "Import ham yuqori", figure: "+0,8 mlrd $", note: "umumiy savdo balansi — komponentlar chetdan keladi" },
  { title: "Daromad o‘sadi", figure: "13 889 $", note: "aholi jon boshiga YaIM (2025)" },
];

export const fdiGives = [
  {
    title: "Texnologiya va ko‘nikma",
    text: "Avtomobil va elektronika zavodlari muhandis hamda texniklarni tayyorlaydi — Querétaro, Monterrey va Guadalajara sanoat klasterlariga aylandi.",
  },
  {
    title: "Mintaqaviy ta’minot zanjiri",
    text: "AQSh kompaniyalari Osiyodan qaramlikni kamaytirib, ishlab chiqarishni yaqin qo‘shniga ko‘chirmoqda («nearshoring»).",
  },
  {
    title: "Barqaror eksport tushumi",
    text: "Eksport YaIMning ~35% ini tashkil qiladi, FDI esa pesoni va valyuta zaxiralarini qo‘llab-quvvatlaydi.",
  },
  {
    title: "Lekin: kam mahalliy qiymat",
    text: "Eksport mahsulotlari tarkibida import komponentlar ko‘p, mahalliy ta’minotchilar kam: shu sabab eksport 7,6% o‘sganda ham YaIM <1% o‘sdi.",
  },
];

/* ── Muammolar ── */
export const remittances = [
  { year: 2015, value: 24.8 },
  { year: 2018, value: 33.7 },
  { year: 2020, value: 40.6 },
  { year: 2022, value: 58.5 },
  { year: 2023, value: 63.3 },
  { year: 2024, value: 64.8 },
  { year: 2025, value: 61.8 },
];

export type BarRow = { country: string; code?: string; value: number; focus?: boolean; approx?: boolean };
export const exportSplit: BarRow[] = [
  { country: "AQSh", code: "us", value: 535, focus: true, approx: true },
  { country: "Qolgan dunyo", value: 130, approx: true },
];

export const risks = [
  {
    figure: "55%",
    title: "Norasmiy iqtisodiyot",
    text: "Har ikki ishchidan biridan ko‘pi rasmiy shartnomasiz, ijtimoiy himoyasiz ishlaydi. 2025-yilda yaratilgan barcha yangi ish o‘rinlari norasmiy bo‘ldi.",
  },
  {
    figure: "~100 mlrd $",
    title: "Pemex va davlat korxonalari",
    text: "Pemex — dunyodagi eng qarzdor neft kompaniyalaridan biri. Neft ishlab chiqarish pasaymoqda, davlat kompaniyani subsidiya bilan ushlab turibdi.",
  },
];

/* ── Kelajak ── */
export const future = [
  {
    tag: "Plan México",
    title: "Plan México: 2030 gacha",
    text: "2025-yil yanvaridan: yarimo‘tkazgich, elektromobil, farmatsevtika va agrosanoat uchun soliq imtiyozlari (2030-yil oktabrigacha) va sanoat parklari.",
  },
  {
    tag: "T-MEC",
    title: "T-MEC: yillik ko‘rib chiqish",
    text: "AQSh 2026-yil 1-iyulda kelishuvni uzaytirmadi. U 2036-yilgacha amalda, lekin har yili qayta ko‘riladi: tariflar va avtomobil qoidalari — asosiy mavzu.",
  },
  {
    tag: "Infratuzilma",
    title: "Poyezdlar va portlar",
    text: "Tren Maya, Tehuantepec dengizlararo koridori va yo‘lovchi poyezdlari: Tinch okeani va Meksika ko‘rfazini temir yo‘l bilan bog‘lash rejasi.",
  },
  {
    tag: "Energiya",
    title: "Energiya va suv: asosiy to‘siq",
    text: "Sanoat parklari uchun elektr va suv yetishmaydi. Nearshoring imkoniyatini ushlab qolish uchun tarmoqqa sarmoya zarur.",
  },
  {
    tag: "Top-10",
    title: "Maqsad: dunyoning 10 ta yirik iqtisodiyoti",
    text: "Hukumat Meksikani eng yirik o‘nta iqtisodiyot qatoriga olib chiqmoqchi. Buning uchun o‘sish hozirgi ~1% dan bir necha barobar oshishi kerak.",
  },
];

/* ── Taqqoslash ── */
export type CompareRow = {
  label: string;
  unit: string;
  mx: number;
  uz: number;
  digits?: number;
  approx?: boolean;
  note?: string;
};
export const compare: CompareRow[] = [
  { label: "Aholi", unit: "mln", mx: 131, uz: 38.2, digits: 1 },
  { label: "YaIM (nominal)", unit: "mlrd $", mx: 1900, uz: 145, digits: 0, approx: true },
  { label: "Aholi jon boshiga YaIM", unit: "$", mx: 13889, uz: 3800, digits: 0, approx: true },
  { label: "Real o‘sish, 2025", unit: "%", mx: 0.8, uz: 7.7, digits: 1 },
  { label: "Eksport", unit: "mlrd $", mx: 664.8, uz: 33.8, digits: 1 },
  { label: "Eksport / YaIM", unit: "%", mx: 35, uz: 23, digits: 0, approx: true },
  { label: "Inflyatsiya, 2025", unit: "%", mx: 3.7, uz: 7.3, digits: 1 },
  { label: "Pul o‘tkazmalari / YaIM", unit: "%", mx: 3, uz: 13, digits: 0, approx: true },
  { label: "Maydon", unit: "ming km²", mx: 1964, uz: 449, digits: 0 },
];

export const similar = [
  "Ikkala davlatning ham asosiy tashqi tayanchi — bitta yirik hamkor (Meksika uchun AQSh, O‘zbekiston uchun Rossiya va Xitoy).",
  "Millionlab muhojirlar pul o‘tkazmalari oilalar daromadini qo‘llab-quvvatlaydi.",
  "Norasmiy iqtisodiyot katta, davlat korxonalari (Pemex, O‘zbekneftgaz) iqtisodiyotda muhim o‘rin tutadi.",
  "Aholi yosh va o‘sib bormoqda — mehnat resursi katta.",
];
export const different = [
  "Daromad: Meksikada aholi jon boshiga YaIM ~3,6 barobar yuqori, lekin o‘sish sur’ati 0,8% ga qarshi 7,7%.",
  "Joylashuv: Meksika dunyodagi eng boy bozor yonida; O‘zbekiston ikki karra quruqlik bilan o‘ralgan.",
  "Eksport: Meksika — avtomobil va elektronika (sanoat mollari); O‘zbekistonda oltin, gaz, paxta va xomashyo ulushi katta.",
  "Islohot vaqti: Meksika bozor islohotlarini 1986–1994-yillarda o‘tkazdi; O‘zbekiston faol islohotlarni 2017-yilda boshladi.",
];

export const lessons = [
  {
    title: "Katta bozorga ulanish",
    text: "NAFTA Meksikani AQSh ta’minot zanjirining bir bo‘lagiga aylantirdi. O‘zbekiston uchun muqobil — Xitoy, Yevropa va Janubiy Osiyo bilan transport yo‘laklari va savdo bitimlari.",
  },
  {
    title: "Bitta bozorga qaramlik — xavf",
    text: "Eksportning 80% i AQShga bog‘liq bo‘lgani uchun bitta tarif qarori butun iqtisodiyotni silkitdi. Bozorlarni ko‘paytirish — sug‘urta.",
  },
  {
    title: "Eksport ≠ o‘sish",
    text: "Meksika 665 mlrd $ eksport qilsa-da, o‘sish ~1%. Sabab — mahalliy qiymat kamligi. O‘zbekiston xomashyoni emas, qayta ishlangan mahsulotni eksport qilishi kerak.",
  },
  {
    title: "Pul o‘tkazmalari — vaqtinchalik tayanch",
    text: "Pul o‘tkazmalari ehtiyojni yopadi, lekin hamma narsani hal qilmaydi. O‘zbekistonda ular YaIMning ~13% i — ularni ishlab chiqarish va ta’limga yo‘naltirish kerak.",
  },
];

/* ── Xulosa ── */
export const conclusions = [
  "Joylashuv — boylik, lekin qaramlik ham: AQSh yonidagi o‘rin Meksikaga rekord eksport berdi, lekin bitta bozorga bog‘laydi.",
  "Eksport o‘sishi o‘z-o‘zidan taraqqiyot emas: mahalliy qiymat, norasmiylik va institutlar o‘sishni ~1% da ushlab turibdi.",
  "O‘zbekiston uchun: yosh aholi va tez o‘sish — kuchli boshlang‘ich. Meksika xatolaridan o‘rganib, bozorlarni ko‘paytirish va mahalliy qiymatni oshirish kerak.",
];

export const sources = [
  "INEGI — Meksika YaIM, inflyatsiya, tashqi savdo va bandlik (ENOE), 2025–2026",
  "Banxico — pul o‘tkazmalari, 2025",
  "Meksika Iqtisodiyot vazirligi — xorijiy investitsiyalar, 2025",
  "OICA; INEGI — avtomobil ishlab chiqarish va eksporti, 2025",
  "XVF (IMF) — World Economic Outlook; Jahon banki — World Development Indicators",
  "AQSh Savdo vakili idorasi (USTR) — T-MEC qo‘shma ko‘rib chiqish, 2026",
  "Plan México (Meksika hukumati), 2025 · Mexico News Daily, Mexico Business News",
  "O‘zbekiston Milliy statistika qo‘mitasi va Markaziy banki, 2025–2026",
  "Tarixiy davr o‘rtachalari va solishtirma ko‘rsatkichlar taxminiy hisob: «~» bilan belgilangan",
  "Chichén Itzá surati — Villa Vyctor, Wikimedia Commons (CC BY 2.0); bayroqlar — circle-flags (MIT)",
];
