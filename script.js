// === INTERNATIONALIZATION (i18n) & QUOTES ===
let currentLang = "id"; // Default language: 'id' or 'en'
let currentRecipient = "";
let currentSender = "";

const quotesID = [
  "Percayalah kamu bisa, dan kamu sudah setengah jalan. - Theodore Roosevelt",
  "Kamu adalah alasan aku tersenyum setiap hari.",
  "Tak ada perjuangan yang sia-sia. Sekali kamu melangkah, aku akan tetap berdiri di sini untukmu.",
  "Jangan pernah menyerah pada impianmu, karena impianmu adalah kunci.",
  "Setiap hari adalah kesempatan baru untuk menjadi lebih baik.",
  "Semangat ya untuk aku dan kamu yang sedang berjuang untuk masa depan.",
  "Satu-satunya cara untuk melakukan pekerjaan hebat adalah mencintai apa yang kamu lakukan.",
  "Kamu tidak pernah terlalu tua untuk menetapkan tujuan baru atau mempunyai mimpi baru.",
  "Kesuksesan bukan seberapa tinggi kamu telah mendaki, tetapi seberapa besar dampak positif yang kamu berikan pada dunia.",
  "Batasanmu itu hanyalah imajinasimu.",
  "Dorong dirimu sendiri, karena hanya kamu yang tau batas kemampuanmu.",
  "Hal-hal hebat tidak pernah datang dari zona nyaman.",
  "Mimpikan, Harapkan, Wujudkan.",
  "Kesuksesan tidak akan datang sendiri. Kamu harus mencarinya.",
  "Semakin keras kamu berusaha, semakin besar kepuasan saat kamu mencapainya.",
  "Percayalah, hari buruk tidak akan berlangsung lama.",
  "Tersenyumlah, Jangan pernah meremehkan kekuatan dari sebuah senyuman, karena senyummu adalah senyumku juga.",
];

const quotesEN = [
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "You are the reason I smile every day.",
  "No struggle is ever in vain. Once you take a step, I will always be standing here for you.",
  "Never give up on your dreams, because your dreams are the key.",
  "Every day is a new opportunity to become better.",
  "Stay strong for you and me who are fighting for our future.",
  "The only way to do great work is to love what you do.",
  "You are never too old to set another goal or to dream a new dream.",
  "Success isn't about how high you climb, but how you make a positive difference to the world.",
  "Your limitation—it's only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Success doesn't just find you. You have to go out and get it.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Believe me, bad days will not last forever.",
  "Smile! Never underestimate the power of a smile, because your smile is my happiness too."
];

