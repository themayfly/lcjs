function countVowels(input) {
  if (!input) {
    return 0
  }
  let count = 0
  const vowels = ['a','e','i','o','u', 'A','E','I','O','U']
  for (var v of input) {
    if (vowels.includes(v)) {
      count++
    }
  } 
  return count
}

console.log('#### answer is ', countVowels('anehizxcv'))