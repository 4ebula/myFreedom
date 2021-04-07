// CREATE FOR_EACH FOR OBJECT
const person = {
  name: 'Scalapendra',
  age: 321,
  color: 'blue',
}

const forEach = function (callback) {
  let index = 0;
  for (let key in this) {
    (typeof this[key] !== 'function') && callback(key, this[key], index++);
  }
  return this;
};
const mutate = function (callback) {
  for (let key in this) {
    this[key] = callback(key, this[key]);
  }
  return this;
};
person.forEach = forEach;
person.mutate = mutate;

person.forEach((key, value, index) => console.log(key, value, index))
.mutate((key, value) => {if(key === 'name') return value = '123'});


//
const name = 'name';
const __obj = {
  [name]: 'array',
};
