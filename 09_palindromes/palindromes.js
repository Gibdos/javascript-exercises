const palindromes = function (string) {
	const regEx = /[^a-zA-Z0-9]/g; // RegEx to remove anything but characters and numbers
	const cleanString = string.replaceAll(regEx, ""); // Remove all punctuation from string

	function cleanUp(toClean) {
		// Reverse the string
		const testString = toClean;
		// console.log(testString);
		const splitString = testString.split(""); // Turn all seperate characters into an array
		// console.log(splitString);
		const reverseArr = splitString.reverse(); // Reverse the array
		// console.log(reverseArr);
		const joinedString = reverseArr.join(""); // Turn the reversed array into a string
		// console.log(joinedString);
		const finalString = joinedString.toUpperCase(); // Make the reversed string UPPERCASE
		// console.log(finalString);
		return finalString;
	}

	let finalString = cleanUp(cleanString); // Make a copy of the original string (without puncuation) and reverse it
	let firstString = cleanString.toUpperCase(); // Make the original string (without puncuation) UPPERCASE
	return finalString == firstString ? true : false; // Compare the reversed string with the original string (without punctuation)
};

// Do not edit below this line
module.exports = palindromes;
