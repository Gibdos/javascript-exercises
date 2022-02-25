let arrNumbers = [];
let totalSum = 0;

const sumAll = function(firstInt, secondInt) {
    for (i = firstInt; i <= secondInt; i++) {
        arrNumbers.push(i);
    }
    for (i = 0; i <= arrNumbers.length; i++) {
        totalSum = totalSum + i;
    } return totalSum;

    // let total = arrNumbers.reduce(( previousValue, currentValue ) => previousValue + currentValue,0)
    // return total;
};

// Do not edit below this line
module.exports = sumAll;
