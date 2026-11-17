import { T } from "../i18n.jsx";

const gm = (q) => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
const L = (label, url) => ({ label, url });
const MAP = T("地圖", "Map");

export const PHASES = {
  p1: { title: T("東京 · 三人行", "Tokyo, three of us"), range: T("12月26日 – 31日", "26 – 31 Dec"), crew: T("石凱婷 · 翟青兒 · 你（池袋 Airbnb 住到 31/12 12:00）", "石凱婷 · 翟青兒 · you (Ikebukuro Airbnb until 31 Dec 12:00)"), color: "slate" },
  p2: { title: T("新年 · 兩人", "New Year, two of us"), range: T("1月1日 – 4日", "1 – 4 Jan"), crew: T("翟青兒 · 你", "翟青兒 · you"), color: "rust" },
  p3: { title: T("一人旅", "Solo days"), range: T("1月5日 – 9日", "5 – 9 Jan"), crew: T("一個人", "Solo"), color: "olive" },
};

/*
  src: "plan" = from your doc, "idea" = suggestion for a blank slot
  budget: per person, JPY. souvenir: default souvenir spend for the day (editable in the app)
  cjk / romaji / verse / color / art: the poster banner for the day
*/
export const DAYS = [
  {
    id: "d1226", phase: "p1", d: 26, mon: 12, dow: T("週六", "Sat"), we: true,
    cjk: "到着", romaji: "NARITA → IKEBUKURO", verse: ["落機成田", "夜抵池袋"], color: "slate", art: "redfuji", artShape: "circle",
    title: T("抵達東京", "Arrival"), area: T("成田機場 → 池袋 Airbnb", "Narita → Ikebukuro Airbnb"), status: "partial",
    items: [
      { t: "16:00–17:00", src: "plan", ttl: T("抵達成田機場", "Land at Narita"), nt: T("出閘前先為 Suica／PASMO 增值（或加入 Apple 錢包），之後每天都會用到。", "Top up Suica / PASMO (or add it to Apple Wallet) before leaving the airport. You'll use it every day.") },
      { t: "17:00–19:00", src: "plan", ttl: T("Skyliner → 日暮里 → JR 山手線 → 池袋", "Skyliner → Nippori → JR Yamanote → Ikebukuro"), nt: T("根據你的 Google 地圖截圖，Airbnb 位於池袋四丁目，由池袋站步行約 10 分鐘。訂房確認 PDF 在 Google Drive。", "Your Google Maps screenshot puts the Airbnb in Ikebukuro 4-chōme, about a 10-minute walk from Ikebukuro Station. The booking PDF is in your Drive folder."), links: [L(T("Airbnb 位置", "Airbnb on map"), "https://maps.app.goo.gl/hJVcCkZrNcnjimhU8"), L(T("訂房確認（Google Drive）", "Booking PDF (Google Drive)"), "https://drive.google.com/drive/folders/1Sm75n50jdBnTJ60mten3uC5hYRvH6PIx?usp=drive_link")] },
      { t: "19:30–22:00", src: "idea", ttl: T("輕鬆第一晚", "Easy first night"), nt: T("在池袋附近吃拉麵或居酒屋，再到便利店買明天早餐。早點休息，明天下午才出發。", "Ramen or an izakaya near Ikebukuro, then a konbini run for tomorrow's breakfast. Sleep early. Tomorrow starts in the afternoon.") },
    ],
    spots: [{ img: "skyliner", name: T("京成 Skyliner", "Keisei Skyliner"), price: "¥2,580" }],
    budget: { transport: 2800, food: 3500, cafe: 0, tickets: 0, other: 0 }, bn: T("Skyliner 單程約 ¥2,580。", "Skyliner ≈ ¥2,580 one way."), souvenir: 0,
  },
  {
    id: "d1227", phase: "p1", d: 27, mon: 12, dow: T("週日", "Sun"), we: true,
    cjk: "原宿", romaji: "HARAJUKU · OMOTESANDO", verse: ["神宮森林", "竹下街頭"], color: "sage", art: "meijijingu", artShape: "panel",
    title: T("原宿行街", "Harajuku"), area: T("原宿 · 表參道", "Harajuku · Omotesando"), status: "partial",
    items: [
      { t: "11:00–12:30", src: "idea", ttl: T("明治神宮森林散步", "Meiji Jingu forest walk"), nt: T("免費，原宿站步行 5 分鐘。這週是新年人潮前最清靜的時候。", "Free, five minutes from Harajuku Station. This week is the calm window before the New Year crowds."), links: [L(MAP, gm("Meiji Jingu"))] },
      { t: "13:00–14:30", src: "plan", ttl: T("午餐：原宿餐廳 #1", "Lunch: Harajuku pick #1"), links: [L("Tabelog 13095244", "https://tabelog.com/en/tokyo/A1306/A130601/13095244/")] },
      { t: "15:00–19:00", src: "plan", ttl: T("原宿行街", "Shopping"), nt: T("哈利波特專賣店 → Laforet 的 Vivienne Westwood Red Label → 竹下通 → 貓街。你文件裡的原宿地圖在下方。", "Harry Potter Shop → Vivienne Westwood Red Label at Laforet → Takeshita-dori → Cat Street. Your Harajuku map is below."), links: [L(T("哈利波特專賣店", "Harry Potter Shop"), gm("Harry Potter Shop Harajuku")), L("Vivienne Westwood @ Laforet", "https://www.viviennewestwood.com/storedetails/?storeID=Tokyo-Red-Label-Concept-Store-Laforet")] },
      { t: "15:00–19:00", src: "idea", ttl: "niko and ... TOKYO（原宿）", nt: T("生活雜貨與服飾店，原宿站附近，可順路與 LAKOLE 一併逛。", "Lifestyle goods and clothing shop in Harajuku, easy to combine with LAKOLE."), links: [L("niko and ...", gm("niko and ... TOKYO Harajuku"))] },
      { t: "15:00–19:00", src: "idea", ttl: "LAKOLE · ST", nt: T("LAKOLE 原宿一帶的分店與 ST，順路加入行街路線（竹下通 / 貓街之間）。出發前請確認 ST 是指哪間店。", "LAKOLE (and ST) fit along the Takeshita-dori / Cat Street route. Please confirm which shop ST refers to before you go."), links: [L("LAKOLE", gm("LAKOLE Harajuku"))] },
      { t: "19:00", src: "plan", ttl: T("晚餐：原宿餐廳 #2", "Dinner: Harajuku pick #2"), links: [L("Tabelog 13195738", "https://tabelog.com/tw/tokyo/A1306/A130601/13195738/dtlmenu/")] },
    ],
    spots: [
      { img: "meijijingu", name: T("明治神宮", "Meiji Jingu"), price: T("免費", "Free") },
      { img: "takeshita", name: T("竹下通", "Takeshita-dori"), price: T("可麗餅 ¥600–900", "Crêpes ¥600–900") },
      { img: "harajuku_map", name: T("原宿・表參道地圖（你的文件）", "Harajuku map (from your doc)"), price: "" },
    ],
    budget: { transport: 600, food: 5000, cafe: 1500, tickets: 0, other: 0 }, souvenir: 5000, souvenirNote: T("哈利波特專賣店周邊", "Harry Potter Shop goods"),
  },
  {
    id: "d1228", phase: "p1", d: 28, mon: 12, dow: T("週一", "Mon"),
    cjk: "銀座", romaji: "GINZA · AZABUDAI", verse: ["京橋月色", "麻布夜景"], color: "slate", art: "ginza_print", artShape: "panel",
    title: T("史努比博物館 · 銀座", "Snoopy Museum · Ginza"), area: T("史努比博物館 → 銀座 → 麻布台 Hills", "Snoopy Museum → Ginza → Azabudai Hills"), status: "planned",
    flag: T("Tricolore 逢週二休息，Ginza Sand 逢週日及假日休息，28 日（週一）兩間都有營業。", "Tricolore closes Tuesdays and Ginza Sand closes Sundays and holidays, so both are open on Monday the 28th."),
    items: [
      { t: "08:15–10:00", src: "idea", ttl: T("池袋 → 町田（鶴川站）→ 巴士到史努比博物館", "Ikebukuro → Machida area (Tsurukawa) → bus to the Snoopy Museum"), nt: T("博物館在東京郊外的町田，由池袋約 1 小時 15 分鐘（JR 到新宿，轉小田急線，再轉巴士）。巴士班次有限，出發前請在官網核對路線及時間。", "The museum is out in Machida, about 1 h 15 min from Ikebukuro (JR to Shinjuku, Odakyu line, then a bus). Buses are infrequent, so check the route and timetable on the official site before you go."), links: [L(T("交通", "Access"), "https://snoopymuseum.tokyo/en/"), L(MAP, gm("Snoopy Museum Tokyo"))] },
      { t: "10:00–12:15", src: "idea", ttl: T("SNOOPY MUSEUM TOKYO 史努比博物館", "SNOOPY MUSEUM TOKYO"), nt: T("10:00 開館，需網上預約指定時段入場（約 ¥2,500，請以官網為準）。逢週二休館，28 日（週一）可去；年末開放日請先查官網。館內有咖啡廳和禮品店，記得預留時間。", "Opens at 10:00 with timed tickets booked online (about ¥2,500, check the official site). Closed Tuesdays, so Monday the 28th works; check the year-end opening days first. There is a café and a gift shop, so leave time for both."), links: [L(T("官網／購票", "Official site / tickets"), "https://snoopymuseum.tokyo/en/")] },
      { t: "12:15–13:30", src: "idea", ttl: T("返回市中心", "Back into the city"), nt: T("乘小田急線回新宿，再轉 JR 到東京站。", "Odakyu line back to Shinjuku, then JR to Tokyo Station.") },
      { t: "13:30–14:30", src: "plan", tag: "retimed", ttl: T("午餐：仙台たんや利久（Gransta 八重洲）", "Lunch: Sendai Tanya Rikyu (Gransta Yaesu)"), nt: T("在東京站內，回程順路。想食鰻魚的話，炭焼うな富士（有樂町）要排隊，下午較易入座。", "Inside Tokyo Station, on the way back. If you'd rather have eel, Sumiyaki Unafuji (Yurakucho) queues at lunch but is easier mid-afternoon."), links: [L("Tanya Rikyu", "https://tabelog.com/en/tokyo/A1302/A130201/13119727/dtlmenu/"), L("Unafuji", "https://tabelog.com/en/tokyo/A1301/A130103/13250032/dtlmenu/")] },
      { t: "14:45–15:45", src: "plan", tag: "retimed", ttl: T("Tricolore 本店下午茶（免預約）", "Afternoon tea · Tricolore Honten (walk-in)"), nt: T("招牌是朱古力閃電泡芙，加上侍應即場倒的冰咖啡。最近車站：東銀座。", "Get the chocolate éclair and the iced coffee poured at the table. Nearest station: Higashi-Ginza."), links: [L("Tabelog", "https://tabelog.com/en/tokyo/A1301/A130101/13007761/")] },
      { t: "16:00–17:30", src: "idea", ttl: "GINZA SIX", nt: T("由 Tricolore 步行約 10 分鐘，商場營業至 20:30。", "About 10 minutes on foot from Tricolore; the mall is open until 20:30, so there is time to browse properly."), links: [L("GINZA SIX", "https://ginza6.tokyo/en/"), L(MAP, gm("GINZA SIX"))] },
      { t: "17:45–18:20", src: "plan", ttl: T("Ginza Sand（免預約）", "Ginza Sand (walk-in)"), nt: T("推介玉子三文治和炸牛排三文治。", "Try the egg sando and the katsu sando."), links: [L("Tabelog", "https://tabelog.com/en/tokyo/A1301/A130101/13231045/")] },
      { t: "18:45–20:00", src: "plan", ttl: T("Hills House Sky Room 打卡（免預約）", "Hills House Sky Room · photo stop (walk-in)"), nt: T("麻布台 Hills 森 JP Tower 34 樓。由銀座乘日比谷線到神谷町約 10 分鐘。16:40 已天黑，正好看東京鐵塔夜景。", "Azabudai Hills Mori JP Tower, 34F. The Hibiya Line from Ginza to Kamiyacho takes about 10 min. It's dark by 16:40, so you'll get the Tokyo Tower night view."), links: [L("Tabelog", "https://tabelog.com/en/tokyo/A1307/A130701/13291562/")] },
    ],
    spots: [
      { img: "tricolore", name: T("Tricolore 本店", "Tricolore Honten"), price: "¥1,000–1,999", url: "https://tabelog.com/en/tokyo/A1301/A130101/13007761/" },
      { img: "ginzasand", name: T("銀座サンド", "Ginza Sand"), price: "¥1,000–1,999", url: "https://tabelog.com/en/tokyo/A1301/A130101/13231045/" },
      { img: "hillshouse", name: "Hills House Sky Room", price: T("約 ¥999", "≈ ¥999"), url: "https://tabelog.com/en/tokyo/A1307/A130701/13291562/" },
      { img: "azabudai", name: T("麻布台的東京鐵塔夜景", "Tokyo Tower from Azabudai"), price: T("免費", "Free") },
      { img: "ginza", name: T("銀座和光", "Ginza Wako"), price: "" },
    ],
    budget: { transport: 2200, food: 7000, cafe: 4000, tickets: 2500, other: 0 }, bn: T("門票為史努比博物館（約 ¥2,500）；交通含町田來回。大衣、手袋未排入行程，仍列在「手信與購物」。", "Tickets = Snoopy Museum (≈ ¥2,500); transport includes the Machida round trip. Coat and bag stops are no longer scheduled but stay in “Souvenirs & shopping”."), souvenir: 3000, souvenirNote: T("東京站 Gransta 手信", "Gransta snacks at Tokyo Station"),
  },
  {
    id: "d1229", phase: "p1", d: 29, mon: 12, dow: T("週二", "Tue"),
    cjk: "澀谷", romaji: "SHIBUYA", verse: ["十字路口", "霓虹不夜"], color: "rust", art: "shibuya", artShape: "panel",
    title: T("澀谷", "Shibuya"), area: T("澀谷 · 惠比壽", "Shibuya · Ebisu"), status: "planned",
    items: [
      { t: "11:30", src: "plan", ttl: T("つるとんたん 澀谷店 烏冬", "Udon at Tsurutontan Shibuya"), links: [L("Tsurutontan", "https://www.tsurutontan.co.jp/shop/shibuya/")] },
      { t: "13:00", src: "plan", ttl: T("打卡位：澀谷 1-12-14", "Photo spot · Shibuya 1-12-14"), links: [L("Instagram", "https://www.instagram.com/p/DfL-oU3lPk_/"), L(MAP, gm("渋谷1丁目12-14"))] },
      { t: "13:30–16:30", src: "plan", ttl: "Loft · Shibuya Hands · Disney Store · Dior", nt: T("Dior 卡片銀包在清單上。29 日商店照常營業。", "The Dior card wallet is on the list. Shops keep normal hours on the 29th."), links: [L("Dior", "https://www.dior.com/en_ca/fashion/products/2ESCH135YSE_H03E")] },
      { t: "17:00–18:00", src: "plan", ttl: T("「必須 5–6pm 去」的地方", "The “must go 5–6 pm” spot"), nt: T("你的文件在這條連結後寫了「Must go between 5-6pm」，請確認是否指這間。", "Your doc says “must go between 5–6pm” right after this link. Check it's the place you meant."), links: [L("Tabelog 13240659", "https://tabelog.com/tokyo/A1303/A130301/13240659/")] },
      { t: "19:00", src: "plan", ttl: T("晚餐：從清單中選", "Dinner from your shortlist"), nt: T("最後一間在惠比壽，JR 山手線一站。", "The last one is in Ebisu, one stop on the JR Yamanote Line."), links: [L("13302941", "https://tabelog.com/en/tokyo/A1303/A130301/13302941/"), L("13241227", "https://tabelog.com/tokyo/A1303/A130301/13241227/dtlmenu/"), L("13307817", "https://tabelog.com/tokyo/A1303/A130301/13307817/dtlmenu/"), L(T("惠比壽 13024799", "Ebisu 13024799"), "https://tabelog.com/en/tokyo/A1304/A130401/13024799/")] },
    ],
    spots: [{ img: "shibuya", name: T("澀谷十字路口", "Shibuya Scramble"), price: T("免費", "Free") }],
    budget: { transport: 600, food: 5500, cafe: 1500, tickets: 0, other: 0 }, souvenir: 8000, souvenirNote: T("Loft、Hands、Disney Store 小物", "Loft, Hands and Disney Store bits"),
  },
  {
    id: "d1230", phase: "p1", d: 30, mon: 12, dow: T("週三", "Wed"),
    cjk: "淺草", romaji: "ASAKUSA · SKYTREE", verse: ["雷門雪色", "天望四五〇"], color: "teal", art: "asakusa_print", artShape: "circle",
    title: T("淺草 · 晴空塔", "Asakusa · Skytree"), area: T("淺草寺 → 晴空塔", "Sensō-ji → Skytree"), status: "planned",
    items: [
      { t: "09:00–11:00", src: "plan", ttl: T("淺草寺", "Sensō-ji"), nt: T("求籤、買御守、看錦鯉。抽到「凶」記得綁在旁邊的架上，不要帶走。", "Draw an omikuji, buy omamori, see the koi. If you draw 凶, tie it to the rack. Don't take it home.") },
      { t: "11:00–12:00", src: "plan", ttl: T("淺草名代拉麵 与ろゐ屋", "Yoroiya ramen"), nt: T("往仲見世方向。點雙黃蛋厚叉燒拉麵，柚子湯底，清爽不膩。", "On the way to Nakamise. Order the yuzu-broth ramen with double egg and thick chashu.") },
      { t: "12:00–13:00", src: "plan", ttl: T("淺草文化觀光中心頂樓", "Asakusa Culture Tourist Info Center rooftop"), nt: T("免費，直上頂樓，淺草寺、雷門、晴空塔同框。", "Free. Go straight to the top for Sensō-ji, Kaminarimon and Skytree in one frame."), links: [L(MAP, gm("Asakusa Culture Tourist Information Center"))] },
      { t: "13:00–15:00", src: "plan", ttl: T("橘子街 City Walk", "Orange-dori city walk"), nt: T("橘色郵筒、Sanrio。小食清單：木村屋人形燒 · 与兵衛糰子 · 壽清庵 · 東京咖喱麵包 · Imo Pippi 紫薯蒙布朗 · 淺草そらつき · Asakusa Unana。", "Orange postbox and Sanrio. Snacks: Kimuraya ningyōyaki · Yohei dango · Jusei-an · Tokyo curry bread · Imo Pippi purple-yam Mont Blanc · Asakusa Soratsuki · Asakusa Unana.") },
      { t: "15:00–19:00", src: "plan", ttl: T("晴空塔天望回廊（450m）+ 墨田水族館", "Skytree Tembo Galleria (450 m) + Sumida Aquarium"), nt: T("網上預約 15:30 入場，日景、日落（約 16:30）、夜景一次過。水族館在同一商場：企鵝、水母、海獅。", "Book a 15:30 entry online for daylight, sunset (about 16:30) and night views in one visit. The aquarium is in the same complex: penguins, jellyfish, sea lions."), links: [L(MAP, gm("Tokyo Skytree"))] },
      { t: "19:00–20:30", src: "plan", ttl: T("京都勝牛 淺草", "Kyoto Katsugyu Asakusa"), nt: T("黑毛和牛炸牛排入口即化；牛舌偏硬，可略過。", "The kuroge wagyu gyūkatsu melts in your mouth. The beef tongue was chewy, so skip it.") },
    ],
    spots: [
      { img: "sensoji", name: T("雷門・淺草寺", "Kaminarimon · Sensō-ji"), price: T("免費", "Free") },
      { img: "skytree", name: T("晴空塔天望回廊", "Skytree Tembo Galleria"), price: "¥3,500–4,000" },
    ],
    budget: { transport: 600, food: 5000, cafe: 2500, tickets: 6500, other: 0 }, bn: T("門票：晴空塔套票約 ¥3,500–4,000、水族館約 ¥2,500，另加御守。", "Tickets: Skytree combo ≈ ¥3,500–4,000, aquarium ≈ ¥2,500, plus omamori."), souvenir: 5000, souvenirNote: T("仲見世人形燒、御守", "Nakamise ningyōyaki, omamori"),
  },
  {
    id: "d1231", phase: "p1", d: 31, mon: 12, dow: T("週四", "Thu"),
    cjk: "大晦日", romaji: "ŌMISOKA · NEW YEAR'S EVE", verse: ["除夜鐘聲", "年越蕎麥"], color: "ink", art: "moon_print", artShape: "circle",
    title: T("除夕", "New Year's Eve"), area: T("退房 · 日暮里 · 新住處", "Check-out · Nippori · new stay"), status: "partial",
    items: [
      { t: T("上午", "Morning"), src: "plan", ttl: T("執行李 · 洋服の青山（文件連結）", "Pack · Yōfuku no Aoyama (link from your doc)"), links: [L(T("店舖", "Shop"), "https://www.y-aoyama.jp/en/ec/shop/r/r684/?lc=topBnr_category_m")] },
      { t: "12:00–13:00", src: "plan", ttl: T("退房 → 日暮里 → Skyliner", "Check out → Nippori → Skyliner"), nt: T("石凱婷 16:55 起飛，最遲 13:00 從日暮里出發。", "石凱婷's flight is at 16:55, so leave Nippori by 13:00.") },
      { t: "14:00–17:00", src: "idea", ttl: T("搬到新住處 Check-in", "Move to the next stay and check in") },
      { t: T("晚上", "Evening"), src: "idea", ttl: T("年越蕎麥麵 + 除夜之鐘", "Toshikoshi soba + temple bells"), nt: T("東京鐵塔旁的增上寺聽除夜鐘。今晚很多餐廳提早關門，20:00 前吃完晚飯。", "Hear the New Year's Eve bells at Zōjō-ji, next to Tokyo Tower. Many restaurants close early tonight, so eat by 20:00."), links: [L(T("增上寺", "Zōjō-ji"), gm("Zojoji Temple"))] },
    ],
    spots: [{ img: "zojoji", name: T("增上寺與東京鐵塔", "Zōjō-ji & Tokyo Tower"), price: T("免費", "Free") }],
    budget: { transport: 1000, food: 4500, cafe: 1000, tickets: 0, other: 0 }, bn: T("石凱婷另加 Skyliner 約 ¥2,600。", "石凱婷 adds ≈ ¥2,600 for the Skyliner."), souvenir: 0,
  },
  {
    id: "d0101", phase: "p2", d: 1, mon: 1, dow: T("週五", "Fri"),
    cjk: "元日", romaji: "GANJITSU · NEW YEAR'S DAY", verse: ["赤富士晴", "初詣祈福"], color: "vermilion", art: "redfuji", artShape: "panel",
    title: T("元旦", "New Year's Day"), area: T("染髮 · 初詣", "Hair · Hatsumōde"), status: "partial",
    items: [
      { t: T("上午", "Morning"), src: "idea", ttl: T("初詣（新年參拜）", "Hatsumōde (first shrine visit)"), nt: T("明治神宮最有名但最擠，要 9:00 前到；想清靜可去赤坂日枝神社或神田明神。", "Meiji Jingu is the classic but packed, so go before 9:00. Hie Shrine (Akasaka) or Kanda Myōjin are calmer."), links: [L(T("日枝神社", "Hie Shrine"), gm("Hie Shrine Akasaka")), L(T("神田明神", "Kanda Myojin"), gm("Kanda Myojin"))] },
      { t: T("下午", "Afternoon"), src: "plan", ttl: T("染頭髮", "Hair colour"), links: [L("Hot Pepper Beauty", "https://beauty.hotpepper.jp/slnH000362983/stylist/")] },
      { t: T("傍晚", "Evening"), src: "idea", ttl: T("SHIBUYA109 福袋", "Lucky bags at SHIBUYA109"), nt: T("大部分百貨公司元旦休息，2 日才開始賣福袋；SHIBUYA109 及部分車站商場通常元旦營業，出發前再查時間。", "Most department stores close on 1 Jan and start lucky-bag sales on the 2nd. SHIBUYA109 and some station malls usually open on New Year's Day. Check the hours closer to the date."), links: [L("SHIBUYA109", gm("Shibuya 109"))] },
    ],
    spots: [{ img: "meijijingu", name: T("明治神宮初詣", "Hatsumōde at Meiji Jingu"), price: T("免費", "Free") }],
    budget: { transport: 600, food: 4000, cafe: 1000, tickets: 1000, other: 15000 }, bn: T("其他 = 染髮，約 ¥12,000–18,000。", "Other = hair colour, ≈ ¥12,000–18,000."), souvenir: 5000, souvenirNote: T("福袋一個", "One lucky bag"),
  },
  {
    id: "d0102", phase: "p2", d: 2, mon: 1, dow: T("週六", "Sat"), we: true,
    cjk: "鎌倉", romaji: "KAMAKURA · ENOSHIMA", verse: ["七里濱上", "江之電行"], color: "teal", art: "shichiri_print", artShape: "panel",
    title: T("鎌倉 · 江之島", "Kamakura · Enoshima"), area: T("江之電沿線一日遊", "Enoden line day trip"), status: "planned",
    items: [
      { t: "08:30", src: "plan", ttl: T("新宿 → 鎌倉：JR 湘南新宿線", "Shinjuku → Kamakura · JR Shōnan-Shinjuku Line"), nt: T("先拍卡入 JR 閘口，再跟 JS 指示到 1／2 號月台，坐往逗子方向，11 個站約 1 小時。", "Tap in through the JR gates, then follow the JS signs to platform 1/2 for the Zushi-bound train. 11 stops, about 1 hour.") },
      { t: "09:45", src: "plan", ttl: T("小町通 → 鶴岡八幡宮", "Komachi-dori → Tsurugaoka Hachimangū"), nt: T("東口出，免費。之後原路返回鎌倉站。", "East exit. Free entry. Walk back to Kamakura Station afterwards.") },
      { t: "11:30", src: "plan", ttl: T("江之電 → 長谷（3 站）：長谷寺 + 鎌倉大佛", "Enoden → Hase (3 stops): Hase-dera + Great Buddha"), nt: T("江之電一日券「のりおりくん」¥800，或直接用 Suica。長谷寺約 ¥400，頂部有觀景台；大佛步行 6 分鐘，約 ¥300。", "The Noriorikun 1-day pass is ¥800, or just use Suica. Hase-dera is about ¥400 with a lookout at the top. The Great Buddha is a 6-minute walk, about ¥300.") },
      { t: "13:30", src: "plan", ttl: T("七里濱", "Shichirigahama"), nt: T("天氣好可見富士山與海同框。沿海步行 900 米，途中有咖啡店。", "On clear days you can see Fuji over the sea. Walk 900 m along the coast and stop at a café on the way.") },
      { t: "14:30", src: "plan", ttl: T("鎌倉高校前 · 灌籃高手平交道", "Kamakura-Kōkōmae · Slam Dunk crossing"), nt: T("旁邊有拍照用的小公園，車站就在幾十米外。", "There's a small photo park next to the crossing, and the station is a few dozen metres away.") },
      { t: "15:30–17:00", src: "plan", ttl: T("江之島 · 棧橋看日落", "Enoshima · sunset from the bridge"), nt: T("再坐兩站，沿安靜小街走到海邊，過棧橋上島。日落約 16:45。", "Two more stops. Walk the quiet street down to the sea and cross the bridge. Sunset is about 16:45.") },
      { t: "17:30", src: "plan", ttl: T("回程：藤澤 → 小田急江之島線 或 JS → 新宿", "Back: Fujisawa → Odakyu Enoshima Line or JS → Shinjuku") },
    ],
    spots: [
      { img: "tsurugaoka", name: T("鶴岡八幡宮", "Tsurugaoka Hachimangū"), price: T("免費", "Free") },
      { img: "daibutsu", name: T("鎌倉大佛", "Great Buddha"), price: "≈ ¥300" },
      { img: "enoshima_print", name: T("北齋《相州江之島》", "Hokusai, Enoshima in Sagami"), price: T("江之電一日券 ¥800", "Enoden day pass ¥800") },
      { img: "enoshima", name: T("江之島", "Enoshima"), price: T("免費", "Free") },
    ],
    budget: { transport: 2800, food: 4000, cafe: 1500, tickets: 700, other: 0 }, bn: T("JR 約 ¥950 + 江之電 ¥800 + 小田急約 ¥600–1,000。", "JR ≈ ¥950 + Enoden ¥800 + Odakyu ≈ ¥600–1,000."), souvenir: 3000, souvenirNote: T("豐島屋鴿子餅乾", "Hato Sablé from Toshimaya"),
  },
  {
    id: "d0103", phase: "p2", d: 3, mon: 1, dow: T("週日", "Sun"), we: true,
    cjk: "豐洲", romaji: "TOYOSU · ODAIBA", verse: ["光影之海", "彩虹橋夜"], color: "sky", art: "ohashi_print", artShape: "panel",
    title: T("豐洲 · 台場", "Toyosu · Odaiba"), area: T("teamLab → 台場", "teamLab → Odaiba"), status: "open",
    items: [
      { t: "10:00", src: "idea", ttl: "teamLab Planets", nt: T("要預約時段。要赤腳涉水，穿可捲起的褲。很適合拍 Reels。", "Timed tickets, so book ahead. You'll walk barefoot through water, so wear trousers that roll up. Great for reels."), links: [L(MAP, gm("teamLab Planets Tokyo"))] },
      { t: "12:30", src: "idea", ttl: T("午餐：豐洲千客萬來", "Lunch · Toyosu Senkyaku Banrai"), nt: T("豐洲市場旁的江戶風美食街，請查新年營業時間。", "Edo-style food hall beside Toyosu Market. Check its New Year hours."), links: [L(MAP, gm("Toyosu Senkyaku Banrai"))] },
      { t: "14:30", src: "idea", ttl: T("百合海鷗號 → 台場 DiverCity・Aqua City", "Yurikamome → Odaiba · DiverCity & Aqua City"), nt: T("獨角獸高達、新年特賣。", "Unicorn Gundam statue and New Year sales.") },
      { t: "17:00", src: "idea", ttl: T("台場海濱公園 · 彩虹橋夜景", "Odaiba Seaside Park · Rainbow Bridge at night") },
      { t: "", src: "idea", ttl: T("下雨後備：新宿初賣", "Rain plan: Shinjuku New Year sales"), nt: T("伊勢丹、Lumine、NEWoMan 都有福袋。", "Isetan, Lumine and NEWoMan all have lucky bags.") },
    ],
    spots: [{ img: "rainbow", name: T("彩虹橋夜景", "Rainbow Bridge at night"), price: T("免費", "Free") }],
    budget: { transport: 1200, food: 4500, cafe: 1000, tickets: 4000, other: 0 }, bn: T("teamLab Planets 約 ¥3,800–4,200（按日期浮動）。", "teamLab Planets ≈ ¥3,800–4,200 (varies by date)."), souvenir: 2000,
  },
  {
    id: "d0104", phase: "p2", d: 4, mon: 1, dow: T("週一", "Mon"),
    cjk: "目黑", romaji: "SHIMOKITAZAWA · NAKAMEGURO", verse: ["古著巷弄", "目黑川畔"], color: "olive", art: "meguro_print", artShape: "circle",
    title: T("下北澤 · 中目黑", "Shimokitazawa · Nakameguro"), area: T("下北澤 → 代官山 → 中目黑", "Shimokitazawa → Daikanyama → Nakameguro"), status: "open",
    flag: T("週一大部分博物館休館，所以今天以小店和咖啡店為主。也是翟青兒最後一整天。", "It's a Monday, so most museums are closed. This day is shops and cafés. It's also 翟青兒's last full day."),
    items: [
      { t: "11:00", src: "idea", ttl: T("下北澤", "Shimokitazawa"), nt: T("古著店、Reload、Bonus Track（舊鐵路改建的小店街）。", "Vintage shops, Reload and Bonus Track (small shops along the old rail line)."), links: [L("Bonus Track", gm("Bonus Track Shimokitazawa"))] },
      { t: "14:30", src: "idea", ttl: T("代官山 T-Site（蔦屋書店）", "Daikanyama T-Site (Tsutaya Books)"), nt: T("井之頭線到澀谷，轉東橫線一站。", "Inokashira Line to Shibuya, then the Tōyoko Line one stop."), links: [L(MAP, gm("Daikanyama T-Site"))] },
      { t: "16:30", src: "idea", ttl: T("Starbucks Reserve Roastery · 目黑川", "Starbucks Reserve Roastery · Meguro River"), nt: T("隈研吾設計的四層建築，之後沿目黑川散步。", "Four floors in a Kengo Kuma building, then walk along the Meguro River."), links: [L(MAP, gm("Starbucks Reserve Roastery Tokyo"))] },
      { t: "19:00", src: "idea", ttl: T("告別晚餐 · 惠比壽橫丁", "Farewell dinner · Ebisu Yokochō"), links: [L(MAP, gm("Ebisu Yokocho"))] },
    ],
    spots: [
      { img: "shimokita", name: T("下北澤", "Shimokitazawa"), price: "" },
    ],
    budget: { transport: 800, food: 5000, cafe: 2500, tickets: 0, other: 0 }, souvenir: 5000, souvenirNote: T("下北澤古著", "Vintage in Shimokita"),
  },
  {
    id: "d0105", phase: "p3", d: 5, mon: 1, dow: T("週二", "Tue"),
    cjk: "川越", romaji: "KAWAGOE · KO-EDO", verse: ["時之鐘響", "藏造老街"], color: "beige", art: "tokinokane", artShape: "panel",
    title: T("小江戶川越", "Kawagoe"), area: T("西武線一日遊", "Seibu line day trip"), status: "planned",
    flag: T("川越很多景點約 16:30 關門，收費景點都排在 15:30 前。", "Many Kawagoe sights close around 16:30, so paid ones are scheduled before 15:30."),
    items: [
      { t: "08:45", src: "plan", ttl: T("SEIBU 1Day Pass · 西武新宿 → 本川越", "SEIBU 1Day Pass · Seibu-Shinjuku → Hon-Kawagoe"), nt: T("¥1,000，只限外國遊客，憑護照在西武新宿站或西武池袋站購買。只可搭普通／急行，特急要另買票。直達約 1 小時。", "¥1,000, foreigners only. Buy it with your passport at the Seibu-Shinjuku or Seibu-Ikebukuro ticket centre. It covers local and express trains only (Limited Express costs extra). About 1 hour with no transfer.") },
      { t: "10:00", src: "plan", ttl: T("① 川越八幡宮", "① Kawagoe Hachimangū"), nt: T("本川越站步行 7 分鐘，以結緣銀杏聞名。", "7 min from Hon-Kawagoe. Known for its matchmaking ginkgo.") },
      { t: "10:40", src: "plan", ttl: T("② 喜多院 + ③ 仙波東照宮", "② Kita-in + ③ Senba Tōshōgū"), nt: T("五百羅漢；日本三大東照宮之一。", "The 500 Arhats, and one of Japan's three great Tōshōgū shrines.") },
      { t: "12:00", src: "plan", ttl: T("午餐：小川菊 鰻魚飯", "Lunch · Ogawakiku unagi"), nt: T("要排隊，先取號再附近逛。", "Expect a queue. Take a number, then wander nearby."), links: [L(MAP, gm("Ogawakiku Kawagoe"))] },
      { t: "13:30", src: "plan", ttl: T("④ 熊野神社 + 蓮馨寺", "④ Kumano Shrine + Renkei-ji"), nt: T("「洗錢」聖地：洗淨錢母放入錢包，招來財運。", "Money-washing shrine: wash a coin and keep it in your wallet to attract wealth.") },
      { t: "14:10", src: "plan", ttl: T("⑤ 舊山崎家別邸", "⑤ Former Yamazaki Villa"), nt: T("日西合璧建築與庭園。", "Japanese-Western house with a garden.") },
      { t: "14:50", src: "plan", ttl: T("⑥ 三芳野神社 + ⑦ 川越城本丸御殿", "⑥ Miyoshino Shrine + ⑦ Kawagoe Castle Honmaru Goten") },
      { t: "15:40", src: "plan", ttl: T("⑧ 冰川神社", "⑧ Hikawa Shrine"), nt: T("有 1,500 年歷史的結緣神社。", "A matchmaking shrine about 1,500 years old.") },
      { t: "16:30", src: "plan", ttl: T("⑨ 時之鐘 · 藏造老街 · 菓子屋橫丁", "⑨ Toki no Kane · Kurazukuri street · Kashiya Yokochō"), nt: T("試試川越名物番薯甜品。", "Try the sweet-potato desserts Kawagoe is known for.") },
      { t: "17:15", src: "plan", ttl: T("⑩ 大正浪漫夢通 → 回新宿", "⑩ Taishō Roman street → back to Shinjuku") },
    ],
    spots: [
      { img: "tokinokane2", name: T("時之鐘", "Toki no Kane"), price: T("免費", "Free") },
      { img: "rakan", name: T("喜多院五百羅漢", "Kita-in 500 Arhats"), price: "≈ ¥420" },
    ],
    budget: { transport: 1200, food: 6000, cafe: 1500, tickets: 1000, other: 0 }, bn: T("鰻魚飯約 ¥5,000 起，景點門票每個 ¥100–500。", "Unagi from ≈ ¥5,000. Sight fees are ¥100–500 each."), souvenir: 3000, souvenirNote: T("番薯菓子、菓子屋橫丁", "Sweet-potato sweets"),
  },
  {
    id: "d0106", phase: "p3", d: 6, mon: 1, dow: T("週三", "Wed"),
    cjk: "池袋", romaji: "IKEBUKURO", verse: ["天空企鵝", "鰻魚玉子"], color: "slate", art: "sunshine", artShape: "panel",
    title: T("池袋", "Ikebukuro"), area: T("Sunshine City · 東口", "Sunshine City · east side"), status: "partial",
    flag: T("いづも池袋必須預約（Tabelog）。店內可吸煙，介意的話先留意。午餐人均 ¥1,000–1,999。", "Izumo Ikebukuro needs a booking (Tabelog). Smoking is allowed inside, which is worth knowing. Lunch is ¥1,000–1,999."),
    items: [
      { t: "10:30", src: "idea", ttl: T("Sunshine City · Pokémon Center Mega Tokyo + 陽光水族館", "Sunshine City · Pokémon Center Mega Tokyo + Sunshine Aquarium"), nt: T("天台企鵝池，看似在城市上空飛。", "The rooftop penguin tank looks like they're flying over the city."), links: [L(MAP, gm("Sunshine City Ikebukuro"))] },
      { t: "13:00–14:30", src: "plan", ttl: T("午餐：いづも池袋（鰻魚）", "Lunch · Izumo Ikebukuro (unagi)"), nt: T("招牌是鰻魚加厚玉子蓋飯。", "Order the unagi bowl topped with thick tamagoyaki."), links: [L("Tabelog", "https://tabelog.com/en/rstLst/?sw=Izumo+Ikebukuro")] },
      { t: "15:00", src: "idea", ttl: T("西武 · 東武 · PARCO · Animate", "Seibu · Tobu · PARCO · Animate"), nt: T("冬季減價期。", "Winter sales are on.") },
      { t: "17:00", src: "idea", ttl: T("Sunshine 60 展望台 · 夜景", "Sunshine 60 Observatory · night view") },
    ],
    spots: [
      { img: "izumo", name: T("いづも池袋", "Izumo Ikebukuro"), price: T("午餐 ¥1,000–1,999", "Lunch ¥1,000–1,999") },
      { img: "sunshine", name: "Sunshine 60", price: "≈ ¥2,000" },
    ],
    budget: { transport: 500, food: 4500, cafe: 1000, tickets: 4500, other: 0 }, bn: T("水族館約 ¥2,600 + 展望台約 ¥2,000。", "Aquarium ≈ ¥2,600 + observatory ≈ ¥2,000."), souvenir: 5000, souvenirNote: T("Pokémon Center", "Pokémon Center"),
  },
  {
    id: "d0107", phase: "p3", d: 7, mon: 1, dow: T("週四", "Thu"),
    cjk: "青山", romaji: "AOYAMA · OMOTESANDO", verse: ["根津庭園", "表參道上"], color: "sage", art: "nezumuseum", artShape: "panel",
    title: T("青山 · 表參道", "Aoyama · Omotesando"), area: T("根津美術館 → 表參道", "Nezu Museum → Omotesando"), status: "partial",
    items: [
      { t: "10:30", src: "idea", ttl: T("根津美術館 + 庭園", "Nezu Museum + garden"), nt: T("隈研吾設計，庭園內有咖啡店。逢週一休館，請查新年開放日。", "Kengo Kuma building with a garden café. Closed Mondays, so check the New Year schedule."), links: [L(MAP, gm("Nezu Museum"))] },
      { t: "12:30", src: "idea", ttl: T("表參道午餐", "Lunch on Omotesando") },
      { t: "14:00", src: "idea", ttl: T("表參道散步", "Omotesando stroll"), nt: T("隨意逛逛，不買大衣。", "Just browsing, no coat this time."), links: [L(MAP, gm("Omotesando"))] },
      { t: "15:30", src: "idea", ttl: T("表參道 Hills · GYRE · 貓街減價", "Omotesando Hills · GYRE · Cat Street sales") },
      { t: "17:00", src: "idea", ttl: T("Café Kitsuné 青山 或 岡本太郎紀念館", "Café Kitsuné Aoyama or Taro Okamoto Memorial Museum"), nt: T("岡本太郎紀念館逢週二休館，週四沒問題。", "The Okamoto museum closes Tuesdays, so Thursday is fine."), links: [L("Café Kitsuné", gm("Cafe Kitsune Aoyama"))] },
    ],
    spots: [{ img: "nezumuseum", name: T("根津美術館", "Nezu Museum"), price: "≈ ¥1,500" }],
    budget: { transport: 500, food: 4500, cafe: 1500, tickets: 1500, other: 0 }, souvenir: 0,
  },
  {
    id: "d0108", phase: "p3", d: 8, mon: 1, dow: T("週五", "Fri"),
    cjk: "上野", romaji: "UENO · YANAKA", verse: ["不忍池畔", "谷中黃昏"], color: "olive", art: "ueno_print", artShape: "circle",
    title: T("上野 · 谷中", "Ueno · Yanaka"), area: T("上野 → 谷中下町", "Ueno → Yanaka old town"), status: "open",
    items: [
      { t: "10:00", src: "idea", ttl: T("東京國立博物館", "Tokyo National Museum"), nt: T("先看本館（武士盔甲、浮世繪）。", "Start in the Honkan (samurai armour, ukiyo-e)."), links: [L(MAP, gm("Tokyo National Museum"))] },
      { t: "12:30", src: "idea", ttl: T("阿美橫丁 · 午餐", "Ameyoko market · lunch") },
      { t: "14:30", src: "idea", ttl: T("谷中銀座 + かやば珈琲", "Yanaka Ginza + Kayaba Coffee"), nt: T("1938 年的老喫茶店，招牌雞蛋三文治。", "A 1938 kissaten known for its egg sandwich."), links: [L(MAP, gm("Kayaba Coffee Yanaka"))] },
      { t: "16:30", src: "idea", ttl: T("根津神社 千本鳥居", "Nezu Shrine torii tunnel"), links: [L(MAP, gm("Nezu Shrine"))] },
      { t: "", src: "idea", ttl: T("另一選擇：三鷹之森吉卜力美術館", "Alternative: Ghibli Museum, Mitaka"), nt: T("一月門票通常 12 月 10 日在 Lawson Ticket 開賣，很快售罄；逢週二休館。", "January tickets usually go on sale on 10 Dec through Lawson Ticket and sell out fast. Closed Tuesdays.") },
    ],
    spots: [
      { img: "tnm", name: T("東京國立博物館", "Tokyo National Museum"), price: "≈ ¥1,000" },
      { img: "yanaka", name: T("谷中銀座", "Yanaka Ginza"), price: "" },
      { img: "nezushrine", name: T("根津神社", "Nezu Shrine"), price: T("免費", "Free") },
    ],
    budget: { transport: 600, food: 4500, cafe: 1500, tickets: 1000, other: 0 }, souvenir: 2000, souvenirNote: T("阿美橫丁零食", "Ameyoko snacks"),
  },
  {
    id: "d0109", phase: "p3", d: 9, mon: 1, dow: T("週六", "Sat"), we: true,
    cjk: "歸途", romaji: "SAYŌNARA TŌKYŌ", verse: ["手信滿袋", "下次再見"], color: "ink", art: "tokyostation", artShape: "panel",
    title: T("回程", "Departure"), area: T("最後購物 → 機場", "Last shopping → airport"), status: "open",
    items: [
      { t: T("上午", "Morning"), src: "idea", ttl: T("東京站一番街 · Gransta 買手信", "Souvenirs at Tokyo Station Character Street / Gransta"), nt: T("或到唐吉訶德買零食、化妝品，記得帶護照。", "Or Don Quijote for snacks and cosmetics. Bring your passport.") },
      { t: T("起飛前 3 小時", "−3 h"), src: "idea", ttl: T("Skyliner（日暮里／上野）或 N'EX → 機場", "Skyliner (Nippori/Ueno) or N'EX → airport"), nt: T("最少提早 3 小時出發；退稅要在海關辦理。", "Leave at least 3 hours before departure. The tax refund is done at customs.") },
    ],
    spots: [{ img: "tokyostation", name: T("東京站丸之內站舍", "Tokyo Station"), price: "" }],
    budget: { transport: 3000, food: 3500, cafe: 0, tickets: 0, other: 0 }, souvenir: 10000, souvenirNote: T("送朋友家人的手信盒", "Gift boxes for friends & family"),
  },
];

