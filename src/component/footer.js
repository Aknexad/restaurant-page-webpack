function footer() {
  const footer = document.createElement('footer');
  const paragraph = document.createElement('p');
  const linkToGH = document.createElement('a');
  paragraph.innerText = `Copyright Aknexad`;
  linkToGH.setAttribute('href', 'github.com/aknexad');
  linkToGH.innerText = 'GitHub';
  footer.classList.add('footer');
  footer.appendChild(paragraph);
  footer.appendChild(linkToGH);

  return footer;
}

export default footer;
