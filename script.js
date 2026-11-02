/* ================= PENGATURAN (ISI DI SINI) ================= */
const BANNER_JPG   = "badut yatzz neon.jpg";  // link gambar banner (.jpg)
const BANNER_VIDEO = "https://videotourl.com/videos/1793088513131-a6017994-e030-4cb2-ac0a-60b0e34e0e58.mp4";  // link video banner (.mp4)
const LOADING_JPG = "badut yatzz neon.jpg";  // gambar loading Yatzz  // link gambar halaman loading (.jpg)
const LOADING_VIDEO = "gojo loading screen.mp4";  // memakai gambar loading lokal  // link video halaman loading (.mp4), suara asli video ikut diputar
const LOADING_MS    = 8000; // lama halaman loading (ms) sebelum otomatis lanjut
const BACKGROUND_JPG   = "";  // link gambar latar seluruh halaman (.jpg)
const BACKGROUND_VIDEO = "";  // wallpaper dinonaktifkan
const APPEARANCE_STORAGE_KEY = "yatzzToolsAppearance";
const PALETTES = {
  paperMint: {name:"Paper Mint", bg:"#deeedf", paper:"#e9f4e9", card:"#f8fff6", card2:"#cde3cf", grid:"#83a58a", p:"#f2c879", p2:"#8ac8a0", neon:"#86bfd2", accent:"#d8a4c4", mint:"#8ac8a0", olive:"#e6d887"},
  lavenderLemon: {name:"Lavender Lemon", bg:"#ede3f3", paper:"#f5ebf8", card:"#fff9ff", card2:"#dfcbea", grid:"#9c82ad", p:"#c7a6df", p2:"#f3dc76", neon:"#8fc6d7", accent:"#df9db5", mint:"#98c7a3", olive:"#e5d77b"},
  coralSky: {name:"Coral Sky", bg:"#f7e1d8", paper:"#ffede5", card:"#fff9f5", card2:"#efc7b9", grid:"#ad8175", p:"#ee9278", p2:"#87c5dc", neon:"#87c5dc", accent:"#c6a0d8", mint:"#91c7a0", olive:"#e8d37a"},
  oliveBerry: {name:"Olive Berry", bg:"#e8edcf", paper:"#f0f3dc", card:"#fbfbed", card2:"#d8e1ae", grid:"#909d64", p:"#b6c66e", p2:"#d69ab3", neon:"#91bfd0", accent:"#d69ab3", mint:"#a4c28a", olive:"#b6c66e"}
};
const DEFAULT_APPEARANCE = {palette:null, bannerUrl:"", loadingUrl:""};

// Daftar lagu untuk pemutar musik global
const SONGS = [
  {title:"Sakura", artist:"Rossa", url:"https://www.image2url.com/r2/default/audio/1791675855820-e5eb84d9-31e0-4208-b7fc-a81411049091.m4a"},
  {title:"Pupus", artist:"Dewa 19", url:"https://www.image2url.com/r2/default/audio/1791675918478-ff128a31-4c42-4a42-aff9-6bf036f1779b.mp3"},
  {title:"Aku Milikmu", artist:"Dewa 19", url:"https://www.image2url.com/r2/default/audio/1791676124858-5833baf4-3b44-4615-a810-89b0f0a3de9b.m4a"},
  {title:"Percayalah", artist:"Adgan", url:"https://www.image2url.com/r2/default/audio/1791676476111-f750fe3a-2368-4e87-b10c-c654a9f8a5a9.mp3"}
];

// Link promosi (ditampilkan di menu, tidak lagi jadi syarat wajib)
const WA_CHANNEL_NAME = "Saluran WhatsApp Yatzz Tools"; // nama tampilan
const WA_CHANNEL_URL  = "https://whatsapp.com/channel/0029VbDgwuS42DcgogZs4o33"; // ganti dengan link saluran WA kamu
const TIKTOK_NAME = "@tsumagi.san"; // nama tampilan
const TIKTOK_URL  = "https://www.tiktok.com/@tsumagi.san?_r=1&_t=ZS-9B35KXqYJTm"; // ganti dengan link profil TikTok kamu

// Alamat folder backend PHP (lihat backend/README.txt). Diakhiri tanda "/".
// Kalau index.html dan folder backend diupload bersebelahan di server yang sama,
// biarkan "backend/" saja.

// Nama APIKEY — isi sendiri nilainya
const APIKEY = {
  TIKTOK:    "https://api.nexray.eu.cc/downloader/tiktok?url=",
  INSTAGRAM: "https://api.nexray.eu.cc/downloader/v1/instagram?url=",
  PINTEREST: "",
  SPOTIFY:   "",
  FACEBOOK:  "",
  VERCEL:    "vcp_3x14mXabTXJ31K7OKkJB6WuZyDoujlYDuLxvmE0eQh3o5DLI0n4a3faQ",  // token Vercel untuk Auto Deploy
  AMPREMIUM: "AzaGanteng-i5wqMxr99cpgpo8MRZrJdjGIIOm7kK3y",  // apikey tools AM Premium (send magic link)
  GPT: "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"  // apikey MulyonoGPT
};
const AMPREMIUM_API = "https://axzyedev.biz.id/api/v1/send-magic-link";
// Alamat API downloader. Request: GET ENDPOINT + link
// APIKEY.* bersifat opsional: kalau diisi, dikirim lewat header x-api-key
const ENDPOINT = {
  TIKTOK:    "https://api.nexray.eu.cc/downloader/tiktok?url=",
  INSTAGRAM: "https://api.nexray.eu.cc/downloader/v1/instagram?url=",
  PINTEREST: "https://api.nexray.eu.cc/downloader/pinterest?url=",
  SPOTIFY:   "https://api.nexray.eu.cc/downloader/v1/spotify?url=",
  FACEBOOK:  "https://api.nexray.eu.cc/downloader/facebook?url="
};
/* ============================================================ */

const P = {
  grid:"M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z",
  menu:"M3 6h18M3 12h18M3 18h18",
  x:"M18 6L6 18M6 6l12 12",
  phone:"M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM12 18h.01",
  battery:"M3 8h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zM22 11v2",
  calendar:"M3 4h18v18H3zM16 2v4M8 2v4M3 10h18",
  clock:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 6v6l4 2",
  info:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 16v-4M12 8h.01",
  music:"M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM21 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
  camera:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  pin:"M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  spotify:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM7 9c3-1 7-1 10 1M8 13c2.5-.7 5-.5 7.5 1M9 16.5c2-.5 4-.3 5.5.6",
  fb:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  code:"M16 18l6-6-6-6M8 6l-6 6 6 6",
  shield:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  wifi:"M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M12 20h.01M1.5 9a15 15 0 0 1 21 0",
  rocket:"M16 16l-4-4-4 4M12 12v9M20.4 18.4A5 5 0 0 0 18 9h-1.3A8 8 0 1 0 3 16.3",
  type:"M4 7V4h16v3M9 20h6M12 4v16",
  chat:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  bot:"M12 8V4H8M4 8h16v12H4zM2 14h2M20 14h2M15 13v2M9 13v2",
  users:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8",
  zap:"M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  mail:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6",
  send:"M22 2L11 13M22 2l-7 20-4-9-9-4z",
  gamepad:"M6 12h4M8 10v4M15 13h.01M18 11h.01M17.3 5H6.7a4 4 0 0 0-3.9 3.2l-1.6 7.5A3 3 0 0 0 4.1 19c.9 0 1.7-.4 2.3-1.1L8 16h8l1.6 1.9c.6.7 1.4 1.1 2.3 1.1a3 3 0 0 0 2.9-3.3l-1.6-7.5A4 4 0 0 0 17.3 5z",
  target:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12zM12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",
  sparkle:"M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9zM19 16l.7 1.8 1.8.7-1.8.7L19 21l-.7-1.8-1.8-.7 1.8-.7z",
  image:"M3 3h18v18H3zM8.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM21 15l-5-5L5 21",
  wallet:"M3 6h18v15H3zM3 6l2-3h14l2 3M16 12h5v5h-5a2.5 2.5 0 0 1 0-5z",
  sliders:"M4 6h16M4 12h16M4 18h16M8 4v4M15 10v4M10 16v4",
  qr:"M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h3v3h-3zM20 14v.01M14 20h3M20 17v4",
  dl:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3",
  copy:"M9 9h11v11H9zM5 15H4V4h11v1",
  lock:"M6 10V7a6 6 0 1 1 12 0v3M5 10h14v11H5zM12 14v4",
  login:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3",
  logout:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9",
  key:"M15 7a4 4 0 1 1-4 4M2 22l6-6M11 13l-9 9M17 7l3-3 3 3-3 3",
  crown:"M3 18h18M4 18l-2-9 6 4 4-7 4 7 6-4-2 9",
  whatsapp:"M3 21l1.5-5A8 8 0 1 1 8 19.5zM8 9.5c0 3 3 6 6 6 1 0 2-1 2-2l-3-2-1 1a6 6 0 0 1-3-3l1-1-2-3c-1 0-2 1-2 2z",
  monitor:"M3 4h18v12H3zM8 20h8M12 16v4",
  video:"M15 10l6-4v12l-6-4zM3 6h12v12H3z",
  hash:"M5 9h14M5 15h14M10 3L7 21M17 3l-3 18",
  trace:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 2v4M12 18v4M2 12h4M18 12h4M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
  idcard:"M3 5h18v14H3zM7 9h3v3H7zM7 15h10M14 9h4M14 12h4",
  zip:"M3 3h18v18H3zM12 3v4M12 9v2M12 13v2M12 17v2",
  scissors:"M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12",
  moon:"M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z",
  cloud:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z",
  star:"M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21.1 7 14.2l-5-4.9 6.9-1z",
  check:"M20 6L9 17l-5-5",
  user:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  brain:"M12 2a4 4 0 0 0-4 4 4 4 0 0 0-3 6.5A4 4 0 0 0 7 20h1V8a2 2 0 0 1 4 0v12h1a4 4 0 0 0 2-7.5A4 4 0 0 0 16 6a4 4 0 0 0-4-4z",
  mic:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3zM19 11a7 7 0 0 1-14 0M12 18v4M8 22h8",
  tag:"M20.6 11.9 12.1 3.4a2 2 0 0 0-1.4-.6H4a1 1 0 0 0-1 1v6.7c0 .5.2 1 .6 1.4l8.5 8.5a2 2 0 0 0 2.8 0l5.7-5.7a2 2 0 0 0 0-2.8zM7 7h.01",
  alert:"M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z",
  code2:"M8 9l-3 3 3 3M16 9l3 3-3 3M13 5l-2 14",
  book:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5zM4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5H6.5a2.5 2.5 0 0 0-2.5 2.5z",
  upload:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12",
  home:"M3 11l9-8 9 8M5 10v10h14V10M9 20v-6h6v6",
  play:"M7 4l14 8-14 8z",
  pause:"M7 4h3v16H7zM14 4h3v16h-3z"
};
const ico = n => `<svg class="i" viewBox="0 0 24 24"><path d="${P[n]}"/></svg>`;
const $ = id => document.getElementById(id);
const fill = () => document.querySelectorAll("[data-i]").forEach(e => e.innerHTML = ico(e.dataset.i));
function classifyMediaUrl(value){
  if(typeof value!=="string"||!value.trim()) return null;
  let url;
  try { url=new URL(value.trim()); } catch { return null; }
  if(!["http:","https:"].includes(url.protocol)) return null;
  if(/\.(mp4|webm|ogv|ogg)$/i.test(url.pathname)) return "video";
  if(/\.(png|jpe?g|gif|webp|avif)$/i.test(url.pathname)) return "image";
  return null;
}
function loadAppearanceSettings(){
  try{
    const saved=JSON.parse(localStorage.getItem(APPEARANCE_STORAGE_KEY)||"null");
    if(!saved||typeof saved!=="object") return {...DEFAULT_APPEARANCE};
    return {
      palette:Object.prototype.hasOwnProperty.call(PALETTES,saved.palette)?saved.palette:null,
      bannerUrl:classifyMediaUrl(saved.bannerUrl)?saved.bannerUrl.trim():"",
      loadingUrl:classifyMediaUrl(saved.loadingUrl)?saved.loadingUrl.trim():""
    };
  }catch(error){
    console.warn("Setelan tampilan tersimpan tidak dapat dibaca.",error);
    return {...DEFAULT_APPEARANCE};
  }
}
let appearanceSettings=loadAppearanceSettings();
function persistAppearanceSettings(){
  try{
    localStorage.setItem(APPEARANCE_STORAGE_KEY,JSON.stringify(appearanceSettings));
    return true;
  }catch(error){
    console.error("Setelan tampilan tidak dapat disimpan di browser.",error);
    return false;
  }
}
function setSettingsStatus(message,isError=false){
  const status=$("settingsStatus");
  if(!status) return;
  status.textContent=message;
  status.classList.toggle("error",isError);
}
function applyAppearancePalette(){
  const root=document.documentElement;
  const palette=PALETTES[appearanceSettings.palette];
  if(!palette){
    ["--bg","--paper","--card","--card2","--grid","--p","--p2","--neon","--accent","--mint","--olive"].forEach(name=>root.style.removeProperty(name));
    return;
  }
  Object.entries(palette).forEach(([name,value])=>{
    if(name!=="name") root.style.setProperty("--"+name,value);
  });
}
function applyPalette(id){
  if(!Object.prototype.hasOwnProperty.call(PALETTES,id)) return;
  appearanceSettings.palette=id;
  applyAppearancePalette();
  setSettingsStatus(`Palet ${PALETTES[id].name} diterapkan.`);
  if(!persistAppearanceSettings()) setSettingsStatus("Warna berubah, tetapi tidak dapat disimpan di browser ini.",true);
}
function applyRandomPalette(){
  const options=Object.keys(PALETTES).filter(id=>id!==appearanceSettings.palette);
  applyPalette(options[Math.floor(Math.random()*options.length)]);
}
function setBannerMedia(url){
  const banner=$("banner");
  banner.querySelectorAll(":scope > video, :scope > img").forEach(media=>media.remove());
  if(!url) return;
  const type=classifyMediaUrl(url);
  if(!type) return;
  const media=document.createElement(type==="video"?"video":"img");
  media.src=url;
  if(type==="video"){
    media.autoplay=true;
    media.muted=true;
    media.loop=true;
    media.playsInline=true;
  }else media.alt="Banner";
  banner.prepend(media);
}
function applySavedMedia(){
  setBannerMedia(appearanceSettings.bannerUrl||BANNER_VIDEO||BANNER_JPG);
  $("settingBannerUrl").value=appearanceSettings.bannerUrl;
  $("settingLoadingUrl").value=appearanceSettings.loadingUrl;
}
function saveCustomMedia(kind){
  const input=$(kind==="banner"?"settingBannerUrl":"settingLoadingUrl");
  const value=input.value.trim();
  if(value&&!classifyMediaUrl(value)){
    setSettingsStatus("Gunakan URL langsung berakhiran .jpg, .png, .webp, .gif, .avif, .mp4, .webm, .ogv, atau .ogg.",true);
    input.focus();
    return;
  }
  appearanceSettings[kind==="banner"?"bannerUrl":"loadingUrl"]=value;
  if(kind==="banner") setBannerMedia(value||BANNER_VIDEO||BANNER_JPG);
  setSettingsStatus(kind==="banner"?"Banner berhasil diperbarui.":"Media loading akan digunakan pada pemuatan berikutnya.");
  if(!persistAppearanceSettings()) setSettingsStatus("Media diterapkan, tetapi tidak dapat disimpan di browser ini.",true);
}
function resetAppearanceSettings(){
  appearanceSettings={...DEFAULT_APPEARANCE};
  applyAppearancePalette();
  applySavedMedia();
  try{
    localStorage.removeItem(APPEARANCE_STORAGE_KEY);
    setSettingsStatus("Warna, banner, dan loading kembali ke setelan awal.");
  }catch(error){
    console.error("Setelan tampilan browser tidak dapat direset.",error);
    setSettingsStatus("Setelan direset untuk sesi ini, tetapi penyimpanan browser menolak perubahan.",true);
  }
}
let PROCESS_REQUESTS = 0, PROCESS_TIMER = 0, PROCESS_INPUT_TIMER = 0, PROCESS_ID = 0, PROCESS_OBSERVER = null, CURRENT_TOOL = null;
const revealObs = new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle("show", e.isIntersecting)),
  {threshold:.18, rootMargin:"0px 0px -40px 0px"});

