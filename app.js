/* =========================================================================
   DANH SÁCH ĐƯỜNG DẪN ICON — sửa trực tiếp ở đây nếu muốn đổi ảnh.
   Mỗi mục: [Tên hiển thị (tiếng Anh, dùng làm khoá nội bộ), tên file ảnh trong thư mục ICON_BASE]
   -> null nghĩa là chưa có icon, trang sẽ hiển thị chữ viết tắt thay thế.
   Ví dụ: Lava Hound -> "airdefenceseeker.png"
          => đường dẫn đầy đủ: ICON_BASE + "airdefenceseeker.png"
                              = "./img/airdefenceseeker.png"
   Tên tiếng Việt hiển thị được lấy từ bảng TROOP_VI ở phần dưới, không cần sửa ở đây.
   ========================================================================= */
const ICON_BASE = "./img/";

const TROOP_GROUPS = [
  {
    key: "elixir",
    title: "Elixir Cards",
    desc: "Regular Elixir troops",
    troops: [
      ["Barbarian", "barbarian.png"],
      ["Archer", "archer.png"],
      ["Giant", "giant.png"],
      ["Goblin", "goblin.png"],
      ["Wall Breaker", "wall-breaker.png"],
      ["Balloon", "balloon.png"],
      ["Wizard", "wizard.png"],
      ["Healer", "healer.png"],
      ["Dragon", "dragon.png"],
      ["P.E.K.K.A", "pekka.png"],
      ["Baby Dragon", "babydragon.png"],
      ["Miner", "miner.png"],
      ["Electro Dragon", "electro-dragon.png"],
      ["Yeti", "yeti.png"],
      ["Dragon Rider", "dragon-rider.png"],
      ["Electro Titan", "electro-titan.png"],
      ["Root Rider", "root-rider.png"],
      ["Thrower", "thrower.png"],
      ["Meteor Golem", "Meteor_Golem.png"],
    ],
  },
  {
    key: "dark",
    title: "Dark Elixir Cards",
    desc: "Dark Elixir troops",
    troops: [
      ["Minion", "gargoyle.png"],
      ["Hog Rider", "boar-rider.png"],
      ["Valkyrie", "warrior-girl.png"],
      ["Golem", "golem.png"],
      ["Witch", "warlock.png"],
      ["Lava Hound", "airdefenceseeker.png"],
      ["Bowler", "bowler.png"],
      ["Ice Golem", "ice-golem.png"],
      ["Headhunter", "headhunter.png"],
      ["Apprentice Warden", "apprentice-warden.png"],
      ["Druid", "druid_healer.png"],
      ["Furnace", "Avatar_Furnace.png"],
      ["Ruin Witch", "Ruin_Witch.png"],
    ],
  },
  {
    key: "builder",
    title: "Builder Base Cards",
    desc: "Builder Base troops",
    troops: [
      ["Raged Barbarian", "barbarian2.png"],
      ["Sneaky Archer", "archer2.png"],
      ["Boxer Giant", "giant2.png"],
      ["Beta Minion", "gargoyle2.png"],
      ["Bomber", "bomber2.png"],
      ["Baby Dragon", "babydragon.png"],
      ["Cannon Cart", "moving-cannon.png"],
      ["Night Witch", "dark-witch.png"],
      ["Drop Ship", "balloon2.png"],
      ["Power P.E.K.K.A", "pekka2.png"],
      ["Hog Glider", "hog-glider.png"],
    ],
  },
  {
    key: "super",
    title: "Super Troop Cards",
    desc: "Super troops",
    troops: [
      ["Super Barbarian", "elitebarbarian.png"],
      ["Super Archer", "elitearcher.png"],
      ["Super Giant", "elitegiant.png"],
      ["Sneaky Goblin", "elitegoblin.png"],
      ["Super Wall Breaker", "elitewallbreaker.png"],
      ["Rocket Balloon", "hastyballoon.png"],
      ["Super Wizard", "super-wizard.png"],
      ["Super Dragon", "super-dragon.png"],
      ["Inferno Dragon", "infernodragon.png"],
      ["Super Miner", "super-miner.png"],
      ["Super Yeti", "Super_Yeti.png"],
      ["Super Minion", "super-minion.png"],
      ["Super Hog Rider", "super-hog-rider.png"],
      ["Super Valkyrie", "elitevalkyrie.png"],
      ["Super Witch", "head-witch.png"],
      ["Ice Hound", "ice-hound.png"],
      ["Super Bowler", "super-bowler.png"],
    ],
  },
];
/* ===================== HẾT PHẦN DANH SÁCH ICON ===================== */

/* =========================================================================
   BẢN DỊCH (i18n) — sửa/thêm ở đây nếu muốn đổi chữ hiển thị.
   ========================================================================= */

// Tên nhóm thẻ theo từng ngôn ngữ (khoá = group.key ở trên)
const GROUP_I18N = {
  elixir: {
    vi: { title: "Thẻ Tiên Dược", desc: "Lính Tiên Dược thường" },
    en: { title: "Elixir Cards", desc: "Regular Elixir troops" },
  },
  dark: {
    vi: { title: "Thẻ Hắc Tiên Dược", desc: "Lính Hắc Tiên Dược" },
    en: { title: "Dark Elixir Cards", desc: "Dark Elixir troops" },
  },
  builder: {
    vi: { title: "Thẻ Làng Thợ Xây", desc: "Lính Làng Thợ Xây" },
    en: { title: "Builder Base Cards", desc: "Builder Base troops" },
  },
  super: {
    vi: { title: "Thẻ Siêu Binh Lính", desc: "Lính Siêu Cấp" },
    en: { title: "Super Troop Cards", desc: "Super troops" },
  },
};

