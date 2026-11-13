import React, { createContext, useContext, useEffect, useState } from "react";
import { load, save } from "./storage.js";

const LangCtx = createContext({ lang: "zh", setLang: () => {} });

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const q = new URLSearchParams(window.location.search).get("lang");
    return q === "en" || q === "zh" ? q : load("lang", "zh");
  });
  useEffect(() => {
    save("lang", lang);
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
  }, [lang]);
  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>;
}

/** Returns a translator: t({zh, en}) or t("plain string"). */
export function useT() {
  const { lang } = useContext(LangCtx);
  return (v) => (v == null ? "" : typeof v === "string" ? v : v[lang] ?? v.en ?? v.zh);
}

export function useLang() {
  return useContext(LangCtx);
}

/** Shorthand for writing bilingual strings in data files. */
export const T = (zh, en) => ({ zh, en });

/** Interface copy. */
export const UI = {
  eyebrow: T("行程表 · 2026年12月26日 – 2027年1月9日", "Itinerary · 26 Dec 2026 – 9 Jan 2027"),
  lede: T(
    "與石凱婷、翟青兒在東京五天，之後與翟青兒迎接新年，最後幾天獨自慢遊。行程已按你的文件逐日整理，修正了一處時間衝突，空白時段補上建議（標示「提案」）。",
    "Five days in Tokyo with 石凱婷 and 翟青兒, New Year with 翟青兒, then solo days. Everything from your planning doc is organised by day, one time clash is fixed, and blank slots have suggestions marked “Suggestion”."
  ),
  days: T("日", "days"),
  travellers: T("人同行", "travellers"),
  avgDay: T("每人每日平均", "avg / day / person"),
  tripTotal: T("全程預算（每人）", "trip total per person"),
  itinerary: T("日程", "Day by day"),
  itinerarySub: T(
    "實心圓點為你文件中的行程；空心綠點「提案」為補充建議。預算以每人計算，包括交通、餐飲、咖啡小食及門票，不含住宿。手信及購物另計，金額可自行修改。",
    "Filled dots come from your doc. Hollow green dots marked “Suggestion” are mine. Budgets are per person and cover transport, meals, cafés and tickets, not lodging. Souvenirs and shopping are counted separately, and you can edit them."
  ),
  all: T("全部", "All"),
  plan: T("計劃", "Plan"),
  idea: T("提案", "Suggestion"),
  retimed: T("已改時間", "Re-timed"),
  planned: T("已計劃", "Planned"),
  partial: T("部分計劃", "Partly planned"),
  open: T("空白日 · 建議", "Open day · ideas"),
  dailyBudget: T("每日預算 · 每人", "Daily budget · per person"),
  living: T("日常開支", "Day spending"),
  souvenir: T("手信", "Souvenirs"),
  dayTotal: T("當日合計", "Day total"),
  transport: T("交通", "Transport"),
  food: T("餐飲", "Meals"),
  cafe: T("咖啡・小食", "Cafés & snacks"),
  tickets: T("門票", "Tickets & entry"),
  other: T("其他", "Other"),
  spots: T("今日重點", "Spots today"),
  priceRange: T("人均", "per person"),
  map: T("地圖", "Map"),
  budgetTitle: T("預算 · 一覽", "Budget at a glance"),
  budgetSub: T(
    "以每人計算，不含住宿。建議預留 10–15% 應付額外開支。手信金額可在下方「手信與購物」修改。",
    "Per person, lodging excluded. Keep a 10–15% buffer. Edit souvenir amounts in “Souvenirs & shopping” below."
  ),
  date: T("日期", "Date"),
  day: T("行程", "Day"),
  total: T("合計", "Total"),
  shopTitle: T("手信與購物", "Souvenirs & shopping"),
  shopSub: T(
    "預設金額為估算（標示「估」）或官網價格（標示「官網」）。可直接修改金額，或取消勾選不打算購買的項目；所有改動只儲存在此電腦的瀏覽器中。",
    "Amounts are estimates (marked “est.”) or store prices (marked “store”). Edit any number or untick what you won't buy. Changes are saved in this browser only."
  ),
  souvenirByDay: T("每日手信預算", "Souvenir budget by day"),
  wishlist: T("購物清單", "Shopping wishlist"),
  est: T("估", "est."),
  official: T("官網", "store"),
  include: T("計入", "Include"),
  priority: T("優先", "Priority"),
  soldOut: T("官網顯示售罄／預訂", "Sold out / pre-order online"),
  shoppingTotal: T("購物總額", "Shopping total"),
  souvenirTotal: T("手信總額", "Souvenir total"),
  grandTotal: T("全程總開支（每人，連購物）", "Everything per person (incl. shopping)"),
  taxFree: T(
    "免稅：日本自 2026 年 11 月起改為退稅制，購物時先支付 10% 消費稅，離境時於機場海關申請退還。請攜帶護照、保持商品未拆封並保留收據。出發前請再確認最新規定。",
    "Tax-free: from Nov 2026 Japan moved to a refund system. You pay the 10% tax at the till and claim it back at airport customs when you leave. Carry your passport, keep goods sealed and keep receipts. Check the latest rules before you fly."
  ),
  reels: T("要拍的 Reels", "Reels to film"),
  done: T("完成", "done"),
  rates: T("匯率（可按銀行報價修改）", "Exchange rates (edit to match your bank)"),
  reset: T("重設", "Reset"),
  ratesNote: T("預設：2026 年 10 月底至 11 月初中間價", "Default: mid-market, late Oct – early Nov 2026"),
  credits: T("圖片來源", "Image credits"),
  creditsNote: T(
    "餐廳相片取自你文件中的 Tabelog 截圖；地點相片及浮世繪來自 Wikimedia Commons（授權如下）。",
    "Restaurant photos are cropped from the Tabelog screenshots in your doc. Place photos and ukiyo-e prints are from Wikimedia Commons (licences below)."
  ),
  footer: T(
    "根據你的「2026-2027 Japan」文件整理。價格根據近期公開資料估算，可能會有變動。",
    "Built from your “2026-2027 Japan” planning doc. Prices are estimates from recent published figures and may change."
  ),
  drive: T("共享 Google Drive 資料夾", "Shared Google Drive folder"),
  docs: T("重要文件", "Important docs"),
  docsSub: T("訂房確認、機票及其他文件 · Google Drive", "Bookings, tickets and other papers · Google Drive"),
  attention: T("注意", "Note"),
};
