/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if (dividend === -Math.pow(2, 31) && divisor === -1) {
    return Math.pow(2, 31) - 1;
  }
  if (dividend === 0) {
      return 0;
  } 
  if (divisor === 1) {
      return dividend;
  }
  let sign = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0) ? 1 : -1; 
  dividend = Math.abs(dividend), divisor = Math.abs(divisor);
  let mod, div = 0;
  while (dividend >= divisor) {
      div++;
      dividend -= divisor;
  }
  return sign > 0 ? div : -div;
     
};