export const CATS = ["transport", "food", "cafe", "tickets", "other"];

export const living = (b) => CATS.reduce((s, k) => s + (b[k] || 0), 0);

export const yen = (n) => "¥" + Math.round(n).toLocaleString("en-US");
export const hkd = (n, r) => "HK$" + Math.round(n / r.HKD).toLocaleString("en-US");
export const cad = (n, r) => "C$" + Math.round(n / r.CAD).toLocaleString("en-US");

/** Parse a user-typed amount like "12,000" or "¥8000". Returns null when empty/invalid. */
export function parseYen(s) {
  const n = parseInt(String(s).replace(/[^\d]/g, ""), 10);
  return Number.isFinite(n) ? n : null;
}