const dictionary = {
  id: {
    welcome_title: "💖 Motivation Web 💖",
    welcome_sub: "Tulis nama orang tersayang yang ingin kamu beri motivasi!",
    input_recipient_ph: "Nama Orang Tersayang (cth: Eleanor Vivienne Carter)",
    input_sender_ph: "Nama Kamu / Pengirim (cth: Alexander Theodore Bennett)",
    btn_open_web: "Buka Web Motivasi ✨",
    btn_copy_web_link: "Salin Link untuk Si Dia 💌",
    greeting_prefix: "Hai",
    header_sub: "Kamu luar biasa, tetap semangat dan terus bersinar! ❤️",
    music_header: "🎵 Pilih Lagu Kesukaanmu 🎵",
    prev_song: "⏮️ Sebelumnya",
    play_song: "▶️ Mainkan",
    pause_song: "⏸️ Pause",
    next_song: "⏭️ Berikutnya",
    add_song_btn: "➕ Tambah Lagu Kesukaan",
    add_song_modal_title: "🎵 Tambah Lagu Kesukaan 🎵",
    add_song_modal_desc: "Pilih file audio dari HP/Laptop kamu atau masukkan link audio (.mp3)",
    upload_label: "Upload File Audio:",
    or_text: "--- Atau ---",
    song_title_ph: "Judul Lagu (opsional)",
    song_url_ph: "Link Audio URL (https://...mp3)",
    save_song_btn: "Simpan & Putar Lagu 🎶",
    cancel_btn: "Batal",
    quotes_header: "🌟 Kutipan Inspiratif 🌟",
    new_quote_btn: "💖 Kutipan Baru 💖",
    add_quote_btn: "➕ Tambah Kutipan",
    add_quote_modal_title: "🌟 Tambah Kutipan Baru 🌟",
    add_quote_modal_desc: "Tulis kata-kata bijak atau motivasi favoritmu!",
    save_quote_btn: "Simpan & Tampilkan 💖",
    images_header: "✨ Gambar Pemandangan & Kenangan ✨",
    images_text: "Ada pemandangan bagus lohh, siapa tau kamu suka 😄",
    prev_img: "⬅️ Foto Sebelumnya",
    next_img: "Foto Berikutnya ➡️",
    add_img_btn: "📸 Tambah Foto Kamu",
    add_img_modal_title: "📸 Tambah Foto Kamu 📸",
    add_img_modal_desc: "Pilih foto dari HP/Laptop atau masukkan link URL foto",
    upload_img_label: "Upload Foto:",
    save_img_btn: "Simpan Foto 🖼️",
    delete_song_btn: "🗑️ Hapus Lagu",
    delete_quote_btn: "🗑️ Hapus Kutipan",
    delete_img_btn: "🗑️ Hapus Foto",
    motivation_header: "💬 Motivasi For You 💬",
    curhat_header: "📝 Ada Cerita Apa Kamu Hari Ini ??? 📝",
    send_story_btn: "Kirim Ceritamu 💌",
    link_gen_header: "🎁 Buat Link Motivasi Khusus 🎁",
    link_gen_desc: "Ingin mengirimkan ucapan ini ke seseorang? Masukkan namanya di bawah lalu salin linknya!",
    target_name_ph: "Nama Penerima (misal: Budi / Cantik)",
    sender_name_ph: "Nama Kamu / Pengirim (opsional)",
    copy_link_btn: "Salin Link Khusus 🔗"
  },
  en: {
    welcome_title: "💖 Motivation Web 💖",
    welcome_sub: "Write the name of your loved one you want to motivate!",
    input_recipient_ph: "Recipient Name (e.g. Eleanor)",
    input_sender_ph: "Your Name / Sender (e.g. Alexander)",
    btn_open_web: "Open Motivation Web ✨",
    btn_copy_web_link: "Copy Link for Them 💌",
    greeting_prefix: "Hello",
    header_sub: "You are amazing, keep going and keep shining! ❤️",
    music_header: "🎵 Choose Your Favorite Song 🎵",
    prev_song: "⏮️ Previous",
    play_song: "▶️ Play",
    pause_song: "⏸️ Pause",
    next_song: "⏭️ Next",
    add_song_btn: "➕ Add Favorite Song",
    add_song_modal_title: "🎵 Add Favorite Song 🎵",
    add_song_modal_desc: "Choose an audio file from your device or enter an audio URL (.mp3)",
    upload_label: "Upload Audio File:",
    or_text: "--- Or ---",
    song_title_ph: "Song Title (optional)",
    song_url_ph: "Audio Link URL (https://...mp3)",
    save_song_btn: "Save & Play Song 🎶",
    cancel_btn: "Cancel",
    quotes_header: "🌟 Inspirational Quotes 🌟",
    new_quote_btn: "💖 New Quote 💖",
    add_quote_btn: "➕ Add Quote",
    add_quote_modal_title: "🌟 Add New Quote 🌟",
    add_quote_modal_desc: "Write your favorite quote or motivational words!",
    save_quote_btn: "Save & Display 💖",
    images_header: "✨ Scenery & Memories ✨",
    images_text: "Here is some beautiful scenery, hope you like it 😄",
    prev_img: "⬅️ Previous Photo",
    next_img: "Next Photo ➡️",
    add_img_btn: "📸 Add Your Photo",
    add_img_modal_title: "📸 Add Your Photo 📸",
    add_img_modal_desc: "Choose photos from your device or enter an image URL",
    upload_img_label: "Upload Photo:",
    save_img_btn: "Save Photo 🖼️",
    delete_song_btn: "🗑️ Delete Song",
    delete_quote_btn: "🗑️ Delete Quote",
    delete_img_btn: "🗑️ Delete Photo",
    motivation_header: "💬 Motivation For You 💬",
    curhat_header: "📝 How Was Your Day Today ??? 📝",
    send_story_btn: "Send Your Story 💌",
    link_gen_header: "🎁 Create Special Motivation Link 🎁",
    link_gen_desc: "Want to send this message to someone? Type their name below and copy the link!",
    target_name_ph: "Recipient Name (e.g. Alex / Honey)",
    sender_name_ph: "Your Name / Sender (optional)",
    copy_link_btn: "Copy Special Link 🔗"
  }
};

