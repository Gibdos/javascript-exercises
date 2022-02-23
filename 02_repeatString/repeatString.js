let shout = '';
const repeatString = function(string, num) {
    let i = 0;
    if (num < 0) {
        return "ERROR";
    } else {
    while (i < num) {
        shout += string;
        i++
    }
    let shoutOut = shout;
    shout = ''
    return shoutOut;
}
};

// Do not edit below this line
module.exports = repeatString;
