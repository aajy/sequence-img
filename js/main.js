const h1 = document.querySelector('h1');
const [btnStart, btnStop] = document.querySelectorAll('button');
let num = 0;
let timer = null;

timer = setInterval(() => {
	h1.innerText = num++;
}, 1000);

btnStop.addEventListener('click', () => {
	clearInterval(timer);
});

btnStart.addEventListener('click', () => {
	timer = setInterval(() => {
		h1.innerText = num++;
	}, 1000);
});
