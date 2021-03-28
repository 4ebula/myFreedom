const familyTree = {};
const legend = ['name', 'age', 'residence', 'occupancy', 'hobbies', 'spouse', 'parents', 'siblings', 'children'];

const person = ['Eric', 'Sarah', 'Ann', 'Tommy', 'Jim', 'Kelly', 'Mary', 'Nicolas'];

const Eric = ['Eric', 30, 'London', 'Programmer', ['Morning running', 'Fresh juice'], 'Sarah', [, 'Mary'], , ['Ann']];
const Sarah = ['Sarah', 26, 'London', 'Layer', ['Watch series', 'Write articles to locals newspapers'], 'Eric', ['Jim', 'Kelly'], , ['Ann']];
const Ann = ['Ann', 4, 'London', , ['Crayon drawing', 'Playing with Tommy'], '', ['Eric', 'Sarah'], ,];
const Tommy = ['Tommy', 4, 'London'];
const Jim = ['Jim', 65, 'Manchester', 'Retired', ['Travel England'], 'Kelly', , , ['Sarah']];
const Kelly = ['Kelly', 65, 'Manchester', 'Retired', ['Travel England'], 'Jim', , , ['Sarah']];
const Mary = ['Mary', 66, 'Liverpool', , , 'Nicolas', , , ['Eric']];
const Nicolas = ['Nicolas', 70, 'Liverpool', 'Head of security', ['Prima violin in Liverpool orchestra'], 'Mary'];


person.forEach(elem => addPersonlegend(elem, eval(elem)));
person.forEach(elem => ['spouse', 'parents', 'children', 'sibllins'].forEach(elem1 => addFamilyTies(elem, elem1)));



function addPersonlegend(person, characteristics) {
  familyTree[person] = {};
  for (let i = 0; i < legend.length; i++) {
    familyTree[person][legend[i]] = characteristics[i] || 'unknown';
  }
}

function addFamilyTies(firstName, key) {
  let relatives = familyTree[firstName][key];
  if (relatives !== undefined && relatives !== 'unknown') {
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
