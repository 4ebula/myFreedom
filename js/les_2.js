/* self called function */
/*
(function(){
  console.log('Self called function');
})();
*/


let arr = [
  { name: 'Sasha', age: '15'},
  { name: 'Ura', age: '18'},
  { name: 'Max', age: '13'},
  { name: 'Olga', age: '24'}
];

function isAdult(age){
  arr.filter(e => e.age >= age).forEach(e => console.log(e.name));
  return arr.map(e => e.color = 'white');
}
isAdult(18);

console.log(arr[0].color);