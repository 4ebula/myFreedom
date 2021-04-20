/** SLEEP SORT ***/
// const arr = [10, 706, 40, 20, 105, 246, 1];
// arr.forEach((e) => setTimeout(() => console.log(e), e));


// function throwError() {
//   console.log('error');
// }

// let timerId = setTimeout(throwError, 3000);
// setTimeout(() => clearTimeout(timerId), 4000);


// const intervalId = setInterval(() => {
//   console.log(String.fromCharCode(Math.trunc(Math.random() * 100 + 65)));
// }, 10);

// setTimeout(() => {
//   clearInterval(intervalId);
// }, 10000);

/******** LIVE TIMER **********/
// const clock = document.querySelector('.clock');

// function getTime() {
//   const dateNow = new Date();
//   return {
//     h: dateNow.getHours(),
//     m: dateNow.getMinutes(),
//     s: dateNow.getSeconds(),
//   };
// }

// function setTime() {
//   const {h, m, s} = getTime();
//   clock.innerHTML = `${('0' + h).slice(-2)} : ${('0' + m).slice(-2)} : ${('0' + s).slice(-2)}`;
// }

// const timer = setInterval(setTime, 1000);

// const color = setInterval(() => {
//   clock.classList.contains('color') ? clock.classList.remove('color') :clock.classList.add('color');
// }, 20);
const people = {
  name: 'John',
  money: 1,
  person: [{
    name: 'John1',
    money: 10,
    person: [{
      name: 'John11',
      money: 100,
      person: [{
        name: 'John111',
        money: 1000,
      },
      {
        name: 'John112',
        money: 1000,
      }],
    },
    {
      name: 'John12',
      money: 100,
    }],
  },
  {
    name: 'John2',
    money: 10,
    person: [{
      name: 'John21',
      money: 100,
    },
    {
      name: 'John22',
      money: 100,
    },
    {
      name: 'John23',
      money: 100,
    }],
  },
  {
    name: 'John3',
    money: 10,
  }],
};

function countStolenMoney({ person, money }) {
  let amount = money;
  if (person) {
    amount += person.reduce((acc, e) => acc + countStolenMoney(e), 0);
  }
  return amount;
}
console.log(countStolenMoney(people));

input.addEventListener('change', () => {
  console.log('change');
});
input.addEventListener('input', () => {
  console.log('input');
});
input.addEventListener('focus', () => {
  console.log('focus');
});
input.addEventListener('blur', () => {
  console.log('blur');
});
input.addEventListener('cut', () => {
  console.log('cut');
});
input.addEventListener('copy', () => {
  console.log('copy');
});
input.addEventListener('paste', () => {
  console.log('paste');
});