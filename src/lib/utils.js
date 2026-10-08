import { clsx, } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));

/** Paydo bo‘lish kechikishi: style={delay(120)} */
export const delay = (ms) => ({ "--d": `${ms}ms` }) ;

/** So‘z indeksi: style={wordIndex(0)} */
export const wordIndex = (i) => ({ "--i": i }) ;

/** 1234.5 → «1 234,5» (o‘zbekcha yozuv) */
export const fmt = (v, digits = 1) =>
  v.toLocaleString("ru-RU", { minimumFractionDigits: digits, maximumFractionDigits: digits });

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
