import divNave from '../component/navbar';
import footer from '../component/footer';

function Home() {
  document.querySelector('#content').appendChild(divNave());
  document.querySelector('#content').appendChild(footer());
}

export default Home;
