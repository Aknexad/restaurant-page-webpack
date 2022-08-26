import divNave from '../component/navbar';
import footer from '../component/footer';
import listOfMenu from '../component/menu';

function Menu() {
  document.querySelector('#content').appendChild(divNave());
  for (let i = 0; i < 5; i++) {
    document
      .querySelector('#content')
      .appendChild(listOfMenu());
  }

  document.querySelector('#content').appendChild(footer());
}

export default Menu;
