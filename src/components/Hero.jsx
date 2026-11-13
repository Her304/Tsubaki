import React from "react";
import Img from "./Img.jsx";
import { useT, UI, T } from "../i18n.jsx";
import { DRIVE } from "../data/trip.js";
import { yen, hkd, cad } from "../money.js";

const HEADLINE = T("十五日東京，\n由成田到最後一盒手信。", "Fifteen days in Tokyo,\nfrom Narita to the last omiyage.");

export default function Hero({ dailyAvg, tripTotal, rates, reelsLeft }) {
  const t = useT();
  return (
    <header className="hero">
      <div className="hero-panels">
        <div className="hp c-slate">
          <div className="hp-top">TOKYO</div>
          <div className="hp-verse"><span>雪落淺草</span><span>初詣祈福</span></div>
          <div className="hp-latin">TŌ</div>
          <div className="hp-char">東</div>
        </div>
        <div className="hp c-beige">
          <div className="hp-top">WINTER</div>
          <div className="hp-verse"><span>江之電行</span><span>七里濱上</span></div>
          <div className="hp-latin">KYŌ</div>
          <div className="hp-char">京</div>
        </div>
        <div className="hp c-teal">
          <div className="hp-top">JOURNAL</div>
          <div className="hp-verse"><span>時之鐘響</span><span>小江戶夢</span></div>
          <div className="hp-latin">FUYU</div>
          <div className="hp-char">冬</div>
        </div>
        <div className="hp hp-art">
          <Img k="asakusa_print" alt={t(T("歌川廣重《淺草金龍山》", "Hiroshige, Kinryūzan Temple at Asakusa"))} />
          <div className="hp-char hp-char-light">旅</div>
          <div className="stamps" aria-hidden="true">
            <div className="stamp s1"><b>2026</b><span>—</span><b>2027</b></div>
            <div className="stamp s2"><b>手信</b><span>OMIYAGE</span></div>
          </div>
        </div>
      </div>
      <div className="hero-band">
        <div className="wrap hero-band-inner">
          <h1>{t(HEADLINE)}</h1>
          <div>
            <p className="eyebrow light">{t(UI.eyebrow)}</p>
            <p className="lede">{t(UI.lede)}</p>
            <a className="docs-btn" href={DRIVE} target="_blank" rel="noopener noreferrer">
              <b>{t(UI.docs)}</b>
              <span>{t(UI.docsSub)} ↗</span>
            </a>
          </div>
        </div>
      </div>
      <div className="wrap hero-strip">
        <div className="hs"><i className="dot c-slate" /><b>15</b><span>{t(UI.days)}</span></div>
        <div className="hs"><i className="dot c-beige" /><b>3</b><span>{t(UI.travellers)}</span></div>
        <div className="hs"><i className="dot c-teal" /><b>{yen(dailyAvg)}</b><span>{t(UI.avgDay)}</span></div>
        <div className="hs"><i className="dot c-rust" /><b>{yen(tripTotal)}</b><span>{t(UI.grandTotal)} · {hkd(tripTotal, rates)} · {cad(tripTotal, rates)}</span></div>
        <div className="hs"><i className="dot c-olive" /><b>{reelsLeft}</b><span>{t(T("條 Reels 未拍", "reels left to film"))}</span></div>
      </div>
    </header>
  );
}
