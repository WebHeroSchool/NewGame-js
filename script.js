const questions = [
  {question:'Это первый вопрос?', currentAnswer:'Да'},
  {question:'Это второй вопрос?', currentAnswer:'Да'},
  {question:'Это третий вопрос?', currentAnswer:'Нет'}
]

const сurrentResult = questions.filter((item) =>
      item.currentAnswer === 'Да')

        console.log(сurrentResult);

const unCurrentResult = questions.filter((item) =>
      item.currentAnswer === 'Нет')

        console.log(unCurrentResult);
