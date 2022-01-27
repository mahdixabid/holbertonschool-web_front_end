function countPrimeNumbers() {
	for (let i = 2; i <= 100; i++) {
		let flag = 0;

		for (let j = 2; j < i; j++) {
			if (i % j == 0) {
				flag = 1;
				break;
			}
		}

		if (i > 1 && flag == 0) {
			console.log(i);
		}
	}
}

const {performance} = require('perf_hooks');
let t0 = performance.now();

for (let i = 0; i < 100; i++) {
	countPrimeNumbers();
}

let t1 = performance.now();

console.log('Execution time of calculating prime numbers 100 times was ' + (t1 - t0) + ' milliseconds.');