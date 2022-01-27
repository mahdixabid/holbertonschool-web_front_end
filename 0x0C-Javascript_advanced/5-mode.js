function changeMode(size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size + 'px';
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.background = background;
    document.body.style.color = color;
  };
}

function main() {
  let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  let paragraph = document.createElement('p');
  paragraph.innerHTML = 'Welcome Holberton!';
  document.body.append(paragraph);

  let spookyButton = document.createElement('button');
  spookyButton.id = 'spookyButton';
  spookyButton.innerText = 'Spooky';
  document.body.append(spookyButton);

  let darkButton = document.createElement('button');
  darkButton.id = 'darkButton';
  darkButton.innerText = 'Dark mode';
  document.body.append(darkButton);

  let screamButton = document.createElement('button');
  screamButton.id = 'screamButton';
  screamButton.innerText = 'Scream mode';
  document.body.append(screamButton);

  document.getElementById('spookyButton').onclick = spooky;
  document.getElementById('darkButton').onclick = darkMode;
  document.getElementById('screamButton').onclick = screamMode;
}

main();