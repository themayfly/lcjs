

const factoringNumbers = input => {
  const result = [];
  for (let i = 1; i <= (input/2); i++) {
    let mod = input % i;
    if (mod === 0) {
      if (!result.includes(i)) {
        result.push(i);
      }
      if (!result.includes(input / i)) {
        result.push(input / i);
      }
    }
  }
  return result.sort((a, b) => (a - b));
}


console.log('#### result is ', factoringNumbers(9999));
