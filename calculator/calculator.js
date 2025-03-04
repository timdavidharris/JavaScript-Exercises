const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  if (num === 0) {
    return 1; 
  }
  let product = 1;
  for (let i = num; i > 0; i--) {
    product *= i;
  }
  return product;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
