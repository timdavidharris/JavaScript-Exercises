const ftoc = function(fahrenheit) {
  if (fahrenheit - 32 === 0){
    return 0;
  } else {
    let conversion = (fahrenheit - 32) * (5 / 9);
    let conversionRounded = Math.round(conversion * 10) / 10;
    return conversionRounded;
  }
};

const ctof = function(celsius) {
  let conversion = celsius * (9 / 5) + 32;
  let conversionRounded = Math.round(conversion * 10) / 10
  return conversionRounded;
};

module.exports = {
  ftoc,
  ctof
};