/* Shopping wishlist: price in JPY. kind: "official" = from the store page, "est" = estimate */
export const WISH = [
  { id: "public", day: "28/12", name: T("PUBLIC TOKYO 大衣", "PUBLIC TOKYO coat"), price: 35000, kind: "est", pri: true, url: "https://public-tokyo.com/shop/g/g166651002766", note: T("官網要登入才看到價錢", "Store page needs a login to show the price") },
  { id: "coach", day: "28/12", name: T("COACH Chelsea 肩袋", "COACH Chelsea shoulder bag"), price: 60000, kind: "est", url: "https://ca.coach.com/en/products/chelsea-shoulder-bag-/CDS58.html?frp=CDS58+B4MPL" },
  { id: "uniqlo", day: "28/12", name: T("UNIQLO U 軟塗層索繩袋（黑）", "UNIQLO U soft coated drawstring bag (black)"), price: 2990, kind: "est", url: "https://www.uniqlo.com/jp/ja/products/E486461-000/00?colorDisplayCode=09&sizeDisplayCode=999" },
  { id: "vw", day: "27/12", name: "Vivienne Westwood Red Label · Laforet", price: 30000, kind: "est", url: "https://www.viviennewestwood.com/storedetails/?storeID=Tokyo-Red-Label-Concept-Store-Laforet" },
  { id: "dior", day: "29/12", name: T("Dior 卡片銀包", "Dior card wallet"), price: 75000, kind: "est", url: "https://www.dior.com/en_ca/fashion/products/2ESCH135YSE_H03E" },
  { id: "aoyama", day: "31/12", name: T("洋服の青山", "Yōfuku no Aoyama"), price: 10000, kind: "est", url: "https://www.y-aoyama.jp/en/ec/shop/r/r684/?lc=topBnr_category_m" },
];