const quoteDisplay = document.getElementById("quote-display");
const newQuoteButton = document.getElementById("new-quote");

function getRandomQuote() {
  const activeQuotes = currentLang === "en" ? quotesEN : quotesID;
  const randomIndex = Math.floor(Math.random() * activeQuotes.length);
  return activeQuotes[randomIndex];
}

let quoteTypingInterval = null;

function showQuoteTypingEffect(quote) {
  if (!quoteDisplay) return;
  if (quoteTypingInterval) {
    clearInterval(quoteTypingInterval);
    quoteTypingInterval = null;
  }
  let index = 0;
  quoteDisplay.textContent = "";
  quoteTypingInterval = setInterval(() => {
    quoteDisplay.textContent += quote[index];
    index++;
    if (index >= quote.length) {
      clearInterval(quoteTypingInterval);
      quoteTypingInterval = null;
    }
  }, 40);
}

if (newQuoteButton) {
  newQuoteButton.addEventListener("click", () => {
    const quote = getRandomQuote();
    showQuoteTypingEffect(quote);
  });
}

// Modal Tambah Kutipan Elements
const openAddQuoteBtn = document.getElementById("open-add-quote");
const closeAddQuoteBtn = document.getElementById("close-add-quote");
const addQuoteModal = document.getElementById("add-quote-modal");
const addQuoteForm = document.getElementById("add-quote-form");
const quoteTextInput = document.getElementById("quote-text-input");
const quoteAuthorInput = document.getElementById("quote-author-input");

if (openAddQuoteBtn) {
  openAddQuoteBtn.addEventListener("click", () => {
    if (addQuoteModal) addQuoteModal.style.display = "flex";
  });
}

if (closeAddQuoteBtn) {
  closeAddQuoteBtn.addEventListener("click", () => {
    if (addQuoteModal) addQuoteModal.style.display = "none";
  });
}

if (addQuoteForm) {
  addQuoteForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = quoteTextInput.value.trim();
    const author = quoteAuthorInput.value.trim();

    if (!text) return;

    const fullQuote = author ? `"${text}" - ${author}` : `"${text}"`;

    if (currentLang === "en") {
      quotesEN.push(fullQuote);
    } else {
      quotesID.push(fullQuote);
    }

    showQuoteTypingEffect(fullQuote);
    addQuoteForm.reset();
    if (addQuoteModal) addQuoteModal.style.display = "none";
  });
}

// Delete Quote Handler
const deleteQuoteBtn = document.getElementById("delete-quote-btn");
if (deleteQuoteBtn) {
  deleteQuoteBtn.addEventListener("click", () => {
    const activeQuotes = currentLang === "en" ? quotesEN : quotesID;
    if (activeQuotes.length <= 1) {
      alert(currentLang === "en" ? "Cannot delete: At least one quote is required!" : "Tidak bisa menghapus: Minimal harus ada 1 kutipan!");
      return;
    }
    const currentText = quoteDisplay ? quoteDisplay.textContent : "";
    const index = activeQuotes.indexOf(currentText);
    if (index !== -1) {
      activeQuotes.splice(index, 1);
    } else {
      activeQuotes.pop();
    }
    showQuoteTypingEffect(getRandomQuote());
  });
}

