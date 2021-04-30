const obj1 = {
  property: 'value',
  name: 'Sam',
};

console.log(Object.getOwnPropertyDescriptor(obj1, 'property'));
console.log(Object.getOwnPropertyDescriptors(obj1));
Object.defineProperty(obj1, 'property', {
  value: 'Dean',
  writable: false,
  enumerable: false,
  configurable: false,
});

const obj = {};
Object.defineProperties(obj, {
  name: {
    value: 'Sam',
    writable: true,
    enumerable: true,
  },
  age: {
    value: 18,
    enumerable: true,
  },
  method: {
    value: function() {},
  },
  funcName: {
    get: function() {},
    set: function(value) {},
  }
});

for (let e in obj) {
  console.log(obj[e]);
}

Object.freeze(obj);
obj.color = 'red';
console.log(obj);

console.log('\n\n\n');

const person = {
  firstName: 'Sam',
  get name() {
    return this.firstName;
  },
  set name(value) {
    this.firstName = value;
    return this;
  },
};


console.log(person.name);
person.name = 'Dean';


const sphere = {
  _r: 0,
  _pi: Math.PI,
  _units: 'm',
  get radius() {
    return `Radius is ${this._r}`;
  },
  set radius(value) {
    if (typeof value === 'string') {
      this._r = parseFloat(value);
      this._units = value.replace(this._r, '');
    }
    else throw new TypeError('Fuck you');
  },
  get volume() {
    return (this._pi * 4 * this._r ** 3 / 3).toFixed(2) + `${this._units}^3`;
  }
};
sphere.radius = '15km';
console.log(sphere.volume);


console.log('\n\n\n');

function Box(size) {
  Object.defineProperties(this, {
    height: {
      value: size[0],
    },
    width: {
      value: size[1],
    },
    length: {
      value: size[2],
    },
  });
  return this;
};

const box = new Box([100, 90, 80]);
console.log(box);
// CAN'T SET 2 PROTOTYPES
box.__proto__ = person;
console.log(box);
box.__proto__ = obj;
console.log(box);


//Number 0
const car = {
  drive() {
    return `${this.name ? this.name : 'Car'} is moving.`;
  },
}
//Number 1
function Bmw(name) {
  this.name = name;
}

Bmw.prototype = car;

const newBmw = new Bmw('X7');
console.log(newBmw.drive());

//Number 2
const volvo = Object.create(car, {
  name: {
    value: 'e46'
  },
});

console.log(volvo.drive());

console.log('\n\n\n');

(function createMarkup() {
  const container = document.createElement('div');
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  const button = document.createElement('button');
  button.textContent = 'Add';
  const taskContainer = document.createElement('div');
  taskContainer.className = 'tasks';
  container.append(input);
  container.append(button);
  container.append(taskContainer);
  document.body.append(container);
})();

document.querySelector('button').addEventListener('click', () => {
  const p = document.createElement('p');
  p.textContent = document.querySelector('input').value;
  
  console.log(p);
  document.querySelector('.tasks').appendChild(p);
  document.querySelector('input').value = '';
})

