export default function navbar() {
  const divNave = document.createElement('div');
  divNave.classList.add('navbar');

  const btn = document.createElement('button');
  const btn2 = document.createElement('button');
  const btn3 = document.createElement('button');

  btn.classList.add('btn');
  btn2.classList.add('btn');
  btn3.classList.add('btn');
  btn.classList.add('nav');
  btn2.classList.add('nav');
  btn3.classList.add('nav');

  btn.innerText = 'Home';
  btn2.innerText = 'Menu';
  btn3.innerText = 'About';

  divNave.appendChild(btn);
  divNave.appendChild(btn2);
  divNave.appendChild(btn3);

  return divNave;
}
