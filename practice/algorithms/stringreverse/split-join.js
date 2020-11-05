function reverseString(input) {
  if (!input) {
    return ''
  } else {
    return input.split('').reverse().join('')
  }
}

var reversed = reverseString('abcd')
console.log('#### split join answer = ', reversed)
exports.reverseString = reverseString