// Tên lính tiếng Việt (khoá = tên tiếng Anh dùng trong TROOP_GROUPS ở trên).
// Nếu không có trong bảng này, trang sẽ hiển thị nguyên tên tiếng Anh.
const TROOP_VI = {
  "Barbarian": "Man Di",
  "Archer": "Cung Thủ",
  "Giant": "Khổng nhân",
  "Goblin": "Yêu Tinh",
  "Wall Breaker": "Công Thành Binh",
  "Balloon": "Khinh Khí Cầu",
  "Wizard": "Pháp Sư",
  "Healer": "Thầy Thuốc",
  "Dragon": "Rồng",
  "P.E.K.K.A": "P.E.K.K.A",
  "Baby Dragon": "Tiểu Long",
  "Miner": "Thợ Mỏ",
  "Electro Dragon": "Điện Long",
  "Yeti": "Người Tuyết Yeti",
  "Dragon Rider": "Kỵ Sĩ Rồng",
  "Electro Titan": "Chiến Binh Phóng Điện",
  "Root Rider": "Kỵ Sĩ Rễ Cây",
  "Thrower": "Cao Thủ Phóng Lao",
  "Meteor Golem": "Thạch Nhân Thiên Thạch",
  "Minion": "Minion",
  "Hog Rider": "Trư Kỵ Sĩ",
  "Valkyrie": "Valkyrie",
  "Golem": "Thạch Nhân",
  "Witch": "Phù Thủy",
  "Lava Hound": "Nham Khuyển",
  "Bowler": "Thạch Thủ",
  "Ice Golem": "Băng Thạch Nhân",
  "Headhunter": "Thợ Săn Tướng",
  "Apprentice Warden": "Quản Giáo Học Việc",
  "Druid": "Thuật Sĩ",
  "Furnace": "Lò Lửa",
  "Ruin Witch": "Phù Thủy Tàn Tích",
  "Raged Barbarian": "Man Di Cuồng Nộ",
  "Sneaky Archer": "Cung Thủ Lén Lút",
  "Boxer Giant": "Võ Sĩ Khổng Nhân",
  "Beta Minion": "Minion Beta",
  "Bomber": "Bom Thủ",
  "Cannon Cart": "Xe Đại Bác",
  "Night Witch": "Phù Thủy Bóng Đêm",
  "Drop Ship": "Tàu Thả Xuống",
  "Power P.E.K.K.A": "P.E.K.K.A Dũng Mãnh",
  "Hog Glider": "Trư Bay Lượn",
  "Super Barbarian": "Siêu Man Di",
  "Super Archer": "Siêu Cung Thủ",
  "Super Giant": "Siêu Khổng Nhân",
  "Sneaky Goblin": "Yêu Tinh Tàng Hình",
  "Super Wall Breaker": "Siêu Công Thành Binh",
  "Rocket Balloon": "Khí Cầu Hoả Tiễn",
  "Super Wizard": "Siêu Pháp Sư",
  "Super Dragon": "Rồng Siêu Cấp",
  "Inferno Dragon": "Hoả Ngục Long",
  "Super Miner": "Siêu Thợ Mỏ",
  "Super Yeti": "Người Tuyết Yeti Siêu Cấp",
  "Super Minion": "Siêu Minion",
  "Super Hog Rider": "Siêu Trư Kỵ Sĩ",
  "Super Valkyrie": "Siêu Valkyrie",
  "Super Witch": "Siêu Phù Thủy",
  "Ice Hound": "Băng Khuyển",
  "Super Bowler": "Siêu Thạch Thủ",
};

