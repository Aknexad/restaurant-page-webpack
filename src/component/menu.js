function listOfMenu() {
  const menu = document.createElement('div');
  const listOfFood = document.createElement('div');
  const h2 = document.createElement('h2');
  const imageOfFood = document.createElement('div');
  const p = document.createElement('p');

  menu.classList.add('menu');
  listOfFood.classList.add('foodTitle');
  imageOfFood.classList.add('foodImg');

  h2.innerText = 'Smoke Stack';
  p.innerText =
    'Angus beef stacked with pulled pork, mac & cheese, fried egg, slaw, mayo';

  listOfFood.appendChild(h2);
  listOfFood.appendChild(p);
  listOfFood.appendChild(imageOfFood);
  menu.appendChild(listOfFood);

  return menu;
}

export default listOfMenu;
