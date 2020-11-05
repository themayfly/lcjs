function reverseString(input) {
  if (!input) {
    return ''
  } else {
    return input.split('').reduce((sum, el) => el + sum, '')
  }
}

var reversed = reverseString('abcd')
console.log('#### reduce answer = ', reversed)
exports.reverseString = reverseString