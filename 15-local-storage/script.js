'use strict';

// elements

const form = document.querySelector('.form');
const itemsList = document.querySelector('.plates');
const btnClear = document.querySelector('.btn-clear');
const items = JSON.parse(localStorage.getItem('items')) || [];

// functions

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector('[name=item]').value;
  const item = {
    text,
    done: false,
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `<li>
      <input type ="checkbox" data-index = ${i} id = "item${i}" ${
        plate.done ? 'checked' : ''
      } />
      <label for="item${i}">${plate.text}</label>
    </li>
    `;
    })
    .join('');
}

function toggleDone(e) {
  if (!e.target.matches('input')) return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

form.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
populateList(items, itemsList);

// clear and reload

btnClear.addEventListener('click', () => {
  localStorage.clear();
  location.reload();
});
