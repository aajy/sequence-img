const [spanHr, spanMin, spanSec] = document.querySelectorAll('span');

setInterval(() => {
	const hr = new Date().getHours();
	const min = new Date().getMinutes();
	const sec = new Date().getSeconds();

	spanHr.innerText = plusZero(1);
	spanMin.innerText = plusZero(min);
	spanSec.innerText = plusZero(sec);
}, 1000);

function plusZero(el) {
	if (String(el).length < 2) {
		return (el = '0' + el);
	} else {
		return el;
	}
}
