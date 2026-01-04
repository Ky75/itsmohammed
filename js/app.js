let currentPage = 0;
const container = document.querySelector('.pages');
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;

let startX = 0;
let isDragging = false;

const goToPage = (index) => {
  if (index < 0 || index >= totalPages) return;
  currentPage = index;
  pages[currentPage].scrollIntoView({ behavior: 'smooth', inline: 'start' });
};

document.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX;
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
});

document.addEventListener('mouseup', (e) => {
  if (!isDragging) return;
  isDragging = false;
  const diffX = startX - e.pageX;
  if (Math.abs(diffX) > 50) {
    if (diffX > 0) goToPage(currentPage + 1);
    else goToPage(currentPage - 1);
  }
});

document.addEventListener('touchstart', (e) => {
  startX = e.touches[0].pageX;
});

document.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].pageX;
  const diffX = startX - endX;
  if (Math.abs(diffX) > 50) {
    if (diffX > 0) goToPage(currentPage + 1);
    else goToPage(currentPage - 1);
  }
});
