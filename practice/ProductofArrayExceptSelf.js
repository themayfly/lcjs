function doit(input) {
  if (!input || !input.length) {
    return []
  } 
  var all = input.reduce((sum, el) => sum *= (el || 1), 1)
  return input.map(el => el ? all / el : 0)
}

console.log('#### answer is ', doit([1,2,3,4,6,7,8,9,10]))