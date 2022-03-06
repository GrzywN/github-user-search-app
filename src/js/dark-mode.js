const bodyElem = document.querySelector('body');
const darkModeButtonElem = document.querySelector('.header__theme-button');
const themeLabel = document.querySelector('.header__theme-current');

let currentTheme = localStorage.getItem('theme');

// if (currentTheme == null) {
//   console.log(bodyElem.style.backgroundColor);
//   if (bodyElem.style.backgroundColor === '#141d2f') {
//     currentTheme = 'dark';
//     themeLabel.innerText = 'light';
//   } else {
//     currentTheme = 'light';
//     themeLabel.innerText = 'dark';
//   }
//   bodyElem.classList.add(currentTheme);
//   localStorage.setItem('theme', currentTheme);
// }

// if (bodyElem.style.backgroundColor === '#141d2f') {
//   currentTheme = 'dark';
//   themeLabel.innerText = 'light';
// } else {
//   currentTheme = 'light';
//   themeLabel.innerText = 'dark';
// }

function changeTheme() {
  if (currentTheme === 'light') {
    bodyElem.classList.add('dark');
    bodyElem.classList.remove('light');
    themeLabel.innerText = 'light';
    currentTheme = 'dark';
  } else {
    bodyElem.classList.add('light');
    bodyElem.classList.remove('dark');
    themeLabel.innerText = 'dark';
    currentTheme = 'light';
  }
  localStorage.setItem('theme', currentTheme);
}

darkModeButtonElem.addEventListener('click', changeTheme);

localStorage.setItem('theme', currentTheme);
bodyElem.classList.add(currentTheme);
