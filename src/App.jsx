import React, { useEffect, useMemo, useState } from "react";
import Hero from "./components/Hero.jsx";
import Day from "./components/Day.jsx";
import { useT, useLang, UI, T } from "./i18n.jsx";
import { DAYS, PHASES, WISH, REELS, DEFAULT_RATES, DRIVE } from "./data/trip.js";
import { IMAGES } from "./data/images.js";
import { living, yen, hkd, cad, parseYen } from "./money.js";
import { load, save } from "./storage.js";

function usePersisted(key, initial) {
  const [v, setV] = useState(() => load(key, initial));
  useEffect(() => save(key, v), [key, v]);
  return [v, setV];
}

function TopBar({ phase, setPhase }) {
  const t = useT();
  const { lang, setLang } = useLang();
  return (
    <nav className="bar" aria-label="Days">
      <div className="wrap bar-inner">
        <a href="#top" className="brand" lang="zh-Hant">東京冬旅</a>
        <div className="chips">
          {DAYS.map((d) => (
            <a key={d.id} href={"#" + d.id} className={"chip c-" + d.color} title={t(d.title)}>
              <small>{d.mon === 12 ? "DEC" : "JAN"}</small>
              <b>{d.d}</b>
            </a>
          ))}
        </div>
        <div className="seg" role="group" aria-label="Filter">
          {[["all", UI.all], ["p1", PHASES.p1.range], ["p2", PHASES.p2.range], ["p3", PHASES.p3.range]].map(([k, lab]) => (
            <button key={k} aria-pressed={phase === k} onClick={() => setPhase(k)}>{t(lab)}</button>
          ))}
        </div>
        <a className="bar-docs" href={DRIVE} target="_blank" rel="noopener noreferrer">{t(UI.docs)} ↗</a>
        <div className="seg lang" role="group" aria-label="Language">
          <button aria-pressed={lang === "zh"} onClick={() => setLang("zh")} lang="zh-Hant">繁</button>
          <button aria-pressed={lang === "en"} onClick={() => setLang("en")}>EN</button>
        </div>
      </div>
    </nav>
  );
}

function Rates({ rates, setRates }) {
  const t = useT();
  const set = (k, v) => {
    const n = parseFloat(v);
    if (n > 0) setRates((r) => ({ ...r, [k]: n }));
  };
  return (
    <div className="rates">
      <span>{t(UI.rates)}</span>
      {["HKD", "CAD"].map((k) => (
        <label key={k} htmlFor={"rate-" + k}>
          1 {k} = ¥
          <input id={"rate-" + k} key={k + rates[k]} type="number" step="0.1" min="1" defaultValue={rates[k]}
            onBlur={(e) => set(k, e.target.value)} onKeyDown={(e) => e.key === "Enter" && e.currentTarget.blur()} />
        </label>
      ))}
      <button onClick={() => setRates(DEFAULT_RATES)}>{t(UI.reset)}</button>
      <small>{t(UI.ratesNote)}</small>
    </div>
  );
}

