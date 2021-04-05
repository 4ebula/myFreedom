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
  this.participants = {...countries};
  this.calcPopulation = function (countries) {
    let population = [];
    for(let key in countries){
      population.push(countries[key].population);
    }
    return population.reduce((acc, e) => {
      return acc + (Number.parseFloat(e) * ABBR[e.slice(-1).toLowerCase()]);
    }, 0) / 1e6 + 'M';
  }
  this.calcArea = function (countrie) {
    let area = [];
    for(let key in countries){
      area.push(countries[key].area);
    }
    return area.reduce((acc, e) => {

      return acc + (Number.parseFloat(e) * ABBR[e.slice(-8)[0]]);
    }, 0) / 1e3 + 'k sq.km.';
  }
  this.popuplation = this.calcPopulation(countries);
  this.area = this.calcArea(countries);
};

const countries = {
  'by': new Country('Belarus', 'Minsk', '9.4M', '207.6k sq.km.'),
  'de': new Country('Germany', 'Berlin', '83M', '357.4k sq.km.'),
  'pl': new Country('Poland', 'Warsaw', '37.9M', '312.6k sq.km.'),
  'fr': new Country('France', 'Paris', '67.8M', '643.8k sq.km.'),
  'nl': new Country('Netherlands', 'Amsterdam', '17.4M', '41.5k sq.km.'),
  'es': new Country('Spain', 'Madrid', '44.M', '505.9k sq.km.'),
  'be': new Country('Belgium', 'Brussels', '11.4M', '30.5k sq.km.'),
};

const bounty = new Kingdom('Long Lands', countries['by'].capital,  countries);
console.log(bounty);




function createCard () {
  const div = document.createElement('div');
  let elem =  document.createElement('h1');
  elem.textContent = bounty.name;
  div.appendChild(elem);
  elem =  document.createElement('h2');
  elem.textContent = 'Capital: ' + bounty.capital;
  div.appendChild(elem);
  elem =  document.createElement('h3');
  elem.textContent = 'Participants: ';
  div.appendChild(elem);
  let ul = document.createElement('ul');
  for(let key in bounty.participants) {
    let li = document.createElement('li');
    li.textContent = bounty.participants[key].name;
    ul.appendChild(li);
  }
  div.appendChild(ul);
  elem =  document.createElement('p');
  elem.textContent = 'Population: ' + bounty.popuplation;
  div.appendChild(elem);
  elem =  document.createElement('p');
  elem.textContent = 'Area: ' + bounty.area;
  div.appendChild(elem);
  div.className = 'card';
  document.body.prepend(div);
}

