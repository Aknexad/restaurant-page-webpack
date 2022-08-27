import './styles/main.css';

import Home from './pages/home';
import Menu from './pages/menu';
import About from './pages/about';

Home();
let btn = document.querySelectorAll('.nav');
btn.forEach((element) => {
  element.addEventListener('click', handelClick);
});

function handelClick(e) {
  let clickElement = e.target.innerText;
  clearDome();

  if (clickElement === 'About') {
    About();
    btn = document.querySelectorAll('.nav');
    btn.forEach((element) => {
      element.addEventListener('click', handelClick);
    });
  }
  if (clickElement === 'Menu') {
    Menu();
    btn = document.querySelectorAll('.nav');
    btn.forEach((element) => {
      element.addEventListener('click', handelClick);
    });
  }
  if (clickElement === 'Home') {
    Home();
    btn = document.querySelectorAll('.nav');
    btn.forEach((element) => {
      element.addEventListener('click', handelClick);
    });
  }
}

function clearDome() {
  let element = document.getElementById('content');
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
