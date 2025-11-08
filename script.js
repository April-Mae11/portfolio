window.addEventListener("load", () => {
  const splash = document.getElementById("splash-screen");
  setTimeout(() => {
    splash.classList.add("hide");
  }, 3000);
});

const fadeItems = document.querySelectorAll('.fade-item');

const fadeOnScroll = () => {
  fadeItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', fadeOnScroll);
window.addEventListener('load', fadeOnScroll);

const fadeVideos = document.querySelectorAll('.fade-video');
const fadeTexts = document.querySelectorAll('.fade-text');

function fadeInElements(elements) {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', () => {
  fadeInElements(fadeVideos);
  fadeInElements(fadeTexts);
});

window.addEventListener('load', () => {
  fadeInElements(fadeVideos);
  fadeInElements(fadeTexts);
});

