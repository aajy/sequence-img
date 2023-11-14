const p = document.querySelector('p');
const [spanHr, spanMin, spanSec] = document.querySelectorAll('span');

setInterval(() => {
	const hr = new Date().getHours();
	const min = new Date().getMinutes();
	const sec = new Date().getSeconds();

	spanHr.innerText = checkLength(hr);
	spanMin.innerText = checkLength(min);
	spanSec.innerText = checkLength(sec);

	if (0 <= sec && sec < 21) {
		p.style.backgroundColor = '#333';
		spanSec.style.color = '#eee';
	}
	if (21 <= sec && sec < 41) {
		p.style.backgroundColor = '#888';
		spanSec.style.color = 'orange';
	}
	if (41 <= sec && sec < 61) {
		p.style.backgroundColor = '#ccc';
		spanSec.style.color = 'red';
	}
}, 1000);

function checkLength(el) {
	if (String(el).length < 2) {
		return (el = '0' + el);
	} else {
		return el;
	}
}
