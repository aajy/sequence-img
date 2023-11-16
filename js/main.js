const main = document.querySelector('main');
const screen = document.querySelector('.screen');
const em = screen.querySelector('em');
const numbers = screen.querySelectorAll('span');
const btns = document.querySelectorAll('nav span');
const btnAuto = document.querySelector('.auto');

const data = [
	{ cond: new Date().getHours() >= 5 && new Date().getHours() < 11, name: 'moring' },
	{ cond: new Date().getHours() >= 11 && new Date().getHours() < 16, name: 'afternoon' },
	{ cond: new Date().getHours() >= 16 && new Date().getHours() < 20, name: 'evening' },
	{ cond: new Date().getHours() >= 20 || new Date().getHours() < 5, name: 'night' },
];

//특정함수에 콜백함수를 전달할때 함수호출구문이 아닌 정의문형태로 전달
//setWatch처럼 함수명만 넣으면 정의형태이기 때문에 바로 등록가능
setInterval(setWatch, 1000);

//changeTheme의 경우는 data는 인수를 전달해야 되기때문에 ()를 붙여야함
//()를 붙이는 순간에 정의형태가 아닌 호출형태로 변경되므로 다시 익명함수로 호출문을 wrapping해서 정의형태로 변경
let timer = setInterval(() => changeTheme(data), 1000);

btns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		btns.forEach((btn) => btn.classList.remove('on'));
		e.currentTarget.classList.add('on');

		clearInterval(timer);
		main.className = '';
		main.classList.add(e.currentTarget.innerText.toLowerCase());
	});
});

//auto버튼 클릭시 다시 반복 테마변경기능 실행하면서
//모든 버튼 활성화
btnAuto.addEventListener('click', () => {
	timer = setInterval(() => changeTheme(data), 1000);
	btns.forEach((btn) => btn.classList.remove('on'));
});

function setWatch() {
	em.innerText = new Date().getHours() < 12 ? 'am' : 'pm';
	getTime().forEach((num, idx) => setTime(num, idx));
}

function getTime() {
	const now = new Date();
	let hr = now.getHours();
	let min = now.getMinutes();
	let sec = now.getSeconds();

	//현재시간값이 13이상이되면 12를 뺀값을 hr로 리턴
	hr = hr > 12 ? hr - 12 : hr;
	return [hr, min, sec];
}

function setTime(num, index) {
	numbers[index].innerText = num < 10 ? '0' + num : num;
}

function changeTheme(info) {
	//전역 data를 바로 활용하는것이 아닌 info라는 파라미터를 통해서 전달받도록 처리
	//const hr = new Date().getHours();
	main.className = '';

	info.forEach((el) => {
		if (el.cond) main.classList.add(el.name);
	});
}