// Language Switcher Function
function applyLanguage(lang) {
  currentLang = lang;
  const t = dictionary[lang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  const inRec = document.getElementById("input-recipient");
  if (inRec) inRec.placeholder = t.input_recipient_ph;

  const inSend = document.getElementById("input-sender");
  if (inSend) inSend.placeholder = t.input_sender_ph;

  const sTitle = document.getElementById("song-title-input");
  if (sTitle) sTitle.placeholder = t.song_title_ph;

  const sUrl = document.getElementById("song-url-input");
  if (sUrl) sUrl.placeholder = t.song_url_ph;

  const tName = document.getElementById("target-name");
  if (tName) tName.placeholder = t.target_name_ph;

  const sNameIn = document.getElementById("sender-name-input");
  if (sNameIn) sNameIn.placeholder = t.sender_name_ph;

  updateNames(currentRecipient, currentSender);
  showQuoteTypingEffect(getRandomQuote());

  const langToggleBtn = document.getElementById("lang-toggle-btn");
  if (langToggleBtn) {
    langToggleBtn.textContent = lang === "id" ? "🌐 ID | EN" : "🌐 EN | ID";
  }
}

// === GAMBAR SLIDER & MODAL TAMBAH FOTO ===
let currentImageIndex = 0;
let imageInterval = null;

function getSliderImages() {
  return document.querySelectorAll(".image-container img");
}

function showImage(index) {
  const allImages = getSliderImages();
  if (allImages.length === 0) return;

  allImages.forEach((img) => img.classList.remove("active"));
  currentImageIndex = (index + allImages.length) % allImages.length;
  allImages[currentImageIndex].classList.add("active");
}

function startImageSlider() {
  if (imageInterval) clearInterval(imageInterval);
  imageInterval = setInterval(() => {
    showImage(currentImageIndex + 1);
  }, 4000);
}

startImageSlider();

// Controls Foto
const prevImgBtn = document.getElementById("prev-img-btn");
const nextImgBtn = document.getElementById("next-img-btn");
const openAddImgBtn = document.getElementById("open-add-img");
const closeAddImgBtn = document.getElementById("close-add-img");
const deleteImgBtn = document.getElementById("delete-img-btn");
const addImgModal = document.getElementById("add-img-modal");
const addImgForm = document.getElementById("add-img-form");
const imgFileInput = document.getElementById("img-file-input");
const imgUrlInput = document.getElementById("img-url-input");
const imageContainer = document.getElementById("image-slider");

if (prevImgBtn) {
  prevImgBtn.addEventListener("click", () => {
    showImage(currentImageIndex - 1);
    startImageSlider();
  });
}

if (nextImgBtn) {
  nextImgBtn.addEventListener("click", () => {
    showImage(currentImageIndex + 1);
    startImageSlider();
  });
}

if (openAddImgBtn) {
  openAddImgBtn.addEventListener("click", () => {
    addImgModal.style.display = "flex";
  });
}

if (closeAddImgBtn) {
  closeAddImgBtn.addEventListener("click", () => {
    addImgModal.style.display = "none";
  });
}

if (deleteImgBtn) {
  deleteImgBtn.addEventListener("click", () => {
    const allImages = getSliderImages();
    if (allImages.length <= 1) {
      alert(currentLang === "en" ? "Cannot delete: At least one photo is required!" : "Tidak bisa menghapus: Minimal harus ada 1 foto!");
      return;
    }
    const activeImg = allImages[currentImageIndex];
    if (activeImg) {
      activeImg.remove();
    }
    const remaining = getSliderImages();
    showImage(currentImageIndex % remaining.length);
    startImageSlider();
  });
}

if (addImgForm) {
  addImgForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let newImageSrcs = [];

    if (imgFileInput.files && imgFileInput.files.length > 0) {
      for (let i = 0; i < imgFileInput.files.length; i++) {
        const file = imgFileInput.files[i];
        newImageSrcs.push(URL.createObjectURL(file));
      }
    } else if (imgUrlInput.value.trim()) {
      newImageSrcs.push(imgUrlInput.value.trim());
    } else {
      alert(currentLang === "en" ? "Please select photo files or enter an image URL!" : "Silakan pilih file foto atau masukkan link URL foto!");
      return;
    }

    newImageSrcs.forEach((src) => {
      const newImg = document.createElement("img");
      newImg.src = src;
      newImg.alt = "Foto Kustom";
      imageContainer.appendChild(newImg);
    });

    const allImages = getSliderImages();
    showImage(allImages.length - 1);
    startImageSlider();

    addImgForm.reset();
    addImgModal.style.display = "none";
  });
}

// Musik player
const songs = [
  { title: "Lesung Pipi", file: "music/Lesung Pipi.mp3" },
  { title: "Nanti Kita Seperti Ini", file: "music/Nanti Kita Seperti Ini.mp3" },
];

