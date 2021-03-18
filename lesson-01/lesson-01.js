/*let name1 = 'Kate';
name1 = 'smth';
console.log(name1);

const name2 = 'Masha';
console.log(name2);


let person = {
  name: 'John',
  isMariied: true
}


console.log(person.name);
console.log(typeof person);
*/

/*
let comment = 'Hello human!';
alert(comment);

let msg_1 = 'Sure you want to become fe';
confirm(msg_1);

let question = +prompt("How many people are there in group?", 'Around 10');
console.log(typeof question);
*/
/*
let a = 5; 
let b = 3;

console.log(a ** b);

let num = 51;

if(num < 49) console.log('Too puny');
else if (num > 100) console.log('Too much');
else if(num == 50) console.log('Gotcha');
else console.log('Go to sleeps');

let c = 2;
let d = 3;
if(c * d != 8) console.log('True');
else console.log('False');

console.log(c * d != 8 ? 'true' : 'false');

switch(true){
  case c * d != 8: console.log('TRue');
  break;
  default: console.log('FAlse');
  break;
}
console.log(0.1 + 0.2 == 0.3);
console.log('ex', 0.1 * 10 + 0.2 * 10 == 0.3 * 10);

let r = true;
let t = false;

console.log(r || t);
*/

/*
let k = 50;
while(k < 55){
  console.log(k++);
}
*/
/*
let k = 50;
do{
  console.log(k);
  k++;
}while(k < 55);
*/

let randArr = Array.from({length: 10}, e => Math.trunc(Math.random()*10));
/*
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  
}
*/
/* MAYBE USEFULL */ 
let newArr = [];
newArr[10] = 8;

/*

for (let i = 0; i < newArr.length; i++) {
  console.log(`Index ${i}`);

  console.log('Index ' + `0${i}`.slice(-2));
}

*/
/*
let name3 = 'Gleb';
let name4;

console.log('My name is ' + name3);
console.log(`My name is ${name3}`);
*/

/*
function multiplyNumbers(...x){
  return x.reduce((acc, e) => acc *= e, 1);

}

console.log(multiplyNumbers(2, 3, 7, 1, -1, 0.5));

*/

/*
let var1 = prompt('Your name');
console.log(var1);
*/


/*
function nameInput(arg){
  if((typeof arg == 'string') && (/^[a-z]+$/i.test(arg))){
    console.log(arg);
    return;
  }
  else {
    alert('This is not a name');
  return;
  }
}

nameInput(prompt('You name', ));
*/

/* OBJ */
/*
let girl = {
  name: 'Sasha',
  age: 16,
  canDo (){
    console.log(`Name is ${girl.name}\n`);
    console.log(`Age is ${girl.age}\n`);
  },
  another: function a(){
    console.log('123');
  }
};

girl.canDo();
girl.another();
*/

//Леа Беру - Секреты CSS