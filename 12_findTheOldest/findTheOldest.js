const findTheOldest = function (obj) {
	let currentYear = new Date().getFullYear();
	obj.forEach((element) => {
		if (element.yearOfDeath === undefined) {
			element.yearOfDeath = currentYear;
			element.age = element.yearOfDeath - element.yearOfBirth;
		} else {
			element.age = element.yearOfDeath - element.yearOfBirth;
		}
	});
	obj.sort((ob1, ob2) => {
		return ob1.age < ob2.age ? 1 : -1;
	});
	return obj[0];
};

// Do not edit below this line
module.exports = findTheOldest;
