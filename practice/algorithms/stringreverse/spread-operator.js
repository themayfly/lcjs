function reverseString(input) {
  if (!input) {
    return ''
  } else {
    return [...input].reverse().join('')
  }
}

var reversed = reverseString('abcd')
console.log('#### spread answer = ', reversed)
exports.reverseString = reverseString