let currentSongIndex = 0;

const songTitleEl = document.getElementById("song-title");
const bgMusic = document.getElementById("bg-music");
const prevSongBtn = document.getElementById("prev-song");
const nextSongBtn = document.getElementById("next-song");
const playSongBtn = document.getElementById("play-song");
const pauseSongBtn = document.getElementById("pause-song");
const deleteSongBtn = document.getElementById("delete-song-btn");

const openAddSongBtn = document.getElementById("open-add-song");
const closeAddSongBtn = document.getElementById("close-add-song");
const addSongModal = document.getElementById("add-song-modal");
const addSongForm = document.getElementById("add-song-form");
const songFileInput = document.getElementById("song-file-input");
const songTitleInput = document.getElementById("song-title-input");
const songUrlInput = document.getElementById("song-url-input");

function updateSongDisplay() {
  const song = songs[currentSongIndex];
  if (song && songTitleEl && bgMusic) {
    songTitleEl.textContent = song.title;
    bgMusic.src = song.file;
  }
}

if (prevSongBtn) {
  prevSongBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updateSongDisplay();
    bgMusic.play().catch(() => {});
  });
}

if (nextSongBtn) {
  nextSongBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updateSongDisplay();
    bgMusic.play().catch(() => {});
  });
}

if (playSongBtn) {
  playSongBtn.addEventListener("click", () => {
    updateSongDisplay();
    bgMusic.play().catch(() => {
      alert("Klik layar terlebih dahulu agar suara bisa diputar di perangkatmu.");
    });
  });
}

if (pauseSongBtn) {
  pauseSongBtn.addEventListener("click", () => {
    bgMusic.pause();
  });
}

if (deleteSongBtn) {
  deleteSongBtn.addEventListener("click", () => {
    if (songs.length <= 1) {
      alert(currentLang === "en" ? "Cannot delete: At least one song is required!" : "Tidak bisa menghapus: Minimal harus ada 1 lagu!");
      return;
    }
    const removedSong = songs[currentSongIndex];
    songs.splice(currentSongIndex, 1);
    currentSongIndex = currentSongIndex % songs.length;
    updateSongDisplay();
    bgMusic.play().catch(() => {});
  });
}

if (openAddSongBtn) {
  openAddSongBtn.addEventListener("click", () => {
    addSongModal.style.display = "flex";
  });
}

if (closeAddSongBtn) {
  closeAddSongBtn.addEventListener("click", () => {
    addSongModal.style.display = "none";
  });
}

if (addSongForm) {
  addSongForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let newSongFile = "";
    let newSongTitle = songTitleInput.value.trim();

    if (songFileInput.files && songFileInput.files[0]) {
      const file = songFileInput.files[0];
      newSongFile = URL.createObjectURL(file);
      if (!newSongTitle) {
        newSongTitle = file.name.replace(/\.[^/.]+$/, "");
      }
    } else if (songUrlInput.value.trim()) {
      newSongFile = songUrlInput.value.trim();
      if (!newSongTitle) {
        newSongTitle = "Lagu Baru";
      }
    } else {
      alert("Silakan pilih file audio atau masukkan link URL lagu!");
      return;
    }

    songs.push({ title: newSongTitle, file: newSongFile });
    currentSongIndex = songs.length - 1;
    updateSongDisplay();
    bgMusic.play().catch(() => {});

    addSongForm.reset();
    addSongModal.style.display = "none";
  });
}

// Sesi Curhat
const form = document.getElementById("story-form");
const statusMessage = document.getElementById("status-message");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .send("service_7jny6tq", "template_9sw8pme", {
        name: form.name.value,
        message: form.message.value,
      })
      .then(
        () => {
          statusMessage.textContent = currentLang === "en" ? "Your message has been sent! 💌" : "Pesanmu sudah terkirim! 💌";
          form.reset();
        },
        (error) => {
          statusMessage.textContent = currentLang === "en" ? "Failed to send. Please try again 😢" : "Gagal mengirim. Coba lagi ya 😢";
          console.error("EmailJS Error:", error);
        }
      );
  });
}

