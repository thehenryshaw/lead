'use strict';

const bars = document.querySelector('.burger');
const showItems = document.querySelector('.hide-list');

bars.addEventListener('click', () => {
  showItems.classList.toggle('hide-list');
})

window.addEventListener('resize', () => {
  if (window.innerWidth > 760) {
    showItems.classList.add('hide-list');
  }
})
