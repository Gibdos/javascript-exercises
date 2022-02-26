const getTheTitles = function (obj) {
	const titles = new Array(0); // new empty array
	obj.forEach(function getTitle(element) {
		//for each entry in obj
		titles.push(element.title); // add obj.title to new array
	});
	return titles; // return the new array
};
// Do not edit below this line
module.exports = getTheTitles;
