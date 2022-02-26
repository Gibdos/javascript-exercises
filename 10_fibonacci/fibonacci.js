const fibonacci = function (num) {
	if (num < 0) {
		return "OOPS";
	} else {
		var num1 = 0;
		var num2 = 1;
		var sum;
		for (i = 1; i < num; i++) {
			sum = num1 + num2; // 1, 2, 3,
			num1 = num2; // 1, 1, 2,
			num2 = sum; // 1, 2, 3,
		}
		return num2;
	}
};

// Do not edit below this line
module.exports = fibonacci;
