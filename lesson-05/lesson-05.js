// INSIDE FUNCTION

/*
const func = function () {
  // Code
  return function () {
    console.log('self');
  };
};
func () ();
*/

let _obj = new Object;
_obj.name = 'John';
_obj.color = 'black';

console.log(_obj);

/*
delete _obj.name;
console.log(_obj);
*/

console.log(Object.keys(_obj));


// This is object computed properties
// READ https://javascript.info/object#computed-properties
/*
const color = 'blue';
const person = {
  color: color,
  'колор': [color],
  [color]: 'this is new color'
};
console.log(person);
*/




// OBJECT CONSTURCTOR
/*
const createPerson = (name, age, color) => {
  return {
    name: name,
    age, // <-- can do this
    color: color
  };
};

console.log(createPerson(...'abc'));
*/




// COPY OBJECT
/*
const _testObj = {
  value: 'asdf'
};

let _testObj2 = new Object
_testObj2 = Object.assign(_testObj2, _testObj);
console.log(_testObj);
console.log(_testObj2);
_testObj.value = 'trru';
console.log(_testObj);
console.log(_testObj2);
*/



// CHECK KEYS 2
let _obj3 = {
  'key': 'sadf',
}
console.log('ety' in _obj3);
console.log('key' in _obj3);

console.log('----------------------------------');
const city = {
  name: 'Ленинград',
  population: 5384342,
  coordinates: {
    latitude: 59.93,
    longitude: 30.36
  }
};

let cityClone = {};

function cloneDeep(_oldObj, _newObj) {
  for (let key in _oldObj) {
    if (typeof _oldObj[key] === 'object') {
      _newObj[key] = {};
      cloneDeep(_oldObj[key], _newObj[key]);
    }
    else _newObj[key] = _oldObj[key];
  }
}

cloneDeep(city, cityClone);
console.log('city', '\n', city.coordinates.latitude);
console.log('cityClone', '\n', cityClone.coordinates.latitude);

city.coordinates.latitude = 60;

console.log('city', '\n', city.coordinates.latitude);
console.log('cityClone', '\n', cityClone.coordinates.latitude);


function cloneDeep2(obj) {
  const objClone = {};
  for (let key in obj) {
    if (typeof obj[key] === 'object') objClone[key] = cloneDeep2(obj[key]);
    else objClone[key] = obj[key];
  }
  return objClone;
}
console.log('\n\n\n');

let cityClone2 = cloneDeep2(city);
console.log('city', '\n', city.coordinates.latitude);
console.log('cityClone2', '\n', cityClone2.coordinates.latitude);

city.coordinates.latitude = 77;
console.log('city', '\n', city.coordinates.latitude);
console.log('cityClone2', '\n', cityClone2.coordinates.latitude);
