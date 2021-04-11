let symbol = Symbol();

console.log(symbol);

const obj = {
  name: 'Nameless',
  age: 12,
  [symbol]: 'something',
};


console.log(obj);

// GLOBAL SYMBOL

//  CREATING
let symbol1 = Symbol.for('new-symbol');

obj[symbol1] = 'else';

console.log(obj);
//  ACCESSING
console.log(Symbol.for('new-symbol'));

// ACCESSING VALUE
console.log(obj[Symbol.for('new-symbol')]);


console.log('-------------------------------------------------------');

// [Symbol.iterator]

const objIterator = function () {
  const _obj = this;
  let index = 0;
  const keys = Object.keys(this);
  const values = Object.values(_obj);
  const length = keys.length;
  return {
    next() {
      return {
        done: index < length ? false : true, // false if not last/ want to continue
        value: _obj[keys[index++]],//values[index++],
      };
    },
  };
};

obj[Symbol.iterator] = objIterator;

for (let e of obj) {
  console.log(e);
}

const user = {
  name: 'George',
  age: 12,
  color: 'black',
};

user[Symbol.iterator] = objIterator;
for (let e of user) {
  console.log(e);
};




console.log('-------------------------------------------------------');




// MAP - COLLECTIONS
let obb = { obj: 'obj' };

const map0 = new Map(); // empty collection

const map = new Map([
  ['key0', 'value0'],
  [{ obj: 'obj' }, 'object'],  // can assign object as a key, can't be called
  [obb, 'asdfasdfasdf'] // can be called
]);

console.log(map);

map.set('key1', 'value1'); // set new key


console.log(map.get('key0')); // get key
console.log(map.get(obb));
console.log(map.has('123')); // check key

console.log(map.size);
map.delete('key1'); // Delete key
// map.clear(); // Clears

console.log('VALUES, iterator: ');
for (const value of map) {
  console.log(value);
}
console.log('VALUES: ');
console.log(map.values());
console.log('KEYS: ');
console.log(map.keys());

// also applies .entries and .forEach(value, key, map)


let objEnt = Object.entries({
  name: 'Sam',
  age: 22,
});

let _map = new Map(objEnt);
_map.set('color', 'blue');

console.log(Object.fromEntries(_map));

// Set - also collection
// can apply .add()
// .forEach(value_1, value_2) aplies

console.log(Reflect.ownKeys(obj));


console.log('---------------------------------------');

const garage = {
  bmw: {
    model: 'X6',
    made: 'Germany',
    color: 'black',
    year: '2018',
  },
  audi: {
    model: 'Q7',
    made: 'Germany',
    color: 'gray',
    year: '2011',
  },
  volvo: {
    model: 'XC90',
    made: 'Sweden',
    color: 'blue',
    year: '2014',
  },
  
};


const mapGarage = new Map(Object.entries(garage));
console.log(mapGarage);
const setGarage = new Set(Object.entries(garage));
console.log(setGarage);
const newObj = Object.fromEntries(mapGarage);
console.log(newObj);

