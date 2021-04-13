let person  = {
  name: 'John',
  age: 21,
  color: 'blue',
};

const { color: fColor, ...rest } = person;
person = rest;
person = Object.assign({}, {...rest}, {fColor});
console.log(person);


const arr = ['A', 'B', 'C', 'D'];
let [first, ...restt] = arr;
let [last, ...[]] = restt.reverse();
console.log(first, last);



function getRandom(amount, from = 1, to = 1000) {
  return Array.from({
    length: amount
  }, (e) => Math.trunc(Math.random() * (to - from) + from));
}

function throwError(message) {
  throw new TypeError(message);
}

function calcAverage(...num) {
  return num.every((e) => {
    return typeof e === 'number' ? true : false;
  })
   ? num.reduce((acc, e) => acc + e, 0) / num.length
   : throwError('Wrong type');
}

console.log(calcAverage(...getRandom(10)));
console.log(calcAverage(10, 20, 30));