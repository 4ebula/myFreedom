const rSwitch = document.querySelectorAll('.input input[type="radio"]');
document.querySelector('button').addEventListener('click', () => {
  const str = document.querySelector('textarea').value;
  document.querySelector('.counter').innerHTML = '';
  switch (true) {
    case rSwitch[0].checked: displayWordCountResults(handleSongText(str));
    break;
    case rSwitch[1].checked: displayJumpsCardResults(handleJumpsText(str));
    break;
  }
});

function handleSongText(str) {
  let arr = str.split('\n').filter((e) => e !== '').map((e) => e.split(' ')).flat();
  arr = arr.map((e) => e.toLowerCase().replace(/[\.,!\?\:;'"-]/g, ''));
  const set = new Set(arr);
  const counts = {};
  set.forEach((key) => counts[key] = 0);
  arr.forEach((e) => counts[e]++);
  return counts;
}

function handleJumpsText (str) {
  let arr = str.split('\n');
  arr = arr.map((e) => e.split(',').map((e) => e.trim()));
  const legend = ['name', 'age', 'city', 'jumps'];
  arr = arr.map((e) => {
    return e.map((subE, i) => {
      return [legend[i], subE];
    });
  });
  arr = arr.map((e) => Object.fromEntries(e));
  let set = new Set();
  while (set.size !== arr.length) {
    set.add('id' + Math.trunc(Math.random() * 1000));
  };
  set = Array.from(set.values());
  const map = new Map(arr.map((e, i) => {return [set[i], e]}));
  return map;
}

function displayWordCountResults(counts) {
  const div = document.createElement('div');
  const h4 = document.createElement('h4');
  const ul = document.createElement('ul');
  h4.textContent = 'Counts:';

  for (let key in counts) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    li.textContent = `${key}: `;
    span.textContent = counts[key];
    li.appendChild(span);
    ul.appendChild(li);
  }
  div.appendChild(h4);
  div.appendChild(ul);
  document.querySelector('.counter').appendChild(div);
  return;
}

function displayJumpsCardResults(map) {
  let age = 0, jumps = 0;
  const divJumpsCards = document.createElement('div');
  const ul = document.createElement('ul');
  const pAge = document.createElement('p');
  const pJumps = document.createElement('p');

  map.forEach((value, key) => {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    h4.textContent = key;
    div.appendChild(h4);
    div.className = 'card';
    for (let key in value) {
      const p = document.createElement('p');
      const span = document.createElement('span');
      p.textContent = `${key}: `;
      span.textContent = value[key];
      p.appendChild(span);
      div.appendChild(p);
      if (key === 'age') age += +value[key];
      if (key === 'jumps') jumps += +value[key];
    }
    li.appendChild(div);
    ul.appendChild(li);
  });
  divJumpsCards.appendChild(ul);
  pAge.textContent = `Average age: ${(age / map.size).toFixed(2)}`;
  pJumps.textContent = `Overall jumps: ${jumps}`;
  divJumpsCards.appendChild(pAge);
  divJumpsCards.appendChild(pJumps);
  document.querySelector('.counter').appendChild(divJumpsCards);
  return;
}