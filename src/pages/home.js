import divNave from '../component/navbar';

function Home() {
  return divNave();
}

document.querySelector('#content').appendChild(Home());
export default Home;
