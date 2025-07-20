// Kutipan motivasi
const quotes = [
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

const quoteDisplay = document.getElementById("quote-display");
const newQuoteButton = document.getElementById("new-quote");

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function showQuoteTypingEffect(quote) {
  let index = 0;
  quoteDisplay.textContent = "";
  const interval = setInterval(() => {
    quoteDisplay.textContent += quote[index];
    index++;
    if (index >= quote.length) {
      clearInterval(interval);
    }
  }, 50);
}

newQuoteButton.addEventListener("click", () => {
  const quote = getRandomQuote();
  showQuoteTypingEffect(quote);
});

window.addEventListener("DOMContentLoaded", () => {
  showQuoteTypingEffect(getRandomQuote());
});

// Gambar otomatis berganti
const images = document.querySelectorAll(".image-container img");
let currentImage = 0;

function changeImage() {
  images[currentImage].classList.remove("active");
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].classList.add("active");
}

setInterval(changeImage, 4000); // Ganti gambar tiap 4 detik

// Musik player
const songs = [
  { title: "Lesung Pipi", file: "music/Lesung Pipi.mp3" },
  { title: "Nanti Kita seperti Ini", file: "music/Nanti Kita seperti Ini.mp3" },
];

let currentSongIndex = 0;

const songTitleEl = document.getElementById("song-title");
const bgMusic = document.getElementById("bg-music");
const prevSongBtn = document.getElementById("prev-song");
const nextSongBtn = document.getElementById("next-song");
const playSongBtn = document.getElementById("play-song");
const pauseSongBtn = document.getElementById("pause-song");

function updateSongDisplay() {
  const song = songs[currentSongIndex];
  songTitleEl.textContent = song.title;
  bgMusic.src = song.file;
}

prevSongBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongDisplay();
});

nextSongBtn.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongDisplay();
});

playSongBtn.addEventListener("click", () => {
  bgMusic.play().catch(() => {
    alert("Klik layar terlebih dahulu agar suara bisa diputar di perangkatmu.");
  });
});

pauseSongBtn.addEventListener("click", () => {
  bgMusic.pause();
});

window.addEventListener("DOMContentLoaded", () => {
  updateSongDisplay();
});
//Sesi Curhat
const form = document.getElementById("story-form");
const statusMessage = document.getElementById("status-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .send("service_7jny6tq", "template_9sw8pme", {
      name: form.name.value,
      message: form.message.value,
    })
    .then(
      () => {
        statusMessage.textContent = "Pesanmu sudah terkirim! 💌";
        form.reset();
      },
      (error) => {
        statusMessage.textContent = "Gagal mengirim. Coba lagi ya 😢";
        console.error("EmailJS Error:", error);
      }
    );
});
