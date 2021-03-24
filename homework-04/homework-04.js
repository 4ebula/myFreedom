const salaries = [];

const calcSalaryAverage = () => salaries.length ? calcSalarySum() / salaries.length : 0;
const calcSalarySum = () => salaries.reduce((acc, e) => acc + e, 0);
const getEnteredSalaries = () => salaries.join('$ + ') + '$';

function getTextStr() {
  return `Sum: ${calcSalarySum()}$\nAverage: ${calcSalaryAverage()}$\nLog: ${getEnteredSalaries()}`;
}

function displaySalary() {
  let currSalary = prompt(salaries.length ? getTextStr() : 'Enter salary');
  if (~validateSalaryInput(currSalary)) {
    salaries.push(validateSalaryInput(currSalary));
    displaySalary();
  }
  else alert(getTextStr());
}

function validateSalaryInput(currSalary) {
  switch (true) {
    case currSalary === null: return -1;
      break;
    case currSalary === '':
    case Number.isNaN(+currSalary):
    case +currSalary < 0: {
      if (confirm('Wrong type of entered data. Continue?')) displaySalary();
      else return -1;
    }
      break;
    default: return +currSalary;
      break;
  }
}

displaySalary();