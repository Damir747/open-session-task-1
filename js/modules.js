const CLOSED_CLASS = 'accordion--close';
const OPEN_CLASS = 'accordion--open'
const arrQuestionItems = document.querySelectorAll('.questions__item');
let arrOpenList = [];
const MAX_COUNT = 3;

function handleOnClick(evt) {
	const curElement = evt.currentTarget;
	curElement.classList.toggle(CLOSED_CLASS);
	curElement.classList.toggle(OPEN_CLASS);
	const questionElement = curElement.querySelector('.questions__answer');
	if (questionElement) {
		if (curElement.classList.contains(OPEN_CLASS)) {
			questionElement.style.maxHeight = '1000px';
			questionElement.style.marginTop = '29px';
			arrOpenList.push(curElement);
		} else {
			questionElement.style.maxHeight = 0;
			questionElement.style.marginTop = 0;
			arrOpenList = arrOpenList.filter(el => el !== curElement);
		}
		while (arrOpenList.length > MAX_COUNT) {
			const el = arrOpenList.shift();
			handleOnClick({ 'currentTarget': el });
		}
	}
};

arrQuestionItems.forEach((el) => {
	el.classList.add(CLOSED_CLASS);
	el.addEventListener('click', handleOnClick);
	const questionElement = el.querySelector('.questions__answer');
	if (questionElement) {
		questionElement.style.display = 'block';
		questionElement.style.marginTop = 0;
		questionElement.style.maxHeight = 0;
		questionElement.style.overflow = 'hidden';
		questionElement.style.transition = 'max-height 1.5s, height 1.5s, margin-top 1.5s';
	}
});