// Toàn bộ chữ giao diện (UI). Hàm ở dạng function nhận tham số để ghép chuỗi động.
const UI_I18N = {
  vi: {
    pageTitle: "Thẻ Bài Clash - So Sánh 2 Nick",
    title: "Thẻ Bài Clash — So Sánh 2 Nick",
    subtitleHTML: 'Bấm vào thẻ để tăng số lượng (0 → x1 → x2 → x3 → quay lại 0). Dữ liệu được lưu tự động vào bộ nhớ trình duyệt (localStorage) trên máy này. Dùng nút "Xuất" ở mỗi cột để tải file JSON gửi cho người chơi khác, và "Nhập" để nạp file họ gửi lại — logic này nằm trong file <code>app.js</code> riêng. Bên dưới là gợi ý trao đổi thẻ dư giữa 2 nick.',
    btnReset: "↺ Đặt lại toàn bộ về 0",
    btnExportAll: "⬇️ Xuất toàn bộ (sao lưu)",
    btnImportAll: "⬆️ Nhập toàn bộ (khôi phục)",
    legendEmpty: "Chưa có (0)",
    legendOwned: "Đã có (x1)",
    legendMulti: "Có nhiều (x2 / x3)",
    legendNeeded: "🔺 = thẻ nick kia đang thiếu, gợi ý đem đổi",
    tradeTitle: "🔁 Gợi ý trao đổi thẻ",
    tradeDesc: "Thẻ nào một nick có > 1 (dư) mà nick còn lại đang có 0 (chưa có) sẽ được gợi ý ở đây.",
    tradeSwapTitle: "⇄ Có thể đổi 1:1 ngay",
    tradeAHeading: (a, b) => `${a} dư, ${b} đang thiếu`,
    tradeBHeading: (a, b) => `${b} dư, ${a} đang thiếu`,
    tradeEmptySwap: "Chưa có cặp thẻ nào có thể đổi 1:1 ngay lúc này.",
    tradeEmptyList: "Không có thẻ dư phù hợp.",
    tradeAcceptBtn: "Đồng ý",
    tradeAcceptTitle: "Cập nhật số lượng theo trao đổi này",
    tradeHistoryTitle: "Lịch sử trao đổi",
    tradeUndoBtn: "Hoàn tác",
    tradeUndoTitle: "Hoàn tác trao đổi gần nhất",
    tradeHistoryShowBtn: "Hiện",
    tradeHistoryHideBtn: "Ẩn",
    tradeHistoryToggleTitle: "Ẩn/hiện lịch sử trao đổi",
    tradeShowMoreBtn: (n) => `Xem thêm (${n})`,
    tradeCollapseBtn: "Thu gọn",
    tradeHistoryEmpty: "Chưa có trao đổi nào.",
    tradeHistoryLine: (a, aCard, b, bCard) => `${a} đưa ${aCard} ⇄ ${b} đưa ${bCard}`,
    alertUndoUnavailable: "Không thể hoàn tác trao đổi này vì số lượng thẻ hiện tại không còn phù hợp.",
    surplus: (n) => `dư x${n}`,
    swapLine: (name, cardName, n) => `<b>${name}</b> đưa <b>${cardName}</b> (dư x${n})`,
    exportBtnLabel: "Xuất",
    importBtnLabel: "Nhập",
    exportTitle: (name) => `Xuất JSON của ${name} để gửi cho người chơi khác`,
    importTitle: (name) => `Nhập file JSON thẻ vào ${name}`,
    ownedLabel: "Đã có",
    newFlag: "Mới",
    ariaOwned: (name, n) => `${name}, đang có x${n}. Bấm để tăng số lượng.`,
    ariaEmpty: (name) => `${name}, chưa sở hữu. Bấm để tăng số lượng.`,
    iconRefSummary: "🖼️ Danh sách đường dẫn icon card (sửa trong source code tại biến ICON_BASE / TROOP_GROUPS)",
    iconRefDescHTML: 'Icon được nạp từ thư mục cục bộ <code id="iconBaseShown"></code>. Ví dụ: icon Lava Hound có đường dẫn <code>./img/airdefenceseeker.png</code>. Đặt các file ảnh cùng tên vào thư mục <code>img/</code> cạnh file HTML này. Thẻ nào chưa có file (cột "Trạng thái" ghi "Chưa có icon") sẽ hiển thị chữ viết tắt tạm thời.',
    thGroup: "Nhóm",
    thName: "Tên thẻ",
    thPath: "Đường dẫn icon",
    thStatus: "Trạng thái",
    statusOK: "OK",
    statusMissing: "Chưa có icon",
    footerHTML: 'Icon lính có thể lấy tham khảo từ <a href="https://coc.guide/troop" target="_blank" rel="noopener">coc.guide</a> rồi tải về thư mục <code>img/</code> cục bộ · Công cụ theo dõi &amp; trao đổi bộ sưu tập, không liên kết chính thức với Supercell.',
    confirmReset: "Đặt lại toàn bộ số lượng thẻ của cả 2 nick về 0?",
    alertInvalidJSON: "File JSON không hợp lệ.",
    alertMissingCounts: "File JSON không đúng định dạng (thiếu dữ liệu 'counts').",
    confirmNameUpdate: (col, name) => `File chứa tên nick "${name}". Cập nhật tên cho cột ${col} luôn không?`,
    alertImportedAccount: (label) => `Đã nhập dữ liệu thẻ vào cột ${label}.`,
    confirmOverwriteAll: "Nhập bản sao lưu này sẽ GHI ĐÈ toàn bộ dữ liệu hiện tại của cả 2 nick. Tiếp tục?",
    alertImportedAll: "Đã khôi phục dữ liệu từ file sao lưu.",
    confirmOk: "Đồng ý",
    confirmCancel: "Hủy",
    toastResetDone: "Đã đặt lại toàn bộ dữ liệu.",
    toastTradeApplied: "Đã cập nhật số lượng theo trao đổi.",
    toastTradeUndone: "Đã hoàn tác trao đổi gần nhất.",
    defaultNames: { A: "Người chơi A", B: "Người chơi B" },
  },
  en: {
    pageTitle: "Clash Cards - Compare 2 Accounts",
    title: "Clash Cards — Compare 2 Accounts",
    subtitleHTML: 'Click a card to increase its count (0 → x1 → x2 → x3 → back to 0). Your data is saved automatically to this browser\'s local storage. Use the "Export" button on each column to download a JSON file to send to another player, and "Import" to load a file they sent you — this logic lives in a separate <code>app.js</code> file. Below is a trade suggestion panel comparing surplus cards between the two accounts.',
    btnReset: "↺ Reset everything to 0",
    btnExportAll: "⬇️ Export all (backup)",
    btnImportAll: "⬆️ Import all (restore)",
    legendEmpty: "Not owned (0)",
    legendOwned: "Owned (x1)",
    legendMulti: "Multiple (x2 / x3)",
    legendNeeded: "🔺 = the other account needs this, suggested to trade",
    tradeTitle: "🔁 Trade suggestions",
    tradeDesc: "A card that one account has > 1 of (surplus) while the other has 0 (missing) will be suggested here.",
    tradeSwapTitle: "⇄ Ready to swap 1:1",
    tradeAHeading: (a, b) => `${a} has extra, ${b} is missing`,
    tradeBHeading: (a, b) => `${b} has extra, ${a} is missing`,
    tradeEmptySwap: "No 1:1 swap pairs available right now.",
    tradeEmptyList: "No matching surplus cards.",
    tradeAcceptBtn: "Accept",
    tradeAcceptTitle: "Update card counts for this trade",
    tradeHistoryTitle: "Trade history",
    tradeUndoBtn: "Undo",
    tradeUndoTitle: "Undo the latest trade",
    tradeHistoryShowBtn: "Show",
    tradeHistoryHideBtn: "Hide",
    tradeHistoryToggleTitle: "Show or hide trade history",
    tradeShowMoreBtn: (n) => `Show more (${n})`,
    tradeCollapseBtn: "Collapse",
    tradeHistoryEmpty: "No trades yet.",
    tradeHistoryLine: (a, aCard, b, bCard) => `${a} gives ${aCard} ⇄ ${b} gives ${bCard}`,
    alertUndoUnavailable: "This trade cannot be undone because the current card counts no longer match.",
    surplus: (n) => `x${n} extra`,
    swapLine: (name, cardName, n) => `<b>${name}</b> gives <b>${cardName}</b> (x${n} extra)`,
    exportBtnLabel: "Export",
    importBtnLabel: "Import",
    exportTitle: (name) => `Export ${name}'s JSON to send to another player`,
    importTitle: (name) => `Import a card JSON file into ${name}`,
    ownedLabel: "Owned",
    newFlag: "New",
    ariaOwned: (name, n) => `${name}, currently have x${n}. Click to increase.`,
    ariaEmpty: (name) => `${name}, not owned yet. Click to increase.`,
    iconRefSummary: "🖼️ Card icon path list (edit in source code via the ICON_BASE / TROOP_GROUPS variables)",
    iconRefDescHTML: 'Icons are loaded from the local folder <code id="iconBaseShown"></code>. Example: the Lava Hound icon path is <code>./img/airdefenceseeker.png</code>. Put image files with matching names into the <code>img/</code> folder next to this HTML file. Cards without a file yet (marked "Missing icon" in the Status column) show a temporary letter badge instead.',
    thGroup: "Group",
    thName: "Card name",
    thPath: "Icon path",
    thStatus: "Status",
    statusOK: "OK",
    statusMissing: "Missing icon",
    footerHTML: 'Troop icons sourced from <a href="https://coc.guide/troop" target="_blank" rel="noopener">coc.guide</a>, downloaded into a local <code>img/</code> folder · A collection tracking &amp; trading tool, not officially affiliated with Supercell.',
    confirmReset: "Reset both accounts' card counts to 0?",
    alertInvalidJSON: "Invalid JSON file.",
    alertMissingCounts: "Invalid JSON format (missing 'counts' data).",
    confirmNameUpdate: (col, name) => `This file contains the player name "${name}". Update column ${col}'s name too?`,
    alertImportedAccount: (label) => `Card data imported into ${label}.`,
    confirmOverwriteAll: "Importing this backup will OVERWRITE all current data for both accounts. Continue?",
    alertImportedAll: "Data restored from backup file.",
    confirmOk: "Accept",
    confirmCancel: "Cancel",
    toastResetDone: "All data reset.",
    toastTradeApplied: "Card counts updated for this trade.",
    toastTradeUndone: "Latest trade undone.",
    defaultNames: { A: "Player A", B: "Player B" },
  },
};

