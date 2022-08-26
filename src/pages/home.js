import divNave from '../component/navbar';
import footer from '../component/footer';
import chef from '../component/chef';

function Home() {
  document.querySelector('#content').appendChild(divNave());
  document.querySelector('#content').appendChild(chef());
  document.querySelector('#content').appendChild(footer());
}

export default Home;
