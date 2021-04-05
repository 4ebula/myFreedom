document.querySelector('button').addEventListener('click', () => {
  createCard ();
  document.querySelector('button').remove();
});

const ABBR = {
  k: 1e3,
  m: 1e6,
  b: 1e9,
  t: 1e12,
};
const Country = function (name, capital, population, area) {
  this.name = name;
  this.capital = capital;
  this.population = population;
  this.area = area;
};

const Kingdom = function (name, capital, countries) {
  this.name = name;
  this.capital = capital;
  this.participants = countries;
  this.calcPopulation = function (countries) {
    return countries.reduce((acc, e) => {
      return acc + (Number.parseFloat(e.population) * ABBR[e.population.slice(-1).toLowerCase()]);
    }, 0) / 1e6 + 'M';
  }
  this.calcArea = function (countries) {
    return countries.reduce((acc, e) => {
      return acc + (Number.parseFloat(e.area) * ABBR[e.area.slice(-8)[0]]);
    }, 0) / 1e3 + 'k sq.km.';
  }
  this.popuplation = this.calcPopulation(countries);
  this.area = this.calcArea(countries);
};
const str = 'Belarus, Minsk, 9.4M, 207.6k sq.km.; Germany, Berlin, 83M, 357.4k sq.km.; Poland, Warsaw, 37.9M, 312.6k sq.km.; France, Paris, 67.8M, 643.8k sq.km.; Netherlands, Amsterdam, 17.4M, 41.5k sq.km.; Spain, Madrid, 44.M, 505.9k sq.km.; Belgium, Brussels, 11.4M, 30.5k sq.km.';
const countries = parseString(str);
function parseString(str) {
  return str.split(';').map(e => {return e = new Country(...e.split(',').map(st => st.trim()))});
}



const bounty = new Kingdom('Long Lands', countries[0].capital, countries);
console.log(bounty);




function createCard () {
  const div = document.createElement('div'),
  h1 = document.createElement('h1'),
  h2 = document.createElement('h2'),
  h3 = document.createElement('h3'),
  ul = document.createElement('ul'),
  p1 = document.createElement('p'),
  p2 = document.createElement('p');

  h1.textContent = bounty.name;
  h2.textContent = 'Capital: ' + bounty.capital;
  h3.textContent = 'Participants: ';
  for (let key in bounty.participants) {
    let li = document.createElement('li');
    li.textContent = bounty.participants[key].name;
    ul.appendChild(li);
  }
  p1.textContent = 'Population: ' + bounty.popuplation;
  p2.textContent = 'Area: ' + bounty.area;
  div.appendChild(h1);
  div.appendChild(h2);
  div.appendChild(h3);
  div.appendChild(ul);
  div.appendChild(p1);
  div.appendChild(p2);
  div.className = 'card';
  document.body.prepend(div);
}

