function reverseString(input) {
  if (!input) {
    return ''
  } else {
    return input.slice(-1) + reverseString(input.substr(0, input.length-1))
  }
}

var reversed = reverseString('abcd')
console.log('#### recursice answer = ', reversed)
exports.reverseString = reverseString