// === FITUR NAMA DINAMIS & GENERATOR LINK ===
const welcomeModal = document.getElementById("welcome-modal");
const welcomeForm = document.getElementById("welcome-form");
const inputRecipient = document.getElementById("input-recipient");
const inputSender = document.getElementById("input-sender");
const btnCopyWebLink = document.getElementById("btn-copy-web-link");
const modalShareStatus = document.getElementById("modal-share-status");

let currentMotivation = "";

function updateNames(recipientName, senderName, customMsg) {
  document.title = "Motivation Web";

  if (recipientName) currentRecipient = recipientName.trim();
  if (senderName) currentSender = senderName.trim();
  if (customMsg !== undefined && customMsg !== null) currentMotivation = customMsg.trim();

  const defaultRecipient = currentLang === "en" ? "Someone" : "Seseorang";
  const defaultSender = "Maulana Rizwan Ahmad";

  const displayRecipient = currentRecipient || defaultRecipient;
  const displaySender = currentSender || defaultSender;

  document.querySelectorAll(".recipient-name").forEach((el) => {
    el.textContent = displayRecipient;
  });

  document.querySelectorAll(".sender-name").forEach((el) => {
    el.textContent = displaySender;
  });

  const motivationParagraph = document.getElementById("motivation-paragraph");
  if (motivationParagraph) {
    if (currentMotivation) {
      motivationParagraph.textContent = currentMotivation;
    } else {
      if (currentLang === "en") {
        motivationParagraph.innerHTML = `Hi <span class="recipient-name">${displayRecipient}</span>, I know you are fighting hard for your future. Stay strong! You are amazing. It's okay if not many people appreciate your struggle right now; keep pushing forward as hard as you can so you can reach where you want to be. Don't lose hope, you are not alone. I will always be right beside you. You can definitely overcome everything, take care of your health <span class="recipient-name">${displayRecipient}</span>. I will always support you in all situations. 🌸🫶🏻`;
      } else {
        motivationParagraph.innerHTML = `Hai <span class="recipient-name">${displayRecipient}</span>, aku tau kamu lagi berjuang untuk masa depanmu. Semangat ya, kamu hebat, ga banyak orang yang mau menghargai perjuangan kamu kan? gapapa, putar lagi rodanya sekuat mungkin supaya kamu bisa berada di posisi yang kamu mau. Jangan patah semangat ya, kamu ga sendirian kok, aku bakal selalu ada di samping kamu, kamu pasti bisa ngelewatin semuanya, jaga kesehatan ya <span class="recipient-name">${displayRecipient}</span>. I will always support you in all situations. 🌸🫶🏻`;
      }
    }
  }

  const footerText = document.getElementById("footer-text");
  if (footerText) {
    if (currentLang === "en") {
      footerText.innerHTML = `Made with lots of love <span id="sender-text">from <span class="sender-name">${displaySender}</span></span> for <span class="recipient-name">${displayRecipient}</span> to make your day bright and full of energy! ❤️`;
    } else {
      footerText.innerHTML = `Dibuat dengan penuh cinta <span id="sender-text">dari <span class="sender-name">${displaySender}</span></span> untuk <span class="recipient-name">${displayRecipient}</span> agar harimu selalu cerah dan penuh semangat! ❤️`;
    }
  }

  const storyMessageInput = document.getElementById("message");
  if (storyMessageInput) {
    storyMessageInput.placeholder = currentLang === "en" ? `Tell your story here ${displayRecipient}! 😊` : `Ceritanya disini ya ${displayRecipient}! 😊`;
  }
}

// === ENCODING / DECODING SHAREABLE LINK PARAMETERS WITH COMPRESSION ===
async function compressString(str) {
  if (!str) return "";
  try {
    if (typeof CompressionStream !== "undefined") {
      const stream = new Blob([str]).stream().pipeThrough(new CompressionStream("deflate-raw"));
      const buffer = await new Response(stream).arrayBuffer();
      const bytes = new Uint8Array(buffer);
      let binString = "";
      bytes.forEach((b) => (binString += String.fromCharCode(b)));
      return "c~" + btoa(binString).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    }
  } catch (e) {}
  return encodeMessageFallback(str);
}

