export default function navbar() {
  const divNave = document.createElement('div');
  divNave.classList.add('navbar');
  const ul = document.createElement('ul');
  const li = document.createElement('li');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  li.innerText = 'Home';
  li1.innerText = 'Menu';
  li2.innerText = 'Abute';
  ul.appendChild(li);
  ul.appendChild(li1);
  ul.appendChild(li2);
  divNave.appendChild(ul);

  return divNave;

  //   return document
  //     .querySelector('#content')
  //     .appendChild(div);
}
