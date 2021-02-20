const questions = [
  {question:'Это первый вопрос?', currentAnswer:'Да'},
  {question:'Это второй вопрос?', currentAnswer:'Да'},
  {question:'Это третий вопрос?', currentAnswer:'Да'},
  {question:'Это следующий вопрос?', currentAnswer:'Нет'}
]

const result = questions.map((item) =>
  item.currentAnswer)

const showResult = result.filter((item) =>
  item === 'Да')

document.body.innerHTML = 'Количество правильных ответов - ' + showResult.length;