async function decompressString(str) {
  if (!str) return "";
  try {
    if (str.startsWith("c~") && typeof DecompressionStream !== "undefined") {
      let base64 = str.slice(2).replace(/-/g, "+").replace(/_/g, "/");
      while (base64.length % 4 !== 0) {
        base64 += "=";
      }
      const binString = atob(base64);
      const bytes = Uint8Array.from(binString, (c) => c.charCodeAt(0));
      const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
      const buffer = await new Response(stream).arrayBuffer();
      return new TextDecoder().decode(buffer);
    }
  } catch (e) {}
  return decodeMessageFallback(str);
}

function encodeMessageFallback(str) {
  if (!str) return "";
  try {
    const bytes = new TextEncoder().encode(str);
    let binString = "";
    bytes.forEach((b) => (binString += String.fromCharCode(b)));
    return btoa(binString).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  } catch (e) {
    return str;
  }
}

function decodeMessageFallback(str) {
  if (!str) return "";
  try {
    let cleanStr = str.startsWith("c~") ? str.slice(2) : str;
    let base64 = cleanStr.replace(/-/g, "+").replace(/_/g, "/");
    while (base64.length % 4 !== 0) {
      base64 += "=";
    }
    const binString = atob(base64);
    const bytes = Uint8Array.from(binString, (c) => c.charCodeAt(0));
    return new TextDecoder().decode(bytes);
  } catch (e) {
    return str;
  }
}

function decodeLinkParams(encodedStr) {
  try {
    let base64 = encodedStr.replace(/-/g, "+").replace(/_/g, "/");
    while (base64.length % 4 !== 0) {
      base64 += "=";
    }
    const binString = atob(base64);
    const bytes = Uint8Array.from(binString, (c) => c.charCodeAt(0));
    const jsonStr = new TextDecoder().decode(bytes);
    return JSON.parse(jsonStr);
  } catch (e) {
    return null;
  }
}

async function getShortUrl(fullUrl) {
  try {
    const response = await fetch("https://cleanuri.com/api/v1/shorten", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: "url=" + encodeURIComponent(fullUrl)
    });
    if (response.ok) {
      const data = await response.json();
      if (data && data.result_url) return data.result_url;
    }
  } catch (e) {}

  try {
    const response = await fetch(`https://clck.ru/--?url=${encodeURIComponent(fullUrl)}`);
    if (response.ok) {
      const text = await response.text();
      if (text && text.startsWith("http")) return text.trim();
    }
  } catch (e) {}

  return fullUrl;
}

async function buildShareableUrl(to, from, msg, lang) {
  const currentUrl = new URL(window.location.href);
  const searchParams = new URLSearchParams();

  if (to) searchParams.set("to", to);
  if (from) searchParams.set("from", from);
  if (msg) searchParams.set("msg", await compressString(msg));
  if (lang && lang !== "id") searchParams.set("lang", lang);

  const fullUrl = `${currentUrl.origin}${currentUrl.pathname}?${searchParams.toString()}`;
  return await getShortUrl(fullUrl);
}

async function checkUrlParamsAndInit() {
  document.title = "Motivation Web";
  const urlParams = new URLSearchParams(window.location.search);
  const linkGenSection = document.getElementById("link-generator");

  let recipient = urlParams.get("to") || urlParams.get("name");
  let sender = urlParams.get("from");
  let langParam = urlParams.get("lang");
  let rawMsg = urlParams.get("msg") || urlParams.get("message") || urlParams.get("m");
  let msgParam = rawMsg ? await decompressString(rawMsg) : null;

  // Support for payload ?d= parameter (from previous version)
  if (!recipient && urlParams.has("d")) {
    const decoded = decodeLinkParams(urlParams.get("d"));
    if (decoded) {
      recipient = decoded.to || decoded.name;
      sender = decoded.from;
      msgParam = decoded.msg || decoded.message;
      langParam = decoded.lang;
    }
  }

  if (langParam && (langParam === "en" || langParam === "id")) {
    currentLang = langParam;
  }

  if (recipient || msgParam) {
    if (welcomeModal) welcomeModal.style.display = "none";
    if (linkGenSection) linkGenSection.style.display = "none";
    updateNames(recipient, sender, msgParam);
  } else {
    if (welcomeModal) welcomeModal.style.display = "flex";
    if (linkGenSection) linkGenSection.style.display = "block";
  }

  applyLanguage(currentLang);
  updateSongDisplay();
}

