const bodyElem = document.querySelector('body');
const darkModeButtonElem = document.querySelector('.header__theme-button');
const themeLabelElem = document.querySelector('.header__theme-current');

const darkModeLabel = 'light';
const lightModeLabel = 'dark';

const prefersDarkMode = window.matchMedia(
  '(prefers-color-scheme: dark)',
).matches;

let currentTheme = localStorage.getItem('theme');

function changeTheme() {
  if (currentTheme === 'light') {
    bodyElem.classList.add('dark');
    bodyElem.classList.remove('light');
    themeLabelElem.innerText = darkModeLabel;
    currentTheme = 'dark';
  } else if (currentTheme === 'dark') {
    bodyElem.classList.add('light');
    bodyElem.classList.remove('dark');
    themeLabelElem.innerText = lightModeLabel;
    currentTheme = 'light';
  }
  localStorage.setItem('theme', currentTheme);
}

(() => {
  if (currentTheme == null) {
    if (prefersDarkMode) currentTheme = 'dark';
    else currentTheme = 'light';
    localStorage.setItem('theme', currentTheme);
  }
  if (currentTheme === 'light') {
    themeLabelElem.innerText = lightModeLabel;
  } else themeLabelElem.innerText = darkModeLabel;
  localStorage.setItem('theme', currentTheme);
  bodyElem.classList.add(currentTheme);
})();

darkModeButtonElem.addEventListener('click', changeTheme);

const animationElems = [
  document.querySelector('.header'),
  document.querySelector('.search-bar'),
  document.querySelector('.result'),
];

gsap.from(animationElems, {
  delay: 0.25,
  opacity: 0,
  duration: 1,
  ease: 'bounce.out',
  y: -50,
  stagger: 0.25,
});

particlesJS.load('particles-js', './particles.json');
