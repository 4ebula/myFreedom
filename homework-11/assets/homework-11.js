const counterDisplay = document.querySelector('.display');
let count = createCounter();
const colorList = ['white', 'yellow', 'orange', 'white'];
const fontRange = [9, 32];
let {'font-size': fontSize} = getComputedStyle(counterDisplay);
counterDisplay.style.fontSize = fontSize;

document.querySelector('.counter').addEventListener ('click', () => { 
  event.target.classList.contains('add') && (counterDisplay.textContent = `00${count()}`.slice(-3));
  event.target.classList.contains('reset') && reset();
});
document.querySelector('.visual').addEventListener ('click', () => { 
  event.target.classList.contains('change-bg') && changeBackground();
  event.target.classList.contains('change-font') && changeFont(event.target);
});

function createCounter() {
  let counter = 0;
  return function() {
    return ++counter;
  }
}

function reset() {
  counterDisplay.textContent = `000`;
  count = createCounter();
}

function changeBackground() {
  const currentColor = counterDisplay.classList[1];
  const colorIndex = colorList.findIndex((e) => e === currentColor);
  const nextColor = colorList[colorIndex + 1];
  counterDisplay.classList.remove(currentColor);
  counterDisplay.classList.add(nextColor);
}

function changeFont(button) {
  fontSize = parseInt(counterDisplay.style.fontSize, 10);
  if(button.classList.contains('increase')) {
    if(fontSize < fontRange[1]) fontSize++;
  }
  else {
    if(fontSize > fontRange[0]) fontSize--;
  }
  counterDisplay.style.setProperty('font-size', `${fontSize}px`);
}

