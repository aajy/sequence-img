const screen = document.querySelector('.screen');
const em = screen.querySelector('em');
const [spanHr, spanMin, spanSec] = screen.querySelectorAll('span');

setInterval(() => {
	let now = new Date();
	let hr = now.getHours();
	let min = now.getMinutes();
	let sec = now.getSeconds();

	em.innerText = hr < 12 ? 'em' : 'pm';

	spanHr.innerText = hr < 10 ? '0' + hr : hr;
	spanMin.innerText = min < 10 ? '0' + min : min;
	spanSec.innerText = sec < 10 ? '0' + sec : sec;
	console.log(now);
}, 1000);
