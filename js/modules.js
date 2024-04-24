const CLOSED_CLASS = 'accordion--close';
const OPEN_CLASS = 'accordion--open'
const arrQuestionItems = document.querySelectorAll('.questions__item');
let arrOpenList = [];
const MAX_COUNT = 3;

// ? Ещё реализовать:
// - У выпадающих элементов при раскрытии ответа на вопрос через `стрелку` и скрытии его через `стрелку` проигрывается анимация плавного выпадения.
// - С аккордеонами можно взаимодействовать с помощью мышки и клавиатуры.

function handleOnClick(evt) {
	const curElement = evt.currentTarget;
	curElement.classList.toggle(CLOSED_CLASS);
	curElement.classList.toggle(OPEN_CLASS);

	const question = curElement.querySelector('.questions__answer');
	console.log(question.offsetHeight);
	if (curElement.classList.contains(OPEN_CLASS)) {
		question.style.display = 'block';
		arrOpenList.push(curElement);
	} else {
		question.style.display = 'none';
		arrOpenList = arrOpenList.filter(el => el !== curElement);
	}
	while (arrOpenList.length > MAX_COUNT) {
		const el = arrOpenList.shift();
		handleOnClick({ 'currentTarget': el });
	}
};

arrQuestionItems.forEach((el) => {
	el.classList.add(CLOSED_CLASS);
	el.addEventListener('click', handleOnClick);
});