/* Banner */
function initBanner(){ applySavedMedia(); }

/* Video/foto latar seluruh halaman */
(function(){
  const bg = $("bgMedia");
  if (BACKGROUND_VIDEO) bg.innerHTML = `<video src="${BACKGROUND_VIDEO}" autoplay muted loop playsinline></video>`;
  else if (BACKGROUND_JPG) bg.innerHTML = `<img src="${BACKGROUND_JPG}" alt="">`;
})();

/* Info device */
function device(){
  const ua = navigator.userAgent;
  const m = ua.match(/\(([^)]+)\)/);
  let n = (navigator.userAgentData && navigator.userAgentData.platform) || "";
  const a = ua.match(/Android[^;]*;\s*([^;)]+)/);
  if (a) n = a[1].trim();
  else if (/iPhone/.test(ua)) n = "iPhone";
  else if (/iPad/.test(ua)) n = "iPad";
  else if (m) n = m[1].split(";")[0];
  $("dev").textContent = n || "Tidak diketahui";
}
function tick(){
  const d = new Date();
  $("tgl").textContent = d.toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"});
  $("jam").textContent = d.toLocaleTimeString("id-ID",{hour12:false});
}
async function battery(){
  if (!navigator.getBattery) { $("bat").textContent = "Tidak didukung"; return; }
  const b = await navigator.getBattery();
  const u = () => $("bat").textContent = Math.round(b.level*100) + "%" + (b.charging ? " (mengisi)" : "");
  u(); b.onlevelchange = u; b.onchargingchange = u;
}

/* Daftar tools */
const TOOLS = [
  {id:"TIKTOK", n:"Downloader TikTok", i:"music", t:"dl"},
  {id:"INSTAGRAM", n:"Downloader Instagram", i:"camera", t:"dl"},
  {id:"PINTEREST", n:"Downloader Pinterest", i:"pin", t:"dl"},
  {id:"SPOTIFY", n:"Downloader Spotify", i:"spotify", t:"dl"},
  {id:"FACEBOOK", n:"Downloader Facebook", i:"fb", t:"dl"},
  {id:"VIDEY", n:"Videy Downloader", i:"video", t:"videy"},
  {id:"football", n:"Jadwal Sepak Bola", i:"target", t:"api"},
  {id:"gade", n:"Gade Code", i:"code", t:"gade"},
  {id:"virus", n:"Scan Virus", i:"shield", t:"virus"},
  {id:"net", n:"Scan Jaringan", i:"wifi", t:"net"},
  {id:"deploy", n:"Auto Deploy", i:"rocket", t:"deploy", maintenance:true},
  {id:"hd", n:"HD Foto", i:"sparkle", t:"hd"},
  {id:"jpg", n:"Image ke JPG", i:"image", t:"jpg"},
  {id:"qr", n:"QR Code Generator", i:"qr", t:"qr"},
  {id:"brat", n:"Brat Generator", i:"type", t:"brat"},
  {id:"ml", n:"Fake Lobby ML", i:"gamepad", t:"api"},
  {id:"fakedana", n:"Fake Dana", i:"wallet", t:"fakedana"},
  {id:"ff", n:"Fake Lobby FF", i:"target", t:"ff"},
  {id:"qc", n:"QC", i:"chat", t:"api"},
  {id:"iqc", n:"IQC", i:"chat", t:"iqc"},
  {id:"gpt", n:"MulyonoGPT", i:"bot", t:"gpt", maintenance:true},
  {id:"jmk", n:"Twibbon JMK48", i:"users", t:"api"},
  {id:"mc", n:"Music Card", i:"music", t:"api"},
  {id:"ssweb", n:"Screenshot Website", i:"monitor", t:"api"},
  {id:"nikparse", n:"NikParse", i:"idcard", t:"api", premium:true},
  {id:"hdvideo", n:"MP4 HD", i:"video", t:"api"},
  {id:"img2qr", n:"Image to QR", i:"qr", t:"api"},
  {id:"tthash", n:"TikTok Hashtag", i:"hash", t:"api"},
  {id:"trackip", n:"Trace IP", i:"trace", t:"api", premium:true},
  {id:"unblur", n:"Unblur Image", i:"sparkle", t:"api"},
  {id:"usergen", n:"Username Generator", i:"users", t:"api"},
  {id:"webzip", n:"Website to ZIP", i:"zip", t:"api"},
  {id:"stalkff", n:"Stalker Free Fire", i:"target", t:"api"},
  {id:"stalkml", n:"Stalker MLBB", i:"gamepad", t:"api"},
  {id:"stalkig", n:"Stalker Instagram", i:"camera", t:"api"},
  {id:"stalktt", n:"Stalker TikTok", i:"music", t:"api"},
  {id:"stalkrb", n:"Stalker Roblox", i:"users", t:"api"},
  {id:"wamusic", n:"WhatsApp Music", i:"whatsapp", t:"api"},
  {id:"subfinder", n:"Subdomain Finder", i:"trace", t:"api"},
  {id:"tgsticker", n:"Telegram Sticker", i:"send", t:"api"},
  {id:"tempmail", n:"Temp Mail", i:"mail", t:"api", premium:true},
  {id:"animephoto", n:"Anime Photo", i:"sparkle", t:"api"},
  {id:"botakphoto", n:"Botak Photo", i:"scissors", t:"api"},
  {id:"sholat", n:"Jadwal Sholat", i:"moon", t:"api"},
  {id:"cuaca", n:"Cek Cuaca", i:"cloud", t:"api"},
  {id:"pln", n:"Cek Tagihan Listrik", i:"zap", t:"api"},
  {id:"hoki", n:"Nomor Hoki", i:"star", t:"api", premium:true},
  {id:"artinama", n:"Arti Nama", i:"type", t:"api"},
  {id:"zodiak", n:"Zodiak", i:"star", t:"api"},
  {id:"narutext", n:"Naruto Teks Style", i:"type", t:"api"},
  {id:"phtext", n:"Teks Pornhub", i:"type", t:"api", premium:true},
  {id:"applemusic", n:"Apple Music Search", i:"music", t:"api"},
  {id:"douyin", n:"Douyin Film", i:"video", t:"api"},
  {id:"capcut", n:"CapCut Search", i:"scissors", t:"api"},
  {id:"bratanime", n:"Brat Anime", i:"type", t:"api"},
  {id:"balogo", n:"Balogo", i:"tag", t:"api"},
  {id:"msgmaker", n:"Message Maker", i:"alert", t:"api"},
  {id:"ustadz", n:"Ustad Meme", i:"type", t:"api"},
  {id:"nulis", n:"Nulis Buku", i:"book", t:"api"},
  {id:"codesnap", n:"Code Snap", i:"code2", t:"api"},
  {id:"gura", n:"Gura", i:"image", t:"api"},
  {id:"wasted", n:"Teks GTA", i:"image", t:"api"},
  {id:"phishscan", n:"Cek Link Phishing", i:"shield", t:"api"},
  {id:"tebaklirik", n:"Tebak Lirik", i:"mic", t:"game"},
  {id:"asahotak", n:"Asah Otak", i:"brain", t:"game"},
  {id:"unbanwa", n:"Unbanned WhatsApp", i:"whatsapp", t:"unbanwa", premium:true},
  {id:"ampremium", n:"AM Premium", i:"ampremium", maintenance:true},
  {id:"pwgen", n:"Generator Password", i:"lock", t:"pwgen"}
];
TOOLS.find(t=>t.id==="gade").premium = true;
function renderToolsGrid(){
  $("tools").innerHTML = TOOLS.map((t,k) =>
    `<button class="tool reveal${t.maintenance?" maintenance":""}" style="--reveal-delay:${(k%4)*75}ms" data-search="${esc(t.n+" "+t.id)}" onclick="openTool(${k})"${t.maintenance?" disabled aria-label=\""+esc(t.n+" - Maintenance")+"\"":""}><div class="ic">${ico(t.i)}</div>${t.n}${t.maintenance?'<span class="toolStatus">Maintenance</span>':""}</button>`).join("");
  document.querySelectorAll(".tool").forEach(el=>revealObs.observe(el));
  filterTools($("toolSearch").value);
}
function filterTools(query){
  const term = query.trim().toLocaleLowerCase("id-ID");
  let visible = 0;
  document.querySelectorAll(".tool").forEach(el=>{
    const matches = !term || el.dataset.search.toLocaleLowerCase("id-ID").includes(term);
    el.style.display = matches ? "" : "none";
    if (matches) visible++;
  });
  const status = $("toolSearchEmpty");
  status.textContent = "Tools tidak ditemukan.";
  status.style.display = term && !visible ? "block" : "none";
}
renderToolsGrid();

