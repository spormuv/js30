'use strict';

const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function condition(a, b) {
  if (a === 0) {
    b.style.transition = 'none';
  } else {
    b.style.transition = 'all 0.05s';
    b.style.transitionTimingFunction = 'cubic-bezier(0.1, 2.7, 0.58, 1)';
  }
}

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegree = (seconds / 60) * 360 + 90;
  condition(seconds, secondHand);
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;

  const mins = now.getMinutes();
  const minsDegree = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  condition(mins, minHand);
  minHand.style.transform = `rotate(${minsDegree}deg)`;

  const hours = now.getHours();
  const hoursDegree = (hours / 12) * 360 + (mins / 60) * 30 + 90;
  condition(hours, hourHand);
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;

  console.log(`${hours} : ${mins} : ${seconds}`);
}

setInterval(setDate, 1000);
