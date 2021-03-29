const questionsArr = [
  {question: 'Number("false") convertion returns number 0', answer: false},
  {question: 'The value of variable let can\'t be changed after initialization', answer: false},
  {question: 'Math object has method for square root calculation', answer: true},
  {question: 'The result of logical operation execution is boolean', answer: false},
  {question: 'JS is too complicated and can\'t be learned', answer: false}
];

function isStatementTrue(){
  let rightAnswers = 0, 
      wrongAnswers = 0;
    for(let e of questionsArr){
      askQuestion(e.question, e.answer) ? rightAnswers++ : wrongAnswers++;
    }
    alert(`Rigth anwers: ${rightAnswers}.\nWrong answers: ${wrongAnswers}.`);
}

function askQuestion(question, answer){
  return confirm(question) === answer ? true : false;
}

isStatementTrue();