function openTool(k){
  const t = TOOLS[k];
  if (!t || t.maintenance) return;
  CURRENT_TOOL = t;
  const head = (title, ic) => `<div class="mh"><h3>${ico(ic)}${title}</h3><button class="x" onclick="closeM()">${ico("x")}</button></div>${processPanel()}`;
  let h = "";
  if (t.t==="dl") h = head(t.n, t.i)+`<input id="u" placeholder="Tempel link ${t.n.replace('Downloader ','')}"><button class="btn" onclick="runDl('${t.id}')">${ico("dl")}Download</button><div class="out" id="o"></div>`;
  if (t.t==="videy") h = head(t.n, t.i)+`<span class="lbl">url</span><input id="videyUrl" type="url" placeholder="https://videy.co/?id=xxx" onkeydown="if(event.key==='Enter')runVidey()"><button class="btn" onclick="runVidey()">${ico("dl")}Ambil link video</button><div class="out" id="o"></div>`;
  if (t.t==="gade") h = head("Gade Code", "code")+`<input id="u" placeholder="https://contoh.com"><button class="btn" onclick="runGade()">${ico("code")}Ambil HTML</button><textarea id="ta" readonly placeholder="Kode HTML muncul di sini"></textarea><button class="btn g" onclick="copyCode()">${ico("copy")}Salin kode</button><button class="btn g" onclick="saveCode()">${ico("dl")}Simpan .html</button><div class="out" id="o"></div>`;
  if (t.t==="virus") h = head("Scan Virus", "shield")+`<label class="drop" id="dz">${ico("shield")}<b>Pilih file untuk dipindai</b><small>Klik atau tarik file ke sini</small><input type="file" id="f" hidden onchange="runScan(this.files[0])"></label><div class="bar"><i id="pb"></i></div><div class="out" id="o"></div>`;
  if (t.t==="net") h = head("Cek Jaringan", "wifi")+`<div class="big" id="sp">0.0 Mbps</div><div class="bar"><i id="pb"></i></div><button class="btn" id="nb" onclick="runNet()">${ico("wifi")}Mulai tes</button><div class="out" id="o"></div>`;
  if (t.t==="deploy") h = head("Auto Deploy Vercel", "rocket")+`<span class="lbl">Nama project</span><input id="pn" placeholder="contoh: web-yatzz"><span class="lbl">File website</span><label class="drop" id="dz">${ico("rocket")}<b>Drop file di sini</b><small>atau klik untuk memilih (minimal index.html)</small><input type="file" id="f" multiple hidden onchange="addFiles(this.files);this.value=''"></label><div class="chips" id="fl"></div><button class="btn" onclick="runDeploy()">${ico("rocket")}Deploy ke Vercel</button><div class="out" id="o"></div>`;
  if (t.t==="hd") h = head("HD Foto", "sparkle")+`<label class="drop" id="dz">${ico("image")}<b id="dzt">Pilih foto</b><small>Klik atau tarik foto ke sini</small><input type="file" id="f" accept="image/*" hidden onchange="hdPick(this.files[0])"></label><img class="pv" id="pv" alt="Pratinjau"><span class="lbl">Perbesar</span><select id="sc"><option value="2">2x</option><option value="3">3x</option><option value="4">4x</option></select><button class="btn" onclick="runHd()">${ico("sparkle")}Jadikan HD</button><div class="out" id="o"></div>`;
  if (t.t==="jpg") h = head("Image ke JPG", "image")+`<span class="lbl">Kualitas: <b id="qv">90</b>%</span><input type="range" id="q" min="30" max="100" value="90" oninput="$('qv').textContent=this.value"><label class="drop" id="dz">${ico("image")}<b>Pilih gambar</b><small>PNG, WEBP, GIF, BMP (boleh banyak file)</small><input type="file" id="f" accept="image/*" multiple hidden onchange="runJpg(this.files);this.value=''"></label><div class="out" id="o"></div>`;
  if (t.t==="qr") h = head("QR Code Generator", "qr")+`<span class="lbl">Isi QR (teks atau link)</span><input id="qt" placeholder="https://contoh.com"><span class="lbl">Ukuran</span><select id="qs"><option value="256">256 px</option><option value="384" selected>384 px</option><option value="512">512 px</option></select><div class="qr" id="qb"></div><button class="btn" onclick="runQr()">${ico("qr")}Buat QR</button><button class="btn g" id="qd" style="display:none" onclick="saveQr()">${ico("dl")}Unduh PNG</button><div class="out" id="o"></div>`;
  if (t.t==="fakedana") h = head("Fake Dana", t.i)+`<div class="parameterPanel"><strong class="parameterHeading">${ico("sliders")} PARAMETERS</strong><label class="lbl" for="fakeDanaNominal">nominal <b>*</b></label><input id="fakeDanaNominal" type="number" inputmode="numeric" min="1" step="1" value="1000" required aria-required="true" placeholder="1000"></div><button class="btn" id="fakeDanaButton" onclick="drawFakeDana()">${ico(t.i)}Buat simulasi</button><canvas class="cv fakeDanaCanvas" id="cv" role="img" aria-label="Gambar dengan watermark permanen: simulasi, bukan bukti pembayaran" hidden></canvas><div class="acts" id="fakeDanaActs" hidden><button class="btn g" onclick="cvSave()">${ico("dl")}Unduh PNG ber-watermark</button><button class="btn g" onclick="cvOpen()">${ico("image")}Buka penuh</button><button class="btn g" onclick="cvCopy()">${ico("copy")}Salin</button></div><div class="out" id="o" role="status"></div>`;
  const acts = `<div class="acts"><button class="btn g" onclick="cvSave()">${ico("dl")}Unduh</button><button class="btn g" onclick="cvOpen()">${ico("image")}Buka penuh</button><button class="btn g" onclick="cvCopy()">${ico("copy")}Salin</button></div>`;
  CVN = t.id+".png"; LBG = t.t; LB = {};
  if (t.t==="brat") h = head("Brat Generator", "type")+`<span class="lbl">Teks</span><input id="bt" placeholder="ketik teks kamu" oninput="drawBrat()"><span class="lbl">Warna</span><select id="bs" onchange="drawBrat()"><option value="green">Hijau</option><option value="white">Putih</option><option value="blue">Biru</option><option value="black">Hitam</option></select><canvas class="cv" id="cv"></canvas>${acts}<div class="out" id="o"></div>`;
  if (t.t==="ff") h = head("Fake Lobby FF", "target")+`<span class="lbl">Nickname</span><input id="fn" placeholder="Masukkan nickname" onkeydown="if(event.key==='Enter')runFf()"><button class="btn" onclick="runFf()">${ico("target")}Mulai</button><img class="cv" id="fi" alt="Hasil Fake Lobby FF" style="display:none"><div class="acts"><button class="btn g" onclick="ffSave()">${ico("dl")}Unduh</button><button class="btn g" onclick="ffOpen()">${ico("image")}Buka penuh</button><button class="btn g" onclick="ffCopy()">${ico("copy")}Salin URL</button></div><div class="out" id="o"></div>`;
  if (t.t==="api") {
    const c=API_TOOLS[t.id]; AIMG={};
    h = head(t.n, t.i)+(t.id==="ml"?'<div class="parameterPanel"><strong class="parameterHeading">PARAMETERS</strong>':"")+c.fields.map(f => f.img
      ? `<span class="lbl">${f.l}</span><label class="drop" id="dz_${f.k}">${ico("image")}<b id="dzt_${f.k}">Pilih foto</b><small>Klik atau tarik foto ke sini</small><input type="file" id="af_${f.k}" accept="image/*" hidden onchange="afFile('${f.k}',this.files[0])"></label>`
      : f.opts
      ? `<span class="lbl">${f.l}</span><select id="af_${f.k}">${f.opts.map(o=>`<option value="${o}">${o}</option>`).join("")}</select>`
      : `<span class="lbl"${t.id==="ml"?' style="text-transform:none"':""}>${f.l}${t.id==="ml"&&f.req?' <b>*</b>':""}</span><input id="af_${f.k}"${f.type?` type="${f.type}"`:""} placeholder="${f.p||""}"${t.id==="ml"&&f.req?' required aria-required="true"':""} onkeydown="if(event.key==='Enter')runApi('${t.id}')">`
    ).join("")+(t.id==="ml"?"</div>":"")+`<button class="btn" onclick="runApi('${t.id}')">${ico(t.i)}${t.id==="football"?"Tampilkan Jadwal":"Buat"}</button><img class="cv" id="ai" alt="Hasil" style="display:none">${c.kind==="image"?`<div class="acts"><button class="btn g" onclick="apiSave()">${ico("dl")}Unduh</button><button class="btn g" onclick="apiOpen()">${ico("image")}Buka penuh</button><button class="btn g" onclick="apiCopy()">${ico("copy")}Salin URL</button></div>`:""}<div class="out" id="o"></div>`;
  }
  if (t.t==="gpt") h = head("MulyonoGPT", "bot")+`<div class="chat" id="ch"><div class="msg b">Halo, ada yang bisa dibantu?</div></div><div class="snd"><input id="gi" placeholder="Tulis pesan..." onkeydown="if(event.key==='Enter')sendGpt()"><button class="btn" onclick="sendGpt()" aria-label="Kirim">${ico("send")}</button></div>`;
  if (t.t==="iqc") h = head("IQC", "chat")+`<span class="lbl">Teks pesan</span><textarea id="iq" style="min-height:90px;font-family:inherit;font-size:.85rem" placeholder="Ketik teks yang mau dibuat"></textarea><button class="btn" onclick="runIqc()">${ico("chat")}Buat IQC</button><img class="cv" id="iqi" alt="Hasil IQC" style="display:none"><div class="acts"><button class="btn g" onclick="iqSave()">${ico("dl")}Unduh</button><button class="btn g" onclick="iqOpen()">${ico("image")}Buka penuh</button><button class="btn g" onclick="iqCopy()">${ico("copy")}Salin URL</button></div><div class="out" id="o"></div>`;
  if (t.t==="ml") h = head("Fake Lobby ML", t.i)+`<span class="lbl">Nickname</span><input id="ln" placeholder="Nickname" oninput="drawLobby()"><span class="lbl">Level</span><input id="ll" type="number" min="1" value="50" oninput="drawLobby()"><span class="lbl">Rank</span><input id="lr" value="${LC[t.t].rank}" oninput="drawLobby()"><span class="lbl">Foto profil (opsional)</span><input type="file" accept="image/*" onchange="lbFile('avatar',this.files[0])"><span class="lbl">Background (opsional)</span><input type="file" accept="image/*" onchange="lbFile('bg',this.files[0])"><button class="btn" onclick="drawLobby()">${ico("gamepad")}Mulai</button><canvas class="cv" id="cv"></canvas>${acts}<div class="out" id="o"></div>`;
  if (t.t==="game") h = head(t.n, t.i)+`<div id="gq"><div class="spin"></div></div><span class="lbl">Jawaban kamu</span><input id="gans" placeholder="Masukkan jawaban" onkeydown="if(event.key==='Enter')checkGame('${t.id}')"><button class="btn" onclick="checkGame('${t.id}')">${ico("check")}Cek Jawaban</button><button class="btn g" onclick="newGame('${t.id}')">${ico(t.i)}Soal Baru</button><div class="out" id="o"></div>`;
  if (t.t==="unbanwa") h = head(t.n, t.i)+`<p class="authp" style="text-align:left;margin-bottom:12px">Kirim nomor WhatsApp kamu yang dibanned, nanti diproses manual oleh admin lewat email.</p><span class="lbl">Nomor WhatsApp (awali 62)</span><input id="uwn" placeholder="contoh: 6281234567890"><button class="btn" id="uwb" onclick="sendUnbanWa()">${ico("send")}Kirim</button><div class="out" id="o"></div>`;
  if (t.t==="ampremium") h = head(t.n, t.i)+`<span class="lbl">Email</span><input id="amE" type="email" placeholder="nama@email.com"><span class="lbl">URL Redirect</span><input id="amU" placeholder="https://contoh.com"><button class="btn" id="amB" onclick="runAmPremium()">${ico("check")}Verifikasi</button><div class="out" id="o"></div>`;
  if (t.t==="pwgen") h = head(t.n, t.i)+`<span class="lbl">Nama</span><input id="pgN" placeholder="Masukkan nama" onkeydown="if(event.key==='Enter')runPwGen()"><button class="btn" onclick="runPwGen()">${ico(t.i)}Generate</button><input id="pgOut" readonly style="text-align:center;font-weight:700;letter-spacing:1px;display:none"><button class="btn g" id="pgCopy" style="display:none" onclick="copyPw()">${ico("copy")}Salin</button><div class="out" id="o"></div>`;
  $("modal").innerHTML = h; $("ov").classList.add("on");
  resetToolProcess();
  if (t.t==="brat") drawBrat();
  if (t.t==="ml") drawLobby();
  if (t.t==="game") { startToolProcess(); newGame(t.id); }
  if (t.t==="api") {
    API_TOOLS[t.id].fields.filter(f=>f.img).forEach(f=>{
      const z = $("dz_"+f.k);
      z.ondragover = e => {e.preventDefault(); z.classList.add("h")};
      z.ondragleave = () => z.classList.remove("h");
      z.ondrop = e => {e.preventDefault(); z.classList.remove("h"); afFile(f.k, e.dataTransfer.files[0])};
    });
  }
  const dz = $("dz");
  if (dz && ["deploy","virus","hd","jpg"].includes(t.t)){
    FILES = []; HDF = null; renderFiles();
    dz.ondragover = e => {e.preventDefault(); dz.classList.add("h")};
    dz.ondragleave = () => dz.classList.remove("h");
    dz.ondrop = e => {e.preventDefault(); dz.classList.remove("h"); const l = e.dataTransfer.files;
      ({deploy:addFiles, virus:x=>runScan(x[0]), hd:x=>hdPick(x[0]), jpg:runJpg})[t.t](l)};
  }
}
function processPanel(){
  const isApi=CURRENT_TOOL&&["api","dl","gpt","net","deploy","game","ampremium","unbanwa"].includes(CURRENT_TOOL.t);
  return `<section class="processPanel" id="processPanel" aria-live="polite" hidden>
    <h4>Proses</h4>
    <ol>
      <li data-process-step="prepare">Menyiapkan permintaan</li>
      <li data-process-step="request">${isApi?"Menghubungi API":"Menjalankan proses"}</li>
      <li data-process-step="result">Memproses hasil</li>
    </ol>
    <p id="processMessage">Menunggu input...</p>
  </section>`;
}
function setProcess(step,message){
  const panel=$("processPanel");
  if (!panel) return;
  const order=["prepare","request","result"];
  panel.hidden=false;
  panel.classList.toggle("failed",step==="failed");
  panel.classList.toggle("complete",step==="complete");
  panel.querySelectorAll("[data-process-step]").forEach((el,index)=>{
    const activeIndex=order.indexOf(step);
    el.classList.toggle("done",step==="complete"||step==="failed"||index<activeIndex);
    el.classList.toggle("active",index===activeIndex&&step!=="complete"&&step!=="failed");
  });
  $("processMessage").textContent=message;
}
function resetToolProcess(){
  PROCESS_ID++;
  PROCESS_REQUESTS=0;
  clearTimeout(PROCESS_TIMER);
  clearTimeout(PROCESS_INPUT_TIMER);
  if (PROCESS_OBSERVER) PROCESS_OBSERVER.disconnect();
  const panel=$("processPanel");
  if (panel) {
    panel.hidden=true;
    panel.classList.remove("failed","complete");
    panel.querySelectorAll("[data-process-step]").forEach(el=>el.classList.remove("done","active"));
    $("processMessage").textContent="Menunggu input...";
  }
}
function startToolProcess(){
  resetToolProcess();
  const processId=PROCESS_ID;
  const startedAt=Date.now();
  setProcess("prepare","Menyiapkan permintaan...");
  const apiTypes=["api","dl","gade","gpt","net","deploy","game","ampremium","unbanwa","ff","iqc"];
  const usesApi=CURRENT_TOOL&&apiTypes.includes(CURRENT_TOOL.t);
  if (usesApi) setProcess("request","Menghubungi API...");
  else setProcess("result","Memproses data...");
  const modal=$("modal");
  if (modal) {
    PROCESS_OBSERVER=new MutationObserver(()=>{
      if (PROCESS_REQUESTS) return;
      const outputs=[...modal.querySelectorAll("#o,#ch,#gq")];
      if (outputs.some(output=>output.querySelector(".spin"))) return;
      const error=outputs.some(output=>output.querySelector(".err"));
      const hasResult=outputs.some(output=>output.textContent.trim()||output.children.length);
      if (error) {
        setProcess("failed","Proses gagal. Lihat pesan di hasil.");
      } else if (hasResult) {
        setProcess("result","Hasil sedang disiapkan...");
        clearTimeout(PROCESS_TIMER);
        PROCESS_TIMER=window.setTimeout(()=>setProcess("complete","Proses selesai."),450);
      }
    });
    modal.querySelectorAll("#o,#ch,#gq").forEach(el=>
      PROCESS_OBSERVER.observe(el,{childList:true,subtree:true,characterData:true})
    );
  }
  const checkProcess=()=>{
    if(processId!==PROCESS_ID) return;
    const panel=$("processPanel");
    if (!panel||panel.classList.contains("complete")||panel.classList.contains("failed")) return;
    const outputs=modal?[...modal.querySelectorAll("#o,#ch,#gq")]:[];
    const hasSpinner=outputs.some(output=>output.querySelector(".spin"));
    const hasError=outputs.some(output=>output.querySelector(".err"));
    if (hasError) {
      setProcess("failed","Proses gagal. Lihat pesan di hasil.");
    } else if (!PROCESS_REQUESTS&&!hasSpinner&&!usesApi) {
      setProcess("result","Menyelesaikan hasil...");
      PROCESS_TIMER=window.setTimeout(()=>setProcess("complete","Proses selesai."),450);
    } else if (Date.now()-startedAt>=60000) {
      setProcess("failed","Proses terlalu lama. Periksa koneksi atau coba lagi.");
    } else {
      PROCESS_TIMER=window.setTimeout(checkProcess,1000);
    }
  };
  PROCESS_TIMER=window.setTimeout(checkProcess,1200);
}
function closeM(){ resetToolProcess(); $("ov").classList.remove("on"); }
$("ov").onclick = e => { if (e.target.id==="ov") closeM(); };

