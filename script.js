const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".slider-dot");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let current = 0;
let timer;

function showSlide(index) {
  current = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle("active", i === current));
  dots.forEach((dot, i) => dot.classList.toggle("active", i === current));
}

function nextSlide() {
  showSlide(current + 1);
}

function previousSlide() {
  showSlide(current - 1);
}

function restartTimer() {
  clearInterval(timer);
  timer = setInterval(nextSlide, 4500);
}

next.addEventListener("click", () => {
  nextSlide();
  restartTimer();
});

prev.addEventListener("click", () => {
  previousSlide();
  restartTimer();
});

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    showSlide(Number(dot.dataset.slide));
    restartTimer();
  });
});

restartTimer();
