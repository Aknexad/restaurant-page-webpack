import divNave from '../component/navbar';
import footer from '../component/footer';
import about from '../component/about';

function About() {
  document.querySelector('#content').appendChild(divNave());
  document.querySelector('#content').appendChild(about());
  document.querySelector('#content').appendChild(footer());
}

export default About;
