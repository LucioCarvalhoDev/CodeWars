function add(a, b) {
	const len = a.length >= b.length ? a.length : b.length;
	const aArr = a.padStart(len, '0').split('').reverse();
	const bArr = b.padStart(len, '0')
		.split('')
		.reverse();

	const res  = [0];
	for (let i = 0; i < len; i++) {
		let n0 = res[i] || 0;
		let n1 = aArr[i] || 0;
		let n2 = bArr[i] || 0;

		let sum = String(+n1 + +n2 + +n0);
		if (sum.length == 1) {
			res[i] = sum;
		} else {
			res[i] = sum.substr(-1);
			res[+i + 1] = sum[0];
		}
	}

	return res.reverse().join('');
}

console.log(add('111', '222'));
console.log(add('15', '15'));
console.log(add('2009', '201'));