const LANG_STORAGE_KEY = "clashCardsLangV1";
function loadLang() {
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved === "vi" || saved === "en") return saved;
  } catch (e) {}
  return "vi";
}
let currentLang = loadLang();

function t(key, ...args) {
  const entry = UI_I18N[currentLang][key];
  return typeof entry === "function" ? entry(...args) : entry;
}
function trTroopName(englishName) {
  if (currentLang === "vi") return TROOP_VI[englishName] || englishName;
  return englishName;
}
function trGroup(groupKey, field) {
  const g = GROUP_I18N[groupKey];
  return g ? g[currentLang][field] : "";
}
/* ===================== HẾT PHẦN BẢN DỊCH ===================== */

const STORAGE_KEY = "clashCardsCompareV1";
const TRADE_HISTORY_COLLAPSED_KEY = "clashCardsTradeHistoryCollapsedV1";
const ACCOUNTS = ["A", "B"];
const TRADE_LIST_PREVIEW_LIMIT = 3;
const tradeListExpanded = {
  swap: false,
  a: false,
  b: false,
};

function initials(name) {
  return name
    .replace(/[^A-Za-z0-9 ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}
function makeKey(groupKey, name) {
  return groupKey + "::" + name;
}

// Build flat list of all card keys in display order, keep ref to name/file/group
const ALL_CARDS = [];
TROOP_GROUPS.forEach((g) =>
  g.troops.forEach(([name, file]) => {
    ALL_CARDS.push({
      key: makeKey(g.key, name),
      name,
      file,
      groupKey: g.key,
      groupTitle: g.title,
    });
  }),
);

/* ---------------- State (load / save via localStorage) ---------------- */
function defaultState() {
  const counts = {};
  ACCOUNTS.forEach((acc) => {
    counts[acc] = {};
    ALL_CARDS.forEach((c) => (counts[acc][c.key] = 0));
  });
  return {
    names: { A: UI_I18N[currentLang].defaultNames.A, B: UI_I18N[currentLang].defaultNames.B },
    counts,
    tradeHistory: [],
  };
}

function loadState() {
  let saved = null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) saved = JSON.parse(raw);
  } catch (e) {
    console.warn("Không đọc được localStorage:", e);
  }

  const state = defaultState();
  if (saved) {
    if (saved.names) {
      ACCOUNTS.forEach((acc) => {
        if (typeof saved.names[acc] === "string" && saved.names[acc].trim())
          state.names[acc] = saved.names[acc];
      });
    }
    if (saved.counts) {
      ACCOUNTS.forEach((acc) => {
        const savedAcc = saved.counts[acc] || {};
        ALL_CARDS.forEach((c) => {
          const v = savedAcc[c.key];
          if (typeof v === "number" && v >= 0 && v <= 3)
            state.counts[acc][c.key] = v;
        });
      });
    }
    if (Array.isArray(saved.tradeHistory)) {
      state.tradeHistory = saved.tradeHistory
        .filter(
          (entry) =>
            entry &&
            typeof entry.id === "string" &&
            typeof entry.at === "string" &&
            typeof entry.aCardKey === "string" &&
            typeof entry.bCardKey === "string",
        )
        .slice(0, 50);
    }
  }
  return state;
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn("Không lưu được localStorage:", e);
  }
}

let state = loadState();

function showToast(message, type = "info") {
  const root = document.getElementById("toastRoot");
  if (!root) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.setAttribute("role", type === "error" ? "alert" : "status");
  toast.textContent = message;
  root.appendChild(toast);

  window.setTimeout(() => {
    toast.classList.add("leaving");
    toast.addEventListener("transitionend", () => toast.remove(), { once: true });
  }, 3200);
}

function showConfirm(message) {
  const layer = document.getElementById("confirmLayer");
  const card = layer.querySelector(".confirm-card");
  const messageEl = document.getElementById("confirmMessage");
  const okBtn = document.getElementById("btnConfirmOk");
  const cancelBtn = document.getElementById("btnConfirmCancel");

  messageEl.textContent = message;
  okBtn.textContent = t("confirmOk");
  cancelBtn.textContent = t("confirmCancel");
  layer.hidden = false;
  card.focus();

  return new Promise((resolve) => {
    const close = (value) => {
      layer.hidden = true;
      okBtn.removeEventListener("click", onOk);
      cancelBtn.removeEventListener("click", onCancel);
      layer.removeEventListener("click", onLayerClick);
      document.removeEventListener("keydown", onKeyDown);
      resolve(value);
    };
    const onOk = () => close(true);
    const onCancel = () => close(false);
    const onLayerClick = (e) => {
      if (e.target.classList.contains("confirm-backdrop")) close(false);
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") close(false);
    };

    okBtn.addEventListener("click", onOk);
    cancelBtn.addEventListener("click", onCancel);
    layer.addEventListener("click", onLayerClick);
    document.addEventListener("keydown", onKeyDown);
  });
}

function loadTradeHistoryCollapsed() {
  try {
    return localStorage.getItem(TRADE_HISTORY_COLLAPSED_KEY) === "1";
  } catch (e) {}
  return false;
}
let tradeHistoryCollapsed = loadTradeHistoryCollapsed();

