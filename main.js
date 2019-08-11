'use strict';

const bars = document.querySelector('.burger');
const showMenu = document.querySelector('.hide-menu');
const languageSelection = document.querySelector('.language-selection');
const showLang = document.querySelector('.hidden');

bars.addEventListener('click', () => {
  showMenu.classList.toggle('hide-menu');
})

window.addEventListener('resize', () => {
  if (window.innerWidth > 760) {
    showMenu.classList.add('hide-menu');
  }
})

languageSelection.addEventListener('mouseover', () => {
  showLang.classList.remove('hidden');
})

languageSelection.addEventListener('mouseleave', () => {
  showLang.classList.add('hidden');
})
