function chef() {
  const main = document.createElement('div');
  const info = document.createElement('div');
  const h1 = document.createElement('h1');
  const paragraph = document.createElement('p');
  const img = document.createElement('div');
  main.classList.add('main');
  info.classList.add('info');
  img.classList.add('chef');
  h1.innerText = 'About Chef';
  paragraph.innerText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  info.appendChild(h1);
  info.appendChild(paragraph);
  main.appendChild(info);
  main.appendChild(img);

  return main;
}

export default chef;
