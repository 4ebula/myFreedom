const CustomError = require("../extensions/custom-error");

module.exports = function variableChanger(x, y) {
  x *= y;
  y = x / y;
  x /= y;
  return [x, y];
};
