/** Can use following in obj comparaion */
/*
let objTrue = {};
let objFalse = null;

console.log(Boolean(objTrue), Boolean(objFalse));*/

// Don't converse types !
// https://javascript.info/logical-operators
/*
console.log(false || 12);
console.log(0 && true); //not false

console.log(Boolean(false && 22));
*/

// Nullish coalescing operator
// https://learn.javascript.ru/nullish-coalescing-operator
/*
console.log(0 ?? 10);
console.log(null ?? 10);
console.log(undefined ?? 10);
*/

function selectProduct() {
  let productCode = +prompt('Enter product code');
  if (productCode === 1) alert('Soap');
  else if (productCode === 2) alert('Shampoo');
  else if (productCode === 3) alert('Powder');
  else if (productCode === 4) alert('Foam');
  else if (productCode === 5) alert('Cream');
  else alert('Product with given product number does\'t exist');
}
/* With switch */
function selectProductSwitch() {
  let productCode = +prompt('Enter product code');
  switch (productCode) {
    case 1: alert('Soap');
      break;
    case 2: alert('Shampoo');
      break;
    case 3: alert('Powder');
      break;
    case 4: alert('Foam');
      break;
    case 5: alert('Cream');
      break;
    default: alert('Product with given product number does\'t exist');
      break;
  }
}

selectProductSwitch();


/* With object */
const productCodes = {
  1: 'Shampoo',
  2: 'Powder',
  3: 'Foam',
  14: 'Cream'
};
function objCaller() {
  let inputCode = +prompt('Enter product code');
  if (productCodes[inputCode] ?? false) alert(productCodes[inputCode]);
  else alert('Product with given product number does\'t exist');
}

