'use strict';

const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 200;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;
  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }
  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(253, 132, 31, 0.8),
    ${yWalk * -1}px  ${xWalk}px 0 rgba(62, 109, 156, 0.7)`;
}

hero.addEventListener('mousemove', shadow);
