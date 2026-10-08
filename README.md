# Meksika iqtisodiyoti — taqdimot sayti

Iqtisodiyot fanidan interaktiv taqdimot: Meksika iqtisodiyoti va O‘zbekiston bilan taqqoslash.
Tuzilishi va animatsiyalari «Yaponiya» va «Vyetnam» saytlaridagi bilan bir xil.

## Ishga tushirish

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/ papkasiga tayyor sayt
```

Vercel’ga joylash: loyihani GitHub’ga yuklang va Vercel’da import qiling (Framework: Vite) yoki `npx vercel`.

## Ism va guruhni qo‘shish

`src/data.ts` faylining boshida:

```ts
export const author = { name: "Ism Familiya", group: "Guruh", course: "Iqtisodiyot fanidan taqdimot" };
```

Barcha matn va raqamlar ham shu faylda.

## Boshqarish

`→ ↓ PageDown Probel` — keyingi qadam · `← ↑ PageUp` — oldingi · `F` — to‘liq ekran · `?` — yordam.

## Bo‘limlar

Kirish · Meksika (parallax) · Raqamlarda · Tarix (sticky timeline) · Inqiroz (whiteout) · Sanoat (3D mato, flip kartalar) ·
Nearshoring (Spline robot, sonar, FDI zanjiri) · Muammolar (particle flow, diagrammalar) · Kelajak (marmar fon) ·
Taqqoslash (Meksika ↔ O‘zbekiston) · Xulosa (shader, «Rahmat!»).

Stack: React 19, Vite, Tailwind CSS v4, GSAP, Lenis, Motion, Paper Shaders, NumberFlow, Spline.
# Presentation-Website-for-Mexico