export const REELS = [
  ["拿熱水燙死我", "https://www.instagram.com/reel/DclA52WJA_2/?dlrf=eXBvZW54NzdkdDcw"],
  ["You're beautiful", "https://www.instagram.com/reel/DfLt70CpjYI/?psln=MW91enN2NHBjcWJraQ=="],
  ["正義的光", "https://www.instagram.com/reel/DfHOQOVJ7qh/?cplk=bW1neWFtaGRkMjJr"],
  ["Shut up", "https://www.instagram.com/reel/De106BjI4PY/?exln=MWd5a2QyeDBicGN3dA=="],
  ["發癲片", "https://www.instagram.com/reel/DeJ-vTezeBJ/?vrfl=MXJjODg0djR0aTJ3NQ=="],
  ["都是山", "https://www.instagram.com/reel/DeBwa8ihO1I/?xtok=ZXZ4MDlrem9ob3Zu"],
  ["高難度舞蹈", "https://www.instagram.com/reel/DexFclkSXbj/?rpxt=bHF4b29jZGZwejdw"],
  ["背刺我就是這樣", "https://www.instagram.com/reel/DetxV7VS52W/?srtk=MXBzb2drNXZxN25qOQ=="],
  ["Grad trip", "https://www.instagram.com/reel/Dcx4K1ahQS_/?mdxt=Njlhdjc4eGpsNmR0"],
  ["閨密宣言", "https://www.instagram.com/reel/Dcn8l2jyFNV/?dlrf=MXdteGJhZjkxano2MA=="],
  ["Oppa Gangnam Style", "https://www.instagram.com/reel/DemBN2BPH3U/?exln=Zm9wMTN1anc2MHVk"],
  ["手裏拿着刀沒法抱你", "https://www.instagram.com/reel/Dd1B8P6ybF9/?xtok=aTJmaHFpM3Jzb2tj"],
  ["落藥", "https://www.instagram.com/reel/De6nONmhO3X/?vrfl=MXBncDFnNHB5dWZqbQ=="],
  ["發癲片 2 號", "https://www.instagram.com/reel/Dcn-ZiVSRzF/?vrfl=MnI5anFpZmwwNDRi"],
  ["發癲片 3 號", "https://www.instagram.com/reel/DcVmPn0IXqi/?psln=aWN3YjJpODZuM2wx"],
  ["Omg 我一直愛上他", "https://www.instagram.com/reel/DewO1J6yq0n/?exln=cnhiNGZyY3YyeXg0"],
  ["草莓", "https://www.instagram.com/reel/DccqxKnRroA/?dlrf=MWRnemdkbnVpcDc1MA=="],
  ["泡椒", "https://www.instagram.com/reel/DfMf88BT9YL/?xtok=ZDdoNGlsaHZpZXk="],
  ["Bullies", "https://www.instagram.com/reel/DegLkyTRLcb/?rpxt=ZXVoM3d1eDFoYmxr"],
  ["新片 (DeBlJX)", "https://www.instagram.com/reel/DeBlJX_sxpf/?xtok=YjhjMTlpMTd4MXRm"],
  ["Neon", "https://www.instagram.com/reel/DfUH3BIoUXz/?xtok=dzllaXZsbTRiZ2d5"],
  ["Taylor Swift", "https://www.instagram.com/reel/DdzF2YTKTb5/?exln=Ym1zYW43MDh3cWkz"],
];

export const DEFAULT_RATES = { HKD: 20.1, CAD: 111.9 }; // JPY per 1 unit
export const DRIVE = "https://drive.google.com/drive/folders/1Sm75n50jdBnTJ60mten3uC5hYRvH6PIx?usp=drive_link";
