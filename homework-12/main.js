const input = document.querySelector('input');
const tooltip = document.querySelector('.tooltip');

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
    console.log(this.value);
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

// TODO: Добавить кнопку “Проверить пароль”, по нажатию на которую происходит сравнение введенного
// пароля со строкой  “myFreedom-2011”. Если пароль введен правильно, то появится сообщение 
// “Добро пожаловать” и поле станет недоступным. Если пароль введен неправильно 
// “Пароль введен неверно осталось 2 попытки”. Если ввести пароль 3 раза неправильно, 
//то поле становится недоступным и рядом с ним появится таймер на 30 секунд, 
// по истечению которых можно снова попробовать ввести пароль.