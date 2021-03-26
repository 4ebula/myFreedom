document.querySelector('.btn-block').addEventListener('click', () => {
  event.target.classList.contains('btn-1') && displaySalary();
  event.target.classList.contains('btn-2') && getString();
});


const salaries = [];

const calcSalaryAverage = () => salaries.length ? calcSalarySum() / salaries.length : 0;
const calcSalarySum = () => salaries.reduce((acc, e) => acc + e, 0);
const getEnteredSalaries = () => salaries.join('$ + ') + '$';
const getSalaryValue = () => prompt(salaries.length ? getTextStr() : 'Enter salary');
const getLitresValue = () => prompt('Enter litres value');

// Gets salaries
function getTextStr() {
  return `Sum: ${calcSalarySum()}$\nAverage: ${calcSalaryAverage()}$\nLog: ${getEnteredSalaries()}`;
}

const displaySalary = function () {
  let curSalary = checkInput(getSalaryValue);
  if (~curSalary) {
    salaries.push(curSalary);
    displaySalary();
  }
  else alert(getTextStr());
}

function checkInput(continueFunc) {
  let curValue = continueFunc();
  switch (true) {
    case curValue === null: return -1;
      break;
    case curValue === '':
    case Number.isNaN(+curValue):
    case +curValue < 0: {
      if (confirm('Wrong type of entered data. Continue?')) return checkInput(continueFunc);
      else return -1;
    }
      break;
    default: return +curValue;
      break;
  }
}


// Get litres suffixes
function getString() {
  let curValue = checkInput(getLitresValue);

  if (~curValue) alert(curValue + getLitres(curValue));
}

function getLitres(amount) {
  console.log(amount);
  const str = 'литр';
  switch (true) {
    case amount === 1: return ` ${str}`;
      break;
    case amount > 1 && amount < 5: return ` ${str}а`;
      break;
    case amount > 20: return getLitres(amount % 10);
      break;
    default: return ` ${str}ов`;
      break;
  }
}

