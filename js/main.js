const [spanHr, spanMin, spanSec] = document.querySelectorAll('span');

setInterval(() => {
	const hr = new Date().getHours();
	const min = new Date().getMinutes();
	const sec = new Date().getSeconds();

	spanHr.innerText = checkLength(hr);
	spanMin.innerText = checkLength(min);
	spanSec.innerText = checkLength(sec);
}, 1000);

function checkLength(el) {
	if (String(el).length < 2) {
		return (el = '0' + el);
	} else {
		return el;
	}
}
