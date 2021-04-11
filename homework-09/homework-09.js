document.querySelector('button').addEventListener('click', () => {
  const counts = calculateText();
  document.querySelector('.counter').innerHTML = '';
  displayResults(counts);
});

function calculateText() {
  const str = document.querySelector('textarea').value;
  let arr = str.split('\n').filter((e) => e !== '').map((e) => e.split(' ')).flat();
  arr = arr.map((e) => e.toLowerCase().replace(/[\.,!\?\:;'"-]/g, ''));
  const set = new Set(arr);
  const counts = {};
  set.forEach((key) => counts[key] = 0);
  arr.forEach((e) => counts[e]++);
  return counts;
}

function displayResults(counts) {
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
  return ;
}