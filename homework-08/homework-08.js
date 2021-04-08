const buttons = document.querySelector('.buttons');
const blocks = [];
let inputText = '';


buttons.addEventListener('click', () => {
  if (event.target.tagName === 'BUTTON') {
    blocks.forEach((e) => {
      e.classList.remove('show');
      e.classList.add('hide')
    });
    let pointer = -1;
    switch (true) {
      case event.target.dataset.blockName === 'quiz': pointer = 0;
        break;
      case event.target.dataset.blockName === 'input-count': pointer = 1;

        break;
      case event.target.dataset.blockName === 'dsp-types': pointer = 2;
        break;
    }
    blocks[pointer].classList.remove('hide');
    blocks[pointer].classList.add('show');
  }
});

const dataTypes = [
  false,
  's',
  0,
  null,
  undefined,
  {},
  [],
  10n,
  Symbol(),
  () => { },
];

const quizTable = [
  {
    q: 'Who\'s to blame for the whole planet suffering from COVID?',
    a: 'China',
  },
  {
    q: 'Name the creator of periodic table.',
    a: 'Mendeleev',
  },
  {
    q: 'Name the creator of relativity theory.',
    a: 'Einstein',
  },
  {
    q: 'Name the capital of Germany.',
    a: 'Berlin',
  },
  {
    q: 'Number of presidents in Belarus history.',
    a: '1',
  },
  {
    q: 'Name Earth\'s natural sattelite.',
    a: 'Moon',
  },
  {
    q: 'What is the number of days in leap year?',
    a: '366',
  },
  {
    q: 'Name the author of "Morning in a Pine Forest" painting.',
    a: 'Shishkin',
  },
  {
    q: 'Name the first man on the Moon.',
    a: 'Armstrong',
  },
];

function createQuizBlock() {
  const div = document.createElement('div');
  const submitBtn = document.createElement('button');
  const ul = document.createElement('ul');
  for (let i = 0; i < quizTable.length; i++) {
    const question = document.createElement('li');
    const p = document.createElement('p');
    const answerField = document.createElement('textarea');
    answerField.className = 'answer-field';
    p.textContent = `${('0' + (i + 1)).slice(-2)}: ` + quizTable[i].q;
    question.appendChild(p);
    question.appendChild(answerField);
    ul.appendChild(question);
  }
  div.className = 'quiz hide';
  div.appendChild(ul);
  submitBtn.textContent = 'Check!';
  submitBtn.addEventListener('click', () => checkQuiz());
  div.appendChild(submitBtn);
  field.appendChild(div);
  blocks.push(field.querySelector('.quiz'));
}

createQuizBlock();
(function () {
  const divInput = document.createElement('div');
  const text = document.createElement('textarea');
  text.id = 'inputedText';
  const paragraf = document.createElement('p');
  const counter = document.createElement('span');
  counter.id = 'counter';
  divInput.className = 'input-count hide';
  paragraf.textContent = 'Count: ';
  counter.textContent = '0';
  paragraf.appendChild(counter);
  divInput.appendChild(text);
  divInput.appendChild(paragraf);
  field.appendChild(divInput);
  blocks.push(field.querySelector('.input-count'));

  window.addEventListener('keydown', () => watchKeyEvent());
  window.addEventListener('keyup', () => watchKeyEvent());
})();

function watchKeyEvent() {
  inputText = inputedText.value;
  let calcAmount = calcLetterAmount('a', inputText);
  let dispAmount = counter.textContent;
  if (calcAmount !== +dispAmount) counter.textContent = calcAmount;
}

(function () {
  const divTypes = document.createElement('div');
  divTypes.className = 'types hide';
  for (let i = 0; i < dataTypes.length; i++) {
    let temp = getDataTypesInfo(dataTypes[i]);
    const divSingleType = document.createElement('div');
    divSingleType.className = 'card';
    let ul = document.createElement('ul');
    for (const key in temp) {
      let li = document.createElement('li');
      li.textContent = `${key}: ${key === 'value' ? temp['cast to string'] : temp[key]}`;
      ul.appendChild(li);
    }
    divSingleType.appendChild(ul);
    divTypes.appendChild(divSingleType);
  }
  field.appendChild(divTypes);
  blocks.push(divTypes);
})();


function checkQuiz() {
  const answers = document.querySelectorAll('.answer-field');
  let answersArr = Object.entries(answers).map((e) => e[1].value);
  let rightAnswers = 0, wrongAnswers = 0;
  answersArr = answersArr.map((e, i) => {
    if (e === '') wrongAnswers++;
    else if (e.toLowerCase() === quizTable[i].a.toLowerCase()) {
      rightAnswers++;
      return true;
    } else {
      wrongAnswers++;
      return false;
    }
  });
  Object.entries(answers).forEach((e) => e[1].value = '');
  let message = answersArr.map((e, i) => `${('0' + i).split(-2)} - ` + (e ? 'Right' : 'Wrong') + '\n').join('');
  message += `Amount of right answers: ${rightAnswers}\nAmount of wrong answers: ${wrongAnswers}`;
  alert(message);
  blocks[0].classList.remove('show');
  blocks[0].classList.add('hide');
  window.scrollTo(0, 0);
}

function calcLetterAmount(key, str) {
  let reg = new RegExp(key, 'gi');
  return str.match(reg)?.length;
}

function getDataTypesInfo(data) {
  return {
    'value': data,
    'type': typeof data,
    'cast to boolean': !!data,
    'cast to number': typeof data === 'bigint' ? Number(data) : (typeof data === 'symbol' ? NaN : data * 1),
    'cast to string': (typeof data === 'symbol' ? 'data.toString()' : data) + '',
  };
}
