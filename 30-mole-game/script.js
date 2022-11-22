'use strict';

const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreBoard = document.querySelector('.score');
let lastHole;
let timeUp = false;
let score = 0;

function randomeTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomeHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    return randomeHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomeTime(200, 1000);
  const hole = randomeHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => (timeUp = true), 10000);
}

function bonk(e) {
  if (!e.isTrusted) return; //fake click
  score++;
  this.parentElement.classList.remove('up');
  scoreBoard.textContent = score;
}

moles.forEach((mole) => mole.addEventListener('click', bonk));
