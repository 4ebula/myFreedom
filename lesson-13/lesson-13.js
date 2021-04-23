// CLOSURE THROUGH FUNCTION PROPERTY

/*
const createCounter = function () {
  function count() {
    return count.sum++;
  }
  count.sum = 0;
  return count;
};

const count = createCounter();

console.log(count());
console.log(count());
console.log(count());
*/


const multiple = (...args) => {
  const stamp = new Date().getTime();
  while (new Date().getTime() < stamp + 2000) { }
  return args.reduce((acc, e) => acc * e, 1);
};

const multipleDecorator = function (func) {
  const cache = new Map();
  return function (...args) {
    const cacheKey = keyMaker(...args);
    if (!cache.has(cacheKey)) cache.set(cacheKey, func(...args));
    return cache.get(cacheKey);
  }
};

function keyMaker(...args) {
  return args.sort((a, b) => a - b).join('~');
}

// console.log(multiple(2, 3));
// const fastMultiple = multipleDecorator(multiple);
// console.log(fastMultiple(2, 3));
// console.log(fastMultiple(2, 3));
// console.log(fastMultiple(3, 2));
// console.log(fastMultiple(3, 3));
// console.log(fastMultiple(3, 3));

const person = {
  name: 'Sam',
  sayHello: function (personName) {
    console.log(`${this.name} says hello to ${personName}`);
  }
};

person.sayHello('Dean');

const newPerson = {
  name: 'Bobby',
};
const sayHello = person.sayHello;
sayHello.call(newPerson, 'Dean');



document.querySelector('button')
        .addEventListener('click', (event) => {
          (handler.bind(event.target))();
        });

function handler() {
  console.log(this);
  this.style.backgroundColor = 'red';
}


const [ div1, div2, div3 ] = document.querySelectorAll('div');
div1.addEventListener('click', (event) => {
  event.target.style.color = 'red';
  console.log(event)}, {bubbles: false});


//div1.onclick = function(event) {console.log(event.target);};