class Student {
	constructor(name, age) {
		this.name = name;
		this.age = age;
		this.school = 'DECODELAB';
	}
	plusAge() {
		this.age = this.age + 1;
	}
}
const s1 = new Student('David', 20);
const s2 = new Student('Emily', 21);
console.log('s1: ', s1);
console.log('s2: ', s2);
[s1, s2].forEach((el) => el.plusAge());
console.log('s1: ', s1);
console.log('s2: ', s2);
