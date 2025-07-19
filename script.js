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
  "Tersenyumlah, karena senyummu adalah senyumku juga.",
  "Jangan pernah meremehkan kekuatan dari sebuah senyuman.",
];

const quoteDisplay = document.getElementById("quote-display");
const newQuoteButton = document.getElementById("new-quote");

function typeWriter(text, element, speed = 40) {
  element.innerHTML = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

newQuoteButton.addEventListener("click", () => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  typeWriter(random, quoteDisplay);
});

// Tampilkan kutipan awal saat halaman dimuat
window.addEventListener("DOMContentLoaded", () => {
  typeWriter(quotes[0], quoteDisplay);
});

// Ganti gambar otomatis
const images = document.querySelectorAll("#images img");
let currentIndex = 0;

function showNextImage() {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add("active");
}

setInterval(showNextImage, 4000); // ganti setiap 4 detik

window.addEventListener("DOMContentLoaded", () => {
  const bgMusic = document.getElementById("bg-music");

  // Coba mainkan saat load — browser akan blok kalau belum interaksi
  const tryPlay = () => {
    const playPromise = bgMusic.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log("Autoplay dimulai");
        })
        .catch(() => {
          console.log("Autoplay gagal — menunggu interaksi user");
        });
    }
  };

  tryPlay();

  // Jika autoplay gagal, coba lagi setelah klik pertama user
  document.addEventListener(
    "click",
    () => {
      tryPlay();
    },
    { once: true }
  );
});
