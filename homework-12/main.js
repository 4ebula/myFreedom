const input = document.querySelector('input');
const tooltip = document.querySelector('.tooltip');
const button = document.querySelector('button');
let checkInputValue = createCheckInputValue();

input.addEventListener('focus', () => {
  input.addEventListener('input', function () {
    switchInputState(false);
    switch (true) {
      case this.value.length === 0: tooltip.textContent = 'Password must not be empty';
        break;
      case this.value.length < 5: tooltip.textContent = 'Password must be longer than 5 characters';
        break;
      case this.value.length > 20: tooltip.textContent = 'Password must be shorter than 20 characters';
        break;
      default: tooltip.textContent = '';
        switchInputState(true);
    }
  });
});


function switchInputState(switcher) {
  if (switcher) {
    input.classList.remove('error');
    input.classList.add('valid');
    tooltip.hidden = true;
  }
  else {
    input.classList.add('error');
    input.classList.remove('valid');
    tooltip.hidden = false;
  }
}

function buttonEvent() {
  if (input.classList.contains('valid')) {
    let n = checkInputValue(input.value)
    switch (n) {
      case true: {
        document.querySelector('.container').innerHTML = '';
        showModal();
      }//delete all, create logon welocome
        break;
      case -1: {
        disableInput();
        checkInputValue = createCheckInputValue();
      }
        break;
      default: {
        tooltip.hidden = false;
        tooltip.textContent = `You have ${n} attempts left`;
      }
        break;
    }
    console.log(n);
    console.log(input.value);
  }
}
button.addEventListener('click', buttonEvent);

function createCheckInputValue() {
  let counter = 2;
  const password = 'myFreedom-2011';
  return function (inputStr) {
    return inputStr === password ? true : (counter === 0 ? -1 : counter--);
  };
}

function disableInput() {
  let timer = 10;
  input.readOnly = true;
  input.className = '';
  input.value = '';
  tooltip.hidden = false;
  button.removeEventListener('click', buttonEvent);
  /*
  let cooldown = setInterval(() => {
    console.log('tic');
    tooltip.textContent = `Wait ${('0' + timer--).slice(-2)} seconds`;
  }, 1000);
  */
  let cooldownHandler = setTimeout(function cooldown() {
    tooltip.textContent = `Wait ${('0' + timer--).slice(-2)} seconds`;
    setTimeout(cooldown, 1000);
  }, 0);
  setTimeout(() => {
    input.readOnly = false;
    tooltip.hidden = true;
    // clearInterval(cooldown);
    clearTimeout(cooldownHandler);
    button.addEventListener('click', buttonEvent);
  }, timer * 1000);
}

function showModal() {
  const modal = document.createElement('div');
  const h3 = document.createElement('h3');
  const p = document.createElement('p');
  h3.textContent = 'Welcome back';
  p.textContent = 'We realy missed you!'
  modal.appendChild(h3);
  modal.appendChild(p);
  document.querySelector('.wrapper').appendChild(modal);
  modal.classList.add('modal');
  setTimeout(() => {
    modal.classList.add('slide');
  }, 20);
  setTimeout(() => {
    modal.classList.remove('slide');
  }, 1500);
  
}
// TODO: Если пароль введен правильно, то появится сообщение 
// “Добро пожаловать” и поле станет недоступным.