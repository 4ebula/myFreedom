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