'use strict';

const bars = document.querySelector('.burger');
const showMenu = document.querySelector('.hide-menu');
const languageSelection = document.querySelector('.language-selection');
const showLang = document.querySelector('.hidden');
const menuLinks = Array.from(document.querySelectorAll('.list-items a'));
const menu = document.querySelector('.list-container');
const barsList = document.querySelector('.burger-list');

const header = document.querySelector('.header');
const showcaseSection = document.getElementById('showcase');
const missionSection = document.getElementById('mission');
const partnersSection = document.getElementById('partners');
const reviewsSection = document.getElementById('reviews');
const teamSection = document.getElementById('team');
const workSection = document.getElementById('work');
const contactsSection = document.getElementById('contacts');

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



menu.addEventListener('click', event => {
  if (event.target.classList.contains('list-container')) {
    return;
  }
  event.preventDefault();
  let top;

  switch (event.target.dataset.id) {
    case 'showcase':
      top = showcaseSection.offsetTop;
      break;
    case 'work':
      top = workSection.offsetTop;
      break;
    case 'mission':
      top = missionSection.offsetTop;
      break;
    case 'partners':
      top = partnersSection.offsetTop;
      break;
    case 'reviews':
      top = reviewsSection.offsetTop;
      break;
    case 'team':
      top = teamSection.offsetTop;
      break;
    case 'contacts':
      top = contactsSection.offsetTop;
      break;
  }
  window.scrollTo({
    top: top - 85,
    behavior: 'smooth'
  })
})

barsList.addEventListener('click', event => {
  if (event.target.classList.contains('burger-list')) {
    return;
  }
  event.preventDefault();
  let top;

  switch (event.target.dataset.id) {
    case 'showcase':
      showMenu.classList.add('hide-menu');
      top = showcaseSection.offsetTop;
      break;
    case 'work':
      showMenu.classList.add('hide-menu');
      top = workSection.offsetTop;
      break;
    case 'mission':
      showMenu.classList.add('hide-menu');
      top = missionSection.offsetTop;
      break;
    case 'partners':
      showMenu.classList.add('hide-menu');
      top = partnersSection.offsetTop;
      break;
    case 'reviews':
      showMenu.classList.add('hide-menu');
      top = reviewsSection.offsetTop;
      break;
    case 'team':
      showMenu.classList.add('hide-menu');
      top = teamSection.offsetTop;
      break;
    case 'contacts':
      showMenu.classList.add('hide-menu');
      top = contactsSection.offsetTop;
      break;
  }
  window.scrollTo({
    top: top - 50,
    behavior: 'smooth'
  })
})



let sticky = header.offsetTop;

window.addEventListener('scroll', () => {
  
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});
