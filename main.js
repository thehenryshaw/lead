'use strict';

const bars = document.querySelector('.burger');
const showMenu = document.querySelector('.hide-menu');
const languageSelection = document.querySelector('.language-selection');
const showLang = document.querySelector('.hidden');
const menuLinks = Array.from(document.querySelectorAll('.list-items a'));
const menu = document.querySelector('.list-container');

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
  console.log(top);
  window.scrollTo({
    top: top - 85,
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
