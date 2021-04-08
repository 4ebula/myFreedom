const buttons = document.querySelector('.buttons');
const blocks = [];
let inputText;
buttons.addEventListener('click', () => {
  if (event.target.tagName === 'BUTTON') {
    blocks.forEach((e) => {
      e.classList.remove('show');
      e.classList.add('hide')
    });
    let pointer = -1;
    switch(true) {
      case event.target.dataset.blockName === 'quiz': '1';
      break;
      case event.target.dataset.blockName === 'input-count': pointer = 0;
      
      break;
      case event.target.dataset.blockName === 'dsp-types': pointer = 1;
        break;
    }
    blocks[pointer].classList.remove('hide');
    blocks[pointer].classList.add('show');
  }
  if (blocks[0].classList.contains('show')) {
    console.log(blocks[0].querySelector('textarea'));
    console.log(inputedText.innerHTML);
    let content = blocks[0].querySelector('textarea').shadowRoot.querySelector('div').textContent;
    blocks.addEventListener('keydown', calcLetterAmount('a', content));
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

const str = 'aAa';

const quizTable = [
  {
    q: 'Who\'s to blame for the whole planet suffering from COVID?',
    a: 'China',
  },
  {
    q: 'Name the creator of periodic table.',
    a: ['Mendeleev', 'Dmitri'],
  },
  {
    q: 'Name the creator of relativity theory.',
    a: ['Einstein', 'Albert'],
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
    a: [['Shishkin', 'Ivan'], ['Savitsky', 'Konstantin']],
  },
  {
    q: 'Name the first man on the Moon.',
    a: ['Armstrong Neil'],
  },
];

(function () {
  const divInput = document.createElement('div');
  const text = document.createElement('textarea');
  text.id = 'inputedText';
  const paragraf = document.createElement('p');
  const counter = document.createElement('span');
  divInput.className = 'input-count hide';
  paragraf.textContent = 'Count: ';
  counter.textContent = '0';
  paragraf.appendChild(counter);
  divInput.appendChild(text);
  divInput.appendChild(paragraf);
  field.appendChild(divInput);
  blocks.push(field.querySelector('.input-count'));
})();

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

function calcLetterAmount(key, str) {
  let reg = new RegExp(key, 'gi');
  console.log('123');
  return str.match(reg).length;
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

function logDataTypes() {
  dataTypes.forEach((e) => console.log(getDataTypesInfo(e)));
}
