document.querySelector('button').addEventListener('click', calculate);

function calculate(){
  let values = document.querySelectorAll('input[type="text"]');
  let mass = values[0].value, velocity = values[1].value;
  let answer = document.createElement('div');
  answer.className = 'answer';
  document.querySelector('button').after(answer);
  Number.isNaN(velocity) || Number.isNaN(mass);
  velocity < 0;
  amswer = m * c**2 / (Math.sqrt(1 - v**2 / c**2)) - m * c**2;
  /* ряд маклорена разложение */
}