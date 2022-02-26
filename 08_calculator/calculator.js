const add = function (x, y) {
	return x + y;
};

const subtract = function (x, y) {
	return x - y;
};

const sum = function ([...x]) {
	if (x.length != 0) {
		let sumUp = x.reduce(function (x, y) {
			return x + y;
		});
		return sumUp;
	} else {
		return 0;
	}
};

const multiply = function (x) {
	let sumMult = x.reduce(function (x, y) {
		return x * y;
	});
	return sumMult;
};

const power = function (x, y) {
	return x ** y;
};

const factorial = function (x) {
	let fact = 1;
	for (i = 1; i <= x; i++) {
		fact = fact * i;
	}
	return fact;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
