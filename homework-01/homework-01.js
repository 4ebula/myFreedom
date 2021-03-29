/* TASK #1 */
function variableChanger(x, y) {
  if(x == 0) {x = y; x = 0;}
  if(y == 0) {y = x; y = 0;}
  if(x == 0 && y == 0) return [0, 0];
  x *= y;
  y = x / y;
  x /= y;
  return [x, y];
};
// OR
let variableChanger1 = (x, y)  => {return [y, x];};

/* TASK #2 */
function showCubes(){
  let str = '';
  let n = +prompt('Enter n ');
  while (Number.isNaN(n)){
    alert('This is not a number! Please try again.');
    n = +prompt('Enter n ');
  } 
  for (let i = 3; i <= n; i += 3) {
    console.log(Math.pow(i, 3));
    str += `${Math.pow(i, 3)} `;
  }
  alert(str);
}
showCubes();

/* TASK #3 */
function showMax(){
  let x = checkIfNum('first');
  let y = checkIfNum('second');
  return Math.max(x, y);

}
function checkIfNum(str){
  let x = +prompt(`Enter ${str} number `);
  while (Number.isNaN(n)){
    alert('This is not a number! Please try again.');
    x = +prompt('Enter n ');
  } 
  return x;
}
showMax();


/* TASK #4 */
function showMax(){
  let x = checkIfNum('first');
  let y = checkIfNum('second');
  alert(`${Math.max(x, y)} is bigger`);
  return Math.max(x, y);

}
function checkIfNum(str){
  let x = +prompt(`Enter ${str} number `);
  while (Number.isNaN(x)){
    alert('This is not a number! Please try again.');
    x = +prompt(`Enter ${str} number `);
  } 
  return x;
}
showMax();

/* TASK #5 */
function fizzBuzz(){
  for (let i = 1; i < 101; i++) {
    switch(true){
      case !(i % 15): console.log('FizzBuzz');
      break;
      case !(i % 5): console.log('Buzz');
      break;
      case !(i % 3): console.log('Fizz');
      break;
      default: console.log(i);
      break;
    }    
  }
}
fizzBuzz();