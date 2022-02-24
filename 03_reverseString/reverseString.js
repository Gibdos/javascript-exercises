const reverseString = function(string) {
    let splitString = string.split("");
    let reverseArray = splitString.reverse();
    let stringReversed = reverseArray.join("")
    return stringReversed
};

// Do not edit below this line
module.exports = reverseString;