/* ---------------- Build UI per account ---------------- */
const cardRefs = { A: {}, B: {} }; // key -> {card, badge}

function buildAccountColumn(acc) {
  document.getElementById("nameInput-" + acc).value = state.names[acc];
  const container = document.getElementById("groups-" + acc);
  container.innerHTML = "";

  TROOP_GROUPS.forEach((group) => {
    const groupTitle = trGroup(group.key, "title");
    const section = document.createElement("section");
    section.className = "group " + group.key;
    section.dataset.group = group.key;

    section.innerHTML = `
      <div class="group-head">
        <div class="group-badge">${groupTitle
          .split(" ")
          .map((w) => w[0])
          .slice(0, 2)
          .join("")}</div>
        <div>
          <h2 class="group-title">${groupTitle}</h2>
        </div>
        <div class="group-counter"><span class="g-collected">0</span>/<span class="g-total">0</span></div>
      </div>
      <div class="group-track"><div class="group-fill"></div></div>
      <div class="grid"></div>
    `;
    const grid = section.querySelector(".grid");

    group.troops.forEach(([name, file]) => {
      const key = makeKey(group.key, name);
      const displayName = trTroopName(name);

      const card = document.createElement("button");
      card.type = "button";
      card.className = "card";
      card.dataset.key = key;
      card.dataset.account = acc;

      let iconEl;
      if (file) {
        iconEl = document.createElement("img");
        iconEl.src = ICON_BASE + file;
        iconEl.alt = displayName;
        iconEl.loading = "lazy";
      } else {
        iconEl = document.createElement("div");
        iconEl.className = "icon-placeholder";
        iconEl.textContent = initials(name);
        const flag = document.createElement("div");
        flag.className = "new-flag";
        flag.textContent = t("newFlag");
        card.appendChild(flag);
      }

      const tag = document.createElement("div");
      tag.className = "name-tag";
      tag.textContent = displayName;

      const badge = document.createElement("div");
      badge.className = "count-badge";
      badge.textContent = "x1";

      card.appendChild(iconEl);
      card.appendChild(badge);
      card.appendChild(tag);

      card.addEventListener("click", () => {
        state.counts[acc][key] = (state.counts[acc][key] + 1) % 4;
        saveState();
        renderCardVisual(acc, key);
        updateAccountProgress(acc);
        renderTradeSuggestions();
      });

      cardRefs[acc][key] = { card, badge };
      grid.appendChild(card);
    });

    container.appendChild(section);
  });
}

function renderCardVisual(acc, key) {
  const { card, badge } = cardRefs[acc][key];
  const count = state.counts[acc][key];
  const owned = count > 0;
  const cardInfo = ALL_CARDS.find((c) => c.key === key);
  const displayName = trTroopName(cardInfo.name);

  card.classList.toggle("owned", owned);
  card.setAttribute(
    "aria-label",
    owned ? t("ariaOwned", displayName, count) : t("ariaEmpty", displayName),
  );

  if (count > 1) {
    badge.textContent = "x" + count;
    badge.classList.add("show");
  } else {
    badge.classList.remove("show");
  }

  // highlight if THIS card is something the other account needs (i.e. this account has surplus)
  const otherAcc = acc === "A" ? "B" : "A";
  const otherHas = state.counts[otherAcc][key];
  card.classList.toggle("needed-highlight", count > 1 && otherHas === 0);
}

function renderAllCardsVisual() {
  ACCOUNTS.forEach((acc) =>
    ALL_CARDS.forEach((c) => renderCardVisual(acc, c.key)),
  );
}

function updateAccountProgress(acc) {
  const allKeys = ALL_CARDS.map((c) => c.key);
  const owned = allKeys.filter((k) => state.counts[acc][k] > 0).length;
  document.getElementById("total-" + acc).textContent =
    owned + " / " + allKeys.length;

  document.querySelectorAll("#groups-" + acc + " .group").forEach((section) => {
    const gKey = section.dataset.group;
    const keys = ALL_CARDS.filter((c) => c.groupKey === gKey).map((c) => c.key);
    const ownedG = keys.filter((k) => state.counts[acc][k] > 0).length;
    section.querySelector(".g-collected").textContent = ownedG;
    section.querySelector(".g-total").textContent = keys.length;
    section.querySelector(".group-fill").style.width =
      ((ownedG / keys.length) * 100).toFixed(1) + "%";
  });
}

function updateAllProgress() {
  ACCOUNTS.forEach(updateAccountProgress);
}

/* ---------------- Trade suggestions ---------------- */
function cardMiniHTML(c) {
  const displayName = trTroopName(c.name);
  const icon = c.file
    ? `<img src="${ICON_BASE + c.file}" alt="${displayName}">`
    : `<div class="ph">${initials(c.name)}</div>`;
  return icon;
}

function findCardByKey(key) {
  return ALL_CARDS.find((c) => c.key === key);
}

function applySwapTrade(aCardKey, bCardKey) {
  const aCanGive = state.counts.A[aCardKey] > 1 && state.counts.B[aCardKey] === 0;
  const bCanGive = state.counts.B[bCardKey] > 1 && state.counts.A[bCardKey] === 0;
  if (!aCanGive || !bCanGive) return;

  const aCard = findCardByKey(aCardKey);
  const bCard = findCardByKey(bCardKey);

  state.counts.A[aCardKey] -= 1;
  state.counts.B[aCardKey] += 1;
  state.counts.B[bCardKey] -= 1;
  state.counts.A[bCardKey] += 1;
  state.tradeHistory.unshift({
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    at: new Date().toISOString(),
    aName: state.names.A,
    bName: state.names.B,
    aCardKey,
    bCardKey,
    aCardName: aCard ? aCard.name : aCardKey,
    bCardName: bCard ? bCard.name : bCardKey,
  });
  state.tradeHistory = state.tradeHistory.slice(0, 50);

  saveState();
  renderAllCardsVisual();
  updateAllProgress();
  renderTradeSuggestions();
  showToast(t("toastTradeApplied"), "success");
}

