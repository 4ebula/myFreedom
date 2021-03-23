/*const arr = 'sdfasdgdfhrotbmvachngd'.split('');
const obj = {};


for(let e of arr){
  obj[e] = Math.trunc(Math.random() * 100 + 1);
}

for(let e in obj){
  console.log(e, obj[e]);
  //if(obj[e] < 10) throw new ReferenceError('Value error. Value is less than 10');
}
*/

/****************************************************
 ****************** DIREVATIVES *********************
 ****************************************************/

const num_2digit = Math.trunc(Math.random() * 89 + 10);
const num_3digit = Math.trunc(Math.random() * 899 + 100);

function digitRange(downRange, upRange){
  return Math.trunc(Math.random() * (upRange - downRange - 1) + downRange);
}

function deviders(_range) {
  const num = digitRange(..._range);
  console.log(num);
  console.log('\n\n');
  let range = _range[2];
  let j = num;
  while(j <= range - num){
    console.log('%c%d', 'color: #f00;', j += num);
  }
  for (let i = 1; i <= range; i++) {
    (i % num) || console.log(i);
  }
}
/*
deviders([10, 100, 1000]);
*/


/****************************************
 *************** FUNCTIONS **************
 ****************************************/

