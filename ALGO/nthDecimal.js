function convert(num) {
  const DIGITS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  let result = '';
  while (num > 0) {
    result = DIGITS[num % DIGITS.length] + result;
    num = Math.floor(num / DIGITS.length);
  }
  return result;
}