function undoLatestTrade() {
  const latest = state.tradeHistory[0];
  if (!latest) return;

  const canUndo =
    state.counts.A[latest.aCardKey] < 3 &&
    state.counts.B[latest.aCardKey] > 0 &&
    state.counts.B[latest.bCardKey] < 3 &&
    state.counts.A[latest.bCardKey] > 0;

  if (!canUndo) {
    showToast(t("alertUndoUnavailable"), "error");
    return;
  }

  state.counts.A[latest.aCardKey] += 1;
  state.counts.B[latest.aCardKey] -= 1;
  state.counts.B[latest.bCardKey] += 1;
  state.counts.A[latest.bCardKey] -= 1;
  state.tradeHistory.shift();

  saveState();
  renderAllCardsVisual();
  updateAllProgress();
  renderTradeSuggestions();
  showToast(t("toastTradeUndone"), "success");
}

function renderTradeHistory() {
  const listEl = document.getElementById("tradeHistoryList");
  const undoBtn = document.getElementById("btnUndoTrade");
  const toggleBtn = document.getElementById("btnToggleTradeHistory");
  const historyEl = document.querySelector(".trade-history");
  if (!listEl || !undoBtn || !toggleBtn || !historyEl) return;

  historyEl.classList.toggle("collapsed", tradeHistoryCollapsed);
  toggleBtn.textContent = tradeHistoryCollapsed ? t("tradeHistoryShowBtn") : t("tradeHistoryHideBtn");
  undoBtn.disabled = state.tradeHistory.length === 0;
  listEl.innerHTML = "";
  if (state.tradeHistory.length === 0) {
    listEl.innerHTML = `<li class="trade-empty">${t("tradeHistoryEmpty")}</li>`;
    return;
  }

  state.tradeHistory.forEach((entry, index) => {
    const aCard = findCardByKey(entry.aCardKey);
    const bCard = findCardByKey(entry.bCardKey);
    const aCardName = aCard ? trTroopName(aCard.name) : entry.aCardName;
    const bCardName = bCard ? trTroopName(bCard.name) : entry.bCardName;
    const li = document.createElement("li");
    li.className = "trade-history-item";

    const text = document.createElement("span");
    text.textContent = t("tradeHistoryLine", entry.aName || "A", aCardName, entry.bName || "B", bCardName);

    const time = document.createElement("time");
    time.dateTime = entry.at;
    time.textContent = new Date(entry.at).toLocaleString(currentLang === "vi" ? "vi-VN" : "en-US", {
      dateStyle: "short",
      timeStyle: "short",
    });

    li.appendChild(text);
    li.appendChild(time);
    if (index === 0) li.classList.add("latest");
    listEl.appendChild(li);
  });
}

function toggleTradeHistory() {
  tradeHistoryCollapsed = !tradeHistoryCollapsed;
  try {
    localStorage.setItem(TRADE_HISTORY_COLLAPSED_KEY, tradeHistoryCollapsed ? "1" : "0");
  } catch (e) {}
  renderTradeHistory();
}

function renderTradeListToggle(listEl, listKey, totalCount) {
  const block = listEl.parentElement;
  const existing = block.querySelector(`.trade-list-toggle[data-list-key="${listKey}"]`);
  if (existing) existing.remove();
  if (totalCount <= TRADE_LIST_PREVIEW_LIMIT) return;

  const hiddenCount = totalCount - TRADE_LIST_PREVIEW_LIMIT;
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "btn mini trade-list-toggle";
  btn.dataset.listKey = listKey;
  btn.textContent = tradeListExpanded[listKey]
    ? t("tradeCollapseBtn")
    : t("tradeShowMoreBtn", hiddenCount);
  btn.addEventListener("click", () => {
    tradeListExpanded[listKey] = !tradeListExpanded[listKey];
    renderTradeSuggestions();
  });
  block.appendChild(btn);
}

function visibleTradeItems(items, listKey) {
  return tradeListExpanded[listKey]
    ? items
    : items.slice(0, TRADE_LIST_PREVIEW_LIMIT);
}

function renderTradeSuggestions() {
  const nameA = state.names.A || "A";
  const nameB = state.names.B || "B";
  document.getElementById("tradeAHeading").textContent = t("tradeAHeading", nameA, nameB);
  document.getElementById("tradeBHeading").textContent = t("tradeBHeading", nameA, nameB);

  const aSurplus = ALL_CARDS.filter(
    (c) => state.counts.A[c.key] > 1 && state.counts.B[c.key] === 0,
  );
  const bSurplus = ALL_CARDS.filter(
    (c) => state.counts.B[c.key] > 1 && state.counts.A[c.key] === 0,
  );

  // 1:1 swap pairing by troop type/group only.
  const swapPairs = [];
  const aOnly = [];
  const bMatchedKeys = new Set();

  aSurplus.forEach((ca) => {
    const cb = bSurplus.find(
      (candidate) =>
        !bMatchedKeys.has(candidate.key) &&
        candidate.groupKey === ca.groupKey,
    );
    if (cb) {
      swapPairs.push([ca, cb]);
      bMatchedKeys.add(cb.key);
    } else {
      aOnly.push(ca);
    }
  });
  const bOnly = bSurplus.filter((c) => !bMatchedKeys.has(c.key));

  const swapList = document.getElementById("tradeSwapList");
  swapList.innerHTML = "";
  if (swapPairs.length === 0) {
    swapList.innerHTML = `<li class="trade-empty">${t("tradeEmptySwap")}</li>`;
  } else {
    visibleTradeItems(swapPairs, "swap").forEach(([ca, cb]) => {
      const li = document.createElement("li");
      li.className = "swap-item";
      li.innerHTML = `
        <div class="side">${cardMiniHTML(ca)}<span>${t("swapLine", nameA, trTroopName(ca.name), state.counts.A[ca.key])}</span></div>
        <span class="swap-arrow">⇄</span>
        <div class="side">${cardMiniHTML(cb)}<span>${t("swapLine", nameB, trTroopName(cb.name), state.counts.B[cb.key])}</span></div>
        <button type="button" class="btn mini trade-accept" title="${t("tradeAcceptTitle")}">${t("tradeAcceptBtn")}</button>
      `;
      li
        .querySelector(".trade-accept")
        .addEventListener("click", () => applySwapTrade(ca.key, cb.key));
      swapList.appendChild(li);
    });
  }
  renderTradeListToggle(swapList, "swap", swapPairs.length);

  const fillList = (listEl, cards, acc, listKey) => {
    listEl.innerHTML = "";
    if (cards.length === 0) {
      listEl.innerHTML = `<li class="trade-empty">${t("tradeEmptyList")}</li>`;
      renderTradeListToggle(listEl, listKey, cards.length);
      return;
    }
    visibleTradeItems(cards, listKey).forEach((c) => {
      const li = document.createElement("li");
      li.className = "trade-item";
      li.innerHTML = `${cardMiniHTML(c)}<span>${trTroopName(c.name)}</span><span class="amt">${t("surplus", state.counts[acc][c.key])}</span>`;
      listEl.appendChild(li);
    });
    renderTradeListToggle(listEl, listKey, cards.length);
  };
  fillList(document.getElementById("tradeAList"), aOnly, "A", "a");
  fillList(document.getElementById("tradeBList"), bOnly, "B", "b");
  renderTradeHistory();
}