$("modal").addEventListener("click",e=>{
  const button=e.target.closest("button");
  if (!button||!$("processPanel")) return;
  const action=(button.getAttribute("onclick")||"").match(/^\s*([A-Za-z_$][\w$]*)\s*\(/);
  const isNewGame=action&&action[1]==="newGame";
  if ((!button.classList.contains("g")&&!button.closest(".acts")&&!button.classList.contains("x"))||isNewGame) {
    startToolProcess();
  }
},true);
$("modal").addEventListener("keydown",e=>{
  if(e.key==="Enter"&&e.target.matches("input")&&e.target.getAttribute("onkeydown")) startToolProcess();
},true);
$("modal").addEventListener("input",e=>{
  if(CURRENT_TOOL&&["brat","ml"].includes(CURRENT_TOOL.id)){
    clearTimeout(PROCESS_INPUT_TIMER);
    PROCESS_INPUT_TIMER=window.setTimeout(startToolProcess,300);
  }
},true);
$("modal").addEventListener("change",e=>{
  if(CURRENT_TOOL&&["virus","jpg"].includes(CURRENT_TOOL.t)&&e.target.type==="file") startToolProcess();
},true);
$("modal").addEventListener("drop",()=>{
  if(CURRENT_TOOL&&["virus","jpg"].includes(CURRENT_TOOL.t)) startToolProcess();
},true);
$("modal").addEventListener("load",e=>{
  if(e.target.matches("#ai,#fi,#iqi")) {
    setProcess("complete","Proses selesai.");
    clearTimeout(PROCESS_TIMER);
  }
},true);
$("modal").addEventListener("error",e=>{
  if(e.target.matches("#ai,#fi,#iqi")) setProcess("failed","Gagal memuat hasil.");
},true);
const nativeFetch=window.fetch.bind(window);
window.fetch=async(...args)=>{
  const tracked=Boolean($("processPanel")&&!$("processPanel").hidden);
  const processId=PROCESS_ID;
  if(tracked){
    PROCESS_REQUESTS++;
    setProcess("request","Menghubungi API...");
  }
  try{
    const response=await nativeFetch(...args);
    if(tracked&&processId===PROCESS_ID) setProcess("result","API merespons, sedang memproses hasil...");
    return response;
  }catch(error){
    if(tracked&&processId===PROCESS_ID) setProcess("failed","Tidak dapat terhubung ke API.");
    throw error;
  }finally{
    if(tracked&&processId===PROCESS_ID) PROCESS_REQUESTS=Math.max(0,PROCESS_REQUESTS-1);
  }
};

/* Downloader */
async function runDl(id){
  const o = $("o"), u = $("u").value.trim();
  if (!u) { o.innerHTML = '<span class="err">Link belum diisi.</span>'; return; }
  if (!ENDPOINT[id]) { o.innerHTML = `<span class="err">Isi ENDPOINT.${id} di bagian pengaturan script.</span>`; return; }
  o.innerHTML = '<div class="spin"></div>';
  try {
    const r = await fetch(ENDPOINT[id]+encodeURIComponent(u), APIKEY[id] ? {headers:{"x-api-key":APIKEY[id]}} : {});
    const txt = await r.text();
    if (!r.ok) throw new Error("API membalas status "+r.status);
    const all = [...new Set((txt.match(/https?:\\?\/\\?\/[^"'\s\\]+/g)||[]).map(x=>x.replace(/\\\//g,"/")))];
    const pref = all.filter(x => /\.(mp4|mp3|jpg|jpeg|png|webp|m4a)|download|cdn|media/i.test(x));
    const links = pref.length ? pref : all;
    if (!links.length) throw new Error("Link hasil tidak ditemukan di respons API.");
    o.innerHTML = links.slice(0,8).map((x,k)=>`<a class="btn" href="${x}" target="_blank" rel="noopener" download>${ico("dl")}Unduh hasil ${k+1}</a>`).join("");
  } catch(e){ o.innerHTML = `<span class="err">Gagal: ${e.message}</span>`; }
}

function runVidey(){
  const input=$("videyUrl"), o=$("o");
  let url;
  try{ url=new URL(input.value.trim()); }
  catch(e){ o.innerHTML='<span class="err">Masukkan URL Videy yang valid.</span>'; return; }
  if(!["videy.co","www.videy.co"].includes(url.hostname.toLowerCase())||!["http:","https:"].includes(url.protocol)){
    o.innerHTML='<span class="err">URL harus berasal dari videy.co.</span>'; return;
  }
  const id=url.searchParams.get("id");
  if(!id||!/^[A-Za-z0-9_-]+$/.test(id)){
    o.innerHTML='<span class="err">ID video tidak ditemukan. Gunakan format https://videy.co/?id=xxx.</span>'; return;
  }
  const videoUrl="https://cdn.videy.co/"+encodeURIComponent(id)+".mp4";
  o.innerHTML=`<video class="cv" controls playsinline preload="metadata" src="${videoUrl}" aria-label="Pratinjau video Videy"></video><a class="btn" href="${videoUrl}" target="_blank" rel="noopener" download>${ico("dl")}Buka / unduh video</a>`;
}

/* Gade code */
async function runGade(){
  const o = $("o"); let u = $("u").value.trim();
  if (!u) { o.innerHTML = '<span class="err">Link belum diisi.</span>'; return; }
  if (!/^https?:\/\//.test(u)) u = "https://"+u;
  o.innerHTML = '<div class="spin"></div>';
  try {
    const r = await fetch("https://api.allorigins.win/raw?url="+encodeURIComponent(u));
    if (!r.ok) throw new Error("Status "+r.status);
    const t = await r.text();
    $("ta").value = t; o.innerHTML = `<span class="ok">Berhasil, ${t.length.toLocaleString("id-ID")} karakter.</span>`;
  } catch(e){ o.innerHTML = `<span class="err">Gagal mengambil: ${e.message}</span>`; }
}
function copyCode(){ const t=$("ta"); t.select(); navigator.clipboard && navigator.clipboard.writeText(t.value); $("o").innerHTML='<span class="ok">Kode disalin.</span>'; }
function saveCode(){ const a=document.createElement("a"); a.href=URL.createObjectURL(new Blob([$("ta").value],{type:"text/html"})); a.download="source.html"; a.click(); }

/* Scan virus (analisis lokal: hash + pola mencurigakan) */
async function runScan(f){
  if (!f) return;
  const o = $("o"), pb = $("pb"); pb.style.width="15%";
  o.innerHTML = '<div class="spin"></div>';
  const buf = await f.arrayBuffer(); pb.style.width="50%";
  const hash = [...new Uint8Array(await crypto.subtle.digest("SHA-256", buf))].map(b=>b.toString(16).padStart(2,"0")).join("");
  const txt = new TextDecoder("latin1").decode(buf.slice(0, 3e6));
  const rules = [
    [/eval\s*\(/i,"eval()"],[/document\.write\s*\(unescape/i,"document.write(unescape)"],
    [/powershell(\.exe)?\s+-/i,"perintah PowerShell"],[/cmd(\.exe)?\s+\/c/i,"perintah cmd"],
    [/fromCharCode(\s*\(.*){5,}/i,"obfuscation fromCharCode"],[/WScript\.Shell|ActiveXObject/i,"WScript/ActiveX"],
    [/X5O!P%@AP\[4\\PZX54\(P\^\)7CC\)7\}\$EICAR/,"signature EICAR (file uji antivirus)"],
    [/atob\s*\(.{200,}/i,"base64 panjang di atob()"]
  ];
  const hit = rules.filter(r=>r[0].test(txt)).map(r=>r[1]);
  if (/\.(pdf|jpg|png|doc|docx|txt)\.(exe|bat|scr|js|vbs|apk)$/i.test(f.name)) hit.push("ekstensi ganda menyesatkan");
  if (new Uint8Array(buf.slice(0,2)).join()==="77,90" && !/\.(exe|dll|sys)$/i.test(f.name)) hit.push("header executable pada file non-exe");
  pb.style.width="100%";
  const bad = hit.length;
  o.innerHTML = `<div class="${bad?'err':'ok'}" style="font-weight:600;margin-bottom:6px">${bad?'Mencurigakan: '+hit.length+' temuan':'Tidak ada pola berbahaya terdeteksi'}</div>${bad?'<div>'+hit.join(", ")+'</div>':''}<div style="margin-top:8px">File: ${f.name}<br>Ukuran: ${(f.size/1024).toFixed(1)} KB<br>SHA-256: ${hash}</div><div style="margin-top:8px">Catatan: ini pemindaian pola lokal, bukan pengganti antivirus penuh.</div>`;
}

/* Cek jaringan */
async function runNet(){
  const o=$("o"), sp=$("sp"), pb=$("pb"), nb=$("nb"); nb.disabled=true; pb.style.width="5%"; sp.textContent="Ping...";
  try {
    const pings=[];
    for (let k=0;k<5;k++){ const t=performance.now(); await fetch("https://speed.cloudflare.com/__down?bytes=0&r="+Math.random(),{cache:"no-store"}); pings.push(performance.now()-t); }
    const ping=Math.round(pings.reduce((a,b)=>a+b)/pings.length), jit=Math.round(Math.max(...pings)-Math.min(...pings));
    pb.style.width="25%"; sp.textContent="0.0 Mbps";
    const t0=performance.now(), r=await fetch("https://speed.cloudflare.com/__down?bytes=15000000&r="+Math.random(),{cache:"no-store"});
    const rd=r.body.getReader(); let got=0;
    for(;;){ const {done,value}=await rd.read(); if(done)break; got+=value.length;
      const m=got*8/1e6/((performance.now()-t0)/1000); sp.textContent=m.toFixed(1)+" Mbps"; pb.style.width=(25+got/15e6*75)+"%"; }
    const mbps=got*8/1e6/((performance.now()-t0)/1000);
    const c=navigator.connection;
    o.innerHTML=`Download: <b>${mbps.toFixed(1)} Mbps</b><br>Ping: <b>${ping} ms</b><br>Jitter: <b>${jit} ms</b>${c&&c.effectiveType?'<br>Tipe koneksi: <b>'+c.effectiveType+'</b>':''}`;
  } catch(e){ o.innerHTML='<span class="err">Tes gagal, periksa koneksi internet.</span>'; }
  nb.disabled=false;
}

/* Auto deploy Vercel */
let FILES=[];
const fmt = n => n < 1024 ? n+" B" : n < 1048576 ? (n/1024).toFixed(1)+" KB" : (n/1048576).toFixed(1)+" MB";
function addFiles(l){
  [...l].forEach(f => { if (!FILES.some(x => x.name===f.name)) FILES.push(f); });
  renderFiles();
}
function removeFile(k){ FILES.splice(k,1); renderFiles(); }
function renderFiles(){
  const el = $("fl"); if (!el) return;
  el.innerHTML = FILES.map((f,k) =>
    `<div class="chip">${ico("code")}<span>${f.name}</span><small>${fmt(f.size)}</small><button onclick="removeFile(${k})" aria-label="Hapus">${ico("x")}</button></div>`).join("");
}
const b64 = f => new Promise(r=>{const x=new FileReader(); x.onload=()=>r(x.result.split(",")[1]); x.readAsDataURL(f);});
async function runDeploy(){
  if (!CURRENT_TOOL || CURRENT_TOOL.id!=="deploy" || CURRENT_TOOL.maintenance) return;
  const o=$("o"), name=($("pn").value.trim()||"project-yatzz").toLowerCase().replace(/[^a-z0-9-]/g,"-");
  if (!APIKEY.VERCEL) { o.innerHTML='<span class="err">Isi APIKEY.VERCEL di bagian pengaturan script.</span>'; return; }
  if (!FILES.length) { o.innerHTML='<span class="err">Pilih file dulu (minimal index.html).</span>'; return; }
  if (!FILES.some(f=>f.name.toLowerCase()==="index.html")) { o.innerHTML='<span class="err">File index.html wajib ada agar situs bisa tampil.</span>'; return; }
  o.innerHTML='<div class="spin"></div>';
  try {
    const files = await Promise.all(FILES.map(async f=>({file:f.webkitRelativePath||f.name, data:await b64(f), encoding:"base64"})));
    const r = await fetch("https://api.vercel.com/v13/deployments",{method:"POST",
      headers:{Authorization:"Bearer "+APIKEY.VERCEL,"Content-Type":"application/json"},
      body:JSON.stringify({name, files, projectSettings:{framework:null}, target:"production"})});
    const j = await r.json();
    if (!r.ok) throw new Error((j.error&&j.error.message)||"Status "+r.status);
    let st=j.readyState, url=j.url;
    for (let k=0; k<45 && !["READY","ERROR","CANCELED"].includes(st); k++){
      o.innerHTML=`<div class="spin"></div><div style="margin-top:6px">Status: ${st}...</div>`;
      await new Promise(t=>setTimeout(t,2000));
      const d = await (await fetch("https://api.vercel.com/v13/deployments/"+j.id,{headers:{Authorization:"Bearer "+APIKEY.VERCEL}})).json();
      st=d.readyState||st; if (d.alias && d.alias.length) url=d.alias[0];
    }
    if (st==="ERROR"||st==="CANCELED") throw new Error("Deployment berstatus "+st);
    o.innerHTML=`<span class="ok">Deploy ${st==="READY"?"berhasil":"dikirim (status "+st+")"}.</span><a class="btn" href="https://${url}" target="_blank" rel="noopener">${ico("rocket")}Buka situs</a>`;
  } catch(e){ o.innerHTML=`<span class="err">Gagal: ${e.message}</span>`; }
}

/* Helper gambar */
let HDF = null;
const loadImg = f => new Promise((ok,no)=>{ const i=new Image(); i.onload=()=>ok(i); i.onerror=()=>no(new Error("Gambar tidak bisa dibaca")); i.src=URL.createObjectURL(f); });
const toBlob = (c,type,q) => new Promise(r=>c.toBlob(r,type,q));
const dlLink = (blob,name,label) => `<a class="btn" href="${URL.createObjectURL(blob)}" download="${name}">${ico("dl")}${label}</a>`;

/* HD Foto */
function hdPick(f){
  if (!f) return;
  HDF = f; $("dzt").textContent = f.name;
  const p = $("pv"); p.src = URL.createObjectURL(f); p.style.display = "block";
}
async function runHd(){
  const o = $("o");
  if (!HDF) { o.innerHTML = '<span class="err">Pilih foto dulu.</span>'; return; }
  o.innerHTML = '<div class="spin"></div>';
  try {
    const img = await loadImg(HDF); await new Promise(r=>setTimeout(r,50));
    let s = +$("sc").value, w = img.width*s, h = img.height*s;
    const max = 6000; if (Math.max(w,h) > max) { const k = max/Math.max(w,h); w *= k; h *= k; }
    w = Math.round(w); h = Math.round(h);
    const c = document.createElement("canvas"); c.width = w; c.height = h;
    const x = c.getContext("2d"); x.imageSmoothingEnabled = true; x.imageSmoothingQuality = "high";
    x.drawImage(img,0,0,w,h);
    const id = x.getImageData(0,0,w,h), d = id.data, o2 = new Uint8ClampedArray(d), a = 0.4;
    for (let y=1; y<h-1; y++) for (let xx=1; xx<w-1; xx++) {
      const i = (y*w+xx)*4;
      for (let k=0; k<3; k++) d[i+k] = o2[i+k]*(1+4*a) - a*(o2[i-4+k]+o2[i+4+k]+o2[i-w*4+k]+o2[i+w*4+k]);
    }
    x.putImageData(id,0,0);
    const blob = await toBlob(c,"image/png");
    o.innerHTML = `<span class="ok">Selesai: ${img.width}x${img.height} menjadi ${w}x${h} px (${fmt(blob.size)}).</span>${dlLink(blob,"hd-"+HDF.name.replace(/\.[^.]+$/,"")+".png","Unduh foto HD")}`;
  } catch(e){ o.innerHTML = `<span class="err">Gagal: ${e.message}</span>`; }
}

/* Image ke JPG */
async function runJpg(files){
  const o = $("o"), q = +$("q").value/100; o.innerHTML = '<div class="spin"></div>';
  const out = [];
  for (const f of files) {
    try {
      const img = await loadImg(f), c = document.createElement("canvas");
      c.width = img.width; c.height = img.height;
      const x = c.getContext("2d"); x.fillStyle = "#fff"; x.fillRect(0,0,c.width,c.height); x.drawImage(img,0,0);
      const b = await toBlob(c,"image/jpeg",q);
      out.push(dlLink(b, f.name.replace(/\.[^.]+$/,"")+".jpg", `${f.name} ke JPG (${fmt(b.size)})`));
    } catch(e){ out.push(`<div class="err">${f.name}: ${e.message}</div>`); }
  }
  o.innerHTML = out.join("");
}

/* QR Code */
function runQr(){
  const o = $("o"), t = $("qt").value.trim();
  if (!t) { o.innerHTML = '<span class="err">Isi QR belum diisi.</span>'; return; }
  if (typeof QRCode === "undefined") { o.innerHTML = '<span class="err">Library QR gagal dimuat, periksa koneksi internet.</span>'; return; }
  const b = $("qb"), s = +$("qs").value; b.innerHTML = ""; b.style.display = "block";
  new QRCode(b,{text:t,width:s,height:s,colorDark:"#3b0764",colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.H});
  b.firstChild.style.maxWidth = "100%"; b.firstChild.style.height = "auto";
  $("qd").style.display = "flex"; o.innerHTML = "";
}
function saveQr(){
  const c = $("qb").querySelector("canvas"); if (!c) return;
  const a = document.createElement("a"); a.href = c.toDataURL("image/png"); a.download = "qrcode.png"; a.click();
}

/* Canvas: aksi hasil */
let CVN = "hasil.png", LB = {}, LBG = "ml";
const cvBlob = () => new Promise(r => $("cv").toBlob(r,"image/png"));
function cvSave(){ const a=document.createElement("a"); a.href=$("cv").toDataURL("image/png"); a.download=CVN; a.click(); }
async function cvOpen(){ const w=window.open("about:blank","_blank"); const b=await cvBlob(); if(w) w.location=URL.createObjectURL(b); }
async function cvCopy(){
  const o=$("o");
  try { await navigator.clipboard.write([new ClipboardItem({"image/png":await cvBlob()})]); o.innerHTML='<span class="ok">Gambar disalin.</span>'; }
  catch(e){ o.innerHTML='<span class="err">Salin gagal di browser ini, gunakan tombol Unduh.</span>'; }
}

/* Brat Generator */
const BR = {green:["#8ace00","#000"], white:["#fff","#000"], blue:["#3b5bff","#fff"], black:["#000","#8ace00"]};
function wrapT(x,t,w){
  const out=[];
  t.split("\n").forEach(p=>{ let l=""; p.split(" ").forEach(wd=>{ const s=l?l+" "+wd:wd; if(x.measureText(s).width>w&&l){out.push(l);l=wd}else l=s; }); out.push(l); });
  return out;
}
function drawBrat(){
  const c=$("cv"), x=c.getContext("2d"), [bg,fg]=BR[$("bs").value], t=($("bt").value||"brat").toLowerCase(), S=800, pad=56, W=S-pad*2;
  c.width=c.height=S; x.fillStyle=bg; x.fillRect(0,0,S,S);
  let s=360, L, f;
  for(; s>=16; s-=6){ f=`${s}px "Arial Narrow",Arial,sans-serif`; x.font=f; L=wrapT(x,t,W);
    if(L.length*s*.98<=W && L.every(l=>x.measureText(l).width<=W)) break; }
  x.font=f; x.fillStyle=fg; x.textBaseline="top";
  if("filter" in x) x.filter="blur(2.2px)"; else { x.shadowColor=fg; x.shadowBlur=4; }
  L.forEach((l,k)=>x.fillText(l,pad,pad+k*s*.98));
}

/* Fake Lobby ML / FF (template buatan sendiri, tanpa aset game) */
const LC = {
  ml:{c1:"#071533",c2:"#1f4fa8",ac:"#f6c64a",btn:"MULAI",rank:"Mythical Glory"},
  ff:{c1:"#1a0c04",c2:"#b4520e",ac:"#ffb21c",btn:"START",rank:"Heroic"}
};
function rr(x,a,b,w,h,r){ x.beginPath(); x.moveTo(a+r,b); x.arcTo(a+w,b,a+w,b+h,r); x.arcTo(a+w,b+h,a,b+h,r); x.arcTo(a,b+h,a,b,r); x.arcTo(a,b,a+w,b,r); x.closePath(); }
function cover(x,i,dx,dy,dw,dh){ const s=Math.max(dw/i.width,dh/i.height), w=dw/s, h=dh/s; x.drawImage(i,(i.width-w)/2,(i.height-h)/2,w,h,dx,dy,dw,dh); }
async function lbFile(k,f){ if(!f) return; try { LB[k]=await loadImg(f); drawLobby(); } catch(e){ $("o").innerHTML='<span class="err">Gambar tidak bisa dibaca.</span>'; } }
function drawLobby(){
  const g=LC[LBG], c=$("cv"), x=c.getContext("2d"), W=720, H=1280, cx=W/2, F="'MADE Evolve Sans',Outfit,Arial,sans-serif";
  c.width=W; c.height=H;
  const nick=$("ln").value.trim()||"Nickname", lv=$("ll").value||"1", rk=$("lr").value||g.rank;
  let q;
  if (LB.bg) cover(x,LB.bg,0,0,W,H);
  else {
    q=x.createLinearGradient(0,0,0,H); q.addColorStop(0,g.c1); q.addColorStop(1,g.c2); x.fillStyle=q; x.fillRect(0,0,W,H);
    q=x.createRadialGradient(cx,560,20,cx,560,420); q.addColorStop(0,g.ac+"88"); q.addColorStop(1,g.ac+"00"); x.fillStyle=q; x.fillRect(0,0,W,H);
    x.fillStyle="#ffffff0d";
    for(let k=0;k<6;k++){ x.beginPath(); x.moveTo(k*160-100,0); x.lineTo(k*160-20,0); x.lineTo(k*160+380,H); x.lineTo(k*160+300,H); x.fill(); }
    x.fillStyle="#000000aa"; x.beginPath(); x.arc(cx,470,70,0,7); x.fill(); rr(x,cx-130,550,260,200,60); x.fill();
  }
  x.fillStyle="#000000a0"; x.fillRect(0,0,W,140);
  x.save(); x.beginPath(); x.arc(80,72,50,0,7); x.clip();
  if (LB.avatar) cover(x,LB.avatar,30,22,100,100);
  else { x.fillStyle=g.ac; x.fillRect(0,0,W,140); x.fillStyle="#000"; x.font=`bold 52px ${F}`; x.textAlign="center"; x.textBaseline="middle"; x.fillText(nick[0].toUpperCase(),80,76); }
  x.restore(); x.lineWidth=5; x.strokeStyle=g.ac; x.beginPath(); x.arc(80,72,50,0,7); x.stroke();
  x.textAlign="left"; x.textBaseline="alphabetic"; x.fillStyle="#fff"; x.font=`bold 30px ${F}`; x.fillText(nick.slice(0,16),150,62);
  rr(x,150,76,100,34,17); x.fillStyle=g.ac; x.fill(); x.fillStyle="#000"; x.font=`bold 20px ${F}`; x.fillText("Lv."+lv,164,100);
  [["12,450",g.ac],["3,280","#4cc9f0"]].forEach((v,k)=>{
    const px=400+k*160; rr(x,px,45,140,40,20); x.fillStyle="#00000088"; x.fill();
    x.fillStyle=v[1]; x.beginPath(); x.arc(px+22,65,12,0,7); x.fill();
    x.fillStyle="#fff"; x.font=`bold 20px ${F}`; x.fillText(v[0],px+44,72);
  });
  [60,660].forEach(px=>[420,530,640].forEach((py,k)=>{
    x.fillStyle="#00000088"; x.beginPath(); x.arc(px,py,36,0,7); x.fill(); x.lineWidth=3; x.strokeStyle=g.ac; x.stroke();
    x.fillStyle=g.ac; x.beginPath();
    if(k==0) x.arc(px,py,10,0,7);
    else if(k==1){ x.moveTo(px,py-14); x.lineTo(px+14,py+10); x.lineTo(px-14,py+10); }
    else rr(x,px-13,py-10,26,20,5);
    x.fill();
  }));
  const by=780;
  q=x.createLinearGradient(0,by,0,by+150); q.addColorStop(0,"#fff"); q.addColorStop(1,g.ac); x.fillStyle=q;
  x.beginPath(); x.moveTo(cx,by); x.lineTo(cx+62,by+22); x.lineTo(cx+62,by+82); x.quadraticCurveTo(cx+62,by+125,cx,by+150);
  x.quadraticCurveTo(cx-62,by+125,cx-62,by+82); x.lineTo(cx-62,by+22); x.closePath(); x.fill();
  x.lineWidth=4; x.strokeStyle="#ffffffaa"; x.stroke();
  x.textAlign="center"; x.fillStyle="#000"; x.font=`bold 44px ${F}`; x.fillText(lv,cx,by+88);
  let s=60; do { x.font=`bold ${s}px ${F}`; s-=2; } while(x.measureText(nick).width>620 && s>20);
  x.shadowColor="#000"; x.shadowBlur=12; x.fillStyle="#fff"; x.fillText(nick,cx,by+235); x.shadowBlur=0;
  x.font=`600 28px ${F}`; x.fillStyle=g.ac; x.fillText(rk,cx,by+280);
  q=x.createLinearGradient(0,1070,0,1174); q.addColorStop(0,"#fff"); q.addColorStop(1,g.ac);
  rr(x,200,1070,320,104,52); x.fillStyle=q; x.fill();
  x.fillStyle="#000"; x.font=`bold 40px ${F}`; x.textBaseline="middle"; x.fillText(g.btn,cx,1124);
  [60,130,590,660].forEach(px=>{ x.fillStyle="#00000088"; x.beginPath(); x.arc(px,1124,30,0,7); x.fill(); x.strokeStyle=g.ac; x.lineWidth=3; x.stroke(); });
  x.textBaseline="alphabetic"; x.font=`400 16px ${F}`; x.fillStyle="#ffffff88"; x.fillText("mockup hiburan - Project Tools",cx,1256);
}

/* Fake Lobby FF via API */
const FF_API = "https://api.nexray.eu.cc/maker/fakelobyff?nickname=";
let FFU = "", FFB = null;
async function runFf(){
  const o=$("o"), n=$("fn").value.trim(), im=$("fi");
  if (!n) { o.innerHTML='<span class="err">Nickname belum diisi.</span>'; return; }
  FFU = FF_API+encodeURIComponent(n); FFB = null; im.style.display="none";
  o.innerHTML='<div class="spin"></div>';
  try {
    const r = await fetch(FFU);
    if (!r.ok) throw new Error("Status "+r.status);
    if ((r.headers.get("content-type")||"").includes("image")) { FFB = await r.blob(); im.src = URL.createObjectURL(FFB); }
    else {
      const m = (await r.text()).match(/https?:\\?\/\\?\/[^"'\s\\]+/);
      if (!m) throw new Error("Respons API tidak berisi gambar");
      FFU = m[0].replace(/\\\//g,"/"); im.src = FFU;
    }
    im.style.display="block"; o.innerHTML='<span class="ok">Berhasil dibuat.</span>';
  } catch(e){
    // cadangan: tampilkan langsung dari URL API (jika fetch diblokir CORS)
    FFU = FF_API+encodeURIComponent(n);
    im.onload = () => { im.style.display="block"; o.innerHTML='<span class="ok">Berhasil dibuat.</span>'; };
    im.onerror = () => { o.innerHTML='<span class="err">Gagal membuat gambar. Periksa koneksi atau coba nickname lain.</span>'; };
    im.src = FFU;
  }
}
function ffSave(){
  if (!FFU) return;
  const a=document.createElement("a");
  if (FFB) { a.href=URL.createObjectURL(FFB); a.download="fake-lobby-ff.png"; }
  else { a.href=FFU; a.target="_blank"; a.rel="noopener"; }
  a.click();
}
function ffOpen(){ if (FFU) window.open(FFU,"_blank"); }
function ffCopy(){
  const o=$("o"); if (!FFU) return;
  navigator.clipboard.writeText(FFU).then(()=>o.innerHTML='<span class="ok">URL disalin.</span>',()=>o.innerHTML='<span class="err">Salin gagal.</span>');
}

/* Tools berbasis API nexray: gambar, file (zip/video), atau data JSON */
const NX = "https://api.nexray.eu.cc";
const API_TOOLS = {
  football: {base:NX+"/information/jadwalbola", kind:"data", fields:[]},
  qc:       {base:NX+"/maker/qc", kind:"image", file:"qc.png",
             fields:[{k:"text", l:"text", p:"Halo apa kabar...", req:true},
                     {k:"name", l:"name", p:"NexRay", req:true},
                     {k:"avatar", l:"avatar", p:"https://files.catbox.moe/xxx.jpg", type:"url", req:true},
                     {k:"color", l:"color", p:"Putih", req:true}]},
  ml:       {base:NX+"/maker/fakelobyml", kind:"image", file:"fake-lobby-ml.png",
             fields:[{k:"avatar", l:"avatar", p:"https://files.catbox.moe/xxx.jpg", type:"url", req:true},
                     {k:"nickname", l:"nickname", p:"elrayyxml", req:true}]},
  jmk:      {base:NX+"/canvas/jmk", kind:"image", file:"twibbon-jmk48.png",
             fields:[{k:"url", l:"url", p:"https://files.catbox.moe/xxx.jpg", type:"url", req:true}]},
  mc:       {base:NX+"/canvas/musiccard", kind:"image", file:"music-card.png",
             fields:[{k:"judul", l:"judul", p:"Shape of You", req:true},
                     {k:"nama", l:"nama", p:"Ed Sheeran", req:true},
                     {k:"image_url", l:"image_url", p:"https://files.catbox.moe/xxx.jpg", type:"url", req:true}]},
  ssweb:    {base:NX+"/tools/ssweb", kind:"image", file:"screenshot-website.png",
             fields:[{k:"url", l:"Link website", p:"https://contoh.com", req:true}]},
  nikparse: {base:NX+"/tools/nikparse", kind:"data",
             fields:[{k:"nik", l:"Nomor NIK", p:"16 digit NIK", req:true}]},
  hdvideo:  {base:NX+"/tools/hdvideo", kind:"file", file:"video-hd.mp4",
             fields:[{k:"url", l:"Link video", p:"https://contoh.com/video", req:true}]},
  img2qr:   {base:NX+"/tools/image2qr", kind:"image", file:"image-to-qr.png",
             fields:[{k:"url", l:"url", p:"https://files.catbox.moe/xxx.jpg", type:"url", req:true}]},
  tthash:   {base:NX+"/tools/tiktokhashtags", kind:"data",
             fields:[{k:"hashtags", l:"Hashtag (tanpa #)", p:"contoh: fyp", req:true}]},
  trackip:  {base:NX+"/tools/trackip", kind:"data",
             fields:[{k:"target", l:"IP atau domain", p:"contoh: 8.8.8.8", req:true}]},
  unblur:   {base:NX+"/tools/unblur", kind:"image", file:"unblur.png",
             fields:[{k:"url", l:"Gambar buram", img:true, req:true}]},
  usergen:  {base:NX+"/tools/unblur", kind:"data",
             fields:[{k:"url", l:"Gambar", img:true, req:true}]},
  webzip:   {base:NX+"/tools/webtozip", kind:"file", file:"website.zip",
             fields:[{k:"url", l:"Link website", p:"https://contoh.com", req:true}]},
  stalkff:  {base:NX+"/stalker/freefire", kind:"data",
             fields:[{k:"uid", l:"UID Free Fire", p:"contoh: 123456789", req:true}]},
  stalkml:  {base:NX+"/stalker/mlbb", kind:"data",
             fields:[{k:"id", l:"ID Mobile Legends", p:"contoh: 8018102", req:true},{k:"zone", l:"Zone", p:"contoh: 1234", req:true}]},
  stalkig:  {base:NX+"/stalker/instagram", kind:"data",
             fields:[{k:"username", l:"Username Instagram", p:"tanpa @", req:true}]},
  stalktt:  {base:NX+"/stalker/tiktok", kind:"data",
             fields:[{k:"username", l:"Username TikTok", p:"tanpa @", req:true}]},
  stalkrb:  {base:NX+"/stalker/roblox", kind:"data",
             fields:[{k:"username", l:"Username Roblox", p:"", req:true}]},
  wamusic:  {base:NX+"/tools/whatsmusic", kind:"data",
             fields:[{k:"url", l:"Link status/video WhatsApp", p:"https://...", req:true}]},
  subfinder:{base:NX+"/tools/subdomainfinder", kind:"data",
             fields:[{k:"domain", l:"Domain", p:"contoh: google.com", req:true}]},
  tgsticker:{base:NX+"/tools/telegram-sticker", kind:"data",
             fields:[{k:"url", l:"Link stiker/paket Telegram", p:"https://t.me/addstickers/...", req:true}]},
  tempmail: {base:NX+"/tools/temp-nexray", kind:"data",
             fields:[{k:"email", l:"Email (kosongkan untuk acak)", p:"opsional", req:false}]},
  animephoto:{base:NX+"/ephoto/anime", kind:"image", file:"anime-photo.png",
             fields:[{k:"url", l:"Foto", img:true, req:true}]},
  botakphoto:{base:NX+"/ephoto/botak", kind:"image", file:"botak-photo.png",
             fields:[{k:"url", l:"url", p:"https://files.catbox.moe/xxx.jpg", type:"url", req:true}]},
  sholat:   {base:NX+"/information/jadwalsholat", kind:"data",
             fields:[{k:"kota", l:"Kota", p:"contoh: Jakarta", req:true}]},
  cuaca:    {base:NX+"/information/cuaca", kind:"data",
             fields:[{k:"kota", l:"Kota", p:"contoh: Jakarta", req:true}]},
  pln:      {base:NX+"/information/cektagihanpln", kind:"data",
             fields:[{k:"nopel", l:"Nomor Pelanggan PLN", p:"contoh: 123456789", req:true}]},
  hoki:     {base:NX+"/primbon/nomerhoki", kind:"data",
             fields:[{k:"phone_number", l:"Nomor HP", p:"contoh: 08123456789", req:true}]},
  artinama: {base:NX+"/primbon/artinama", kind:"data",
             fields:[{k:"name", l:"Nama", p:"Masukkan nama", req:true}]},
  zodiak:   {base:NX+"/primbon/zodiak", kind:"data",
             fields:[{k:"zodiak", l:"Zodiak", req:true, opts:["Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"]}]},
  narutext: {base:NX+"/textpro/naruto", kind:"image", file:"naruto-teks.png",
             fields:[{k:"text", l:"Teks", p:"Masukkan teks", req:true}]},
  phtext:   {base:NX+"/textpro/pornhub", kind:"image", file:"teks-pornhub.png",
             fields:[{k:"text1", l:"Teks baris 1", p:"Masukkan teks", req:true},{k:"text2", l:"Teks baris 2", p:"Masukkan teks", req:false}]},
  applemusic:{base:NX+"/search/applemusic", kind:"data",
             fields:[{k:"q", l:"Judul lagu / kata kunci", p:"contoh: nama lagu", req:true}]},
  douyin:   {base:NX+"/search/douyin", kind:"data",
             fields:[{k:"q", l:"Kata kunci film/video", p:"contoh: judul film", req:true}]},
  capcut:   {base:NX+"/search/capcut", kind:"data",
             fields:[{k:"q", l:"Kata kunci template", p:"contoh: template CapCut", req:true}]},
  bratanime:{base:NX+"/maker/bratanime", kind:"image", file:"brat-anime.png",
             fields:[{k:"text", l:"Teks", p:"Masukkan teks", req:true}]},
  balogo:   {base:NX+"/maker/balogo", kind:"image", file:"balogo.png",
             fields:[{k:"text", l:"Teks", p:"Masukkan teks", req:true}]},
  msgmaker: {base:NX+"/maker/msg", kind:"image", file:"message.png",
             fields:[{k:"message", l:"Pesan", p:"Tulis pesan", req:true},
                      {k:"title", l:"Judul", p:"Judul pesan", req:true},
                      {k:"icon", l:"Jenis Ikon", req:true, opts:["WARNING","EROR","INFORMATION","QUESTION"]}]},
  ustadz:   {base:NX+"/maker/ustadz", kind:"image", file:"ustad-meme.png",
             fields:[{k:"text", l:"Teks", p:"Masukkan teks", req:true}]},
  nulis:    {base:NX+"/maker/nulis", kind:"image", file:"nulis-buku.png",
             fields:[{k:"text", l:"Teks", p:"Masukkan teks", req:true}]},
  codesnap: {base:NX+"/maker/codesnap", kind:"image", file:"code-snap.png",
             fields:[{k:"code", l:"Kode/Teks", p:"Tempel kode di sini", req:true}]},
  gura:     {base:NX+"/canvas/gura", kind:"image", file:"gura.png",
             fields:[{k:"url", l:"Foto", img:true, req:true}]},
  wasted:   {base:NX+"/editor/wasted", kind:"image", file:"teks-gta.png",
             fields:[{k:"url", l:"Foto", img:true, req:true}]},
  phishscan:{base:NX+"/tools/webphishing", kind:"data",
             fields:[{k:"url", l:"Link yang mau dicek", p:"https://contoh.com", req:true}]}
};
let AU = "", AB = null, AF = "hasil.bin", AIMG = {};
function afFile(k, f){
  if (!f) return;
  AIMG[k] = f;
  const t = $("dzt_"+k); if (t) t.textContent = f.name;
}
async function uploadImg(file){
  const fd = new FormData();
  fd.append("reqtype", "fileupload");
  fd.append("fileToUpload", file);
  const r = await fetch("https://catbox.moe/user/api.php", {method:"POST", body:fd});
  if (!r.ok) throw new Error("Upload foto gagal (status "+r.status+")");
  const url = (await r.text()).trim();
  if (!/^https?:\/\//.test(url)) throw new Error("Upload foto gagal, coba foto lain");
  return url;
}
function flat(obj,pre=""){
  let rows=[];
  if (obj && typeof obj==="object" && !Array.isArray(obj)){
    for (const k in obj){
      if (["status","author"].includes(k.toLowerCase())) continue;
      const v=obj[k];
      if (v && typeof v==="object") rows=rows.concat(flat(v, pre+k+"."));
      else if (v!==null && v!==undefined && v!=="") rows.push([pre+k, String(v)]);
    }
  }
  return rows.slice(0,24);
}
async function runApi(id){
  const c=API_TOOLS[id], o=$("o"), im=$("ai"), q=new URLSearchParams();
  o.innerHTML='<div class="spin"></div>';
  try {
    for (const f of c.fields) {
      if (f.img) {
        const file = AIMG[f.k];
        if (f.req && !file) { o.innerHTML=`<span class="err">${f.l} belum dipilih.</span>`; return; }
        if (file) { o.innerHTML=`<div class="spin"></div><div style="margin-top:6px">Mengupload foto...</div>`; q.set(f.k, await uploadImg(file)); }
      } else {
        const v=$("af_"+f.k).value.trim();
        if (f.req && !v) { o.innerHTML=`<span class="err">${f.l} belum diisi.</span>`; return; }
        if (v) q.set(f.k, v);
      }
    }
  } catch(e){ o.innerHTML = `<span class="err">${e.message}</span>`; return; }
  AU = c.base+(q.size?"?"+q.toString():""); AB = null; AF = c.file||"hasil"; im.style.display="none";
  o.innerHTML='<div class="spin"></div>';
  try {
    const r = await fetch(AU);
    const ct = r.headers.get("content-type")||"";
    if (!r.ok) throw new Error("Status "+r.status);
    if (c.kind==="image" || ct.includes("image")) {
      AB = await r.blob(); im.src = URL.createObjectURL(AB); im.style.display="block";
      o.innerHTML='<span class="ok">Berhasil dibuat.</span>';
    } else if (c.kind==="file" || ct.includes("zip") || ct.includes("octet-stream") || ct.includes("video") || ct.includes("audio")) {
      AB = await r.blob();
      o.innerHTML=`<span class="ok">Berhasil, file siap diunduh (${fmt(AB.size)}).</span>`;
    } else {
      const raw = await r.text(); let j; try { j = JSON.parse(raw); } catch(e){ j = null; }
      if (id==="football" && j && Array.isArray(j.result)) {
        const matches=j.result.filter(item=>typeof item==="string"&&item.trim());
        if (!matches.length) throw new Error("Jadwal pertandingan belum tersedia.");
        o.innerHTML=`<div class="chips">${matches.map(match=>`<div class="chip"><span>${esc(match)}</span></div>`).join("")}</div>`;
        return;
      }
      const rows = j ? flat(j) : [];
      const links = [...new Set((raw.match(/https?:\/\/[^"'\s\\]+/g)||[]))];
      if (!rows.length && !links.length) throw new Error("Data tidak ditemukan di respons API.");
      o.innerHTML = (rows.length ? `<div class="chips">${rows.map(r2=>`<div class="chip"><span>${r2[0]}</span><small>${r2[1]}</small></div>`).join("")}</div>` : "")
        + links.slice(0,6).map((x,k)=>`<a class="btn g" href="${x}" target="_blank" rel="noopener">${ico("dl")}Buka hasil ${k+1}</a>`).join("");
    }
  } catch(e){
    o.innerHTML = `<span class="err">Gagal: ${e.message}. Kalau terus gagal, kemungkinan API sedang bermasalah atau diblokir CORS oleh browser.</span>`;
  }
}
function apiSave(){
  if (!AB && !AU) return;
  const a=document.createElement("a");
  if (AB) { a.href=URL.createObjectURL(AB); a.download=AF; }
  else { a.href=AU; a.target="_blank"; a.rel="noopener"; }
  a.click();
}
function apiOpen(){ if (AU) window.open(AU,"_blank"); }
function apiCopy(){
  const o=$("o"); if (!AU) return;
  navigator.clipboard.writeText(AU).then(()=>o.innerHTML='<span class="ok">URL disalin.</span>',()=>o.innerHTML='<span class="err">Salin gagal.</span>');
}

function drawFakeDana(){
  return generateFakeDana();
}
async function generateFakeDana(){
  const input=$("fakeDanaNominal"), amount=Number(input.value), o=$("o"), button=$("fakeDanaButton");
  if (!input.value.trim() || !Number.isSafeInteger(amount) || amount<1) {
    input.setCustomValidity("Masukkan nominal bilangan bulat yang valid.");
    input.reportValidity();
    input.setCustomValidity("");
    o.innerHTML='<span class="err">Nominal harus berupa bilangan bulat lebih dari 0.</span>';
    return;
  }
  button.disabled=true; o.innerHTML='<div class="spin"></div><div style="margin-top:6px">Mengambil gambar demo...</div>';
  $("fakeDanaActs").hidden=true;
  const c=$("cv"), x=c.getContext("2d");
  c.hidden=true;
  try{
    const response=await fetch("https://api.nexray.eu.cc/maker/fakedana?nominal="+encodeURIComponent(String(amount)));
    if(!response.ok) throw new Error("API mengembalikan status "+response.status);
    const blob=await response.blob();
    if(!blob.type.startsWith("image/png") && !blob.type.startsWith("image/")) throw new Error("Respons API bukan gambar.");
    if(blob.size>12*1024*1024) throw new Error("Gambar API terlalu besar untuk diproses.");
    const image=await createImageBitmap(blob);
    if(image.width*image.height>25000000) throw new Error("Resolusi gambar API terlalu besar untuk diproses.");
    c.width=image.width; c.height=image.height; x.drawImage(image,0,0); image.close();
    const scale=Math.max(1,c.width/720), bandHeight=Math.max(68,c.width*.13);
    x.save();
    x.fillStyle="rgba(158,20,30,.82)";
    x.fillRect(0,c.height*.43,c.width,bandHeight);
    x.fillStyle="#fff"; x.textAlign="center"; x.textBaseline="middle";
    x.font="900 "+Math.max(18,Math.min(40,c.width*.052))+"px Arial,sans-serif";
    x.fillText("SIMULASI — BUKAN BUKTI PEMBAYARAN",c.width/2,c.height*.43+bandHeight/2,c.width*.94);
    x.translate(c.width/2,c.height/2); x.rotate(-Math.PI/5);
    x.font="900 "+Math.max(22,Math.min(52,c.width*.075))+"px Arial,sans-serif";
    x.lineWidth=Math.max(3,scale*4); x.strokeStyle="rgba(255,255,255,.92)"; x.fillStyle="rgba(145,15,25,.82)";
    const watermark="SIMULASI • BUKAN BUKTI PEMBAYARAN";
    for(let y=-c.height;y<=c.height;y+=Math.max(130,c.width*.28)){
      for(let px=-c.width;px<=c.width;px+=Math.max(340,c.width*.72)){
        x.strokeText(watermark,px,y); x.fillText(watermark,px,y);
      }
    }
    x.restore();
    c.hidden=false; CVN="fake-dana-demo-watermarked.png";
    $("fakeDanaActs").hidden=false;
    o.innerHTML='<span class="ok">Gambar PNG berhasil dibuat dan watermark simulasi sudah ditanam permanen.</span>';
  }catch(error){
    o.innerHTML=`<span class="err">Gagal membuat gambar demo: ${esc(error.message)}. Periksa koneksi atau dukungan CORS API.</span>`;
  }finally{button.disabled=false;}
}

/* Unbanned WhatsApp (VVIP) - kirim nomor lewat email ke admin, diproses manual */
async function sendUnbanWa(){
  const n = $("uwn").value.trim(), o = $("o"), b = $("uwb");
  if (!/^62\d{8,14}$/.test(n)) { o.innerHTML = '<span class="err">Nomor harus diawali 62 dan hanya angka, contoh: 6281234567890.</span>'; return; }
  b.disabled = true; o.innerHTML = '<div class="spin"></div>';
  try {
    const r = await fetch("https://formsubmit.co/ajax/"+CONTACT_EMAIL, {method:"POST",
      headers:{"Content-Type":"application/json", Accept:"application/json"},
      body:JSON.stringify({nomor_whatsapp:n, _subject:"Permintaan Unban WhatsApp - Yatzz Tools", _captcha:"false", _template:"table"})});
    const j = await r.json();
    if (!r.ok || String(j.success)==="false") throw new Error(j.message || "Status "+r.status);
    o.innerHTML = '<span class="ok">Terkirim. Nomor kamu akan diproses admin lewat email.</span>';
    $("uwn").value = "";
  } catch(e){ o.innerHTML = '<span class="err">Gagal mengirim, periksa koneksi internet.</span>'; }
  b.disabled = false;
}

/* AM Premium (send magic link) */
async function runAmPremium(){
  const email = $("amE").value.trim(), url = $("amU").value.trim(), o = $("o"), b = $("amB");
  if (!/^\S+@\S+\.\S+$/.test(email)) { o.innerHTML = '<span class="err">Email belum valid.</span>'; return; }
  if (!url) { o.innerHTML = '<span class="err">URL belum diisi.</span>'; return; }
  b.disabled = true; o.innerHTML = '<div class="spin"></div>';
  try {
    const q = new URLSearchParams({email, url, apikey: APIKEY.AMPREMIUM});
    const r = await fetch(AMPREMIUM_API+"?"+q.toString());
    const raw = await r.text();
    let j; try { j = JSON.parse(raw); } catch(e){ o.innerHTML = `<span class="err">Server membalas: ${raw.slice(0,160)}</span>`; b.disabled=false; return; }
    if (!r.ok || j.ok===false || j.success===false) throw new Error(j.message || "Status "+r.status);
    o.innerHTML = '<span class="ok">Done. Magic link telah dikirim ke email kamu.</span>';
  } catch(e){ o.innerHTML = `<span class="err">Gagal: ${e.message}</span>`; }
  b.disabled = false;
}

/* Generator Password: acak tapi tetap berbau nama pengguna */
let PW_LAST = "";
function runPwGen(){
  const name = $("pgN").value.trim(), o = $("o"), out = $("pgOut"), cp = $("pgCopy");
  if (!name) { o.innerHTML = '<span class="err">Nama belum diisi.</span>'; return; }
  const base = name.replace(/[^a-zA-Z]/g,"").slice(0,6) || "Yatzz";
  const nameTag = base[0].toUpperCase() + base.slice(1).toLowerCase();
  const sym = "!@#$%&*?";
  const rndChar = pool => pool[Math.floor(Math.random()*pool.length)];
  let digits = ""; for (let i=0;i<4;i++) digits += Math.floor(Math.random()*10);
  const symbols = rndChar(sym) + rndChar(sym);
  const pw = nameTag + digits + symbols;
  PW_LAST = pw;
  out.value = pw; out.style.display = "block"; cp.style.display = "inline-flex";
  o.innerHTML = '<span class="ok">Password dibuat, pastikan disimpan di tempat aman.</span>';
}
function copyPw(){
  if (!PW_LAST) return;
  navigator.clipboard.writeText(PW_LAST).then(
    ()=>$("o").innerHTML='<span class="ok">Password disalin.</span>',
    ()=>$("o").innerHTML='<span class="err">Salin gagal.</span>');
}

/* Game tebak-tebakan (Tebak Lirik, Asah Otak) */
const GAME_TOOLS = {
  tebaklirik: NX+"/games/tebaklirik",
  asahotak:   NX+"/games/asahotak"
};
let GAME_STATE = {};
function gameRows(j){
  const d = (j && j.data) || j || {};
  const soal = d.soal || d.pertanyaan || d.lirik || d.question || d.quiz;
  const clue = d.clue || d.petunjuk || d.hint;
  let rows = [];
  if (soal) rows.push(["Soal", soal]);
  if (clue) rows.push(["Clue", clue]);
  if (!rows.length) rows = flat(d);
  return {rows, qid: d.id ?? j.id};
}
function chipsHtml(rows){
  return rows.length ? `<div class="chips">${rows.map(r=>`<div class="chip"><span>${r[0]}</span><small>${r[1]}</small></div>`).join("")}</div>` : "";
}
async function newGame(id){
  const base = GAME_TOOLS[id], gq=$("gq"), o=$("o");
  gq.innerHTML = '<div class="spin"></div>'; o.innerHTML=""; $("gans").value="";
  try {
    const r = await fetch(base);
    const raw = await r.text();
    let j; try { j = JSON.parse(raw); } catch(e){ gq.innerHTML = '<span class="err">Server tidak membalas data soal yang valid.</span>'; return; }
    const {rows, qid} = gameRows(j);
    GAME_STATE[id] = {qid};
    gq.innerHTML = rows.length ? chipsHtml(rows) : '<span class="err">Soal tidak ditemukan di respons API.</span>';
  } catch(e){ gq.innerHTML = '<span class="err">Gagal mengambil soal, periksa koneksi ke API.</span>'; }
}
async function checkGame(id){
  const base = GAME_TOOLS[id], o=$("o"), ans=$("gans").value.trim();
  if (!ans) { o.innerHTML = '<span class="err">Isi jawaban dulu.</span>'; return; }
  o.innerHTML = '<div class="spin"></div>';
  const st = GAME_STATE[id] || {};
  const q = new URLSearchParams(); q.set("jawaban", ans);
  if (st.qid !== undefined && st.qid !== null) q.set("id", st.qid);
  try {
    const r = await fetch(base+"?"+q.toString());
    const raw = await r.text();
    let j; try { j = JSON.parse(raw); } catch(e){ o.innerHTML = `<span class="err">Server membalas: ${raw.slice(0,160)}</span>`; return; }
    const {rows} = gameRows(j);
    o.innerHTML = rows.length ? chipsHtml(rows) : '<span class="ok">Jawaban terkirim.</span>';
  } catch(e){ o.innerHTML = '<span class="err">Gagal mengirim jawaban, periksa koneksi ke API.</span>'; }
}

/* MulyonoGPT via API */
const GPT_API = "https://api.nexray.eu.cc/ai/chatgpt?text=";
function pickText(j){
  if (typeof j==="string") return j;
  if (j && typeof j==="object") for (const k of ["result","response","answer","message","data","text","content"]) if (k in j) { const v=pickText(j[k]); if (v) return v; }
  return "";
}
function addMsg(t,c){ const d=document.createElement("div"); d.className="msg "+c; d.textContent=t; $("ch").appendChild(d); $("ch").scrollTop=1e6; return d; }
async function sendGpt(){
  const i=$("gi"), t=i.value.trim(); if (!t) return;
  i.value=""; addMsg(t,"u"); const b=addMsg("Mengetik...","b");
  try {
    const r = await fetch(GPT_API+encodeURIComponent(t), {headers:{"x-api-key":APIKEY.GPT}});
    if (!r.ok) throw new Error("Status "+r.status);
    const raw = await r.text(); let a;
    try { a = pickText(JSON.parse(raw)); } catch(e){ a = raw; }
    b.textContent = a || raw || "Tidak ada jawaban.";
  } catch(e){ b.textContent = "Gagal: "+e.message+". Periksa koneksi lalu coba lagi."; b.style.color="#fb7185"; }
}

/* IQC via API */
const IQC_API = "https://api.nexray.eu.cc/maker/iqc?text=";
let IQU = "", IQB = null;
async function runIqc(){
  const o=$("o"), n=$("iq").value.trim(), im=$("iqi");
  if (!n) { o.innerHTML='<span class="err">Teks belum diisi.</span>'; return; }
  IQU = IQC_API+encodeURIComponent(n); IQB = null; im.style.display="none";
  o.innerHTML='<div class="spin"></div>';
  try {
    const r = await fetch(IQU);
    if (!r.ok) throw new Error("Status "+r.status);
    if ((r.headers.get("content-type")||"").includes("image")) { IQB = await r.blob(); im.src = URL.createObjectURL(IQB); }
    else {
      const m = (await r.text()).match(/https?:\\?\/\\?\/[^"'\s\\]+/);
      if (!m) throw new Error("Respons API tidak berisi gambar");
      IQU = m[0].replace(/\\\//g,"/"); im.src = IQU;
    }
    im.style.display="block"; o.innerHTML='<span class="ok">Berhasil dibuat.</span>';
  } catch(e){
    // cadangan: tampilkan langsung dari URL API (jika fetch diblokir CORS)
    IQU = IQC_API+encodeURIComponent(n);
    im.onload = () => { im.style.display="block"; o.innerHTML='<span class="ok">Berhasil dibuat.</span>'; };
    im.onerror = () => { o.innerHTML='<span class="err">Gagal membuat gambar. Periksa koneksi atau coba teks lain.</span>'; };
    im.src = IQU;
  }
}
function iqSave(){
  if (!IQU) return;
  const a=document.createElement("a");
  if (IQB) { a.href=URL.createObjectURL(IQB); a.download="iqc.png"; }
  else { a.href=IQU; a.target="_blank"; a.rel="noopener"; }
  a.click();
}
function iqOpen(){ if (IQU) window.open(IQU,"_blank"); }
function iqCopy(){
  const o=$("o"); if (!IQU) return;
  navigator.clipboard.writeText(IQU).then(()=>o.innerHTML='<span class="ok">URL disalin.</span>',()=>o.innerHTML='<span class="err">Salin gagal.</span>');
}


/* Kontak / masukan */
const CONTACT_EMAIL = "jirrrdayat@gmail.com";
async function sendFb(){
  const em=$("fe").value.trim(), msg=$("fm").value.trim(), o=$("fo"), b=$("fb");
  if (!/^\S+@\S+\.\S+$/.test(em)) { o.innerHTML='<span class="err">Email kamu belum valid.</span>'; return; }
  if (msg.length < 5) { o.innerHTML='<span class="err">Masukan terlalu pendek.</span>'; return; }
  b.disabled = true; o.innerHTML='<div class="spin"></div>';
  try {
    const r = await fetch("https://formsubmit.co/ajax/"+CONTACT_EMAIL, {method:"POST",
      headers:{"Content-Type":"application/json", Accept:"application/json"},
      body:JSON.stringify({email:em, message:msg, _subject:"Masukan Project Tools", _captcha:"false", _template:"table"})});
    const j = await r.json();
    if (!r.ok || String(j.success)==="false") throw new Error(j.message || "Status "+r.status);
    o.innerHTML='<span class="ok">Terkirim. Terima kasih atas masukannya.</span>';
    $("fm").value="";
  } catch(e){
    const link = "mailto:"+CONTACT_EMAIL+"?subject="+encodeURIComponent("Masukan Project Tools")+"&body="+encodeURIComponent(msg+"\n\nEmail: "+em);
    o.innerHTML=`<span class="err">Pengiriman otomatis gagal.</span><a class="btn g" style="margin-top:8px" href="${link}">Kirim lewat aplikasi email</a>`;
  }
  b.disabled = false;
}


/* Isi menu: Info App dan Contact Email */
function openMenu(k){
  if (k==="info") { navGo("info"); return; }
  const hd=(t,i)=>`<div class="mh"><h3>${ico(i)}${t}</h3><button class="x" onclick="closeM()">${ico("x")}</button></div>`;
  $("modal").innerHTML = hd("Contact Email","mail")+`<div class="row"><span>Email</span><a class="mail" href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a></div><span class="lbl" style="margin-top:14px">Email kamu</span><input id="fe" type="email" placeholder="nama@email.com" autocomplete="email"><span class="lbl">Masukan</span><textarea id="fm" placeholder="Tulis masukan atau saran untuk tools ini"></textarea><button class="btn" id="fb" onclick="sendFb()">${ico("send")}Kirim masukan</button><div class="out" id="fo"></div>`;
  $("ov").classList.add("on");
}

/* ===== Link kontak dan media sosial pada halaman Info App ===== */
(function initGateNames(){
  $("infoWaChannel").href = WA_CHANNEL_URL;
  $("infoWaChannelText").textContent = "Saluran WhatsApp: " + WA_CHANNEL_NAME;
  $("infoTiktok").href = TIKTOK_URL;
  $("infoTiktokText").textContent = "TikTok: " + TIKTOK_NAME;
})();

/* ===== Navigasi bawah: Tools / Info App ===== */
function navGo(k){
  document.documentElement.classList.toggle("toolsViewActive",k==="tools");
  document.querySelectorAll(".navbtn").forEach(b=>b.classList.toggle("on", b.dataset.nav===k));
  $("viewTools").style.display = k==="tools" ? "" : "none";
  $("viewInfo").style.display = k==="info" ? "" : "none";
  $("viewSettings").style.display = k==="settings" ? "" : "none";
  if (k==="info") $("infoToolCount").textContent = TOOLS.length;
}

function esc(s){ return (s||"").replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }

/* ===== Halaman Loading ===== */
let FINGERPRINT_RAF=0;
let FINGERPRINT_SCANNING=false;
function startFingerprintScan(event){
  const button=$("fingerprintTouch");
  if(FINGERPRINT_SCANNING||$("fingerprintScreen").style.display==="none") return;
  if(event&&event.type==="pointerdown"&&button.setPointerCapture) button.setPointerCapture(event.pointerId);
  if(event&&event.cancelable) event.preventDefault();
  FINGERPRINT_SCANNING=true;
  $("fingerprintStatus").textContent="Scanning jari Anda...";
  $("fingerprintScreen").classList.add("scanning");
  const duration=3000, startedAt=performance.now();
  function step(now){
    if(!FINGERPRINT_SCANNING) return;
    const progress=Math.min(1,(now-startedAt)/duration);
    $("fingerprintProgress").style.width=(progress*100)+"%";
    if(progress<1){
      FINGERPRINT_RAF=requestAnimationFrame(step);
      return;
    }
    FINGERPRINT_SCANNING=false;
    $("fingerprintStatus").textContent="Scanning selesai. Membuka tools...";
    $("fingerprintScreen").style.display="none";
    showLoading();
  }
  FINGERPRINT_RAF=requestAnimationFrame(step);
}
function cancelFingerprintScan(){
  if(!FINGERPRINT_SCANNING) return;
  FINGERPRINT_SCANNING=false;
  cancelAnimationFrame(FINGERPRINT_RAF);
  $("fingerprintScreen").classList.remove("scanning");
  $("fingerprintProgress").style.width="0%";
  $("fingerprintStatus").textContent="Tekan dan tahan gambar sampai pemindaian selesai.";
}
function showLoading(){
  $("musicPlayer").hidden = true;
  const m = $("loadMedia");
  const loadingUrl=appearanceSettings.loadingUrl;
  const loadingType=classifyMediaUrl(loadingUrl);
  const useVideo=loadingType==="video"||(!loadingType&&Boolean(LOADING_VIDEO));
  const mediaUrl=loadingUrl||(useVideo?LOADING_VIDEO:LOADING_JPG);
  m.innerHTML = useVideo&&mediaUrl ? `<video src="${esc(mediaUrl)}" autoplay loop playsinline></video>`
    : mediaUrl ? `<img src="${esc(mediaUrl)}" alt="Loading">` : "";
  const lv = m.querySelector("video");
  if (lv) {
    lv.muted = false;
    lv.volume = 1;
    lv.play().catch(error => {
      console.warn("Browser memblokir autoplay loading dengan suara; video dilanjutkan tanpa suara.", error);
      lv.muted = true;
      lv.play().catch(playError => console.error("Video loading tidak dapat diputar:", playError));
    });
  }
  $("loadGreet").textContent = "Menyiapkan tools...";
  $("loadingPage").style.display = "flex";
  const bar = $("loadBar"); bar.style.width = "0%";
  const t0 = performance.now();
  function step(){
    const p = Math.min(100, (performance.now()-t0)/LOADING_MS*100);
    bar.style.width = p + "%";
    if (p < 100) LOAD_RAF = requestAnimationFrame(step); else skipLoading();
  }
  let LOAD_RAF = requestAnimationFrame(step);
  window._ktSkip = () => cancelAnimationFrame(LOAD_RAF);
}
function skipLoading(){
  if (window._ktSkip) window._ktSkip();
  const lv = $("loadMedia").querySelector("video");
  if (lv) { lv.pause(); lv.removeAttribute("src"); lv.load(); }
  $("loadMedia").innerHTML = "";
  $("loadingPage").style.display = "none";
  showMain();
}
function showMain(){
  $("mainPage").style.display = "block";
  $("musicPlayer").hidden = false;
  navGo("tools");
  $("channelNoticeLink").href = WA_CHANNEL_URL;
  requestAnimationFrame(()=>$("channelNotice").classList.add("on"));
}
function closeChannelNotice(){ $("channelNotice").classList.remove("on"); }

/* ===== Pemutar musik global ===== */
let MUSIC_INDEX=0;
function updateMusicPlayer(){
  const song=SONGS[MUSIC_INDEX], audio=$("globalAudio"), button=$("musicPlay");
  $("musicTrack").textContent=song.title+" — "+song.artist;
  $("musicPlayer").title=song.title+" — "+song.artist;
  $("musicEqualizer").classList.toggle("playing",!audio.paused);
  button.innerHTML=audio.paused
    ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 12 7-12 7z"/></svg>'
    : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h4v14H7zM15 5h4v14h-4z"/></svg>';
  button.setAttribute("aria-label",audio.paused?"Putar musik":"Jeda musik");
  button.title=audio.paused?"Putar":"Jeda";
}
function initMusicPlayer(){
  const audio=$("globalAudio");
  audio.src=SONGS[MUSIC_INDEX].url;
  audio.addEventListener("play",updateMusicPlayer);
  audio.addEventListener("pause",updateMusicPlayer);
  audio.addEventListener("ended",()=>changeMusic(1,true));
  audio.addEventListener("error",()=>{
    $("musicTrack").textContent="Lagu tidak dapat diputar: "+SONGS[MUSIC_INDEX].title;
  });
  updateMusicPlayer();
}
function toggleMusic(){
  const audio=$("globalAudio");
  if(!audio.paused){ audio.pause(); return; }
  audio.play().catch(error=>{
    console.error("Musik Yatzz tidak dapat diputar:",error);
    $("musicTrack").textContent="Tidak dapat memutar "+SONGS[MUSIC_INDEX].title;
  });
}
function changeMusic(direction,autoplay){
  const audio=$("globalAudio"), shouldPlay=autoplay===true || (autoplay!==false&&!audio.paused);
  MUSIC_INDEX=(MUSIC_INDEX+direction+SONGS.length)%SONGS.length;
  audio.src=SONGS[MUSIC_INDEX].url;
  audio.load();
  updateMusicPlayer();
  if(shouldPlay) audio.play().catch(error=>{
    console.error("Musik Yatzz tidak dapat diputar:",error);
    $("musicTrack").textContent="Tidak dapat memutar "+SONGS[MUSIC_INDEX].title;
  });
}

fill(); device(); tick(); battery(); initMusicPlayer(); initBanner(); applyAppearancePalette(); setInterval(tick,1000);
