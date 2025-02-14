const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, currentValue) => total + currentValue, 0);
};

const multiply = function(array) {
  return array.reduce((total, currentValue) => total * currentValue);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	if (a === 0){
    return 1;
  }
  let result = a;
  for (let i = (a - 1); i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
