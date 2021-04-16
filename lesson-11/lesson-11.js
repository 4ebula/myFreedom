/*********************************
*************** CLOSURE **********
**********************************/


const createCounter = function() {
  let count = 0;
  return function() {
    return ++count;
  };
};

const incrementValue = createCounter();
console.log(incrementValue());
console.log(incrementValue());
console.log(incrementValue());
console.log(incrementValue());


function createChildCounter() {
  let listOfCildren = [];
  return function(childName) {
    listOfCildren.push(childName);
    return listOfCildren;
  };
}

const addChildToList = createChildCounter();
addChildToList('John');
addChildToList('Sam');
console.log(addChildToList('Ruby'));

function createRandom(max = 1000, min = 1) {
  return Math.trunc(Math.random() * max + min);
}

function createBudget() {
  let budget = 0;
  return function(value) {
    if (typeof value === 'number') {
      return budget += value;
    }
    else return budget;
  }
}

const countBudget = createBudget();
countBudget(createRandom(1e22));
countBudget(createRandom());
countBudget(createRandom());
countBudget(createRandom());
console.log(countBudget(-1e20));

const countBudget2 = createBudget();
countBudget2(createRandom());
countBudget2(createRandom());
countBudget2(createRandom());
countBudget2(createRandom());
console.log(countBudget(-1e23));


const button = document.createElement('button');
button.className = 'class1 blue';
button.textContent = 'Press me';
console.log(button.dataset);
button.dataset.add('asd');
document.body.appendChild(button);
button.style['margin'] = '100px';

button.addEventListener('click', () => {
  button.classList.toggle('green');
});

const h1 = document.querySelector('h1');
const div = document.querySelector('div');
const h1Clone = h1.cloneNode(true);
div.appendChild(h1Clone);
h1.remove();

const h9 = document.createElement('h9');
div.appendChild(h9);