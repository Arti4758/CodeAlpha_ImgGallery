const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const images = document.querySelectorAll(".gallery img");
let currentImageIndex = 0;

// Open Lightbox
function openLightbox(img) {
  lightbox.style.display = "flex";
  lightboxImg.src = img.src;
  currentImageIndex = Array.from(images).indexOf(img);
}

// Close Lightbox
function closeLightbox() {
  lightbox.style.display = "none";
}

// Show Next Image
function nextImage(event) {
  event.stopPropagation();
  currentImageIndex = (currentImageIndex + 1) % images.length;
  lightboxImg.src = images[currentImageIndex].src;
}

// Show Previous Image
function prevImage(event) {
  event.stopPropagation();
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentImageIndex].src;
}

// Filter by Member
function filterImages(category) {
  const allImages = document.querySelectorAll(".gallery .image");
  allImages.forEach(img => {
    if (category === "all") {
      img.style.display = "block";
    } else {
      if (img.classList.contains(category)) {
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }
    }
  });
}

// Toggle Music
function toggleMusic() {
  const music = document.getElementById("bg-music");
  const btn = document.getElementById("music-btn");
  if (music.paused) {
    music.play();
    btn.textContent = "🔊 Music On";
  } else {
    music.pause();
    btn.textContent = "🎶 Music";
  }
}
