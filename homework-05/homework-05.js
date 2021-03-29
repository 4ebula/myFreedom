const legend = ['name', 'age', 'residence', 'occupancy', 'hobbies', 'spouse', 'parents', 'siblings', 'children'];

var person = ['Eric', 'Sarah', 'Ann', 'Tommy', 'Jim', 'Kelly', 'Mary', 'Nicolas'];

var Eric = ['Eric', 30, 'London', 'Programmer', ['Morning running', 'Fresh juice'], 'Sarah', [, 'Mary'], , ['Ann']];
var Sarah = ['Sarah', 26, 'London', 'Layer', ['Watch series', 'Write articles to locals newspapers'], 'Eric', ['Jim', 'Kelly'], , ['Ann']];
var Ann = ['Ann', 4, 'London', , ['Crayon drawing', 'Playing with Tommy'], '', ['Eric', 'Sarah'], ,];
var Tommy = ['Tommy', 4, 'London'];
var Jim = ['Jim', 65, 'Manchester', 'Retired', ['Travel England'], 'Kelly', , , ['Sarah']];
var Kelly = ['Kelly', 65, 'Manchester', 'Retired', ['Travel England'], 'Jim', , , ['Sarah']];
var Mary = ['Mary', 66, 'Liverpool', , , 'Nicolas', , , ['Eric']];
var Nicolas = ['Nicolas', 70, 'Liverpool', 'Head of security', ['Prima violin in Liverpool orchestra'], 'Mary'];

const familyTree = person.reduce((obj, key) => ({...obj, [key]: {}}), {});

person.forEach(elem => addPersonlegend(elem));
person.forEach(elem => ['spouse', 'parents', 'children', 'sibllins'].forEach(elem1 => addFamilyTies(elem, elem1)));


function addPersonlegend(person) {
  const characteristics = this[person];
  for (let i = 0; i < legend.length; i++) {
    characteristics[i] && (familyTree[person][legend[i]] = characteristics[i]);
  }
}

function addFamilyTies(firstName, key) {
  let relatives = familyTree[firstName][key];
  if (relatives !== undefined) {
    if (Array.isArray(relatives)) {
      relatives = relatives.map(e => e !== undefined ? familyTree[e] : undefined);
      familyTree[firstName][key] = relatives;
    }
    else if (familyTree[relatives] !== undefined) {
      familyTree[firstName][key] = familyTree[relatives];
    }
  }
}

for (let e in familyTree) {
  console.log(e, ' ', familyTree[e]);
}
