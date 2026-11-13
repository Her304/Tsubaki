import React from "react";
import Img from "./Img.jsx";
import { useT, UI } from "../i18n.jsx";
import { PHASES } from "../data/trip.js";
import { CATS, living, yen, hkd, cad, parseYen } from "../money.js";

function Banner({ d }) {
  const t = useT();
  const mm = String(d.mon).padStart(2, "0");
  const dd = String(d.d).padStart(2, "0");
  return (
    <div className={`banner c-${d.color} shape-${d.artShape}`}>
      <div className="bn-date">
        <b>{mm}.{dd}</b>
        <span>{t(d.dow)}</span>
        <div className="bn-verse" aria-hidden="true">
          {d.verse.map((v) => <span key={v}>{v}</span>)}
        </div>
      </div>
      <div className="bn-title">
        <div className="bn-romaji">{d.romaji}</div>
        <div className="bn-cjk" lang="zh-Hant">{d.cjk}</div>
      </div>
      <div className="bn-art">
        <Img k={d.art} alt="" />
      </div>
      <div className="bn-strip">
        <span>{t(d.title)}</span>
        <span className="bn-strip-area">{t(d.area)}</span>
      </div>
    </div>
  );
}

function Item({ it }) {
  const t = useT();
  const time = t(it.t);
  return (
    <li className={"it " + (it.src === "idea" ? "idea" : "plan")}>
      <div className="it-time">{time}</div>
      <div className="it-body">
        <div className="it-ttl">
          {t(it.ttl)}
          {it.src === "idea" && <span className="tag">{t(UI.idea)}</span>}
          {it.tag && <span className="tag moved">{t(UI.retimed)}</span>}
        </div>
        {it.nt && <p className="it-nt">{t(it.nt)}</p>}
        {it.links && (
          <div className="it-links">
            {it.links.map((l) => (
              <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer">{t(l.label)} ↗</a>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}

function BudgetCard({ d, rates, souvenir, setSouvenir }) {
  const t = useT();
  const live = living(d.budget);
  const total = live + souvenir;
  return (
    <aside className="budget" aria-label={t(UI.dailyBudget)}>
      <div className="eyebrow">{t(UI.dailyBudget)}</div>
      <div className="b-yen">{yen(total)}</div>
      <div className="b-fx"><span>{hkd(total, rates)}</span><span>{cad(total, rates)}</span></div>
      <dl className="b-rows">
        {CATS.filter((k) => d.budget[k]).map((k) => (
          <React.Fragment key={k}>
            <dt>{t(UI[k])}</dt>
            <dd>{yen(d.budget[k])}</dd>
          </React.Fragment>
        ))}
        <dt className="b-sub">{t(UI.living)}</dt>
        <dd className="b-sub">{yen(live)}</dd>
      </dl>
      <label className="b-souv" htmlFor={"souv-" + d.id}>
        <span className="b-souv-lab">
          <i />{t(UI.souvenir)}
          {d.souvenirNote && <small>{t(d.souvenirNote)}</small>}
        </span>
        <span className="yen-input">
          ¥
          <input
            id={"souv-" + d.id}
            inputMode="numeric"
            value={souvenir.toLocaleString("en-US")}
            onChange={(e) => setSouvenir(d.id, parseYen(e.target.value) ?? 0)}
          />
        </span>
      </label>
      {d.bn && <p className="b-note">{t(d.bn)}</p>}
    </aside>
  );
}

export default function Day({ d, rates, souvenir, setSouvenir }) {
  const t = useT();
  const statusLabel = { planned: UI.planned, partial: UI.partial, open: UI.open }[d.status];
  return (
    <article className="day" id={d.id}>
      <Banner d={d} />
      <div className="day-body">
        <div className="day-main">
          <div className="day-head">
            <span className={"pill " + d.status}>{t(statusLabel)}</span>
            <span className="day-crew">{t(PHASES[d.phase].crew)}</span>
          </div>
          {d.flag && (
            <p className="flag"><b>{t(UI.attention)}</b>{t(d.flag)}</p>
          )}
          <ol className="tl">
            {d.items.map((it, i) => <Item key={i} it={it} />)}
          </ol>
        </div>
        <BudgetCard d={d} rates={rates} souvenir={souvenir} setSouvenir={setSouvenir} />
      </div>
      {d.spots?.length > 0 && (
        <div className="spots">
          <div className="eyebrow">{t(UI.spots)}</div>
          <div className="spot-row">
            {d.spots.map((s) => {
              const inner = (
                <>
                  <div className="spot-img"><Img k={s.img} alt={t(s.name)} /></div>
                  <div className="spot-name">{t(s.name)}</div>
                  {t(s.price) && <div className="spot-price">{t(s.price)}</div>}
                </>
              );
              return s.url ? (
                <a key={s.img} className="spot" href={s.url} target="_blank" rel="noopener noreferrer">{inner}</a>
              ) : (
                <div key={s.img} className="spot">{inner}</div>
              );
            })}
          </div>
        </div>
      )}
    </article>
  );
}
