# 東京冬旅 2026–27 · Tokyo Winter Journal

A local React (Vite) trip planner for 26 Dec 2026 – 9 Jan 2027, in Traditional Chinese and English.

## Run it

```bash
npm install      # first time only
npm run dev      # opens http://localhost:5173
```

Switch language with the 繁 / EN toggle in the top bar, or open `http://localhost:5173/?lang=en`.

## Where things live

| What | File |
| --- | --- |
| Days, times, notes, budgets, souvenir defaults, wishlist, reels | `src/data/trip.js` |
| Interface wording (both languages) | `src/i18n.jsx` |
| Image list and credits | `src/data/images.js` (photos in `public/img/`) |
| Look and layout | `src/styles.css` |

Every bilingual string is written as `T("中文", "English")`.

Amounts you type on the page (souvenirs, wishlist prices, exchange rates, ticked reels) are saved in your browser's localStorage. To change the defaults for everyone, edit `src/data/trip.js`.

## Images

- Restaurant photos (Tricolore, Ginza Sand, Hills House, Izumo) and the Harajuku map are cropped from the screenshots in your planning PDF.
- Place photos and the Hokusai / Hiroshige prints come from Wikimedia Commons. Each one's licence and source link is listed under “Image credits” at the bottom of the page.
