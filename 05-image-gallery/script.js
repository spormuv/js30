const panels = document.querySelectorAll('.panel');
const audio = document.querySelector('audio');

const toggleOpen = function () {
  this.classList.toggle('open');
  audio.play();
};
const toggleActive = function (e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
};

panels.forEach((item) => item.addEventListener('click', toggleOpen));
panels.forEach((item) => item.addEventListener('transitionend', toggleActive));
