// const user = {
//   adress: {
//     city: 'London',
//   }
// };

// console.log(user.name?.surname);
// console.log(user.adress?.city);
// console.log(user.adress?.street);

/**********************************
 * REGULAR EXPRESSIONS
***********************************/

function getRandomStr (length){
  let arr = new Array(length);
  for (let i = 0; i < arr.length; i++) {
    let r = Math.trunc(Math.random() * 94 + 32);
    switch(r){
      case 92: arr[i] = '\\';
      break;
      case 39: arr[i] = '\'';
      break;
      default: arr[i] = String.fromCharCode(r);
    }  
  }
  return arr.join('');
}

let str = getRandomStr(190);
console.log(str);

let reg_1 = /a+/;
let reg_2 = new RegExp('\b+\w');

function RegexFuncs (){
  // Executes a search for a match in a string.
  // It returns an array of information or null on a mismatch.
  let a = reg_2.exec(str);
  console.log(a);
  // Tests for a match in a string. It returns true or false.
  let b = /\d.*?/.test(str);
  console.log(b);
  // Returns an array containing all of the matches, 
  // including capturing groups, or null if no match is found.
  let c = str.match(reg_1);
  console.log(c);
  // Returns an iterator containing all of the matches,
  // including capturing groups.
  let d = str.matchAll(/\d.*?/, 'g');
  console.log(d);
}
RegexFuncs ();

console.log('\n');


/*******************************
 * FUNCTION AND SCOPE
********************************/
// let person = {
//   name: 'John',
//   age: 22,
//   sayYuorName (){
//     console.log('Hello, my name is ' + this.name);
//     console.log('I\'m ' + this.age + ' years old');
//   }
// };
// person.sayYuorName();

function Test(age) {
  this.age = age;
  this.location;
}
const test = new Test(15);
console.log(test);

function Iron(name) {
  this.name = name;
  this.temp = 0;
  this.changeTemp = function (angle) {
    this.temp = angle * 3;
  }
}

let iron = new Iron('asdf');
console.log(iron);
let a = iron.changeTemp(15);
console.log(a);
console.log(iron.temp);