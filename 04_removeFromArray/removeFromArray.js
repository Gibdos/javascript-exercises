const removeFromArray = function(parameterArray, ...parameter) {
    let arr = Array.from(parameterArray);
    let forDeletion = parameter;
    arr = arr.filter(item => !forDeletion.includes(item))
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
