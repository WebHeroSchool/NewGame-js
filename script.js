const questions = [
  {question:'2+3=?', currentAnswer:'5', slide: 1},
  {question:'2x2=?', currentAnswer:'4', slide: 2},
  {question:'13-4=?', currentAnswer:'7',slide: 3},
  {question:'10/2=?', currentAnswer:'5', slide: 4}
]

let num = 0;

function showResult() {
  questions.forEach((item) => {
    let card = prompt(item.question);
	  if (item.currentAnswer === card) {
  	num++;
    }
  })
}

showResult();

let answers = document.querySelector('.currentAnswer');
answers.innerHTML = 'Количество правильных ответов: ' + num;

const nextButton = document.getElementById('next');

nextButton.addEventListener('click',(event) => {
  console.log('next');
});

const previousButton = document.getElementById('previous');

previousButton.addEventListener('click',(event) => {
  console.log('previous');
});

function showSlide() {
  questions.forEach((item) => {
    if (item.currentAnswer) {
      console.log('Номер слайда - '  + item.slide)
    }
  })
}

showSlide();
