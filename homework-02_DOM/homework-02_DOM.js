document.querySelector('button').addEventListener('click', calculate);
window.addEventListener('keydown', () => {
  if(event.code == 'Enter' || event.code == 'NumpadEnter' ) calculate()});
const speeOfLight = 299792458;


function calculate(){
  let values = document.querySelectorAll('input[type="text"]');
  let mass = +values[0].value, velocity = +values[1].value;
  switch (true) {
    case Number.isNaN(velocity): 
    case Number.isNaN(mass):
      showError.textContent = 'Input value is not a number!'
      showError.hidden = false;
      return;
    case velocity < 0:
    case mass < 0:
      showError.textContent = 'Input value cannot be negative!'
      showError.hidden = false;
      return;
    default: showError.hidden = true;
      break;
  }
  let energy = calcEnergy(mass, velocity);
  answerField.textContent = `Kinetic energy = ${energy} J`;
  
}

/* Relativic energy through Maclauren series */
function calcEnergy(mass, velocity, n = 1){
  let valueFactor = mass * (Math.pow(velocity, 2 * n) / Math.pow(speeOfLight, 2 * n - 2));
  let factor = factorialOdd(2 * n - 1) / (Math.pow(2, n) * factorial(n));
  let energy = factor * valueFactor;
  console.log(factor, valueFactor, energy);
  if(energy.toFixed(4) == 0) return 0;
  else return energy + calcEnergy(mass, velocity, n + 1);

}

function factorial(n){
  if(n == 1) return 1;
  else return n * factorial(n - 1);
}

function factorialOdd(n){
  if(n == 1) return 1;
  else return n * factorialOdd(n - 2);
}