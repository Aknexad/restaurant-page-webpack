function about() {
  const days = [
    'Mon',
    'Tues',
    'Wed',
    'Thurs',
    'Fri',
    'Sat',
    'Sun',
  ];
  const about = document.createElement('div');
  const address = document.createElement('div');
  const addressP = document.createElement('p');
  const openAt = document.createElement('div');
  const table = document.createElement('table');

  for (let i = 0; i < days.length; i++) {
    const element = days[i];
    let p = document.createElement('p');
    p.innerText = `${element} => 6pm To 11pm`;
    table.appendChild(p);
  }

  about.classList.add('about');
  address.classList.add('address');
  openAt.classList.add('openAt');

  addressP.innerText =
    'Address: New York 1639 Hanover Street';

  openAt.appendChild(table);
  address.appendChild(addressP);
  about.appendChild(address);
  about.appendChild(openAt);

  return about;
}

export default about;
