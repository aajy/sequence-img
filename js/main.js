const main = document.querySelector('main');
const btns = main.querySelectorAll('li');
const boxs = main.querySelectorAll('article');
const txts = main.querySelectorAll('h1');

btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		if (btns[idx].classList.contains('on')) return;
		activate(btns, idx);
		activate(boxs, idx);
	});
});

function activate(arr, idx) {
	arr.forEach((el) => {
		el.classList.remove('on');
	});
	arr[idx].classList.add('on');
}

splitText(txts[0], 0.2);
splitText(txts[1], 0.1);
function splitText(el, interval) {
	let tags = '';
	let count = 0;
	for (let letter of el.innerText) {
		tags += `<span style='transition-delay:${interval * count}s;'>${letter}</span>`;
		count++;
	}
	el.innerHTML = tags;
}
