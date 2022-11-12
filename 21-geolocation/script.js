'use strict';

const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition(
  (data) => {
    speed.textContent = data.coords.speed ?? 0;
    arrow.style.transform = `rotate(${data.coords.heading})`;
  },
  (err) => {
    console.error(err.message);
    alert(err.message);
  }
);