// === THEME TOGGLE (DARK MODE / LIGHT MODE) ===
let currentTheme = localStorage.getItem("theme") || "light";

function applyTheme(theme) {
  currentTheme = theme;
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    if (themeToggleBtn) themeToggleBtn.textContent = "☀️ Light";
  } else {
    document.body.classList.remove("dark-mode");
    if (themeToggleBtn) themeToggleBtn.textContent = "🌙 Dark";
  }
  localStorage.setItem("theme", theme);
}

window.addEventListener("DOMContentLoaded", () => {
  checkUrlParamsAndInit();
  applyTheme(currentTheme);

  const langToggleBtn = document.getElementById("lang-toggle-btn");
  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      const nextLang = currentLang === "id" ? "en" : "id";
      applyLanguage(nextLang);
    });
  }

  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const nextTheme = currentTheme === "light" ? "dark" : "light";
      applyTheme(nextTheme);
    });
  }
});

const inputMotivation = document.getElementById("input-motivation");

if (welcomeForm) {
  welcomeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const recipientVal = inputRecipient.value.trim();
    const senderVal = inputSender.value.trim();
    const motivationVal = inputMotivation ? inputMotivation.value.trim() : "";

    if (recipientVal || motivationVal) {
      updateNames(recipientVal, senderVal, motivationVal);
      welcomeModal.style.display = "none";
    }
  });
}

if (btnCopyWebLink) {
  btnCopyWebLink.addEventListener("click", async () => {
    const recipientVal = inputRecipient.value.trim();
    const senderVal = inputSender.value.trim();
    const motivationVal = inputMotivation ? inputMotivation.value.trim() : "";

    if (!recipientVal) {
      alert(currentLang === "en" ? "Please enter your loved one's name first!" : "Silakan masukkan nama orang tersayang terlebih dahulu!");
      inputRecipient.focus();
      return;
    }

    const shareableUrl = await buildShareableUrl(recipientVal, senderVal, motivationVal, currentLang);
    copyToClipboard(shareableUrl, recipientVal, modalShareStatus);
  });
}

const generateBtn = document.getElementById("generate-btn");
const targetNameInput = document.getElementById("target-name");
const senderNameInput = document.getElementById("sender-name-input");
const customMotivationInput = document.getElementById("custom-motivation-input");
const shareStatus = document.getElementById("share-status");

if (generateBtn) {
  generateBtn.addEventListener("click", async () => {
    const targetName = targetNameInput.value.trim();
    const senderName = senderNameInput.value.trim();
    const customMotivation = customMotivationInput ? customMotivationInput.value.trim() : "";

    if (!targetName) {
      alert(currentLang === "en" ? "Please enter recipient name first!" : "Silakan masukkan nama penerima terlebih dahulu!");
      targetNameInput.focus();
      return;
    }

    const shareableUrl = await buildShareableUrl(targetName, senderName, customMotivation, currentLang);
    copyToClipboard(shareableUrl, targetName, shareStatus);
  });
}

function copyToClipboard(text, recipientName, statusElement) {
  const successMsg = currentLang === "en"
    ? `✨ Special link for ${recipientName} copied successfully! Ready to send 💌`
    : `✨ Link khusus untuk ${recipientName} berhasil disalin! Tinggal kirim deh 💌`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      if (statusElement) {
        statusElement.textContent = successMsg;
        statusElement.style.color = "#0077b6";
      }
    }).catch(() => {
      fallbackCopy(text, recipientName, statusElement);
    });
  } else {
    fallbackCopy(text, recipientName, statusElement);
  }
}

function fallbackCopy(text, recipientName, statusElement) {
  const successMsg = currentLang === "en"
    ? `✨ Special link for ${recipientName} copied successfully! Ready to send 💌`
    : `✨ Link khusus untuk ${recipientName} berhasil disalin! Tinggal kirim deh 💌`;

  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand("copy");
    if (statusElement) {
      statusElement.textContent = successMsg;
      statusElement.style.color = "#0077b6";
    }
  } catch (err) {
    prompt(currentLang === "en" ? "Copy this link manually:" : "Salin link ini secara manual:", text);
  }
  document.body.removeChild(textArea);
}



