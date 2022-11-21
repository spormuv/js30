'use strict';

const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.className = 'items active';
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

const removeActive = () => {
  isDown = false;
  slider.className = 'items';
};

slider.addEventListener('mouseleave', removeActive);
slider.addEventListener('mouseup', removeActive);

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});