/* ---------------- Icon reference table ---------------- */
function buildIconRefTable() {
  document.getElementById("iconBaseShown").textContent = ICON_BASE;
  const tbody = document.querySelector("#iconRefTable tbody");
  tbody.innerHTML = "";
  ALL_CARDS.forEach((c) => {
    const tr = document.createElement("tr");
    if (!c.file) tr.className = "missing";
    const path = c.file ? ICON_BASE + c.file : "—";
    const status = c.file ? t("statusOK") : t("statusMissing");
    const groupTitle = trGroup(c.groupKey, "title");
    tr.innerHTML = `<td>${groupTitle}</td><td>${trTroopName(c.name)}</td><td><code>${path}</code></td><td>${status}</td>`;
    tbody.appendChild(tr);
  });
}

/* ---------------- Static UI text (i18n) ---------------- */
function applyStaticI18n() {
  document.documentElement.lang = currentLang;
  document.title = t("pageTitle");
  document.getElementById("pageTitle").textContent = t("pageTitle");
  document.getElementById("txtTitle").textContent = t("title");
  document.getElementById("txtSubtitle").innerHTML = t("subtitleHTML");
  document.getElementById("btnReset").textContent = t("btnReset");
  document.getElementById("btnExportAll").textContent = t("btnExportAll");
  document.getElementById("btnImportAll").textContent = t("btnImportAll");
  document.getElementById("txtLegendEmpty").textContent = t("legendEmpty");
  document.getElementById("txtLegendOwned").textContent = t("legendOwned");
  document.getElementById("txtLegendMulti").textContent = t("legendMulti");
  document.getElementById("txtLegendNeeded").textContent = t("legendNeeded");
  document.getElementById("txtTradeTitle").textContent = t("tradeTitle");
  document.getElementById("txtTradeDesc").textContent = t("tradeDesc");
  document.getElementById("txtTradeSwapTitle").textContent = t("tradeSwapTitle");
  document.getElementById("txtTradeHistoryTitle").textContent = t("tradeHistoryTitle");
  const undoBtn = document.getElementById("btnUndoTrade");
  const toggleHistoryBtn = document.getElementById("btnToggleTradeHistory");
  toggleHistoryBtn.textContent = tradeHistoryCollapsed ? t("tradeHistoryShowBtn") : t("tradeHistoryHideBtn");
  toggleHistoryBtn.title = t("tradeHistoryToggleTitle");
  undoBtn.textContent = t("tradeUndoBtn");
  undoBtn.title = t("tradeUndoTitle");

  ACCOUNTS.forEach((acc) => {
    const name = state.names[acc];
    document.getElementById("txtOwnedLabel-" + acc).textContent = t("ownedLabel");
    const exportBtn = document.getElementById("btnExport-" + acc);
    const importBtn = document.getElementById("btnImport-" + acc);
    exportBtn.querySelector(".btn-label").textContent = t("exportBtnLabel");
    importBtn.querySelector(".btn-label").textContent = t("importBtnLabel");
    exportBtn.title = t("exportTitle", name);
    importBtn.title = t("importTitle", name);
  });

  document.getElementById("txtIconRefSummary").textContent = t("iconRefSummary");
  document.getElementById("txtIconRefDesc").innerHTML = t("iconRefDescHTML");
  document.getElementById("txtThGroup").textContent = t("thGroup");
  document.getElementById("txtThName").textContent = t("thName");
  document.getElementById("txtThPath").textContent = t("thPath");
  document.getElementById("txtThStatus").textContent = t("thStatus");
  document.getElementById("txtFooter").innerHTML = t("footerHTML");

  document.getElementById("langBtnVi").classList.toggle("active", currentLang === "vi");
  document.getElementById("langBtnEn").classList.toggle("active", currentLang === "en");
}

function rerenderEverything() {
  applyStaticI18n();
  ACCOUNTS.forEach(buildAccountColumn);
  renderAllCardsVisual();
  updateAllProgress();
  renderTradeSuggestions();
  buildIconRefTable();
}

function setLanguage(lang) {
  if (lang !== "vi" && lang !== "en") return;
  if (lang === currentLang) return;

  // If an account still has the (untouched) default name in the old language,
  // switch it to the default name in the new language too. Custom names are left alone.
  const oldDefaults = UI_I18N[currentLang].defaultNames;
  const newDefaults = UI_I18N[lang].defaultNames;
  ACCOUNTS.forEach((acc) => {
    if (state.names[acc] === oldDefaults[acc]) {
      state.names[acc] = newDefaults[acc];
    }
  });

  currentLang = lang;
  try { localStorage.setItem(LANG_STORAGE_KEY, currentLang); } catch (e) {}

  saveState();
  rerenderEverything();
}

document.getElementById("langBtnVi").addEventListener("click", () => setLanguage("vi"));
document.getElementById("langBtnEn").addEventListener("click", () => setLanguage("en"));
document.getElementById("btnToggleTradeHistory").addEventListener("click", toggleTradeHistory);
document.getElementById("btnUndoTrade").addEventListener("click", undoLatestTrade);

/* ---------------- Name inputs ---------------- */
ACCOUNTS.forEach((acc) => {
  document.getElementById("nameInput-" + acc).addEventListener("input", (e) => {
    state.names[acc] = e.target.value;
    saveState();
    renderTradeSuggestions();
    applyStaticI18n(); // keeps export/import button tooltips in sync with the new name
  });
});