function BudgetTable({ rates, souv }) {
  const t = useT();
  const rows = DAYS.map((d) => ({ d, live: living(d.budget), s: souv(d) }));
  const max = Math.max(...rows.map((r) => r.live + r.s));
  const sumL = rows.reduce((a, r) => a + r.live, 0);
  const sumS = rows.reduce((a, r) => a + r.s, 0);
  return (
    <section className="block wrap" aria-labelledby="bt">
      <div className="sec-head">
        <span className="sec-cjk" lang="zh-Hant">算</span>
        <div>
          <h2 id="bt">{t(UI.budgetTitle)}</h2>
          <p className="sub">{t(UI.budgetSub)}</p>
        </div>
      </div>
      <div className="tbl-wrap">
        <table>
          <thead>
            <tr>
              <th>{t(UI.date)}</th><th>{t(UI.day)}</th><th className="bar-col"></th>
              <th>{t(UI.living)}</th><th>{t(UI.souvenir)}</th><th>JPY</th><th>HKD</th><th>CAD</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ d, live, s }) => (
              <tr key={d.id}>
                <td className="num">{d.d}/{d.mon}</td>
                <td><a href={"#" + d.id}>{t(d.title)}</a></td>
                <td className="bar-col">
                  <span className="stack">
                    <i className="seg-live" style={{ width: (live / max) * 100 + "%" }} />
                    <i className="seg-souv" style={{ width: (s / max) * 100 + "%" }} />
                  </span>
                </td>
                <td className="num">{yen(live)}</td>
                <td className="num">{s ? yen(s) : "—"}</td>
                <td className="num strong">{yen(live + s)}</td>
                <td className="num">{hkd(live + s, rates)}</td>
                <td className="num">{cad(live + s, rates)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>{t(UI.total)} · 15 {t(UI.days)}</td>
              <td className="num">{yen(sumL)}</td>
              <td className="num">{yen(sumS)}</td>
              <td className="num">{yen(sumL + sumS)}</td>
              <td className="num">{hkd(sumL + sumS, rates)}</td>
              <td className="num">{cad(sumL + sumS, rates)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="key">
        <span><i className="seg-live" />{t(UI.living)}</span>
        <span><i className="seg-souv" />{t(UI.souvenir)}</span>
      </div>
    </section>
  );
}

function Shopping({ rates, souv, setSouvenir, wish, setWish, wishTotal, souvTotal }) {
  const t = useT();
  const upd = (id, patch) => setWish((w) => ({ ...w, [id]: { ...w[id], ...patch } }));
  return (
    <section className="block wrap" aria-labelledby="sh">
      <div className="sec-head">
        <span className="sec-cjk" lang="zh-Hant">買</span>
        <div>
          <h2 id="sh">{t(UI.shopTitle)}</h2>
          <p className="sub">{t(UI.shopSub)}</p>
        </div>
      </div>

      <div className="shop-totals">
        <div className="st c-butter"><span>{t(UI.souvenirTotal)}</span><b>{yen(souvTotal)}</b><small>{hkd(souvTotal, rates)} · {cad(souvTotal, rates)}</small></div>
        <div className="st c-sky"><span>{t(UI.shoppingTotal)}</span><b>{yen(wishTotal)}</b><small>{hkd(wishTotal, rates)} · {cad(wishTotal, rates)}</small></div>
        <div className="st c-ink"><span>{t(UI.souvenirTotal)} + {t(UI.shoppingTotal)}</span><b>{yen(wishTotal + souvTotal)}</b><small>{hkd(wishTotal + souvTotal, rates)} · {cad(wishTotal + souvTotal, rates)}</small></div>
      </div>

      <div className="shop-grid">
        <div className="panel">
          <h3>{t(UI.wishlist)}</h3>
          <ul className="wish">
            {WISH.map((w) => {
              const st = wish[w.id];
              return (
                <li key={w.id} className={st.on ? "" : "off"}>
                  <input type="checkbox" id={"w-" + w.id} checked={st.on} onChange={(e) => upd(w.id, { on: e.target.checked })} aria-label={t(UI.include)} />
                  <div className="w-main">
                    <label htmlFor={"w-" + w.id} className="w-name">
                      <span className="w-day">{w.day}</span>
                      {t(w.name)}
                      {w.pri && <span className="w-pri">{t(UI.priority)}</span>}
                    </label>
                    <div className="w-meta">
                      <span className={"w-kind " + w.kind}>{t(w.kind === "official" ? UI.official : UI.est)}</span>
                      {w.soldOut && <span className="w-warn">{t(UI.soldOut)}</span>}
                      {w.note && <span>{t(w.note)}</span>}
                      <a href={w.url} target="_blank" rel="noopener noreferrer">{t(T("連結", "Link"))} ↗</a>
                    </div>
                  </div>
                  <span className="yen-input">
                    ¥
                    <input inputMode="numeric" aria-label={t(w.name)} value={st.price.toLocaleString("en-US")}
                      onChange={(e) => upd(w.id, { price: parseYen(e.target.value) ?? 0 })} />
                  </span>
                </li>
              );
            })}
          </ul>
          <p className="fine">{t(UI.taxFree)}</p>
        </div>

        <div className="panel">
          <h3>{t(UI.souvenirByDay)}</h3>
          <ul className="souv-list">
            {DAYS.map((d) => (
              <li key={d.id}>
                <span className={"sw c-" + d.color} />
                <label htmlFor={"souv2-" + d.id}>
                  <b>{d.d}/{d.mon}</b> {t(d.title)}
                  {d.souvenirNote && <small>{t(d.souvenirNote)}</small>}
                </label>
                <span className="yen-input">
                  ¥
                  <input id={"souv2-" + d.id} inputMode="numeric" value={souv(d).toLocaleString("en-US")}
                    onChange={(e) => setSouvenir(d.id, parseYen(e.target.value) ?? 0)} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Reels({ done, setDone }) {
  const t = useT();
  const n = Object.values(done).filter(Boolean).length;
  return (
    <section className="block wrap" aria-labelledby="rl">
      <div className="sec-head">
        <span className="sec-cjk" lang="zh-Hant">影</span>
        <div>
          <h2 id="rl">{t(UI.reels)} <span className="count">{n} / {REELS.length} {t(UI.done)}</span></h2>
        </div>
      </div>
      <ul className="reels">
        {REELS.map(([name, url], i) => (
          <li key={url} className={done[url] ? "done" : ""}>
            <input type="checkbox" id={"reel-" + i} checked={!!done[url]} onChange={(e) => setDone((r) => ({ ...r, [url]: e.target.checked }))} />
            <label htmlFor={"reel-" + i}>{String(i + 1).padStart(2, "0")}</label>
            <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Credits() {
  const t = useT();
  const list = Object.entries(IMAGES).filter(([, m]) => m.credit);
  return (
    <footer className="foot">
      <div className="wrap">
        <p>{t(UI.footer)} <a href={DRIVE} target="_blank" rel="noopener noreferrer">{t(UI.drive)} ↗</a></p>
        <details>
          <summary>{t(UI.credits)}</summary>
          <p className="fine">{t(UI.creditsNote)}</p>
          <ul className="credits">
            {list.map(([k, m]) => (
              <li key={k}>
                <a href={m.credit.page} target="_blank" rel="noopener noreferrer">{m.credit.title}</a>
                {m.credit.artist && <> · {m.credit.artist}</>} · {m.credit.license}
              </li>
            ))}
          </ul>
        </details>
      </div>
    </footer>
  );
}

export default function App() {
  const t = useT();
  const [rates, setRates] = usePersisted("rates", DEFAULT_RATES);
  const [phase, setPhase] = usePersisted("phase", "all");
  const [souvMap, setSouvMap] = usePersisted("souvenir", {});
  const [wish, setWish] = usePersisted(
    "wish",
    Object.fromEntries(WISH.map((w) => [w.id, { price: w.price, on: true }]))
  );
  const [reels, setReels] = usePersisted("reels", {});

  // Keep wishlist state in sync if items are added later
  const wishState = useMemo(() => {
    const s = { ...wish };
    WISH.forEach((w) => { if (!s[w.id]) s[w.id] = { price: w.price, on: true }; });
    return s;
  }, [wish]);

  const souv = (d) => (souvMap[d.id] ?? d.souvenir) || 0;
  const setSouvenir = (id, v) => setSouvMap((m) => ({ ...m, [id]: v }));

  const livingTotal = DAYS.reduce((a, d) => a + living(d.budget), 0);
  const souvTotal = DAYS.reduce((a, d) => a + souv(d), 0);
  const wishTotal = WISH.reduce((a, w) => a + (wishState[w.id].on ? wishState[w.id].price : 0), 0);
  const tripTotal = livingTotal + souvTotal + wishTotal;
  const reelsLeft = REELS.length - Object.values(reels).filter(Boolean).length;

  const shown = phase === "all" ? DAYS : DAYS.filter((d) => d.phase === phase);
  const groups = [];
  shown.forEach((d) => {
    const g = groups[groups.length - 1];
    if (g && g.phase === d.phase) g.days.push(d);
    else groups.push({ phase: d.phase, days: [d] });
  });

  return (
    <div id="top">
      <Hero dailyAvg={(livingTotal + souvTotal) / DAYS.length} tripTotal={tripTotal} rates={rates} reelsLeft={reelsLeft} />
      <TopBar phase={phase} setPhase={setPhase} />

      <section className="block" aria-labelledby="it">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-cjk" lang="zh-Hant">程</span>
            <div>
              <h2 id="it">{t(UI.itinerary)}</h2>
              <p className="sub">{t(UI.itinerarySub)}</p>
            </div>
          </div>
          <Rates rates={rates} setRates={setRates} />
          {groups.map((g) => (
            <div key={g.phase} className="phase-group">
              <div className={"phase c-" + PHASES[g.phase].color}>
                <h3>{t(PHASES[g.phase].title)}</h3>
                <span>{t(PHASES[g.phase].range)} · {t(PHASES[g.phase].crew)}</span>
              </div>
              {g.days.map((d) => (
                <Day key={d.id} d={d} rates={rates} souvenir={souv(d)} setSouvenir={setSouvenir} />
              ))}
            </div>
          ))}
        </div>
      </section>

      <BudgetTable rates={rates} souv={souv} />
      <Shopping rates={rates} souv={souv} setSouvenir={setSouvenir} wish={wishState} setWish={setWish} wishTotal={wishTotal} souvTotal={souvTotal} />
      <Reels done={reels} setDone={setReels} />
      <Credits />
    </div>
  );
}
