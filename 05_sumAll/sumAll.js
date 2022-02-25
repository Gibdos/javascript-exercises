const sumAll = function(firstInt, secondInt) {
    let arrNumbers = [];
    let totalSum = 0;
    
    if (firstInt < 0 || secondInt < 0 || typeof firstInt != "number" || typeof secondInt != "number" ) {
        return 'ERROR'
    }else if (firstInt < secondInt) {
        for (i = firstInt; i <= secondInt; i++) {
            arrNumbers.push(i);
        }
        for (i = 0; i <= arrNumbers.length; i++) {
            totalSum = totalSum + i;
        }
    } else if (firstInt > secondInt) {
        for (i = secondInt; i <= firstInt; i++) {
            arrNumbers.push(i);
        }
        for (i = 0; i <= arrNumbers.length; i++) {
            totalSum = totalSum + i;
        }
    } else {

    }
    return totalSum;
    };

// Do not edit below this line
module.exports = sumAll;