/* ---------------- Reset ---------------- */
document.getElementById("btnReset").addEventListener("click", async () => {
  if (!(await showConfirm(t("confirmReset")))) return;
  state = defaultState();
  saveState();
  ACCOUNTS.forEach(
    (acc) =>
      (document.getElementById("nameInput-" + acc).value = state.names[acc]),
  );
  renderAllCardsVisual();
  updateAllProgress();
  renderTradeSuggestions();
  applyStaticI18n();
  showToast(t("toastResetDone"), "success");
});

/* =========================================================================
   IMPORT / EXPORT JSON — chia sẻ bộ thẻ với người chơi khác
   ========================================================================= */
const EXPORT_FORMAT_VERSION = 1;

function slugify(text) {
  return (
    (text || "player")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // bỏ dấu tiếng Việt
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") || "player"
  );
}

function downloadJSON(filename, obj) {
  const blob = new Blob([JSON.stringify(obj, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

/** Xuất dữ liệu 1 nick — dùng để gửi cho người chơi khác so sánh/đổi thẻ */
function exportAccountJSON(acc) {
  const payload = {
    app: "clash-cards-compare",
    type: "single-account",
    version: EXPORT_FORMAT_VERSION,
    exportedAt: new Date().toISOString(),
    player: state.names[acc],
    counts: state.counts[acc],
  };
  downloadJSON(`${slugify(state.names[acc])}-clash-cards.json`, payload);
}

/** Xuất toàn bộ (cả 2 nick) — dùng làm bản sao lưu / chuyển sang máy khác */
function exportAllJSON() {
  const payload = {
    app: "clash-cards-compare",
    type: "full-backup",
    version: EXPORT_FORMAT_VERSION,
    exportedAt: new Date().toISOString(),
    names: state.names,
    counts: state.counts,
    tradeHistory: state.tradeHistory,
  };
  downloadJSON(
    `clash-cards-backup-${new Date().toISOString().slice(0, 10)}.json`,
    payload,
  );
}

/** Kiểm tra & chuẩn hoá một object counts thô thành counts hợp lệ (đủ key, giá trị 0-3) */
function sanitizeCounts(rawCounts) {
  const clean = {};
  ALL_CARDS.forEach((c) => {
    const v = rawCounts ? rawCounts[c.key] : undefined;
    clean[c.key] =
      typeof v === "number" && v >= 0 && v <= 3 ? Math.round(v) : 0;
  });
  return clean;
}

/** Nhập JSON của 1 nick (do người chơi khác gửi) vào 1 cột được chọn */
function importAccountJSON(acc, file) {
  const reader = new FileReader();
  reader.onload = async (e) => {
    let data;
    try {
      data = JSON.parse(e.target.result);
    } catch (err) {
      showToast(t("alertInvalidJSON"), "error");
      return;
    }

    const rawCounts =
      data.counts &&
      data.counts[acc] !== undefined &&
      data.type === "full-backup"
        ? data.counts[acc]
        : data.counts;

    if (!rawCounts || typeof rawCounts !== "object") {
      showToast(t("alertMissingCounts"), "error");
      return;
    }

    const importedName =
      data.type === "full-backup" ? data.names && data.names[acc] : data.player;
    let applyName = false;
    if (importedName && importedName !== state.names[acc]) {
      applyName = await showConfirm(t("confirmNameUpdate", acc, importedName));
    }

    state.counts[acc] = sanitizeCounts(rawCounts);
    if (applyName) state.names[acc] = importedName;
    state.tradeHistory = [];

    saveState();
    document.getElementById("nameInput-" + acc).value = state.names[acc];
    renderAllCardsVisual();
    updateAllProgress();
    renderTradeSuggestions();
    applyStaticI18n();
    showToast(t("alertImportedAccount", acc === "A" ? "Nick A" : "Nick B"), "success");
  };
  reader.readAsText(file);
}

/** Nhập bản sao lưu đầy đủ (cả 2 nick + tên) */
function importAllJSON(file) {
  const reader = new FileReader();
  reader.onload = async (e) => {
    let data;
    try {
      data = JSON.parse(e.target.result);
    } catch (err) {
      showToast(t("alertInvalidJSON"), "error");
      return;
    }

    if (!data.counts) {
      showToast(t("alertMissingCounts"), "error");
      return;
    }

    if (!(await showConfirm(t("confirmOverwriteAll")))) return;

    ACCOUNTS.forEach((acc) => {
      const rawCounts =
        data.type === "full-backup" ? data.counts[acc] || {} : data.counts;
      state.counts[acc] = sanitizeCounts(rawCounts);
      if (data.names && data.names[acc]) state.names[acc] = data.names[acc];
    });
    state.tradeHistory = Array.isArray(data.tradeHistory)
      ? data.tradeHistory
          .filter(
            (entry) =>
              entry &&
              typeof entry.id === "string" &&
              typeof entry.at === "string" &&
              typeof entry.aCardKey === "string" &&
              typeof entry.bCardKey === "string",
          )
          .slice(0, 50)
      : [];

    saveState();
    ACCOUNTS.forEach(
      (acc) =>
        (document.getElementById("nameInput-" + acc).value = state.names[acc]),
    );
    renderAllCardsVisual();
    updateAllProgress();
    renderTradeSuggestions();
    applyStaticI18n();
    showToast(t("alertImportedAll"), "success");
  };
  reader.readAsText(file);
}

/* wire up buttons + hidden file inputs */
ACCOUNTS.forEach((acc) => {
  document
    .getElementById("btnExport-" + acc)
    .addEventListener("click", () => exportAccountJSON(acc));

  const fileInput = document.getElementById("fileImport-" + acc);
  document
    .getElementById("btnImport-" + acc)
    .addEventListener("click", () => fileInput.click());
  fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) importAccountJSON(acc, file);
    e.target.value = ""; // cho phép chọn lại cùng file lần sau
  });
});

document
  .getElementById("btnExportAll")
  .addEventListener("click", exportAllJSON);
const fileImportAll = document.getElementById("fileImportAll");
document
  .getElementById("btnImportAll")
  .addEventListener("click", () => fileImportAll.click());
fileImportAll.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) importAllJSON(file);
  e.target.value = "";
});

/* ---------------- Init ---------------- */
rerenderEverything();
