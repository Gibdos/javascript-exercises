const ftoc = function(fahrenheit) {
  let deciRound1 = Math.round((((fahrenheit - 32) * (5 / 9)) * 1000)) / 1000;
  let deciRound2 = Math.round(deciRound1);
  let deciRound3 = (Math.round((deciRound2 - deciRound1) * 10) / 10)
  let deciFinal = deciRound2 - deciRound3;
  return deciFinal;
};

const ctof = function(celsius) {
  let deciRound1 = Math.round(((celsius * (9 / 5) + 32) * 1000)) / 1000;
  let deciRound2 = Math.round(deciRound1);
  let deciRound3 = (Math.round((deciRound2 - deciRound1) * 10) / 10)
  let deciFinal = deciRound2 - deciRound3;
  return deciFinal;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
