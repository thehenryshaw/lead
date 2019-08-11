'use strict';

const bars = document.querySelector('.burger');
const showMenu = document.querySelector('.hide-menu');
const languageSelection = document.querySelector('.language-selection');
const showLang = document.querySelector('.hidden');
const menuLinks = Array.from(document.querySelectorAll('.list-items a'));

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

menuLinks.forEach(el => {
  el.addEventListener('click', (e) => {
    menuLinks.forEach(el => {
      el.classList.remove('chosen');
    })
    e.currentTarget.classList.add('chosen');
  })
})
