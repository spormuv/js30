'use strict';

const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');

highlight.classList.add('highlight');

document.body.append(highlight);

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  highlight.style.width = `${linkCoords.width}px`;
  highlight.style.height = `${linkCoords.height}px`;
  highlight.style.transform = `translate(${
    linkCoords.left + window.screenX
  }px, ${linkCoords.top + window.scrollY}px`;
}

triggers.forEach((a) => a.addEventListener('mouseenter', highlightLink));
